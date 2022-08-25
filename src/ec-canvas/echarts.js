!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e((t.echarts = {}));
})(this, function (t) {
  'use strict';
  function e(t, e) {
    function n() {
      this.constructor = t;
    }
    if ('function' != typeof e && null !== e)
      throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
    c_(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  function n(t, e) {
    var n = e.browser,
      i = t.match(/Firefox\/([\d.]+)/),
      r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      o = t.match(/Edge?\/([\d.]+)/),
      a = /micromessenger/i.test(t);
    i && ((n.firefox = !0), (n.version = i[1])),
      r && ((n.ie = !0), (n.version = r[1])),
      o && ((n.edge = !0), (n.version = o[1]), (n.newEdge = +o[1].split('.')[0] > 18)),
      a && (n.weChat = !0),
      (e.svgSupported = 'undefined' != typeof SVGRect),
      (e.touchEventsSupported = 'ontouchstart' in window && !n.ie && !n.edge),
      (e.pointerEventsSupported = 'onpointerdown' in window && (n.edge || (n.ie && +n.version >= 11))),
      (e.domSupported = 'undefined' != typeof document);
    var s = document.documentElement.style;
    (e.transform3dSupported =
      ((n.ie && 'transition' in s) ||
        n.edge ||
        ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) ||
        'MozPerspective' in s) &&
      !('OTransition' in s)),
      (e.transformSupported = e.transform3dSupported || (n.ie && +n.version >= 9));
  }
  function i(t) {
    var e = {};
    if ('undefined' == typeof JSON) return e;
    for (var n = 0; n < t.length; n++) {
      var i = String.fromCharCode(n + 32),
        r = (t.charCodeAt(n) - m_) / __;
      e[i] = r;
    }
    return e;
  }
  function r(t) {
    for (var e in b_) t[e] && (b_[e] = t[e]);
  }
  function o() {
    return R_++;
  }
  function a() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    'undefined' != typeof console && console.error.apply(console, t);
  }
  function s(t) {
    if (null == t || 'object' != typeof t) return t;
    var e = t,
      n = T_.call(t);
    if ('[object Array]' === n) {
      if (!X(t)) {
        e = [];
        for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i]);
      }
    } else if (M_[n]) {
      if (!X(t)) {
        var o = t.constructor;
        if (o.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var i = 0, r = t.length; r > i; i++) e[i] = t[i];
        }
      }
    } else if (!S_[n] && !X(t) && !L(t)) {
      e = {};
      for (var a in t) t.hasOwnProperty(a) && a !== O_ && (e[a] = s(t[a]));
    }
    return e;
  }
  function l(t, e, n) {
    if (!k(e) || !k(t)) return n ? s(e) : t;
    for (var i in e)
      if (e.hasOwnProperty(i) && i !== O_) {
        var r = t[i],
          o = e[i];
        !k(o) || !k(r) || M(o) || M(r) || L(o) || L(r) || A(o) || A(r) || X(o) || X(r)
          ? (!n && i in t) || (t[i] = s(e[i]))
          : l(r, o, n);
      }
    return t;
  }
  function u(t, e) {
    for (var n = t[0], i = 1, r = t.length; r > i; i++) n = l(n, t[i], e);
    return n;
  }
  function h(t, e) {
    if (Object.assign) Object.assign(t, e);
    else for (var n in e) e.hasOwnProperty(n) && n !== O_ && (t[n] = e[n]);
    return t;
  }
  function c(t, e, n) {
    for (var i = w(e), r = 0; r < i.length; r++) {
      var o = i[r];
      (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
    }
    return t;
  }
  function p(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
    }
    return -1;
  }
  function d(t, e) {
    function n() {}
    var i = t.prototype;
    (n.prototype = e.prototype), (t.prototype = new n());
    for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
    (t.prototype.constructor = t), (t.superClass = e);
  }
  function f(t, e, n) {
    if (
      ((t = 'prototype' in t ? t.prototype : t), (e = 'prototype' in e ? e.prototype : e), Object.getOwnPropertyNames)
    )
      for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
        var o = i[r];
        'constructor' !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
      }
    else c(t, e, n);
  }
  function g(t) {
    return t ? ('string' == typeof t ? !1 : 'number' == typeof t.length) : !1;
  }
  function v(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === I_) t.forEach(e, n);
      else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
  }
  function y(t, e, n) {
    if (!t) return [];
    if (!e) return V(t);
    if (t.map && t.map === A_) return t.map(e, n);
    for (var i = [], r = 0, o = t.length; o > r; r++) i.push(e.call(n, t[r], r, t));
    return i;
  }
  function m(t, e, n, i) {
    if (t && e) {
      for (var r = 0, o = t.length; o > r; r++) n = e.call(i, n, t[r], r, t);
      return n;
    }
  }
  function _(t, e, n) {
    if (!t) return [];
    if (!e) return V(t);
    if (t.filter && t.filter === D_) return t.filter(e, n);
    for (var i = [], r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
    return i;
  }
  function x(t, e, n) {
    if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i];
  }
  function w(t) {
    if (!t) return [];
    if (Object.keys) return Object.keys(t);
    var e = [];
    for (var n in t) t.hasOwnProperty(n) && e.push(n);
    return e;
  }
  function b(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return function () {
      return t.apply(e, n.concat(k_.call(arguments)));
    };
  }
  function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return function () {
      return t.apply(this, e.concat(k_.call(arguments)));
    };
  }
  function M(t) {
    return Array.isArray ? Array.isArray(t) : '[object Array]' === T_.call(t);
  }
  function T(t) {
    return 'function' == typeof t;
  }
  function C(t) {
    return 'string' == typeof t;
  }
  function I(t) {
    return '[object String]' === T_.call(t);
  }
  function D(t) {
    return 'number' == typeof t;
  }
  function k(t) {
    var e = typeof t;
    return 'function' === e || (!!t && 'object' === e);
  }
  function A(t) {
    return !!S_[T_.call(t)];
  }
  function P(t) {
    return !!M_[T_.call(t)];
  }
  function L(t) {
    return 'object' == typeof t && 'number' == typeof t.nodeType && 'object' == typeof t.ownerDocument;
  }
  function O(t) {
    return null != t.colorStops;
  }
  function R(t) {
    return null != t.image;
  }
  function B(t) {
    return '[object RegExp]' === T_.call(t);
  }
  function z(t) {
    return t !== t;
  }
  function E() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0, i = t.length; i > n; n++) if (null != t[n]) return t[n];
  }
  function N(t, e) {
    return null != t ? t : e;
  }
  function F(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }
  function V(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return k_.apply(t, e);
  }
  function H(t) {
    if ('number' == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }
  function W(t, e) {
    if (!t) throw new Error(e);
  }
  function G(t) {
    return null == t
      ? null
      : 'function' == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
  function U(t) {
    t[E_] = !0;
  }
  function X(t) {
    return t[E_];
  }
  function Y(t) {
    return new N_(t);
  }
  function Z(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
    return n;
  }
  function q(t, e) {
    var n;
    if (Object.create) n = Object.create(t);
    else {
      var i = function () {};
      (i.prototype = t), (n = new i());
    }
    return e && h(n, e), n;
  }
  function j(t) {
    var e = t.style;
    (e.webkitUserSelect = 'none'),
      (e.userSelect = 'none'),
      (e.webkitTapHighlightColor = 'rgba(0,0,0,0)'),
      (e['-webkit-touch-callout'] = 'none');
  }
  function K(t, e) {
    return t.hasOwnProperty(e);
  }
  function $() {}
  function Q(t, e) {
    return null == t && (t = 0), null == e && (e = 0), [t, e];
  }
  function J(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), t;
  }
  function te(t) {
    return [t[0], t[1]];
  }
  function ee(t, e, n) {
    return (t[0] = e), (t[1] = n), t;
  }
  function ne(t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
  }
  function ie(t, e, n, i) {
    return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t;
  }
  function re(t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
  }
  function oe(t) {
    return Math.sqrt(ae(t));
  }
  function ae(t) {
    return t[0] * t[0] + t[1] * t[1];
  }
  function se(t, e, n) {
    return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
  }
  function le(t, e, n) {
    return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
  }
  function ue(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  function he(t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
  }
  function ce(t, e) {
    var n = oe(e);
    return 0 === n ? ((t[0] = 0), (t[1] = 0)) : ((t[0] = e[0] / n), (t[1] = e[1] / n)), t;
  }
  function pe(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }
  function de(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }
  function fe(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), t;
  }
  function ge(t, e, n, i) {
    return (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t;
  }
  function ve(t, e, n) {
    var i = e[0],
      r = e[1];
    return (t[0] = n[0] * i + n[2] * r + n[4]), (t[1] = n[1] * i + n[3] * r + n[5]), t;
  }
  function ye(t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
  }
  function me(t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
  }
  function _e(t, e, n, i, r, o) {
    var a = i + '-' + r,
      s = t.length;
    if (o.hasOwnProperty(a)) return o[a];
    if (1 === e) {
      var l = Math.round(Math.log(((1 << s) - 1) & ~r) / j_);
      return t[n][l];
    }
    for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++;
    for (var c = 0, p = 0, d = 0; s > p; p++) {
      var f = 1 << p;
      f & r || ((c += (d % 2 ? -1 : 1) * t[n][p] * _e(t, e - 1, h, u, r | f, o)), d++);
    }
    return (o[a] = c), c;
  }
  function xe(t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
      ],
      i = {},
      r = _e(n, 8, 0, 0, 0, i);
    if (0 !== r) {
      for (var o = [], a = 0; 8 > a; a++)
        for (var s = 0; 8 > s; s++)
          null == o[s] && (o[s] = 0),
            (o[s] += ((((a + s) % 2 ? -1 : 1) * _e(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) / r) * e[a]);
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1;
        (t[0] = (e * o[0] + n * o[1] + o[2]) / i), (t[1] = (e * o[3] + n * o[4] + o[5]) / i);
      };
    }
  }
  function we(t, e, n, i, r) {
    return be($_, e, i, r, !0) && be(t, n, $_[0], $_[1]);
  }
  function be(t, e, n, i, r) {
    if (e.getBoundingClientRect && f_.domSupported && !Te(e)) {
      var o = e[K_] || (e[K_] = {}),
        a = Se(e, o),
        s = Me(a, o, r);
      if (s) return s(t, n, i), !0;
    }
    return !1;
  }
  function Se(t, e) {
    var n = e.markers;
    if (n) return n;
    n = e.markers = [];
    for (var i = ['left', 'right'], r = ['top', 'bottom'], o = 0; 4 > o; o++) {
      var a = document.createElement('div'),
        s = a.style,
        l = o % 2,
        u = (o >> 1) % 2;
      (s.cssText = [
        'position: absolute',
        'visibility: hidden',
        'padding: 0',
        'margin: 0',
        'border-width: 0',
        'user-select: none',
        'width:0',
        'height:0',
        i[l] + ':0',
        r[u] + ':0',
        i[1 - l] + ':auto',
        r[1 - u] + ':auto',
        '',
      ].join('!important;')),
        t.appendChild(a),
        n.push(a);
    }
    return n;
  }
  function Me(t, e, n) {
    for (var i = n ? 'invTrans' : 'trans', r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; 4 > u; u++) {
      var h = t[u].getBoundingClientRect(),
        c = 2 * u,
        p = h.left,
        d = h.top;
      a.push(p, d), (l = l && o && p === o[c] && d === o[c + 1]), s.push(t[u].offsetLeft, t[u].offsetTop);
    }
    return l && r ? r : ((e.srcCoords = a), (e[i] = n ? xe(s, a) : xe(a, s)));
  }
  function Te(t) {
    return 'CANVAS' === t.nodeName.toUpperCase();
  }
  function Ce(t, e, n, i) {
    return (
      (n = n || {}),
      i
        ? Ie(t, e, n)
        : tx && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Ie(t, e, n),
      n
    );
  }
  function Ie(t, e, n) {
    if (f_.domSupported && t.getBoundingClientRect) {
      var i = e.clientX,
        r = e.clientY;
      if (Te(t)) {
        var o = t.getBoundingClientRect();
        return (n.zrX = i - o.left), void (n.zrY = r - o.top);
      }
      if (be(J_, t, i, r)) return (n.zrX = J_[0]), void (n.zrY = J_[1]);
    }
    n.zrX = n.zrY = 0;
  }
  function De(t) {
    return t || window.event;
  }
  function ke(t, e, n) {
    if (((e = De(e)), null != e.zrX)) return e;
    var i = e.type,
      r = i && i.indexOf('touch') >= 0;
    if (r) {
      var o = 'touchend' !== i ? e.targetTouches[0] : e.changedTouches[0];
      o && Ce(t, o, e, n);
    } else {
      Ce(t, e, e, n);
      var a = Ae(e);
      e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3;
    }
    var s = e.button;
    return null == e.which && void 0 !== s && Q_.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
  }
  function Ae(t) {
    var e = t.wheelDelta;
    if (e) return e;
    var n = t.deltaX,
      i = t.deltaY;
    if (null == n || null == i) return e;
    var r = Math.abs(0 !== i ? i : n),
      o = i > 0 ? -1 : 0 > i ? 1 : n > 0 ? -1 : 1;
    return 3 * r * o;
  }
  function Pe(t, e, n, i) {
    if (Object.prototype.toString.call(t) === '[object HTMLBodyElement]') {
      t.addEventListener(e, n, i);
    }
  }
  function Le(t, e, n, i) {
    t.removeEventListener(e, n, i);
  }
  function Oe(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n);
  }
  function Re(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }
  function Be(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: ze,
    };
  }
  function ze() {
    ex(this.event);
  }
  function Ee(t, e, n) {
    if (t[t.rectHover ? 'rectContain' : 'contain'](e, n)) {
      for (var i = t, r = void 0, o = !1; i; ) {
        if ((i.ignoreClip && (o = !0), !o)) {
          var a = i.getClipPath();
          if (a && !a.contain(e, n)) return !1;
          i.silent && (r = !0);
        }
        var s = i.__hostTarget;
        i = s ? s : i.parent;
      }
      return r ? rx : !0;
    }
    return !1;
  }
  function Ne(t, e, n) {
    var i = t.painter;
    return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight();
  }
  function Fe(t) {
    for (var e = 0; t >= hx; ) (e |= 1 & t), (t >>= 1);
    return t + e;
  }
  function Ve(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0; ) r++;
      He(t, e, r);
    } else for (; n > r && i(t[r], t[r - 1]) >= 0; ) r++;
    return r - e;
  }
  function He(t, e, n) {
    for (n--; n > e; ) {
      var i = t[e];
      (t[e++] = t[n]), (t[n--] = i);
    }
  }
  function We(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var o, a = t[i], s = e, l = i; l > s; ) (o = (s + l) >>> 1), r(a, t[o]) < 0 ? (l = o) : (s = o + 1);
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; u > 0; ) (t[s + u] = t[s + u - 1]), u--;
      }
      t[s] = a;
    }
  }
  function Ge(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) > 0) {
      for (s = i - r; s > l && o(t, e[n + r + l]) > 0; ) (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s), (a += r), (l += r);
    } else {
      for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0; ) (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      (a = r - l), (l = r - u);
    }
    for (a++; l > a; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) > 0 ? (a = h + 1) : (l = h);
    }
    return l;
  }
  function Ue(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && o(t, e[n + r - l]) < 0; ) (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      (a = r - l), (l = r - u);
    } else {
      for (s = i - r; s > l && o(t, e[n + r + l]) >= 0; ) (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s), (a += r), (l += r);
    }
    for (a++; l > a; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1);
    }
    return l;
  }
  function Xe(t, e) {
    function n(t, e) {
      (l[c] = t), (u[c] = e), (c += 1);
    }
    function i() {
      for (; c > 1; ) {
        var t = c - 2;
        if ((t >= 1 && u[t - 1] <= u[t] + u[t + 1]) || (t >= 2 && u[t - 2] <= u[t] + u[t - 1]))
          u[t - 1] < u[t + 1] && t--;
        else if (u[t] > u[t + 1]) break;
        o(t);
      }
    }
    function r() {
      for (; c > 1; ) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, o(t);
      }
    }
    function o(n) {
      var i = l[n],
        r = u[n],
        o = l[n + 1],
        h = u[n + 1];
      (u[n] = r + h), n === c - 3 && ((l[n + 1] = l[n + 2]), (u[n + 1] = u[n + 2])), c--;
      var p = Ue(t[o], t, i, r, 0, e);
      (i += p),
        (r -= p),
        0 !== r && ((h = Ge(t[i + r - 1], t, o, h, h - 1, e)), 0 !== h && (h >= r ? a(i, r, o, h) : s(i, r, o, h)));
    }
    function a(n, i, r, o) {
      var a = 0;
      for (a = 0; i > a; a++) p[a] = t[n + a];
      var s = 0,
        l = r,
        u = n;
      if (((t[u++] = t[l++]), 0 !== --o)) {
        if (1 === i) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          return void (t[u + o] = p[s]);
        }
        for (var c, d, f, g = h; ; ) {
          (c = 0), (d = 0), (f = !1);
          do
            if (e(t[l], p[s]) < 0) {
              if (((t[u++] = t[l++]), d++, (c = 0), 0 === --o)) {
                f = !0;
                break;
              }
            } else if (((t[u++] = p[s++]), c++, (d = 0), 1 === --i)) {
              f = !0;
              break;
            }
          while (g > (c | d));
          if (f) break;
          do {
            if (((c = Ue(t[l], p, s, i, 0, e)), 0 !== c)) {
              for (a = 0; c > a; a++) t[u + a] = p[s + a];
              if (((u += c), (s += c), (i -= c), 1 >= i)) {
                f = !0;
                break;
              }
            }
            if (((t[u++] = t[l++]), 0 === --o)) {
              f = !0;
              break;
            }
            if (((d = Ge(p[s], t, l, o, 0, e)), 0 !== d)) {
              for (a = 0; d > a; a++) t[u + a] = t[l + a];
              if (((u += d), (l += d), (o -= d), 0 === o)) {
                f = !0;
                break;
              }
            }
            if (((t[u++] = p[s++]), 1 === --i)) {
              f = !0;
              break;
            }
            g--;
          } while (c >= cx || d >= cx);
          if (f) break;
          0 > g && (g = 0), (g += 2);
        }
        if (((h = g), 1 > h && (h = 1), 1 === i)) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          t[u + o] = p[s];
        } else {
          if (0 === i) throw new Error();
          for (a = 0; i > a; a++) t[u + a] = p[s + a];
        }
      } else for (a = 0; i > a; a++) t[u + a] = p[s + a];
    }
    function s(n, i, r, o) {
      var a = 0;
      for (a = 0; o > a; a++) p[a] = t[r + a];
      var s = n + i - 1,
        l = o - 1,
        u = r + o - 1,
        c = 0,
        d = 0;
      if (((t[u--] = t[s--]), 0 !== --i)) {
        if (1 === o) {
          for (u -= i, s -= i, d = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[d + a] = t[c + a];
          return void (t[u] = p[l]);
        }
        for (var f = h; ; ) {
          var g = 0,
            v = 0,
            y = !1;
          do
            if (e(p[l], t[s]) < 0) {
              if (((t[u--] = t[s--]), g++, (v = 0), 0 === --i)) {
                y = !0;
                break;
              }
            } else if (((t[u--] = p[l--]), v++, (g = 0), 1 === --o)) {
              y = !0;
              break;
            }
          while (f > (g | v));
          if (y) break;
          do {
            if (((g = i - Ue(p[l], t, n, i, i - 1, e)), 0 !== g)) {
              for (u -= g, s -= g, i -= g, d = u + 1, c = s + 1, a = g - 1; a >= 0; a--) t[d + a] = t[c + a];
              if (0 === i) {
                y = !0;
                break;
              }
            }
            if (((t[u--] = p[l--]), 1 === --o)) {
              y = !0;
              break;
            }
            if (((v = o - Ge(t[s], p, 0, o, o - 1, e)), 0 !== v)) {
              for (u -= v, l -= v, o -= v, d = u + 1, c = l + 1, a = 0; v > a; a++) t[d + a] = p[c + a];
              if (1 >= o) {
                y = !0;
                break;
              }
            }
            if (((t[u--] = t[s--]), 0 === --i)) {
              y = !0;
              break;
            }
            f--;
          } while (g >= cx || v >= cx);
          if (y) break;
          0 > f && (f = 0), (f += 2);
        }
        if (((h = f), 1 > h && (h = 1), 1 === o)) {
          for (u -= i, s -= i, d = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[d + a] = t[c + a];
          t[u] = p[l];
        } else {
          if (0 === o) throw new Error();
          for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a];
        }
      } else for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a];
    }
    var l,
      u,
      h = cx,
      c = 0,
      p = [];
    return (l = []), (u = []), { mergeRuns: i, forceMergeRuns: r, pushRun: n };
  }
  function Ye(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;
    if (!(2 > r)) {
      var o = 0;
      if (hx > r) return (o = Ve(t, n, i, e)), void We(t, n, i, n + o, e);
      var a = Xe(t, e),
        s = Fe(r);
      do {
        if (((o = Ve(t, n, i, e)), s > o)) {
          var l = r;
          l > s && (l = s), We(t, n, n + l, n + o, e), (o = l);
        }
        a.pushRun(n, o), a.mergeRuns(), (r -= o), (n += o);
      } while (0 !== r);
      a.forceMergeRuns();
    }
  }
  function Ze() {
    gx || ((gx = !0), console.warn('z / z2 / zlevel of displayable is invalid, which may cause unexpected errors'));
  }
  function qe(t, e) {
    return t.zlevel === e.zlevel ? (t.z === e.z ? t.z2 - e.z2 : t.z - e.z) : t.zlevel - e.zlevel;
  }
  function je(t) {
    return t > -bx && bx > t;
  }
  function Ke(t) {
    return t > bx || -bx > t;
  }
  function $e(t, e, n, i, r) {
    var o = 1 - r;
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);
  }
  function Qe(t, e, n, i, r) {
    var o = 1 - r;
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);
  }
  function Je(t, e, n, i, r, o) {
    var a = i + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      u = t - r,
      h = s * s - 3 * a * l,
      c = s * l - 9 * a * u,
      p = l * l - 3 * s * u,
      d = 0;
    if (je(h) && je(c))
      if (je(s)) o[0] = 0;
      else {
        var f = -l / s;
        f >= 0 && 1 >= f && (o[d++] = f);
      }
    else {
      var g = c * c - 4 * h * p;
      if (je(g)) {
        var v = c / h,
          f = -s / a + v,
          y = -v / 2;
        f >= 0 && 1 >= f && (o[d++] = f), y >= 0 && 1 >= y && (o[d++] = y);
      } else if (g > 0) {
        var m = xx(g),
          _ = h * s + 1.5 * a * (-c + m),
          x = h * s + 1.5 * a * (-c - m);
        (_ = 0 > _ ? -_x(-_, Tx) : _x(_, Tx)), (x = 0 > x ? -_x(-x, Tx) : _x(x, Tx));
        var f = (-s - (_ + x)) / (3 * a);
        f >= 0 && 1 >= f && (o[d++] = f);
      } else {
        var w = (2 * h * s - 3 * a * c) / (2 * xx(h * h * h)),
          b = Math.acos(w) / 3,
          S = xx(h),
          M = Math.cos(b),
          f = (-s - 2 * S * M) / (3 * a),
          y = (-s + S * (M + Mx * Math.sin(b))) / (3 * a),
          T = (-s + S * (M - Mx * Math.sin(b))) / (3 * a);
        f >= 0 && 1 >= f && (o[d++] = f), y >= 0 && 1 >= y && (o[d++] = y), T >= 0 && 1 >= T && (o[d++] = T);
      }
    }
    return d;
  }
  function tn(t, e, n, i, r) {
    var o = 6 * n - 12 * e + 6 * t,
      a = 9 * e + 3 * i - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (je(a)) {
      if (Ke(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;
      if (je(h)) r[0] = -o / (2 * a);
      else if (h > 0) {
        var c = xx(h),
          u = (-o + c) / (2 * a),
          p = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p);
      }
    }
    return l;
  }
  function en(t, e, n, i, r, o) {
    var a = (e - t) * r + t,
      s = (n - e) * r + e,
      l = (i - n) * r + n,
      u = (s - a) * r + a,
      h = (l - s) * r + s,
      c = (h - u) * r + u;
    (o[0] = t), (o[1] = a), (o[2] = u), (o[3] = c), (o[4] = c), (o[5] = h), (o[6] = l), (o[7] = i);
  }
  function nn(t, e, n, i, r, o, a, s, l, u, h) {
    var c,
      p,
      d,
      f,
      g,
      v = 0.005,
      y = 1 / 0;
    (Cx[0] = l), (Cx[1] = u);
    for (var m = 0; 1 > m; m += 0.05)
      (Ix[0] = $e(t, n, r, a, m)), (Ix[1] = $e(e, i, o, s, m)), (f = U_(Cx, Ix)), y > f && ((c = m), (y = f));
    y = 1 / 0;
    for (var _ = 0; 32 > _ && !(Sx > v); _++)
      (p = c - v),
        (d = c + v),
        (Ix[0] = $e(t, n, r, a, p)),
        (Ix[1] = $e(e, i, o, s, p)),
        (f = U_(Ix, Cx)),
        p >= 0 && y > f
          ? ((c = p), (y = f))
          : ((Dx[0] = $e(t, n, r, a, d)),
            (Dx[1] = $e(e, i, o, s, d)),
            (g = U_(Dx, Cx)),
            1 >= d && y > g ? ((c = d), (y = g)) : (v *= 0.5));
    return h && ((h[0] = $e(t, n, r, a, c)), (h[1] = $e(e, i, o, s, c))), xx(y);
  }
  function rn(t, e, n, i, r, o, a, s, l) {
    for (var u = t, h = e, c = 0, p = 1 / l, d = 1; l >= d; d++) {
      var f = d * p,
        g = $e(t, n, r, a, f),
        v = $e(e, i, o, s, f),
        y = g - u,
        m = v - h;
      (c += Math.sqrt(y * y + m * m)), (u = g), (h = v);
    }
    return c;
  }
  function on(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n;
  }
  function an(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }
  function sn(t, e, n, i, r) {
    var o = t - 2 * e + n,
      a = 2 * (e - t),
      s = t - i,
      l = 0;
    if (je(o)) {
      if (Ke(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;
      if (je(h)) {
        var u = -a / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u);
      } else if (h > 0) {
        var c = xx(h),
          u = (-a + c) / (2 * o),
          p = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p);
      }
    }
    return l;
  }
  function ln(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? 0.5 : (t - e) / i;
  }
  function un(t, e, n, i, r) {
    var o = (e - t) * i + t,
      a = (n - e) * i + e,
      s = (a - o) * i + o;
    (r[0] = t), (r[1] = o), (r[2] = s), (r[3] = s), (r[4] = a), (r[5] = n);
  }
  function hn(t, e, n, i, r, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0;
    (Cx[0] = a), (Cx[1] = s);
    for (var p = 0; 1 > p; p += 0.05) {
      (Ix[0] = on(t, n, r, p)), (Ix[1] = on(e, i, o, p));
      var d = U_(Cx, Ix);
      c > d && ((u = p), (c = d));
    }
    c = 1 / 0;
    for (var f = 0; 32 > f && !(Sx > h); f++) {
      var g = u - h,
        v = u + h;
      (Ix[0] = on(t, n, r, g)), (Ix[1] = on(e, i, o, g));
      var d = U_(Ix, Cx);
      if (g >= 0 && c > d) (u = g), (c = d);
      else {
        (Dx[0] = on(t, n, r, v)), (Dx[1] = on(e, i, o, v));
        var y = U_(Dx, Cx);
        1 >= v && c > y ? ((u = v), (c = y)) : (h *= 0.5);
      }
    }
    return l && ((l[0] = on(t, n, r, u)), (l[1] = on(e, i, o, u))), xx(c);
  }
  function cn(t, e, n, i, r, o, a) {
    for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
      var p = c * h,
        d = on(t, n, r, p),
        f = on(e, i, o, p),
        g = d - s,
        v = f - l;
      (u += Math.sqrt(g * g + v * v)), (s = d), (l = f);
    }
    return u;
  }
  function pn(t) {
    var e = t && kx.exec(t);
    if (e) {
      var n = e[1].split(','),
        i = +G(n[0]),
        r = +G(n[1]),
        o = +G(n[2]),
        a = +G(n[3]);
      if (isNaN(i + r + o + a)) return;
      var s = [];
      return function (t) {
        return 0 >= t ? 0 : t >= 1 ? 1 : Je(0, i, o, 1, t, s) && $e(0, r, a, 1, s[0]);
      };
    }
  }
  function dn(t) {
    return (t = Math.round(t)), 0 > t ? 0 : t > 255 ? 255 : t;
  }
  function fn(t) {
    return (t = Math.round(t)), 0 > t ? 0 : t > 360 ? 360 : t;
  }
  function gn(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }
  function vn(t) {
    var e = t;
    return dn(e.length && '%' === e.charAt(e.length - 1) ? (parseFloat(e) / 100) * 255 : parseInt(e, 10));
  }
  function yn(t) {
    var e = t;
    return gn(e.length && '%' === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e));
  }
  function mn(t, e, n) {
    return (
      0 > n ? (n += 1) : n > 1 && (n -= 1),
      1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
    );
  }
  function _n(t, e, n) {
    return t + (e - t) * n;
  }
  function xn(t, e, n, i, r) {
    return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t;
  }
  function wn(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
  }
  function bn(t, e) {
    zx && wn(zx, e), (zx = Bx.put(t, zx || e.slice()));
  }
  function Sn(t, e) {
    if (t) {
      e = e || [];
      var n = Bx.get(t);
      if (n) return wn(e, n);
      t += '';
      var i = t.replace(/ /g, '').toLowerCase();
      if (i in Rx) return wn(e, Rx[i]), bn(t, e), e;
      var r = i.length;
      if ('#' !== i.charAt(0)) {
        var o = i.indexOf('('),
          a = i.indexOf(')');
        if (-1 !== o && a + 1 === r) {
          var s = i.substr(0, o),
            l = i.substr(o + 1, a - (o + 1)).split(','),
            u = 1;
          switch (s) {
            case 'rgba':
              if (4 !== l.length) return 3 === l.length ? xn(e, +l[0], +l[1], +l[2], 1) : xn(e, 0, 0, 0, 1);
              u = yn(l.pop());
            case 'rgb':
              return 3 !== l.length ? void xn(e, 0, 0, 0, 1) : (xn(e, vn(l[0]), vn(l[1]), vn(l[2]), u), bn(t, e), e);
            case 'hsla':
              return 4 !== l.length ? void xn(e, 0, 0, 0, 1) : ((l[3] = yn(l[3])), Mn(l, e), bn(t, e), e);
            case 'hsl':
              return 3 !== l.length ? void xn(e, 0, 0, 0, 1) : (Mn(l, e), bn(t, e), e);
            default:
              return;
          }
        }
        xn(e, 0, 0, 0, 1);
      } else {
        if (4 === r || 5 === r) {
          var h = parseInt(i.slice(1, 4), 16);
          return h >= 0 && 4095 >= h
            ? (xn(
                e,
                ((3840 & h) >> 4) | ((3840 & h) >> 8),
                (240 & h) | ((240 & h) >> 4),
                (15 & h) | ((15 & h) << 4),
                5 === r ? parseInt(i.slice(4), 16) / 15 : 1,
              ),
              bn(t, e),
              e)
            : void xn(e, 0, 0, 0, 1);
        }
        if (7 === r || 9 === r) {
          var h = parseInt(i.slice(1, 7), 16);
          return h >= 0 && 16777215 >= h
            ? (xn(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 9 === r ? parseInt(i.slice(7), 16) / 255 : 1),
              bn(t, e),
              e)
            : void xn(e, 0, 0, 0, 1);
        }
      }
    }
  }
  function Mn(t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      i = yn(t[1]),
      r = yn(t[2]),
      o = 0.5 >= r ? r * (i + 1) : r + i - r * i,
      a = 2 * r - o;
    return (
      (e = e || []),
      xn(e, dn(255 * mn(a, o, n + 1 / 3)), dn(255 * mn(a, o, n)), dn(255 * mn(a, o, n - 1 / 3)), 1),
      4 === t.length && (e[3] = t[3]),
      e
    );
  }
  function Tn(t) {
    if (t) {
      var e,
        n,
        i = t[0] / 255,
        r = t[1] / 255,
        o = t[2] / 255,
        a = Math.min(i, r, o),
        s = Math.max(i, r, o),
        l = s - a,
        u = (s + a) / 2;
      if (0 === l) (e = 0), (n = 0);
      else {
        n = 0.5 > u ? l / (s + a) : l / (2 - s - a);
        var h = ((s - i) / 6 + l / 2) / l,
          c = ((s - r) / 6 + l / 2) / l,
          p = ((s - o) / 6 + l / 2) / l;
        i === s ? (e = p - c) : r === s ? (e = 1 / 3 + h - p) : o === s && (e = 2 / 3 + c - h),
          0 > e && (e += 1),
          e > 1 && (e -= 1);
      }
      var d = [360 * e, n, u];
      return null != t[3] && d.push(t[3]), d;
    }
  }
  function Cn(t, e) {
    var n = Sn(t);
    if (n) {
      for (var i = 0; 3 > i; i++)
        (n[i] = 0 > e ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
          n[i] > 255 ? (n[i] = 255) : n[i] < 0 && (n[i] = 0);
      return Ln(n, 4 === n.length ? 'rgba' : 'rgb');
    }
  }
  function In(t) {
    var e = Sn(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
  }
  function Dn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var i = t * (e.length - 1),
        r = Math.floor(i),
        o = Math.ceil(i),
        a = e[r],
        s = e[o],
        l = i - r;
      return (
        (n[0] = dn(_n(a[0], s[0], l))),
        (n[1] = dn(_n(a[1], s[1], l))),
        (n[2] = dn(_n(a[2], s[2], l))),
        (n[3] = gn(_n(a[3], s[3], l))),
        n
      );
    }
  }
  function kn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
        r = Math.floor(i),
        o = Math.ceil(i),
        a = Sn(e[r]),
        s = Sn(e[o]),
        l = i - r,
        u = Ln([dn(_n(a[0], s[0], l)), dn(_n(a[1], s[1], l)), dn(_n(a[2], s[2], l)), gn(_n(a[3], s[3], l))], 'rgba');
      return n ? { color: u, leftIndex: r, rightIndex: o, value: i } : u;
    }
  }
  function An(t, e, n, i) {
    var r = Sn(t);
    return t
      ? ((r = Tn(r)),
        null != e && (r[0] = fn(e)),
        null != n && (r[1] = yn(n)),
        null != i && (r[2] = yn(i)),
        Ln(Mn(r), 'rgba'))
      : void 0;
  }
  function Pn(t, e) {
    var n = Sn(t);
    return n && null != e ? ((n[3] = gn(e)), Ln(n, 'rgba')) : void 0;
  }
  function Ln(t, e) {
    if (t && t.length) {
      var n = t[0] + ',' + t[1] + ',' + t[2];
      return ('rgba' === e || 'hsva' === e || 'hsla' === e) && (n += ',' + t[3]), e + '(' + n + ')';
    }
  }
  function On(t, e) {
    var n = Sn(t);
    return n ? ((0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) * n[3]) / 255 + (1 - n[3]) * e : 0;
  }
  function Rn() {
    return Ln(
      [Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random())],
      'rgb',
    );
  }
  function Bn(t) {
    return 'linear' === t.type;
  }
  function zn(t) {
    return 'radial' === t.type;
  }
  function En(t, e, n) {
    return (e - t) * n + t;
  }
  function Nn(t, e, n, i) {
    for (var r = e.length, o = 0; r > o; o++) t[o] = En(e[o], n[o], i);
    return t;
  }
  function Fn(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = En(e[a][s], n[a][s], i);
    }
    return t;
  }
  function Vn(t, e, n, i) {
    for (var r = e.length, o = 0; r > o; o++) t[o] = e[o] + n[o] * i;
    return t;
  }
  function Hn(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * i;
    }
    return t;
  }
  function Wn(t, e) {
    for (
      var n = t.length,
        i = e.length,
        r = n > i ? e : t,
        o = Math.min(n, i),
        a = r[o - 1] || { color: [0, 0, 0, 0], offset: 0 },
        s = o;
      s < Math.max(n, i);
      s++
    )
      r.push({ offset: a.offset, color: a.color.slice() });
  }
  function Gn(t, e, n) {
    var i = t,
      r = e;
    if (i.push && r.push) {
      var o = i.length,
        a = r.length;
      if (o !== a) {
        var s = o > a;
        if (s) i.length = a;
        else for (var l = o; a > l; l++) i.push(1 === n ? r[l] : Vx.call(r[l]));
      }
      for (var u = i[0] && i[0].length, l = 0; l < i.length; l++)
        if (1 === n) isNaN(i[l]) && (i[l] = r[l]);
        else for (var h = 0; u > h; h++) isNaN(i[l][h]) && (i[l][h] = r[l][h]);
    }
  }
  function Un(t) {
    if (g(t)) {
      var e = t.length;
      if (g(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(Vx.call(t[i]));
        return n;
      }
      return Vx.call(t);
    }
    return t;
  }
  function Xn(t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      'rgba(' + t.join(',') + ')'
    );
  }
  function Yn(t) {
    return g(t && t[0]) ? 2 : 1;
  }
  function Zn(t) {
    return t === Xx || t === Yx;
  }
  function qn(t) {
    return t === Wx || t === Gx;
  }
  function jn() {
    return new Date().getTime();
  }
  function Kn(t) {
    var e = t.pointerType;
    return 'pen' === e || 'touch' === e;
  }
  function $n(t) {
    (t.touching = !0),
      null != t.touchTimer && (clearTimeout(t.touchTimer), (t.touchTimer = null)),
      (t.touchTimer = setTimeout(function () {
        (t.touching = !1), (t.touchTimer = null);
      }, 700));
  }
  function Qn(t) {
    t && (t.zrByTouch = !0);
  }
  function Jn(t, e) {
    return ke(t.dom, new iw(t, e), !0);
  }
  function ti(t, e) {
    for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || (n !== e && n === t.painterRoot)); )
      n = n.parentNode;
    return i;
  }
  function ei(t, e) {
    var n = e.domHandlers;
    f_.pointerEventsSupported
      ? v(tw.pointer, function (i) {
          ii(e, i, function (e) {
            n[i].call(t, e);
          });
        })
      : (f_.touchEventsSupported &&
          v(tw.touch, function (i) {
            ii(e, i, function (r) {
              n[i].call(t, r), $n(e);
            });
          }),
        v(tw.mouse, function (i) {
          ii(e, i, function (r) {
            (r = De(r)), e.touching || n[i].call(t, r);
          });
        }));
  }
  function ni(t, e) {
    function n(n) {
      function i(i) {
        (i = De(i)), ti(t, i.target) || ((i = Jn(t, i)), e.domHandlers[n].call(t, i));
      }
      ii(e, n, i, { capture: !0 });
    }
    f_.pointerEventsSupported ? v(ew.pointer, n) : f_.touchEventsSupported || v(ew.mouse, n);
  }
  function ii(t, e, n, i) {
    (t.mounted[e] = n), (t.listenerOpts[e] = i), Pe(t.domTarget, e, n, i);
  }
  function ri(t) {
    var e = t.mounted;
    for (var n in e) e.hasOwnProperty(n) && Le(t.domTarget, n, e[n], t.listenerOpts[n]);
    t.mounted = {};
  }
  function oi() {
    return [1, 0, 0, 1, 0, 0];
  }
  function ai(t) {
    return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
  }
  function si(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), t;
  }
  function li(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return (t[0] = i), (t[1] = r), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = l), t;
  }
  function ui(t, e, n) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4] + n[0]), (t[5] = e[5] + n[1]), t;
  }
  function hi(t, e, n) {
    var i = e[0],
      r = e[2],
      o = e[4],
      a = e[1],
      s = e[3],
      l = e[5],
      u = Math.sin(n),
      h = Math.cos(n);
    return (
      (t[0] = i * h + a * u),
      (t[1] = -i * u + a * h),
      (t[2] = r * h + s * u),
      (t[3] = -r * u + h * s),
      (t[4] = h * o + u * l),
      (t[5] = h * l - u * o),
      t
    );
  }
  function ci(t, e, n) {
    var i = n[0],
      r = n[1];
    return (
      (t[0] = e[0] * i),
      (t[1] = e[1] * r),
      (t[2] = e[2] * i),
      (t[3] = e[3] * r),
      (t[4] = e[4] * i),
      (t[5] = e[5] * r),
      t
    );
  }
  function pi(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      o = e[1],
      a = e[3],
      s = e[5],
      l = n * a - o * i;
    return l
      ? ((l = 1 / l),
        (t[0] = a * l),
        (t[1] = -o * l),
        (t[2] = -i * l),
        (t[3] = n * l),
        (t[4] = (i * s - a * r) * l),
        (t[5] = (o * r - n * s) * l),
        t)
      : null;
  }
  function di(t) {
    var e = oi();
    return si(e, t), e;
  }
  function fi(t) {
    return t > vw || -vw > t;
  }
  function gi(t, e) {
    for (var n = 0; n < bw.length; n++) {
      var i = bw[n];
      t[i] = e[i];
    }
  }
  function vi(t, e) {
    e = e || y_;
    var n = Ow[e];
    n || (n = Ow[e] = new Ox(500));
    var i = n.get(t);
    return null == i && ((i = b_.measureText(t, e).width), n.put(t, i)), i;
  }
  function yi(t, e, n, i) {
    var r = vi(t, e),
      o = wi(e),
      a = _i(0, r, n),
      s = xi(0, o, i),
      l = new Lw(a, s, r, o);
    return l;
  }
  function mi(t, e, n, i) {
    var r = ((t || '') + '').split('\n'),
      o = r.length;
    if (1 === o) return yi(r[0], e, n, i);
    for (var a = new Lw(0, 0, 0, 0), s = 0; s < r.length; s++) {
      var l = yi(r[s], e, n, i);
      0 === s ? a.copy(l) : a.union(l);
    }
    return a;
  }
  function _i(t, e, n) {
    return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
  }
  function xi(t, e, n) {
    return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t;
  }
  function wi(t) {
    return vi('国', t);
  }
  function bi(t, e) {
    return 'string' == typeof t ? (t.lastIndexOf('%') >= 0 ? (parseFloat(t) / 100) * e : parseFloat(t)) : t;
  }
  function Si(t, e, n) {
    var i = e.position || 'inside',
      r = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = 'left',
      c = 'top';
    if (i instanceof Array) (l += bi(i[0], n.width)), (u += bi(i[1], n.height)), (h = null), (c = null);
    else
      switch (i) {
        case 'left':
          (l -= r), (u += s), (h = 'right'), (c = 'middle');
          break;
        case 'right':
          (l += r + a), (u += s), (c = 'middle');
          break;
        case 'top':
          (l += a / 2), (u -= r), (h = 'center'), (c = 'bottom');
          break;
        case 'bottom':
          (l += a / 2), (u += o + r), (h = 'center');
          break;
        case 'inside':
          (l += a / 2), (u += s), (h = 'center'), (c = 'middle');
          break;
        case 'insideLeft':
          (l += r), (u += s), (c = 'middle');
          break;
        case 'insideRight':
          (l += a - r), (u += s), (h = 'right'), (c = 'middle');
          break;
        case 'insideTop':
          (l += a / 2), (u += r), (h = 'center');
          break;
        case 'insideBottom':
          (l += a / 2), (u += o - r), (h = 'center'), (c = 'bottom');
          break;
        case 'insideTopLeft':
          (l += r), (u += r);
          break;
        case 'insideTopRight':
          (l += a - r), (u += r), (h = 'right');
          break;
        case 'insideBottomLeft':
          (l += r), (u += o - r), (c = 'bottom');
          break;
        case 'insideBottomRight':
          (l += a - r), (u += o - r), (h = 'right'), (c = 'bottom');
      }
    return (t = t || {}), (t.x = l), (t.y = u), (t.align = h), (t.verticalAlign = c), t;
  }
  function Mi(t, e, n, i, r) {
    n = n || {};
    var o = [];
    Ai(t, '', t, e, n, i, o, r);
    var a = o.length,
      s = !1,
      l = n.done,
      u = n.aborted,
      h = function () {
        (s = !0), a--, 0 >= a && (s ? l && l() : u && u());
      },
      c = function () {
        a--, 0 >= a && (s ? l && l() : u && u());
      };
    a || (l && l()),
      o.length > 0 &&
        n.during &&
        o[0].during(function (t, e) {
          n.during(e);
        });
    for (var p = 0; p < o.length; p++) {
      var d = o[p];
      h && d.done(h), c && d.aborted(c), n.force && d.duration(n.duration), d.start(n.easing);
    }
    return o;
  }
  function Ti(t, e, n) {
    for (var i = 0; n > i; i++) t[i] = e[i];
  }
  function Ci(t) {
    return g(t[0]);
  }
  function Ii(t, e, n) {
    if (g(e[n]))
      if ((g(t[n]) || (t[n] = []), P(e[n]))) {
        var i = e[n].length;
        t[n].length !== i && ((t[n] = new e[n].constructor(i)), Ti(t[n], e[n], i));
      } else {
        var r = e[n],
          o = t[n],
          a = r.length;
        if (Ci(r))
          for (var s = r[0].length, l = 0; a > l; l++)
            o[l] ? Ti(o[l], r[l], s) : (o[l] = Array.prototype.slice.call(r[l]));
        else Ti(o, r, a);
        o.length = r.length;
      }
    else t[n] = e[n];
  }
  function Di(t, e) {
    return t === e || (g(t) && g(e) && ki(t, e));
  }
  function ki(t, e) {
    var n = t.length;
    if (n !== e.length) return !1;
    for (var i = 0; n > i; i++) if (t[i] !== e[i]) return !1;
    return !0;
  }
  function Ai(t, e, n, i, r, o, a, s) {
    for (
      var l = w(i),
        u = r.duration,
        h = r.delay,
        c = r.additive,
        d = r.setToFinal,
        f = !k(o),
        v = t.animators,
        y = [],
        m = 0;
      m < l.length;
      m++
    ) {
      var x = l[m],
        b = i[x];
      if (null != b && null != n[x] && (f || o[x]))
        if (!k(b) || g(b) || O(b)) y.push(x);
        else {
          if (e) {
            s || ((n[x] = b), t.updateDuringAnimation(e));
            continue;
          }
          Ai(t, x, n[x], b, r, o && o[x], a, s);
        }
      else s || ((n[x] = b), t.updateDuringAnimation(e), y.push(x));
    }
    var S = y.length;
    if (!c && S)
      for (var M = 0; M < v.length; M++) {
        var T = v[M];
        if (T.targetName === e) {
          var C = T.stopTracks(y);
          if (C) {
            var I = p(v, T);
            v.splice(I, 1);
          }
        }
      }
    if (
      (r.force ||
        ((y = _(y, function (t) {
          return !Di(i[t], n[t]);
        })),
        (S = y.length)),
      S > 0 || (r.force && !a.length))
    ) {
      var D = void 0,
        A = void 0,
        P = void 0;
      if (s) {
        (A = {}), d && (D = {});
        for (var M = 0; S > M; M++) {
          var x = y[M];
          (A[x] = n[x]), d ? (D[x] = i[x]) : (n[x] = i[x]);
        }
      } else if (d) {
        P = {};
        for (var M = 0; S > M; M++) {
          var x = y[M];
          (P[x] = Un(n[x])), Ii(n, i, x);
        }
      }
      var T = new Kx(
        n,
        !1,
        !1,
        c
          ? _(v, function (t) {
              return t.targetName === e;
            })
          : null,
      );
      (T.targetName = e),
        r.scope && (T.scope = r.scope),
        d && D && T.whenWithKeys(0, D, y),
        P && T.whenWithKeys(0, P, y),
        T.whenWithKeys(null == u ? 500 : u, s ? A : i, y).delay(h || 0),
        t.addAnimator(T, e),
        a.push(T);
    }
  }
  function Pi(t) {
    delete Ww[t];
  }
  function Li(t) {
    if (!t) return !1;
    if ('string' == typeof t) return On(t, 1) < hw;
    if (t.colorStops) {
      for (var e = t.colorStops, n = 0, i = e.length, r = 0; i > r; r++) n += On(e[r].color, 1);
      return (n /= i), hw > n;
    }
    return !1;
  }
  function Oi(t, e) {
    var n = new Gw(o(), t, e);
    return (Ww[n.id] = n), n;
  }
  function Ri(t) {
    t.dispose();
  }
  function Bi() {
    for (var t in Ww) Ww.hasOwnProperty(t) && Ww[t].dispose();
    Ww = {};
  }
  function zi(t) {
    return Ww[t];
  }
  function Ei(t, e) {
    Hw[t] = e;
  }
  function Ni(t) {
    return t.replace(/^\s+|\s+$/g, '');
  }
  function Fi(t, e, n, i) {
    var r = e[0],
      o = e[1],
      a = n[0],
      s = n[1],
      l = o - r,
      u = s - a;
    if (0 === l) return 0 === u ? a : (a + s) / 2;
    if (i)
      if (l > 0) {
        if (r >= t) return a;
        if (t >= o) return s;
      } else {
        if (t >= r) return a;
        if (o >= t) return s;
      }
    else {
      if (t === r) return a;
      if (t === o) return s;
    }
    return ((t - r) / l) * u + a;
  }
  function Vi(t, e) {
    switch (t) {
      case 'center':
      case 'middle':
        t = '50%';
        break;
      case 'left':
      case 'top':
        t = '0%';
        break;
      case 'right':
      case 'bottom':
        t = '100%';
    }
    return C(t) ? (Ni(t).match(/%$/) ? (parseFloat(t) / 100) * e : parseFloat(t)) : null == t ? 0 / 0 : +t;
  }
  function Hi(t, e, n) {
    return null == e && (e = 10), (e = Math.min(Math.max(0, e), Zw)), (t = (+t).toFixed(e)), n ? t : +t;
  }
  function Wi(t) {
    return (
      t.sort(function (t, e) {
        return t - e;
      }),
      t
    );
  }
  function Gi(t) {
    if (((t = +t), isNaN(t))) return 0;
    if (t > 1e-14) for (var e = 1, n = 0; 15 > n; n++, e *= 10) if (Math.round(t * e) / e === t) return n;
    return Ui(t);
  }
  function Ui(t) {
    var e = t.toString().toLowerCase(),
      n = e.indexOf('e'),
      i = n > 0 ? +e.slice(n + 1) : 0,
      r = n > 0 ? n : e.length,
      o = e.indexOf('.'),
      a = 0 > o ? 0 : r - 1 - o;
    return Math.max(0, a - i);
  }
  function Xi(t, e) {
    var n = Math.log,
      i = Math.LN10,
      r = Math.floor(n(t[1] - t[0]) / i),
      o = Math.round(n(Math.abs(e[1] - e[0])) / i),
      a = Math.min(Math.max(-r + o, 0), 20);
    return isFinite(a) ? a : 20;
  }
  function Yi(t, e, n) {
    if (!t[e]) return 0;
    var i = m(
      t,
      function (t, e) {
        return t + (isNaN(e) ? 0 : e);
      },
      0,
    );
    if (0 === i) return 0;
    for (
      var r = Math.pow(10, n),
        o = y(t, function (t) {
          return ((isNaN(t) ? 0 : t) / i) * r * 100;
        }),
        a = 100 * r,
        s = y(o, function (t) {
          return Math.floor(t);
        }),
        l = m(
          s,
          function (t, e) {
            return t + e;
          },
          0,
        ),
        u = y(o, function (t, e) {
          return t - s[e];
        });
      a > l;

    ) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, p = 0, d = u.length; d > p; ++p)
        u[p] > h && ((h = u[p]), (c = p));
      ++s[c], (u[c] = 0), ++l;
    }
    return s[e] / r;
  }
  function Zi(t, e) {
    var n = Math.max(Gi(t), Gi(e)),
      i = t + e;
    return n > Zw ? i : Hi(i, n);
  }
  function qi(t) {
    var e = 2 * Math.PI;
    return ((t % e) + e) % e;
  }
  function ji(t) {
    return t > -Yw && Yw > t;
  }
  function Ki(t) {
    if (t instanceof Date) return t;
    if (C(t)) {
      var e = jw.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return (
          'Z' !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
          new Date(
            Date.UTC(
              +e[1],
              +(e[2] || 1) - 1,
              +e[3] || 1,
              n,
              +(e[5] || 0),
              +e[6] || 0,
              e[7] ? +e[7].substring(0, 3) : 0,
            ),
          )
        );
      }
      return new Date(
        +e[1],
        +(e[2] || 1) - 1,
        +e[3] || 1,
        +e[4] || 0,
        +(e[5] || 0),
        +e[6] || 0,
        e[7] ? +e[7].substring(0, 3) : 0,
      );
    }
    return new Date(null == t ? 0 / 0 : Math.round(t));
  }
  function $i(t) {
    return Math.pow(10, Qi(t));
  }
  function Qi(t) {
    if (0 === t) return 0;
    var e = Math.floor(Math.log(t) / Math.LN10);
    return t / Math.pow(10, e) >= 10 && e++, e;
  }
  function Ji(t, e) {
    var n,
      i = Qi(t),
      r = Math.pow(10, i),
      o = t / r;
    return (
      (n = e
        ? 1.5 > o
          ? 1
          : 2.5 > o
          ? 2
          : 4 > o
          ? 3
          : 7 > o
          ? 5
          : 10
        : 1 > o
        ? 1
        : 2 > o
        ? 2
        : 3 > o
        ? 3
        : 5 > o
        ? 5
        : 10),
      (t = n * r),
      i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
    );
  }
  function tr(t, e) {
    var n = (t.length - 1) * e + 1,
      i = Math.floor(n),
      r = +t[i - 1],
      o = n - i;
    return o ? r + o * (t[i] - r) : r;
  }
  function er(t) {
    function e(t, n, i) {
      return (
        t.interval[i] < n.interval[i] ||
        (t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || (!i && e(t, n, 1))))
      );
    }
    t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });
    for (var n = -1 / 0, i = 1, r = 0; r < t.length; ) {
      for (var o = t[r].interval, a = t[r].close, s = 0; 2 > s; s++)
        o[s] <= n && ((o[s] = n), (a[s] = s ? 1 : 1 - i)), (n = o[s]), (i = a[s]);
      o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++;
    }
    return t;
  }
  function nr(t) {
    var e = parseFloat(t);
    return e == t && (0 !== e || !C(t) || t.indexOf('x') <= 0) ? e : 0 / 0;
  }
  function ir(t) {
    return !isNaN(nr(t));
  }
  function rr() {
    return Math.round(9 * Math.random());
  }
  function or(t, e) {
    return 0 === e ? t : or(e, t % e);
  }
  function ar(t, e) {
    return null == t ? e : null == e ? t : (t * e) / or(t, e);
  }
  function sr(t) {
    throw new Error(t);
  }
  function lr(t, e, n) {
    return (e - t) * n + t;
  }
  function ur(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }
  function hr(t, e, n) {
    if (t) {
      (t[e] = t[e] || {}), (t.emphasis = t.emphasis || {}), (t.emphasis[e] = t.emphasis[e] || {});
      for (var i = 0, r = n.length; r > i; i++) {
        var o = n[i];
        !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);
      }
    }
  }
  function cr(t) {
    return !k(t) || M(t) || t instanceof Date ? t : t.value;
  }
  function pr(t) {
    return k(t) && !(t instanceof Array);
  }
  function dr(t, e, n) {
    var i = 'normalMerge' === n,
      r = 'replaceMerge' === n,
      o = 'replaceAll' === n;
    (t = t || []), (e = (e || []).slice());
    var a = Y();
    v(e, function (t, n) {
      return k(t) ? void 0 : void (e[n] = null);
    });
    var s = fr(t, a, n);
    return (i || r) && gr(s, t, a, e), i && vr(s, e), i || r ? yr(s, e, r) : o && mr(s, e), _r(s), s;
  }
  function fr(t, e, n) {
    var i = [];
    if ('replaceAll' === n) return i;
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o && null != o.id && e.set(o.id, r),
        i.push({ existing: 'replaceMerge' === n || Mr(o) ? null : o, newOption: null, keyInfo: null, brandNew: null });
    }
    return i;
  }
  function gr(t, e, n, i) {
    v(i, function (r, o) {
      if (r && null != r.id) {
        var a = wr(r.id),
          s = n.get(a);
        if (null != s) {
          var l = t[s];
          W(!l.newOption, 'Duplicated option on id "' + a + '".'),
            (l.newOption = r),
            (l.existing = e[s]),
            (i[o] = null);
        }
      }
    });
  }
  function vr(t, e) {
    v(e, function (n, i) {
      if (n && null != n.name)
        for (var r = 0; r < t.length; r++) {
          var o = t[r].existing;
          if (!t[r].newOption && o && (null == o.id || null == n.id) && !Mr(n) && !Mr(o) && xr('name', o, n))
            return (t[r].newOption = n), void (e[i] = null);
        }
    });
  }
  function yr(t, e, n) {
    v(e, function (e) {
      if (e) {
        for (
          var i, r = 0;
          (i = t[r]) && (i.newOption || Mr(i.existing) || (i.existing && null != e.id && !xr('id', e, i.existing)));

        )
          r++;
        i
          ? ((i.newOption = e), (i.brandNew = n))
          : t.push({ newOption: e, brandNew: n, existing: null, keyInfo: null }),
          r++;
      }
    });
  }
  function mr(t, e) {
    v(e, function (e) {
      t.push({ newOption: e, brandNew: !0, existing: null, keyInfo: null });
    });
  }
  function _r(t) {
    var e = Y();
    v(t, function (t) {
      var n = t.existing;
      n && e.set(n.id, t);
    }),
      v(t, function (t) {
        var n = t.newOption;
        W(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, 'id duplicates: ' + (n && n.id)),
          n && null != n.id && e.set(n.id, t),
          !t.keyInfo && (t.keyInfo = {});
      }),
      v(t, function (t, n) {
        var i = t.existing,
          r = t.newOption,
          o = t.keyInfo;
        if (k(r)) {
          if (((o.name = null != r.name ? wr(r.name) : i ? i.name : Kw + n), i)) o.id = wr(i.id);
          else if (null != r.id) o.id = wr(r.id);
          else {
            var a = 0;
            do o.id = '\x00' + o.name + '\x00' + a++;
            while (e.get(o.id));
          }
          e.set(o.id, t);
        }
      });
  }
  function xr(t, e, n) {
    var i = br(e[t], null),
      r = br(n[t], null);
    return null != i && null != r && i === r;
  }
  function wr(t) {
    return br(t, '');
  }
  function br(t, e) {
    return null == t ? e : C(t) ? t : D(t) || I(t) ? t + '' : e;
  }
  function Sr(t) {
    var e = t.name;
    return !(!e || !e.indexOf(Kw));
  }
  function Mr(t) {
    return t && null != t.id && 0 === wr(t.id).indexOf($w);
  }
  function Tr(t, e, n) {
    v(t, function (t) {
      var i = t.newOption;
      k(i) && ((t.keyInfo.mainType = e), (t.keyInfo.subType = Cr(e, i, t.existing, n)));
    });
  }
  function Cr(t, e, n, i) {
    var r = e.type ? e.type : n ? n.subType : i.determineSubType(t, e);
    return r;
  }
  function Ir(t, e) {
    return null != e.dataIndexInside
      ? e.dataIndexInside
      : null != e.dataIndex
      ? M(e.dataIndex)
        ? y(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e);
          })
        : t.indexOfRawIndex(e.dataIndex)
      : null != e.name
      ? M(e.name)
        ? y(e.name, function (e) {
            return t.indexOfName(e);
          })
        : t.indexOfName(e.name)
      : void 0;
  }
  function Dr() {
    var t = '__ec_inner_' + Jw++;
    return function (e) {
      return e[t] || (e[t] = {});
    };
  }
  function kr(t, e, n) {
    var i = Ar(e, n),
      r = i.mainTypeSpecified,
      o = i.queryOptionMap,
      a = i.others,
      s = a,
      l = n ? n.defaultMainType : null;
    return (
      !r && l && o.set(l, {}),
      o.each(function (e, i) {
        var r = Pr(t, i, e, {
          useDefault: l === i,
          enableAll: n && null != n.enableAll ? n.enableAll : !0,
          enableNone: n && null != n.enableNone ? n.enableNone : !0,
        });
        (s[i + 'Models'] = r.models), (s[i + 'Model'] = r.models[0]);
      }),
      s
    );
  }
  function Ar(t, e) {
    var n;
    if (C(t)) {
      var i = {};
      (i[t + 'Index'] = 0), (n = i);
    } else n = t;
    var r = Y(),
      o = {},
      a = !1;
    return (
      v(n, function (t, n) {
        if ('dataIndex' === n || 'dataIndexInside' === n) return void (o[n] = t);
        var i = n.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = i[1],
          l = (i[2] || '').toLowerCase();
        if (s && l && !(e && e.includeMainTypes && p(e.includeMainTypes, s) < 0)) {
          a = a || !!s;
          var u = r.get(s) || r.set(s, {});
          u[l] = t;
        }
      }),
      { mainTypeSpecified: a, queryOptionMap: r, others: o }
    );
  }
  function Pr(t, e, n, i) {
    i = i || tb;
    var r = n.index,
      o = n.id,
      a = n.name,
      s = { models: null, specified: null != r || null != o || null != a };
    if (!s.specified) {
      var l = void 0;
      return (s.models = i.useDefault && (l = t.getComponent(e)) ? [l] : []), s;
    }
    return 'none' === r || r === !1
      ? (W(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), (s.models = []), s)
      : ('all' === r && (W(i.enableAll, '`"all"` is not a valid value on index option.'), (r = o = a = null)),
        (s.models = t.queryComponents({ mainType: e, index: r, id: o, name: a })),
        s);
  }
  function Lr(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
  }
  function Or(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }
  function Rr(t) {
    return 'auto' === t ? (f_.domSupported ? 'html' : 'richText') : t || 'html';
  }
  function Br(t, e, n, i, r) {
    var o = null == e || 'auto' === e;
    if (null == i) return i;
    if (D(i)) {
      var a = lr(n || 0, i, r);
      return Hi(a, o ? Math.max(Gi(n || 0), Gi(i)) : e);
    }
    if (C(i)) return 1 > r ? n : i;
    for (var s = [], l = n, u = i, h = Math.max(l ? l.length : 0, u.length), c = 0; h > c; ++c) {
      var p = t.getDimensionInfo(c);
      if (p && 'ordinal' === p.type) s[c] = (1 > r && l ? l : u)[c];
      else {
        var d = l && l[c] ? l[c] : 0,
          f = u[c],
          a = lr(d, f, r);
        s[c] = Hi(a, o ? Math.max(Gi(d), Gi(f)) : e);
      }
    }
    return s;
  }
  function zr(t) {
    var e = { main: '', sub: '' };
    if (t) {
      var n = t.split(eb);
      (e.main = n[0] || ''), (e.sub = n[1] || '');
    }
    return e;
  }
  function Er(t) {
    W(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }
  function Nr(t) {
    return !(!t || !t[ib]);
  }
  function Fr(t) {
    (t.$constructor = t),
      (t.extend = function (t) {
        var n,
          i = this;
        return (
          Vr(i)
            ? (n = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                return e(n, t), n;
              })(i))
            : ((n = function () {
                (t.$constructor || i).apply(this, arguments);
              }),
              d(n, this)),
          h(n.prototype, t),
          (n[ib] = !0),
          (n.extend = this.extend),
          (n.superCall = Gr),
          (n.superApply = Ur),
          (n.superClass = i),
          n
        );
      });
  }
  function Vr(t) {
    return T(t) && /^class\s/.test(Function.prototype.toString.call(t));
  }
  function Hr(t, e) {
    t.extend = e.extend;
  }
  function Wr(t) {
    var e = ['__\x00is_clz', rb++].join('_');
    (t.prototype[e] = !0),
      (t.isInstance = function (t) {
        return !(!t || !t[e]);
      });
  }
  function Gr(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return this.superClass.prototype[e].apply(t, n);
  }
  function Ur(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }
  function Xr(t) {
    function e(t) {
      var e = n[t.main];
      return (e && e[nb]) || ((e = n[t.main] = {}), (e[nb] = !0)), e;
    }
    var n = {};
    (t.registerClass = function (t) {
      var i = t.type || t.prototype.type;
      if (i) {
        Er(i), (t.prototype.type = i);
        var r = zr(i);
        if (r.sub) {
          if (r.sub !== nb) {
            var o = e(r);
            o[r.sub] = t;
          }
        } else n[r.main] = t;
      }
      return t;
    }),
      (t.getClass = function (t, e, i) {
        var r = n[t];
        if ((r && r[nb] && (r = e ? r[e] : null), i && !r))
          throw new Error(
            e ? 'Component ' + t + '.' + (e || '') + ' is used but not imported.' : t + '.type should be specified.',
          );
        return r;
      }),
      (t.getClassesByMainType = function (t) {
        var e = zr(t),
          i = [],
          r = n[e.main];
        return (
          r && r[nb]
            ? v(r, function (t, e) {
                e !== nb && i.push(t);
              })
            : i.push(r),
          i
        );
      }),
      (t.hasClass = function (t) {
        var e = zr(t);
        return !!n[e.main];
      }),
      (t.getAllClassMainTypes = function () {
        var t = [];
        return (
          v(n, function (e, n) {
            t.push(n);
          }),
          t
        );
      }),
      (t.hasSubTypes = function (t) {
        var e = zr(t),
          i = n[e.main];
        return i && i[nb];
      });
  }
  function Yr(t, e) {
    for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
    return (
      (e = e || !1),
      function (n, i, r) {
        for (var o = {}, a = 0; a < t.length; a++) {
          var s = t[a][1];
          if (!((i && p(i, s) >= 0) || (r && p(r, s) < 0))) {
            var l = n.getShallow(s, e);
            null != l && (o[t[a][0]] = l);
          }
        }
        return o;
      }
    );
  }
  function Zr(t) {
    if ('string' == typeof t) {
      var e = lb.get(t);
      return e && e.image;
    }
    return t;
  }
  function qr(t, e, n, i, r) {
    if (t) {
      if ('string' == typeof t) {
        if ((e && e.__zrImageSrc === t) || !n) return e;
        var o = lb.get(t),
          a = { hostEl: n, cb: i, cbPayload: r };
        return (
          o
            ? ((e = o.image), !Kr(e) && o.pending.push(a))
            : ((e = b_.loadImage(t, jr, jr)),
              (e.__zrImageSrc = t),
              lb.put(t, (e.__cachedImgObj = { image: e, pending: [a] }))),
          e
        );
      }
      return t;
    }
    return e;
  }
  function jr() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty();
    }
    t.pending.length = 0;
  }
  function Kr(t) {
    return t && t.width && t.height;
  }
  function $r(t, e, n, i, r) {
    if (!e) return '';
    var o = (t + '').split('\n');
    r = Qr(e, n, i, r);
    for (var a = 0, s = o.length; s > a; a++) o[a] = Jr(o[a], r);
    return o.join('\n');
  }
  function Qr(t, e, n, i) {
    i = i || {};
    var r = h({}, i);
    (r.font = e), (n = N(n, '...')), (r.maxIterations = N(i.maxIterations, 2));
    var o = (r.minChar = N(i.minChar, 0));
    r.cnCharWidth = vi('国', e);
    var a = (r.ascCharWidth = vi('a', e));
    r.placeholder = N(i.placeholder, '');
    for (var s = (t = Math.max(0, t - 1)), l = 0; o > l && s >= a; l++) s -= a;
    var u = vi(n, e);
    return (
      u > s && ((n = ''), (u = 0)),
      (s = t - u),
      (r.ellipsis = n),
      (r.ellipsisWidth = u),
      (r.contentWidth = s),
      (r.containerWidth = t),
      r
    );
  }
  function Jr(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return '';
    var o = vi(t, i);
    if (n >= o) return t;
    for (var a = 0; ; a++) {
      if (r >= o || a >= e.maxIterations) {
        t += e.ellipsis;
        break;
      }
      var s = 0 === a ? to(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor((t.length * r) / o) : 0;
      (t = t.substr(0, s)), (o = vi(t, i));
    }
    return '' === t && (t = e.placeholder), t;
  }
  function to(t, e, n, i) {
    for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
      var s = t.charCodeAt(o);
      r += s >= 0 && 127 >= s ? n : i;
    }
    return o;
  }
  function eo(t, e) {
    null != t && (t += '');
    var n,
      i = e.overflow,
      r = e.padding,
      o = e.font,
      a = 'truncate' === i,
      s = wi(o),
      l = N(e.lineHeight, s),
      u = !!e.backgroundColor,
      h = 'truncate' === e.lineOverflow,
      c = e.width;
    n =
      null == c || ('break' !== i && 'breakAll' !== i)
        ? t
          ? t.split('\n')
          : []
        : t
        ? ao(t, e.font, c, 'breakAll' === i, 0).lines
        : [];
    var p = n.length * l,
      d = N(e.height, p);
    if (p > d && h) {
      var f = Math.floor(d / l);
      n = n.slice(0, f);
    }
    if (t && a && null != c)
      for (
        var g = Qr(c, o, e.ellipsis, { minChar: e.truncateMinChar, placeholder: e.placeholder }), v = 0;
        v < n.length;
        v++
      )
        n[v] = Jr(n[v], g);
    for (var y = d, m = 0, v = 0; v < n.length; v++) m = Math.max(vi(n[v], o), m);
    null == c && (c = m);
    var _ = m;
    return (
      r && ((y += r[0] + r[2]), (_ += r[1] + r[3]), (c += r[1] + r[3])),
      u && (_ = c),
      {
        lines: n,
        height: d,
        outerWidth: _,
        outerHeight: y,
        lineHeight: l,
        calculatedLineHeight: s,
        contentWidth: m,
        contentHeight: p,
        width: c,
      }
    );
  }
  function no(t, e) {
    function n(t, e, n) {
      (t.width = e), (t.lineHeight = n), (p += n), (d = Math.max(d, e));
    }
    var i = new pb();
    if ((null != t && (t += ''), !t)) return i;
    for (
      var r,
        o = e.width,
        a = e.height,
        s = e.overflow,
        l =
          ('break' !== s && 'breakAll' !== s) || null == o
            ? null
            : { width: o, accumWidth: 0, breakAll: 'breakAll' === s },
        u = (ub.lastIndex = 0);
      null != (r = ub.exec(t));

    ) {
      var h = r.index;
      h > u && io(i, t.substring(u, h), e, l), io(i, r[2], e, l, r[1]), (u = ub.lastIndex);
    }
    u < t.length && io(i, t.substring(u, t.length), e, l);
    var c = [],
      p = 0,
      d = 0,
      f = e.padding,
      g = 'truncate' === s,
      v = 'truncate' === e.lineOverflow;
    t: for (var y = 0; y < i.lines.length; y++) {
      for (var m = i.lines[y], _ = 0, x = 0, w = 0; w < m.tokens.length; w++) {
        var b = m.tokens[w],
          S = (b.styleName && e.rich[b.styleName]) || {},
          M = (b.textPadding = S.padding),
          T = M ? M[1] + M[3] : 0,
          C = (b.font = S.font || e.font);
        b.contentHeight = wi(C);
        var I = N(S.height, b.contentHeight);
        if (
          ((b.innerHeight = I),
          M && (I += M[0] + M[2]),
          (b.height = I),
          (b.lineHeight = F(S.lineHeight, e.lineHeight, I)),
          (b.align = (S && S.align) || e.align),
          (b.verticalAlign = (S && S.verticalAlign) || 'middle'),
          v && null != a && p + b.lineHeight > a)
        ) {
          w > 0
            ? ((m.tokens = m.tokens.slice(0, w)), n(m, x, _), (i.lines = i.lines.slice(0, y + 1)))
            : (i.lines = i.lines.slice(0, y));
          break t;
        }
        var D = S.width,
          k = null == D || 'auto' === D;
        if ('string' == typeof D && '%' === D.charAt(D.length - 1))
          (b.percentWidth = D), c.push(b), (b.contentWidth = vi(b.text, C));
        else {
          if (k) {
            var A = S.backgroundColor,
              P = A && A.image;
            P && ((P = Zr(P)), Kr(P) && (b.width = Math.max(b.width, (P.width * I) / P.height)));
          }
          var L = g && null != o ? o - x : null;
          null != L && L < b.width
            ? !k || T > L
              ? ((b.text = ''), (b.width = b.contentWidth = 0))
              : ((b.text = $r(b.text, L - T, C, e.ellipsis, { minChar: e.truncateMinChar })),
                (b.width = b.contentWidth = vi(b.text, C)))
            : (b.contentWidth = vi(b.text, C));
        }
        (b.width += T), (x += b.width), S && (_ = Math.max(_, b.lineHeight));
      }
      n(m, x, _);
    }
    (i.outerWidth = i.width = N(o, d)),
      (i.outerHeight = i.height = N(a, p)),
      (i.contentHeight = p),
      (i.contentWidth = d),
      f && ((i.outerWidth += f[1] + f[3]), (i.outerHeight += f[0] + f[2]));
    for (var y = 0; y < c.length; y++) {
      var b = c[y],
        O = b.percentWidth;
      b.width = (parseInt(O, 10) / 100) * i.width;
    }
    return i;
  }
  function io(t, e, n, i, r) {
    var o,
      a,
      s = '' === e,
      l = (r && n.rich[r]) || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1;
    if (i) {
      var p = l.padding,
        d = p ? p[1] + p[3] : 0;
      if (null != l.width && 'auto' !== l.width) {
        var f = bi(l.width, i.width) + d;
        u.length > 0 && f + i.accumWidth > i.width && ((o = e.split('\n')), (c = !0)), (i.accumWidth = f);
      } else {
        var g = ao(e, h, i.width, i.breakAll, i.accumWidth);
        (i.accumWidth = g.accumWidth + d), (a = g.linesWidths), (o = g.lines);
      }
    } else o = e.split('\n');
    for (var v = 0; v < o.length; v++) {
      var y = o[v],
        m = new hb();
      if (
        ((m.styleName = r),
        (m.text = y),
        (m.isLineHolder = !y && !s),
        (m.width = 'number' == typeof l.width ? l.width : a ? a[v] : vi(y, h)),
        v || c)
      )
        u.push(new cb([m]));
      else {
        var _ = (u[u.length - 1] || (u[0] = new cb())).tokens,
          x = _.length;
        1 === x && _[0].isLineHolder ? (_[0] = m) : (y || !x || s) && _.push(m);
      }
    }
  }
  function ro(t) {
    var e = t.charCodeAt(0);
    return e >= 33 && 383 >= e;
  }
  function oo(t) {
    return ro(t) ? (db[t] ? !0 : !1) : !0;
  }
  function ao(t, e, n, i, r) {
    for (var o = [], a = [], s = '', l = '', u = 0, h = 0, c = 0; c < t.length; c++) {
      var p = t.charAt(c);
      if ('\n' !== p) {
        var d = vi(p, e),
          f = i ? !1 : !oo(p);
        (o.length ? h + d > n : r + h + d > n)
          ? h
            ? (s || l) &&
              (f
                ? (s || ((s = l), (l = ''), (u = 0), (h = u)),
                  o.push(s),
                  a.push(h - u),
                  (l += p),
                  (u += d),
                  (s = ''),
                  (h = u))
                : (l && ((s += l), (l = ''), (u = 0)), o.push(s), a.push(h), (s = p), (h = d)))
            : f
            ? (o.push(l), a.push(u), (l = p), (u = d))
            : (o.push(p), a.push(d))
          : ((h += d), f ? ((l += p), (u += d)) : (l && ((s += l), (l = ''), (u = 0)), (s += p)));
      } else l && ((s += l), (h += u)), o.push(s), a.push(h), (s = ''), (l = ''), (u = 0), (h = 0);
    }
    return (
      o.length || s || ((s = t), (l = ''), (u = 0)),
      l && (s += l),
      s && (o.push(s), a.push(h)),
      1 === o.length && (h += r),
      { accumWidth: h, lines: o, linesWidths: a }
    );
  }
  function so(t, e, n) {
    return (
      xb.copy(t.getBoundingRect()),
      t.transform && xb.applyTransform(t.transform),
      (wb.width = e),
      (wb.height = n),
      !xb.intersect(wb)
    );
  }
  function lo(t, e, n, i, r, o) {
    (r[0] = bb(t, n)), (r[1] = bb(e, i)), (o[0] = Sb(t, n)), (o[1] = Sb(e, i));
  }
  function uo(t, e, n, i, r, o, a, s, l, u) {
    var h = tn,
      c = $e,
      p = h(t, n, r, a, Ab);
    (l[0] = 1 / 0), (l[1] = 1 / 0), (u[0] = -1 / 0), (u[1] = -1 / 0);
    for (var d = 0; p > d; d++) {
      var f = c(t, n, r, a, Ab[d]);
      (l[0] = bb(f, l[0])), (u[0] = Sb(f, u[0]));
    }
    p = h(e, i, o, s, Pb);
    for (var d = 0; p > d; d++) {
      var g = c(e, i, o, s, Pb[d]);
      (l[1] = bb(g, l[1])), (u[1] = Sb(g, u[1]));
    }
    (l[0] = bb(t, l[0])),
      (u[0] = Sb(t, u[0])),
      (l[0] = bb(a, l[0])),
      (u[0] = Sb(a, u[0])),
      (l[1] = bb(e, l[1])),
      (u[1] = Sb(e, u[1])),
      (l[1] = bb(s, l[1])),
      (u[1] = Sb(s, u[1]));
  }
  function ho(t, e, n, i, r, o, a, s) {
    var l = ln,
      u = on,
      h = Sb(bb(l(t, n, r), 1), 0),
      c = Sb(bb(l(e, i, o), 1), 0),
      p = u(t, n, r, h),
      d = u(e, i, o, c);
    (a[0] = bb(t, r, p)), (a[1] = bb(e, o, d)), (s[0] = Sb(t, r, p)), (s[1] = Sb(e, o, d));
  }
  function co(t, e, n, i, r, o, a, s, l) {
    var u = ye,
      h = me,
      c = Math.abs(r - o);
    if (1e-4 > c % Cb && c > 1e-4) return (s[0] = t - n), (s[1] = e - i), (l[0] = t + n), void (l[1] = e + i);
    if (
      ((Ib[0] = Tb(r) * n + t),
      (Ib[1] = Mb(r) * i + e),
      (Db[0] = Tb(o) * n + t),
      (Db[1] = Mb(o) * i + e),
      u(s, Ib, Db),
      h(l, Ib, Db),
      (r %= Cb),
      0 > r && (r += Cb),
      (o %= Cb),
      0 > o && (o += Cb),
      r > o && !a ? (o += Cb) : o > r && a && (r += Cb),
      a)
    ) {
      var p = o;
      (o = r), (r = p);
    }
    for (var d = 0; o > d; d += Math.PI / 2)
      d > r && ((kb[0] = Tb(d) * n + t), (kb[1] = Mb(d) * i + e), u(s, kb, s), h(l, kb, l));
  }
  function po(t) {
    var e = Math.round((t / Ub) * 1e8) / 1e8;
    return (e % 2) * Ub;
  }
  function fo(t, e) {
    var n = po(t[0]);
    0 > n && (n += Xb);
    var i = n - t[0],
      r = t[1];
    (r += i),
      !e && r - n >= Xb
        ? (r = n + Xb)
        : e && n - r >= Xb
        ? (r = n - Xb)
        : !e && n > r
        ? (r = n + (Xb - po(n - r)))
        : e && r > n && (r = n - (Xb - po(r - n))),
      (t[0] = n),
      (t[1] = r);
  }
  function go(t, e, n, i, r, o, a) {
    if (0 === r) return !1;
    var s = r,
      l = 0,
      u = t;
    if ((a > e + s && a > i + s) || (e - s > a && i - s > a) || (o > t + s && o > n + s) || (t - s > o && n - s > o))
      return !1;
    if (t === n) return Math.abs(o - t) <= s / 2;
    (l = (e - i) / (t - n)), (u = (t * i - n * e) / (t - n));
    var h = l * o - a + u,
      c = (h * h) / (l * l + 1);
    return ((s / 2) * s) / 2 >= c;
  }
  function vo(t, e, n, i, r, o, a, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (
      (h > e + c && h > i + c && h > o + c && h > s + c) ||
      (e - c > h && i - c > h && o - c > h && s - c > h) ||
      (u > t + c && u > n + c && u > r + c && u > a + c) ||
      (t - c > u && n - c > u && r - c > u && a - c > u)
    )
      return !1;
    var p = nn(t, e, n, i, r, o, a, s, u, h, null);
    return c / 2 >= p;
  }
  function yo(t, e, n, i, r, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    if (
      (l > e + u && l > i + u && l > o + u) ||
      (e - u > l && i - u > l && o - u > l) ||
      (s > t + u && s > n + u && s > r + u) ||
      (t - u > s && n - u > s && r - u > s)
    )
      return !1;
    var h = hn(t, e, n, i, r, o, s, l, null);
    return u / 2 >= h;
  }
  function mo(t) {
    return (t %= jb), 0 > t && (t += jb), t;
  }
  function _o(t, e, n, i, r, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    (s -= t), (l -= e);
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(i - r) % Kb < 1e-4) return !0;
    if (o) {
      var c = i;
      (i = mo(r)), (r = mo(c));
    } else (i = mo(i)), (r = mo(r));
    i > r && (r += Kb);
    var p = Math.atan2(l, s);
    return 0 > p && (p += Kb), (p >= i && r >= p) || (p + Kb >= i && r >= p + Kb);
  }
  function xo(t, e, n, i, r, o) {
    if ((o > e && o > i) || (e > o && i > o)) return 0;
    if (i === e) return 0;
    var a = (o - e) / (i - e),
      s = e > i ? 1 : -1;
    (1 === a || 0 === a) && (s = e > i ? 0.5 : -0.5);
    var l = a * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? s : 0;
  }
  function wo(t, e) {
    return Math.abs(t - e) < Jb;
  }
  function bo() {
    var t = eS[0];
    (eS[0] = eS[1]), (eS[1] = t);
  }
  function So(t, e, n, i, r, o, a, s, l, u) {
    if ((u > e && u > i && u > o && u > s) || (e > u && i > u && o > u && s > u)) return 0;
    var h = Je(e, i, o, s, u, tS);
    if (0 === h) return 0;
    for (var c = 0, p = -1, d = void 0, f = void 0, g = 0; h > g; g++) {
      var v = tS[g],
        y = 0 === v || 1 === v ? 0.5 : 1,
        m = $e(t, n, r, a, v);
      l > m ||
        (0 > p &&
          ((p = tn(e, i, o, s, eS)),
          eS[1] < eS[0] && p > 1 && bo(),
          (d = $e(e, i, o, s, eS[0])),
          p > 1 && (f = $e(e, i, o, s, eS[1]))),
        (c +=
          2 === p
            ? v < eS[0]
              ? e > d
                ? y
                : -y
              : v < eS[1]
              ? d > f
                ? y
                : -y
              : f > s
              ? y
              : -y
            : v < eS[0]
            ? e > d
              ? y
              : -y
            : d > s
            ? y
            : -y));
    }
    return c;
  }
  function Mo(t, e, n, i, r, o, a, s) {
    if ((s > e && s > i && s > o) || (e > s && i > s && o > s)) return 0;
    var l = sn(e, i, o, s, tS);
    if (0 === l) return 0;
    var u = ln(e, i, o);
    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = on(e, i, o, u), p = 0; l > p; p++) {
        var d = 0 === tS[p] || 1 === tS[p] ? 0.5 : 1,
          f = on(t, n, r, tS[p]);
        a > f || (h += tS[p] < u ? (e > c ? d : -d) : c > o ? d : -d);
      }
      return h;
    }
    var d = 0 === tS[0] || 1 === tS[0] ? 0.5 : 1,
      f = on(t, n, r, tS[0]);
    return a > f ? 0 : e > o ? d : -d;
  }
  function To(t, e, n, i, r, o, a, s) {
    if (((s -= e), s > n || -n > s)) return 0;
    var l = Math.sqrt(n * n - s * s);
    (tS[0] = -l), (tS[1] = l);
    var u = Math.abs(i - r);
    if (1e-4 > u) return 0;
    if (u >= Qb - 1e-4) {
      (i = 0), (r = Qb);
      var h = o ? 1 : -1;
      return a >= tS[0] + t && a <= tS[1] + t ? h : 0;
    }
    if (i > r) {
      var c = i;
      (i = r), (r = c);
    }
    0 > i && ((i += Qb), (r += Qb));
    for (var p = 0, d = 0; 2 > d; d++) {
      var f = tS[d];
      if (f + t > a) {
        var g = Math.atan2(s, f),
          h = o ? 1 : -1;
        0 > g && (g = Qb + g),
          ((g >= i && r >= g) || (g + Qb >= i && r >= g + Qb)) &&
            (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), (p += h));
      }
    }
    return p;
  }
  function Co(t, e, n, i, r) {
    for (var o, a, s = t.data, l = t.len(), u = 0, h = 0, c = 0, p = 0, d = 0, f = 0; l > f; ) {
      var g = s[f++],
        v = 1 === f;
      switch (
        (g === $b.M && f > 1 && (n || (u += xo(h, c, p, d, i, r))),
        v && ((h = s[f]), (c = s[f + 1]), (p = h), (d = c)),
        g)
      ) {
        case $b.M:
          (p = s[f++]), (d = s[f++]), (h = p), (c = d);
          break;
        case $b.L:
          if (n) {
            if (go(h, c, s[f], s[f + 1], e, i, r)) return !0;
          } else u += xo(h, c, s[f], s[f + 1], i, r) || 0;
          (h = s[f++]), (c = s[f++]);
          break;
        case $b.C:
          if (n) {
            if (vo(h, c, s[f++], s[f++], s[f++], s[f++], s[f], s[f + 1], e, i, r)) return !0;
          } else u += So(h, c, s[f++], s[f++], s[f++], s[f++], s[f], s[f + 1], i, r) || 0;
          (h = s[f++]), (c = s[f++]);
          break;
        case $b.Q:
          if (n) {
            if (yo(h, c, s[f++], s[f++], s[f], s[f + 1], e, i, r)) return !0;
          } else u += Mo(h, c, s[f++], s[f++], s[f], s[f + 1], i, r) || 0;
          (h = s[f++]), (c = s[f++]);
          break;
        case $b.A:
          var y = s[f++],
            m = s[f++],
            _ = s[f++],
            x = s[f++],
            w = s[f++],
            b = s[f++];
          f += 1;
          var S = !!(1 - s[f++]);
          (o = Math.cos(w) * _ + y), (a = Math.sin(w) * x + m), v ? ((p = o), (d = a)) : (u += xo(h, c, o, a, i, r));
          var M = ((i - y) * x) / _ + y;
          if (n) {
            if (_o(y, m, x, w, w + b, S, e, M, r)) return !0;
          } else u += To(y, m, x, w, w + b, S, M, r);
          (h = Math.cos(w + b) * _ + y), (c = Math.sin(w + b) * x + m);
          break;
        case $b.R:
          (p = h = s[f++]), (d = c = s[f++]);
          var T = s[f++],
            C = s[f++];
          if (((o = p + T), (a = d + C), n)) {
            if (
              go(p, d, o, d, e, i, r) ||
              go(o, d, o, a, e, i, r) ||
              go(o, a, p, a, e, i, r) ||
              go(p, a, p, d, e, i, r)
            )
              return !0;
          } else (u += xo(o, d, o, a, i, r)), (u += xo(p, a, p, d, i, r));
          break;
        case $b.Z:
          if (n) {
            if (go(h, c, p, d, e, i, r)) return !0;
          } else u += xo(h, c, p, d, i, r);
          (h = p), (c = d);
      }
    }
    return n || wo(c, d) || (u += xo(h, c, p, d, i, r) || 0), 0 !== u;
  }
  function Io(t, e, n) {
    return Co(t, 0, !1, e, n);
  }
  function Do(t, e, n, i) {
    return Co(t, e, !0, n, i);
  }
  function ko(t) {
    return !!(t && 'string' != typeof t && t.width && t.height);
  }
  function Ao(t, e) {
    var n,
      i,
      r,
      o,
      a = e.x,
      s = e.y,
      l = e.width,
      u = e.height,
      h = e.r;
    0 > l && ((a += l), (l = -l)),
      0 > u && ((s += u), (u = -u)),
      'number' == typeof h
        ? (n = i = r = o = h)
        : h instanceof Array
        ? 1 === h.length
          ? (n = i = r = o = h[0])
          : 2 === h.length
          ? ((n = r = h[0]), (i = o = h[1]))
          : 3 === h.length
          ? ((n = h[0]), (i = o = h[1]), (r = h[2]))
          : ((n = h[0]), (i = h[1]), (r = h[2]), (o = h[3]))
        : (n = i = r = o = 0);
    var c;
    n + i > l && ((c = n + i), (n *= l / c), (i *= l / c)),
      r + o > l && ((c = r + o), (r *= l / c), (o *= l / c)),
      i + r > u && ((c = i + r), (i *= u / c), (r *= u / c)),
      n + o > u && ((c = n + o), (n *= u / c), (o *= u / c)),
      t.moveTo(a + n, s),
      t.lineTo(a + l - i, s),
      0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0),
      t.lineTo(a + l, s + u - r),
      0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2),
      t.lineTo(a + o, s + u),
      0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI),
      t.lineTo(a, s + n),
      0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }
  function Po(t, e, n) {
    if (e) {
      var i = e.x1,
        r = e.x2,
        o = e.y1,
        a = e.y2;
      (t.x1 = i), (t.x2 = r), (t.y1 = o), (t.y2 = a);
      var s = n && n.lineWidth;
      return s
        ? (cS(2 * i) === cS(2 * r) && (t.x1 = t.x2 = Oo(i, s, !0)),
          cS(2 * o) === cS(2 * a) && (t.y1 = t.y2 = Oo(o, s, !0)),
          t)
        : t;
    }
  }
  function Lo(t, e, n) {
    if (e) {
      var i = e.x,
        r = e.y,
        o = e.width,
        a = e.height;
      (t.x = i), (t.y = r), (t.width = o), (t.height = a);
      var s = n && n.lineWidth;
      return s
        ? ((t.x = Oo(i, s, !0)),
          (t.y = Oo(r, s, !0)),
          (t.width = Math.max(Oo(i + o, s, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Oo(r + a, s, !1) - t.y, 0 === a ? 0 : 1)),
          t)
        : t;
    }
  }
  function Oo(t, e, n) {
    if (!e) return t;
    var i = cS(2 * t);
    return (i + cS(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }
  function Ro(t) {
    return 'string' != typeof t || (-1 === t.indexOf('px') && -1 === t.indexOf('rem') && -1 === t.indexOf('em'))
      ? isNaN(+t)
        ? g_ + 'px'
        : t + 'px'
      : t;
  }
  function Bo(t, e) {
    for (var n = 0; n < wS.length; n++) {
      var i = wS[n],
        r = e[i];
      null != r && (t[i] = r);
    }
  }
  function zo(t) {
    return null != t.fontSize || t.fontFamily || t.fontWeight;
  }
  function Eo(t) {
    return No(t), v(t.rich, No), t;
  }
  function No(t) {
    if (t) {
      t.font = mS.makeFont(t);
      var e = t.align;
      'middle' === e && (e = 'center'), (t.align = null == e || _S[e] ? e : 'left');
      var n = t.verticalAlign;
      'center' === n && (n = 'middle'), (t.verticalAlign = null == n || xS[n] ? n : 'top');
      var i = t.padding;
      i && (t.padding = H(t.padding));
    }
  }
  function Fo(t, e) {
    return null == t || 0 >= e || 'transparent' === t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t;
  }
  function Vo(t) {
    return null == t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t;
  }
  function Ho(t, e, n) {
    return 'right' === e ? t - n[1] : 'center' === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }
  function Wo(t) {
    var e = t.text;
    return null != e && (e += ''), e;
  }
  function Go(t) {
    return !!(t.backgroundColor || t.lineHeight || (t.borderWidth && t.borderColor));
  }
  function Uo(t) {
    return null != t && 'none' !== t;
  }
  function Xo(t) {
    if (C(t)) {
      var e = VS.get(t);
      return e || ((e = Cn(t, -0.1)), VS.put(t, e)), e;
    }
    if (O(t)) {
      var n = h({}, t);
      return (
        (n.colorStops = y(t.colorStops, function (t) {
          return { offset: t.offset, color: Cn(t.color, -0.1) };
        })),
        n
      );
    }
    return t;
  }
  function Yo(t, e, n) {
    t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), (t.hoverState = n);
  }
  function Zo(t) {
    Yo(t, 'emphasis', AS);
  }
  function qo(t) {
    t.hoverState === AS && Yo(t, 'normal', DS);
  }
  function jo(t) {
    Yo(t, 'blur', kS);
  }
  function Ko(t) {
    t.hoverState === kS && Yo(t, 'normal', DS);
  }
  function $o(t) {
    t.selected = !0;
  }
  function Qo(t) {
    t.selected = !1;
  }
  function Jo(t, e, n) {
    e(t, n);
  }
  function ta(t, e, n) {
    Jo(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          Jo(t, e, n);
        });
  }
  function ea(t, e) {
    switch (e) {
      case 'emphasis':
        t.hoverState = AS;
        break;
      case 'normal':
        t.hoverState = DS;
        break;
      case 'blur':
        t.hoverState = kS;
        break;
      case 'select':
        t.selected = !0;
    }
  }
  function na(t, e, n, i) {
    for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
      var s = e[a],
        l = r[s];
      o[s] = null == l ? i && i[s] : l;
    }
    for (var a = 0; a < t.animators.length; a++) {
      var u = t.animators[a];
      u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && 'style' === u.targetName && u.saveTo(o, e);
    }
    return o;
  }
  function ia(t, e, n, i) {
    var r = n && p(n, 'select') >= 0,
      o = !1;
    if (t instanceof oS) {
      var a = CS(t),
        s = r ? a.selectFill || a.normalFill : a.normalFill,
        l = r ? a.selectStroke || a.normalStroke : a.normalStroke;
      if (Uo(s) || Uo(l)) {
        i = i || {};
        var u = i.style || {};
        'inherit' === u.fill
          ? ((o = !0), (i = h({}, i)), (u = h({}, u)), (u.fill = s))
          : !Uo(u.fill) && Uo(s)
          ? ((o = !0), (i = h({}, i)), (u = h({}, u)), (u.fill = Xo(s)))
          : !Uo(u.stroke) && Uo(l) && (o || ((i = h({}, i)), (u = h({}, u))), (u.stroke = Xo(l))),
          (i.style = u);
      }
    }
    if (i && null == i.z2) {
      o || (i = h({}, i));
      var c = t.z2EmphasisLift;
      i.z2 = t.z2 + (null != c ? c : OS);
    }
    return i;
  }
  function ra(t, e, n) {
    if (n && null == n.z2) {
      n = h({}, n);
      var i = t.z2SelectLift;
      n.z2 = t.z2 + (null != i ? i : RS);
    }
    return n;
  }
  function oa(t, e, n) {
    var i = p(t.currentStates, e) >= 0,
      r = t.style.opacity,
      o = i ? null : na(t, ['opacity'], e, { opacity: 1 });
    n = n || {};
    var a = n.style || {};
    return null == a.opacity && ((n = h({}, n)), (a = h({ opacity: i ? r : 0.1 * o.opacity }, a)), (n.style = a)), n;
  }
  function aa(t, e) {
    var n = this.states[t];
    if (this.style) {
      if ('emphasis' === t) return ia(this, t, e, n);
      if ('blur' === t) return oa(this, t, n);
      if ('select' === t) return ra(this, t, n);
    }
    return n;
  }
  function sa(t) {
    t.stateProxy = aa;
    var e = t.getTextContent(),
      n = t.getTextGuideLine();
    e && (e.stateProxy = aa), n && (n.stateProxy = aa);
  }
  function la(t, e) {
    !va(t, e) && !t.__highByOuter && ta(t, Zo);
  }
  function ua(t, e) {
    !va(t, e) && !t.__highByOuter && ta(t, qo);
  }
  function ha(t, e) {
    (t.__highByOuter |= 1 << (e || 0)), ta(t, Zo);
  }
  function ca(t, e) {
    !(t.__highByOuter &= ~(1 << (e || 0))) && ta(t, qo);
  }
  function pa(t) {
    ta(t, jo);
  }
  function da(t) {
    ta(t, Ko);
  }
  function fa(t) {
    ta(t, $o);
  }
  function ga(t) {
    ta(t, Qo);
  }
  function va(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }
  function ya(t) {
    var e = t.getModel(),
      n = [],
      i = [];
    e.eachComponent(function (e, r) {
      var o = IS(r),
        a = 'series' === e,
        s = a ? t.getViewOfSeriesModel(r) : t.getViewOfComponentModel(r);
      !a && i.push(s),
        o.isBlured &&
          (s.group.traverse(function (t) {
            Ko(t);
          }),
          a && n.push(r)),
        (o.isBlured = !1);
    }),
      v(i, function (t) {
        t && t.toggleBlurSeries && t.toggleBlurSeries(n, !1, e);
      });
  }
  function ma(t, e, n, i) {
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n]);
        i && da(i);
      }
    }
    var o = i.getModel();
    if (((n = n || 'coordinateSystem'), null != t && e && 'none' !== e)) {
      var a = o.getSeriesByIndex(t),
        s = a.coordinateSystem;
      s && s.master && (s = s.master);
      var l = [];
      o.eachSeries(function (t) {
        var o = a === t,
          u = t.coordinateSystem;
        u && u.master && (u = u.master);
        var h = u && s ? u === s : o;
        if (!(('series' === n && !o) || ('coordinateSystem' === n && !h) || ('series' === e && o))) {
          var c = i.getViewOfSeriesModel(t);
          if (
            (c.group.traverse(function (t) {
              jo(t);
            }),
            g(e))
          )
            r(t.getData(), e);
          else if (k(e)) for (var p = w(e), d = 0; d < p.length; d++) r(t.getData(p[d]), e[p[d]]);
          l.push(t), (IS(t).isBlured = !0);
        }
      }),
        o.eachComponent(function (t, e) {
          if ('series' !== t) {
            var n = i.getViewOfComponentModel(e);
            n && n.toggleBlurSeries && n.toggleBlurSeries(l, !0, o);
          }
        });
    }
  }
  function _a(t, e, n) {
    if (null != t && null != e) {
      var i = n.getModel().getComponent(t, e);
      if (i) {
        IS(i).isBlured = !0;
        var r = n.getViewOfComponentModel(i);
        r &&
          r.focusBlurEnabled &&
          r.group.traverse(function (t) {
            jo(t);
          });
      }
    }
  }
  function xa(t, e, n) {
    var i = t.seriesIndex,
      r = t.getData(e.dataType);
    if (r) {
      var o = Ir(r, e);
      o = (M(o) ? o[0] : o) || 0;
      var a = r.getItemGraphicEl(o);
      if (!a) for (var s = r.count(), l = 0; !a && s > l; ) a = r.getItemGraphicEl(l++);
      if (a) {
        var u = bS(a);
        ma(i, u.focus, u.blurScope, n);
      } else {
        var h = t.get(['emphasis', 'focus']),
          c = t.get(['emphasis', 'blurScope']);
        null != h && ma(i, h, c, n);
      }
    }
  }
  function wa(t, e, n, i) {
    var r = { focusSelf: !1, dispatchers: null };
    if (null == t || 'series' === t || null == e || null == n) return r;
    var o = i.getModel().getComponent(t, e);
    if (!o) return r;
    var a = i.getViewOfComponentModel(o);
    if (!a || !a.findHighDownDispatchers) return r;
    for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++)
      if ('self' === bS(l[u]).focus) {
        s = !0;
        break;
      }
    return { focusSelf: s, dispatchers: l };
  }
  function ba(t, e, n) {
    var i = bS(t),
      r = wa(i.componentMainType, i.componentIndex, i.componentHighDownName, n),
      o = r.dispatchers,
      a = r.focusSelf;
    o
      ? (a && _a(i.componentMainType, i.componentIndex, n),
        v(o, function (t) {
          return la(t, e);
        }))
      : (ma(i.seriesIndex, i.focus, i.blurScope, n),
        'self' === i.focus && _a(i.componentMainType, i.componentIndex, n),
        la(t, e));
  }
  function Sa(t, e, n) {
    ya(n);
    var i = bS(t),
      r = wa(i.componentMainType, i.componentIndex, i.componentHighDownName, n).dispatchers;
    r
      ? v(r, function (t) {
          return ua(t, e);
        })
      : ua(t, e);
  }
  function Ma(t, e) {
    if (Ba(e)) {
      var n = e.dataType,
        i = t.getData(n),
        r = Ir(i, e);
      M(r) || (r = [r]), t[e.type === FS ? 'toggleSelect' : e.type === ES ? 'select' : 'unselect'](r, n);
    }
  }
  function Ta(t) {
    var e = t.getAllData();
    v(e, function (e) {
      var n = e.data,
        i = e.type;
      n.eachItemGraphicEl(function (e, n) {
        t.isSelected(n, i) ? fa(e) : ga(e);
      });
    });
  }
  function Ca(t) {
    var e = [];
    return (
      t.eachSeries(function (t) {
        var n = t.getAllData();
        v(n, function (n) {
          var i = (n.data, n.type),
            r = t.getSelectedDataIndices();
          if (r.length > 0) {
            var o = { dataIndex: r, seriesIndex: t.seriesIndex };
            null != i && (o.dataType = i), e.push(o);
          }
        });
      }),
      e
    );
  }
  function Ia(t, e, n) {
    La(t, !0), ta(t, sa), Aa(t, e, n);
  }
  function Da(t) {
    La(t, !1);
  }
  function ka(t, e, n, i) {
    i ? Da(t) : Ia(t, e, n);
  }
  function Aa(t, e, n) {
    var i = bS(t);
    null != e ? ((i.focus = e), (i.blurScope = n)) : i.focus && (i.focus = null);
  }
  function Pa(t, e, n, i) {
    n = n || 'itemStyle';
    for (var r = 0; r < HS.length; r++) {
      var o = HS[r],
        a = e.getModel([o, n]),
        s = t.ensureState(o);
      s.style = i ? i(a) : a[WS[n]]();
    }
  }
  function La(t, e) {
    var n = e === !1,
      i = t;
    t.highDownSilentOnTouch && (i.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (!n || i.__highDownDispatcher) && ((i.__highByOuter = i.__highByOuter || 0), (i.__highDownDispatcher = !n));
  }
  function Oa(t) {
    return !(!t || !t.__highDownDispatcher);
  }
  function Ra(t) {
    var e = TS[t];
    return null == e && 32 >= MS && (e = TS[t] = MS++), e;
  }
  function Ba(t) {
    var e = t.type;
    return e === ES || e === NS || e === FS;
  }
  function za(t) {
    var e = t.type;
    return e === BS || e === zS;
  }
  function Ea(t) {
    var e = CS(t);
    (e.normalFill = t.style.fill), (e.normalStroke = t.style.stroke);
    var n = t.states.select || {};
    (e.selectFill = (n.style && n.style.fill) || null), (e.selectStroke = (n.style && n.style.stroke) || null);
  }
  function Na(t, e) {
    if (e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l = t.data,
        u = t.len(),
        h = GS.M,
        c = GS.C,
        p = GS.L,
        d = GS.R,
        f = GS.A,
        g = GS.Q;
      for (r = 0, o = 0; u > r; ) {
        switch (((n = l[r++]), (o = r), (i = 0), n)) {
          case h:
            i = 1;
            break;
          case p:
            i = 1;
            break;
          case c:
            i = 3;
            break;
          case g:
            i = 2;
            break;
          case f:
            var v = e[4],
              y = e[5],
              m = XS(e[0] * e[0] + e[1] * e[1]),
              _ = XS(e[2] * e[2] + e[3] * e[3]),
              x = YS(-e[1] / _, e[0] / m);
            (l[r] *= m),
              (l[r++] += v),
              (l[r] *= _),
              (l[r++] += y),
              (l[r++] *= m),
              (l[r++] *= _),
              (l[r++] += x),
              (l[r++] += x),
              (r += 2),
              (o = r);
            break;
          case d:
            (s[0] = l[r++]),
              (s[1] = l[r++]),
              ve(s, s, e),
              (l[o++] = s[0]),
              (l[o++] = s[1]),
              (s[0] += l[r++]),
              (s[1] += l[r++]),
              ve(s, s, e),
              (l[o++] = s[0]),
              (l[o++] = s[1]);
        }
        for (a = 0; i > a; a++) {
          var w = US[a];
          (w[0] = l[r++]), (w[1] = l[r++]), ve(w, w, e), (l[o++] = w[0]), (l[o++] = w[1]);
        }
      }
      t.increaseVersion();
    }
  }
  function Fa(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  function Va(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Fa(t) * Fa(e));
  }
  function Ha(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Va(t, e));
  }
  function Wa(t, e, n, i, r, o, a, s, l, u, h) {
    var c = l * (KS / 180),
      p = (jS(c) * (t - n)) / 2 + (qS(c) * (e - i)) / 2,
      d = (-1 * qS(c) * (t - n)) / 2 + (jS(c) * (e - i)) / 2,
      f = (p * p) / (a * a) + (d * d) / (s * s);
    f > 1 && ((a *= ZS(f)), (s *= ZS(f)));
    var g =
        (r === o ? -1 : 1) * ZS((a * a * s * s - a * a * d * d - s * s * p * p) / (a * a * d * d + s * s * p * p)) || 0,
      v = (g * a * d) / s,
      y = (g * -s * p) / a,
      m = (t + n) / 2 + jS(c) * v - qS(c) * y,
      _ = (e + i) / 2 + qS(c) * v + jS(c) * y,
      x = Ha([1, 0], [(p - v) / a, (d - y) / s]),
      w = [(p - v) / a, (d - y) / s],
      b = [(-1 * p - v) / a, (-1 * d - y) / s],
      S = Ha(w, b);
    if ((Va(w, b) <= -1 && (S = KS), Va(w, b) >= 1 && (S = 0), 0 > S)) {
      var M = Math.round((S / KS) * 1e6) / 1e6;
      S = 2 * KS + (M % 2) * KS;
    }
    h.addData(u, m, _, a, s, x, S, c, o);
  }
  function Ga(t) {
    var e = new qb();
    if (!t) return e;
    var n,
      i = 0,
      r = 0,
      o = i,
      a = r,
      s = qb.CMD,
      l = t.match($S);
    if (!l) return e;
    for (var u = 0; u < l.length; u++) {
      for (var h = l[u], c = h.charAt(0), p = void 0, d = h.match(QS) || [], f = d.length, g = 0; f > g; g++)
        d[g] = parseFloat(d[g]);
      for (var v = 0; f > v; ) {
        var y = void 0,
          m = void 0,
          _ = void 0,
          x = void 0,
          w = void 0,
          b = void 0,
          S = void 0,
          M = i,
          T = r,
          C = void 0,
          I = void 0;
        switch (c) {
          case 'l':
            (i += d[v++]), (r += d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'L':
            (i = d[v++]), (r = d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'm':
            (i += d[v++]), (r += d[v++]), (p = s.M), e.addData(p, i, r), (o = i), (a = r), (c = 'l');
            break;
          case 'M':
            (i = d[v++]), (r = d[v++]), (p = s.M), e.addData(p, i, r), (o = i), (a = r), (c = 'L');
            break;
          case 'h':
            (i += d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'H':
            (i = d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'v':
            (r += d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'V':
            (r = d[v++]), (p = s.L), e.addData(p, i, r);
            break;
          case 'C':
            (p = s.C), e.addData(p, d[v++], d[v++], d[v++], d[v++], d[v++], d[v++]), (i = d[v - 2]), (r = d[v - 1]);
            break;
          case 'c':
            (p = s.C),
              e.addData(p, d[v++] + i, d[v++] + r, d[v++] + i, d[v++] + r, d[v++] + i, d[v++] + r),
              (i += d[v - 2]),
              (r += d[v - 1]);
            break;
          case 'S':
            (y = i),
              (m = r),
              (C = e.len()),
              (I = e.data),
              n === s.C && ((y += i - I[C - 4]), (m += r - I[C - 3])),
              (p = s.C),
              (M = d[v++]),
              (T = d[v++]),
              (i = d[v++]),
              (r = d[v++]),
              e.addData(p, y, m, M, T, i, r);
            break;
          case 's':
            (y = i),
              (m = r),
              (C = e.len()),
              (I = e.data),
              n === s.C && ((y += i - I[C - 4]), (m += r - I[C - 3])),
              (p = s.C),
              (M = i + d[v++]),
              (T = r + d[v++]),
              (i += d[v++]),
              (r += d[v++]),
              e.addData(p, y, m, M, T, i, r);
            break;
          case 'Q':
            (M = d[v++]), (T = d[v++]), (i = d[v++]), (r = d[v++]), (p = s.Q), e.addData(p, M, T, i, r);
            break;
          case 'q':
            (M = d[v++] + i), (T = d[v++] + r), (i += d[v++]), (r += d[v++]), (p = s.Q), e.addData(p, M, T, i, r);
            break;
          case 'T':
            (y = i),
              (m = r),
              (C = e.len()),
              (I = e.data),
              n === s.Q && ((y += i - I[C - 4]), (m += r - I[C - 3])),
              (i = d[v++]),
              (r = d[v++]),
              (p = s.Q),
              e.addData(p, y, m, i, r);
            break;
          case 't':
            (y = i),
              (m = r),
              (C = e.len()),
              (I = e.data),
              n === s.Q && ((y += i - I[C - 4]), (m += r - I[C - 3])),
              (i += d[v++]),
              (r += d[v++]),
              (p = s.Q),
              e.addData(p, y, m, i, r);
            break;
          case 'A':
            (_ = d[v++]),
              (x = d[v++]),
              (w = d[v++]),
              (b = d[v++]),
              (S = d[v++]),
              (M = i),
              (T = r),
              (i = d[v++]),
              (r = d[v++]),
              (p = s.A),
              Wa(M, T, i, r, b, S, _, x, w, p, e);
            break;
          case 'a':
            (_ = d[v++]),
              (x = d[v++]),
              (w = d[v++]),
              (b = d[v++]),
              (S = d[v++]),
              (M = i),
              (T = r),
              (i += d[v++]),
              (r += d[v++]),
              (p = s.A),
              Wa(M, T, i, r, b, S, _, x, w, p, e);
        }
      }
      ('z' === c || 'Z' === c) && ((p = s.Z), e.addData(p), (i = o), (r = a)), (n = p);
    }
    return e.toStatic(), e;
  }
  function Ua(t) {
    return null != t.setData;
  }
  function Xa(t, e) {
    var n = Ga(t),
      i = h({}, e);
    return (
      (i.buildPath = function (t) {
        if (Ua(t)) {
          t.setData(n.data);
          var e = t.getContext();
          e && t.rebuildPath(e, 1);
        } else {
          var e = t;
          n.rebuildPath(e, 1);
        }
      }),
      (i.applyTransform = function (t) {
        Na(n, t), this.dirtyShape();
      }),
      i
    );
  }
  function Ya(t, e) {
    return new JS(Xa(t, e));
  }
  function Za(t, n) {
    var i = Xa(t, n),
      r = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return (n.applyTransform = i.applyTransform), (n.buildPath = i.buildPath), n;
        }
        return e(n, t), n;
      })(JS);
    return r;
  }
  function qa(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var o = t[r];
      n.push(o.getUpdatedPathProxy(!0));
    }
    var a = new oS(e);
    return (
      a.createPathProxy(),
      (a.buildPath = function (t) {
        if (Ua(t)) {
          t.appendPath(n);
          var e = t.getContext();
          e && t.rebuildPath(e, 1);
        }
      }),
      a
    );
  }
  function ja(t, e, n, i, r, o, a, s) {
    var l = n - t,
      u = i - e,
      h = a - r,
      c = s - o,
      p = c * l - h * u;
    return fM > p * p ? void 0 : ((p = (h * (e - o) - c * (t - r)) / p), [t + p * l, e + p * u]);
  }
  function Ka(t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      u = (a ? o : -o) / cM(s * s + l * l),
      h = u * l,
      c = -u * s,
      p = t + h,
      d = e + c,
      f = n + h,
      g = i + c,
      v = (p + f) / 2,
      y = (d + g) / 2,
      m = f - p,
      _ = g - d,
      x = m * m + _ * _,
      w = r - o,
      b = p * g - f * d,
      S = (0 > _ ? -1 : 1) * cM(pM(0, w * w * x - b * b)),
      M = (b * _ - m * S) / x,
      T = (-b * m - _ * S) / x,
      C = (b * _ + m * S) / x,
      I = (-b * m + _ * S) / x,
      D = M - v,
      k = T - y,
      A = C - v,
      P = I - y;
    return (
      D * D + k * k > A * A + P * P && ((M = C), (T = I)),
      { cx: M, cy: T, x0: -h, y0: -c, x1: M * (r / w - 1), y1: T * (r / w - 1) }
    );
  }
  function $a(t) {
    var e;
    if (M(t)) {
      var n = t.length;
      if (!n) return t;
      e = 1 === n ? [t[0], t[0], 0, 0] : 2 === n ? [t[0], t[0], t[1], t[1]] : 3 === n ? t.concat(t[2]) : t;
    } else e = [t, t, t, t];
    return e;
  }
  function Qa(t, e) {
    var n,
      i = pM(e.r, 0),
      r = pM(e.r0 || 0, 0),
      o = i > 0,
      a = r > 0;
    if (o || a) {
      if ((o || ((i = r), (r = 0)), r > i)) {
        var s = i;
        (i = r), (r = s);
      }
      var l = e.startAngle,
        u = e.endAngle;
      if (!isNaN(l) && !isNaN(u)) {
        var h = e.cx,
          c = e.cy,
          p = !!e.clockwise,
          d = hM(u - l),
          f = d > oM && d % oM;
        if ((f > fM && (d = f), i > fM))
          if (d > oM - fM)
            t.moveTo(h + i * sM(l), c + i * aM(l)),
              t.arc(h, c, i, l, u, !p),
              r > fM && (t.moveTo(h + r * sM(u), c + r * aM(u)), t.arc(h, c, r, u, l, p));
          else {
            var g = void 0,
              v = void 0,
              y = void 0,
              m = void 0,
              _ = void 0,
              x = void 0,
              w = void 0,
              b = void 0,
              S = void 0,
              M = void 0,
              T = void 0,
              C = void 0,
              I = void 0,
              D = void 0,
              k = void 0,
              A = void 0,
              P = i * sM(l),
              L = i * aM(l),
              O = r * sM(u),
              R = r * aM(u),
              B = d > fM;
            if (B) {
              var z = e.cornerRadius;
              z && ((n = $a(z)), (g = n[0]), (v = n[1]), (y = n[2]), (m = n[3]));
              var E = hM(i - r) / 2;
              if (
                ((_ = dM(E, y)),
                (x = dM(E, m)),
                (w = dM(E, g)),
                (b = dM(E, v)),
                (T = S = pM(_, x)),
                (C = M = pM(w, b)),
                (S > fM || M > fM) && ((I = i * sM(u)), (D = i * aM(u)), (k = r * sM(l)), (A = r * aM(l)), rM > d))
              ) {
                var N = ja(P, L, k, A, I, D, O, R);
                if (N) {
                  var F = P - N[0],
                    V = L - N[1],
                    H = I - N[0],
                    W = D - N[1],
                    G = 1 / aM(lM((F * H + V * W) / (cM(F * F + V * V) * cM(H * H + W * W))) / 2),
                    U = cM(N[0] * N[0] + N[1] * N[1]);
                  (T = dM(S, (i - U) / (G + 1))), (C = dM(M, (r - U) / (G - 1)));
                }
              }
            }
            if (B)
              if (T > fM) {
                var X = dM(y, T),
                  Y = dM(m, T),
                  Z = Ka(k, A, P, L, i, X, p),
                  q = Ka(I, D, O, R, i, Y, p);
                t.moveTo(h + Z.cx + Z.x0, c + Z.cy + Z.y0),
                  S > T && X === Y
                    ? t.arc(h + Z.cx, c + Z.cy, T, uM(Z.y0, Z.x0), uM(q.y0, q.x0), !p)
                    : (X > 0 && t.arc(h + Z.cx, c + Z.cy, X, uM(Z.y0, Z.x0), uM(Z.y1, Z.x1), !p),
                      t.arc(h, c, i, uM(Z.cy + Z.y1, Z.cx + Z.x1), uM(q.cy + q.y1, q.cx + q.x1), !p),
                      Y > 0 && t.arc(h + q.cx, c + q.cy, Y, uM(q.y1, q.x1), uM(q.y0, q.x0), !p));
              } else t.moveTo(h + P, c + L), t.arc(h, c, i, l, u, !p);
            else t.moveTo(h + P, c + L);
            if (r > fM && B)
              if (C > fM) {
                var X = dM(g, C),
                  Y = dM(v, C),
                  Z = Ka(O, R, I, D, r, -Y, p),
                  q = Ka(P, L, k, A, r, -X, p);
                t.lineTo(h + Z.cx + Z.x0, c + Z.cy + Z.y0),
                  M > C && X === Y
                    ? t.arc(h + Z.cx, c + Z.cy, C, uM(Z.y0, Z.x0), uM(q.y0, q.x0), !p)
                    : (Y > 0 && t.arc(h + Z.cx, c + Z.cy, Y, uM(Z.y0, Z.x0), uM(Z.y1, Z.x1), !p),
                      t.arc(h, c, r, uM(Z.cy + Z.y1, Z.cx + Z.x1), uM(q.cy + q.y1, q.cx + q.x1), p),
                      X > 0 && t.arc(h + q.cx, c + q.cy, X, uM(q.y1, q.x1), uM(q.y0, q.x0), !p));
              } else t.lineTo(h + O, c + R), t.arc(h, c, r, u, l, p);
            else t.lineTo(h + O, c + R);
          }
        else t.moveTo(h, c);
        t.closePath();
      }
    }
  }
  function Ja(t, e, n, i) {
    var r,
      o,
      a,
      s,
      l = [],
      u = [],
      h = [],
      c = [];
    if (i) {
      (a = [1 / 0, 1 / 0]), (s = [-1 / 0, -1 / 0]);
      for (var p = 0, d = t.length; d > p; p++) ye(a, a, t[p]), me(s, s, t[p]);
      ye(a, a, i[0]), me(s, s, i[1]);
    }
    for (var p = 0, d = t.length; d > p; p++) {
      var f = t[p];
      if (n) (r = t[p ? p - 1 : d - 1]), (o = t[(p + 1) % d]);
      else {
        if (0 === p || p === d - 1) {
          l.push(te(t[p]));
          continue;
        }
        (r = t[p - 1]), (o = t[p + 1]);
      }
      re(u, o, r), he(u, u, e);
      var g = pe(f, r),
        v = pe(f, o),
        y = g + v;
      0 !== y && ((g /= y), (v /= y)), he(h, u, -g), he(c, u, v);
      var m = ne([], f, h),
        _ = ne([], f, c);
      i && (me(m, m, a), ye(m, m, s), me(_, _, a), ye(_, _, s)), l.push(m), l.push(_);
    }
    return n && l.push(l.shift()), l;
  }
  function ts(t, e, n) {
    var i = e.smooth,
      r = e.points;
    if (r && r.length >= 2) {
      if (i) {
        var o = Ja(r, i, n, e.smoothConstraint);
        t.moveTo(r[0][0], r[0][1]);
        for (var a = r.length, s = 0; (n ? a : a - 1) > s; s++) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = r[(s + 1) % a];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        t.moveTo(r[0][0], r[0][1]);
        for (var s = 1, c = r.length; c > s; s++) t.lineTo(r[s][0], r[s][1]);
      }
      n && t.closePath();
    }
  }
  function es(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null != i || null != r
      ? [(n ? Qe : $e)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Qe : $e)(t.y1, t.cpy1, t.cpy2, t.y2, e)]
      : [(n ? an : on)(t.x1, t.cpx1, t.x2, e), (n ? an : on)(t.y1, t.cpy1, t.y2, e)];
  }
  function ns(t, e, n, i, r) {
    var o;
    if (e && e.ecModel) {
      var a = e.ecModel.getUpdatePayload();
      o = a && a.animation;
    }
    var s = e && e.isAnimationEnabled(),
      l = 'update' === t;
    if (s) {
      var u = void 0,
        h = void 0,
        c = void 0;
      i
        ? ((u = N(i.duration, 200)), (h = N(i.easing, 'cubicOut')), (c = 0))
        : ((u = e.getShallow(l ? 'animationDurationUpdate' : 'animationDuration')),
          (h = e.getShallow(l ? 'animationEasingUpdate' : 'animationEasing')),
          (c = e.getShallow(l ? 'animationDelayUpdate' : 'animationDelay'))),
        o &&
          (null != o.duration && (u = o.duration),
          null != o.easing && (h = o.easing),
          null != o.delay && (c = o.delay)),
        T(c) && (c = c(n, r)),
        T(u) && (u = u(n));
      var p = { duration: u || 0, delay: c, easing: h };
      return p;
    }
    return null;
  }
  function is(t, e, n, i, r, o, a) {
    var s,
      l = !1;
    T(r)
      ? ((a = o), (o = r), (r = null))
      : k(r) && ((o = r.cb), (a = r.during), (l = r.isFrom), (s = r.removeOpt), (r = r.dataIndex));
    var u = 'leave' === t;
    u || e.stopAnimation('leave');
    var h = ns(t, i, r, u ? s || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null);
    if (h && h.duration > 0) {
      var c = h.duration,
        p = h.delay,
        d = h.easing,
        f = { duration: c, delay: p || 0, easing: d, done: o, force: !!o || !!a, setToFinal: !u, scope: t, during: a };
      l ? e.animateFrom(n, f) : e.animateTo(n, f);
    } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o();
  }
  function rs(t, e, n, i, r, o) {
    is('update', t, e, n, i, r, o);
  }
  function os(t, e, n, i, r, o) {
    is('enter', t, e, n, i, r, o);
  }
  function as(t) {
    if (!t.__zr) return !0;
    for (var e = 0; e < t.animators.length; e++) {
      var n = t.animators[e];
      if ('leave' === n.scope) return !0;
    }
    return !1;
  }
  function ss(t, e, n, i, r, o) {
    as(t) || is('leave', t, e, n, i, r, o);
  }
  function ls(t, e, n, i) {
    t.removeTextContent(), t.removeTextGuideLine(), ss(t, { style: { opacity: 0 } }, e, n, i);
  }
  function us(t, e, n) {
    function i() {
      t.parent && t.parent.remove(t);
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || ls(t, e, n, i);
        })
      : ls(t, e, n, i);
  }
  function hs(t) {
    WM(t).oldStyle = t.style;
  }
  function cs(t) {
    return oS.extend(t);
  }
  function ps(t, e) {
    return YM(t, e);
  }
  function ds(t, e) {
    XM[t] = e;
  }
  function fs(t) {
    return XM.hasOwnProperty(t) ? XM[t] : void 0;
  }
  function gs(t, e, n, i) {
    var r = Ya(t, e);
    return n && ('center' === i && (n = ys(n, r.getBoundingRect())), ms(r, n)), r;
  }
  function vs(t, e, n) {
    var i = new hS({
      style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
      onload: function (t) {
        if ('center' === n) {
          var r = { width: t.width, height: t.height };
          i.setStyle(ys(e, r));
        }
      },
    });
    return i;
  }
  function ys(t, e) {
    var n,
      i = e.width / e.height,
      r = t.height * i;
    r <= t.width ? (n = t.height) : ((r = t.width), (n = r / i));
    var o = t.x + t.width / 2,
      a = t.y + t.height / 2;
    return { x: o - r / 2, y: a - n / 2, width: r, height: n };
  }
  function ms(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        i = n.calculateTransform(e);
      t.applyTransform(i);
    }
  }
  function _s(t) {
    return Po(t.shape, t.shape, t.style), t;
  }
  function xs(t) {
    return Lo(t.shape, t.shape, t.style), t;
  }
  function ws(t, e) {
    for (var n = ai([]); t && t !== e; ) li(n, t.getLocalTransform(), n), (t = t.parent);
    return n;
  }
  function bs(t, e, n) {
    return e && !g(e) && (e = ww.getLocalTransform(e)), n && (e = pi([], e)), ve([], t, e);
  }
  function Ss(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs((2 * e[4]) / e[0]),
      r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs((2 * e[4]) / e[2]),
      o = ['left' === t ? -i : 'right' === t ? i : 0, 'top' === t ? -r : 'bottom' === t ? r : 0];
    return (
      (o = bs(o, e, n)), Math.abs(o[0]) > Math.abs(o[1]) ? (o[0] > 0 ? 'right' : 'left') : o[1] > 0 ? 'bottom' : 'top'
    );
  }
  function Ms(t) {
    return !t.isGroup;
  }
  function Ts(t) {
    return null != t.shape;
  }
  function Cs(t, e, n) {
    function i(t) {
      var e = {};
      return (
        t.traverse(function (t) {
          Ms(t) && t.anid && (e[t.anid] = t);
        }),
        e
      );
    }
    function r(t) {
      var e = { x: t.x, y: t.y, rotation: t.rotation };
      return Ts(t) && (e.shape = h({}, t.shape)), e;
    }
    if (t && e) {
      var o = i(t);
      e.traverse(function (t) {
        if (Ms(t) && t.anid) {
          var e = o[t.anid];
          if (e) {
            var i = r(t);
            t.attr(r(e)), rs(t, i, n, bS(t).dataIndex);
          }
        }
      });
    }
  }
  function Is(t, e) {
    return y(t, function (t) {
      var n = t[0];
      (n = GM(n, e.x)), (n = UM(n, e.x + e.width));
      var i = t[1];
      return (i = GM(i, e.y)), (i = UM(i, e.y + e.height)), [n, i];
    });
  }
  function Ds(t, e) {
    var n = GM(t.x, e.x),
      i = UM(t.x + t.width, e.x + e.width),
      r = GM(t.y, e.y),
      o = UM(t.y + t.height, e.y + e.height);
    return i >= n && o >= r ? { x: n, y: r, width: i - n, height: o - r } : void 0;
  }
  function ks(t, e, n) {
    var i = h({ rectHover: !0 }, e),
      r = (i.style = { strokeNoScale: !0 });
    return (
      (n = n || { x: -1, y: -1, width: 2, height: 2 }),
      t
        ? 0 === t.indexOf('image://')
          ? ((r.image = t.slice(8)), c(r, n), new hS(i))
          : gs(t.replace('path://', ''), i, n, 'center')
        : void 0
    );
  }
  function As(t, e, n, i, r) {
    for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
      var s = r[o];
      if (Ps(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
      a = s;
    }
  }
  function Ps(t, e, n, i, r, o, a, s) {
    var l = n - t,
      u = i - e,
      h = a - r,
      c = s - o,
      p = Ls(h, c, l, u);
    if (Os(p)) return !1;
    var d = t - r,
      f = e - o,
      g = Ls(d, f, l, u) / p;
    if (0 > g || g > 1) return !1;
    var v = Ls(d, f, h, c) / p;
    return 0 > v || v > 1 ? !1 : !0;
  }
  function Ls(t, e, n, i) {
    return t * i - n * e;
  }
  function Os(t) {
    return 1e-6 >= t && t >= -1e-6;
  }
  function Rs(t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      i = t.itemName,
      r = C(e) ? { formatter: e } : e,
      o = n.mainType,
      a = n.componentIndex,
      s = { componentType: o, name: i, $vars: ['name'] };
    s[o + 'Index'] = a;
    var l = t.formatterParamsExtra;
    l &&
      v(w(l), function (t) {
        K(s, t) || ((s[t] = l[t]), s.$vars.push(t));
      });
    var u = bS(t.el);
    (u.componentMainType = o),
      (u.componentIndex = a),
      (u.tooltipConfig = { name: i, option: c({ content: i, formatterParams: s }, r) });
  }
  function Bs(t, e) {
    var n;
    t.isGroup && (n = e(t)), n || t.traverse(e);
  }
  function zs(t, e) {
    if (t)
      if (M(t)) for (var n = 0; n < t.length; n++) Bs(t[n], e);
      else Bs(t, e);
  }
  function Es(t, e) {
    for (var n = 0; n < PS.length; n++) {
      var i = PS[n],
        r = e[i],
        o = t.ensureState(i);
      (o.style = o.style || {}), (o.style.text = r);
    }
    var a = t.currentStates.slice();
    t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(a, !0);
  }
  function Ns(t, e, n) {
    var i,
      r = t.labelFetcher,
      o = t.labelDataIndex,
      a = t.labelDimIndex,
      s = e.normal;
    r &&
      (i = r.getFormattedLabel(
        o,
        'normal',
        null,
        a,
        s && s.get('formatter'),
        null != n ? { interpolatedValue: n } : null,
      )),
      null == i && (i = T(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
    for (var l = { normal: i }, u = 0; u < PS.length; u++) {
      var h = PS[u],
        c = e[h];
      l[h] = N(r ? r.getFormattedLabel(o, h, null, a, c && c.get('formatter')) : null, i);
    }
    return l;
  }
  function Fs(t, e, n, i) {
    n = n || KM;
    for (var r = t instanceof mS, o = !1, a = 0; a < LS.length; a++) {
      var s = e[LS[a]];
      if (s && s.getShallow('show')) {
        o = !0;
        break;
      }
    }
    var l = r ? t : t.getTextContent();
    if (o) {
      r || (l || ((l = new mS()), t.setTextContent(l)), t.stateProxy && (l.stateProxy = t.stateProxy));
      var u = Ns(n, e),
        h = e.normal,
        c = !!h.getShallow('show'),
        p = Hs(h, i && i.normal, n, !1, !r);
      (p.text = u.normal), r || t.setTextConfig(Ws(h, n, !1));
      for (var a = 0; a < PS.length; a++) {
        var d = PS[a],
          s = e[d];
        if (s) {
          var f = l.ensureState(d),
            g = !!N(s.getShallow('show'), c);
          if ((g !== c && (f.ignore = !g), (f.style = Hs(s, i && i[d], n, !0, !r)), (f.style.text = u[d]), !r)) {
            var v = t.ensureState(d);
            v.textConfig = Ws(s, n, !0);
          }
        }
      }
      (l.silent = !!h.getShallow('silent')),
        null != l.style.x && (p.x = l.style.x),
        null != l.style.y && (p.y = l.style.y),
        (l.ignore = !c),
        l.useStyle(p),
        l.dirty(),
        n.enableTextSetter &&
          (tT(l).setLabelText = function (t) {
            var i = Ns(n, e, t);
            Es(l, i);
          });
    } else l && (l.ignore = !0);
    t.dirty();
  }
  function Vs(t, e) {
    e = e || 'label';
    for (var n = { normal: t.getModel(e) }, i = 0; i < PS.length; i++) {
      var r = PS[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function Hs(t, e, n, i, r) {
    var o = {};
    return Gs(o, t, n, i, r), e && h(o, e), o;
  }
  function Ws(t, e, n) {
    e = e || {};
    var i,
      r = {},
      o = t.getShallow('rotate'),
      a = N(t.getShallow('distance'), n ? null : 5),
      s = t.getShallow('offset');
    return (
      (i = t.getShallow('position') || (n ? null : 'inside')),
      'outside' === i && (i = e.defaultOutsidePosition || 'top'),
      null != i && (r.position = i),
      null != s && (r.offset = s),
      null != o && ((o *= Math.PI / 180), (r.rotation = o)),
      null != a && (r.distance = a),
      (r.outsideFill = 'inherit' === t.get('color') ? e.inheritColor || null : 'auto'),
      r
    );
  }
  function Gs(t, e, n, i, r) {
    n = n || KM;
    var o,
      a = e.ecModel,
      s = a && a.option.textStyle,
      l = Us(e);
    if (l) {
      o = {};
      for (var u in l)
        if (l.hasOwnProperty(u)) {
          var h = e.getModel(['rich', u]);
          Xs((o[u] = {}), h, s, n, i, r, !1, !0);
        }
    }
    o && (t.rich = o);
    var c = e.get('overflow');
    c && (t.overflow = c);
    var p = e.get('minMargin');
    null != p && (t.margin = p), Xs(t, e, s, n, i, r, !0, !1);
  }
  function Us(t) {
    for (var e; t && t !== t.ecModel; ) {
      var n = (t.option || KM).rich;
      if (n) {
        e = e || {};
        for (var i = w(n), r = 0; r < i.length; r++) {
          var o = i[r];
          e[o] = 1;
        }
      }
      t = t.parentModel;
    }
    return e;
  }
  function Xs(t, e, n, i, r, o, a, s) {
    n = (!r && n) || KM;
    var l = i && i.inheritColor,
      u = e.getShallow('color'),
      h = e.getShallow('textBorderColor'),
      c = N(e.getShallow('opacity'), n.opacity);
    ('inherit' === u || 'auto' === u) && (u = l ? l : null),
      ('inherit' === h || 'auto' === h) && (h = l ? l : null),
      o || ((u = u || n.color), (h = h || n.textBorderColor)),
      null != u && (t.fill = u),
      null != h && (t.stroke = h);
    var p = N(e.getShallow('textBorderWidth'), n.textBorderWidth);
    null != p && (t.lineWidth = p);
    var d = N(e.getShallow('textBorderType'), n.textBorderType);
    null != d && (t.lineDash = d);
    var f = N(e.getShallow('textBorderDashOffset'), n.textBorderDashOffset);
    null != f && (t.lineDashOffset = f),
      r || null != c || s || (c = i && i.defaultOpacity),
      null != c && (t.opacity = c),
      r || o || (null == t.fill && i.inheritColor && (t.fill = i.inheritColor));
    for (var g = 0; g < $M.length; g++) {
      var v = $M[g],
        y = N(e.getShallow(v), n[v]);
      null != y && (t[v] = y);
    }
    for (var g = 0; g < QM.length; g++) {
      var v = QM[g],
        y = e.getShallow(v);
      null != y && (t[v] = y);
    }
    if (null == t.verticalAlign) {
      var m = e.getShallow('baseline');
      null != m && (t.verticalAlign = m);
    }
    if (!a || !i.disableBox) {
      for (var g = 0; g < JM.length; g++) {
        var v = JM[g],
          y = e.getShallow(v);
        null != y && (t[v] = y);
      }
      var _ = e.getShallow('borderType');
      null != _ && (t.borderDash = _),
        ('auto' !== t.backgroundColor && 'inherit' !== t.backgroundColor) || !l || (t.backgroundColor = l),
        ('auto' !== t.borderColor && 'inherit' !== t.borderColor) || !l || (t.borderColor = l);
    }
  }
  function Ys(t, e) {
    var n = e && e.getModel('textStyle');
    return G(
      [
        t.fontStyle || (n && n.getShallow('fontStyle')) || '',
        t.fontWeight || (n && n.getShallow('fontWeight')) || '',
        (t.fontSize || (n && n.getShallow('fontSize')) || 12) + 'px',
        t.fontFamily || (n && n.getShallow('fontFamily')) || 'sans-serif',
      ].join(' '),
    );
  }
  function Zs(t, e, n, i) {
    if (t) {
      var r = tT(t);
      (r.prevValue = r.value), (r.value = n);
      var o = e.normal;
      (r.valueAnimation = o.get('valueAnimation')),
        r.valueAnimation && ((r.precision = o.get('precision')), (r.defaultInterpolatedText = i), (r.statesModels = e));
    }
  }
  function qs(t, e, n, i, r) {
    function o(i) {
      var o = Br(n, a.precision, l, u, i);
      a.interpolatedValue = 1 === i ? null : o;
      var h = Ns({ labelDataIndex: e, labelFetcher: r, defaultText: s ? s(o) : o + '' }, a.statesModels, o);
      Es(t, h);
    }
    var a = tT(t);
    if (a.valueAnimation && a.prevValue !== a.value) {
      var s = a.defaultInterpolatedText,
        l = N(a.interpolatedValue, a.prevValue),
        u = a.value;
      (t.percent = 0), (null == a.prevValue ? os : rs)(t, { percent: 1 }, i, e, null, o);
    }
  }
  function js(t) {
    return [t || '', pT++].join('_');
  }
  function Ks(t) {
    var e = {};
    (t.registerSubTypeDefaulter = function (t, n) {
      var i = zr(t);
      e[i.main] = n;
    }),
      (t.determineSubType = function (n, i) {
        var r = i.type;
        if (!r) {
          var o = zr(n).main;
          t.hasSubTypes(n) && e[o] && (r = e[o](i));
        }
        return r;
      });
  }
  function $s(t, e) {
    function n(t) {
      var n = {},
        o = [];
      return (
        v(t, function (a) {
          var s = i(n, a),
            l = (s.originalDeps = e(a)),
            u = r(l, t);
          (s.entryCount = u.length),
            0 === s.entryCount && o.push(a),
            v(u, function (t) {
              p(s.predecessor, t) < 0 && s.predecessor.push(t);
              var e = i(n, t);
              p(e.successor, t) < 0 && e.successor.push(a);
            });
        }),
        { graph: n, noEntryList: o }
      );
    }
    function i(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }
    function r(t, e) {
      var n = [];
      return (
        v(t, function (t) {
          p(e, t) >= 0 && n.push(t);
        }),
        n
      );
    }
    t.topologicalTravel = function (t, e, i, r) {
      function o(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
      }
      function a(t) {
        (h[t] = !0), o(t);
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          u = s.noEntryList,
          h = {};
        for (
          v(t, function (t) {
            h[t] = !0;
          });
          u.length;

        ) {
          var c = u.pop(),
            p = l[c],
            d = !!h[c];
          d && (i.call(r, c, p.originalDeps.slice()), delete h[c]), v(p.successor, d ? a : o);
        }
        v(h, function () {
          var t = '';
          throw new Error(t);
        });
      }
    };
  }
  function Qs(t, e) {
    return l(l({}, t, !0), e, !0);
  }
  function Js(t, e) {
    (t = t.toUpperCase()), (_T[t] = new cT(e)), (mT[t] = e);
  }
  function tl(t) {
    if (C(t)) {
      var e = mT[t.toUpperCase()] || {};
      return t === gT || t === vT ? s(e) : l(s(e), s(mT[yT]), !1);
    }
    return l(s(t), s(mT[yT]), !1);
  }
  function el(t) {
    return _T[t];
  }
  function nl() {
    return _T[yT];
  }
  function il(t, e) {
    return (t += ''), '0000'.substr(0, e - t.length) + t;
  }
  function rl(t) {
    switch (t) {
      case 'half-year':
      case 'quarter':
        return 'month';
      case 'week':
      case 'half-week':
        return 'day';
      case 'half-day':
      case 'quarter-day':
        return 'hour';
      default:
        return t;
    }
  }
  function ol(t) {
    return t === rl(t);
  }
  function al(t) {
    switch (t) {
      case 'year':
      case 'month':
        return 'day';
      case 'millisecond':
        return 'millisecond';
      default:
        return 'second';
    }
  }
  function sl(t, e, n, i) {
    var r = Ki(t),
      o = r[cl(n)](),
      a = r[pl(n)]() + 1,
      s = Math.floor((a - 1) / 3) + 1,
      l = r[dl(n)](),
      u = r['get' + (n ? 'UTC' : '') + 'Day'](),
      h = r[fl(n)](),
      c = ((h - 1) % 12) + 1,
      p = r[gl(n)](),
      d = r[vl(n)](),
      f = r[yl(n)](),
      g = i instanceof cT ? i : el(i || xT) || nl(),
      v = g.getModel('time'),
      y = v.get('month'),
      m = v.get('monthAbbr'),
      _ = v.get('dayOfWeek'),
      x = v.get('dayOfWeekAbbr');
    return (e || '')
      .replace(/{yyyy}/g, o + '')
      .replace(/{yy}/g, (o % 100) + '')
      .replace(/{Q}/g, s + '')
      .replace(/{MMMM}/g, y[a - 1])
      .replace(/{MMM}/g, m[a - 1])
      .replace(/{MM}/g, il(a, 2))
      .replace(/{M}/g, a + '')
      .replace(/{dd}/g, il(l, 2))
      .replace(/{d}/g, l + '')
      .replace(/{eeee}/g, _[u])
      .replace(/{ee}/g, x[u])
      .replace(/{e}/g, u + '')
      .replace(/{HH}/g, il(h, 2))
      .replace(/{H}/g, h + '')
      .replace(/{hh}/g, il(c + '', 2))
      .replace(/{h}/g, c + '')
      .replace(/{mm}/g, il(p, 2))
      .replace(/{m}/g, p + '')
      .replace(/{ss}/g, il(d, 2))
      .replace(/{s}/g, d + '')
      .replace(/{SSS}/g, il(f, 3))
      .replace(/{S}/g, f + '');
  }
  function ll(t, e, n, i, r) {
    var o = null;
    if (C(n)) o = n;
    else if (T(n)) o = n(t.value, e, { level: t.level });
    else {
      var a = h({}, CT);
      if (t.level > 0) for (var s = 0; s < kT.length; ++s) a[kT[s]] = '{primary|' + a[kT[s]] + '}';
      var l = n ? (n.inherit === !1 ? n : c(n, a)) : a,
        u = ul(t.value, r);
      if (l[u]) o = l[u];
      else if (l.inherit) {
        for (var p = AT.indexOf(u), s = p - 1; s >= 0; --s)
          if (l[u]) {
            o = l[u];
            break;
          }
        o = o || a.none;
      }
      if (M(o)) {
        var d = null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
        (d = Math.min(d, o.length - 1)), (o = o[d]);
      }
    }
    return sl(new Date(t.value), o, r, i);
  }
  function ul(t, e) {
    var n = Ki(t),
      i = n[pl(e)]() + 1,
      r = n[dl(e)](),
      o = n[fl(e)](),
      a = n[gl(e)](),
      s = n[vl(e)](),
      l = n[yl(e)](),
      u = 0 === l,
      h = u && 0 === s,
      c = h && 0 === a,
      p = c && 0 === o,
      d = p && 1 === r,
      f = d && 1 === i;
    return f ? 'year' : d ? 'month' : p ? 'day' : c ? 'hour' : h ? 'minute' : u ? 'second' : 'millisecond';
  }
  function hl(t, e, n) {
    var i = D(t) ? Ki(t) : t;
    switch ((e = e || ul(t, n))) {
      case 'year':
        return i[cl(n)]();
      case 'half-year':
        return i[pl(n)]() >= 6 ? 1 : 0;
      case 'quarter':
        return Math.floor((i[pl(n)]() + 1) / 4);
      case 'month':
        return i[pl(n)]();
      case 'day':
        return i[dl(n)]();
      case 'half-day':
        return i[fl(n)]() / 24;
      case 'hour':
        return i[fl(n)]();
      case 'minute':
        return i[gl(n)]();
      case 'second':
        return i[vl(n)]();
      case 'millisecond':
        return i[yl(n)]();
    }
  }
  function cl(t) {
    return t ? 'getUTCFullYear' : 'getFullYear';
  }
  function pl(t) {
    return t ? 'getUTCMonth' : 'getMonth';
  }
  function dl(t) {
    return t ? 'getUTCDate' : 'getDate';
  }
  function fl(t) {
    return t ? 'getUTCHours' : 'getHours';
  }
  function gl(t) {
    return t ? 'getUTCMinutes' : 'getMinutes';
  }
  function vl(t) {
    return t ? 'getUTCSeconds' : 'getSeconds';
  }
  function yl(t) {
    return t ? 'getUTCMilliseconds' : 'getMilliseconds';
  }
  function ml(t) {
    return t ? 'setUTCFullYear' : 'setFullYear';
  }
  function _l(t) {
    return t ? 'setUTCMonth' : 'setMonth';
  }
  function xl(t) {
    return t ? 'setUTCDate' : 'setDate';
  }
  function wl(t) {
    return t ? 'setUTCHours' : 'setHours';
  }
  function bl(t) {
    return t ? 'setUTCMinutes' : 'setMinutes';
  }
  function Sl(t) {
    return t ? 'setUTCSeconds' : 'setSeconds';
  }
  function Ml(t) {
    return t ? 'setUTCMilliseconds' : 'setMilliseconds';
  }
  function Tl(t, e, n, i, r, o, a, s) {
    var l = new mS({
      style: {
        text: t,
        font: e,
        align: n,
        verticalAlign: i,
        padding: r,
        rich: o,
        overflow: a ? 'truncate' : null,
        lineHeight: s,
      },
    });
    return l.getBoundingRect();
  }
  function Cl(t) {
    if (!ir(t)) return C(t) ? t : '-';
    var e = (t + '').split('.');
    return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + (e.length > 1 ? '.' + e[1] : '');
  }
  function Il(t, e) {
    return (
      (t = (t || '').toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      })),
      e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
      t
    );
  }
  function Dl(t) {
    return null == t
      ? ''
      : (t + '').replace(LT, function (t, e) {
          return OT[e];
        });
  }
  function kl(t, e, n) {
    function i(t) {
      return t && G(t) ? t : '-';
    }
    function r(t) {
      return !(null == t || isNaN(t) || !isFinite(t));
    }
    var o = '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}',
      a = 'time' === e,
      s = t instanceof Date;
    if (a || s) {
      var l = a ? Ki(t) : t;
      if (!isNaN(+l)) return sl(l, o, n);
      if (s) return '-';
    }
    if ('ordinal' === e) return I(t) ? i(t) : D(t) && r(t) ? t + '' : '-';
    var u = nr(t);
    return r(u) ? Cl(u) : I(t) ? i(t) : 'boolean' == typeof t ? t + '' : '-';
  }
  function Al(t, e, n) {
    M(e) || (e = [e]);
    var i = e.length;
    if (!i) return '';
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = RT[o];
      t = t.replace(BT(a), BT(a, 0));
    }
    for (var s = 0; i > s; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(BT(RT[l], s), n ? Dl(u) : u);
      }
    return t;
  }
  function Pl(t, e) {
    var n = C(t) ? { color: t, extraCssText: e } : t || {},
      i = n.color,
      r = n.type;
    e = n.extraCssText;
    var o = n.renderMode || 'html';
    if (!i) return '';
    if ('html' === o)
      return 'subItem' === r
        ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            Dl(i) +
            ';' +
            (e || '') +
            '"></span>'
        : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            Dl(i) +
            ';' +
            (e || '') +
            '"></span>';
    var a = n.markerId || 'markerX';
    return {
      renderMode: o,
      content: '{' + a + '|}  ',
      style:
        'subItem' === r
          ? { width: 4, height: 4, borderRadius: 2, backgroundColor: i }
          : { width: 10, height: 10, borderRadius: 5, backgroundColor: i },
    };
  }
  function Ll(t, e, n) {
    ('week' === t || 'month' === t || 'quarter' === t || 'half-year' === t || 'year' === t) && (t = 'MM-dd\nyyyy');
    var i = Ki(e),
      r = n ? 'getUTC' : 'get',
      o = i[r + 'FullYear'](),
      a = i[r + 'Month']() + 1,
      s = i[r + 'Date'](),
      l = i[r + 'Hours'](),
      u = i[r + 'Minutes'](),
      h = i[r + 'Seconds'](),
      c = i[r + 'Milliseconds']();
    return (t = t
      .replace('MM', il(a, 2))
      .replace('M', a)
      .replace('yyyy', o)
      .replace('yy', il((o % 100) + '', 2))
      .replace('dd', il(s, 2))
      .replace('d', s)
      .replace('hh', il(l, 2))
      .replace('h', l)
      .replace('mm', il(u, 2))
      .replace('m', u)
      .replace('ss', il(h, 2))
      .replace('s', h)
      .replace('SSS', il(c, 3)));
  }
  function Ol(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }
  function Rl(t, e) {
    return (e = e || 'transparent'), C(t) ? t : k(t) ? (t.colorStops && (t.colorStops[0] || {}).color) || e : e;
  }
  function Bl(t, e) {
    if ('_blank' === e || 'blank' === e) {
      var n = window.open();
      (n.opener = null), (n.location.href = t);
    } else window.open(t, e);
  }
  function zl(t, e, n, i, r) {
    var o = 0,
      a = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function (l, u) {
      var h,
        c,
        p = l.getBoundingRect(),
        d = e.childAt(u + 1),
        f = d && d.getBoundingRect();
      if ('horizontal' === t) {
        var g = p.width + (f ? -f.x + p.x : 0);
        (h = o + g),
          h > i || l.newline ? ((o = 0), (h = g), (a += s + n), (s = p.height)) : (s = Math.max(s, p.height));
      } else {
        var v = p.height + (f ? -f.y + p.y : 0);
        (c = a + v), c > r || l.newline ? ((o += s + n), (a = 0), (c = v), (s = p.width)) : (s = Math.max(s, p.width));
      }
      l.newline || ((l.x = o), (l.y = a), l.markRedraw(), 'horizontal' === t ? (o = h + n) : (a = c + n));
    });
  }
  function El(t, e, n) {
    n = PT(n || 0);
    var i = e.width,
      r = e.height,
      o = Vi(t.left, i),
      a = Vi(t.top, r),
      s = Vi(t.right, i),
      l = Vi(t.bottom, r),
      u = Vi(t.width, i),
      h = Vi(t.height, r),
      c = n[2] + n[0],
      p = n[1] + n[3],
      d = t.aspect;
    switch (
      (isNaN(u) && (u = i - s - p - o),
      isNaN(h) && (h = r - l - c - a),
      null != d &&
        (isNaN(u) && isNaN(h) && (d > i / r ? (u = 0.8 * i) : (h = 0.8 * r)),
        isNaN(u) && (u = d * h),
        isNaN(h) && (h = u / d)),
      isNaN(o) && (o = i - s - u - p),
      isNaN(a) && (a = r - l - h - c),
      t.left || t.right)
    ) {
      case 'center':
        o = i / 2 - u / 2 - n[3];
        break;
      case 'right':
        o = i - u - p;
    }
    switch (t.top || t.bottom) {
      case 'middle':
      case 'center':
        a = r / 2 - h / 2 - n[0];
        break;
      case 'bottom':
        a = r - h - c;
    }
    (o = o || 0), (a = a || 0), isNaN(u) && (u = i - p - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
    var f = new Lw(o + n[3], a + n[0], u, h);
    return (f.margin = n), f;
  }
  function Nl(t) {
    var e = t.layoutMode || t.constructor.layoutMode;
    return k(e) ? e : e ? { type: e } : null;
  }
  function Fl(t, e, n) {
    function i(n, i) {
      var a = {},
        l = 0,
        u = {},
        h = 0,
        c = 2;
      if (
        (zT(n, function (e) {
          u[e] = t[e];
        }),
        zT(n, function (t) {
          r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++;
        }),
        s[i])
      )
        return o(e, n[1]) ? (u[n[2]] = null) : o(e, n[2]) && (u[n[1]] = null), u;
      if (h !== c && l) {
        if (l >= c) return a;
        for (var p = 0; p < n.length; p++) {
          var d = n[p];
          if (!r(a, d) && r(t, d)) {
            a[d] = t[d];
            break;
          }
        }
        return a;
      }
      return u;
    }
    function r(t, e) {
      return t.hasOwnProperty(e);
    }
    function o(t, e) {
      return null != t[e] && 'auto' !== t[e];
    }
    function a(t, e, n) {
      zT(t, function (t) {
        e[t] = n[t];
      });
    }
    var s = n && n.ignoreSize;
    !M(s) && (s = [s, s]);
    var l = i(NT[0], 0),
      u = i(NT[1], 1);
    a(NT[0], t, l), a(NT[1], t, u);
  }
  function Vl(t) {
    return Hl({}, t);
  }
  function Hl(t, e) {
    return (
      e &&
        t &&
        zT(ET, function (n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }),
      t
    );
  }
  function Wl(t) {
    var e = [];
    return (
      v(HT.getClassesByMainType(t), function (t) {
        e = e.concat(t.dependencies || t.prototype.dependencies || []);
      }),
      (e = y(e, function (t) {
        return zr(t).main;
      })),
      'dataset' !== t && p(e, 'dataset') <= 0 && e.unshift('dataset'),
      e
    );
  }
  function Gl(t) {
    iC(t).datasetMap = Y();
  }
  function Ul(t, e, n) {
    function i(t, e, n) {
      for (var i = 0; n > i; i++) t.push(e + i);
    }
    function r(t) {
      var e = t.dimsDef;
      return e ? e.length : 1;
    }
    var o = {},
      a = Yl(e);
    if (!a || !t) return o;
    var s,
      l,
      u = [],
      h = [],
      c = e.ecModel,
      p = iC(c).datasetMap,
      d = a.uid + '_' + n.seriesLayoutBy;
    (t = t.slice()),
      v(t, function (e, n) {
        var i = k(e) ? e : (t[n] = { name: e });
        'ordinal' === i.type && null == s && ((s = n), (l = r(i))), (o[i.name] = []);
      });
    var f = p.get(d) || p.set(d, { categoryWayDim: l, valueWayDim: 0 });
    return (
      v(t, function (t, e) {
        var n = t.name,
          a = r(t);
        if (null == s) {
          var l = f.valueWayDim;
          i(o[n], l, a), i(h, l, a), (f.valueWayDim += a);
        } else if (s === e) i(o[n], 0, a), i(u, 0, a);
        else {
          var l = f.categoryWayDim;
          i(o[n], l, a), i(h, l, a), (f.categoryWayDim += a);
        }
      }),
      u.length && (o.itemName = u),
      h.length && (o.seriesName = h),
      o
    );
  }
  function Xl(t, e, n) {
    var i = {},
      r = Yl(t);
    if (!r) return i;
    var o,
      a = e.sourceFormat,
      s = e.dimensionsDefine;
    (a === KT || a === $T) &&
      v(s, function (t, e) {
        'name' === (k(t) ? t.name : t) && (o = e);
      });
    var l = (function () {
      function t(t) {
        return null != t.v && null != t.n;
      }
      for (var i = {}, r = {}, l = [], u = 0, h = Math.min(5, n); h > u; u++) {
        var c = jl(e.data, a, e.seriesLayoutBy, s, e.startIndex, u);
        l.push(c);
        var p = c === nC.Not;
        if (
          (p && null == i.v && u !== o && (i.v = u),
          (null == i.n || i.n === i.v || (!p && l[i.n] === nC.Not)) && (i.n = u),
          t(i) && l[i.n] !== nC.Not)
        )
          return i;
        p || (c === nC.Might && null == r.v && u !== o && (r.v = u), (null == r.n || r.n === r.v) && (r.n = u));
      }
      return t(i) ? i : t(r) ? r : null;
    })();
    if (l) {
      i.value = [l.v];
      var u = null != o ? o : l.n;
      (i.itemName = [u]), (i.seriesName = [u]);
    }
    return i;
  }
  function Yl(t) {
    var e = t.get('data', !0);
    return e
      ? void 0
      : Pr(t.ecModel, 'dataset', { index: t.get('datasetIndex', !0), id: t.get('datasetId', !0) }, tb).models[0];
  }
  function Zl(t) {
    return t.get('transform', !0) || t.get('fromTransformResult', !0)
      ? Pr(t.ecModel, 'dataset', { index: t.get('fromDatasetIndex', !0), id: t.get('fromDatasetId', !0) }, tb).models
      : [];
  }
  function ql(t, e) {
    return jl(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }
  function jl(t, e, n, i, r, o) {
    function a(t) {
      var e = C(t);
      return null != t && isFinite(t) && '' !== t ? (e ? nC.Might : nC.Not) : e && '-' !== t ? nC.Must : void 0;
    }
    var s,
      l = 5;
    if (P(t)) return nC.Not;
    var u, h;
    if (i) {
      var c = i[o];
      k(c) ? ((u = c.name), (h = c.type)) : C(c) && (u = c);
    }
    if (null != h) return 'ordinal' === h ? nC.Must : nC.Not;
    if (e === jT) {
      var p = t;
      if (n === eC) {
        for (var d = p[o], f = 0; f < (d || []).length && l > f; f++) if (null != (s = a(d[r + f]))) return s;
      } else
        for (var f = 0; f < p.length && l > f; f++) {
          var g = p[r + f];
          if (g && null != (s = a(g[o]))) return s;
        }
    } else if (e === KT) {
      var v = t;
      if (!u) return nC.Not;
      for (var f = 0; f < v.length && l > f; f++) {
        var y = v[f];
        if (y && null != (s = a(y[u]))) return s;
      }
    } else if (e === $T) {
      var m = t;
      if (!u) return nC.Not;
      var d = m[u];
      if (!d || P(d)) return nC.Not;
      for (var f = 0; f < d.length && l > f; f++) if (null != (s = a(d[f]))) return s;
    } else if (e === qT)
      for (var _ = t, f = 0; f < _.length && l > f; f++) {
        var y = _[f],
          x = cr(y);
        if (!M(x)) return nC.Not;
        if (null != (s = a(x[o]))) return s;
      }
    return nC.Not;
  }
  function Kl(t, e, n) {
    var i = rC.get(e);
    if (!i) return n;
    var r = i(t);
    return r ? n.concat(r) : n;
  }
  function $l(t, e) {
    for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
    return t[n - 1];
  }
  function Ql(t, e, n, i, r, o, a) {
    o = o || t;
    var s = e(o),
      l = s.paletteIdx || 0,
      u = (s.paletteNameMap = s.paletteNameMap || {});
    if (u.hasOwnProperty(r)) return u[r];
    var h = null != a && i ? $l(i, a) : n;
    if (((h = h || n), h && h.length)) {
      var c = h[l];
      return r && (u[r] = c), (s.paletteIdx = (l + 1) % h.length), c;
    }
  }
  function Jl(t, e) {
    (e(t).paletteIdx = 0), (e(t).paletteNameMap = {});
  }
  function tu(t, e) {
    if (e) {
      var n = e.seriesIndex,
        i = e.seriesId,
        r = e.seriesName;
      return (null != n && t.componentIndex !== n) || (null != i && t.id !== i) || (null != r && t.name !== r);
    }
  }
  function eu(t, e) {
    var n = t.color && !t.colorLayer;
    v(e, function (e, i) {
      ('colorLayer' === i && n) ||
        HT.hasClass(i) ||
        ('object' == typeof e ? (t[i] = t[i] ? l(t[i], e, !1) : s(e)) : null == t[i] && (t[i] = e));
    });
  }
  function nu(t, e, n) {
    if (M(e)) {
      var i = Y();
      return (
        v(e, function (t) {
          if (null != t) {
            var e = br(t, null);
            null != e && i.set(t, !0);
          }
        }),
        _(n, function (e) {
          return e && i.get(e[t]);
        })
      );
    }
    var r = br(e, null);
    return _(n, function (e) {
      return e && null != r && e[t] === r;
    });
  }
  function iu(t, e) {
    return e.hasOwnProperty('subType')
      ? _(t, function (t) {
          return t && t.subType === e.subType;
        })
      : t;
  }
  function ru(t) {
    var e = Y();
    return (
      t &&
        v(ur(t.replaceMerge), function (t) {
          e.set(t, !0);
        }),
      { replaceMergeMainTypeMap: e }
    );
  }
  function ou(t, e, n) {
    function i(t) {
      v(e, function (e) {
        e(t, n);
      });
    }
    var r,
      o,
      a = [],
      s = t.baseOption,
      l = t.timeline,
      u = t.options,
      h = t.media,
      c = !!t.media,
      p = !!(u || l || (s && s.timeline));
    return (
      s ? ((o = s), o.timeline || (o.timeline = l)) : ((p || c) && (t.options = t.media = null), (o = t)),
      c &&
        M(h) &&
        v(h, function (t) {
          t && t.option && (t.query ? a.push(t) : r || (r = t));
        }),
      i(o),
      v(u, function (t) {
        return i(t);
      }),
      v(a, function (t) {
        return i(t.option);
      }),
      { baseOption: o, timelineOptions: u || [], mediaDefault: r, mediaList: a }
    );
  }
  function au(t, e, n) {
    var i = { width: e, height: n, aspectratio: e / n },
      r = !0;
    return (
      v(t, function (t, e) {
        var n = e.match(xC);
        if (n && n[1] && n[2]) {
          var o = n[1],
            a = n[2].toLowerCase();
          su(i[a], t, o) || (r = !1);
        }
      }),
      r
    );
  }
  function su(t, e, n) {
    return 'min' === n ? t >= e : 'max' === n ? e >= t : t === e;
  }
  function lu(t, e) {
    return t.join(',') === e.join(',');
  }
  function uu(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = MC.length; i > n; n++) {
        var r = MC[n],
          o = e.normal,
          a = e.emphasis;
        o && o[r] && ((t[r] = t[r] || {}), t[r].normal ? l(t[r].normal, o[r]) : (t[r].normal = o[r]), (o[r] = null)),
          a &&
            a[r] &&
            ((t[r] = t[r] || {}), t[r].emphasis ? l(t[r].emphasis, a[r]) : (t[r].emphasis = a[r]), (a[r] = null));
      }
  }
  function hu(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
        r = t[e].emphasis;
      i && (n ? ((t[e].normal = t[e].emphasis = null), c(t[e], i)) : (t[e] = i)),
        r &&
          ((t.emphasis = t.emphasis || {}),
          (t.emphasis[e] = r),
          r.focus && (t.emphasis.focus = r.focus),
          r.blurScope && (t.emphasis.blurScope = r.blurScope));
    }
  }
  function cu(t) {
    hu(t, 'itemStyle'),
      hu(t, 'lineStyle'),
      hu(t, 'areaStyle'),
      hu(t, 'label'),
      hu(t, 'labelLine'),
      hu(t, 'upperLabel'),
      hu(t, 'edgeLabel');
  }
  function pu(t, e) {
    var n = SC(t) && t[e],
      i = SC(n) && n.textStyle;
    if (i)
      for (var r = 0, o = Qw.length; o > r; r++) {
        var a = Qw[r];
        i.hasOwnProperty(a) && (n[a] = i[a]);
      }
  }
  function du(t) {
    t && (cu(t), pu(t, 'label'), t.emphasis && pu(t.emphasis, 'label'));
  }
  function fu(t) {
    if (SC(t)) {
      uu(t),
        cu(t),
        pu(t, 'label'),
        pu(t, 'upperLabel'),
        pu(t, 'edgeLabel'),
        t.emphasis && (pu(t.emphasis, 'label'), pu(t.emphasis, 'upperLabel'), pu(t.emphasis, 'edgeLabel'));
      var e = t.markPoint;
      e && (uu(e), du(e));
      var n = t.markLine;
      n && (uu(n), du(n));
      var i = t.markArea;
      i && du(i);
      var r = t.data;
      if ('graph' === t.type) {
        r = r || t.nodes;
        var o = t.links || t.edges;
        if (o && !P(o)) for (var a = 0; a < o.length; a++) du(o[a]);
        v(t.categories, function (t) {
          cu(t);
        });
      }
      if (r && !P(r)) for (var a = 0; a < r.length; a++) du(r[a]);
      if (((e = t.markPoint), e && e.data)) for (var s = e.data, a = 0; a < s.length; a++) du(s[a]);
      if (((n = t.markLine), n && n.data))
        for (var l = n.data, a = 0; a < l.length; a++) M(l[a]) ? (du(l[a][0]), du(l[a][1])) : du(l[a]);
      'gauge' === t.type
        ? (pu(t, 'axisLabel'), pu(t, 'title'), pu(t, 'detail'))
        : 'treemap' === t.type
        ? (hu(t.breadcrumb, 'itemStyle'),
          v(t.levels, function (t) {
            cu(t);
          }))
        : 'tree' === t.type && cu(t.leaves);
    }
  }
  function gu(t) {
    return M(t) ? t : t ? [t] : [];
  }
  function vu(t) {
    return (M(t) ? t[0] : t) || {};
  }
  function yu(t, e) {
    bC(gu(t.series), function (t) {
      SC(t) && fu(t);
    });
    var n = ['xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'parallelAxis', 'radar'];
    e && n.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
      bC(n, function (e) {
        bC(gu(t[e]), function (t) {
          t && (pu(t, 'axisLabel'), pu(t.axisPointer, 'label'));
        });
      }),
      bC(gu(t.parallel), function (t) {
        var e = t && t.parallelAxisDefault;
        pu(e, 'axisLabel'), pu(e && e.axisPointer, 'label');
      }),
      bC(gu(t.calendar), function (t) {
        hu(t, 'itemStyle'), pu(t, 'dayLabel'), pu(t, 'monthLabel'), pu(t, 'yearLabel');
      }),
      bC(gu(t.radar), function (t) {
        pu(t, 'name'),
          t.name && null == t.axisName && ((t.axisName = t.name), delete t.name),
          null != t.nameGap && null == t.axisNameGap && ((t.axisNameGap = t.nameGap), delete t.nameGap);
      }),
      bC(gu(t.geo), function (t) {
        SC(t) &&
          (du(t),
          bC(gu(t.regions), function (t) {
            du(t);
          }));
      }),
      bC(gu(t.timeline), function (t) {
        du(t), hu(t, 'label'), hu(t, 'itemStyle'), hu(t, 'controlStyle', !0);
        var e = t.data;
        M(e) &&
          v(e, function (t) {
            k(t) && (hu(t, 'label'), hu(t, 'itemStyle'));
          });
      }),
      bC(gu(t.toolbox), function (t) {
        hu(t, 'iconStyle'),
          bC(t.feature, function (t) {
            hu(t, 'iconStyle');
          });
      }),
      pu(vu(t.axisPointer), 'label'),
      pu(vu(t.tooltip).axisPointer, 'label');
  }
  function mu(t, e) {
    for (var n = e.split(','), i = t, r = 0; r < n.length && ((i = i && i[n[r]]), null != i); r++);
    return i;
  }
  function _u(t, e, n, i) {
    for (var r, o = e.split(','), a = t, s = 0; s < o.length - 1; s++)
      (r = o[s]), null == a[r] && (a[r] = {}), (a = a[r]);
    (i || null == a[o[s]]) && (a[o[s]] = n);
  }
  function xu(t) {
    t &&
      v(TC, function (e) {
        e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
      });
  }
  function wu(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0; n < IC.length; n++) {
        var i = IC[n][1],
          r = IC[n][0];
        null != e[i] && (e[r] = e[i]);
      }
  }
  function bu(t) {
    t && 'edge' === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin);
  }
  function Su(t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay);
  }
  function Mu(t) {
    t &&
      null != t.focusNodeAdjacency &&
      ((t.emphasis = t.emphasis || {}), null == t.emphasis.focus && (t.emphasis.focus = 'adjacency'));
  }
  function Tu(t, e) {
    if (t) for (var n = 0; n < t.length; n++) e(t[n]), t[n] && Tu(t[n].children, e);
  }
  function Cu(t, e) {
    yu(t, e),
      (t.series = ur(t.series)),
      v(t.series, function (t) {
        if (k(t)) {
          var e = t.type;
          if ('line' === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
          else if ('pie' === e || 'gauge' === e) {
            null != t.clockWise && (t.clockwise = t.clockWise), bu(t.label);
            var n = t.data;
            if (n && !P(n)) for (var i = 0; i < n.length; i++) bu(n[i]);
            null != t.hoverOffset &&
              ((t.emphasis = t.emphasis || {}),
              (t.emphasis.scaleSize = null) && (t.emphasis.scaleSize = t.hoverOffset));
          } else if ('gauge' === e) {
            var r = mu(t, 'pointer.color');
            null != r && _u(t, 'itemStyle.color', r);
          } else if ('bar' === e) {
            wu(t), wu(t.backgroundStyle), wu(t.emphasis);
            var n = t.data;
            if (n && !P(n))
              for (var i = 0; i < n.length; i++) 'object' == typeof n[i] && (wu(n[i]), wu(n[i] && n[i].emphasis));
          } else if ('sunburst' === e) {
            var o = t.highlightPolicy;
            o && ((t.emphasis = t.emphasis || {}), t.emphasis.focus || (t.emphasis.focus = o)), Su(t), Tu(t.data, Su);
          } else
            'graph' === e || 'sankey' === e
              ? Mu(t)
              : 'map' === e && (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation && c(t, t.mapLocation));
          null != t.hoverAnimation &&
            ((t.emphasis = t.emphasis || {}),
            t.emphasis && null == t.emphasis.scale && (t.emphasis.scale = t.hoverAnimation)),
            xu(t);
        }
      }),
      t.dataRange && (t.visualMap = t.dataRange),
      v(CC, function (e) {
        var n = t[e];
        n &&
          (M(n) || (n = [n]),
          v(n, function (t) {
            xu(t);
          }));
      });
  }
  function Iu(t) {
    var e = Y();
    t.eachSeries(function (t) {
      var n = t.get('stack');
      if (n) {
        var i = e.get(n) || e.set(n, []),
          r = t.getData(),
          o = {
            stackResultDimension: r.getCalculationInfo('stackResultDimension'),
            stackedOverDimension: r.getCalculationInfo('stackedOverDimension'),
            stackedDimension: r.getCalculationInfo('stackedDimension'),
            stackedByDimension: r.getCalculationInfo('stackedByDimension'),
            isStackedByIndex: r.getCalculationInfo('isStackedByIndex'),
            data: r,
            seriesModel: t,
          };
        if (!o.stackedDimension || (!o.isStackedByIndex && !o.stackedByDimension)) return;
        i.length && r.setCalculationInfo('stackedOnSeries', i[i.length - 1].seriesModel), i.push(o);
      }
    }),
      e.each(Du);
  }
  function Du(t) {
    v(t, function (e, n) {
      var i = [],
        r = [0 / 0, 0 / 0],
        o = [e.stackResultDimension, e.stackedOverDimension],
        a = e.data,
        s = e.isStackedByIndex,
        l = e.seriesModel.get('stackStrategy') || 'samesign';
      a.modify(o, function (o, u, h) {
        var c = a.get(e.stackedDimension, h);
        if (isNaN(c)) return r;
        var p, d;
        s ? (d = a.getRawIndex(h)) : (p = a.get(e.stackedByDimension, h));
        for (var f = 0 / 0, g = n - 1; g >= 0; g--) {
          var v = t[g];
          if ((s || (d = v.data.rawIndexOf(v.stackedByDimension, p)), d >= 0)) {
            var y = v.data.getByRawIndex(v.stackResultDimension, d);
            if (
              'all' === l ||
              ('positive' === l && y > 0) ||
              ('negative' === l && 0 > y) ||
              ('samesign' === l && c >= 0 && y > 0) ||
              ('samesign' === l && 0 >= c && 0 > y)
            ) {
              (c = Zi(c, y)), (f = y);
              break;
            }
          }
        }
        return (i[0] = c), (i[1] = f), i;
      });
    });
  }
  function ku(t) {
    return t instanceof DC;
  }
  function Au(t, e, n) {
    n = n || Ou(t);
    var i = e.seriesLayoutBy,
      r = Ru(t, n, i, e.sourceHeader, e.dimensions),
      o = new DC({
        data: t,
        sourceFormat: n,
        seriesLayoutBy: i,
        dimensionsDefine: r.dimensionsDefine,
        startIndex: r.startIndex,
        dimensionsDetectedCount: r.dimensionsDetectedCount,
        metaRawOption: s(e),
      });
    return o;
  }
  function Pu(t) {
    return new DC({ data: t, sourceFormat: P(t) ? QT : qT });
  }
  function Lu(t) {
    return new DC({
      data: t.data,
      sourceFormat: t.sourceFormat,
      seriesLayoutBy: t.seriesLayoutBy,
      dimensionsDefine: s(t.dimensionsDefine),
      startIndex: t.startIndex,
      dimensionsDetectedCount: t.dimensionsDetectedCount,
    });
  }
  function Ou(t) {
    var e = JT;
    if (P(t)) e = QT;
    else if (M(t)) {
      0 === t.length && (e = jT);
      for (var n = 0, i = t.length; i > n; n++) {
        var r = t[n];
        if (null != r) {
          if (M(r)) {
            e = jT;
            break;
          }
          if (k(r)) {
            e = KT;
            break;
          }
        }
      }
    } else if (k(t))
      for (var o in t)
        if (K(t, o) && g(t[o])) {
          e = $T;
          break;
        }
    return e;
  }
  function Ru(t, e, n, i, r) {
    var o, a;
    if (!t) return { dimensionsDefine: zu(r), startIndex: a, dimensionsDetectedCount: o };
    if (e === jT) {
      var s = t;
      'auto' === i || null == i
        ? Eu(
            function (t) {
              null != t && '-' !== t && (C(t) ? null == a && (a = 1) : (a = 0));
            },
            n,
            s,
            10,
          )
        : (a = D(i) ? i : i ? 1 : 0),
        r ||
          1 !== a ||
          ((r = []),
          Eu(
            function (t, e) {
              r[e] = null != t ? t + '' : '';
            },
            n,
            s,
            1 / 0,
          )),
        (o = r ? r.length : n === eC ? s.length : s[0] ? s[0].length : null);
    } else if (e === KT) r || (r = Bu(t));
    else if (e === $T)
      r ||
        ((r = []),
        v(t, function (t, e) {
          r.push(e);
        }));
    else if (e === qT) {
      var l = cr(t[0]);
      o = (M(l) && l.length) || 1;
    }
    return { startIndex: a, dimensionsDefine: zu(r), dimensionsDetectedCount: o };
  }
  function Bu(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]); );
    if (e) {
      var i = [];
      return (
        v(e, function (t, e) {
          i.push(e);
        }),
        i
      );
    }
  }
  function zu(t) {
    if (t) {
      var e = Y();
      return y(t, function (t) {
        t = k(t) ? t : { name: t };
        var n = { name: t.name, displayName: t.displayName, type: t.type };
        if (null == n.name) return n;
        (n.name += ''), null == n.displayName && (n.displayName = n.name);
        var i = e.get(n.name);
        return i ? (n.name += '-' + i.count++) : e.set(n.name, { count: 1 }), n;
      });
    }
  }
  function Eu(t, e, n, i) {
    if (e === eC) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
    else for (var o = n[0] || [], r = 0; r < o.length && i > r; r++) t(o[r], r);
  }
  function Nu(t) {
    var e = t.sourceFormat;
    return e === KT || e === $T;
  }
  function Fu(t, e) {
    var n = PC[Wu(t, e)];
    return n;
  }
  function Vu(t, e) {
    var n = OC[Wu(t, e)];
    return n;
  }
  function Hu(t) {
    var e = BC[t];
    return e;
  }
  function Wu(t, e) {
    return t === jT ? t + '_' + e : t;
  }
  function Gu(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);
      if (null != i) {
        var r = t.getStore(),
          o = r.getSource().sourceFormat;
        if (null != n) {
          var a = t.getDimensionIndex(n),
            s = r.getDimensionProperty(a);
          return Hu(o)(i, a, s);
        }
        var l = i;
        return o === qT && (l = cr(i)), l;
      }
    }
  }
  function Uu(t) {
    var e, n;
    return k(t) ? t.type && (n = t) : (e = t), { text: e, frag: n };
  }
  function Xu(t) {
    return new NC(t);
  }
  function Yu(t, e) {
    var n = e && e.type;
    return 'ordinal' === n
      ? t
      : ('time' !== n || D(t) || null == t || '-' === t || (t = +Ki(t)), null == t || '' === t ? 0 / 0 : +t);
  }
  function Zu(t, e) {
    var n = new WC(),
      i = t.data,
      r = (n.sourceFormat = t.sourceFormat),
      o = t.startIndex,
      a = '';
    t.seriesLayoutBy !== tC && sr(a);
    var s = [],
      l = {},
      u = t.dimensionsDefine;
    if (u)
      v(u, function (t, e) {
        var n = t.name,
          i = { index: e, name: n, displayName: t.displayName };
        if ((s.push(i), null != n)) {
          var r = '';
          K(l, n) && sr(r), (l[n] = i);
        }
      });
    else for (var h = 0; h < t.dimensionsDetectedCount; h++) s.push({ index: h });
    var c = Fu(r, tC);
    e.__isBuiltIn &&
      ((n.getRawDataItem = function (t) {
        return c(i, o, s, t);
      }),
      (n.getRawData = z_(qu, null, t))),
      (n.cloneRawData = z_(ju, null, t));
    var p = Vu(r, tC);
    n.count = z_(p, null, i, o, s);
    var d = Hu(r);
    n.retrieveValue = function (t, e) {
      var n = c(i, o, s, t);
      return f(n, e);
    };
    var f = (n.retrieveValueFromItem = function (t, e) {
      if (null != t) {
        var n = s[e];
        return n ? d(t, e, n.name) : void 0;
      }
    });
    return (n.getDimensionInfo = z_(Ku, null, s, l)), (n.cloneAllDimensionInfo = z_($u, null, s)), n;
  }
  function qu(t) {
    var e = t.sourceFormat;
    if (!eh(e)) {
      var n = '';
      sr(n);
    }
    return t.data;
  }
  function ju(t) {
    var e = t.sourceFormat,
      n = t.data;
    if (!eh(e)) {
      var i = '';
      sr(i);
    }
    if (e === jT) {
      for (var r = [], o = 0, a = n.length; a > o; o++) r.push(n[o].slice());
      return r;
    }
    if (e === KT) {
      for (var r = [], o = 0, a = n.length; a > o; o++) r.push(h({}, n[o]));
      return r;
    }
  }
  function Ku(t, e, n) {
    return null != n ? (D(n) || (!isNaN(n) && !K(e, n)) ? t[n] : K(e, n) ? e[n] : void 0) : void 0;
  }
  function $u(t) {
    return s(t);
  }
  function Qu(t) {
    t = s(t);
    var e = t.type,
      n = '';
    e || sr(n);
    var i = e.split(':');
    2 !== i.length && sr(n);
    var r = !1;
    'echarts' === i[0] && ((e = i[1]), (r = !0)), (t.__isBuiltIn = r), GC.set(e, t);
  }
  function Ju(t, e, n) {
    var i = ur(t),
      r = i.length,
      o = '';
    r || sr(o);
    for (var a = 0, s = r; s > a; a++) {
      var l = i[a];
      (e = th(l, e, n, 1 === r ? null : a)), a !== s - 1 && (e.length = Math.max(e.length, 1));
    }
    return e;
  }
  function th(t, e) {
    var n = '';
    e.length || sr(n), k(t) || sr(n);
    var i = t.type,
      r = GC.get(i);
    r || sr(n);
    var o = y(e, function (t) {
        return Zu(t, r);
      }),
      a = ur(r.transform({ upstream: o[0], upstreamList: o, config: s(t.config) }));
    return y(a, function (t, n) {
      var i = '';
      k(t) || sr(i), t.data || sr(i);
      var r = Ou(t.data);
      eh(r) || sr(i);
      var o,
        a = e[0];
      if (a && 0 === n && !t.dimensions) {
        var s = a.startIndex;
        s && (t.data = a.data.slice(0, s).concat(t.data)),
          (o = { seriesLayoutBy: tC, sourceHeader: s, dimensions: a.metaRawOption.dimensions });
      } else o = { seriesLayoutBy: tC, sourceHeader: 0, dimensions: t.dimensions };
      return Au(t.data, o, null);
    });
  }
  function eh(t) {
    return t === jT || t === KT;
  }
  function nh(t) {
    return t > 65535 ? XC : YC;
  }
  function ih() {
    return [1 / 0, -1 / 0];
  }
  function rh(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t);
  }
  function oh(t, e, n, i, r) {
    var o = jC[n || 'float'];
    if (r) {
      var a = t[e],
        s = a && a.length;
      if (s !== i) {
        for (var l = new o(i), u = 0; s > u; u++) l[u] = a[u];
        t[e] = l;
      }
    } else t[e] = new o(i);
  }
  function ah(t) {
    var e = t.option.transform;
    e && U(t.option.transform);
  }
  function sh(t) {
    return 'series' === t.mainType;
  }
  function lh(t) {
    throw new Error(t);
  }
  function uh(t, e) {
    var n = t.color || '#6e7079',
      i = t.fontSize || 12,
      r = t.fontWeight || '400',
      o = t.color || '#464646',
      a = t.fontSize || 14,
      s = t.fontWeight || '900';
    return 'html' === e
      ? {
          nameStyle: 'font-size:' + Dl(i + '') + 'px;color:' + Dl(n) + ';font-weight:' + Dl(r + ''),
          valueStyle: 'font-size:' + Dl(a + '') + 'px;color:' + Dl(o) + ';font-weight:' + Dl(s + ''),
        }
      : { nameStyle: { fontSize: i, fill: n, fontWeight: r }, valueStyle: { fontSize: a, fill: o, fontWeight: s } };
  }
  function hh(t, e) {
    return (e.type = t), e;
  }
  function ch(t) {
    return 'section' === t.type;
  }
  function ph(t) {
    return ch(t) ? fh : gh;
  }
  function dh(t) {
    if (ch(t)) {
      var e = 0,
        n = t.blocks.length,
        i = n > 1 || (n > 0 && !t.noHeader);
      return (
        v(t.blocks, function (t) {
          var n = dh(t);
          n >= e && (e = n + +(i && (!n || (ch(t) && !t.noHeader))));
        }),
        e
      );
    }
    return 0;
  }
  function fh(t, e, n, i) {
    var r = e.noHeader,
      o = yh(dh(e)),
      a = [],
      s = e.blocks || [];
    W(!s || M(s)), (s = s || []);
    var l = t.orderMode;
    if (e.sortBlocks && l) {
      s = s.slice();
      var u = { valueAsc: 'asc', valueDesc: 'desc' };
      if (K(u, l)) {
        var c = new HC(u[l], null);
        s.sort(function (t, e) {
          return c.evaluate(t.sortParam, e.sortParam);
        });
      } else 'seriesDesc' === l && s.reverse();
    }
    v(s, function (n, r) {
      var s = e.valueFormatter,
        l = ph(n)(s ? h(h({}, t), { valueFormatter: s }) : t, n, r > 0 ? o.html : 0, i);
      null != l && a.push(l);
    });
    var p = 'richText' === t.renderMode ? a.join(o.richText) : mh(a.join(''), r ? n : o.html);
    if (r) return p;
    var d = kl(e.header, 'ordinal', t.useUTC),
      f = uh(i, t.renderMode).nameStyle;
    return 'richText' === t.renderMode
      ? wh(t, d, f) + o.richText + p
      : mh('<div style="' + f + ';' + QC + ';">' + Dl(d) + '</div>' + p, n);
  }
  function gh(t, e, n, i) {
    var r = t.renderMode,
      o = e.noName,
      a = e.noValue,
      s = !e.markerType,
      l = e.name,
      u = t.useUTC,
      h =
        e.valueFormatter ||
        t.valueFormatter ||
        function (t) {
          return (
            (t = M(t) ? t : [t]),
            y(t, function (t, e) {
              return kl(t, M(d) ? d[e] : d, u);
            })
          );
        };
    if (!o || !a) {
      var c = s ? '' : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || '#333', r),
        p = o ? '' : kl(l, 'ordinal', u),
        d = e.valueType,
        f = a ? [] : h(e.value),
        g = !s || !o,
        v = !s && o,
        m = uh(i, r),
        _ = m.nameStyle,
        x = m.valueStyle;
      return 'richText' === r
        ? (s ? '' : c) + (o ? '' : wh(t, p, _)) + (a ? '' : bh(t, f, g, v, x))
        : mh((s ? '' : c) + (o ? '' : _h(p, !s, _)) + (a ? '' : xh(f, g, v, x)), n);
    }
  }
  function vh(t, e, n, i, r, o) {
    if (t) {
      var a = ph(t),
        s = { useUTC: r, renderMode: n, orderMode: i, markupStyleCreator: e, valueFormatter: t.valueFormatter };
      return a(s, t, 0, o);
    }
  }
  function yh(t) {
    return { html: JC[t], richText: tI[t] };
  }
  function mh(t, e) {
    var n = '<div style="clear:both"></div>',
      i = 'margin: ' + e + 'px 0 0';
    return '<div style="' + i + ';' + QC + ';">' + t + n + '</div>';
  }
  function _h(t, e, n) {
    var i = e ? 'margin-left:2px' : '';
    return '<span style="' + n + ';' + i + '">' + Dl(t) + '</span>';
  }
  function xh(t, e, n, i) {
    var r = n ? '10px' : '20px',
      o = e ? 'float:right;margin-left:' + r : '';
    return (
      (t = M(t) ? t : [t]),
      '<span style="' +
        o +
        ';' +
        i +
        '">' +
        y(t, function (t) {
          return Dl(t);
        }).join('&nbsp;&nbsp;') +
        '</span>'
    );
  }
  function wh(t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n);
  }
  function bh(t, e, n, i, r) {
    var o = [r],
      a = i ? 10 : 20;
    return (
      n && o.push({ padding: [0, 0, 0, a], align: 'right' }),
      t.markupStyleCreator.wrapRichTextStyle(M(e) ? e.join('  ') : e, o)
    );
  }
  function Sh(t, e) {
    var n = t.getData().getItemVisual(e, 'style'),
      i = n[t.visualDrawType];
    return Rl(i);
  }
  function Mh(t, e) {
    var n = t.get('padding');
    return null != n ? n : 'richText' === e ? [8, 10] : 10;
  }
  function Th(t) {
    var e,
      n,
      i,
      r,
      o = t.series,
      a = t.dataIndex,
      s = t.multipleSeries,
      l = o.getData(),
      u = l.mapDimensionsAll('defaultedTooltip'),
      h = u.length,
      c = o.getRawValue(a),
      p = M(c),
      d = Sh(o, a);
    if (h > 1 || (p && !h)) {
      var f = Ch(c, o, a, u, d);
      (e = f.inlineValues), (n = f.inlineValueTypes), (i = f.blocks), (r = f.inlineValues[0]);
    } else if (h) {
      var g = l.getDimensionInfo(u[0]);
      (r = e = Gu(l, a, u[0])), (n = g.type);
    } else r = e = p ? c[0] : c;
    var v = Sr(o),
      y = (v && o.name) || '',
      m = l.getName(a),
      _ = s ? y : m;
    return hh('section', {
      header: y,
      noHeader: s || !v,
      sortParam: r,
      blocks: [
        hh('nameValue', { markerType: 'item', markerColor: d, name: _, noName: !G(_), value: e, valueType: n }),
      ].concat(i || []),
    });
  }
  function Ch(t, e, n, i, r) {
    function o(t, e) {
      var n = a.getDimensionInfo(e);
      n &&
        n.otherDims.tooltip !== !1 &&
        (s
          ? h.push(
              hh('nameValue', {
                markerType: 'subItem',
                markerColor: r,
                name: n.displayName,
                value: t,
                valueType: n.type,
              }),
            )
          : (l.push(t), u.push(n.type)));
    }
    var a = e.getData(),
      s = m(
        t,
        function (t, e, n) {
          var i = a.getDimensionInfo(n);
          return (t = t || (i && i.tooltip !== !1 && null != i.displayName));
        },
        !1,
      ),
      l = [],
      u = [],
      h = [];
    return (
      i.length
        ? v(i, function (t) {
            o(Gu(a, n, t), t);
          })
        : v(t, o),
      { inlineValues: l, inlineValueTypes: u, blocks: h }
    );
  }
  function Ih(t, e) {
    return t.getName(e) || t.getId(e);
  }
  function Dh(t) {
    var e = t.name;
    Sr(t) || (t.name = kh(t) || e);
  }
  function kh(t) {
    var e = t.getRawData(),
      n = e.mapDimensionsAll('seriesName'),
      i = [];
    return (
      v(n, function (t) {
        var n = e.getDimensionInfo(t);
        n.displayName && i.push(n.displayName);
      }),
      i.join(' ')
    );
  }
  function Ah(t) {
    return t.model.getRawData().count();
  }
  function Ph(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), Lh;
  }
  function Lh(t, e) {
    e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }
  function Oh(t, e) {
    v(Z(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
      t.wrapMethod(n, S(Rh, e));
    });
  }
  function Rh(t, e) {
    var n = Bh(t);
    return n && n.setOutputEnd((e || this).count()), e;
  }
  function Bh(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var i = n.currentTask;
      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid));
      }
      return i;
    }
  }
  function zh() {
    var t = Dr();
    return function (e) {
      var n = t(e),
        i = e.pipelineContext,
        r = !!n.large,
        o = !!n.progressiveRender,
        a = (n.large = !(!i || !i.large)),
        s = (n.progressiveRender = !(!i || !i.progressiveRender));
      return !(r === a && o === s) && 'reset';
    };
  }
  function Eh(t, e, n) {
    t && Oa(t) && ('emphasis' === e ? ha : ca)(t, n);
  }
  function Nh(t, e, n) {
    var i = Ir(t, e),
      r = e && null != e.highlightKey ? Ra(e.highlightKey) : null;
    null != i
      ? v(ur(i), function (e) {
          Eh(t.getItemGraphicEl(e), n, r);
        })
      : t.eachItemGraphicEl(function (t) {
          Eh(t, n, r);
        });
  }
  function Fh(t) {
    return sI(t.model);
  }
  function Vh(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      a = t.view,
      s = r && aI(r).updateMethod,
      l = o ? 'incrementalPrepareRender' : s && a[s] ? s : 'render';
    return 'render' !== l && a[l](e, n, i, r), hI[l];
  }
  function Hh(t, e, n) {
    function i() {
      (h = new Date().getTime()), (c = null), t.apply(a, s || []);
    }
    var r,
      o,
      a,
      s,
      l,
      u = 0,
      h = 0,
      c = null;
    e = e || 0;
    var p = function () {
      for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
      (r = new Date().getTime()), (a = this), (s = t);
      var d = l || e,
        f = l || n;
      (l = null),
        (o = r - (f ? u : h) - d),
        clearTimeout(c),
        f ? (c = setTimeout(i, d)) : o >= 0 ? i() : (c = setTimeout(i, -o)),
        (u = r);
    };
    return (
      (p.clear = function () {
        c && (clearTimeout(c), (c = null));
      }),
      (p.debounceNextCall = function (t) {
        l = t;
      }),
      p
    );
  }
  function Wh(t, e, n, i) {
    var r = t[e];
    if (r) {
      var o = r[cI] || r,
        a = r[dI],
        s = r[pI];
      if (s !== n || a !== i) {
        if (null == n || !i) return (t[e] = o);
        (r = t[e] = Hh(o, n, 'debounce' === i)), (r[cI] = o), (r[dI] = i), (r[pI] = n);
      }
      return r;
    }
  }
  function Gh(t, e) {
    var n = t[e];
    n && n[cI] && (n.clear && n.clear(), (t[e] = n[cI]));
  }
  function Uh(t, e) {
    var n = t.visualStyleMapper || gI[e];
    return n ? n : (console.warn("Unkown style type '" + e + "'."), gI.itemStyle);
  }
  function Xh(t, e) {
    var n = t.visualDrawType || vI[e];
    return n ? n : (console.warn("Unkown style type '" + e + "'."), 'fill');
  }
  function Yh(t, e) {
    (e = e || {}),
      c(e, {
        text: 'loading',
        textColor: '#000',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        showSpinner: !0,
        color: '#5470c6',
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0,
      });
    var n = new Vw(),
      i = new fS({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 });
    n.add(i);
    var r = new mS({
        style: {
          text: e.text,
          fill: e.textColor,
          fontSize: e.fontSize,
          fontWeight: e.fontWeight,
          fontStyle: e.fontStyle,
          fontFamily: e.fontFamily,
        },
        zlevel: e.zlevel,
        z: 10001,
      }),
      o = new fS({
        style: { fill: 'none' },
        textContent: r,
        textConfig: { position: 'right', distance: 10 },
        zlevel: e.zlevel,
        z: 10001,
      });
    n.add(o);
    var a;
    return (
      e.showSpinner &&
        ((a = new AM({
          shape: { startAngle: -wI / 2, endAngle: -wI / 2 + 0.1, r: e.spinnerRadius },
          style: { stroke: e.color, lineCap: 'round', lineWidth: e.lineWidth },
          zlevel: e.zlevel,
          z: 10001,
        })),
        a
          .animateShape(!0)
          .when(1e3, { endAngle: (3 * wI) / 2 })
          .start('circularInOut'),
        a
          .animateShape(!0)
          .when(1e3, { startAngle: (3 * wI) / 2 })
          .delay(300)
          .start('circularInOut'),
        n.add(a)),
      (n.resize = function () {
        var n = r.getBoundingRect().width,
          s = e.showSpinner ? e.spinnerRadius : 0,
          l =
            (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 -
            (e.showSpinner && n ? 0 : 5 + n / 2) +
            (e.showSpinner ? 0 : n / 2) +
            (n ? 0 : s),
          u = t.getHeight() / 2;
        e.showSpinner && a.setShape({ cx: l, cy: u }),
          o.setShape({ x: l - s, y: u - s, width: 2 * s, height: 2 * s }),
          i.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
      }),
      n.resize(),
      n
    );
  }
  function Zh(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }
  function qh(t) {
    return t.overallProgress && jh;
  }
  function jh() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function Kh() {
    this.agent && this.agent.dirty();
  }
  function $h(t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
  }
  function Qh(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = (t.resetDefines = ur(t.reset(t.model, t.ecModel, t.api, t.payload)));
    return e.length > 1
      ? y(e, function (t, e) {
          return Jh(e);
        })
      : SI;
  }
  function Jh(t) {
    return function (e, n) {
      var i = n.data,
        r = n.resetDefines[t];
      if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o);
      else r && r.progress && r.progress(e, i);
    };
  }
  function tc(t) {
    return t.data.count();
  }
  function ec(t) {
    uI = null;
    try {
      t(MI, TI);
    } catch (e) {}
    return uI;
  }
  function nc(t, e) {
    for (var n in e.prototype) t[n] = $;
  }
  function ic(t, e, n) {
    switch (n) {
      case 'color':
        var i = t.getItemVisual(e, 'style');
        return i[t.getVisual('drawType')];
      case 'opacity':
        return t.getItemVisual(e, 'style').opacity;
      case 'symbol':
      case 'symbolSize':
      case 'liftZ':
        return t.getItemVisual(e, n);
    }
  }
  function rc(t, e) {
    switch (e) {
      case 'color':
        var n = t.getVisual('style');
        return n[t.getVisual('drawType')];
      case 'opacity':
        return t.getVisual('style').opacity;
      case 'symbol':
      case 'symbolSize':
      case 'liftZ':
        return t.getVisual(e);
    }
  }
  function oc(t, e) {
    function n(e, n) {
      var i = [];
      return (
        e.eachComponent({ mainType: 'series', subType: t, query: n }, function (t) {
          i.push(t.seriesIndex);
        }),
        i
      );
    }
    v(
      [
        [t + 'ToggleSelect', 'toggleSelect'],
        [t + 'Select', 'select'],
        [t + 'UnSelect', 'unselect'],
      ],
      function (t) {
        e(t[0], function (e, i, r) {
          (e = h({}, e)), r.dispatchAction(h(e, { type: t[1], seriesIndex: n(i, e) }));
        });
      },
    );
  }
  function ac(t, e, n, i, r) {
    var o = t + e;
    n.isSilent(o) ||
      i.eachComponent({ mainType: 'series', subType: 'pie' }, function (t) {
        for (var e = t.seriesIndex, i = t.option.selectedMap, a = r.selected, s = 0; s < a.length; s++)
          if (a[s].seriesIndex === e) {
            var l = t.getData(),
              u = Ir(l, r.fromActionPayload);
            n.trigger(o, { type: o, seriesId: t.id, name: l.getName(M(u) ? u[0] : u), selected: C(i) ? i : h({}, i) });
          }
      });
  }
  function sc(t, e, n) {
    t.on('selectchanged', function (t) {
      var i = n.getModel();
      t.isFromClick
        ? (ac('map', 'selectchanged', e, i, t), ac('pie', 'selectchanged', e, i, t))
        : 'select' === t.fromAction
        ? (ac('map', 'selected', e, i, t), ac('pie', 'selected', e, i, t))
        : 'unselect' === t.fromAction && (ac('map', 'unselected', e, i, t), ac('pie', 'unselected', e, i, t));
    });
  }
  function lc(t, e, n) {
    for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent;
    return i;
  }
  function uc(t, e) {
    if ('image' !== this.type) {
      var n = this.style;
      this.__isEmptyBrush
        ? ((n.stroke = t), (n.fill = e || '#fff'), (n.lineWidth = 2))
        : 'line' === this.shape.symbolType
        ? (n.stroke = t)
        : (n.fill = t),
        this.markRedraw();
    }
  }
  function hc(t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf('empty');
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return (
      (l =
        0 === t.indexOf('image://')
          ? vs(t.slice(8), new Lw(e, n, i, r), a ? 'center' : 'cover')
          : 0 === t.indexOf('path://')
          ? gs(t.slice(7), {}, new Lw(e, n, i, r), a ? 'center' : 'cover')
          : new qI({ shape: { symbolType: t, x: e, y: n, width: i, height: r } })),
      (l.__isEmptyBrush = s),
      (l.setColor = uc),
      o && l.setColor(o),
      l
    );
  }
  function cc(t) {
    return M(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0];
  }
  function pc(t, e) {
    return null != t ? (M(t) || (t = [t, t]), [Vi(t[0], e[0]) || 0, Vi(N(t[1], t[0]), e[1]) || 0]) : void 0;
  }
  function dc(t) {
    return isFinite(t);
  }
  function fc(t, e, n) {
    var i = null == e.x ? 0 : e.x,
      r = null == e.x2 ? 1 : e.x2,
      o = null == e.y ? 0 : e.y,
      a = null == e.y2 ? 0 : e.y2;
    e.global || ((i = i * n.width + n.x), (r = r * n.width + n.x), (o = o * n.height + n.y), (a = a * n.height + n.y)),
      (i = dc(i) ? i : 0),
      (r = dc(r) ? r : 1),
      (o = dc(o) ? o : 0),
      (a = dc(a) ? a : 0);
    var s = t.createLinearGradient(i, o, r, a);
    return s;
  }
  function gc(t, e, n) {
    var i = n.width,
      r = n.height,
      o = Math.min(i, r),
      a = null == e.x ? 0.5 : e.x,
      s = null == e.y ? 0.5 : e.y,
      l = null == e.r ? 0.5 : e.r;
    e.global || ((a = a * i + n.x), (s = s * r + n.y), (l *= o)),
      (a = dc(a) ? a : 0.5),
      (s = dc(s) ? s : 0.5),
      (l = l >= 0 && dc(l) ? l : 0.5);
    var u = t.createRadialGradient(a, s, 0, a, s, l);
    return u;
  }
  function vc(t, e, n) {
    for (var i = 'radial' === e.type ? gc(t, e, n) : fc(t, e, n), r = e.colorStops, o = 0; o < r.length; o++)
      i.addColorStop(r[o].offset, r[o].color);
    return i;
  }
  function yc(t, e) {
    if (t === e || (!t && !e)) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
    return !1;
  }
  function mc(t) {
    return parseInt(t, 10);
  }
  function _c(t, e, n) {
    var i = ['width', 'height'][e],
      r = ['clientWidth', 'clientHeight'][e],
      o = ['paddingLeft', 'paddingTop'][e],
      a = ['paddingRight', 'paddingBottom'][e];
    if (null != n[i] && 'auto' !== n[i]) return parseFloat(n[i]);
    var s = document.defaultView.getComputedStyle(t);
    return ((t[r] || mc(s[i]) || mc(t.style[i])) - (mc(s[o]) || 0) - (mc(s[a]) || 0)) | 0;
  }
  function xc(t, e) {
    return t && 'solid' !== t && e > 0
      ? 'dashed' === t
        ? [4 * e, 2 * e]
        : 'dotted' === t
        ? [e]
        : D(t)
        ? [t]
        : M(t)
        ? t
        : null
      : null;
  }
  function wc(t) {
    var e = t.style,
      n = e.lineDash && e.lineWidth > 0 && xc(e.lineDash, e.lineWidth),
      i = e.lineDashOffset;
    if (n) {
      var r = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
      r &&
        1 !== r &&
        ((n = y(n, function (t) {
          return t / r;
        })),
        (i /= r));
    }
    return [n, i];
  }
  function bc(t) {
    var e = t.stroke;
    return !(null == e || 'none' === e || !(t.lineWidth > 0));
  }
  function Sc(t) {
    return 'string' == typeof t && 'none' !== t;
  }
  function Mc(t) {
    var e = t.fill;
    return null != e && 'none' !== e;
  }
  function Tc(t, e) {
    if (null != e.fillOpacity && 1 !== e.fillOpacity) {
      var n = t.globalAlpha;
      (t.globalAlpha = e.fillOpacity * e.opacity), t.fill(), (t.globalAlpha = n);
    } else t.fill();
  }
  function Cc(t, e) {
    if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
      var n = t.globalAlpha;
      (t.globalAlpha = e.strokeOpacity * e.opacity), t.stroke(), (t.globalAlpha = n);
    } else t.stroke();
  }
  function Ic(t, e, n) {
    var i = qr(e.image, e.__image, n);
    if (Kr(i)) {
      var r = t.createPattern(i, e.repeat || 'repeat');
      if ('function' == typeof DOMMatrix && r && r.setTransform) {
        var o = new DOMMatrix();
        o.translateSelf(e.x || 0, e.y || 0),
          o.rotateSelf(0, 0, (e.rotation || 0) * F_),
          o.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          r.setTransform(o);
      }
      return r;
    }
  }
  function Dc(t, e, n, i) {
    var r,
      o = bc(n),
      a = Mc(n),
      s = n.strokePercent,
      l = 1 > s,
      u = !e.path;
    (e.silent && !l) || !u || e.createPathProxy();
    var h = e.path || jI,
      c = e.__dirty;
    if (!i) {
      var p = n.fill,
        d = n.stroke,
        f = a && !!p.colorStops,
        g = o && !!d.colorStops,
        v = a && !!p.image,
        y = o && !!d.image,
        m = void 0,
        _ = void 0,
        x = void 0,
        w = void 0,
        b = void 0;
      (f || g) && (b = e.getBoundingRect()),
        f && ((m = c ? vc(t, p, b) : e.__canvasFillGradient), (e.__canvasFillGradient = m)),
        g && ((_ = c ? vc(t, d, b) : e.__canvasStrokeGradient), (e.__canvasStrokeGradient = _)),
        v && ((x = c || !e.__canvasFillPattern ? Ic(t, p, e) : e.__canvasFillPattern), (e.__canvasFillPattern = x)),
        y &&
          ((w = c || !e.__canvasStrokePattern ? Ic(t, d, e) : e.__canvasStrokePattern), (e.__canvasStrokePattern = x)),
        f ? (t.fillStyle = m) : v && (x ? (t.fillStyle = x) : (a = !1)),
        g ? (t.strokeStyle = _) : y && (w ? (t.strokeStyle = w) : (o = !1));
    }
    var S = e.getGlobalScale();
    h.setScale(S[0], S[1], e.segmentIgnoreThreshold);
    var M, T;
    t.setLineDash && n.lineDash && ((r = wc(e)), (M = r[0]), (T = r[1]));
    var C = !0;
    (u || c & fx) &&
      (h.setDPR(t.dpr),
      l ? h.setContext(null) : (h.setContext(t), (C = !1)),
      h.reset(),
      e.buildPath(h, e.shape, i),
      h.toStatic(),
      e.pathUpdated()),
      C && h.rebuildPath(t, l ? s : 1),
      M && (t.setLineDash(M), (t.lineDashOffset = T)),
      i || (n.strokeFirst ? (o && Cc(t, n), a && Tc(t, n)) : (a && Tc(t, n), o && Cc(t, n))),
      M && t.setLineDash([]);
  }
  function kc(t, e, n) {
    var i = (e.__image = qr(n.image, e.__image, e, e.onload));
    if (i && Kr(i)) {
      var r = n.x || 0,
        o = n.y || 0,
        a = e.getWidth(),
        s = e.getHeight(),
        l = i.width / i.height;
      if (
        (null == a && null != s
          ? (a = s * l)
          : null == s && null != a
          ? (s = a / l)
          : null == a && null == s && ((a = i.width), (s = i.height)),
        n.sWidth && n.sHeight)
      ) {
        var u = n.sx || 0,
          h = n.sy || 0;
        t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s);
      } else if (n.sx && n.sy) {
        var u = n.sx,
          h = n.sy,
          c = a - u,
          p = s - h;
        t.drawImage(i, u, h, c, p, r, o, a, s);
      } else t.drawImage(i, r, o, a, s);
    }
  }
  function Ac(t, e, n) {
    var i,
      r = n.text;
    if ((null != r && (r += ''), r)) {
      (t.font = n.font || y_), (t.textAlign = n.textAlign), (t.textBaseline = n.textBaseline);
      var o = void 0,
        a = void 0;
      t.setLineDash && n.lineDash && ((i = wc(e)), (o = i[0]), (a = i[1])),
        o && (t.setLineDash(o), (t.lineDashOffset = a)),
        n.strokeFirst
          ? (bc(n) && t.strokeText(r, n.x, n.y), Mc(n) && t.fillText(r, n.x, n.y))
          : (Mc(n) && t.fillText(r, n.x, n.y), bc(n) && t.strokeText(r, n.x, n.y)),
        o && t.setLineDash([]);
    }
  }
  function Pc(t, e, n, i, r) {
    var o = !1;
    if (!i && ((n = n || {}), e === n)) return !1;
    if (i || e.opacity !== n.opacity) {
      Nc(t, r), (o = !0);
      var a = Math.max(Math.min(e.opacity, 1), 0);
      t.globalAlpha = isNaN(a) ? gb.opacity : a;
    }
    (i || e.blend !== n.blend) && (o || (Nc(t, r), (o = !0)), (t.globalCompositeOperation = e.blend || gb.blend));
    for (var s = 0; s < KI.length; s++) {
      var l = KI[s];
      (i || e[l] !== n[l]) && (o || (Nc(t, r), (o = !0)), (t[l] = t.dpr * (e[l] || 0)));
    }
    return (
      (i || e.shadowColor !== n.shadowColor) &&
        (o || (Nc(t, r), (o = !0)), (t.shadowColor = e.shadowColor || gb.shadowColor)),
      o
    );
  }
  function Lc(t, e, n, i, r) {
    var o = Fc(e, r.inHover),
      a = i ? null : (n && Fc(n, r.inHover)) || {};
    if (o === a) return !1;
    var s = Pc(t, o, a, i, r);
    if (
      ((i || o.fill !== a.fill) && (s || (Nc(t, r), (s = !0)), Sc(o.fill) && (t.fillStyle = o.fill)),
      (i || o.stroke !== a.stroke) && (s || (Nc(t, r), (s = !0)), Sc(o.stroke) && (t.strokeStyle = o.stroke)),
      (i || o.opacity !== a.opacity) &&
        (s || (Nc(t, r), (s = !0)), (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
      e.hasStroke())
    ) {
      var l = o.lineWidth,
        u = l / (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
      t.lineWidth !== u && (s || (Nc(t, r), (s = !0)), (t.lineWidth = u));
    }
    for (var h = 0; h < $I.length; h++) {
      var c = $I[h],
        p = c[0];
      (i || o[p] !== a[p]) && (s || (Nc(t, r), (s = !0)), (t[p] = o[p] || c[1]));
    }
    return s;
  }
  function Oc(t, e, n, i, r) {
    return Pc(t, Fc(e, r.inHover), n && Fc(n, r.inHover), i, r);
  }
  function Rc(t, e) {
    var n = e.transform,
      i = t.dpr || 1;
    n ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5]) : t.setTransform(i, 0, 0, i, 0, 0);
  }
  function Bc(t, e, n) {
    for (var i = !1, r = 0; r < t.length; r++) {
      var o = t[r];
      (i = i || o.isZeroArea()), Rc(e, o), e.beginPath(), o.buildPath(e, o.shape), e.clip();
    }
    n.allClipped = i;
  }
  function zc(t, e) {
    return t && e
      ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5]
      : t || e
      ? !0
      : !1;
  }
  function Ec(t) {
    var e = Mc(t),
      n = bc(t);
    return !(
      t.lineDash ||
      !(+e ^ +n) ||
      (e && 'string' != typeof t.fill) ||
      (n && 'string' != typeof t.stroke) ||
      t.strokePercent < 1 ||
      t.strokeOpacity < 1 ||
      t.fillOpacity < 1
    );
  }
  function Nc(t, e) {
    e.batchFill && t.fill(), e.batchStroke && t.stroke(), (e.batchFill = ''), (e.batchStroke = '');
  }
  function Fc(t, e) {
    return e ? t.__hoverStyle || t.style : t.style;
  }
  function Vc(t, e) {
    Hc(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
  }
  function Hc(t, e, n, i) {
    var r = e.transform;
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return (e.__dirty &= ~px), void (e.__isRendered = !1);
    var o = e.__clipPaths,
      a = n.prevElClipPaths,
      s = !1,
      l = !1;
    if (
      ((!a || yc(o, a)) &&
        (a &&
          a.length &&
          (Nc(t, n), t.restore(), (l = s = !0), (n.prevElClipPaths = null), (n.allClipped = !1), (n.prevEl = null)),
        o && o.length && (Nc(t, n), t.save(), Bc(o, t, n), (s = !0)),
        (n.prevElClipPaths = o)),
      n.allClipped)
    )
      return void (e.__isRendered = !1);
    e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
    var u = n.prevEl;
    u || (l = s = !0);
    var h = e instanceof oS && e.autoBatch && Ec(e.style);
    s || zc(r, u.transform) ? (Nc(t, n), Rc(t, e)) : h || Nc(t, n);
    var c = Fc(e, n.inHover);
    e instanceof oS
      ? (n.lastDrawType !== QI && ((l = !0), (n.lastDrawType = QI)),
        Lc(t, e, u, l, n),
        (h && (n.batchFill || n.batchStroke)) || t.beginPath(),
        Dc(t, e, c, h),
        h && ((n.batchFill = c.fill || ''), (n.batchStroke = c.stroke || '')))
      : e instanceof sS
      ? (n.lastDrawType !== tD && ((l = !0), (n.lastDrawType = tD)), Lc(t, e, u, l, n), Ac(t, e, c))
      : e instanceof hS
      ? (n.lastDrawType !== JI && ((l = !0), (n.lastDrawType = JI)), Oc(t, e, u, l, n), kc(t, e, c))
      : e.getTemporalDisplayables && (n.lastDrawType !== eD && ((l = !0), (n.lastDrawType = eD)), Wc(t, e, n)),
      h && i && Nc(t, n),
      e.innerAfterBrush(),
      e.afterBrush && e.afterBrush(),
      (n.prevEl = e),
      (e.__dirty = 0),
      (e.__isRendered = !0);
  }
  function Wc(t, e, n) {
    var i = e.getDisplayables(),
      r = e.getTemporalDisplayables();
    t.save();
    var o,
      a,
      s = {
        prevElClipPaths: null,
        prevEl: null,
        allClipped: !1,
        viewWidth: n.viewWidth,
        viewHeight: n.viewHeight,
        inHover: n.inHover,
      };
    for (o = e.getCursor(), a = i.length; a > o; o++) {
      var l = i[o];
      l.beforeBrush && l.beforeBrush(),
        l.innerBeforeBrush(),
        Hc(t, l, s, o === a - 1),
        l.innerAfterBrush(),
        l.afterBrush && l.afterBrush(),
        (s.prevEl = l);
    }
    for (var u = 0, h = r.length; h > u; u++) {
      var l = r[u];
      l.beforeBrush && l.beforeBrush(),
        l.innerBeforeBrush(),
        Hc(t, l, s, u === h - 1),
        l.innerAfterBrush(),
        l.afterBrush && l.afterBrush(),
        (s.prevEl = l);
    }
    e.clearTemporalDisplayables(), (e.notClear = !0), t.restore();
  }
  function Gc(t, e) {
    function n(t) {
      function e() {
        for (var t = 1, e = 0, n = y.length; n > e; ++e) t = ar(t, y[e]);
        for (var i = 1, e = 0, n = v.length; n > e; ++e) i = ar(i, v[e].length);
        t *= i;
        var r = m * y.length * v.length;
        return { width: Math.max(1, Math.min(t, s.maxTileWidth)), height: Math.max(1, Math.min(r, s.maxTileHeight)) };
      }
      function n() {
        function t(t, e, n, a, l) {
          var u = o ? 1 : i,
            h = hc(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
          if (o) {
            var c = r.painter.renderOneToVNode(h);
            c && x.children.push(c);
          } else Vc(d, h);
        }
        d &&
          (d.clearRect(0, 0, _.width, _.height),
          s.backgroundColor && ((d.fillStyle = s.backgroundColor), d.fillRect(0, 0, _.width, _.height)));
        for (var e = 0, n = 0; n < g.length; ++n) e += g[n];
        if (!(0 >= e))
          for (var a = -m, l = 0, u = 0, h = 0; a < w.height; ) {
            if (l % 2 === 0) {
              for (var c = (u / 2) % v.length, p = 0, y = 0, b = 0; p < 2 * w.width; ) {
                for (var S = 0, n = 0; n < f[h].length; ++n) S += f[h][n];
                if (0 >= S) break;
                if (y % 2 === 0) {
                  var M = 0.5 * (1 - s.symbolSize),
                    T = p + f[h][y] * M,
                    C = a + g[l] * M,
                    I = f[h][y] * s.symbolSize,
                    D = g[l] * s.symbolSize,
                    k = (b / 2) % v[c].length;
                  t(T, C, I, D, v[c][k]);
                }
                (p += f[h][y]), ++b, ++y, y === f[h].length && (y = 0);
              }
              ++h, h === f.length && (h = 0);
            }
            (a += g[l]), ++u, ++l, l === g.length && (l = 0);
          }
      }
      for (var a = [i], l = !0, u = 0; u < rD.length; ++u) {
        var h = s[rD[u]];
        if (null != h && !M(h) && !C(h) && !D(h) && 'boolean' != typeof h) {
          l = !1;
          break;
        }
        a.push(h);
      }
      var c;
      if (l) {
        c = a.join(',') + (o ? '-svg' : '');
        var p = iD.get(c);
        p && (o ? (t.svgElement = p) : (t.image = p));
      }
      var d,
        f = Xc(s.dashArrayX),
        g = Yc(s.dashArrayY),
        v = Uc(s.symbol),
        y = Zc(f),
        m = qc(g),
        _ = !o && b_.createCanvas(),
        x = o && { tag: 'g', attrs: {}, key: 'dcl', children: [] },
        w = e();
      _ && ((_.width = w.width * i), (_.height = w.height * i), (d = _.getContext('2d'))),
        n(),
        l && iD.put(c, _ || x),
        (t.image = _),
        (t.svgElement = x),
        (t.svgWidth = w.width),
        (t.svgHeight = w.height);
    }
    if ('none' === t) return null;
    var i = e.getDevicePixelRatio(),
      r = e.getZr(),
      o = 'svg' === r.painter.type;
    t.dirty && nD['delete'](t);
    var a = nD.get(t);
    if (a) return a;
    var s = c(t, {
      symbol: 'rect',
      symbolSize: 1,
      symbolKeepAspect: !0,
      color: 'rgba(0, 0, 0, 0.2)',
      backgroundColor: null,
      dashArrayX: 5,
      dashArrayY: 5,
      rotation: 0,
      maxTileWidth: 512,
      maxTileHeight: 512,
    });
    'none' === s.backgroundColor && (s.backgroundColor = null);
    var l = { repeat: 'repeat' };
    return n(l), (l.rotation = s.rotation), (l.scaleX = l.scaleY = o ? 1 : 1 / i), nD.set(t, l), (t.dirty = !1), l;
  }
  function Uc(t) {
    if (!t || 0 === t.length) return [['rect']];
    if (C(t)) return [[t]];
    for (var e = !0, n = 0; n < t.length; ++n)
      if (!C(t[n])) {
        e = !1;
        break;
      }
    if (e) return Uc([t]);
    for (var i = [], n = 0; n < t.length; ++n) i.push(C(t[n]) ? [t[n]] : t[n]);
    return i;
  }
  function Xc(t) {
    if (!t || 0 === t.length) return [[0, 0]];
    if (D(t)) {
      var e = Math.ceil(t);
      return [[e, e]];
    }
    for (var n = !0, i = 0; i < t.length; ++i)
      if (!D(t[i])) {
        n = !1;
        break;
      }
    if (n) return Xc([t]);
    for (var r = [], i = 0; i < t.length; ++i)
      if (D(t[i])) {
        var e = Math.ceil(t[i]);
        r.push([e, e]);
      } else {
        var e = y(t[i], function (t) {
          return Math.ceil(t);
        });
        r.push(e.length % 2 === 1 ? e.concat(e) : e);
      }
    return r;
  }
  function Yc(t) {
    if (!t || ('object' == typeof t && 0 === t.length)) return [0, 0];
    if (D(t)) {
      var e = Math.ceil(t);
      return [e, e];
    }
    var n = y(t, function (t) {
      return Math.ceil(t);
    });
    return t.length % 2 ? n.concat(n) : n;
  }
  function Zc(t) {
    return y(t, function (t) {
      return qc(t);
    });
  }
  function qc(t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
    return t.length % 2 === 1 ? 2 * e : e;
  }
  function jc(t, e) {
    t.eachRawSeries(function (n) {
      if (!t.isSeriesFiltered(n)) {
        var i = n.getData();
        i.hasItemVisual() &&
          i.each(function (t) {
            var n = i.getItemVisual(t, 'decal');
            if (n) {
              var r = i.ensureUniqueItemVisual(t, 'style');
              r.decal = Gc(n, e);
            }
          });
        var r = i.getVisual('decal');
        if (r) {
          var o = i.getVisual('style');
          o.decal = Gc(r, e);
        }
      }
    });
  }
  function Kc(t, e) {
    aD[t] = e;
  }
  function $c(t) {
    return aD[t];
  }
  function Qc(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return this.isDisposed() ? void 0 : tp(this, t, e);
    };
  }
  function Jc(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return tp(this, t, e);
    };
  }
  function tp(t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), q_.prototype[e].apply(t, n);
  }
  function ep(t, e, n) {
    var i = !(n && n.ssr);
    if (i) {
      var r = op(t);
      if (r) return r;
    }
    var o = new ek(t, e, n);
    return (o.id = 'ec_' + dk++), (ck[o.id] = o), i && Lr(t, gk, o.id), QD(o), oD.trigger('afterinit', o), o;
  }
  function np(t) {
    if (M(t)) {
      var e = t;
      (t = null),
        v(e, function (e) {
          null != e.group && (t = e.group);
        }),
        (t = t || 'g_' + fk++),
        v(e, function (e) {
          e.group = t;
        });
    }
    return (pk[t] = !0), t;
  }
  function ip(t) {
    pk[t] = !1;
  }
  function rp(t) {
    C(t) ? (t = ck[t]) : t instanceof ek || (t = op(t)), t instanceof ek && !t.isDisposed() && t.dispose();
  }
  function op(t) {
    return ck[Or(t, gk)];
  }
  function ap(t) {
    return ck[t];
  }
  function sp(t, e) {
    uk[t] = e;
  }
  function lp(t) {
    p(sk, t) < 0 && sk.push(t);
  }
  function up(t, e) {
    mp(ak, t, e, fD);
  }
  function hp(t) {
    pp('afterinit', t);
  }
  function cp(t) {
    pp('afterupdate', t);
  }
  function pp(t, e) {
    oD.on(t, e);
  }
  function dp(t, e, n) {
    T(e) && ((n = e), (e = ''));
    var i = k(t) ? t.type : [t, (t = { event: e })][0];
    (t.event = (t.event || i).toLowerCase()),
      (e = t.event),
      ok[e] || (W(AD.test(i) && AD.test(e)), rk[i] || (rk[i] = { action: n, actionInfo: t }), (ok[e] = i));
  }
  function fp(t, e) {
    _C.register(t, e);
  }
  function gp(t) {
    var e = _C.get(t);
    return e ? (e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()) : void 0;
  }
  function vp(t, e) {
    mp(lk, t, e, vD, 'layout');
  }
  function yp(t, e) {
    mp(lk, t, e, _D, 'visual');
  }
  function mp(t, e, n, i, r) {
    if (((T(e) || k(e)) && ((n = e), (e = i)), !(p(yk, n) >= 0))) {
      yk.push(n);
      var o = bI.wrapStageHandler(n, r);
      (o.__prio = e), (o.__raw = n), t.push(o);
    }
  }
  function _p(t, e) {
    hk[t] = e;
  }
  function xp(t) {
    r({ createCanvas: t });
  }
  function wp(t, e, n) {
    var i = $c('registerMap');
    i && i(t, e, n);
  }
  function bp(t) {
    var e = $c('getMap');
    return e && e(t);
  }
  function Sp(t) {
    return null == t ? 0 : t.length || 1;
  }
  function Mp(t) {
    return t;
  }
  function Tp(t, e) {
    var n = {},
      i = (n.encode = {}),
      r = Y(),
      o = [],
      a = [],
      s = {};
    v(t.dimensions, function (e) {
      var n = t.getDimensionInfo(e),
        l = n.coordDim;
      if (l) {
        var u = n.coordDimIndex;
        (Cp(i, l)[u] = e),
          n.isExtraCoord || (r.set(l, 1), Dp(n.type) && (o[0] = e), (Cp(s, l)[u] = t.getDimensionIndex(n.name))),
          n.defaultTooltip && a.push(e);
      }
      ZT.each(function (t, e) {
        var r = Cp(i, e),
          o = n.otherDims[e];
        null != o && o !== !1 && (r[o] = n.name);
      });
    });
    var l = [],
      u = {};
    r.each(function (t, e) {
      var n = i[e];
      (u[e] = n[0]), (l = l.concat(n));
    }),
      (n.dataDimsOnCoord = l),
      (n.dataDimIndicesOnCoord = y(l, function (e) {
        return t.getDimensionInfo(e).storeDimIndex;
      })),
      (n.encodeFirstDimNotExtra = u);
    var h = i.label;
    h && h.length && (o = h.slice());
    var c = i.tooltip;
    return (
      c && c.length ? (a = c.slice()) : a.length || (a = o.slice()),
      (i.defaultedLabel = o),
      (i.defaultedTooltip = a),
      (n.userOutput = new Dk(s, e)),
      n
    );
  }
  function Cp(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }
  function Ip(t) {
    return 'category' === t ? 'ordinal' : 'time' === t ? 'time' : 'float';
  }
  function Dp(t) {
    return !('ordinal' === t || 'time' === t);
  }
  function kp(t) {
    return t instanceof Lk;
  }
  function Ap(t) {
    for (var e = Y(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        r = k(i) ? i.name : i;
      null != r && null == e.get(r) && e.set(r, n);
    }
    return e;
  }
  function Pp(t) {
    var e = Ak(t);
    return e.dimNameMap || (e.dimNameMap = Ap(t.dimensionsDefine));
  }
  function Lp(t) {
    return t > 30;
  }
  function Op(t, e) {
    return Rp(t, e).dimensions;
  }
  function Rp(t, e) {
    function n(t) {
      var e = m[t];
      if (0 > e) {
        var n = a[t],
          i = k(n) ? n : { name: n },
          r = new kk(),
          o = i.name;
        null != o && null != f.get(o) && (r.name = r.displayName = o),
          null != i.type && (r.type = i.type),
          null != i.displayName && (r.displayName = i.displayName);
        var s = l.length;
        return (m[t] = s), (r.storeDimIndex = t), l.push(r), r;
      }
      return l[e];
    }
    function i(t, e, n) {
      null != ZT.get(e) ? (t.otherDims[e] = n) : ((t.coordDim = e), (t.coordDimIndex = n), s.set(e, !0));
    }
    function r(t) {
      null == t.name && (t.name = t.coordDim);
    }
    ku(t) || (t = Pu(t)), (e = e || {});
    var o = e.coordDimensions || [],
      a = e.dimensionsDefine || t.dimensionsDefine || [],
      s = Y(),
      l = [],
      u = zp(t, o, a, e.dimensionsCount),
      p = e.canOmitUnusedDimensions && Lp(u),
      d = a === t.dimensionsDefine,
      f = d ? Pp(t) : Ap(a),
      g = e.encodeDefine;
    !g && e.encodeDefaulter && (g = e.encodeDefaulter(t, u));
    for (var y = Y(g), m = new ZC(u), _ = 0; _ < m.length; _++) m[_] = -1;
    if (!p) for (var _ = 0; u > _; _++) n(_);
    y.each(function (t, e) {
      var r = ur(t).slice();
      if (1 === r.length && !C(r[0]) && r[0] < 0) return void y.set(e, !1);
      var o = y.set(e, []);
      v(r, function (t, r) {
        var a = C(t) ? f.get(t) : t;
        null != a && u > a && ((o[r] = a), i(n(a), e, r));
      });
    });
    var x = 0;
    v(o, function (t) {
      var e, r, o, a;
      if (C(t)) (e = t), (a = {});
      else {
        (a = t), (e = a.name);
        var s = a.ordinalMeta;
        (a.ordinalMeta = null),
          (a = h({}, a)),
          (a.ordinalMeta = s),
          (r = a.dimsDef),
          (o = a.otherDims),
          (a.name = a.coordDim = a.coordDimIndex = a.dimsDef = a.otherDims = null);
      }
      var l = y.get(e);
      if (l !== !1) {
        if (((l = ur(l)), !l.length))
          for (var p = 0; p < ((r && r.length) || 1); p++) {
            for (; u > x && null != n(x).coordDim; ) x++;
            u > x && l.push(x++);
          }
        v(l, function (t, s) {
          var l = n(t);
          if ((d && null != a.type && (l.type = a.type), i(c(l, a), e, s), null == l.name && r)) {
            var u = r[s];
            !k(u) && (u = { name: u }), (l.name = l.displayName = u.name), (l.defaultTooltip = u.defaultTooltip);
          }
          o && c(l.otherDims, o);
        });
      }
    });
    var w = e.generateCoord,
      b = e.generateCoordCount,
      S = null != b;
    b = w ? b || 1 : 0;
    var M = w || 'value';
    if (p)
      v(l, function (t) {
        r(t);
      }),
        l.sort(function (t, e) {
          return t.storeDimIndex - e.storeDimIndex;
        });
    else
      for (var T = 0; u > T; T++) {
        var I = n(T),
          D = I.coordDim;
        null == D && ((I.coordDim = Ep(M, s, S)), (I.coordDimIndex = 0), (!w || 0 >= b) && (I.isExtraCoord = !0), b--),
          r(I),
          null != I.type ||
            (ql(t, T) !== nC.Must &&
              (!I.isExtraCoord || (null == I.otherDims.itemName && null == I.otherDims.seriesName))) ||
            (I.type = 'ordinal');
      }
    return Bp(l), new Lk({ source: t, dimensions: l, fullDimensionCount: u, dimensionOmitted: p });
  }
  function Bp(t) {
    for (var e = Y(), n = 0; n < t.length; n++) {
      var i = t[n],
        r = i.name,
        o = e.get(r) || 0;
      o > 0 && (i.name = r + (o - 1)), o++, e.set(r, o);
    }
  }
  function zp(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectedCount || 1, e.length, n.length, i || 0);
    return (
      v(e, function (t) {
        var e;
        k(t) && (e = t.dimsDef) && (r = Math.max(r, e.length));
      }),
      r
    );
  }
  function Ep(t, e, n) {
    var i = e.data;
    if (n || i.hasOwnProperty(t)) {
      for (var r = 0; i.hasOwnProperty(t + r); ) r++;
      t += r;
    }
    return e.set(t, !0), t;
  }
  function Np(t) {
    var e = t.get('coordinateSystem'),
      n = new Hk(e),
      i = Wk[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
  }
  function Fp(t) {
    return 'category' === t.get('type');
  }
  function Vp(t, e, n) {
    n = n || {};
    var i,
      r,
      o,
      a = n.byIndex,
      s = n.stackedCoordDimension;
    Hp(e) ? (i = e) : ((r = e.schema), (i = r.dimensions), (o = e.store));
    var l,
      u,
      h,
      c,
      p = !(!t || !t.get('stack'));
    if (
      (v(i, function (t, e) {
        C(t) && (i[e] = t = { name: t }),
          p &&
            !t.isExtraCoord &&
            (a || l || !t.ordinalMeta || (l = t),
            u || 'ordinal' === t.type || 'time' === t.type || (s && s !== t.coordDim) || (u = t));
      }),
      !u || a || l || (a = !0),
      u)
    ) {
      (h = '__\x00ecstackresult_' + t.id), (c = '__\x00ecstackedover_' + t.id), l && (l.createInvertedIndices = !0);
      var d = u.coordDim,
        f = u.type,
        g = 0;
      v(i, function (t) {
        t.coordDim === d && g++;
      });
      var y = {
          name: h,
          coordDim: d,
          coordDimIndex: g,
          type: f,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length,
        },
        m = {
          name: c,
          coordDim: c,
          coordDimIndex: g + 1,
          type: f,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length + 1,
        };
      r
        ? (o &&
            ((y.storeDimIndex = o.ensureCalculationDimension(c, f)),
            (m.storeDimIndex = o.ensureCalculationDimension(h, f))),
          r.appendCalculationDimension(y),
          r.appendCalculationDimension(m))
        : (i.push(y), i.push(m));
    }
    return {
      stackedDimension: u && u.name,
      stackedByDimension: l && l.name,
      isStackedByIndex: a,
      stackedOverDimension: c,
      stackResultDimension: h,
    };
  }
  function Hp(t) {
    return !kp(t.schema);
  }
  function Wp(t, e) {
    return !!e && e === t.getCalculationInfo('stackedDimension');
  }
  function Gp(t, e) {
    return Wp(t, e) ? t.getCalculationInfo('stackResultDimension') : e;
  }
  function Up(t, e) {
    var n,
      i = t.get('coordinateSystem'),
      r = _C.get(i);
    return (
      e &&
        e.coordSysDims &&
        (n = y(e.coordSysDims, function (t) {
          var n = { name: t },
            i = e.axisMap.get(t);
          if (i) {
            var r = i.get('type');
            n.type = Ip(r);
          }
          return n;
        })),
      n || (n = (r && (r.getDimensionsInfo ? r.getDimensionsInfo() : r.dimensions.slice())) || ['x', 'y']),
      n
    );
  }
  function Xp(t, e, n) {
    var i, r;
    return (
      n &&
        v(t, function (t, o) {
          var a = t.coordDim,
            s = n.categoryAxisMap.get(a);
          s && (null == i && (i = o), (t.ordinalMeta = s.getOrdinalMeta()), e && (t.createInvertedIndices = !0)),
            null != t.otherDims.itemName && (r = !0);
        }),
      r || null == i || (t[i].otherDims.itemName = 0),
      i
    );
  }
  function Yp(t, e, n) {
    n = n || {};
    var i,
      r = e.getSourceManager(),
      o = !1;
    t ? ((o = !0), (i = Pu(t))) : ((i = r.getSource()), (o = i.sourceFormat === qT));
    var a = Np(e),
      s = Up(e, a),
      l = n.useEncodeDefaulter,
      u = T(l) ? l : l ? S(Ul, s, e) : null,
      h = {
        coordDimensions: s,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: u,
        canOmitUnusedDimensions: !o,
      },
      c = Rp(i, h),
      p = Xp(c.dimensions, n.createInvertedIndices, a),
      d = o ? null : r.getSharedDataStore(c),
      f = Vp(e, { schema: c, store: d }),
      g = new Vk(c, e);
    g.setCalculationInfo(f);
    var v =
      null != p && Zp(i)
        ? function (t, e, n, i) {
            return i === p ? n : this.defaultDimValueGetter(t, e, n, i);
          }
        : null;
    return (g.hasItemOption = !1), g.initData(o ? i : d, null, v), g;
  }
  function Zp(t) {
    if (t.sourceFormat === qT) {
      var e = qp(t.data || []);
      return !M(cr(e));
    }
  }
  function qp(t) {
    for (var e = 0; e < t.length && null == t[e]; ) e++;
    return t[e];
  }
  function jp(t) {
    return k(t) && null != t.value ? t.value : t + '';
  }
  function Kp(t) {
    return 'interval' === t.type || 'log' === t.type;
  }
  function $p(t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      a = (r.interval = Ji(o / e, !0));
    null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
    var s = (r.intervalPrecision = Jp(a)),
      l = (r.niceTickExtent = [Hi(Math.ceil(t[0] / a) * a, s), Hi(Math.floor(t[1] / a) * a, s)]);
    return ed(l, t), r;
  }
  function Qp(t) {
    var e = Math.pow(10, Qi(t)),
      n = t / e;
    return n ? (2 === n ? (n = 3) : 3 === n ? (n = 5) : (n *= 2)) : (n = 1), Hi(n * e);
  }
  function Jp(t) {
    return Gi(t) + 2;
  }
  function td(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }
  function ed(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]),
      !isFinite(t[1]) && (t[1] = e[1]),
      td(t, 0, e),
      td(t, 1, e),
      t[0] > t[1] && (t[0] = t[1]);
  }
  function nd(t, e) {
    return t >= e[0] && t <= e[1];
  }
  function id(t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  }
  function rd(t, e) {
    return t * (e[1] - e[0]) + e[0];
  }
  function od(t) {
    return M(t) ? (jk ? new Float32Array(t) : t) : new Kk(t);
  }
  function ad(t) {
    return t.get('stack') || $k + t.seriesIndex;
  }
  function sd(t) {
    return t.dim + t.index;
  }
  function ld(t) {
    var e = [],
      n = t.axis,
      i = 'axis0';
    if ('category' === n.type) {
      for (var r = n.getBandWidth(), o = 0; o < t.count; o++)
        e.push(c({ bandWidth: r, axisKey: i, stackId: $k + o }, t));
      for (var a = pd(e), s = [], o = 0; o < t.count; o++) {
        var l = a[i][$k + o];
        (l.offsetCenter = l.offset + l.width / 2), s.push(l);
      }
      return s;
    }
  }
  function ud(t, e) {
    var n = [];
    return (
      e.eachSeriesByType(t, function (t) {
        vd(t) && n.push(t);
      }),
      n
    );
  }
  function hd(t) {
    var e = {};
    v(t, function (t) {
      var n = t.coordinateSystem,
        i = n.getBaseAxis();
      if ('time' === i.type || 'value' === i.type)
        for (
          var r = t.getData(),
            o = i.dim + '_' + i.index,
            a = r.getDimensionIndex(r.mapDimension(i.dim)),
            s = r.getStore(),
            l = 0,
            u = s.count();
          u > l;
          ++l
        ) {
          var h = s.get(a, l);
          e[o] ? e[o].push(h) : (e[o] = [h]);
        }
    });
    var n = {};
    for (var i in e)
      if (e.hasOwnProperty(i)) {
        var r = e[i];
        if (r) {
          r.sort(function (t, e) {
            return t - e;
          });
          for (var o = null, a = 1; a < r.length; ++a) {
            var s = r[a] - r[a - 1];
            s > 0 && (o = null === o ? s : Math.min(o, s));
          }
          n[i] = o;
        }
      }
    return n;
  }
  function cd(t) {
    var e = hd(t),
      n = [];
    return (
      v(t, function (t) {
        var i,
          r = t.coordinateSystem,
          o = r.getBaseAxis(),
          a = o.getExtent();
        if ('category' === o.type) i = o.getBandWidth();
        else if ('value' === o.type || 'time' === o.type) {
          var s = o.dim + '_' + o.index,
            l = e[s],
            u = Math.abs(a[1] - a[0]),
            h = o.scale.getExtent(),
            c = Math.abs(h[1] - h[0]);
          i = l ? (u / c) * l : u;
        } else {
          var p = t.getData();
          i = Math.abs(a[1] - a[0]) / p.count();
        }
        var d = Vi(t.get('barWidth'), i),
          f = Vi(t.get('barMaxWidth'), i),
          g = Vi(t.get('barMinWidth') || (yd(t) ? 0.5 : 1), i),
          v = t.get('barGap'),
          y = t.get('barCategoryGap');
        n.push({
          bandWidth: i,
          barWidth: d,
          barMaxWidth: f,
          barMinWidth: g,
          barGap: v,
          barCategoryGap: y,
          axisKey: sd(o),
          stackId: ad(t),
        });
      }),
      pd(n)
    );
  }
  function pd(t) {
    var e = {};
    v(t, function (t) {
      var n = t.axisKey,
        i = t.bandWidth,
        r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: null, gap: '20%', stacks: {} },
        o = r.stacks;
      e[n] = r;
      var a = t.stackId;
      o[a] || r.autoWidthCount++, (o[a] = o[a] || { width: 0, maxWidth: 0 });
      var s = t.barWidth;
      s && !o[a].width && ((o[a].width = s), (s = Math.min(r.remainedWidth, s)), (r.remainedWidth -= s));
      var l = t.barMaxWidth;
      l && (o[a].maxWidth = l);
      var u = t.barMinWidth;
      u && (o[a].minWidth = u);
      var h = t.barGap;
      null != h && (r.gap = h);
      var c = t.barCategoryGap;
      null != c && (r.categoryGap = c);
    });
    var n = {};
    return (
      v(e, function (t, e) {
        n[e] = {};
        var i = t.stacks,
          r = t.bandWidth,
          o = t.categoryGap;
        if (null == o) {
          var a = w(i).length;
          o = Math.max(35 - 4 * a, 15) + '%';
        }
        var s = Vi(o, r),
          l = Vi(t.gap, 1),
          u = t.remainedWidth,
          h = t.autoWidthCount,
          c = (u - s) / (h + (h - 1) * l);
        (c = Math.max(c, 0)),
          v(i, function (t) {
            var e = t.maxWidth,
              n = t.minWidth;
            if (t.width) {
              var i = t.width;
              e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), (t.width = i), (u -= i + l * i), h--;
            } else {
              var i = c;
              e && i > e && (i = Math.min(e, u)),
                n && n > i && (i = n),
                i !== c && ((t.width = i), (u -= i + l * i), h--);
            }
          }),
          (c = (u - s) / (h + (h - 1) * l)),
          (c = Math.max(c, 0));
        var p,
          d = 0;
        v(i, function (t) {
          t.width || (t.width = c), (p = t), (d += t.width * (1 + l));
        }),
          p && (d -= p.width * l);
        var f = -d / 2;
        v(i, function (t, i) {
          (n[e][i] = n[e][i] || { bandWidth: r, offset: f, width: t.width }), (f += t.width * (1 + l));
        });
      }),
      n
    );
  }
  function dd(t, e, n) {
    if (t && e) {
      var i = t[sd(e)];
      return null != i && null != n ? i[ad(n)] : i;
    }
  }
  function fd(t, e) {
    var n = ud(t, e),
      i = cd(n);
    v(n, function (t) {
      var e = t.getData(),
        n = t.coordinateSystem,
        r = n.getBaseAxis(),
        o = ad(t),
        a = i[sd(r)][o],
        s = a.offset,
        l = a.width;
      e.setLayout({ bandWidth: a.bandWidth, offset: s, size: l });
    });
  }
  function gd(t) {
    return {
      seriesType: t,
      plan: zh(),
      reset: function (t) {
        if (vd(t)) {
          var e = t.getData(),
            n = t.coordinateSystem,
            i = n.getBaseAxis(),
            r = n.getOtherAxis(i),
            o = e.getDimensionIndex(e.mapDimension(r.dim)),
            a = e.getDimensionIndex(e.mapDimension(i.dim)),
            s = t.get('showBackground', !0),
            l = e.mapDimension(r.dim),
            u = e.getCalculationInfo('stackResultDimension'),
            h = Wp(e, l) && !!e.getCalculationInfo('stackedOnSeries'),
            c = r.isHorizontal(),
            p = md(i, r),
            d = yd(t),
            f = t.get('barMinHeight') || 0,
            g = u && e.getDimensionIndex(u),
            v = e.getLayout('size'),
            y = e.getLayout('offset');
          return {
            progress: function (t, e) {
              for (
                var i,
                  r = t.count,
                  l = d && od(3 * r),
                  u = d && s && od(3 * r),
                  m = d && od(r),
                  _ = n.master.getRect(),
                  x = c ? _.width : _.height,
                  w = e.getStore(),
                  b = 0;
                null != (i = t.next());

              ) {
                var S = w.get(h ? g : o, i),
                  M = w.get(a, i),
                  T = p,
                  C = void 0;
                h && (C = +S - w.get(o, i));
                var I = void 0,
                  D = void 0,
                  k = void 0,
                  A = void 0;
                if (c) {
                  var P = n.dataToPoint([S, M]);
                  if (h) {
                    var L = n.dataToPoint([C, M]);
                    T = L[0];
                  }
                  (I = T), (D = P[1] + y), (k = P[0] - T), (A = v), Math.abs(k) < f && (k = (0 > k ? -1 : 1) * f);
                } else {
                  var P = n.dataToPoint([M, S]);
                  if (h) {
                    var L = n.dataToPoint([M, C]);
                    T = L[1];
                  }
                  (I = P[0] + y), (D = T), (k = v), (A = P[1] - T), Math.abs(A) < f && (A = (0 >= A ? -1 : 1) * f);
                }
                d
                  ? ((l[b] = I),
                    (l[b + 1] = D),
                    (l[b + 2] = c ? k : A),
                    u && ((u[b] = c ? _.x : I), (u[b + 1] = c ? D : _.y), (u[b + 2] = x)),
                    (m[i] = i))
                  : e.setItemLayout(i, { x: I, y: D, width: k, height: A }),
                  (b += 3);
              }
              d &&
                e.setLayout({ largePoints: l, largeDataIndices: m, largeBackgroundPoints: u, valueAxisHorizontal: c });
            },
          };
        }
      },
    };
  }
  function vd(t) {
    return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type;
  }
  function yd(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }
  function md(t, e) {
    return e.toGlobalCoord(e.dataToCoord('log' === e.type ? 1 : 0));
  }
  function _d(t, e, n, i) {
    var r = Ki(e),
      o = Ki(n),
      a = function (t) {
        return hl(r, t, i) === hl(o, t, i);
      },
      s = function () {
        return a('year');
      },
      l = function () {
        return s() && a('month');
      },
      u = function () {
        return l() && a('day');
      },
      h = function () {
        return u() && a('hour');
      },
      c = function () {
        return h() && a('minute');
      },
      p = function () {
        return c() && a('second');
      },
      d = function () {
        return p() && a('millisecond');
      };
    switch (t) {
      case 'year':
        return s();
      case 'month':
        return l();
      case 'day':
        return u();
      case 'hour':
        return h();
      case 'minute':
        return c();
      case 'second':
        return p();
      case 'millisecond':
        return d();
    }
  }
  function xd(t) {
    return (t /= MT), t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
  }
  function wd(t) {
    var e = 30 * MT;
    return (t /= e), t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
  }
  function bd(t) {
    return (t /= ST), t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
  }
  function Sd(t, e) {
    return (t /= e ? bT : wT), t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1;
  }
  function Md(t) {
    return Ji(t, !0);
  }
  function Td(t, e, n) {
    var i = new Date(t);
    switch (rl(e)) {
      case 'year':
      case 'month':
        i[_l(n)](0);
      case 'day':
        i[xl(n)](1);
      case 'hour':
        i[wl(n)](0);
      case 'minute':
        i[bl(n)](0);
      case 'second':
        i[Sl(n)](0), i[Ml(n)](0);
    }
    return i.getTime();
  }
  function Cd(t, e, n, i) {
    function r(t, e, n, r, o, a, s) {
      for (var l = new Date(e), u = e, h = l[r](); n > u && u <= i[1]; )
        s.push({ value: u }), (h += t), l[o](h), (u = l.getTime());
      s.push({ value: u, notAdd: !0 });
    }
    function o(t, o, a) {
      var s = [],
        l = !o.length;
      if (!_d(rl(t), i[0], i[1], n)) {
        l && (o = [{ value: Td(new Date(i[0]), t, n) }, { value: i[1] }]);
        for (var u = 0; u < o.length - 1; u++) {
          var h = o[u].value,
            c = o[u + 1].value;
          if (h !== c) {
            var p = void 0,
              d = void 0,
              f = void 0,
              g = !1;
            switch (t) {
              case 'year':
                (p = Math.max(1, Math.round(e / MT / 365))), (d = cl(n)), (f = ml(n));
                break;
              case 'half-year':
              case 'quarter':
              case 'month':
                (p = wd(e)), (d = pl(n)), (f = _l(n));
                break;
              case 'week':
              case 'half-week':
              case 'day':
                (p = xd(e, 31)), (d = dl(n)), (f = xl(n)), (g = !0);
                break;
              case 'half-day':
              case 'quarter-day':
              case 'hour':
                (p = bd(e)), (d = fl(n)), (f = wl(n));
                break;
              case 'minute':
                (p = Sd(e, !0)), (d = gl(n)), (f = bl(n));
                break;
              case 'second':
                (p = Sd(e, !1)), (d = vl(n)), (f = Sl(n));
                break;
              case 'millisecond':
                (p = Md(e)), (d = yl(n)), (f = Ml(n));
            }
            r(p, h, c, d, f, g, s), 'year' === t && a.length > 1 && 0 === u && a.unshift({ value: a[0].value - p });
          }
        }
        for (var u = 0; u < s.length; u++) a.push(s[u]);
        return s;
      }
    }
    for (var a = 1e4, s = AT, l = 0, u = [], h = [], c = 0, p = 0, d = 0; d < s.length && l++ < a; ++d) {
      var f = rl(s[d]);
      if (ol(s[d])) {
        o(s[d], u[u.length - 1] || [], h);
        var g = s[d + 1] ? rl(s[d + 1]) : null;
        if (f !== g) {
          if (h.length) {
            (p = c),
              h.sort(function (t, e) {
                return t.value - e.value;
              });
            for (var v = [], m = 0; m < h.length; ++m) {
              var x = h[m].value;
              (0 === m || h[m - 1].value !== x) && (v.push(h[m]), x >= i[0] && x <= i[1] && c++);
            }
            var w = (i[1] - i[0]) / e;
            if (c > 1.5 * w && p > w / 1.5) break;
            if ((u.push(v), c > w || t === s[d])) break;
          }
          h = [];
        }
      }
    }
    for (
      var b = _(
          y(u, function (t) {
            return _(t, function (t) {
              return t.value >= i[0] && t.value <= i[1] && !t.notAdd;
            });
          }),
          function (t) {
            return t.length > 0;
          },
        ),
        S = [],
        M = b.length - 1,
        d = 0;
      d < b.length;
      ++d
    )
      for (var T = b[d], C = 0; C < T.length; ++C) S.push({ value: T[C].value, level: M - d });
    S.sort(function (t, e) {
      return t.value - e.value;
    });
    for (var I = [], d = 0; d < S.length; ++d) (0 === d || S[d].value !== S[d - 1].value) && I.push(S[d]);
    return I;
  }
  function Id(t, e) {
    return iA(t, Gi(e));
  }
  function Dd(t, e, n) {
    var i = t.rawExtentInfo;
    return i ? i : ((i = new hA(t, e, n)), (t.rawExtentInfo = i), i);
  }
  function kd(t, e) {
    return null == e ? null : z(e) ? 0 / 0 : t.parse(e);
  }
  function Ad(t, e) {
    var n = t.type,
      i = Dd(t, e, t.getExtent()).calculate();
    t.setBlank(i.isBlank);
    var r = i.min,
      o = i.max,
      a = e.ecModel;
    if (a && 'time' === n) {
      var s = ud('bar', a),
        l = !1;
      if (
        (v(s, function (t) {
          l = l || t.getBaseAxis() === e.axis;
        }),
        l)
      ) {
        var u = cd(s),
          h = Pd(r, o, e, u);
        (r = h.min), (o = h.max);
      }
    }
    return { extent: [r, o], fixMin: i.minFixed, fixMax: i.maxFixed };
  }
  function Pd(t, e, n, i) {
    var r = n.axis.getExtent(),
      o = r[1] - r[0],
      a = dd(i, n.axis);
    if (void 0 === a) return { min: t, max: e };
    var s = 1 / 0;
    v(a, function (t) {
      s = Math.min(t.offset, s);
    });
    var l = -1 / 0;
    v(a, function (t) {
      l = Math.max(t.offset + t.width, l);
    }),
      (s = Math.abs(s)),
      (l = Math.abs(l));
    var u = s + l,
      h = e - t,
      c = 1 - (s + l) / o,
      p = h / c - h;
    return (e += p * (l / u)), (t -= p * (s / u)), { min: t, max: e };
  }
  function Ld(t, e) {
    var n = e,
      i = Ad(t, n),
      r = i.extent,
      o = n.get('splitNumber');
    t instanceof lA && (t.base = n.get('logBase'));
    var a = t.type,
      s = n.get('interval'),
      l = 'interval' === a || 'time' === a;
    t.setExtent(r[0], r[1]),
      t.calcNiceExtent({
        splitNumber: o,
        fixMin: i.fixMin,
        fixMax: i.fixMax,
        minInterval: l ? n.get('minInterval') : null,
        maxInterval: l ? n.get('maxInterval') : null,
      }),
      null != s && t.setInterval && t.setInterval(s);
  }
  function Od(t, e) {
    if ((e = e || t.get('type')))
      switch (e) {
        case 'category':
          return new Yk({
            ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
            extent: [1 / 0, -1 / 0],
          });
        case 'time':
          return new Jk({ locale: t.ecModel.getLocaleModel(), useUTC: t.ecModel.get('useUTC') });
        default:
          return new (Gk.getClass(e) || qk)();
      }
  }
  function Rd(t) {
    var e = t.scale.getExtent(),
      n = e[0],
      i = e[1];
    return !((n > 0 && i > 0) || (0 > n && 0 > i));
  }
  function Bd(t) {
    var e = t.getLabelModel().get('formatter'),
      n = 'category' === t.type ? t.scale.getExtent()[0] : null;
    return 'time' === t.scale.type
      ? (function (e) {
          return function (n, i) {
            return t.scale.getFormattedLabel(n, i, e);
          };
        })(e)
      : C(e)
      ? (function (e) {
          return function (n) {
            var i = t.scale.getLabel(n),
              r = e.replace('{value}', null != i ? i : '');
            return r;
          };
        })(e)
      : T(e)
      ? (function (e) {
          return function (i, r) {
            return null != n && (r = i.value - n), e(zd(t, i), r, null != i.level ? { level: i.level } : null);
          };
        })(e)
      : function (e) {
          return t.scale.getLabel(e);
        };
  }
  function zd(t, e) {
    return 'category' === t.type ? t.scale.getLabel(e) : e.value;
  }
  function Ed(t) {
    var e = t.model,
      n = t.scale;
    if (e.get(['axisLabel', 'show']) && !n.isBlank()) {
      var i,
        r,
        o = n.getExtent();
      n instanceof Yk ? (r = n.count()) : ((i = n.getTicks()), (r = i.length));
      var a,
        s = t.getLabelModel(),
        l = Bd(t),
        u = 1;
      r > 40 && (u = Math.ceil(r / 40));
      for (var h = 0; r > h; h += u) {
        var c = i ? i[h] : { value: o[0] + h },
          p = l(c, h),
          d = s.getTextRect(p),
          f = Nd(d, s.get('rotate') || 0);
        a ? a.union(f) : (a = f);
      }
      return a;
    }
  }
  function Nd(t, e) {
    var n = (e * Math.PI) / 180,
      i = t.width,
      r = t.height,
      o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)),
      a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n)),
      s = new Lw(t.x, t.y, o, a);
    return s;
  }
  function Fd(t) {
    var e = t.get('interval');
    return null == e ? 'auto' : e;
  }
  function Vd(t) {
    return 'category' === t.type && 0 === Fd(t.getLabelModel());
  }
  function Hd(t, e) {
    var n = {};
    return (
      v(t.mapDimensionsAll(e), function (e) {
        n[Gp(t, e)] = !0;
      }),
      w(n)
    );
  }
  function Wd(t) {
    return Yp(null, t);
  }
  function Gd(t, e) {
    var n = e;
    e instanceof cT || (n = new cT(e));
    var i = Od(n);
    return i.setExtent(t[0], t[1]), Ld(i, n), i;
  }
  function Ud(t) {
    f(t, dA);
  }
  function Xd(t, e) {
    return (e = e || {}), Hs(t, null, null, 'normal' !== e.state);
  }
  function Yd(t) {
    return M(t)
      ? void v(t, function (t) {
          Yd(t);
        })
      : void (p(vA, t) >= 0 || (vA.push(t), T(t) && (t = { install: t }), t.install(yA)));
  }
  function Zd(t, e) {
    return Math.abs(t - e) < mA;
  }
  function qd(t, e, n) {
    var i = 0,
      r = t[0];
    if (!r) return !1;
    for (var o = 1; o < t.length; o++) {
      var a = t[o];
      (i += xo(r[0], r[1], a[0], a[1], e, n)), (r = a);
    }
    var s = t[0];
    return (Zd(r[0], s[0]) && Zd(r[1], s[1])) || (i += xo(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
  }
  function jd(t, e) {
    for (var n = 0; n < t.length; n++) ve(t[n], t[n], e);
  }
  function Kd(t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      i && (o = i.project(o)), o && isFinite(o[0]) && isFinite(o[1]) && (ye(e, e, o), me(n, n, o));
    }
  }
  function $d(t) {
    for (var e = 0, n = 0, i = 0, r = t.length, o = t[r - 1][0], a = t[r - 1][1], s = 0; r > s; s++) {
      var l = t[s][0],
        u = t[s][1],
        h = o * u - l * a;
      (e += h), (n += (o + l) * h), (i += (a + u) * h), (o = l), (a = u);
    }
    return e ? [n / e / 3, i / e / 3, e] : [t[0][0] || 0, t[0][1] || 0];
  }
  function Qd(t) {
    if (!t.UTF8Encoding) return t;
    var e = t,
      n = e.UTF8Scale;
    null == n && (n = 1024);
    var i = e.features;
    return (
      v(i, function (t) {
        var e = t.geometry,
          i = e.encodeOffsets,
          r = e.coordinates;
        if (i)
          switch (e.type) {
            case 'LineString':
              e.coordinates = tf(r, i, n);
              break;
            case 'Polygon':
              Jd(r, i, n);
              break;
            case 'MultiLineString':
              Jd(r, i, n);
              break;
            case 'MultiPolygon':
              v(r, function (t, e) {
                return Jd(t, i[e], n);
              });
          }
      }),
      (e.UTF8Encoding = !1),
      e
    );
  }
  function Jd(t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = tf(t[i], e[i], n);
  }
  function tf(t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = t.charCodeAt(a) - 64,
        l = t.charCodeAt(a + 1) - 64;
      (s = (s >> 1) ^ -(1 & s)),
        (l = (l >> 1) ^ -(1 & l)),
        (s += r),
        (l += o),
        (r = s),
        (o = l),
        i.push([s / n, l / n]);
    }
    return i;
  }
  function ef(t, e) {
    return (
      (t = Qd(t)),
      y(
        _(t.features, function (t) {
          return t.geometry && t.properties && t.geometry.coordinates.length > 0;
        }),
        function (t) {
          var n = t.properties,
            i = t.geometry,
            r = [];
          switch (i.type) {
            case 'Polygon':
              var o = i.coordinates;
              r.push(new wA(o[0], o.slice(1)));
              break;
            case 'MultiPolygon':
              v(i.coordinates, function (t) {
                t[0] && r.push(new wA(t[0], t.slice(1)));
              });
              break;
            case 'LineString':
              r.push(new bA([i.coordinates]));
              break;
            case 'MultiLineString':
              r.push(new bA(i.coordinates));
          }
          var a = new SA(n[e || 'name'], r, n.cp);
          return (a.properties = n), a;
        },
      )
    );
  }
  function nf(t) {
    return 'category' === t.type ? of(t) : lf(t);
  }
  function rf(t, e) {
    return 'category' === t.type
      ? sf(t, e)
      : {
          ticks: y(t.scale.getTicks(), function (t) {
            return t.value;
          }),
        };
  }
  function of(t) {
    var e = t.getLabelModel(),
      n = af(t, e);
    return !e.get('show') || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
  }
  function af(t, e) {
    var n = uf(t, 'labels'),
      i = Fd(e),
      r = hf(n, i);
    if (r) return r;
    var o, a;
    return (
      T(i) ? (o = vf(t, i)) : ((a = 'auto' === i ? pf(t) : i), (o = gf(t, a))),
      cf(n, i, { labels: o, labelCategoryInterval: a })
    );
  }
  function sf(t, e) {
    var n = uf(t, 'ticks'),
      i = Fd(e),
      r = hf(n, i);
    if (r) return r;
    var o, a;
    if (((!e.get('show') || t.scale.isBlank()) && (o = []), T(i))) o = vf(t, i, !0);
    else if ('auto' === i) {
      var s = af(t, t.getLabelModel());
      (a = s.labelCategoryInterval),
        (o = y(s.labels, function (t) {
          return t.tickValue;
        }));
    } else (a = i), (o = gf(t, a, !0));
    return cf(n, i, { ticks: o, tickCategoryInterval: a });
  }
  function lf(t) {
    var e = t.scale.getTicks(),
      n = Bd(t);
    return {
      labels: y(e, function (e, i) {
        return { level: e.level, formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e.value };
      }),
    };
  }
  function uf(t, e) {
    return kA(t)[e] || (kA(t)[e] = []);
  }
  function hf(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }
  function cf(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }
  function pf(t) {
    var e = kA(t).autoInterval;
    return null != e ? e : (kA(t).autoInterval = t.calculateCategoryInterval());
  }
  function df(t) {
    var e = ff(t),
      n = Bd(t),
      i = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
      r = t.scale,
      o = r.getExtent(),
      a = r.count();
    if (o[1] - o[0] < 1) return 0;
    var s = 1;
    a > 40 && (s = Math.max(1, Math.floor(a / 40)));
    for (
      var l = o[0],
        u = t.dataToCoord(l + 1) - t.dataToCoord(l),
        h = Math.abs(u * Math.cos(i)),
        c = Math.abs(u * Math.sin(i)),
        p = 0,
        d = 0;
      l <= o[1];
      l += s
    ) {
      var f = 0,
        g = 0,
        v = mi(n({ value: l }), e.font, 'center', 'top');
      (f = 1.3 * v.width), (g = 1.3 * v.height), (p = Math.max(p, f, 7)), (d = Math.max(d, g, 7));
    }
    var y = p / h,
      m = d / c;
    isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(y, m))),
      x = kA(t.model),
      w = t.getExtent(),
      b = x.lastAutoInterval,
      S = x.lastTickCount;
    return (
      null != b &&
      null != S &&
      Math.abs(b - _) <= 1 &&
      Math.abs(S - a) <= 1 &&
      b > _ &&
      x.axisExtent0 === w[0] &&
      x.axisExtent1 === w[1]
        ? (_ = b)
        : ((x.lastTickCount = a), (x.lastAutoInterval = _), (x.axisExtent0 = w[0]), (x.axisExtent1 = w[1])),
      _
    );
  }
  function ff(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get('rotate') || 0,
      font: e.getFont(),
    };
  }
  function gf(t, e, n) {
    function i(t) {
      var e = { value: t };
      l.push(n ? t : { formattedLabel: r(e), rawLabel: o.getLabel(e), tickValue: t });
    }
    var r = Bd(t),
      o = t.scale,
      a = o.getExtent(),
      s = t.getLabelModel(),
      l = [],
      u = Math.max((e || 0) + 1, 1),
      h = a[0],
      c = o.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var p = Vd(t),
      d = s.get('showMinLabel') || p,
      f = s.get('showMaxLabel') || p;
    d && h !== a[0] && i(a[0]);
    for (var g = h; g <= a[1]; g += u) i(g);
    return f && g - u !== a[1] && i(a[1]), l;
  }
  function vf(t, e, n) {
    var i = t.scale,
      r = Bd(t),
      o = [];
    return (
      v(i.getTicks(), function (t) {
        var a = i.getLabel(t),
          s = t.value;
        e(t.value, a) && o.push(n ? s : { formattedLabel: r(t), rawLabel: a, tickValue: s });
      }),
      o
    );
  }
  function yf(t, e) {
    var n = t[1] - t[0],
      i = e,
      r = n / i / 2;
    (t[0] += r), (t[1] -= r);
  }
  function mf(t, e, n, i) {
    function r(t, e) {
      return (t = Hi(t)), (e = Hi(e)), p ? t > e : e > t;
    }
    var o = e.length;
    if (t.onBand && !n && o) {
      var a,
        s,
        l = t.getExtent();
      if (1 === o) (e[0].coord = l[0]), (a = e[1] = { coord: l[0] });
      else {
        var u = e[o - 1].tickValue - e[0].tickValue,
          h = (e[o - 1].coord - e[0].coord) / u;
        v(e, function (t) {
          t.coord -= h / 2;
        });
        var c = t.scale.getExtent();
        (s = 1 + c[1] - e[o - 1].tickValue), (a = { coord: e[o - 1].coord + h * s }), e.push(a);
      }
      var p = l[0] > l[1];
      r(e[0].coord, l[0]) && (i ? (e[0].coord = l[0]) : e.shift()),
        i && r(l[0], e[0].coord) && e.unshift({ coord: l[0] }),
        r(l[1], a.coord) && (i ? (a.coord = l[1]) : e.pop()),
        i && r(a.coord, l[1]) && e.push({ coord: l[1] });
    }
  }
  function _f(t) {
    var e = HT.extend(t);
    return HT.registerClass(e), e;
  }
  function xf(t) {
    var e = oI.extend(t);
    return oI.registerClass(e), e;
  }
  function wf(t) {
    var e = rI.extend(t);
    return rI.registerClass(e), e;
  }
  function bf(t) {
    var e = lI.extend(t);
    return lI.registerClass(e), e;
  }
  function Sf(t, e, n, i, r) {
    var o = n.width,
      a = n.height;
    switch (t) {
      case 'top':
        i.set(n.x + o / 2, n.y - e), r.set(0, -1);
        break;
      case 'bottom':
        i.set(n.x + o / 2, n.y + a + e), r.set(0, 1);
        break;
      case 'left':
        i.set(n.x - e, n.y + a / 2), r.set(-1, 0);
        break;
      case 'right':
        i.set(n.x + o + e, n.y + a / 2), r.set(1, 0);
    }
  }
  function Mf(t, e, n, i, r, o, a, s, l) {
    (a -= t), (s -= e);
    var u = Math.sqrt(a * a + s * s);
    (a /= u), (s /= u);
    var h = a * n + t,
      c = s * n + e;
    if (Math.abs(i - r) % LA < 1e-4) return (l[0] = h), (l[1] = c), u - n;
    if (o) {
      var p = i;
      (i = mo(r)), (r = mo(p));
    } else (i = mo(i)), (r = mo(r));
    i > r && (r += LA);
    var d = Math.atan2(s, a);
    if ((0 > d && (d += LA), (d >= i && r >= d) || (d + LA >= i && r >= d + LA))) return (l[0] = h), (l[1] = c), u - n;
    var f = n * Math.cos(i) + t,
      g = n * Math.sin(i) + e,
      v = n * Math.cos(r) + t,
      y = n * Math.sin(r) + e,
      m = (f - a) * (f - a) + (g - s) * (g - s),
      _ = (v - a) * (v - a) + (y - s) * (y - s);
    return _ > m ? ((l[0] = f), (l[1] = g), Math.sqrt(m)) : ((l[0] = v), (l[1] = y), Math.sqrt(_));
  }
  function Tf(t, e, n, i, r, o, a, s) {
    var l = r - t,
      u = o - e,
      h = n - t,
      c = i - e,
      p = Math.sqrt(h * h + c * c);
    (h /= p), (c /= p);
    var d = l * h + u * c,
      f = d / p;
    s && (f = Math.min(Math.max(f, 0), 1)), (f *= p);
    var g = (a[0] = t + f * h),
      v = (a[1] = e + f * c);
    return Math.sqrt((g - r) * (g - r) + (v - o) * (v - o));
  }
  function Cf(t, e, n, i, r, o, a) {
    0 > n && ((t += n), (n = -n)), 0 > i && ((e += i), (i = -i));
    var s = t + n,
      l = e + i,
      u = (a[0] = Math.min(Math.max(r, t), s)),
      h = (a[1] = Math.min(Math.max(o, e), l));
    return Math.sqrt((u - r) * (u - r) + (h - o) * (h - o));
  }
  function If(t, e, n) {
    var i = Cf(e.x, e.y, e.width, e.height, t.x, t.y, BA);
    return n.set(BA[0], BA[1]), i;
  }
  function Df(t, e, n) {
    for (var i, r, o = 0, a = 0, s = 0, l = 0, u = 1 / 0, h = e.data, c = t.x, p = t.y, d = 0; d < h.length; ) {
      var f = h[d++];
      1 === d && ((o = h[d]), (a = h[d + 1]), (s = o), (l = a));
      var g = u;
      switch (f) {
        case OA.M:
          (s = h[d++]), (l = h[d++]), (o = s), (a = l);
          break;
        case OA.L:
          (g = Tf(o, a, h[d], h[d + 1], c, p, BA, !0)), (o = h[d++]), (a = h[d++]);
          break;
        case OA.C:
          (g = nn(o, a, h[d++], h[d++], h[d++], h[d++], h[d], h[d + 1], c, p, BA)), (o = h[d++]), (a = h[d++]);
          break;
        case OA.Q:
          (g = hn(o, a, h[d++], h[d++], h[d], h[d + 1], c, p, BA)), (o = h[d++]), (a = h[d++]);
          break;
        case OA.A:
          var v = h[d++],
            y = h[d++],
            m = h[d++],
            _ = h[d++],
            x = h[d++],
            w = h[d++];
          d += 1;
          var b = !!(1 - h[d++]);
          (i = Math.cos(x) * m + v), (r = Math.sin(x) * _ + y), 1 >= d && ((s = i), (l = r));
          var S = ((c - v) * _) / m + v;
          (g = Mf(v, y, _, x, x + w, b, S, p, BA)), (o = Math.cos(x + w) * m + v), (a = Math.sin(x + w) * _ + y);
          break;
        case OA.R:
          (s = o = h[d++]), (l = a = h[d++]);
          var M = h[d++],
            T = h[d++];
          g = Cf(s, l, M, T, c, p, BA);
          break;
        case OA.Z:
          (g = Tf(o, a, s, l, c, p, BA, !0)), (o = s), (a = l);
      }
      u > g && ((u = g), n.set(BA[0], BA[1]));
    }
    return u;
  }
  function kf(t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        i = t.getTextContent();
      if (i && n) {
        var r = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          a = r.candidates || RA,
          s = i.getBoundingRect().clone();
        s.applyTransform(i.getComputedTransform());
        var l = 1 / 0,
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && pi([], h),
          p = e.get('length2') || 0;
        u && NA.copy(u);
        for (var d = 0; d < a.length; d++) {
          var f = a[d];
          Sf(f, 0, s, zA, FA), Sw.scaleAndAdd(EA, zA, FA, p), EA.transform(c);
          var g = t.getBoundingRect(),
            v = u ? u.distance(EA) : t instanceof oS ? Df(EA, t.path, NA) : If(EA, g, NA);
          l > v && ((l = v), EA.transform(h), NA.transform(h), NA.toArray(o[0]), EA.toArray(o[1]), zA.toArray(o[2]));
        }
        Af(o, e.get('minTurnAngle')), n.setShape({ points: o });
      }
    }
  }
  function Af(t, e) {
    if (180 >= e && e > 0) {
      (e = (e / 180) * Math.PI),
        zA.fromArray(t[0]),
        EA.fromArray(t[1]),
        NA.fromArray(t[2]),
        Sw.sub(FA, zA, EA),
        Sw.sub(VA, NA, EA);
      var n = FA.len(),
        i = VA.len();
      if (!(0.001 > n || 0.001 > i)) {
        FA.scale(1 / n), VA.scale(1 / i);
        var r = FA.dot(VA),
          o = Math.cos(e);
        if (r > o) {
          var a = Tf(EA.x, EA.y, NA.x, NA.y, zA.x, zA.y, HA, !1);
          WA.fromArray(HA), WA.scaleAndAdd(VA, a / Math.tan(Math.PI - e));
          var s = NA.x !== EA.x ? (WA.x - EA.x) / (NA.x - EA.x) : (WA.y - EA.y) / (NA.y - EA.y);
          if (isNaN(s)) return;
          0 > s ? Sw.copy(WA, EA) : s > 1 && Sw.copy(WA, NA), WA.toArray(t[1]);
        }
      }
    }
  }
  function Pf(t, e, n) {
    if (180 >= n && n > 0) {
      (n = (n / 180) * Math.PI),
        zA.fromArray(t[0]),
        EA.fromArray(t[1]),
        NA.fromArray(t[2]),
        Sw.sub(FA, EA, zA),
        Sw.sub(VA, NA, EA);
      var i = FA.len(),
        r = VA.len();
      if (!(0.001 > i || 0.001 > r)) {
        FA.scale(1 / i), VA.scale(1 / r);
        var o = FA.dot(e),
          a = Math.cos(n);
        if (a > o) {
          var s = Tf(EA.x, EA.y, NA.x, NA.y, zA.x, zA.y, HA, !1);
          WA.fromArray(HA);
          var l = Math.PI / 2,
            u = Math.acos(VA.dot(e)),
            h = l + u - n;
          if (h >= l) Sw.copy(WA, NA);
          else {
            WA.scaleAndAdd(VA, s / Math.tan(Math.PI / 2 - h));
            var c = NA.x !== EA.x ? (WA.x - EA.x) / (NA.x - EA.x) : (WA.y - EA.y) / (NA.y - EA.y);
            if (isNaN(c)) return;
            0 > c ? Sw.copy(WA, EA) : c > 1 && Sw.copy(WA, NA);
          }
          WA.toArray(t[1]);
        }
      }
    }
  }
  function Lf(t, e, n, i) {
    var r = 'normal' === n,
      o = r ? t : t.ensureState(n);
    o.ignore = e;
    var a = i.get('smooth');
    a && a === !0 && (a = 0.3), (o.shape = o.shape || {}), a > 0 && (o.shape.smooth = a);
    var s = i.getModel('lineStyle').getLineStyle();
    r ? t.useStyle(s) : (o.style = s);
  }
  function Of(t, e) {
    var n = e.smooth,
      i = e.points;
    if (i)
      if ((t.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3)) {
        var r = G_(i[0], i[1]),
          o = G_(i[1], i[2]);
        if (!r || !o) return t.lineTo(i[1][0], i[1][1]), void t.lineTo(i[2][0], i[2][1]);
        var a = Math.min(r, o) * n,
          s = ge([], i[1], i[0], a / r),
          l = ge([], i[1], i[2], a / o),
          u = ge([], s, l, 0.5);
        t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), t.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1]);
      } else for (var h = 1; h < i.length; h++) t.lineTo(i[h][0], i[h][1]);
  }
  function Rf(t, e, n) {
    var i = t.getTextGuideLine(),
      r = t.getTextContent();
    if (!r) return void (i && t.removeTextGuideLine());
    for (var o = e.normal, a = o.get('show'), s = r.ignore, l = 0; l < LS.length; l++) {
      var u = LS[l],
        h = e[u],
        p = 'normal' === u;
      if (h) {
        var d = h.get('show'),
          f = p ? s : N(r.states[u] && r.states[u].ignore, s);
        if (f || !N(d, a)) {
          var g = p ? i : i && i.states[u];
          g && (g.ignore = !0);
          continue;
        }
        i ||
          ((i = new bM()),
          t.setTextGuideLine(i),
          p || (!s && a) || Lf(i, !0, 'normal', e.normal),
          t.stateProxy && (i.stateProxy = t.stateProxy)),
          Lf(i, !1, u, h);
      }
    }
    if (i) {
      c(i.style, n), (i.style.fill = null);
      var v = o.get('showAbove'),
        y = (t.textGuideLineConfig = t.textGuideLineConfig || {});
      (y.showAbove = v || !1), (i.buildPath = Of);
    }
  }
  function Bf(t, e) {
    e = e || 'labelLine';
    for (var n = { normal: t.getModel(e) }, i = 0; i < PS.length; i++) {
      var r = PS[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function zf(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var i = t[n];
      if (!i.defaultAttr.ignore) {
        var r = i.label,
          o = r.getComputedTransform(),
          a = r.getBoundingRect(),
          s = !o || (o[1] < 1e-5 && o[2] < 1e-5),
          l = r.style.margin || 0,
          u = a.clone();
        u.applyTransform(o), (u.x -= l / 2), (u.y -= l / 2), (u.width += l), (u.height += l);
        var h = s ? new FM(a, o) : null;
        e.push({
          label: r,
          labelLine: i.labelLine,
          rect: u,
          localRect: a,
          obb: h,
          priority: i.priority,
          defaultAttr: i.defaultAttr,
          layoutOption: i.computedLayoutOption,
          axisAligned: s,
          transform: o,
        });
      }
    }
    return e;
  }
  function Ef(t, e, n, i, r, o) {
    function a() {
      (w = S.rect[e] - i), (b = r - M.rect[e] - M.rect[n]);
    }
    function s(t, e, n) {
      if (0 > t) {
        var i = Math.min(e, -t);
        if (i > 0) {
          l(i * n, 0, c);
          var r = i + t;
          0 > r && u(-r * n, 1);
        } else u(-t * n, 1);
      }
    }
    function l(n, i, r) {
      0 !== n && (f = !0);
      for (var o = i; r > o; o++) {
        var a = t[o],
          s = a.rect;
        (s[e] += n), (a.label[e] += n);
      }
    }
    function u(i, r) {
      for (var o = [], a = 0, s = 1; c > s; s++) {
        var u = t[s - 1].rect,
          h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
        o.push(h), (a += h);
      }
      if (a) {
        var p = Math.min(Math.abs(i) / a, r);
        if (i > 0)
          for (var s = 0; c - 1 > s; s++) {
            var d = o[s] * p;
            l(d, 0, s + 1);
          }
        else
          for (var s = c - 1; s > 0; s--) {
            var d = o[s - 1] * p;
            l(-d, s, c);
          }
      }
    }
    function h(t) {
      var e = 0 > t ? -1 : 1;
      t = Math.abs(t);
      for (var n = Math.ceil(t / (c - 1)), i = 0; c - 1 > i; i++)
        if ((e > 0 ? l(n, 0, i + 1) : l(-n, c - i - 1, c), (t -= n), 0 >= t)) return;
    }
    var c = t.length;
    if (!(2 > c)) {
      t.sort(function (t, n) {
        return t.rect[e] - n.rect[e];
      });
      for (var p, d = 0, f = !1, g = [], v = 0, y = 0; c > y; y++) {
        var m = t[y],
          _ = m.rect;
        (p = _[e] - d), 0 > p && ((_[e] -= p), (m.label[e] -= p), (f = !0));
        var x = Math.max(-p, 0);
        g.push(x), (v += x), (d = _[e] + _[n]);
      }
      v > 0 && o && l(-v / c, 0, c);
      var w,
        b,
        S = t[0],
        M = t[c - 1];
      return (
        a(),
        0 > w && u(-w, 0.8),
        0 > b && u(b, 0.8),
        a(),
        s(w, b, 1),
        s(b, w, -1),
        a(),
        0 > w && h(-w),
        0 > b && h(b),
        f
      );
    }
  }
  function Nf(t, e, n, i) {
    return Ef(t, 'x', 'width', e, n, i);
  }
  function Ff(t, e, n, i) {
    return Ef(t, 'y', 'height', e, n, i);
  }
  function Vf(t) {
    function e(t) {
      if (!t.ignore) {
        var e = t.ensureState('emphasis');
        null == e.ignore && (e.ignore = !1);
      }
      t.ignore = !0;
    }
    var n = [];
    t.sort(function (t, e) {
      return e.priority - t.priority;
    });
    for (var i = new Lw(0, 0, 0, 0), r = 0; r < t.length; r++) {
      var o = t[r],
        a = o.axisAligned,
        s = o.localRect,
        l = o.transform,
        u = o.label,
        h = o.labelLine;
      i.copy(o.rect), (i.width -= 0.1), (i.height -= 0.1), (i.x += 0.05), (i.y += 0.05);
      for (var c = o.obb, p = !1, d = 0; d < n.length; d++) {
        var f = n[d];
        if (i.intersect(f.rect)) {
          if (a && f.axisAligned) {
            p = !0;
            break;
          }
          if ((f.obb || (f.obb = new FM(f.localRect, f.transform)), c || (c = new FM(s, l)), c.intersect(f.obb))) {
            p = !0;
            break;
          }
        }
      }
      p
        ? (e(u), h && e(h))
        : (u.attr('ignore', o.defaultAttr.ignore), h && h.attr('ignore', o.defaultAttr.labelGuideIgnore), n.push(o));
    }
  }
  function Hf(t) {
    if (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
      return e;
    }
  }
  function Wf(t, e) {
    var n = t.label,
      i = e && e.getTextGuideLine();
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: Hf(i && i.shape.points),
    };
  }
  function Gf(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      null != e[r] && (t[r] = e[r]);
    }
  }
  function Uf(t) {
    t.registerUpdateLifecycle('series:beforeupdate', function (t, e) {
      var n = jA(e).labelManager;
      n || (n = jA(e).labelManager = new qA()), n.clearLabels();
    }),
      t.registerUpdateLifecycle('series:layoutlabels', function (t, e, n) {
        var i = jA(e).labelManager;
        n.updatedSeries.forEach(function (t) {
          i.addLabelsOfSeries(e.getViewOfSeriesModel(t));
        }),
          i.updateLayoutConfig(e),
          i.layout(e),
          i.processLabelsOverall();
      });
  }
  function Xf(t, e, n) {
    var i = b_.createCanvas(),
      r = e.getWidth(),
      o = e.getHeight(),
      a = i.style;
    return (
      a &&
        ((a.position = 'absolute'),
        (a.left = '0'),
        (a.top = '0'),
        (a.width = r + 'px'),
        (a.height = o + 'px'),
        i.setAttribute('data-zr-dom-id', t)),
      (i.width = r * n),
      (i.height = o * n),
      i
    );
  }
  function Yf(t) {
    return t ? (t.__builtin__ ? !0 : 'function' != typeof t.resize || 'function' != typeof t.refresh ? !1 : !0) : !1;
  }
  function Zf(t, e) {
    var n = document.createElement('div');
    return (
      (n.style.cssText =
        [
          'position:relative',
          'width:' + t + 'px',
          'height:' + e + 'px',
          'padding:0',
          'margin:0',
          'border-width:0',
        ].join(';') + ';'),
      n
    );
  }
  function qf(t) {
    t.registerPainter('canvas', eP);
  }
  function jf(t) {
    t.registerComponentModel(nP), t.registerComponentView(iP);
  }
  function Kf(t) {
    return {
      seriesType: t,
      reset: function (t, e, n) {
        var i = t.getData(),
          r = t.get('sampling'),
          o = t.coordinateSystem,
          a = i.count();
        if (a > 10 && 'cartesian2d' === o.type && r) {
          var s = o.getBaseAxis(),
            l = o.getOtherAxis(s),
            u = s.getExtent(),
            h = n.getDevicePixelRatio(),
            c = Math.abs(u[1] - u[0]) * (h || 1),
            p = Math.round(a / c);
          if (isFinite(p) && p > 1) {
            'lttb' === r && t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / p));
            var d = void 0;
            C(r) ? (d = rP[r]) : T(r) && (d = r), d && t.setData(i.downSample(i.mapDimension(l.dim), 1 / p, d, oP));
          }
        }
      },
    };
  }
  function $f(t, e, n, i, r) {
    var o = t.getArea(),
      a = o.x,
      s = o.y,
      l = o.width,
      u = o.height,
      h = n.get(['lineStyle', 'width']) || 2;
    (a -= h / 2), (s -= h / 2), (l += h), (u += h), (a = Math.floor(a)), (l = Math.round(l));
    var c = new fS({ shape: { x: a, y: s, width: l, height: u } });
    if (e) {
      var p = t.getBaseAxis(),
        d = p.isHorizontal(),
        f = p.inverse;
      d ? (f && (c.shape.x += l), (c.shape.width = 0)) : (f || (c.shape.y += u), (c.shape.height = 0));
      var g = T(r)
        ? function (t) {
            r(t, c);
          }
        : null;
      os(c, { shape: { width: l, height: u, x: a, y: s } }, n, null, i, g);
    }
    return c;
  }
  function Qf(t, e, n) {
    var i = t.getArea(),
      r = Hi(i.r0, 1),
      o = Hi(i.r, 1),
      a = new vM({
        shape: {
          cx: Hi(t.cx, 1),
          cy: Hi(t.cy, 1),
          r0: r,
          r: o,
          startAngle: i.startAngle,
          endAngle: i.endAngle,
          clockwise: i.clockwise,
        },
      });
    if (e) {
      var s = 'angle' === t.getBaseAxis().dim;
      s ? (a.shape.endAngle = i.startAngle) : (a.shape.r = r), os(a, { shape: { endAngle: i.endAngle, r: o } }, n);
    }
    return a;
  }
  function Jf(t, e, n, i, r) {
    return t ? ('polar' === t.type ? Qf(t, e, n) : 'cartesian2d' === t.type ? $f(t, e, n, i, r) : null) : null;
  }
  function tg(t, e) {
    return t.type === e;
  }
  function eg(t, e) {
    var n = t.mapDimensionsAll('defaultedLabel'),
      i = n.length;
    if (1 === i) {
      var r = Gu(t, e, n[0]);
      return null != r ? r + '' : null;
    }
    if (i) {
      for (var o = [], a = 0; a < n.length; a++) o.push(Gu(t, e, n[a]));
      return o.join(' ');
    }
  }
  function ng(t, e) {
    var n = t.mapDimensionsAll('defaultedLabel');
    if (!M(e)) return e + '';
    for (var i = [], r = 0; r < n.length; r++) {
      var o = t.getDimensionIndex(n[r]);
      o >= 0 && i.push(e[o]);
    }
    return i.join(' ');
  }
  function ig(t, e) {
    e = e || {};
    var n = e.isRoundCap;
    return function (e, i, r) {
      var o = i.position;
      if (!o || o instanceof Array) return Si(e, i, r);
      var a = t(o),
        s = null != i.distance ? i.distance : 5,
        l = this.shape,
        u = l.cx,
        h = l.cy,
        c = l.r,
        p = l.r0,
        d = (c + p) / 2,
        f = l.startAngle,
        g = l.endAngle,
        v = (f + g) / 2,
        y = n ? Math.abs(c - p) / 2 : 0,
        m = Math.cos,
        _ = Math.sin,
        x = u + c * m(f),
        w = h + c * _(f),
        b = 'left',
        S = 'top';
      switch (a) {
        case 'startArc':
          (x = u + (p - s) * m(v)), (w = h + (p - s) * _(v)), (b = 'center'), (S = 'top');
          break;
        case 'insideStartArc':
          (x = u + (p + s) * m(v)), (w = h + (p + s) * _(v)), (b = 'center'), (S = 'bottom');
          break;
        case 'startAngle':
          (x = u + d * m(f) + og(f, s + y, !1)), (w = h + d * _(f) + ag(f, s + y, !1)), (b = 'right'), (S = 'middle');
          break;
        case 'insideStartAngle':
          (x = u + d * m(f) + og(f, -s + y, !1)), (w = h + d * _(f) + ag(f, -s + y, !1)), (b = 'left'), (S = 'middle');
          break;
        case 'middle':
          (x = u + d * m(v)), (w = h + d * _(v)), (b = 'center'), (S = 'middle');
          break;
        case 'endArc':
          (x = u + (c + s) * m(v)), (w = h + (c + s) * _(v)), (b = 'center'), (S = 'bottom');
          break;
        case 'insideEndArc':
          (x = u + (c - s) * m(v)), (w = h + (c - s) * _(v)), (b = 'center'), (S = 'top');
          break;
        case 'endAngle':
          (x = u + d * m(g) + og(g, s + y, !0)), (w = h + d * _(g) + ag(g, s + y, !0)), (b = 'left'), (S = 'middle');
          break;
        case 'insideEndAngle':
          (x = u + d * m(g) + og(g, -s + y, !0)), (w = h + d * _(g) + ag(g, -s + y, !0)), (b = 'right'), (S = 'middle');
          break;
        default:
          return Si(e, i, r);
      }
      return (e = e || {}), (e.x = x), (e.y = w), (e.align = b), (e.verticalAlign = S), e;
    };
  }
  function rg(t, e, n, i) {
    if (D(i)) return void t.setTextConfig({ rotation: i });
    if (M(e)) return void t.setTextConfig({ rotation: 0 });
    var r,
      o = t.shape,
      a = o.clockwise ? o.startAngle : o.endAngle,
      s = o.clockwise ? o.endAngle : o.startAngle,
      l = (a + s) / 2,
      u = n(e);
    switch (u) {
      case 'startArc':
      case 'insideStartArc':
      case 'middle':
      case 'insideEndArc':
      case 'endArc':
        r = l;
        break;
      case 'startAngle':
      case 'insideStartAngle':
        r = a;
        break;
      case 'endAngle':
      case 'insideEndAngle':
        r = s;
        break;
      default:
        return void t.setTextConfig({ rotation: 0 });
    }
    var h = 1.5 * Math.PI - r;
    'middle' === u && h > Math.PI / 2 && h < 1.5 * Math.PI && (h -= Math.PI), t.setTextConfig({ rotation: h });
  }
  function og(t, e, n) {
    return e * Math.sin(t) * (n ? -1 : 1);
  }
  function ag(t, e, n) {
    return e * Math.cos(t) * (n ? 1 : -1);
  }
  function sg(t, e) {
    var n = t.getArea && t.getArea();
    if (tg(t, 'cartesian2d')) {
      var i = t.getBaseAxis();
      if ('category' !== i.type || !i.onBand) {
        var r = e.getLayout('bandWidth');
        i.isHorizontal() ? ((n.x -= r), (n.width += 2 * r)) : ((n.y -= r), (n.height += 2 * r));
      }
    }
    return n;
  }
  function lg(t, e) {
    var n = t.get('realtimeSort', !0),
      i = e.getBaseAxis();
    return n && 'category' === i.type && 'cartesian2d' === e.type
      ? { baseAxis: i, otherAxis: e.getOtherAxis(i) }
      : void 0;
  }
  function ug(t, e, n, i, r, o, a, s) {
    var l, u;
    o
      ? ((u = { x: i.x, width: i.width }), (l = { y: i.y, height: i.height }))
      : ((u = { y: i.y, height: i.height }), (l = { x: i.x, width: i.width })),
      s || (a ? rs : os)(n, { shape: l }, e, r, null);
    var h = e ? t.baseAxis.model : null;
    (a ? rs : os)(n, { shape: u }, h, r);
  }
  function hg(t, e) {
    for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return !0;
    return !1;
  }
  function cg(t) {
    return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle;
  }
  function pg(t) {
    return (function (t) {
      var e = t ? 'Arc' : 'Angle';
      return function (t) {
        switch (t) {
          case 'start':
          case 'insideStart':
          case 'end':
          case 'insideEnd':
            return t + e;
          default:
            return t;
        }
      };
    })(t);
  }
  function dg(t, e, n, i, r, o, a, s) {
    var l = e.getItemVisual(n, 'style');
    s || t.setShape('r', i.get(['itemStyle', 'borderRadius']) || 0), t.useStyle(l);
    var u = i.getShallow('cursor');
    u && t.attr('cursor', u);
    var h = s
        ? a
          ? r.r >= r.r0
            ? 'endArc'
            : 'startArc'
          : r.endAngle >= r.startAngle
          ? 'endAngle'
          : 'startAngle'
        : a
        ? r.height >= 0
          ? 'bottom'
          : 'top'
        : r.width >= 0
        ? 'right'
        : 'left',
      c = Vs(i);
    Fs(t, c, {
      labelFetcher: o,
      labelDataIndex: n,
      defaultText: eg(o.getData(), n),
      inheritColor: l.fill,
      defaultOpacity: l.opacity,
      defaultOutsidePosition: h,
    });
    var p = t.getTextContent();
    if (s && p) {
      var d = i.get(['label', 'position']);
      (t.textConfig.inside = 'middle' === d ? !0 : null),
        rg(t, 'outside' === d ? h : d, pg(a), i.get(['label', 'rotate']));
    }
    Zs(p, c, o.getRawValue(n), function (t) {
      return ng(e, t);
    });
    var f = i.getModel(['emphasis']);
    ka(t, f.get('focus'), f.get('blurScope'), f.get('disabled')),
      Pa(t, i),
      cg(r) &&
        ((t.style.fill = 'none'),
        (t.style.stroke = 'none'),
        v(t.states, function (t) {
          t.style && (t.style.fill = t.style.stroke = 'none');
        }));
  }
  function fg(t, e) {
    var n = t.get(['itemStyle', 'borderColor']);
    if (!n || 'none' === n) return 0;
    var i = t.get(['itemStyle', 'borderWidth']) || 0,
      r = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),
      o = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
    return Math.min(i, r, o);
  }
  function gg(t, e, n, i) {
    var r = t.getData(),
      o = r.getLayout('valueAxisHorizontal') ? 1 : 0,
      a = r.getLayout('largeDataIndices'),
      s = r.getLayout('size'),
      l = t.getModel('backgroundStyle'),
      u = r.getLayout('largeBackgroundPoints');
    if (u) {
      var h = new xP({ shape: { points: u }, incremental: !!i, silent: !0, z2: 0 });
      (h.baseDimIdx = o),
        (h.largeDataIndices = a),
        (h.barWidth = s),
        h.useStyle(l.getItemStyle()),
        e.add(h),
        n && n.push(h);
    }
    var c = new xP({ shape: { points: r.getLayout('largePoints') }, incremental: !!i, z2: 1 });
    (c.baseDimIdx = o),
      (c.largeDataIndices = a),
      (c.barWidth = s),
      e.add(c),
      c.useStyle(r.getVisual('style')),
      (bS(c).seriesIndex = t.seriesIndex),
      t.get('silent') || (c.on('mousedown', wP), c.on('mousemove', wP)),
      n && n.push(c);
  }
  function vg(t, e, n) {
    for (
      var i = t.baseDimIdx,
        r = 1 - i,
        o = t.shape.points,
        a = t.largeDataIndices,
        s = [],
        l = [],
        u = t.barWidth,
        h = 0,
        c = o.length / 3;
      c > h;
      h++
    ) {
      var p = 3 * h;
      if (
        ((l[i] = u),
        (l[r] = o[p + 2]),
        (s[i] = o[p + i]),
        (s[r] = o[p + r]),
        l[r] < 0 && ((s[r] += l[r]), (l[r] = -l[r])),
        e >= s[0] && e <= s[0] + l[0] && n >= s[1] && n <= s[1] + l[1])
      )
        return a[h];
    }
    return -1;
  }
  function yg(t, e, n) {
    if (tg(n, 'cartesian2d')) {
      var i = e,
        r = n.getArea();
      return { x: t ? i.x : r.x, y: t ? r.y : i.y, width: t ? i.width : r.width, height: t ? r.height : i.height };
    }
    var r = n.getArea(),
      o = e;
    return {
      cx: r.cx,
      cy: r.cy,
      r0: t ? r.r0 : o.r0,
      r: t ? r.r : o.r,
      startAngle: t ? o.startAngle : 0,
      endAngle: t ? o.endAngle : 2 * Math.PI,
    };
  }
  function mg(t, e, n) {
    var i = 'polar' === t.type ? vM : fS;
    return new i({ shape: yg(e, n, t), silent: !0, z2: 0 });
  }
  function _g(t) {
    t.registerChartView(pP),
      t.registerSeriesModel(sP),
      t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, S(fd, 'bar')),
      t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, gd('bar')),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, Kf('bar')),
      t.registerAction({ type: 'changeAxisOrder', event: 'changeAxisOrder', update: 'update' }, function (t, e) {
        var n = t.componentType || 'series';
        e.eachComponent({ mainType: n, query: t }, function (e) {
          t.sortInfo && e.axis.setCategorySortInfo(t.sortInfo);
        });
      });
  }
  function xg(t, e) {
    this.parent.drift(t, e);
  }
  function wg(t, e, n, i) {
    return !(
      !e ||
      isNaN(e[0]) ||
      isNaN(e[1]) ||
      (i.isIgnore && i.isIgnore(n)) ||
      (i.clipShape && !i.clipShape.contain(e[0], e[1])) ||
      'none' === t.getItemVisual(n, 'symbol')
    );
  }
  function bg(t) {
    return null == t || k(t) || (t = { isIgnore: t }), t || {};
  }
  function Sg(t) {
    var e = t.hostModel,
      n = e.getModel('emphasis');
    return {
      emphasisItemStyle: n.getModel('itemStyle').getItemStyle(),
      blurItemStyle: e.getModel(['blur', 'itemStyle']).getItemStyle(),
      selectItemStyle: e.getModel(['select', 'itemStyle']).getItemStyle(),
      focus: n.get('focus'),
      blurScope: n.get('blurScope'),
      emphasisDisabled: n.get('disabled'),
      hoverScale: n.get('scale'),
      labelStatesModels: Vs(e),
      cursorStyle: e.get('cursor'),
    };
  }
  function Mg(t, e, n) {
    var i = t.getBaseAxis(),
      r = t.getOtherAxis(i),
      o = Tg(r, n),
      a = i.dim,
      s = r.dim,
      l = e.mapDimension(s),
      u = e.mapDimension(a),
      h = 'x' === s || 'radius' === s ? 1 : 0,
      c = y(t.dimensions, function (t) {
        return e.mapDimension(t);
      }),
      p = !1,
      d = e.getCalculationInfo('stackResultDimension');
    return (
      Wp(e, c[0]) && ((p = !0), (c[0] = d)),
      Wp(e, c[1]) && ((p = !0), (c[1] = d)),
      {
        dataDimsForPoint: c,
        valueStart: o,
        valueAxisDim: s,
        baseAxisDim: a,
        stacked: !!p,
        valueDim: l,
        baseDim: u,
        baseDataOffset: h,
        stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
      }
    );
  }
  function Tg(t, e) {
    var n = 0,
      i = t.scale.getExtent();
    return (
      'start' === e
        ? (n = i[0])
        : 'end' === e
        ? (n = i[1])
        : D(e) && !isNaN(e)
        ? (n = e)
        : i[0] > 0
        ? (n = i[0])
        : i[1] < 0 && (n = i[1]),
      n
    );
  }
  function Cg(t, e, n, i) {
    var r = 0 / 0;
    t.stacked && (r = n.get(n.getCalculationInfo('stackedOverDimension'), i)), isNaN(r) && (r = t.valueStart);
    var o = t.baseDataOffset,
      a = [];
    return (a[o] = n.get(t.baseDim, i)), (a[1 - o] = r), e.dataToPoint(a);
  }
  function Ig(t, e) {
    var n = [];
    return (
      e
        .diff(t)
        .add(function (t) {
          n.push({ cmd: '+', idx: t });
        })
        .update(function (t, e) {
          n.push({ cmd: '=', idx: e, idx1: t });
        })
        .remove(function (t) {
          n.push({ cmd: '-', idx: t });
        })
        .execute(),
      n
    );
  }
  function Dg(t, e, n, i, r, o, a) {
    for (
      var s = Ig(t, e),
        l = [],
        u = [],
        h = [],
        c = [],
        p = [],
        d = [],
        f = [],
        g = Mg(r, e, a),
        v = t.getLayout('points') || [],
        y = e.getLayout('points') || [],
        m = 0;
      m < s.length;
      m++
    ) {
      var _ = s[m],
        x = !0,
        w = void 0,
        b = void 0;
      switch (_.cmd) {
        case '=':
          (w = 2 * _.idx), (b = 2 * _.idx1);
          var S = v[w],
            M = v[w + 1],
            T = y[b],
            C = y[b + 1];
          (isNaN(S) || isNaN(M)) && ((S = T), (M = C)),
            l.push(S, M),
            u.push(T, C),
            h.push(n[w], n[w + 1]),
            c.push(i[b], i[b + 1]),
            f.push(e.getRawIndex(_.idx1));
          break;
        case '+':
          var I = _.idx,
            D = g.dataDimsForPoint,
            k = r.dataToPoint([e.get(D[0], I), e.get(D[1], I)]);
          (b = 2 * I), l.push(k[0], k[1]), u.push(y[b], y[b + 1]);
          var A = Cg(g, r, e, I);
          h.push(A[0], A[1]), c.push(i[b], i[b + 1]), f.push(e.getRawIndex(I));
          break;
        case '-':
          x = !1;
      }
      x && (p.push(_), d.push(d.length));
    }
    d.sort(function (t, e) {
      return f[t] - f[e];
    });
    for (var P = l.length, L = od(P), O = od(P), R = od(P), B = od(P), z = [], m = 0; m < d.length; m++) {
      var E = d[m],
        N = 2 * m,
        F = 2 * E;
      (L[N] = l[F]),
        (L[N + 1] = l[F + 1]),
        (O[N] = u[F]),
        (O[N + 1] = u[F + 1]),
        (R[N] = h[F]),
        (R[N + 1] = h[F + 1]),
        (B[N] = c[F]),
        (B[N + 1] = c[F + 1]),
        (z[m] = p[E]);
    }
    return { current: L, next: O, stackedOnCurrent: R, stackedOnNext: B, status: z };
  }
  function kg(t, e) {
    return isNaN(t) || isNaN(e);
  }
  function Ag(t, e, n, i, r, o, a, s, l) {
    for (var u, h, c, p, d, f, g = n, v = 0; i > v; v++) {
      var y = e[2 * g],
        m = e[2 * g + 1];
      if (g >= r || 0 > g) break;
      if (kg(y, m)) {
        if (l) {
          g += o;
          continue;
        }
        break;
      }
      if (g === n) t[o > 0 ? 'moveTo' : 'lineTo'](y, m), (c = y), (p = m);
      else {
        var _ = y - u,
          x = m - h;
        if (0.5 > _ * _ + x * x) {
          g += o;
          continue;
        }
        if (a > 0) {
          for (var w = g + o, b = e[2 * w], S = e[2 * w + 1]; b === y && S === m && i > v; )
            v++,
              (w += o),
              (g += o),
              (b = e[2 * w]),
              (S = e[2 * w + 1]),
              (y = e[2 * g]),
              (m = e[2 * g + 1]),
              (_ = y - u),
              (x = m - h);
          var M = v + 1;
          if (l) for (; kg(b, S) && i > M; ) M++, (w += o), (b = e[2 * w]), (S = e[2 * w + 1]);
          var T = 0.5,
            C = 0,
            I = 0,
            D = void 0,
            k = void 0;
          if (M >= i || kg(b, S)) (d = y), (f = m);
          else {
            (C = b - u), (I = S - h);
            var A = y - u,
              P = b - y,
              L = m - h,
              O = S - m,
              R = void 0,
              B = void 0;
            if ('x' === s) {
              (R = Math.abs(A)), (B = Math.abs(P));
              var z = C > 0 ? 1 : -1;
              (d = y - z * R * a), (f = m), (D = y + z * B * a), (k = m);
            } else if ('y' === s) {
              (R = Math.abs(L)), (B = Math.abs(O));
              var E = I > 0 ? 1 : -1;
              (d = y), (f = m - E * R * a), (D = y), (k = m + E * B * a);
            } else
              (R = Math.sqrt(A * A + L * L)),
                (B = Math.sqrt(P * P + O * O)),
                (T = B / (B + R)),
                (d = y - C * a * (1 - T)),
                (f = m - I * a * (1 - T)),
                (D = y + C * a * T),
                (k = m + I * a * T),
                (D = TP(D, CP(b, y))),
                (k = TP(k, CP(S, m))),
                (D = CP(D, TP(b, y))),
                (k = CP(k, TP(S, m))),
                (C = D - y),
                (I = k - m),
                (d = y - (C * R) / B),
                (f = m - (I * R) / B),
                (d = TP(d, CP(u, y))),
                (f = TP(f, CP(h, m))),
                (d = CP(d, TP(u, y))),
                (f = CP(f, TP(h, m))),
                (C = y - d),
                (I = m - f),
                (D = y + (C * B) / R),
                (k = m + (I * B) / R);
          }
          t.bezierCurveTo(c, p, d, f, y, m), (c = D), (p = k);
        } else t.lineTo(y, m);
      }
      (u = y), (h = m), (g += o);
    }
    return v;
  }
  function Pg(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return;
      return !0;
    }
  }
  function Lg(t) {
    for (var e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0, o = 0; o < t.length; ) {
      var a = t[o++],
        s = t[o++];
      isNaN(a) || ((e = Math.min(a, e)), (i = Math.max(a, i))),
        isNaN(s) || ((n = Math.min(s, n)), (r = Math.max(s, r)));
    }
    return [
      [e, n],
      [i, r],
    ];
  }
  function Og(t, e) {
    var n = Lg(t),
      i = n[0],
      r = n[1],
      o = Lg(e),
      a = o[0],
      s = o[1];
    return Math.max(Math.abs(i[0] - a[0]), Math.abs(i[1] - a[1]), Math.abs(r[0] - s[0]), Math.abs(r[1] - s[1]));
  }
  function Rg(t) {
    return D(t) ? t : t ? 0.5 : 0;
  }
  function Bg(t, e, n) {
    if (!n.valueDim) return [];
    for (var i = e.count(), r = od(2 * i), o = 0; i > o; o++) {
      var a = Cg(n, t, e, o);
      (r[2 * o] = a[0]), (r[2 * o + 1] = a[1]);
    }
    return r;
  }
  function zg(t, e, n, i) {
    var r = e.getBaseAxis(),
      o = 'x' === r.dim || 'radius' === r.dim ? 0 : 1,
      a = [],
      s = 0,
      l = [],
      u = [],
      h = [],
      c = [];
    if (i) {
      for (s = 0; s < t.length; s += 2) isNaN(t[s]) || isNaN(t[s + 1]) || c.push(t[s], t[s + 1]);
      t = c;
    }
    for (s = 0; s < t.length - 2; s += 2)
      switch (((h[0] = t[s + 2]), (h[1] = t[s + 3]), (u[0] = t[s]), (u[1] = t[s + 1]), a.push(u[0], u[1]), n)) {
        case 'end':
          (l[o] = h[o]), (l[1 - o] = u[1 - o]), a.push(l[0], l[1]);
          break;
        case 'middle':
          var p = (u[o] + h[o]) / 2,
            d = [];
          (l[o] = d[o] = p), (l[1 - o] = u[1 - o]), (d[1 - o] = h[1 - o]), a.push(l[0], l[1]), a.push(d[0], d[1]);
          break;
        default:
          (l[o] = u[o]), (l[1 - o] = h[1 - o]), a.push(l[0], l[1]);
      }
    return a.push(t[s++], t[s++]), a;
  }
  function Eg(t, e) {
    function n(t, e, n) {
      var i = t.coord,
        r = (n - i) / (e.coord - i),
        o = kn(r, [t.color, e.color]);
      return { coord: n, color: o };
    }
    for (var i, r, o = [], a = t.length, s = 0; a > s; s++) {
      var l = t[s],
        u = l.coord;
      if (0 > u) i = l;
      else {
        if (u > e) {
          r ? o.push(n(r, l, e)) : i && o.push(n(i, l, 0), n(i, l, e));
          break;
        }
        i && (o.push(n(i, l, 0)), (i = null)), o.push(l), (r = l);
      }
    }
    return o;
  }
  function Ng(t, e, n) {
    var i = t.getVisual('visualMeta');
    if (i && i.length && t.count() && 'cartesian2d' === e.type) {
      for (var r, o, a = i.length - 1; a >= 0; a--) {
        var s = t.getDimensionInfo(i[a].dimension);
        if (((r = s && s.coordDim), 'x' === r || 'y' === r)) {
          o = i[a];
          break;
        }
      }
      if (o) {
        var l = e.getAxis(r),
          u = y(o.stops, function (t) {
            return { coord: l.toGlobalCoord(l.dataToCoord(t.value)), color: t.color };
          }),
          h = u.length,
          c = o.outerColors.slice();
        h && u[0].coord > u[h - 1].coord && (u.reverse(), c.reverse());
        var p = Eg(u, 'x' === r ? n.getWidth() : n.getHeight()),
          d = p.length;
        if (!d && h) return u[0].coord < 0 ? (c[1] ? c[1] : u[h - 1].color) : c[0] ? c[0] : u[0].color;
        var f = 10,
          g = p[0].coord - f,
          m = p[d - 1].coord + f,
          _ = m - g;
        if (0.001 > _) return 'transparent';
        v(p, function (t) {
          t.offset = (t.coord - g) / _;
        }),
          p.push({ offset: d ? p[d - 1].offset : 0.5, color: c[1] || 'transparent' }),
          p.unshift({ offset: d ? p[0].offset : 0.5, color: c[0] || 'transparent' });
        var x = new OM(0, 0, 0, 0, p, !0);
        return (x[r] = g), (x[r + '2'] = m), x;
      }
    }
  }
  function Fg(t, e, n) {
    var i = t.get('showAllSymbol'),
      r = 'auto' === i;
    if (!i || r) {
      var o = n.getAxesByScale('ordinal')[0];
      if (o && (!r || !Vg(o, e))) {
        var a = e.mapDimension(o.dim),
          s = {};
        return (
          v(o.getViewLabels(), function (t) {
            var e = o.scale.getRawOrdinalNumber(t.tickValue);
            s[e] = 1;
          }),
          function (t) {
            return !s.hasOwnProperty(e.get(a, t));
          }
        );
      }
    }
  }
  function Vg(t, e) {
    var n = t.getExtent(),
      i = Math.abs(n[1] - n[0]) / t.scale.count();
    isNaN(i) && (i = 0);
    for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; r > a; a += o)
      if (1.5 * SP.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return !1;
    return !0;
  }
  function Hg(t, e) {
    return isNaN(t) || isNaN(e);
  }
  function Wg(t) {
    for (var e = t.length / 2; e > 0 && Hg(t[2 * e - 2], t[2 * e - 1]); e--);
    return e - 1;
  }
  function Gg(t, e) {
    return [t[2 * e], t[2 * e + 1]];
  }
  function Ug(t, e, n) {
    for (var i, r, o = t.length / 2, a = 'x' === n ? 0 : 1, s = 0, l = -1, u = 0; o > u; u++)
      if (((r = t[2 * u + a]), !isNaN(r) && !isNaN(t[2 * u + 1 - a])))
        if (0 !== u) {
          if ((e >= i && r >= e) || (i >= e && e >= r)) {
            l = u;
            break;
          }
          (s = u), (i = r);
        } else i = r;
    return { range: [s, l], t: (e - i) / (r - i) };
  }
  function Xg(t) {
    if (t.get(['endLabel', 'show'])) return !0;
    for (var e = 0; e < PS.length; e++) if (t.get([PS[e], 'endLabel', 'show'])) return !0;
    return !1;
  }
  function Yg(t, e, n, i) {
    if (tg(e, 'cartesian2d')) {
      var r = i.getModel('endLabel'),
        o = r.get('valueAnimation'),
        a = i.getData(),
        s = { lastFrameIndex: 0 },
        l = Xg(i)
          ? function (n, i) {
              t._endLabelOnDuring(n, i, a, s, o, r, e);
            }
          : null,
        u = e.getBaseAxis().isHorizontal(),
        h = $f(
          e,
          n,
          i,
          function () {
            var e = t._endLabel;
            e && n && null != s.originalX && e.attr({ x: s.originalX, y: s.originalY });
          },
          l,
        );
      if (!i.get('clip', !0)) {
        var c = h.shape,
          p = Math.max(c.width, c.height);
        u ? ((c.y -= p), (c.height += 2 * p)) : ((c.x -= p), (c.width += 2 * p));
      }
      return l && l(1, h), h;
    }
    return Qf(e, n, i);
  }
  function Zg(t, e) {
    var n = e.getBaseAxis(),
      i = n.isHorizontal(),
      r = n.inverse,
      o = i ? (r ? 'right' : 'left') : 'center',
      a = i ? 'middle' : r ? 'top' : 'bottom';
    return { normal: { align: t.get('align') || o, verticalAlign: t.get('verticalAlign') || a } };
  }
  function qg(t, e) {
    return {
      seriesType: t,
      plan: zh(),
      reset: function (t) {
        var n = t.getData(),
          i = t.coordinateSystem,
          r = t.pipelineContext,
          o = e || r.large;
        if (i) {
          var a = y(i.dimensions, function (t) {
              return n.mapDimension(t);
            }).slice(0, 2),
            s = a.length,
            l = n.getCalculationInfo('stackResultDimension');
          Wp(n, a[0]) && (a[0] = l), Wp(n, a[1]) && (a[1] = l);
          var u = n.getStore(),
            h = n.getDimensionIndex(a[0]),
            c = n.getDimensionIndex(a[1]);
          return (
            s && {
              progress: function (t, e) {
                for (var n = t.end - t.start, r = o && od(n * s), a = [], l = [], p = t.start, d = 0; p < t.end; p++) {
                  var f = void 0;
                  if (1 === s) {
                    var g = u.get(h, p);
                    f = i.dataToPoint(g, null, l);
                  } else (a[0] = u.get(h, p)), (a[1] = u.get(c, p)), (f = i.dataToPoint(a, null, l));
                  o ? ((r[d++] = f[0]), (r[d++] = f[1])) : e.setItemLayout(p, f.slice());
                }
                o && e.setLayout('points', r);
              },
            }
          );
        }
      },
    };
  }
  function jg(t) {
    t.registerChartView(PP),
      t.registerSeriesModel(bP),
      t.registerLayout(qg('line', !0)),
      t.registerVisual({
        seriesType: 'line',
        reset: function (t) {
          var e = t.getData(),
            n = t.getModel('lineStyle').getLineStyle();
          n && !n.stroke && (n.stroke = e.getVisual('style').fill), e.setVisual('legendLineStyle', n);
        },
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, Kf('line'));
  }
  function Kg(t, e) {
    return El(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
  }
  function $g(t, e) {
    var n = Kg(t, e),
      i = t.get('center'),
      r = t.get('radius');
    M(r) || (r = [0, r]), M(i) || (i = [i, i]);
    var o = Vi(n.width, e.getWidth()),
      a = Vi(n.height, e.getHeight()),
      s = Math.min(o, a),
      l = Vi(i[0], o) + n.x,
      u = Vi(i[1], a) + n.y,
      h = Vi(r[0], s / 2),
      c = Vi(r[1], s / 2);
    return { cx: l, cy: u, r0: h, r: c };
  }
  function Qg(t, e, n) {
    e.eachSeriesByType(t, function (t) {
      var e = t.getData(),
        i = e.mapDimension('value'),
        r = Kg(t, n),
        o = $g(t, n),
        a = o.cx,
        s = o.cy,
        l = o.r,
        u = o.r0,
        h = -t.get('startAngle') * OP,
        c = t.get('minAngle') * OP,
        p = 0;
      e.each(i, function (t) {
        !isNaN(t) && p++;
      });
      var d = e.getSum(i),
        f = (Math.PI / (d || p)) * 2,
        g = t.get('clockwise'),
        v = t.get('roseType'),
        y = t.get('stillShowZeroSum'),
        m = e.getDataExtent(i);
      m[0] = 0;
      var _ = LP,
        x = 0,
        w = h,
        b = g ? 1 : -1;
      if (
        (e.setLayout({ viewRect: r, r: l }),
        e.each(i, function (t, n) {
          var i;
          if (isNaN(t))
            return void e.setItemLayout(n, {
              angle: 0 / 0,
              startAngle: 0 / 0,
              endAngle: 0 / 0,
              clockwise: g,
              cx: a,
              cy: s,
              r0: u,
              r: v ? 0 / 0 : l,
            });
          (i = 'area' !== v ? (0 === d && y ? f : t * f) : LP / p), c > i ? ((i = c), (_ -= c)) : (x += t);
          var r = w + b * i;
          e.setItemLayout(n, {
            angle: i,
            startAngle: w,
            endAngle: r,
            clockwise: g,
            cx: a,
            cy: s,
            r0: u,
            r: v ? Fi(t, m, [u, l]) : l,
          }),
            (w = r);
        }),
        LP > _ && p)
      )
        if (0.001 >= _) {
          var S = LP / p;
          e.each(i, function (t, n) {
            if (!isNaN(t)) {
              var i = e.getItemLayout(n);
              (i.angle = S), (i.startAngle = h + b * n * S), (i.endAngle = h + b * (n + 1) * S);
            }
          });
        } else
          (f = _ / x),
            (w = h),
            e.each(i, function (t, n) {
              if (!isNaN(t)) {
                var i = e.getItemLayout(n),
                  r = i.angle === c ? c : t * f;
                (i.startAngle = w), (i.endAngle = w + b * r), (w += b * r);
              }
            });
    });
  }
  function Jg(t) {
    return {
      seriesType: t,
      reset: function (t, e) {
        var n = e.findComponents({ mainType: 'legend' });
        if (n && n.length) {
          var i = t.getData();
          i.filterSelf(function (t) {
            for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
            return !0;
          });
        }
      },
    };
  }
  function tv(t, e, n, i, r, o, a, s, l, u) {
    function h(t) {
      for (var o = t.rB, a = o * o, s = 0; s < t.list.length; s++) {
        var l = t.list[s],
          u = Math.abs(l.label.y - n),
          h = i + l.len,
          c = h * h,
          p = Math.sqrt((1 - Math.abs((u * u) / a)) * c),
          d = e + (p + l.len2) * r,
          f = d - l.label.x,
          g = l.targetTextWidth - f * r;
        nv(l, g, !0), (l.label.x = d);
      }
    }
    function c(t) {
      for (var o = { list: [], maxY: 0 }, a = { list: [], maxY: 0 }, s = 0; s < t.length; s++)
        if ('none' === t[s].labelAlignTo) {
          var l = t[s],
            u = l.label.y > n ? a : o,
            c = Math.abs(l.label.y - n);
          if (c >= u.maxY) {
            var p = l.label.x - e - l.len2 * r,
              d = i + l.len,
              f = Math.abs(p) < d ? Math.sqrt((c * c) / (1 - (p * p) / d / d)) : d;
            (u.rB = f), (u.maxY = c);
          }
          u.list.push(l);
        }
      h(o), h(a);
    }
    if (!(t.length < 2)) {
      for (var p = t.length, d = 0; p > d; d++)
        if ('outer' === t[d].position && 'labelLine' === t[d].labelAlignTo) {
          var f = t[d].label.x - u;
          (t[d].linePoints[1][0] += f), (t[d].label.x = u);
        }
      Ff(t, l, l + a) && c(t);
    }
  }
  function ev(t, e, n, i, r, o, a, s) {
    for (var l = [], u = [], h = Number.MAX_VALUE, c = -Number.MAX_VALUE, p = 0; p < t.length; p++) {
      var d = t[p].label;
      iv(t[p]) || (d.x < e ? ((h = Math.min(h, d.x)), l.push(t[p])) : ((c = Math.max(c, d.x)), u.push(t[p])));
    }
    for (var p = 0; p < t.length; p++) {
      var f = t[p];
      if (!iv(f) && f.linePoints) {
        if (null != f.labelStyleWidth) continue;
        var d = f.label,
          g = f.linePoints,
          v = void 0;
        (v =
          'edge' === f.labelAlignTo
            ? d.x < e
              ? g[2][0] - f.labelDistance - a - f.edgeDistance
              : a + r - f.edgeDistance - g[2][0] - f.labelDistance
            : 'labelLine' === f.labelAlignTo
            ? d.x < e
              ? h - a - f.bleedMargin
              : a + r - c - f.bleedMargin
            : d.x < e
            ? d.x - a - f.bleedMargin
            : a + r - d.x - f.bleedMargin),
          (f.targetTextWidth = v),
          nv(f, v);
      }
    }
    tv(u, e, n, i, 1, r, o, a, s, c), tv(l, e, n, i, -1, r, o, a, s, h);
    for (var p = 0; p < t.length; p++) {
      var f = t[p];
      if (!iv(f) && f.linePoints) {
        var d = f.label,
          g = f.linePoints,
          y = 'edge' === f.labelAlignTo,
          m = d.style.padding,
          _ = m ? m[1] + m[3] : 0,
          x = d.style.backgroundColor ? 0 : _,
          w = f.rect.width + x,
          b = g[1][0] - g[2][0];
        y
          ? (g[2][0] =
              d.x < e ? a + f.edgeDistance + w + f.labelDistance : a + r - f.edgeDistance - w - f.labelDistance)
          : ((g[2][0] = d.x < e ? d.x + f.labelDistance : d.x - f.labelDistance), (g[1][0] = g[2][0] + b)),
          (g[1][1] = g[2][1] = d.y);
      }
    }
  }
  function nv(t, e, n) {
    if ((void 0 === n && (n = !1), null == t.labelStyleWidth)) {
      var i = t.label,
        r = i.style,
        o = t.rect,
        a = r.backgroundColor,
        s = r.padding,
        l = s ? s[1] + s[3] : 0,
        u = r.overflow,
        h = o.width + (a ? 0 : l);
      if (h > e || n) {
        var c = o.height;
        if (u && u.match('break')) {
          i.setStyle('backgroundColor', null), i.setStyle('width', e - l);
          var p = i.getBoundingRect();
          i.setStyle('width', Math.ceil(p.width)), i.setStyle('backgroundColor', a);
        } else {
          var d = e - l,
            f = h > e ? d : n ? (d > t.unconstrainedWidth ? null : d) : null;
          i.setStyle('width', f);
        }
        var g = i.getBoundingRect();
        o.width = g.width;
        var v = (i.style.margin || 0) + 2.1;
        (o.height = g.height + v), (o.y -= (o.height - c) / 2);
      }
    }
  }
  function iv(t) {
    return 'center' === t.position;
  }
  function rv(t) {
    function e(t) {
      t.ignore = !0;
    }
    function n(t) {
      if (!t.ignore) return !0;
      for (var e in t.states) if (t.states[e].ignore === !1) return !0;
      return !1;
    }
    var i,
      r,
      o = t.getData(),
      a = [],
      s = !1,
      l = (t.get('minShowLabelAngle') || 0) * RP,
      u = o.getLayout('viewRect'),
      h = o.getLayout('r'),
      c = u.width,
      p = u.x,
      d = u.y,
      f = u.height;
    o.each(function (t) {
      var u = o.getItemGraphicEl(t),
        d = u.shape,
        f = u.getTextContent(),
        g = u.getTextGuideLine(),
        y = o.getItemModel(t),
        m = y.getModel('label'),
        _ = m.get('position') || y.get(['emphasis', 'label', 'position']),
        x = m.get('distanceToLabelLine'),
        w = m.get('alignTo'),
        b = Vi(m.get('edgeDistance'), c),
        S = m.get('bleedMargin'),
        M = y.getModel('labelLine'),
        T = M.get('length');
      T = Vi(T, c);
      var C = M.get('length2');
      if (((C = Vi(C, c)), Math.abs(d.endAngle - d.startAngle) < l)) return v(f.states, e), void (f.ignore = !0);
      if (n(f)) {
        var I,
          k,
          A,
          P,
          L = (d.startAngle + d.endAngle) / 2,
          O = Math.cos(L),
          R = Math.sin(L);
        (i = d.cx), (r = d.cy);
        var B = 'inside' === _ || 'inner' === _;
        if ('center' === _) (I = d.cx), (k = d.cy), (P = 'center');
        else {
          var z = (B ? ((d.r + d.r0) / 2) * O : d.r * O) + i,
            E = (B ? ((d.r + d.r0) / 2) * R : d.r * R) + r;
          if (((I = z + 3 * O), (k = E + 3 * R), !B)) {
            var N = z + O * (T + h - d.r),
              F = E + R * (T + h - d.r),
              V = N + (0 > O ? -1 : 1) * C,
              H = F;
            (I = 'edge' === w ? (0 > O ? p + b : p + c - b) : V + (0 > O ? -x : x)),
              (k = H),
              (A = [
                [z, E],
                [N, F],
                [V, H],
              ]);
          }
          P = B ? 'center' : 'edge' === w ? (O > 0 ? 'right' : 'left') : O > 0 ? 'left' : 'right';
        }
        var W = Math.PI,
          G = 0,
          U = m.get('rotate');
        if (D(U)) G = U * (W / 180);
        else if ('center' === _) G = 0;
        else if ('radial' === U || U === !0) {
          var X = 0 > O ? -L + W : -L;
          G = X;
        } else if ('tangential' === U && 'outside' !== _ && 'outer' !== _) {
          var Y = Math.atan2(O, R);
          0 > Y && (Y = 2 * W + Y);
          var Z = R > 0;
          Z && (Y = W + Y), (G = Y - W);
        }
        if (((s = !!G), (f.x = I), (f.y = k), (f.rotation = G), f.setStyle({ verticalAlign: 'middle' }), B)) {
          f.setStyle({ align: P });
          var q = f.states.select;
          q && ((q.x += f.x), (q.y += f.y));
        } else {
          var j = f.getBoundingRect().clone();
          j.applyTransform(f.getComputedTransform());
          var K = (f.style.margin || 0) + 2.1;
          (j.y -= K / 2),
            (j.height += K),
            a.push({
              label: f,
              labelLine: g,
              position: _,
              len: T,
              len2: C,
              minTurnAngle: M.get('minTurnAngle'),
              maxSurfaceAngle: M.get('maxSurfaceAngle'),
              surfaceNormal: new Sw(O, R),
              linePoints: A,
              textAlign: P,
              labelDistance: x,
              labelAlignTo: w,
              edgeDistance: b,
              bleedMargin: S,
              rect: j,
              unconstrainedWidth: j.width,
              labelStyleWidth: f.style.width,
            });
        }
        u.setTextConfig({ inside: B });
      }
    }),
      !s && t.get('avoidLabelOverlap') && ev(a, i, r, h, c, f, p, d);
    for (var g = 0; g < a.length; g++) {
      var y = a[g],
        m = y.label,
        _ = y.labelLine,
        x = isNaN(m.x) || isNaN(m.y);
      if (m) {
        m.setStyle({ align: y.textAlign }), x && (v(m.states, e), (m.ignore = !0));
        var w = m.states.select;
        w && ((w.x += m.x), (w.y += m.y));
      }
      if (_) {
        var b = y.linePoints;
        x || !b
          ? (v(_.states, e), (_.ignore = !0))
          : (Af(b, y.minTurnAngle),
            Pf(b, y.surfaceNormal, y.maxSurfaceAngle),
            _.setShape({ points: b }),
            (m.__hostTarget.textGuideLineConfig = { anchor: new Sw(b[0][0], b[0][1]) }));
      }
    }
  }
  function ov(t, e, n) {
    var i = t.get('borderRadius');
    if (null == i) return n ? { cornerRadius: 0 } : null;
    M(i) || (i = [i, i, i, i]);
    var r = Math.abs(e.r || 0 - e.r0 || 0);
    return {
      cornerRadius: y(i, function (t) {
        return bi(t, r);
      }),
    };
  }
  function av(t, e, n) {
    e = (M(e) && { coordDimensions: e }) || h({ encodeDefine: t.getEncode() }, e);
    var i = t.getSource(),
      r = Rp(i, e).dimensions,
      o = new Vk(r, t);
    return o.initData(i, n), o;
  }
  function sv(t) {
    return {
      seriesType: t,
      reset: function (t) {
        var e = t.getData();
        e.filterSelf(function (t) {
          var n = e.mapDimension('value'),
            i = e.get(n, t);
          return D(i) && !isNaN(i) && 0 > i ? !1 : !0;
        });
      },
    };
  }
  function lv(t) {
    t.registerChartView(zP),
      t.registerSeriesModel(NP),
      oc('pie', t.registerAction),
      t.registerLayout(S(Qg, 'pie')),
      t.registerProcessor(Jg('pie')),
      t.registerProcessor(sv('pie'));
  }
  function uv(t, n, i, r) {
    v(JP, function (o, a) {
      var s = l(l({}, QP[a], !0), r, !0),
        u = (function (t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = n + 'Axis.' + a), e;
          }
          return (
            e(i, t),
            (i.prototype.mergeDefaultAndTheme = function (t, e) {
              var n = Nl(this),
                i = n ? Vl(t) : {},
                r = e.getTheme();
              l(t, r.get(a + 'Axis')), l(t, this.getDefaultOption()), (t.type = hv(t)), n && Fl(t, i, n);
            }),
            (i.prototype.optionUpdated = function () {
              var t = this.option;
              'category' === t.type && (this.__ordinalMeta = Xk.createByAxisModel(this));
            }),
            (i.prototype.getCategories = function (t) {
              var e = this.option;
              return 'category' === e.type ? (t ? e.data : this.__ordinalMeta.categories) : void 0;
            }),
            (i.prototype.getOrdinalMeta = function () {
              return this.__ordinalMeta;
            }),
            (i.type = n + 'Axis.' + a),
            (i.defaultOption = s),
            i
          );
        })(i);
      t.registerComponentModel(u);
    }),
      t.registerSubTypeDefaulter(n + 'Axis', hv);
  }
  function hv(t) {
    return t.type || (t.data ? 'category' : 'value');
  }
  function cv(t) {
    return 'interval' === t.type || 'time' === t.type;
  }
  function pv(t, e, n) {
    n = n || {};
    var i = t.coordinateSystem,
      r = e.axis,
      o = {},
      a = r.getAxesOnZeroOf()[0],
      s = r.position,
      l = a ? 'onZero' : s,
      u = r.dim,
      h = i.getRect(),
      c = [h.x, h.x + h.width, h.y, h.y + h.height],
      p = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
      d = e.get('offset') || 0,
      f = 'x' === u ? [c[2] - d, c[3] + d] : [c[0] - d, c[1] + d];
    if (a) {
      var g = a.toGlobalCoord(a.dataToCoord(0));
      f[p.onZero] = Math.max(Math.min(g, f[1]), f[0]);
    }
    (o.position = ['y' === u ? f[p[l]] : c[0], 'x' === u ? f[p[l]] : c[3]]),
      (o.rotation = (Math.PI / 2) * ('x' === u ? 0 : 1));
    var v = { top: -1, bottom: 1, left: -1, right: 1 };
    (o.labelDirection = o.tickDirection = o.nameDirection = v[s]),
      (o.labelOffset = a ? f[p[s]] - f[p.onZero] : 0),
      e.get(['axisTick', 'inside']) && (o.tickDirection = -o.tickDirection),
      E(n.labelInside, e.get(['axisLabel', 'inside'])) && (o.labelDirection = -o.labelDirection);
    var y = e.get(['axisLabel', 'rotate']);
    return (o.labelRotate = 'top' === l ? -y : y), (o.z2 = 1), o;
  }
  function dv(t) {
    return 'cartesian2d' === t.get('coordinateSystem');
  }
  function fv(t) {
    var e = { xAxisModel: null, yAxisModel: null };
    return (
      v(e, function (n, i) {
        var r = i.replace(/Model$/, ''),
          o = t.getReferringComponents(r, tb).models[0];
        e[i] = o;
      }),
      e
    );
  }
  function gv(t, e, n) {
    var i = qk.prototype,
      r = i.getTicks.call(n),
      o = i.getTicks.call(n, !0),
      a = r.length - 1,
      s = i.getInterval.call(n),
      l = Ad(t, e),
      u = l.extent,
      h = l.fixMin,
      c = l.fixMax;
    if ('log' === t.type) {
      var p = rL(t.base);
      u = [rL(u[0]) / p, rL(u[1]) / p];
    }
    t.setExtent(u[0], u[1]), t.calcNiceExtent({ splitNumber: a, fixMin: h, fixMax: c });
    var d = i.getExtent.call(t);
    h && (u[0] = d[0]), c && (u[1] = d[1]);
    var f = i.getInterval.call(t),
      g = u[0],
      v = u[1];
    if (h && c) f = (v - g) / a;
    else if (h) for (v = u[0] + f * a; v < u[1] && isFinite(v) && isFinite(u[1]); ) (f = Qp(f)), (v = u[0] + f * a);
    else if (c) for (g = u[1] - f * a; g > u[0] && isFinite(g) && isFinite(u[0]); ) (f = Qp(f)), (g = u[1] - f * a);
    else {
      var y = t.getTicks().length - 1;
      y > a && (f = Qp(f));
      var m = f * a;
      (v = Math.ceil(u[1] / f) * f),
        (g = Hi(v - m)),
        0 > g && u[0] >= 0 ? ((g = 0), (v = Hi(m))) : v > 0 && u[1] <= 0 && ((v = 0), (g = -Hi(m)));
    }
    var _ = (r[0].value - o[0].value) / s,
      x = (r[a].value - o[a].value) / s;
    i.setExtent.call(t, g + f * _, v + f * x),
      i.setInterval.call(t, f),
      (_ || x) && i.setNiceExtent.call(t, g + f, v - f);
  }
  function vv(t, e) {
    return t.getCoordSysModel() === e;
  }
  function yv(t, e, n, i) {
    function r(t) {
      return t.dim + '_' + t.index;
    }
    n.getAxesOnZeroOf = function () {
      return o ? [o] : [];
    };
    var o,
      a = t[e],
      s = n.model,
      l = s.get(['axisLine', 'onZero']),
      u = s.get(['axisLine', 'onZeroAxisIndex']);
    if (l) {
      if (null != u) mv(a[u]) && (o = a[u]);
      else
        for (var h in a)
          if (a.hasOwnProperty(h) && mv(a[h]) && !i[r(a[h])]) {
            o = a[h];
            break;
          }
      o && (i[r(o)] = !0);
    }
  }
  function mv(t) {
    return t && 'category' !== t.type && 'time' !== t.type && Rd(t);
  }
  function _v(t, e) {
    var n = t.getExtent(),
      i = n[0] + n[1];
    (t.toGlobalCoord =
      'x' === t.dim
        ? function (t) {
            return t + e;
          }
        : function (t) {
            return i - t + e;
          }),
      (t.toLocalCoord =
        'x' === t.dim
          ? function (t) {
              return t - e;
            }
          : function (t) {
              return i - t + e;
            });
  }
  function xv(t, e, n, i) {
    var r,
      o,
      a = qi(n - t),
      s = i[0] > i[1],
      l = ('start' === e && !s) || ('start' !== e && s);
    return (
      ji(a - aL / 2)
        ? ((o = l ? 'bottom' : 'top'), (r = 'center'))
        : ji(a - 1.5 * aL)
        ? ((o = l ? 'top' : 'bottom'), (r = 'center'))
        : ((o = 'middle'), (r = 1.5 * aL > a && a > aL / 2 ? (l ? 'left' : 'right') : l ? 'right' : 'left')),
      { rotation: a, textAlign: r, textVerticalAlign: o }
    );
  }
  function wv(t, e, n) {
    if (!Vd(t.axis)) {
      var i = t.get(['axisLabel', 'showMinLabel']),
        r = t.get(['axisLabel', 'showMaxLabel']);
      (e = e || []), (n = n || []);
      var o = e[0],
        a = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        u = n[0],
        h = n[1],
        c = n[n.length - 1],
        p = n[n.length - 2];
      i === !1 ? (bv(o), bv(u)) : Sv(o, a) && (i ? (bv(a), bv(h)) : (bv(o), bv(u))),
        r === !1 ? (bv(s), bv(c)) : Sv(l, s) && (r ? (bv(l), bv(p)) : (bv(s), bv(c)));
    }
  }
  function bv(t) {
    t && (t.ignore = !0);
  }
  function Sv(t, e) {
    var n = t && t.getBoundingRect().clone(),
      i = e && e.getBoundingRect().clone();
    if (n && i) {
      var r = ai([]);
      return (
        hi(r, r, -t.rotation),
        n.applyTransform(li([], r, t.getLocalTransform())),
        i.applyTransform(li([], r, e.getLocalTransform())),
        n.intersect(i)
      );
    }
  }
  function Mv(t) {
    return 'middle' === t || 'center' === t;
  }
  function Tv(t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord;
      (a[0] = u), (a[1] = 0), (s[0] = u), (s[1] = n), e && (ve(a, a, e), ve(s, s, e));
      var h = new TM({
        subPixelOptimize: !0,
        shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
        style: i,
        z2: 2,
        autoBatch: !0,
        silent: !0,
      });
      (h.anid = r + '_' + t[l].tickValue), o.push(h);
    }
    return o;
  }
  function Cv(t, e, n, i) {
    var r = n.axis,
      o = n.getModel('axisTick'),
      a = o.get('show');
    if (('auto' === a && i.handleAutoShown && (a = i.handleAutoShown('axisTick')), a && !r.scale.isBlank())) {
      for (
        var s = o.getModel('lineStyle'),
          l = i.tickDirection * o.get('length'),
          u = r.getTicksCoords(),
          h = Tv(
            u,
            e.transform,
            l,
            c(s.getLineStyle(), { stroke: n.get(['axisLine', 'lineStyle', 'color']) }),
            'ticks',
          ),
          p = 0;
        p < h.length;
        p++
      )
        t.add(h[p]);
      return h;
    }
  }
  function Iv(t, e, n, i) {
    var r = n.axis,
      o = n.getModel('minorTick');
    if (o.get('show') && !r.scale.isBlank()) {
      var a = r.getMinorTicksCoords();
      if (a.length)
        for (
          var s = o.getModel('lineStyle'),
            l = i * o.get('length'),
            u = c(
              s.getLineStyle(),
              c(n.getModel('axisTick').getLineStyle(), { stroke: n.get(['axisLine', 'lineStyle', 'color']) }),
            ),
            h = 0;
          h < a.length;
          h++
        )
          for (var p = Tv(a[h], e.transform, l, u, 'minorticks_' + h), d = 0; d < p.length; d++) t.add(p[d]);
    }
  }
  function Dv(t, e, n, i) {
    var r = n.axis,
      o = E(i.axisLabelShow, n.get(['axisLabel', 'show']));
    if (o && !r.scale.isBlank()) {
      var a = n.getModel('axisLabel'),
        s = a.get('margin'),
        l = r.getViewLabels(),
        u = ((E(i.labelRotate, a.get('rotate')) || 0) * aL) / 180,
        h = sL.innerTextLayout(i.rotation, u, i.labelDirection),
        c = n.getCategories && n.getCategories(!0),
        p = [],
        d = sL.isLabelSilent(n),
        f = n.get('triggerEvent');
      return (
        v(l, function (o, l) {
          var u = 'ordinal' === r.scale.type ? r.scale.getRawOrdinalNumber(o.tickValue) : o.tickValue,
            g = o.formattedLabel,
            v = o.rawLabel,
            y = a;
          if (c && c[u]) {
            var m = c[u];
            k(m) && m.textStyle && (y = new cT(m.textStyle, a, n.ecModel));
          }
          var _ = y.getTextColor() || n.get(['axisLine', 'lineStyle', 'color']),
            x = r.dataToCoord(u),
            w = new mS({
              x: x,
              y: i.labelOffset + i.labelDirection * s,
              rotation: h.rotation,
              silent: d,
              z2: 10 + (o.level || 0),
              style: Hs(y, {
                text: g,
                align: y.getShallow('align', !0) || h.textAlign,
                verticalAlign: y.getShallow('verticalAlign', !0) || y.getShallow('baseline', !0) || h.textVerticalAlign,
                fill: T(_) ? _('category' === r.type ? v : 'value' === r.type ? u + '' : u, l) : _,
              }),
            });
          if (((w.anid = 'label_' + u), f)) {
            var b = sL.makeAxisEventDataBase(n);
            (b.targetType = 'axisLabel'),
              (b.value = v),
              (b.tickIndex = l),
              'category' === r.type && (b.dataIndex = u),
              (bS(w).eventData = b);
          }
          e.add(w), w.updateTransform(), p.push(w), t.add(w), w.decomposeTransform();
        }),
        p
      );
    }
  }
  function kv(t, e) {
    var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };
    return Av(n, t, e), n.seriesInvolved && Lv(n, t), n;
  }
  function Av(t, e, n) {
    var i = e.getComponent('tooltip'),
      r = e.getComponent('axisPointer'),
      o = r.get('link', !0) || [],
      a = [];
    v(n.getCoordinateSystems(), function (n) {
      function s(i, s, l) {
        var h = l.model.getModel('axisPointer', r),
          p = h.get('show');
        if (p && ('auto' !== p || i || Nv(h))) {
          null == s && (s = h.get('triggerTooltip')), (h = i ? Pv(l, c, r, e, i, s) : h);
          var d = h.get('snap'),
            f = Fv(l.model),
            g = s || d || 'category' === l.type,
            v = (t.axesInfo[f] = {
              key: f,
              axis: l,
              coordSys: n,
              axisPointerModel: h,
              triggerTooltip: s,
              involveSeries: g,
              snap: d,
              useHandle: Nv(h),
              seriesModels: [],
              linkGroup: null,
            });
          (u[f] = v), (t.seriesInvolved = t.seriesInvolved || g);
          var y = Ov(o, l);
          if (null != y) {
            var m = a[y] || (a[y] = { axesInfo: {} });
            (m.axesInfo[f] = v), (m.mapper = o[y].mapper), (v.linkGroup = m);
          }
        }
      }
      if (n.axisPointerEnabled) {
        var l = Fv(n.model),
          u = (t.coordSysAxesInfo[l] = {});
        t.coordSysMap[l] = n;
        var h = n.model,
          c = h.getModel('tooltip', i);
        if ((v(n.getAxes(), S(s, !1, null)), n.getTooltipAxes && i && c.get('show'))) {
          var p = 'axis' === c.get('trigger'),
            d = 'cross' === c.get(['axisPointer', 'type']),
            f = n.getTooltipAxes(c.get(['axisPointer', 'axis']));
          (p || d) && v(f.baseAxes, S(s, d ? 'cross' : !0, p)), d && v(f.otherAxes, S(s, 'cross', !1));
        }
      }
    });
  }
  function Pv(t, e, n, i, r, o) {
    var a = e.getModel('axisPointer'),
      l = [
        'type',
        'snap',
        'lineStyle',
        'shadowStyle',
        'label',
        'animation',
        'animationDurationUpdate',
        'animationEasingUpdate',
        'z',
      ],
      u = {};
    v(l, function (t) {
      u[t] = s(a.get(t));
    }),
      (u.snap = 'category' !== t.type && !!o),
      'cross' === a.get('type') && (u.type = 'line');
    var h = u.label || (u.label = {});
    if ((null == h.show && (h.show = !1), 'cross' === r)) {
      var p = a.get(['label', 'show']);
      if (((h.show = null != p ? p : !0), !o)) {
        var d = (u.lineStyle = a.get('crossStyle'));
        d && c(h, d.textStyle);
      }
    }
    return t.model.getModel('axisPointer', new cT(u, n, i));
  }
  function Lv(t, e) {
    e.eachSeries(function (e) {
      var n = e.coordinateSystem,
        i = e.get(['tooltip', 'trigger'], !0),
        r = e.get(['tooltip', 'show'], !0);
      n &&
        'none' !== i &&
        i !== !1 &&
        'item' !== i &&
        r !== !1 &&
        e.get(['axisPointer', 'show'], !0) !== !1 &&
        v(t.coordSysAxesInfo[Fv(n.model)], function (t) {
          var i = t.axis;
          n.getAxis(i.dim) === i &&
            (t.seriesModels.push(e),
            null == t.seriesDataCount && (t.seriesDataCount = 0),
            (t.seriesDataCount += e.getData().count()));
        });
    });
  }
  function Ov(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var o = t[r] || {};
      if (Rv(o[i + 'AxisId'], n.id) || Rv(o[i + 'AxisIndex'], n.componentIndex) || Rv(o[i + 'AxisName'], n.name))
        return r;
    }
  }
  function Rv(t, e) {
    return 'all' === t || (M(t) && p(t, e) >= 0) || t === e;
  }
  function Bv(t) {
    var e = zv(t);
    if (e) {
      var n = e.axisPointerModel,
        i = e.axis.scale,
        r = n.option,
        o = n.get('status'),
        a = n.get('value');
      null != a && (a = i.parse(a));
      var s = Nv(n);
      null == o && (r.status = s ? 'show' : 'hide');
      var l = i.getExtent().slice();
      l[0] > l[1] && l.reverse(),
        (null == a || a > l[1]) && (a = l[1]),
        a < l[0] && (a = l[0]),
        (r.value = a),
        s && (r.status = e.axis.scale.isBlank() ? 'hide' : 'show');
    }
  }
  function zv(t) {
    var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
    return e && e.axesInfo[Fv(t)];
  }
  function Ev(t) {
    var e = zv(t);
    return e && e.axisPointerModel;
  }
  function Nv(t) {
    return !!t.get(['handle', 'show']);
  }
  function Fv(t) {
    return t.type + '||' + t.id;
  }
  function Vv(t, e, n, i) {
    var r = n.axis;
    if (!r.scale.isBlank()) {
      var o = n.getModel('splitArea'),
        a = o.getModel('areaStyle'),
        s = a.get('color'),
        l = i.coordinateSystem.getRect(),
        u = r.getTicksCoords({ tickModel: o, clamp: !0 });
      if (u.length) {
        var h = s.length,
          p = cL(t).splitAreaColors,
          d = Y(),
          f = 0;
        if (p)
          for (var g = 0; g < u.length; g++) {
            var v = p.get(u[g].tickValue);
            if (null != v) {
              f = (v + (h - 1) * g) % h;
              break;
            }
          }
        var y = r.toGlobalCoord(u[0].coord),
          m = a.getAreaStyle();
        s = M(s) ? s : [s];
        for (var g = 1; g < u.length; g++) {
          var _ = r.toGlobalCoord(u[g].coord),
            x = void 0,
            w = void 0,
            b = void 0,
            S = void 0;
          r.isHorizontal()
            ? ((x = y), (w = l.y), (b = _ - x), (S = l.height), (y = x + b))
            : ((x = l.x), (w = y), (b = l.width), (S = _ - w), (y = w + S));
          var T = u[g - 1].tickValue;
          null != T && d.set(T, f),
            e.add(
              new fS({
                anid: null != T ? 'area_' + T : null,
                shape: { x: x, y: w, width: b, height: S },
                style: c({ fill: s[f] }, m),
                autoBatch: !0,
                silent: !0,
              }),
            ),
            (f = (f + 1) % h);
        }
        cL(t).splitAreaColors = d;
      }
    }
  }
  function Hv(t) {
    cL(t).splitAreaColors = null;
  }
  function Wv(t) {
    t.registerComponentView(mL),
      t.registerComponentModel(XP),
      t.registerCoordinateSystem('cartesian2d', oL),
      uv(t, 'x', YP, _L),
      uv(t, 'y', YP, _L),
      t.registerComponentView(vL),
      t.registerComponentView(yL),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
      });
  }
  function Gv(t) {
    Yd(Wv), t.registerSeriesModel(FP), t.registerChartView(UP), t.registerLayout(qg('scatter'));
  }
  function Uv(t, e) {
    return (
      (e = e || [0, 0]),
      y(
        ['x', 'y'],
        function (n, i) {
          var r = this.getAxis(n),
            o = e[i],
            a = t[i] / 2;
          return 'category' === r.type ? r.getBandWidth() : Math.abs(r.dataToCoord(o - a) - r.dataToCoord(o + a));
        },
        this,
      )
    );
  }
  function Xv(t) {
    var e = t.master.getRect();
    return {
      coordSys: { type: 'cartesian2d', x: e.x, y: e.y, width: e.width, height: e.height },
      api: {
        coord: function (e) {
          return t.dataToPoint(e);
        },
        size: z_(Uv, t),
      },
    };
  }
  function Yv(t, e) {
    return (
      (e = e || [0, 0]),
      y(
        [0, 1],
        function (n) {
          var i = e[n],
            r = t[n] / 2,
            o = [],
            a = [];
          return (
            (o[n] = i - r),
            (a[n] = i + r),
            (o[1 - n] = a[1 - n] = e[1 - n]),
            Math.abs(this.dataToPoint(o)[n] - this.dataToPoint(a)[n])
          );
        },
        this,
      )
    );
  }
  function Zv(t) {
    var e = t.getBoundingRect();
    return {
      coordSys: { type: 'geo', x: e.x, y: e.y, width: e.width, height: e.height, zoom: t.getZoom() },
      api: {
        coord: function (e) {
          return t.dataToPoint(e);
        },
        size: z_(Yv, t),
      },
    };
  }
  function qv(t, e) {
    var n = this.getAxis(),
      i = e instanceof Array ? e[0] : e,
      r = (t instanceof Array ? t[0] : t) / 2;
    return 'category' === n.type ? n.getBandWidth() : Math.abs(n.dataToCoord(i - r) - n.dataToCoord(i + r));
  }
  function jv(t) {
    var e = t.getRect();
    return {
      coordSys: { type: 'singleAxis', x: e.x, y: e.y, width: e.width, height: e.height },
      api: {
        coord: function (e) {
          return t.dataToPoint(e);
        },
        size: z_(qv, t),
      },
    };
  }
  function Kv(t, e) {
    return (
      (e = e || [0, 0]),
      y(
        ['Radius', 'Angle'],
        function (n, i) {
          var r = 'get' + n + 'Axis',
            o = this[r](),
            a = e[i],
            s = t[i] / 2,
            l = 'category' === o.type ? o.getBandWidth() : Math.abs(o.dataToCoord(a - s) - o.dataToCoord(a + s));
          return 'Angle' === n && (l = (l * Math.PI) / 180), l;
        },
        this,
      )
    );
  }
  function $v(t) {
    var e = t.getRadiusAxis(),
      n = t.getAngleAxis(),
      i = e.getExtent();
    return (
      i[0] > i[1] && i.reverse(),
      {
        coordSys: { type: 'polar', cx: t.cx, cy: t.cy, r: i[1], r0: i[0] },
        api: {
          coord: function (i) {
            var r = e.dataToRadius(i[0]),
              o = n.dataToAngle(i[1]),
              a = t.coordToPoint([r, o]);
            return a.push(r, (o * Math.PI) / 180), a;
          },
          size: z_(Kv, t),
        },
      }
    );
  }
  function Qv(t) {
    var e = t.getRect(),
      n = t.getRangeInfo();
    return {
      coordSys: {
        type: 'calendar',
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
        cellWidth: t.getCellWidth(),
        cellHeight: t.getCellHeight(),
        rangeInfo: { start: n.start, end: n.end, weeks: n.weeks, dayCount: n.allDay },
      },
      api: {
        coord: function (e, n) {
          return t.dataToPoint(e, n);
        },
      },
    };
  }
  function Jv(t, e, n, i) {
    return t && (t.legacy || (t.legacy !== !1 && !n && !i && 'tspan' !== e && ('text' === e || K(t, 'text'))));
  }
  function ty(t, e, n) {
    var i,
      r,
      o,
      a = t;
    if ('text' === e) o = a;
    else {
      (o = {}),
        K(a, 'text') && (o.text = a.text),
        K(a, 'rich') && (o.rich = a.rich),
        K(a, 'textFill') && (o.fill = a.textFill),
        K(a, 'textStroke') && (o.stroke = a.textStroke),
        K(a, 'fontFamily') && (o.fontFamily = a.fontFamily),
        K(a, 'fontSize') && (o.fontSize = a.fontSize),
        K(a, 'fontStyle') && (o.fontStyle = a.fontStyle),
        K(a, 'fontWeight') && (o.fontWeight = a.fontWeight),
        (r = { type: 'text', style: o, silent: !0 }),
        (i = {});
      var s = K(a, 'textPosition');
      n ? (i.position = s ? a.textPosition : 'inside') : s && (i.position = a.textPosition),
        K(a, 'textPosition') && (i.position = a.textPosition),
        K(a, 'textOffset') && (i.offset = a.textOffset),
        K(a, 'textRotation') && (i.rotation = a.textRotation),
        K(a, 'textDistance') && (i.distance = a.textDistance);
    }
    return (
      ey(o, t),
      v(o.rich, function (t) {
        ey(t, t);
      }),
      { textConfig: i, textContent: r }
    );
  }
  function ey(t, e) {
    e &&
      ((e.font = e.textFont || e.font),
      K(e, 'textStrokeWidth') && (t.lineWidth = e.textStrokeWidth),
      K(e, 'textAlign') && (t.align = e.textAlign),
      K(e, 'textVerticalAlign') && (t.verticalAlign = e.textVerticalAlign),
      K(e, 'textLineHeight') && (t.lineHeight = e.textLineHeight),
      K(e, 'textWidth') && (t.width = e.textWidth),
      K(e, 'textHeight') && (t.height = e.textHeight),
      K(e, 'textBackgroundColor') && (t.backgroundColor = e.textBackgroundColor),
      K(e, 'textPadding') && (t.padding = e.textPadding),
      K(e, 'textBorderColor') && (t.borderColor = e.textBorderColor),
      K(e, 'textBorderWidth') && (t.borderWidth = e.textBorderWidth),
      K(e, 'textBorderRadius') && (t.borderRadius = e.textBorderRadius),
      K(e, 'textBoxShadowColor') && (t.shadowColor = e.textBoxShadowColor),
      K(e, 'textBoxShadowBlur') && (t.shadowBlur = e.textBoxShadowBlur),
      K(e, 'textBoxShadowOffsetX') && (t.shadowOffsetX = e.textBoxShadowOffsetX),
      K(e, 'textBoxShadowOffsetY') && (t.shadowOffsetY = e.textBoxShadowOffsetY));
  }
  function ny(t, e, n) {
    var i = t;
    (i.textPosition = i.textPosition || n.position || 'inside'),
      null != n.offset && (i.textOffset = n.offset),
      null != n.rotation && (i.textRotation = n.rotation),
      null != n.distance && (i.textDistance = n.distance);
    var r = i.textPosition.indexOf('inside') >= 0,
      o = t.fill || '#000';
    iy(i, e);
    var a = null == i.textFill;
    return (
      r
        ? a &&
          ((i.textFill = n.insideFill || '#fff'),
          !i.textStroke && n.insideStroke && (i.textStroke = n.insideStroke),
          !i.textStroke && (i.textStroke = o),
          null == i.textStrokeWidth && (i.textStrokeWidth = 2))
        : (a && (i.textFill = t.fill || n.outsideFill || '#000'),
          !i.textStroke && n.outsideStroke && (i.textStroke = n.outsideStroke)),
      (i.text = e.text),
      (i.rich = e.rich),
      v(e.rich, function (t) {
        iy(t, t);
      }),
      i
    );
  }
  function iy(t, e) {
    e &&
      (K(e, 'fill') && (t.textFill = e.fill),
      K(e, 'stroke') && (t.textStroke = e.fill),
      K(e, 'lineWidth') && (t.textStrokeWidth = e.lineWidth),
      K(e, 'font') && (t.font = e.font),
      K(e, 'fontStyle') && (t.fontStyle = e.fontStyle),
      K(e, 'fontWeight') && (t.fontWeight = e.fontWeight),
      K(e, 'fontSize') && (t.fontSize = e.fontSize),
      K(e, 'fontFamily') && (t.fontFamily = e.fontFamily),
      K(e, 'align') && (t.textAlign = e.align),
      K(e, 'verticalAlign') && (t.textVerticalAlign = e.verticalAlign),
      K(e, 'lineHeight') && (t.textLineHeight = e.lineHeight),
      K(e, 'width') && (t.textWidth = e.width),
      K(e, 'height') && (t.textHeight = e.height),
      K(e, 'backgroundColor') && (t.textBackgroundColor = e.backgroundColor),
      K(e, 'padding') && (t.textPadding = e.padding),
      K(e, 'borderColor') && (t.textBorderColor = e.borderColor),
      K(e, 'borderWidth') && (t.textBorderWidth = e.borderWidth),
      K(e, 'borderRadius') && (t.textBorderRadius = e.borderRadius),
      K(e, 'shadowColor') && (t.textBoxShadowColor = e.shadowColor),
      K(e, 'shadowBlur') && (t.textBoxShadowBlur = e.shadowBlur),
      K(e, 'shadowOffsetX') && (t.textBoxShadowOffsetX = e.shadowOffsetX),
      K(e, 'shadowOffsetY') && (t.textBoxShadowOffsetY = e.shadowOffsetY),
      K(e, 'textShadowColor') && (t.textShadowColor = e.textShadowColor),
      K(e, 'textShadowBlur') && (t.textShadowBlur = e.textShadowBlur),
      K(e, 'textShadowOffsetX') && (t.textShadowOffsetX = e.textShadowOffsetX),
      K(e, 'textShadowOffsetY') && (t.textShadowOffsetY = e.textShadowOffsetY));
  }
  function ry(t, e, n, i, r) {
    var o = t + 'Animation',
      a = ns(t, i, r) || {},
      s = IL(e).userDuring;
    return (
      a.duration > 0 && ((a.during = s ? z_(py, { el: e, userDuring: s }) : null), (a.setToFinal = !0), (a.scope = t)),
      h(a, n[o]),
      a
    );
  }
  function oy(t, e, n, i) {
    i = i || {};
    var r = i.dataIndex,
      o = i.isInit,
      a = i.clearStyle,
      s = n.isAnimationEnabled(),
      l = IL(t),
      u = e.style;
    l.userDuring = e.during;
    var c = {},
      p = {};
    if (
      (vy(t, e, p),
      fy('shape', e, p),
      fy('extra', e, p),
      !o && s && (gy(t, e, c), dy('shape', t, e, c), dy('extra', t, e, c), yy(t, e, u, c)),
      (p.style = u),
      uy(t, p, a),
      cy(t, e),
      s)
    )
      if (o) {
        var d = {};
        v(CL, function (t) {
          var n = t ? e[t] : e;
          n && n.enterFrom && (t && (d[t] = d[t] || {}), h(t ? d[t] : d, n.enterFrom));
        });
        var f = ry('enter', t, e, n, r);
        f.duration > 0 && t.animateFrom(d, f);
      } else hy(t, e, r || 0, n, c);
    ay(t, e), u ? t.dirty() : t.markRedraw();
  }
  function ay(t, e) {
    for (var n = IL(t).leaveToProps, i = 0; i < CL.length; i++) {
      var r = CL[i],
        o = r ? e[r] : e;
      o && o.leaveTo && (n || (n = IL(t).leaveToProps = {}), r && (n[r] = n[r] || {}), h(r ? n[r] : n, o.leaveTo));
    }
  }
  function sy(t, e, n, i) {
    if (t) {
      var r = t.parent,
        o = IL(t).leaveToProps;
      if (o) {
        var a = ry('update', t, e, n, 0);
        (a.done = function () {
          r.remove(t), i && i();
        }),
          t.animateTo(o, a);
      } else r.remove(t), i && i();
    }
  }
  function ly(t) {
    return 'all' === t;
  }
  function uy(t, e, n) {
    var i = e.style;
    if (!t.isGroup && i) {
      if (n) {
        t.useStyle({});
        for (var r = t.animators, o = 0; o < r.length; o++) {
          var a = r[o];
          'style' === a.targetName && a.changeTarget(t.style);
        }
      }
      t.setStyle(i);
    }
    e && ((e.style = null), e && t.attr(e), (e.style = i));
  }
  function hy(t, e, n, i, r) {
    if (r) {
      var o = ry('update', t, e, i, n);
      o.duration > 0 && t.animateFrom(r, o);
    }
  }
  function cy(t, e) {
    K(e, 'silent') && (t.silent = e.silent),
      K(e, 'ignore') && (t.ignore = e.ignore),
      t instanceof _b && K(e, 'invisible') && (t.invisible = e.invisible),
      t instanceof oS && K(e, 'autoBatch') && (t.autoBatch = e.autoBatch);
  }
  function py() {
    var t = this,
      e = t.el;
    if (e) {
      var n = IL(e).userDuring,
        i = t.userDuring;
      if (n !== i) return void (t.el = t.userDuring = null);
      (DL.el = e), i(kL);
    }
  }
  function dy(t, e, n, i) {
    var r = n[t];
    if (r) {
      var o,
        a = e[t];
      if (a) {
        var s = n.transition,
          l = r.transition;
        if (l)
          if ((!o && (o = i[t] = {}), ly(l))) h(o, a);
          else
            for (var u = ur(l), c = 0; c < u.length; c++) {
              var d = u[c],
                f = a[d];
              o[d] = f;
            }
        else if (ly(s) || p(s, t) >= 0) {
          !o && (o = i[t] = {});
          for (var g = w(a), c = 0; c < g.length; c++) {
            var d = g[c],
              f = a[d];
            my(r[d], f) && (o[d] = f);
          }
        }
      }
    }
  }
  function fy(t, e, n) {
    var i = e[t];
    if (i)
      for (var r = (n[t] = {}), o = w(i), a = 0; a < o.length; a++) {
        var s = o[a];
        r[s] = Un(i[s]);
      }
  }
  function gy(t, e, n) {
    for (var i = e.transition, r = ly(i) ? bw : ur(i || []), o = 0; o < r.length; o++) {
      var a = r[o];
      if ('style' !== a && 'shape' !== a && 'extra' !== a) {
        var s = t[a];
        n[a] = s;
      }
    }
  }
  function vy(t, e, n) {
    for (var i = 0; i < TL.length; i++) {
      var r = TL[i],
        o = ML[r],
        a = e[r];
      a && ((n[o[0]] = a[0]), (n[o[1]] = a[1]));
    }
    for (var i = 0; i < bw.length; i++) {
      var s = bw[i];
      null != e[s] && (n[s] = e[s]);
    }
  }
  function yy(t, e, n, i) {
    if (n) {
      var r,
        o = t.style;
      if (o) {
        var a = n.transition,
          s = e.transition;
        if (a && !ly(a)) {
          var l = ur(a);
          !r && (r = i.style = {});
          for (var u = 0; u < l.length; u++) {
            var h = l[u],
              c = o[h];
            r[h] = c;
          }
        } else if (t.getAnimationStyleProps && (ly(s) || ly(a) || p(s, 'style') >= 0)) {
          var d = t.getAnimationStyleProps(),
            f = d ? d.style : null;
          if (f) {
            !r && (r = i.style = {});
            for (var g = w(n), u = 0; u < g.length; u++) {
              var h = g[u];
              if (f[h]) {
                var c = o[h];
                r[h] = c;
              }
            }
          }
        }
      }
    }
  }
  function my(t, e) {
    return g(t) ? t !== e : null != t && isFinite(t);
  }
  function _y(t) {
    t.stopAnimation('keyframe'), t.attr(AL(t));
  }
  function xy(t, e, n) {
    if (n.isAnimationEnabled() && e) {
      if (M(e))
        return void v(e, function (e) {
          xy(t, e, n);
        });
      var i = e.keyframes,
        r = e.duration;
      if (n && null == r) {
        var o = ns('enter', n, 0);
        r = o && o.duration;
      }
      if (i && r) {
        var a = AL(t);
        v(CL, function (n) {
          if (!n || t[n]) {
            var o;
            i.sort(function (t, e) {
              return t.percent - e.percent;
            }),
              v(i, function (i) {
                var s = t.animators,
                  l = n ? i[n] : i;
                if (l) {
                  var u = w(l);
                  if (
                    (n ||
                      (u = _(u, function (t) {
                        return p(PL, t) < 0;
                      })),
                    u.length)
                  ) {
                    o || ((o = t.animate(n, e.loop, !0)), (o.scope = 'keyframe'));
                    for (var h = 0; h < s.length; h++)
                      s[h] !== o && s[h].targetName === o.targetName && s[h].stopTracks(u);
                    n && (a[n] = a[n] || {});
                    var c = n ? a[n] : a;
                    v(u, function (e) {
                      c[e] = ((n ? t[n] : t) || {})[e];
                    }),
                      o.whenWithKeys(r * i.percent, l, u, i.easing);
                  }
                }
              }),
              o &&
                o
                  .delay(e.delay || 0)
                  .duration(r)
                  .start(e.easing);
          }
        });
      }
    }
  }
  function wy(t) {
    return t instanceof oS;
  }
  function by(t) {
    return t instanceof _b;
  }
  function Sy(t, e) {
    e.copyTransform(t),
      by(e) &&
        by(t) &&
        (e.setStyle(t.style),
        (e.z = t.z),
        (e.z2 = t.z2),
        (e.zlevel = t.zlevel),
        (e.invisible = t.invisible),
        (e.ignore = t.ignore),
        wy(e) && wy(t) && e.setShape(t.shape));
  }
  function My(t) {
    var e,
      n = t.type;
    if ('path' === n) {
      var i = t.shape,
        r = null != i.width && null != i.height ? { x: i.x || 0, y: i.y || 0, width: i.width, height: i.height } : null,
        o = Uy(i);
      (e = gs(o, null, r, i.layout || 'center')), (bL(e).customPathData = o);
    } else if ('image' === n) (e = new hS({})), (bL(e).customImagePath = t.style.image);
    else if ('text' === n) e = new mS({});
    else if ('group' === n) e = new Vw();
    else {
      if ('compoundPath' === n) throw new Error('"compoundPath" is not supported yet.');
      var a = fs(n);
      if (!a) {
        var s = '';
        sr(s);
      }
      e = new a();
    }
    return (bL(e).customGraphicType = n), (e.name = t.name), (e.z2EmphasisLift = 1), (e.z2SelectLift = 1), e;
  }
  function Ty(t, e, n, i, r, o, a) {
    _y(e);
    var s = r && r.normal.cfg;
    s && e.setTextConfig(s), i && null == i.transition && (i.transition = FL);
    var l = i && i.style;
    if (l) {
      if ('text' === e.type) {
        var u = l;
        K(u, 'textFill') && (u.fill = u.textFill), K(u, 'textStroke') && (u.stroke = u.textStroke);
      }
      var h = void 0,
        c = wy(e) ? l.decal : null;
      t && c && ((c.dirty = !0), (h = Gc(c, t))), (l.__decalPattern = h);
    }
    if (by(e) && l) {
      var h = l.__decalPattern;
      h && (l.decal = h);
    }
    oy(e, i, o, { dataIndex: n, isInit: a, clearStyle: !0 }), xy(e, i.keyframeAnimation, o);
  }
  function Cy(t, e, n, i, r) {
    var o = e.isGroup ? null : e,
      a = r && r[t].cfg;
    if (o) {
      var s = o.ensureState(t);
      if (i === !1) {
        var l = o.getState(t);
        l && (l.style = null);
      } else s.style = i || null;
      a && (s.textConfig = a), sa(o);
    }
  }
  function Iy(t, e, n) {
    if (!t.isGroup) {
      var i = t,
        r = n.currentZ,
        o = n.currentZLevel;
      (i.z = r), (i.zlevel = o);
      var a = e.z2;
      null != a && (i.z2 = a || 0);
      for (var s = 0; s < zL.length; s++) Dy(i, e, zL[s]);
    }
  }
  function Dy(t, e, n) {
    var i,
      r = n === OL,
      o = r ? e : Ey(e, n),
      a = o ? o.z2 : null;
    null != a && ((i = r ? t : t.ensureState(n)), (i.z2 = a || 0));
  }
  function ky(t, e, n, i) {
    function r(t) {
      return t === w ? b || (b = e.getItemModel(t)) : e.getItemModel(t);
    }
    function o(t, n) {
      return e.hasItemOption ? (t === w ? T[n] || (T[n] = r(t).getModel(EL[n])) : r(t).getModel(EL[n])) : D[n];
    }
    function a(t, n) {
      return e.hasItemOption ? (t === w ? I[n] || (I[n] = r(t).getModel(NL[n])) : r(t).getModel(NL[n])) : k[n];
    }
    function s(t, n) {
      return null == n && (n = w), e.getStore().get(e.getDimensionIndex(t || 0), n);
    }
    function l(t, n) {
      null == n && (n = w), (t = t || 0);
      var i = e.getDimensionInfo(t);
      if (!i) {
        var r = e.getDimensionIndex(t);
        return r >= 0 ? e.getStore().get(r, n) : void 0;
      }
      var o = e.get(i.name, n),
        a = i && i.ordinalMeta;
      return a ? a.categories[o] : o;
    }
    function u(n, i) {
      null == i && (i = w);
      var r = e.getItemVisual(i, 'style'),
        s = r && r.fill,
        l = r && r.opacity,
        u = o(i, OL).getItemStyle();
      null != s && (u.fill = s), null != l && (u.opacity = l);
      var h = { inheritColor: C(s) ? s : '#000' },
        c = a(i, OL),
        f = Hs(c, null, h, !1, !0);
      f.text = c.getShallow('show') ? N(t.getFormattedLabel(i, OL), eg(e, i)) : null;
      var g = Ws(c, h, !1);
      return d(n, u), (u = ny(u, f, g)), n && p(u, n), (u.legacy = !0), u;
    }
    function h(n, i) {
      null == i && (i = w);
      var r = o(i, LL).getItemStyle(),
        s = a(i, LL),
        l = Hs(s, null, null, !0, !0);
      l.text = s.getShallow('show') ? F(t.getFormattedLabel(i, LL), t.getFormattedLabel(i, OL), eg(e, i)) : null;
      var u = Ws(s, null, !0);
      return d(n, r), (r = ny(r, l, u)), n && p(r, n), (r.legacy = !0), r;
    }
    function p(t, e) {
      for (var n in e) K(e, n) && (t[n] = e[n]);
    }
    function d(t, e) {
      t && (t.textFill && (e.textFill = t.textFill), t.textPosition && (e.textPosition = t.textPosition));
    }
    function f(t, n) {
      if ((null == n && (n = w), K(xL, t))) {
        var i = e.getItemVisual(n, 'style');
        return i ? i[xL[t]] : null;
      }
      return K(wL, t) ? e.getItemVisual(n, t) : void 0;
    }
    function g(t) {
      if ('cartesian2d' === _.type) {
        var e = _.getBaseAxis();
        return ld(c({ axis: e }, t));
      }
    }
    function v() {
      return n.getCurrentSeriesIndices();
    }
    function y(t) {
      return Ys(t, n);
    }
    var m = t.get('renderItem'),
      _ = t.coordinateSystem,
      x = {};
    _ && (x = _.prepareCustoms ? _.prepareCustoms(_) : WL[_.type](_));
    for (
      var w,
        b,
        S = c(
          {
            getWidth: i.getWidth,
            getHeight: i.getHeight,
            getZr: i.getZr,
            getDevicePixelRatio: i.getDevicePixelRatio,
            value: s,
            style: u,
            ordinalRawValue: l,
            styleEmphasis: h,
            visual: f,
            barLayout: g,
            currentSeriesIndices: v,
            font: y,
          },
          x.api || {},
        ),
        M = {
          context: {},
          seriesId: t.id,
          seriesName: t.name,
          seriesIndex: t.seriesIndex,
          coordSys: x.coordSys,
          dataInsideLength: e.count(),
          encode: Ay(t.getData()),
        },
        T = {},
        I = {},
        D = {},
        k = {},
        A = 0;
      A < zL.length;
      A++
    ) {
      var P = zL[A];
      (D[P] = t.getModel(EL[P])), (k[P] = t.getModel(NL[P]));
    }
    return function (t, n) {
      return (
        (w = t),
        (b = null),
        (T = {}),
        (I = {}),
        m && m(c({ dataIndexInside: t, dataIndex: e.getRawIndex(t), actionType: n ? n.type : null }, M), S)
      );
    };
  }
  function Ay(t) {
    var e = {};
    return (
      v(t.dimensions, function (n) {
        var i = t.getDimensionInfo(n);
        if (!i.isExtraCoord) {
          var r = i.coordDim,
            o = (e[r] = e[r] || []);
          o[i.coordDimIndex] = t.getDimensionIndex(n);
        }
      }),
      e
    );
  }
  function Py(t, e, n, i, r, o, a) {
    if (!i) return void o.remove(e);
    var s = Ly(t, e, n, i, r, o);
    return s && a.setItemGraphicEl(n, s), s && ka(s, i.focus, i.blurScope, i.emphasisDisabled), s;
  }
  function Ly(t, e, n, i, r, o) {
    var a = -1,
      s = e;
    e && Oy(e, i, r) && ((a = p(o.childrenRef(), e)), (e = null));
    var l = !e,
      u = e;
    u ? u.clearStates() : ((u = My(i)), s && Sy(s, u)),
      i.morph === !1 ? (u.disableMorphing = !0) : u.disableMorphing && (u.disableMorphing = !1),
      (HL.normal.cfg =
        HL.normal.conOpt =
        HL.emphasis.cfg =
        HL.emphasis.conOpt =
        HL.blur.cfg =
        HL.blur.conOpt =
        HL.select.cfg =
        HL.select.conOpt =
          null),
      (HL.isLegacy = !1),
      By(u, n, i, r, l, HL),
      Ry(u, n, i, r, l),
      Ty(t, u, n, i, HL, r, l),
      K(i, 'info') && (bL(u).info = i.info);
    for (var h = 0; h < zL.length; h++) {
      var c = zL[h];
      if (c !== OL) {
        var d = Ey(i, c),
          f = Ny(i, d, c);
        Cy(c, u, d, f, HL);
      }
    }
    return Iy(u, i, r), 'group' === i.type && Fy(t, u, n, i, r), a >= 0 ? o.replaceAt(u, a) : o.add(u), u;
  }
  function Oy(t, e, n) {
    var i = bL(t),
      r = e.type,
      o = e.shape,
      a = e.style;
    return (
      n.isUniversalTransitionEnabled() ||
      (null != r && r !== i.customGraphicType) ||
      ('path' === r && Xy(o) && Uy(o) !== i.customPathData) ||
      ('image' === r && K(a, 'image') && a.image !== i.customImagePath)
    );
  }
  function Ry(t, e, n, i, r) {
    var o = n.clipPath;
    if (o === !1) t && t.getClipPath() && t.removeClipPath();
    else if (o) {
      var a = t.getClipPath();
      a && Oy(a, o, i) && (a = null), a || ((a = My(o)), t.setClipPath(a)), Ty(null, a, e, o, null, i, r);
    }
  }
  function By(t, e, n, i, r, o) {
    if (!t.isGroup) {
      zy(n, null, o), zy(n, LL, o);
      var a = o.normal.conOpt,
        s = o.emphasis.conOpt,
        l = o.blur.conOpt,
        u = o.select.conOpt;
      if (null != a || null != s || null != u || null != l) {
        var h = t.getTextContent();
        if (a === !1) h && t.removeTextContent();
        else {
          (a = o.normal.conOpt = a || { type: 'text' }),
            h ? h.clearStates() : ((h = My(a)), t.setTextContent(h)),
            Ty(null, h, e, a, null, i, r);
          for (var c = a && a.style, p = 0; p < zL.length; p++) {
            var d = zL[p];
            if (d !== OL) {
              var f = o[d].conOpt;
              Cy(d, h, f, Ny(a, f, d), null);
            }
          }
          c ? h.dirty() : h.markRedraw();
        }
      }
    }
  }
  function zy(t, e, n) {
    var i = e ? Ey(t, e) : t,
      r = e ? Ny(t, i, LL) : t.style,
      o = t.type,
      a = i ? i.textConfig : null,
      s = t.textContent,
      l = s ? (e ? Ey(s, e) : s) : null;
    if (r && (n.isLegacy || Jv(r, o, !!a, !!l))) {
      n.isLegacy = !0;
      var u = ty(r, o, !e);
      !a && u.textConfig && (a = u.textConfig), !l && u.textContent && (l = u.textContent);
    }
    if (!e && l) {
      var h = l;
      !h.type && (h.type = 'text');
    }
    var c = e ? n[e] : n.normal;
    (c.cfg = a), (c.conOpt = l);
  }
  function Ey(t, e) {
    return e ? (t ? t[e] : null) : t;
  }
  function Ny(t, e, n) {
    var i = e && e.style;
    return null == i && n === LL && t && (i = t.styleEmphasis), i;
  }
  function Fy(t, e, n, i, r) {
    var o = i.children,
      a = o ? o.length : 0,
      s = i.$mergeChildren,
      l = 'byName' === s || i.diffChildrenByName,
      u = s === !1;
    if (a || l || u) {
      if (l)
        return void Vy({
          api: t,
          oldChildren: e.children() || [],
          newChildren: o || [],
          dataIndex: n,
          seriesModel: r,
          group: e,
        });
      u && e.removeAll();
      for (var h = 0; a > h; h++) o[h] && Ly(t, e.childAt(h), n, o[h], r, e);
      for (var c = e.childCount() - 1; c >= h; c--) {
        var p = e.childAt(c);
        sy(p, bL(e).option, r);
      }
    }
  }
  function Vy(t) {
    new Ik(t.oldChildren, t.newChildren, Hy, Hy, t).add(Wy).update(Wy).remove(Gy).execute();
  }
  function Hy(t, e) {
    var n = t && t.name;
    return null != n ? n : VL + e;
  }
  function Wy(t, e) {
    var n = this.context,
      i = null != t ? n.newChildren[t] : null,
      r = null != e ? n.oldChildren[e] : null;
    Ly(n.api, r, n.dataIndex, i, n.seriesModel, n.group);
  }
  function Gy(t) {
    var e = this.context,
      n = e.oldChildren[t];
    sy(n, bL(n).option, e.seriesModel);
  }
  function Uy(t) {
    return t && (t.pathData || t.d);
  }
  function Xy(t) {
    return t && (K(t, 'pathData') || K(t, 'd'));
  }
  function Yy(t) {
    t.registerChartView(GL), t.registerSeriesModel(SL);
  }
  function Zy(t) {
    t.registerComponentModel(UL), t.registerComponentView(XL);
  }
  function qy(t, e) {
    var n = PT(e.get('padding')),
      i = e.getItemStyle(['color', 'opacity']);
    return (
      (i.fill = e.get('backgroundColor')),
      (t = new fS({
        shape: {
          x: t.x - n[3],
          y: t.y - n[0],
          width: t.width + n[1] + n[3],
          height: t.height + n[0] + n[2],
          r: e.get('borderRadius'),
        },
        style: i,
        silent: !0,
        z2: -1,
      }))
    );
  }
  function jy(t, e, n, i, r, o, a) {
    function s(t, e) {
      'auto' === t.lineWidth && (t.lineWidth = e.lineWidth > 0 ? 2 : 0),
        jL(t, function (n, i) {
          'inherit' === t[i] && (t[i] = e[i]);
        });
    }
    var l = e.getModel('itemStyle'),
      u = l.getItemStyle(),
      h = 0 === t.lastIndexOf('empty', 0) ? 'fill' : 'stroke',
      c = l.getShallow('decal');
    (u.decal = c && 'inherit' !== c ? Gc(c, a) : i.decal),
      'inherit' === u.fill && (u.fill = i[r]),
      'inherit' === u.stroke && (u.stroke = i[h]),
      'inherit' === u.opacity && (u.opacity = ('fill' === r ? i : n).opacity),
      s(u, i);
    var p = e.getModel('lineStyle'),
      d = p.getLineStyle();
    if (
      (s(d, n),
      'auto' === u.fill && (u.fill = i.fill),
      'auto' === u.stroke && (u.stroke = i.fill),
      'auto' === d.stroke && (d.stroke = i.fill),
      !o)
    ) {
      var f = e.get('inactiveBorderWidth'),
        g = u[h];
      (u.lineWidth = 'auto' === f ? (i.lineWidth > 0 && g ? 2 : 0) : u.lineWidth),
        (u.fill = e.get('inactiveColor')),
        (u.stroke = e.get('inactiveBorderColor')),
        (d.stroke = p.get('inactiveColor')),
        (d.lineWidth = p.get('inactiveWidth'));
    }
    return { itemStyle: u, lineStyle: d };
  }
  function Ky(t) {
    var e = t.icon || 'roundRect',
      n = hc(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
    return (
      n.setStyle(t.itemStyle),
      (n.rotation = ((t.iconRotate || 0) * Math.PI) / 180),
      n.setOrigin([t.itemWidth / 2, t.itemHeight / 2]),
      e.indexOf('empty') > -1 && ((n.style.stroke = n.style.fill), (n.style.fill = '#fff'), (n.style.lineWidth = 2)),
      n
    );
  }
  function $y(t, e, n, i) {
    tm(t, e, n, i), n.dispatchAction({ type: 'legendToggleSelect', name: null != t ? t : e }), Jy(t, e, n, i);
  }
  function Qy(t) {
    for (var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length; r > i && !(e = n[i].states.emphasis); )
      i++;
    return e && e.hoverLayer;
  }
  function Jy(t, e, n, i) {
    Qy(n) || n.dispatchAction({ type: 'highlight', seriesName: t, name: e, excludeSeriesId: i });
  }
  function tm(t, e, n, i) {
    Qy(n) || n.dispatchAction({ type: 'downplay', seriesName: t, name: e, excludeSeriesId: i });
  }
  function em(t) {
    var e = t.findComponents({ mainType: 'legend' });
    e &&
      e.length &&
      t.filterSeries(function (t) {
        for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
        return !0;
      });
  }
  function nm(t, e, n) {
    var i,
      r = {},
      o = 'toggleSelected' === t;
    return (
      n.eachComponent('legend', function (n) {
        o && null != i
          ? n[i ? 'select' : 'unSelect'](e.name)
          : 'allSelect' === t || 'inverseSelect' === t
          ? n[t]()
          : (n[t](e.name), (i = n.isSelected(e.name)));
        var a = n.getData();
        v(a, function (t) {
          var e = t.get('name');
          if ('\n' !== e && '' !== e) {
            var i = n.isSelected(e);
            r[e] = r.hasOwnProperty(e) ? r[e] && i : i;
          }
        });
      }),
      'allSelect' === t || 'inverseSelect' === t ? { selected: r } : { name: e.name, selected: r }
    );
  }
  function im(t) {
    t.registerAction('legendToggleSelect', 'legendselectchanged', S(nm, 'toggleSelected')),
      t.registerAction('legendAllSelect', 'legendselectall', S(nm, 'allSelect')),
      t.registerAction('legendInverseSelect', 'legendinverseselect', S(nm, 'inverseSelect')),
      t.registerAction('legendSelect', 'legendselected', S(nm, 'select')),
      t.registerAction('legendUnSelect', 'legendunselected', S(nm, 'unSelect'));
  }
  function rm(t) {
    t.registerComponentModel(ZL),
      t.registerComponentView($L),
      t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, em),
      t.registerSubTypeDefaulter('legend', function () {
        return 'plain';
      }),
      im(t);
  }
  function om(t, e, n) {
    var i = t.getOrient(),
      r = [1, 1];
    (r[i.index] = 0), Fl(e, n, { type: 'box', ignoreSize: !!r });
  }
  function am(t) {
    t.registerAction('legendScroll', 'legendscroll', function (t, e) {
      var n = t.scrollDataIndex;
      null != n &&
        e.eachComponent({ mainType: 'legend', subType: 'scroll', query: t }, function (t) {
          t.setScrollDataIndex(n);
        });
    });
  }
  function sm(t) {
    Yd(rm), t.registerComponentModel(QL), t.registerComponentView(nO), am(t);
  }
  function lm(t, e, n, i) {
    um(iO(n).lastProp, i) || ((iO(n).lastProp = i), e ? rs(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }
  function um(t, e) {
    if (k(t) && k(e)) {
      var n = !0;
      return (
        v(e, function (e, i) {
          n = n && um(t[i], e);
        }),
        !!n
      );
    }
    return t === e;
  }
  function hm(t, e) {
    t[e.get(['label', 'show']) ? 'show' : 'hide']();
  }
  function cm(t) {
    return { x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0 };
  }
  function pm(t, e, n) {
    var i = e.get('z'),
      r = e.get('zlevel');
    t &&
      t.traverse(function (t) {
        'group' !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n));
      });
  }
  function dm(t) {
    var e,
      n = t.get('type'),
      i = t.getModel(n + 'Style');
    return (
      'line' === n
        ? ((e = i.getLineStyle()), (e.fill = null))
        : 'shadow' === n && ((e = i.getAreaStyle()), (e.stroke = null)),
      e
    );
  }
  function fm(t, e, n, i, r) {
    var o = n.get('value'),
      a = vm(o, e.axis, e.ecModel, n.get('seriesDataIndices'), {
        precision: n.get(['label', 'precision']),
        formatter: n.get(['label', 'formatter']),
      }),
      s = n.getModel('label'),
      l = PT(s.get('padding') || 0),
      u = s.getFont(),
      h = mi(a, u),
      c = r.position,
      p = h.width + l[1] + l[3],
      d = h.height + l[0] + l[2],
      f = r.align;
    'right' === f && (c[0] -= p), 'center' === f && (c[0] -= p / 2);
    var g = r.verticalAlign;
    'bottom' === g && (c[1] -= d), 'middle' === g && (c[1] -= d / 2), gm(c, p, d, i);
    var v = s.get('backgroundColor');
    (v && 'auto' !== v) || (v = e.get(['axisLine', 'lineStyle', 'color'])),
      (t.label = {
        x: c[0],
        y: c[1],
        style: Hs(s, { text: a, font: u, fill: s.getTextColor(), padding: l, backgroundColor: v }),
        z2: 10,
      });
  }
  function gm(t, e, n, i) {
    var r = i.getWidth(),
      o = i.getHeight();
    (t[0] = Math.min(t[0] + e, r) - e),
      (t[1] = Math.min(t[1] + n, o) - n),
      (t[0] = Math.max(t[0], 0)),
      (t[1] = Math.max(t[1], 0));
  }
  function vm(t, e, n, i, r) {
    t = e.scale.parse(t);
    var o = e.scale.getLabel({ value: t }, { precision: r.precision }),
      a = r.formatter;
    if (a) {
      var s = { value: zd(e, { value: t }), axisDimension: e.dim, axisIndex: e.index, seriesData: [] };
      v(i, function (t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
          i = t.dataIndexInside,
          r = e && e.getDataParams(i);
        r && s.seriesData.push(r);
      }),
        C(a) ? (o = a.replace('{value}', o)) : T(a) && (o = a(s));
    }
    return o;
  }
  function ym(t, e, n) {
    var i = oi();
    return (
      hi(i, i, n.rotation),
      ui(i, i, n.position),
      bs([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    );
  }
  function mm(t, e, n, i, r, o) {
    var a = sL.innerTextLayout(n.rotation, 0, n.labelDirection);
    (n.labelMargin = r.get(['label', 'margin'])),
      fm(e, i, r, o, { position: ym(i.axis, t, n), align: a.textAlign, verticalAlign: a.textVerticalAlign });
  }
  function _m(t, e, n) {
    return (n = n || 0), { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };
  }
  function xm(t, e, n) {
    return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
  }
  function wm(t, e) {
    var n = {};
    return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n);
  }
  function bm(t) {
    return 'x' === t.dim ? 0 : 1;
  }
  function Sm(t, e, n) {
    if (!f_.node) {
      var i = e.getZr();
      hO(i).records || (hO(i).records = {}), Mm(i, e);
      var r = hO(i).records[t] || (hO(i).records[t] = {});
      r.handler = n;
    }
  }
  function Mm(t, e) {
    function n(n, i) {
      t.on(n, function (n) {
        var r = Dm(e);
        cO(hO(t).records, function (t) {
          t && i(t, n, r.dispatchAction);
        }),
          Tm(r.pendings, e);
      });
    }
    hO(t).initialized ||
      ((hO(t).initialized = !0), n('click', S(Im, 'click')), n('mousemove', S(Im, 'mousemove')), n('globalout', Cm));
  }
  function Tm(t, e) {
    var n,
      i = t.showTip.length,
      r = t.hideTip.length;
    i ? (n = t.showTip[i - 1]) : r && (n = t.hideTip[r - 1]), n && ((n.dispatchAction = null), e.dispatchAction(n));
  }
  function Cm(t, e, n) {
    t.handler('leave', null, n);
  }
  function Im(t, e, n, i) {
    e.handler(t, n, i);
  }
  function Dm(t) {
    var e = { showTip: [], hideTip: [] },
      n = function (i) {
        var r = e[i.type];
        r ? r.push(i) : ((i.dispatchAction = n), t.dispatchAction(i));
      };
    return { dispatchAction: n, pendings: e };
  }
  function km(t, e) {
    if (!f_.node) {
      var n = e.getZr(),
        i = (hO(n).records || {})[t];
      i && (hO(n).records[t] = null);
    }
  }
  function Am(t, e) {
    var n,
      i = [],
      r = t.seriesIndex;
    if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };
    var o = n.getData(),
      a = Ir(o, t);
    if (null == a || 0 > a || M(a)) return { point: [] };
    var s = o.getItemGraphicEl(a),
      l = n.coordinateSystem;
    if (n.getTooltipPosition) i = n.getTooltipPosition(a) || [];
    else if (l && l.dataToPoint)
      if (t.isStacked) {
        var u = l.getBaseAxis(),
          h = l.getOtherAxis(u),
          c = h.dim,
          p = u.dim,
          d = 'x' === c || 'radius' === c ? 1 : 0,
          f = o.mapDimension(p),
          g = [];
        (g[d] = o.get(f, a)),
          (g[1 - d] = o.get(o.getCalculationInfo('stackResultDimension'), a)),
          (i = l.dataToPoint(g) || []);
      } else
        i =
          l.dataToPoint(
            o.getValues(
              y(l.dimensions, function (t) {
                return o.mapDimension(t);
              }),
              a,
            ),
          ) || [];
    else if (s) {
      var v = s.getBoundingRect().clone();
      v.applyTransform(s.transform), (i = [v.x + v.width / 2, v.y + v.height / 2]);
    }
    return { point: i, el: s };
  }
  function Pm(t, e, n) {
    var i = t.currTrigger,
      r = [t.x, t.y],
      o = t,
      a = t.dispatchAction || z_(n.dispatchAction, n),
      s = e.getComponent('axisPointer').coordSysAxesInfo;
    if (s) {
      Hm(r) && (r = Am({ seriesIndex: o.seriesIndex, dataIndex: o.dataIndex }, e).point);
      var l = Hm(r),
        u = o.axesInfo,
        h = s.axesInfo,
        c = 'leave' === i || Hm(r),
        p = {},
        d = {},
        f = { list: [], map: {} },
        g = { showPointer: S(Rm, d), showTooltip: S(Bm, f) };
      v(s.coordSysMap, function (t, e) {
        var n = l || t.containPoint(r);
        v(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
            i = Fm(u, t);
          if (!c && n && (!u || i)) {
            var o = i && i.value;
            null != o || l || (o = e.pointToData(r)), null != o && Lm(t, o, g, !1, p);
          }
        });
      });
      var y = {};
      return (
        v(h, function (t, e) {
          var n = t.linkGroup;
          n &&
            !d[e] &&
            v(n.axesInfo, function (e, i) {
              var r = d[i];
              if (e !== t && r) {
                var o = r.value;
                n.mapper && (o = t.axis.scale.parse(n.mapper(o, Vm(e), Vm(t)))), (y[t.key] = o);
              }
            });
        }),
        v(y, function (t, e) {
          Lm(h[e], t, g, !0, p);
        }),
        zm(d, h, p),
        Em(f, r, t, a),
        Nm(h, a, n),
        p
      );
    }
  }
  function Lm(t, e, n, i, r) {
    var o = t.axis;
    if (!o.scale.isBlank() && o.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);
      var a = Om(e, t),
        s = a.payloadBatch,
        l = a.snapToValue;
      s[0] && null == r.seriesIndex && h(r, s[0]),
        !i && t.snap && o.containData(l) && null != l && (e = l),
        n.showPointer(t, e, s),
        n.showTooltip(t, a, l);
    }
  }
  function Om(t, e) {
    var n = e.axis,
      i = n.dim,
      r = t,
      o = [],
      a = Number.MAX_VALUE,
      s = -1;
    return (
      v(e.seriesModels, function (e) {
        var l,
          u,
          h = e.getData().mapDimensionsAll(i);
        if (e.getAxisTooltipData) {
          var c = e.getAxisTooltipData(h, t, n);
          (u = c.dataIndices), (l = c.nestestValue);
        } else {
          if (((u = e.getData().indicesOfNearest(h[0], t, 'category' === n.type ? 0.5 : null)), !u.length)) return;
          l = e.getData().get(h[0], u[0]);
        }
        if (null != l && isFinite(l)) {
          var p = t - l,
            d = Math.abs(p);
          a >= d &&
            ((a > d || (p >= 0 && 0 > s)) && ((a = d), (s = p), (r = l), (o.length = 0)),
            v(u, function (t) {
              o.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });
            }));
        }
      }),
      { payloadBatch: o, snapToValue: r }
    );
  }
  function Rm(t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i };
  }
  function Bm(t, e, n, i) {
    var r = n.payloadBatch,
      o = e.axis,
      a = o.model,
      s = e.axisPointerModel;
    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
        u = Fv(l),
        h = t.map[u];
      h ||
        ((h = t.map[u] =
          {
            coordSysId: l.id,
            coordSysIndex: l.componentIndex,
            coordSysType: l.type,
            coordSysMainType: l.mainType,
            dataByAxis: [],
          }),
        t.list.push(h)),
        h.dataByAxis.push({
          axisDim: o.dim,
          axisIndex: a.componentIndex,
          axisType: a.type,
          axisId: a.id,
          value: i,
          valueLabelOpt: { precision: s.get(['label', 'precision']), formatter: s.get(['label', 'formatter']) },
          seriesDataIndices: r.slice(),
        });
    }
  }
  function zm(t, e, n) {
    var i = (n.axesInfo = []);
    v(e, function (e, n) {
      var r = e.axisPointerModel.option,
        o = t[n];
      o
        ? (!e.useHandle && (r.status = 'show'),
          (r.value = o.value),
          (r.seriesDataIndices = (o.payloadBatch || []).slice()))
        : !e.useHandle && (r.status = 'hide'),
        'show' === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });
    });
  }
  function Em(t, e, n, i) {
    if (Hm(e) || !t.list.length) return void i({ type: 'hideTip' });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
      type: 'showTip',
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: n.tooltipOption,
      position: n.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list,
    });
  }
  function Nm(t, e, n) {
    var i = n.getZr(),
      r = 'axisPointerLastHighlights',
      o = dO(i)[r] || {},
      a = (dO(i)[r] = {});
    v(t, function (t) {
      var e = t.axisPointerModel.option;
      'show' === e.status &&
        v(e.seriesDataIndices, function (t) {
          var e = t.seriesIndex + ' | ' + t.dataIndex;
          a[e] = t;
        });
    });
    var s = [],
      l = [];
    v(o, function (t, e) {
      !a[e] && l.push(t);
    }),
      v(a, function (t, e) {
        !o[e] && s.push(t);
      }),
      l.length && n.dispatchAction({ type: 'downplay', escapeConnect: !0, notBlur: !0, batch: l }),
      s.length && n.dispatchAction({ type: 'highlight', escapeConnect: !0, notBlur: !0, batch: s });
  }
  function Fm(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];
      if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
    }
  }
  function Vm(t) {
    var e = t.axis.model,
      n = {},
      i = (n.axisDim = t.axis.dim);
    return (
      (n.axisIndex = n[i + 'AxisIndex'] = e.componentIndex),
      (n.axisName = n[i + 'AxisName'] = e.name),
      (n.axisId = n[i + 'AxisId'] = e.id),
      n
    );
  }
  function Hm(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }
  function Wm(t) {
    hL.registerAxisPointerClass('CartesianAxisPointer', sO),
      t.registerComponentModel(uO),
      t.registerComponentView(pO),
      t.registerPreprocessor(function (t) {
        if (t) {
          (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
          var e = t.axisPointer.link;
          e && !M(e) && (t.axisPointer.link = [e]);
        }
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent('axisPointer').coordSysAxesInfo = kv(t, e);
      }),
      t.registerAction({ type: 'updateAxisPointer', event: 'updateAxisPointer', update: ':updateAxisPointer' }, Pm);
  }
  function Gm(t) {
    var e = t.get('confine');
    return null != e ? !!e : 'richText' === t.get('renderMode');
  }
  function Um(t) {
    if (f_.domSupported)
      for (var e = document.documentElement.style, n = 0, i = t.length; i > n; n++) if (t[n] in e) return t[n];
  }
  function Xm(t, e) {
    if (!t) return e;
    e = Il(e, !0);
    var n = t.indexOf(e);
    return (t = -1 === n ? e : '-' + t.slice(0, n) + '-' + e), t.toLowerCase();
  }
  function Ym(t, e) {
    var n = t.currentStyle || (document.defaultView && document.defaultView.getComputedStyle(t));
    return n ? (e ? n[e] : n) : null;
  }
  function Zm(t) {
    return (t = 'left' === t ? 'right' : 'right' === t ? 'left' : 'top' === t ? 'bottom' : 'top');
  }
  function qm(t, e, n) {
    if (!C(n) || 'inside' === n) return '';
    var i = t.get('backgroundColor'),
      r = t.get('borderWidth');
    e = Rl(e);
    var o,
      a = Zm(n),
      s = Math.max(1.5 * Math.round(r), 6),
      l = '',
      u = mO + ':';
    p(['left', 'right'], a) > -1
      ? ((l += 'top:50%'), (u += 'translateY(-50%) rotate(' + (o = 'left' === a ? -225 : -45) + 'deg)'))
      : ((l += 'left:50%'), (u += 'translateX(-50%) rotate(' + (o = 'top' === a ? 225 : 45) + 'deg)'));
    var h = (o * Math.PI) / 180,
      c = s + r,
      d = c * Math.abs(Math.cos(h)) + c * Math.abs(Math.sin(h)),
      f = Math.round(100 * ((d - Math.SQRT2 * r) / 2 + Math.SQRT2 * r - (d - c) / 2)) / 100;
    l += ';' + a + ':-' + f + 'px';
    var g = e + ' solid ' + r + 'px;',
      v = [
        'position:absolute;width:' + s + 'px;height:' + s + 'px;',
        l + ';' + u + ';',
        'border-bottom:' + g,
        'border-right:' + g,
        'background-color:' + i + ';',
      ];
    return '<div style="' + v.join('') + '"></div>';
  }
  function jm(t, e) {
    var n = 'cubic-bezier(0.23,1,0.32,1)',
      i = ' ' + t / 2 + 's ' + n,
      r = 'opacity' + i + ',visibility' + i;
    return (
      e || ((i = ' ' + t + 's ' + n), (r += f_.transformSupported ? ',' + mO + i : ',left' + i + ',top' + i)),
      yO + ':' + r
    );
  }
  function Km(t, e, n) {
    var i = t.toFixed(0) + 'px',
      r = e.toFixed(0) + 'px';
    if (!f_.transformSupported)
      return n
        ? 'top:' + r + ';left:' + i + ';'
        : [
            ['top', r],
            ['left', i],
          ];
    var o = f_.transform3dSupported,
      a = 'translate' + (o ? '3d' : '') + '(' + i + ',' + r + (o ? ',0' : '') + ')';
    return n
      ? 'top:0;left:0;' + mO + ':' + a + ';'
      : [
          ['top', 0],
          ['left', 0],
          [gO, a],
        ];
  }
  function $m(t) {
    var e = [],
      n = t.get('fontSize'),
      i = t.getTextColor();
    i && e.push('color:' + i),
      e.push('font:' + t.getFont()),
      n && e.push('line-height:' + Math.round((3 * n) / 2) + 'px');
    var r = t.get('textShadowColor'),
      o = t.get('textShadowBlur') || 0,
      a = t.get('textShadowOffsetX') || 0,
      s = t.get('textShadowOffsetY') || 0;
    return (
      r && o && e.push('text-shadow:' + a + 'px ' + s + 'px ' + o + 'px ' + r),
      v(['decoration', 'align'], function (n) {
        var i = t.get(n);
        i && e.push('text-' + n + ':' + i);
      }),
      e.join(';')
    );
  }
  function Qm(t, e, n) {
    var i = [],
      r = t.get('transitionDuration'),
      o = t.get('backgroundColor'),
      a = t.get('shadowBlur'),
      s = t.get('shadowColor'),
      l = t.get('shadowOffsetX'),
      u = t.get('shadowOffsetY'),
      h = t.getModel('textStyle'),
      c = Mh(t, 'html'),
      p = l + 'px ' + u + 'px ' + a + 'px ' + s;
    return (
      i.push('box-shadow:' + p),
      e && r && i.push(jm(r, n)),
      o && i.push('background-color:' + o),
      v(['width', 'color', 'radius'], function (e) {
        var n = 'border-' + e,
          r = Il(n),
          o = t.get(r);
        null != o && i.push(n + ':' + o + ('color' === e ? '' : 'px'));
      }),
      i.push($m(h)),
      null != c && i.push('padding:' + PT(c).join('px ') + 'px'),
      i.join(';') + ';'
    );
  }
  function Jm(t, e, n, i, r) {
    var o = e && e.painter;
    if (n) {
      var a = o && o.getViewportRoot();
      a && we(t, a, document.body, i, r);
    } else {
      (t[0] = i), (t[1] = r);
      var s = o && o.getViewportRootOffset();
      s && ((t[0] += s.offsetLeft), (t[1] += s.offsetTop));
    }
    (t[2] = t[0] / e.getWidth()), (t[3] = t[1] / e.getHeight());
  }
  function t_(t) {
    return Math.max(0, t);
  }
  function e_(t) {
    var e = t_(t.shadowBlur || 0),
      n = t_(t.shadowOffsetX || 0),
      i = t_(t.shadowOffsetY || 0);
    return { left: t_(e - n), right: t_(e + n), top: t_(e - i), bottom: t_(e + i) };
  }
  function n_(t, e, n, i) {
    (t[0] = n), (t[1] = i), (t[2] = t[0] / e.getWidth()), (t[3] = t[1] / e.getHeight());
  }
  function i_(t, e, n) {
    var i,
      r = e.ecModel;
    n ? ((i = new cT(n, r, r)), (i = new cT(e.option, i, r))) : (i = e);
    for (var o = t.length - 1; o >= 0; o--) {
      var a = t[o];
      a && (a instanceof cT && (a = a.get('tooltip', !0)), C(a) && (a = { formatter: a }), a && (i = new cT(a, i, r)));
    }
    return i;
  }
  function r_(t, e) {
    return t.dispatchAction || z_(e.dispatchAction, e);
  }
  function o_(t, e, n, i, r, o, a) {
    var s = n.getSize(),
      l = s[0],
      u = s[1];
    return (
      null != o && (t + l + o + 2 > i ? (t -= l + o) : (t += o)),
      null != a && (e + u + a > r ? (e -= u + a) : (e += a)),
      [t, e]
    );
  }
  function a_(t, e, n, i, r) {
    var o = n.getSize(),
      a = o[0],
      s = o[1];
    return (
      (t = Math.min(t + a, i) - a), (e = Math.min(e + s, r) - s), (t = Math.max(t, 0)), (e = Math.max(e, 0)), [t, e]
    );
  }
  function s_(t, e, n, i) {
    var r = n[0],
      o = n[1],
      a = Math.ceil(Math.SQRT2 * i) + 8,
      s = 0,
      l = 0,
      u = e.width,
      h = e.height;
    switch (t) {
      case 'inside':
        (s = e.x + u / 2 - r / 2), (l = e.y + h / 2 - o / 2);
        break;
      case 'top':
        (s = e.x + u / 2 - r / 2), (l = e.y - o - a);
        break;
      case 'bottom':
        (s = e.x + u / 2 - r / 2), (l = e.y + h + a);
        break;
      case 'left':
        (s = e.x - r - a), (l = e.y + h / 2 - o / 2);
        break;
      case 'right':
        (s = e.x + u + a), (l = e.y + h / 2 - o / 2);
    }
    return [s, l];
  }
  function l_(t) {
    return 'center' === t || 'middle' === t;
  }
  function u_(t, e, n) {
    var i = Ar(t).queryOptionMap,
      r = i.keys()[0];
    if (r && 'series' !== r) {
      var o = Pr(e, r, i.get(r), { useDefault: !1, enableAll: !1, enableNone: !1 }),
        a = o.models[0];
      if (a) {
        var s,
          l = n.getViewOfComponentModel(a);
        return (
          l.group.traverse(function (e) {
            var n = bS(e).tooltipConfig;
            return n && n.name === t.name ? ((s = e), !0) : void 0;
          }),
          s ? { componentMainType: r, componentIndex: a.componentIndex, el: s } : void 0
        );
      }
    }
  }
  function h_(t) {
    Yd(Wm),
      t.registerComponentModel(fO),
      t.registerComponentView(SO),
      t.registerAction({ type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip' }, $),
      t.registerAction({ type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip' }, $);
  }
  var c_ = function (t, e) {
      return (c_ =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    },
    p_ = (function () {
      function t() {
        (this.firefox = !1), (this.ie = !1), (this.edge = !1), (this.newEdge = !1), (this.weChat = !1);
      }
      return t;
    })(),
    d_ = (function () {
      function t() {
        (this.browser = new p_()),
          (this.node = !1),
          (this.wxa = !1),
          (this.worker = !1),
          (this.svgSupported = !1),
          (this.touchEventsSupported = !1),
          (this.pointerEventsSupported = !1),
          (this.domSupported = !1),
          (this.transformSupported = !1),
          (this.transform3dSupported = !1),
          (this.hasGlobalWindow = 'undefined' != typeof window);
      }
      return t;
    })(),
    f_ = new d_();
  'object' == typeof wx && 'function' == typeof wx.getSystemInfoSync
    ? ((f_.wxa = !0), (f_.touchEventsSupported = !0))
    : 'undefined' == typeof document && 'undefined' != typeof self
    ? (f_.worker = !0)
    : 'undefined' == typeof navigator
    ? ((f_.node = !0), (f_.svgSupported = !0))
    : n(navigator.userAgent, f_);
  var g_ = 12,
    v_ = 'sans-serif',
    y_ = g_ + 'px ' + v_,
    m_ = 20,
    __ = 100,
    x_ = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N",
    w_ = i(x_),
    b_ = {
      createCanvas: function () {
        return 'undefined' != typeof document && document.createElement('canvas');
      },
      measureText: (function () {
        var t, e;
        return function (n, i) {
          if (!t) {
            var r = b_.createCanvas();
            t = r && r.getContext('2d');
          }
          if (t) return e !== i && (e = t.font = i || y_), t.measureText(n);
          (n = n || ''), (i = i || y_);
          var o = /^([0-9]*?)px$/.exec(i),
            a = +(o && o[1]) || g_,
            s = 0;
          if (i.indexOf('mono') >= 0) s = a * n.length;
          else
            for (var l = 0; l < n.length; l++) {
              var u = w_[n[l]];
              s += null == u ? a : u * a;
            }
          return { width: s };
        };
      })(),
      loadImage: function (t, e, n) {
        var i = new Image();
        return (i.onload = e), (i.onerror = n), (i.src = t), i;
      },
    },
    S_ = m(
      ['Function', 'RegExp', 'Date', 'Error', 'CanvasGradient', 'CanvasPattern', 'Image', 'Canvas'],
      function (t, e) {
        return (t['[object ' + e + ']'] = !0), t;
      },
      {},
    ),
    M_ = m(
      ['Int8', 'Uint8', 'Uint8Clamped', 'Int16', 'Uint16', 'Int32', 'Uint32', 'Float32', 'Float64'],
      function (t, e) {
        return (t['[object ' + e + 'Array]'] = !0), t;
      },
      {},
    ),
    T_ = Object.prototype.toString,
    C_ = Array.prototype,
    I_ = C_.forEach,
    D_ = C_.filter,
    k_ = C_.slice,
    A_ = C_.map,
    P_ = function () {}.constructor,
    L_ = P_ ? P_.prototype : null,
    O_ = '__proto__',
    R_ = 2311,
    B_ = b_.createCanvas,
    z_ = L_ && T(L_.bind) ? L_.call.bind(L_.bind) : b,
    E_ = '__ec_primitive__',
    N_ = (function () {
      function t(e) {
        function n(t, e) {
          i ? r.set(t, e) : r.set(e, t);
        }
        this.data = {};
        var i = M(e);
        this.data = {};
        var r = this;
        e instanceof t ? e.each(n) : e && v(e, n);
      }
      return (
        (t.prototype.get = function (t) {
          return this.data.hasOwnProperty(t) ? this.data[t] : null;
        }),
        (t.prototype.set = function (t, e) {
          return (this.data[t] = e);
        }),
        (t.prototype.each = function (t, e) {
          for (var n in this.data) this.data.hasOwnProperty(n) && t.call(e, this.data[n], n);
        }),
        (t.prototype.keys = function () {
          return w(this.data);
        }),
        (t.prototype.removeKey = function (t) {
          delete this.data[t];
        }),
        t
      );
    })(),
    F_ = 180 / Math.PI,
    V_ = (Object.freeze || Object)({
      guid: o,
      logError: a,
      clone: s,
      merge: l,
      mergeAll: u,
      extend: h,
      defaults: c,
      createCanvas: B_,
      indexOf: p,
      inherits: d,
      mixin: f,
      isArrayLike: g,
      each: v,
      map: y,
      reduce: m,
      filter: _,
      find: x,
      keys: w,
      bind: z_,
      curry: S,
      isArray: M,
      isFunction: T,
      isString: C,
      isStringSafe: I,
      isNumber: D,
      isObject: k,
      isBuiltInObject: A,
      isTypedArray: P,
      isDom: L,
      isGradientObject: O,
      isImagePatternObject: R,
      isRegExp: B,
      eqNaN: z,
      retrieve: E,
      retrieve2: N,
      retrieve3: F,
      slice: V,
      normalizeCssArray: H,
      assert: W,
      trim: G,
      setAsPrimitive: U,
      isPrimitive: X,
      HashMap: N_,
      createHashMap: Y,
      concatArray: Z,
      createObject: q,
      disableUserSelect: j,
      hasOwn: K,
      noop: $,
      RADIAN_TO_DEGREE: F_,
    }),
    H_ = oe,
    W_ = ae,
    G_ = pe,
    U_ = de,
    X_ = (Object.freeze || Object)({
      create: Q,
      copy: J,
      clone: te,
      set: ee,
      add: ne,
      scaleAndAdd: ie,
      sub: re,
      len: oe,
      length: H_,
      lenSquare: ae,
      lengthSquare: W_,
      mul: se,
      div: le,
      dot: ue,
      scale: he,
      normalize: ce,
      distance: pe,
      dist: G_,
      distanceSquare: de,
      distSquare: U_,
      negate: fe,
      lerp: ge,
      applyTransform: ve,
      min: ye,
      max: me,
    }),
    Y_ = (function () {
      function t(t, e) {
        (this.target = t), (this.topTarget = e && e.topTarget);
      }
      return t;
    })(),
    Z_ = (function () {
      function t(t) {
        (this.handler = t),
          t.on('mousedown', this._dragStart, this),
          t.on('mousemove', this._drag, this),
          t.on('mouseup', this._dragEnd, this);
      }
      return (
        (t.prototype._dragStart = function (t) {
          for (var e = t.target; e && !e.draggable; ) e = e.parent || e.__hostTarget;
          e &&
            ((this._draggingTarget = e),
            (e.dragging = !0),
            (this._x = t.offsetX),
            (this._y = t.offsetY),
            this.handler.dispatchToElement(new Y_(e, t), 'dragstart', t.event));
        }),
        (t.prototype._drag = function (t) {
          var e = this._draggingTarget;
          if (e) {
            var n = t.offsetX,
              i = t.offsetY,
              r = n - this._x,
              o = i - this._y;
            (this._x = n),
              (this._y = i),
              e.drift(r, o, t),
              this.handler.dispatchToElement(new Y_(e, t), 'drag', t.event);
            var a = this.handler.findHover(n, i, e).target,
              s = this._dropTarget;
            (this._dropTarget = a),
              e !== a &&
                (s && a !== s && this.handler.dispatchToElement(new Y_(s, t), 'dragleave', t.event),
                a && a !== s && this.handler.dispatchToElement(new Y_(a, t), 'dragenter', t.event));
          }
        }),
        (t.prototype._dragEnd = function (t) {
          var e = this._draggingTarget;
          e && (e.dragging = !1),
            this.handler.dispatchToElement(new Y_(e, t), 'dragend', t.event),
            this._dropTarget && this.handler.dispatchToElement(new Y_(this._dropTarget, t), 'drop', t.event),
            (this._draggingTarget = null),
            (this._dropTarget = null);
        }),
        t
      );
    })(),
    q_ = (function () {
      function t(t) {
        t && (this._$eventProcessor = t);
      }
      return (
        (t.prototype.on = function (t, e, n, i) {
          this._$handlers || (this._$handlers = {});
          var r = this._$handlers;
          if (('function' == typeof e && ((i = n), (n = e), (e = null)), !n || !t)) return this;
          var o = this._$eventProcessor;
          null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
          for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
          var s = { h: n, query: e, ctx: i || this, callAtLast: n.zrEventfulCallAtLast },
            l = r[t].length - 1,
            u = r[t][l];
          return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this;
        }),
        (t.prototype.isSilent = function (t) {
          var e = this._$handlers;
          return !e || !e[t] || !e[t].length;
        }),
        (t.prototype.off = function (t, e) {
          var n = this._$handlers;
          if (!n) return this;
          if (!t) return (this._$handlers = {}), this;
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, o = n[t].length; o > r; r++) n[t][r].h !== e && i.push(n[t][r]);
              n[t] = i;
            }
            n[t] && 0 === n[t].length && delete n[t];
          } else delete n[t];
          return this;
        }),
        (t.prototype.trigger = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          if (!this._$handlers) return this;
          var i = this._$handlers[t],
            r = this._$eventProcessor;
          if (i)
            for (var o = e.length, a = i.length, s = 0; a > s; s++) {
              var l = i[s];
              if (!r || !r.filter || null == l.query || r.filter(t, l.query))
                switch (o) {
                  case 0:
                    l.h.call(l.ctx);
                    break;
                  case 1:
                    l.h.call(l.ctx, e[0]);
                    break;
                  case 2:
                    l.h.call(l.ctx, e[0], e[1]);
                    break;
                  default:
                    l.h.apply(l.ctx, e);
                }
            }
          return r && r.afterTrigger && r.afterTrigger(t), this;
        }),
        (t.prototype.triggerWithContext = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          if (!this._$handlers) return this;
          var i = this._$handlers[t],
            r = this._$eventProcessor;
          if (i)
            for (var o = e.length, a = e[o - 1], s = i.length, l = 0; s > l; l++) {
              var u = i[l];
              if (!r || !r.filter || null == u.query || r.filter(t, u.query))
                switch (o) {
                  case 0:
                    u.h.call(a);
                    break;
                  case 1:
                    u.h.call(a, e[0]);
                    break;
                  case 2:
                    u.h.call(a, e[0], e[1]);
                    break;
                  default:
                    u.h.apply(a, e.slice(1, o - 1));
                }
            }
          return r && r.afterTrigger && r.afterTrigger(t), this;
        }),
        t
      );
    })(),
    j_ = Math.log(2),
    K_ = '___zrEVENTSAVED',
    $_ = [],
    Q_ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    J_ = [],
    tx = f_.browser.firefox && +f_.browser.version.split('.')[0] < 39,
    ex = function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
    },
    nx = (function () {
      function t() {
        this._track = [];
      }
      return (
        (t.prototype.recognize = function (t, e, n) {
          return this._doTrack(t, e, n), this._recognize(t);
        }),
        (t.prototype.clear = function () {
          return (this._track.length = 0), this;
        }),
        (t.prototype._doTrack = function (t, e, n) {
          var i = t.touches;
          if (i) {
            for (var r = { points: [], touches: [], target: e, event: t }, o = 0, a = i.length; a > o; o++) {
              var s = i[o],
                l = Ce(n, s, {});
              r.points.push([l.zrX, l.zrY]), r.touches.push(s);
            }
            this._track.push(r);
          }
        }),
        (t.prototype._recognize = function (t) {
          for (var e in ix)
            if (ix.hasOwnProperty(e)) {
              var n = ix[e](this._track, t);
              if (n) return n;
            }
        }),
        t
      );
    })(),
    ix = {
      pinch: function (t, e) {
        var n = t.length;
        if (n) {
          var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;
          if (r && r.length > 1 && i && i.length > 1) {
            var o = Oe(i) / Oe(r);
            !isFinite(o) && (o = 1), (e.pinchScale = o);
            var a = Re(i);
            return (e.pinchX = a[0]), (e.pinchY = a[1]), { type: 'pinch', target: t[0].target, event: e };
          }
        }
      },
    },
    rx = 'silent',
    ox = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.handler = null), e;
      }
      return e(n, t), (n.prototype.dispose = function () {}), (n.prototype.setCursor = function () {}), n;
    })(q_),
    ax = (function () {
      function t(t, e) {
        (this.x = t), (this.y = e);
      }
      return t;
    })(),
    sx = ['click', 'dblclick', 'mousewheel', 'mouseout', 'mouseup', 'mousedown', 'mousemove', 'contextmenu'],
    lx = (function (t) {
      function n(e, n, i, r) {
        var o = t.call(this) || this;
        return (
          (o._hovered = new ax(0, 0)),
          (o.storage = e),
          (o.painter = n),
          (o.painterRoot = r),
          (i = i || new ox()),
          (o.proxy = null),
          o.setHandlerProxy(i),
          (o._draggingMgr = new Z_(o)),
          o
        );
      }
      return (
        e(n, t),
        (n.prototype.setHandlerProxy = function (t) {
          this.proxy && this.proxy.dispose(),
            t &&
              (v(
                sx,
                function (e) {
                  t.on && t.on(e, this[e], this);
                },
                this,
              ),
              (t.handler = this)),
            (this.proxy = t);
        }),
        (n.prototype.mousemove = function (t) {
          var e = t.zrX,
            n = t.zrY,
            i = Ne(this, e, n),
            r = this._hovered,
            o = r.target;
          o && !o.__zr && ((r = this.findHover(r.x, r.y)), (o = r.target));
          var a = (this._hovered = i ? new ax(e, n) : this.findHover(e, n)),
            s = a.target,
            l = this.proxy;
          l.setCursor && l.setCursor(s ? s.cursor : 'default'),
            o && s !== o && this.dispatchToElement(r, 'mouseout', t),
            this.dispatchToElement(a, 'mousemove', t),
            s && s !== o && this.dispatchToElement(a, 'mouseover', t);
        }),
        (n.prototype.mouseout = function (t) {
          var e = t.zrEventControl;
          'only_globalout' !== e && this.dispatchToElement(this._hovered, 'mouseout', t),
            'no_globalout' !== e && this.trigger('globalout', { type: 'globalout', event: t });
        }),
        (n.prototype.resize = function () {
          this._hovered = new ax(0, 0);
        }),
        (n.prototype.dispatch = function (t, e) {
          var n = this[t];
          n && n.call(this, e);
        }),
        (n.prototype.dispose = function () {
          this.proxy.dispose(), (this.storage = null), (this.proxy = null), (this.painter = null);
        }),
        (n.prototype.setCursorStyle = function (t) {
          var e = this.proxy;
          e.setCursor && e.setCursor(t);
        }),
        (n.prototype.dispatchToElement = function (t, e, n) {
          t = t || {};
          var i = t.target;
          if (!i || !i.silent) {
            for (
              var r = 'on' + e, o = Be(e, t, n);
              i &&
              (i[r] && (o.cancelBubble = !!i[r].call(i, o)),
              i.trigger(e, o),
              (i = i.__hostTarget ? i.__hostTarget : i.parent),
              !o.cancelBubble);

            );
            o.cancelBubble ||
              (this.trigger(e, o),
              this.painter &&
                this.painter.eachOtherLayer &&
                this.painter.eachOtherLayer(function (t) {
                  'function' == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o);
                }));
          }
        }),
        (n.prototype.findHover = function (t, e, n) {
          for (var i = this.storage.getDisplayList(), r = new ax(t, e), o = i.length - 1; o >= 0; o--) {
            var a = void 0;
            if (
              i[o] !== n &&
              !i[o].ignore &&
              (a = Ee(i[o], t, e)) &&
              (!r.topTarget && (r.topTarget = i[o]), a !== rx)
            ) {
              r.target = i[o];
              break;
            }
          }
          return r;
        }),
        (n.prototype.processGesture = function (t, e) {
          this._gestureMgr || (this._gestureMgr = new nx());
          var n = this._gestureMgr;
          'start' === e && n.clear();
          var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
          if (('end' === e && n.clear(), i)) {
            var r = i.type;
            t.gestureEvent = r;
            var o = new ax();
            (o.target = i.target), this.dispatchToElement(o, r, i.event);
          }
        }),
        n
      );
    })(q_);
  v(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (t) {
    lx.prototype[t] = function (e) {
      var n,
        i,
        r = e.zrX,
        o = e.zrY,
        a = Ne(this, r, o);
      if ((('mouseup' === t && a) || ((n = this.findHover(r, o)), (i = n.target)), 'mousedown' === t))
        (this._downEl = i), (this._downPoint = [e.zrX, e.zrY]), (this._upEl = i);
      else if ('mouseup' === t) this._upEl = i;
      else if ('click' === t) {
        if (this._downEl !== this._upEl || !this._downPoint || G_(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null;
      }
      this.dispatchToElement(n, t, e);
    };
  });
  var ux,
    hx = 32,
    cx = 7,
    px = 1,
    dx = 2,
    fx = 4,
    gx = !1,
    vx = (function () {
      function t() {
        (this._roots = []), (this._displayList = []), (this._displayListLen = 0), (this.displayableSortFunc = qe);
      }
      return (
        (t.prototype.traverse = function (t, e) {
          for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        }),
        (t.prototype.getDisplayList = function (t, e) {
          e = e || !1;
          var n = this._displayList;
          return (t || !n.length) && this.updateDisplayList(e), n;
        }),
        (t.prototype.updateDisplayList = function (t) {
          this._displayListLen = 0;
          for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++)
            this._updateAndAddDisplayable(e[i], null, t);
          (n.length = this._displayListLen), Ye(n, qe);
        }),
        (t.prototype._updateAndAddDisplayable = function (t, e, n) {
          if (!t.ignore || n) {
            t.beforeUpdate(), t.update(), t.afterUpdate();
            var i = t.getClipPath();
            if (t.ignoreClip) e = null;
            else if (i) {
              e = e ? e.slice() : [];
              for (var r = i, o = t; r; )
                (r.parent = o), r.updateTransform(), e.push(r), (o = r), (r = r.getClipPath());
            }
            if (t.childrenRef) {
              for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                var l = a[s];
                t.__dirty && (l.__dirty |= px), this._updateAndAddDisplayable(l, e, n);
              }
              t.__dirty = 0;
            } else {
              var u = t;
              e && e.length ? (u.__clipPaths = e) : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []),
                isNaN(u.z) && (Ze(), (u.z = 0)),
                isNaN(u.z2) && (Ze(), (u.z2 = 0)),
                isNaN(u.zlevel) && (Ze(), (u.zlevel = 0)),
                (this._displayList[this._displayListLen++] = u);
            }
            var h = t.getDecalElement && t.getDecalElement();
            h && this._updateAndAddDisplayable(h, e, n);
            var c = t.getTextGuideLine();
            c && this._updateAndAddDisplayable(c, e, n);
            var p = t.getTextContent();
            p && this._updateAndAddDisplayable(p, e, n);
          }
        }),
        (t.prototype.addRoot = function (t) {
          (t.__zr && t.__zr.storage === this) || this._roots.push(t);
        }),
        (t.prototype.delRoot = function (t) {
          if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]);
          else {
            var i = p(this._roots, t);
            i >= 0 && this._roots.splice(i, 1);
          }
        }),
        (t.prototype.delAllRoots = function () {
          (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
        }),
        (t.prototype.getRoots = function () {
          return this._roots;
        }),
        (t.prototype.dispose = function () {
          (this._displayList = null), (this._roots = null);
        }),
        t
      );
    })();
  ux =
    (f_.hasGlobalWindow &&
      ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
        (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window)) ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame)) ||
    function (t) {
      return setTimeout(t, 16);
    };
  var yx = ux,
    mx = {
      linear: function (t) {
        return t;
      },
      quadraticIn: function (t) {
        return t * t;
      },
      quadraticOut: function (t) {
        return t * (2 - t);
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      cubicIn: function (t) {
        return t * t * t;
      },
      cubicOut: function (t) {
        return --t * t * t + 1;
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      quarticIn: function (t) {
        return t * t * t * t;
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t;
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      quinticIn: function (t) {
        return t * t * t * t * t;
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1;
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      sinusoidalOut: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      sinusoidalInOut: function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1);
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      exponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      circularInOut: function (t) {
        return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      elasticIn: function (t) {
        var e,
          n = 0.1,
          i = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
            -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i)));
      },
      elasticOut: function (t) {
        var e,
          n = 0.1,
          i = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
            n * Math.pow(2, -10 * t) * Math.sin((2 * (t - e) * Math.PI) / i) + 1);
      },
      elasticInOut: function (t) {
        var e,
          n = 0.1,
          i = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n ? ((n = 1), (e = i / 4)) : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? -0.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i)
              : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((2 * (t - e) * Math.PI) / i) * 0.5 + 1);
      },
      backIn: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      backOut: function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1;
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? 0.5 * t * t * ((e + 1) * t - e) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
      },
      bounceIn: function (t) {
        return 1 - mx.bounceOut(1 - t);
      },
      bounceOut: function (t) {
        return 1 / 2.75 > t
          ? 7.5625 * t * t
          : 2 / 2.75 > t
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : 2.5 / 2.75 > t
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      bounceInOut: function (t) {
        return 0.5 > t ? 0.5 * mx.bounceIn(2 * t) : 0.5 * mx.bounceOut(2 * t - 1) + 0.5;
      },
    },
    _x = Math.pow,
    xx = Math.sqrt,
    bx = 1e-8,
    Sx = 1e-4,
    Mx = xx(3),
    Tx = 1 / 3,
    Cx = Q(),
    Ix = Q(),
    Dx = Q(),
    kx = /cubic-bezier\(([0-9,\.e ]+)\)/,
    Ax = (function () {
      function t(t) {
        (this._inited = !1),
          (this._startTime = 0),
          (this._pausedTime = 0),
          (this._paused = !1),
          (this._life = t.life || 1e3),
          (this._delay = t.delay || 0),
          (this.loop = t.loop || !1),
          (this.onframe = t.onframe || $),
          (this.ondestroy = t.ondestroy || $),
          (this.onrestart = t.onrestart || $),
          t.easing && this.setEasing(t.easing);
      }
      return (
        (t.prototype.step = function (t, e) {
          if ((this._inited || ((this._startTime = t + this._delay), (this._inited = !0)), this._paused))
            return void (this._pausedTime += e);
          var n = this._life,
            i = t - this._startTime - this._pausedTime,
            r = i / n;
          0 > r && (r = 0), (r = Math.min(r, 1));
          var o = this.easingFunc,
            a = o ? o(r) : r;
          if ((this.onframe(a), 1 === r)) {
            if (!this.loop) return !0;
            var s = i % n;
            (this._startTime = t - s), (this._pausedTime = 0), this.onrestart();
          }
          return !1;
        }),
        (t.prototype.pause = function () {
          this._paused = !0;
        }),
        (t.prototype.resume = function () {
          this._paused = !1;
        }),
        (t.prototype.setEasing = function (t) {
          (this.easing = t), (this.easingFunc = T(t) ? t : mx[t] || pn(t));
        }),
        t
      );
    })(),
    Px = (function () {
      function t(t) {
        this.value = t;
      }
      return t;
    })(),
    Lx = (function () {
      function t() {
        this._len = 0;
      }
      return (
        (t.prototype.insert = function (t) {
          var e = new Px(t);
          return this.insertEntry(e), e;
        }),
        (t.prototype.insertEntry = function (t) {
          this.head
            ? ((this.tail.next = t), (t.prev = this.tail), (t.next = null), (this.tail = t))
            : (this.head = this.tail = t),
            this._len++;
        }),
        (t.prototype.remove = function (t) {
          var e = t.prev,
            n = t.next;
          e ? (e.next = n) : (this.head = n), n ? (n.prev = e) : (this.tail = e), (t.next = t.prev = null), this._len--;
        }),
        (t.prototype.len = function () {
          return this._len;
        }),
        (t.prototype.clear = function () {
          (this.head = this.tail = null), (this._len = 0);
        }),
        t
      );
    })(),
    Ox = (function () {
      function t(t) {
        (this._list = new Lx()), (this._maxSize = 10), (this._map = {}), (this._maxSize = t);
      }
      return (
        (t.prototype.put = function (t, e) {
          var n = this._list,
            i = this._map,
            r = null;
          if (null == i[t]) {
            var o = n.len(),
              a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
              var s = n.head;
              n.remove(s), delete i[s.key], (r = s.value), (this._lastRemovedEntry = s);
            }
            a ? (a.value = e) : (a = new Px(e)), (a.key = t), n.insertEntry(a), (i[t] = a);
          }
          return r;
        }),
        (t.prototype.get = function (t) {
          var e = this._map[t],
            n = this._list;
          return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
        }),
        (t.prototype.clear = function () {
          this._list.clear(), (this._map = {});
        }),
        (t.prototype.len = function () {
          return this._list.len();
        }),
        t
      );
    })(),
    Rx = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1],
    },
    Bx = new Ox(20),
    zx = null,
    Ex = Dn,
    Nx = kn,
    Fx = (Object.freeze || Object)({
      parse: Sn,
      lift: Cn,
      toHex: In,
      fastLerp: Dn,
      fastMapToColor: Ex,
      lerp: kn,
      mapToColor: Nx,
      modifyHSL: An,
      modifyAlpha: Pn,
      stringify: Ln,
      lum: On,
      random: Rn,
    }),
    Vx =
      ((function () {
        return f_.hasGlobalWindow && T(window.btoa)
          ? function (t) {
              return window.btoa(unescape(t));
            }
          : 'undefined' != typeof Buffer
          ? function (t) {
              return Buffer.from(t).toString('base64');
            }
          : function () {
              return null;
            };
      })(),
      Array.prototype.slice),
    Hx = 0,
    Wx = 1,
    Gx = 2,
    Ux = 3,
    Xx = 4,
    Yx = 5,
    Zx = 6,
    qx = [0, 0, 0, 0],
    jx = (function () {
      function t(t) {
        (this.keyframes = []),
          (this.discrete = !1),
          (this._invalid = !1),
          (this._needsSort = !1),
          (this._lastFr = 0),
          (this._lastFrP = 0),
          (this.propName = t);
      }
      return (
        (t.prototype.isFinished = function () {
          return this._finished;
        }),
        (t.prototype.setFinished = function () {
          (this._finished = !0), this._additiveTrack && this._additiveTrack.setFinished();
        }),
        (t.prototype.needsAnimate = function () {
          return this.keyframes.length >= 1;
        }),
        (t.prototype.getAdditiveTrack = function () {
          return this._additiveTrack;
        }),
        (t.prototype.addKeyframe = function (t, e, n) {
          this._needsSort = !0;
          var i = this.keyframes,
            r = i.length,
            o = !1,
            a = Zx,
            s = e;
          if (g(e)) {
            var l = Yn(e);
            (a = l), ((1 === l && !D(e[0])) || (2 === l && !D(e[0][0]))) && (o = !0);
          } else if (D(e) && !z(e)) a = Hx;
          else if (C(e))
            if (isNaN(+e)) {
              var u = Sn(e);
              u && ((s = u), (a = Ux));
            } else a = Hx;
          else if (O(e)) {
            var c = h({}, s);
            (c.colorStops = y(e.colorStops, function (t) {
              return { offset: t.offset, color: Sn(t.color) };
            })),
              Bn(e) ? (a = Xx) : zn(e) && (a = Yx),
              (s = c);
          }
          0 === r ? (this.valType = a) : (a !== this.valType || a === Zx) && (o = !0),
            (this.discrete = this.discrete || o);
          var p = { time: t, value: s, rawValue: e, percent: 0 };
          return n && ((p.easing = n), (p.easingFunc = T(n) ? n : mx[n] || pn(n))), i.push(p), p;
        }),
        (t.prototype.prepare = function (t, e) {
          var n = this.keyframes;
          this._needsSort &&
            n.sort(function (t, e) {
              return t.time - e.time;
            });
          for (
            var i = this.valType, r = n.length, o = n[r - 1], a = this.discrete, s = qn(i), l = Zn(i), u = 0;
            r > u;
            u++
          ) {
            var h = n[u],
              c = h.value,
              p = o.value;
            (h.percent = h.time / t), a || (s && u !== r - 1 ? Gn(c, p, i) : l && Wn(c.colorStops, p.colorStops));
          }
          if (!a && i !== Yx && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
            this._additiveTrack = e;
            for (var d = n[0].value, u = 0; r > u; u++)
              i === Hx
                ? (n[u].additiveValue = n[u].value - d)
                : i === Ux
                ? (n[u].additiveValue = Vn([], n[u].value, d, -1))
                : qn(i) && (n[u].additiveValue = i === Wx ? Vn([], n[u].value, d, -1) : Hn([], n[u].value, d, -1));
          }
        }),
        (t.prototype.step = function (t, e) {
          if (!this._finished) {
            this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
            var n,
              i,
              r,
              o = null != this._additiveTrack,
              a = o ? 'additiveValue' : 'value',
              s = this.valType,
              l = this.keyframes,
              u = l.length,
              h = this.propName,
              c = s === Ux,
              p = this._lastFr,
              d = Math.min;
            if (1 === u) i = r = l[0];
            else {
              if (0 > e) n = 0;
              else if (e < this._lastFrP) {
                var f = d(p + 1, u - 1);
                for (n = f; n >= 0 && !(l[n].percent <= e); n--);
                n = d(n, u - 2);
              } else {
                for (n = p; u > n && !(l[n].percent > e); n++);
                n = d(n - 1, u - 2);
              }
              (r = l[n + 1]), (i = l[n]);
            }
            if (i && r) {
              (this._lastFr = n), (this._lastFrP = e);
              var g = r.percent - i.percent,
                v = 0 === g ? 1 : d((e - i.percent) / g, 1);
              r.easingFunc && (v = r.easingFunc(v));
              var m = o ? this._additiveValue : c ? qx : t[h];
              if (((!qn(s) && !c) || m || (m = this._additiveValue = []), this.discrete))
                t[h] = 1 > v ? i.rawValue : r.rawValue;
              else if (qn(s)) s === Wx ? Nn(m, i[a], r[a], v) : Fn(m, i[a], r[a], v);
              else if (Zn(s)) {
                var _ = i[a],
                  x = r[a],
                  w = s === Xx;
                (t[h] = {
                  type: w ? 'linear' : 'radial',
                  x: En(_.x, x.x, v),
                  y: En(_.y, x.y, v),
                  colorStops: y(_.colorStops, function (t, e) {
                    var n = x.colorStops[e];
                    return { offset: En(t.offset, n.offset, v), color: Xn(Nn([], t.color, n.color, v)) };
                  }),
                  global: x.global,
                }),
                  w ? ((t[h].x2 = En(_.x2, x.x2, v)), (t[h].y2 = En(_.y2, x.y2, v))) : (t[h].r = En(_.r, x.r, v));
              } else if (c) Nn(m, i[a], r[a], v), o || (t[h] = Xn(m));
              else {
                var b = En(i[a], r[a], v);
                o ? (this._additiveValue = b) : (t[h] = b);
              }
              o && this._addToTarget(t);
            }
          }
        }),
        (t.prototype._addToTarget = function (t) {
          var e = this.valType,
            n = this.propName,
            i = this._additiveValue;
          e === Hx
            ? (t[n] = t[n] + i)
            : e === Ux
            ? (Sn(t[n], qx), Vn(qx, qx, i, 1), (t[n] = Xn(qx)))
            : e === Wx
            ? Vn(t[n], t[n], i, 1)
            : e === Gx && Hn(t[n], t[n], i, 1);
        }),
        t
      );
    })(),
    Kx = (function () {
      function t(t, e, n, i) {
        return (
          (this._tracks = {}),
          (this._trackKeys = []),
          (this._maxTime = 0),
          (this._started = 0),
          (this._clip = null),
          (this._target = t),
          (this._loop = e),
          e && i
            ? void a("Can' use additive animation on looped animation.")
            : ((this._additiveAnimators = i), void (this._allowDiscrete = n))
        );
      }
      return (
        (t.prototype.getMaxTime = function () {
          return this._maxTime;
        }),
        (t.prototype.getDelay = function () {
          return this._delay;
        }),
        (t.prototype.getLoop = function () {
          return this._loop;
        }),
        (t.prototype.getTarget = function () {
          return this._target;
        }),
        (t.prototype.changeTarget = function (t) {
          this._target = t;
        }),
        (t.prototype.when = function (t, e, n) {
          return this.whenWithKeys(t, e, w(e), n);
        }),
        (t.prototype.whenWithKeys = function (t, e, n, i) {
          for (var r = this._tracks, o = 0; o < n.length; o++) {
            var a = n[o],
              s = r[a];
            if (!s) {
              s = r[a] = new jx(a);
              var l = void 0,
                u = this._getAdditiveTrack(a);
              if (u) {
                var h = u.keyframes,
                  c = h[h.length - 1];
                (l = c && c.value), u.valType === Ux && l && (l = Xn(l));
              } else l = this._target[a];
              if (null == l) continue;
              t > 0 && s.addKeyframe(0, Un(l), i), this._trackKeys.push(a);
            }
            s.addKeyframe(t, Un(e[a]), i);
          }
          return (this._maxTime = Math.max(this._maxTime, t)), this;
        }),
        (t.prototype.pause = function () {
          this._clip.pause(), (this._paused = !0);
        }),
        (t.prototype.resume = function () {
          this._clip.resume(), (this._paused = !1);
        }),
        (t.prototype.isPaused = function () {
          return !!this._paused;
        }),
        (t.prototype.duration = function (t) {
          return (this._maxTime = t), (this._force = !0), this;
        }),
        (t.prototype._doneCallback = function () {
          this._setTracksFinished(), (this._clip = null);
          var t = this._doneCbs;
          if (t) for (var e = t.length, n = 0; e > n; n++) t[n].call(this);
        }),
        (t.prototype._abortedCallback = function () {
          this._setTracksFinished();
          var t = this.animation,
            e = this._abortedCbs;
          if ((t && t.removeClip(this._clip), (this._clip = null), e))
            for (var n = 0; n < e.length; n++) e[n].call(this);
        }),
        (t.prototype._setTracksFinished = function () {
          for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished();
        }),
        (t.prototype._getAdditiveTrack = function (t) {
          var e,
            n = this._additiveAnimators;
          if (n)
            for (var i = 0; i < n.length; i++) {
              var r = n[i].getTrack(t);
              r && (e = r);
            }
          return e;
        }),
        (t.prototype.start = function (t) {
          if (!(this._started > 0)) {
            this._started = 1;
            for (var e = this, n = [], i = this._maxTime || 0, r = 0; r < this._trackKeys.length; r++) {
              var o = this._trackKeys[r],
                a = this._tracks[o],
                s = this._getAdditiveTrack(o),
                l = a.keyframes,
                u = l.length;
              if ((a.prepare(i, s), a.needsAnimate()))
                if (!this._allowDiscrete && a.discrete) {
                  var h = l[u - 1];
                  h && (e._target[a.propName] = h.rawValue), a.setFinished();
                } else n.push(a);
            }
            if (n.length || this._force) {
              var c = new Ax({
                life: i,
                loop: this._loop,
                delay: this._delay || 0,
                onframe: function (t) {
                  e._started = 2;
                  var i = e._additiveAnimators;
                  if (i) {
                    for (var r = !1, o = 0; o < i.length; o++)
                      if (i[o]._clip) {
                        r = !0;
                        break;
                      }
                    r || (e._additiveAnimators = null);
                  }
                  for (var o = 0; o < n.length; o++) n[o].step(e._target, t);
                  var a = e._onframeCbs;
                  if (a) for (var o = 0; o < a.length; o++) a[o](e._target, t);
                },
                ondestroy: function () {
                  e._doneCallback();
                },
              });
              (this._clip = c), this.animation && this.animation.addClip(c), t && c.setEasing(t);
            } else this._doneCallback();
            return this;
          }
        }),
        (t.prototype.stop = function (t) {
          if (this._clip) {
            var e = this._clip;
            t && e.onframe(1), this._abortedCallback();
          }
        }),
        (t.prototype.delay = function (t) {
          return (this._delay = t), this;
        }),
        (t.prototype.during = function (t) {
          return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
        }),
        (t.prototype.done = function (t) {
          return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
        }),
        (t.prototype.aborted = function (t) {
          return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
        }),
        (t.prototype.getClip = function () {
          return this._clip;
        }),
        (t.prototype.getTrack = function (t) {
          return this._tracks[t];
        }),
        (t.prototype.getTracks = function () {
          var t = this;
          return y(this._trackKeys, function (e) {
            return t._tracks[e];
          });
        }),
        (t.prototype.stopTracks = function (t, e) {
          if (!t.length || !this._clip) return !0;
          for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
            var o = n[t[r]];
            o &&
              !o.isFinished() &&
              (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), o.setFinished());
          }
          for (var a = !0, r = 0; r < i.length; r++)
            if (!n[i[r]].isFinished()) {
              a = !1;
              break;
            }
          return a && this._abortedCallback(), a;
        }),
        (t.prototype.saveTo = function (t, e, n) {
          if (t) {
            e = e || this._trackKeys;
            for (var i = 0; i < e.length; i++) {
              var r = e[i],
                o = this._tracks[r];
              if (o && !o.isFinished()) {
                var a = o.keyframes,
                  s = a[n ? 0 : a.length - 1];
                s && (t[r] = Un(s.rawValue));
              }
            }
          }
        }),
        (t.prototype.__changeFinalValue = function (t, e) {
          e = e || w(t);
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              r = this._tracks[i];
            if (r) {
              var o = r.keyframes;
              if (o.length > 1) {
                var a = o.pop();
                r.addKeyframe(a.time, t[i]), r.prepare(this._maxTime, r.getAdditiveTrack());
              }
            }
          }
        }),
        t
      );
    })(),
    $x = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n._running = !1),
          (n._time = 0),
          (n._pausedTime = 0),
          (n._pauseStart = 0),
          (n._paused = !1),
          (e = e || {}),
          (n.stage = e.stage || {}),
          n
        );
      }
      return (
        e(n, t),
        (n.prototype.addClip = function (t) {
          t.animation && this.removeClip(t),
            this._head
              ? ((this._tail.next = t), (t.prev = this._tail), (t.next = null), (this._tail = t))
              : (this._head = this._tail = t),
            (t.animation = this);
        }),
        (n.prototype.addAnimator = function (t) {
          t.animation = this;
          var e = t.getClip();
          e && this.addClip(e);
        }),
        (n.prototype.removeClip = function (t) {
          if (t.animation) {
            var e = t.prev,
              n = t.next;
            e ? (e.next = n) : (this._head = n),
              n ? (n.prev = e) : (this._tail = e),
              (t.next = t.prev = t.animation = null);
          }
        }),
        (n.prototype.removeAnimator = function (t) {
          var e = t.getClip();
          e && this.removeClip(e), (t.animation = null);
        }),
        (n.prototype.update = function (t) {
          for (var e = jn() - this._pausedTime, n = e - this._time, i = this._head; i; ) {
            var r = i.next,
              o = i.step(e, n);
            o ? (i.ondestroy(), this.removeClip(i), (i = r)) : (i = r);
          }
          (this._time = e), t || (this.trigger('frame', n), this.stage.update && this.stage.update());
        }),
        (n.prototype._startLoop = function () {
          function t() {
            e._running && (yx(t), !e._paused && e.update());
          }
          var e = this;
          (this._running = !0), yx(t);
        }),
        (n.prototype.start = function () {
          this._running || ((this._time = jn()), (this._pausedTime = 0), this._startLoop());
        }),
        (n.prototype.stop = function () {
          this._running = !1;
        }),
        (n.prototype.pause = function () {
          this._paused || ((this._pauseStart = jn()), (this._paused = !0));
        }),
        (n.prototype.resume = function () {
          this._paused && ((this._pausedTime += jn() - this._pauseStart), (this._paused = !1));
        }),
        (n.prototype.clear = function () {
          for (var t = this._head; t; ) {
            var e = t.next;
            (t.prev = t.next = t.animation = null), (t = e);
          }
          this._head = this._tail = null;
        }),
        (n.prototype.isFinished = function () {
          return null == this._head;
        }),
        (n.prototype.animate = function (t, e) {
          (e = e || {}), this.start();
          var n = new Kx(t, e.loop);
          return this.addAnimator(n), n;
        }),
        n
      );
    })(q_),
    Qx = 300,
    Jx = f_.domSupported,
    tw = (function () {
      var t = [
          'click',
          'dblclick',
          'mousewheel',
          'wheel',
          'mouseout',
          'mouseup',
          'mousedown',
          'mousemove',
          'contextmenu',
        ],
        e = ['touchstart', 'touchend', 'touchmove'],
        n = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
        i = y(t, function (t) {
          var e = t.replace('mouse', 'pointer');
          return n.hasOwnProperty(e) ? e : t;
        });
      return { mouse: t, touch: e, pointer: i };
    })(),
    ew = { mouse: ['mousemove', 'mouseup'], pointer: ['pointermove', 'pointerup'] },
    nw = !1,
    iw = (function () {
      function t(t, e) {
        (this.stopPropagation = $),
          (this.stopImmediatePropagation = $),
          (this.preventDefault = $),
          (this.type = e.type),
          (this.target = this.currentTarget = t.dom),
          (this.pointerType = e.pointerType),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY);
      }
      return t;
    })(),
    rw = {
      mousedown: function (t) {
        (t = ke(this.dom, t)), (this.__mayPointerCapture = [t.zrX, t.zrY]), this.trigger('mousedown', t);
      },
      mousemove: function (t) {
        t = ke(this.dom, t);
        var e = this.__mayPointerCapture;
        !e || (t.zrX === e[0] && t.zrY === e[1]) || this.__togglePointerCapture(!0), this.trigger('mousemove', t);
      },
      mouseup: function (t) {
        (t = ke(this.dom, t)), this.__togglePointerCapture(!1), this.trigger('mouseup', t);
      },
      mouseout: function (t) {
        t = ke(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        ti(this, e) || (this.__pointerCapturing && (t.zrEventControl = 'no_globalout'), this.trigger('mouseout', t));
      },
      wheel: function (t) {
        (nw = !0), (t = ke(this.dom, t)), this.trigger('mousewheel', t);
      },
      mousewheel: function (t) {
        nw || ((t = ke(this.dom, t)), this.trigger('mousewheel', t));
      },
      touchstart: function (t) {
        (t = ke(this.dom, t)),
          Qn(t),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, 'start'),
          rw.mousemove.call(this, t),
          rw.mousedown.call(this, t);
      },
      touchmove: function (t) {
        (t = ke(this.dom, t)), Qn(t), this.handler.processGesture(t, 'change'), rw.mousemove.call(this, t);
      },
      touchend: function (t) {
        (t = ke(this.dom, t)),
          Qn(t),
          this.handler.processGesture(t, 'end'),
          rw.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < Qx && rw.click.call(this, t);
      },
      pointerdown: function (t) {
        rw.mousedown.call(this, t);
      },
      pointermove: function (t) {
        Kn(t) || rw.mousemove.call(this, t);
      },
      pointerup: function (t) {
        rw.mouseup.call(this, t);
      },
      pointerout: function (t) {
        Kn(t) || rw.mouseout.call(this, t);
      },
    };
  v(['click', 'dblclick', 'contextmenu'], function (t) {
    rw[t] = function (e) {
      (e = ke(this.dom, e)), this.trigger(t, e);
    };
  });
  var ow = {
      pointermove: function (t) {
        Kn(t) || ow.mousemove.call(this, t);
      },
      pointerup: function (t) {
        ow.mouseup.call(this, t);
      },
      mousemove: function (t) {
        this.trigger('mousemove', t);
      },
      mouseup: function (t) {
        var e = this.__pointerCapturing;
        this.__togglePointerCapture(!1),
          this.trigger('mouseup', t),
          e && ((t.zrEventControl = 'only_globalout'), this.trigger('mouseout', t));
      },
    },
    aw = (function () {
      function t(t, e) {
        (this.mounted = {}),
          (this.listenerOpts = {}),
          (this.touching = !1),
          (this.domTarget = t),
          (this.domHandlers = e);
      }
      return t;
    })(),
    sw = (function (t) {
      function n(e, n) {
        var i = t.call(this) || this;
        return (
          (i.__pointerCapturing = !1),
          (i.dom = e),
          (i.painterRoot = n),
          (i._localHandlerScope = new aw(e, rw)),
          Jx && (i._globalHandlerScope = new aw(document, ow)),
          ei(i, i._localHandlerScope),
          i
        );
      }
      return (
        e(n, t),
        (n.prototype.dispose = function () {
          ri(this._localHandlerScope), Jx && ri(this._globalHandlerScope);
        }),
        (n.prototype.setCursor = function (t) {
          this.dom.style && (this.dom.style.cursor = t || 'default');
        }),
        (n.prototype.__togglePointerCapture = function (t) {
          if (((this.__mayPointerCapture = null), Jx && +this.__pointerCapturing ^ +t)) {
            this.__pointerCapturing = t;
            var e = this._globalHandlerScope;
            t ? ni(this, e) : ri(e);
          }
        }),
        n
      );
    })(q_),
    lw = 1;
  f_.hasGlobalWindow &&
    (lw = Math.max(
      window.devicePixelRatio || (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI) || 1,
      1,
    ));
  var uw = lw,
    hw = 0.4,
    cw = '#333',
    pw = '#ccc',
    dw = '#eee',
    fw = (Object.freeze || Object)({
      create: oi,
      identity: ai,
      copy: si,
      mul: li,
      translate: ui,
      rotate: hi,
      scale: ci,
      invert: pi,
      clone: di,
    }),
    gw = ai,
    vw = 5e-5,
    yw = [],
    mw = [],
    _w = oi(),
    xw = Math.abs,
    ww = (function () {
      function t() {}
      return (
        (t.prototype.getLocalTransform = function (e) {
          return t.getLocalTransform(this, e);
        }),
        (t.prototype.setPosition = function (t) {
          (this.x = t[0]), (this.y = t[1]);
        }),
        (t.prototype.setScale = function (t) {
          (this.scaleX = t[0]), (this.scaleY = t[1]);
        }),
        (t.prototype.setSkew = function (t) {
          (this.skewX = t[0]), (this.skewY = t[1]);
        }),
        (t.prototype.setOrigin = function (t) {
          (this.originX = t[0]), (this.originY = t[1]);
        }),
        (t.prototype.needLocalTransform = function () {
          return (
            fi(this.rotation) ||
            fi(this.x) ||
            fi(this.y) ||
            fi(this.scaleX - 1) ||
            fi(this.scaleY - 1) ||
            fi(this.skewX) ||
            fi(this.skewY)
          );
        }),
        (t.prototype.updateTransform = function () {
          var t = this.parent && this.parent.transform,
            e = this.needLocalTransform(),
            n = this.transform;
          return e || t
            ? ((n = n || oi()),
              e ? this.getLocalTransform(n) : gw(n),
              t && (e ? li(n, t, n) : si(n, t)),
              (this.transform = n),
              void this._resolveGlobalScaleRatio(n))
            : void (n && gw(n));
        }),
        (t.prototype._resolveGlobalScaleRatio = function (t) {
          var e = this.globalScaleRatio;
          if (null != e && 1 !== e) {
            this.getGlobalScale(yw);
            var n = yw[0] < 0 ? -1 : 1,
              i = yw[1] < 0 ? -1 : 1,
              r = ((yw[0] - n) * e + n) / yw[0] || 0,
              o = ((yw[1] - i) * e + i) / yw[1] || 0;
            (t[0] *= r), (t[1] *= r), (t[2] *= o), (t[3] *= o);
          }
          (this.invTransform = this.invTransform || oi()), pi(this.invTransform, t);
        }),
        (t.prototype.getComputedTransform = function () {
          for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
          for (; (t = e.pop()); ) t.updateTransform();
          return this.transform;
        }),
        (t.prototype.setLocalTransform = function (t) {
          if (t) {
            var e = t[0] * t[0] + t[1] * t[1],
              n = t[2] * t[2] + t[3] * t[3],
              i = Math.atan2(t[1], t[0]),
              r = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
            (n = Math.sqrt(n) * Math.cos(r)),
              (e = Math.sqrt(e)),
              (this.skewX = r),
              (this.skewY = 0),
              (this.rotation = -i),
              (this.x = +t[4]),
              (this.y = +t[5]),
              (this.scaleX = e),
              (this.scaleY = n),
              (this.originX = 0),
              (this.originY = 0);
          }
        }),
        (t.prototype.decomposeTransform = function () {
          if (this.transform) {
            var t = this.parent,
              e = this.transform;
            t && t.transform && (li(mw, t.invTransform, e), (e = mw));
            var n = this.originX,
              i = this.originY;
            (n || i) && ((_w[4] = n), (_w[5] = i), li(mw, e, _w), (mw[4] -= n), (mw[5] -= i), (e = mw)),
              this.setLocalTransform(e);
          }
        }),
        (t.prototype.getGlobalScale = function (t) {
          var e = this.transform;
          return (
            (t = t || []),
            e
              ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
                (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t)
              : ((t[0] = 1), (t[1] = 1), t)
          );
        }),
        (t.prototype.transformCoordToLocal = function (t, e) {
          var n = [t, e],
            i = this.invTransform;
          return i && ve(n, n, i), n;
        }),
        (t.prototype.transformCoordToGlobal = function (t, e) {
          var n = [t, e],
            i = this.transform;
          return i && ve(n, n, i), n;
        }),
        (t.prototype.getLineScale = function () {
          var t = this.transform;
          return t && xw(t[0] - 1) > 1e-10 && xw(t[3] - 1) > 1e-10 ? Math.sqrt(xw(t[0] * t[3] - t[2] * t[1])) : 1;
        }),
        (t.prototype.copyTransform = function (t) {
          gi(this, t);
        }),
        (t.getLocalTransform = function (t, e) {
          e = e || [];
          var n = t.originX || 0,
            i = t.originY || 0,
            r = t.scaleX,
            o = t.scaleY,
            a = t.anchorX,
            s = t.anchorY,
            l = t.rotation || 0,
            u = t.x,
            h = t.y,
            c = t.skewX ? Math.tan(t.skewX) : 0,
            p = t.skewY ? Math.tan(-t.skewY) : 0;
          if (n || i || a || s) {
            var d = n + a,
              f = i + s;
            (e[4] = -d * r - c * f * o), (e[5] = -f * o - p * d * r);
          } else e[4] = e[5] = 0;
          return (
            (e[0] = r),
            (e[3] = o),
            (e[1] = p * r),
            (e[2] = c * o),
            l && hi(e, e, l),
            (e[4] += n + u),
            (e[5] += i + h),
            e
          );
        }),
        (t.initDefaultProps = (function () {
          var e = t.prototype;
          (e.scaleX = e.scaleY = e.globalScaleRatio = 1),
            (e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0);
        })()),
        t
      );
    })(),
    bw = ['x', 'y', 'originX', 'originY', 'anchorX', 'anchorY', 'rotation', 'scaleX', 'scaleY', 'skewX', 'skewY'],
    Sw = (function () {
      function t(t, e) {
        (this.x = t || 0), (this.y = e || 0);
      }
      return (
        (t.prototype.copy = function (t) {
          return (this.x = t.x), (this.y = t.y), this;
        }),
        (t.prototype.clone = function () {
          return new t(this.x, this.y);
        }),
        (t.prototype.set = function (t, e) {
          return (this.x = t), (this.y = e), this;
        }),
        (t.prototype.equal = function (t) {
          return t.x === this.x && t.y === this.y;
        }),
        (t.prototype.add = function (t) {
          return (this.x += t.x), (this.y += t.y), this;
        }),
        (t.prototype.scale = function (t) {
          (this.x *= t), (this.y *= t);
        }),
        (t.prototype.scaleAndAdd = function (t, e) {
          (this.x += t.x * e), (this.y += t.y * e);
        }),
        (t.prototype.sub = function (t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        }),
        (t.prototype.dot = function (t) {
          return this.x * t.x + this.y * t.y;
        }),
        (t.prototype.len = function () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }),
        (t.prototype.lenSquare = function () {
          return this.x * this.x + this.y * this.y;
        }),
        (t.prototype.normalize = function () {
          var t = this.len();
          return (this.x /= t), (this.y /= t), this;
        }),
        (t.prototype.distance = function (t) {
          var e = this.x - t.x,
            n = this.y - t.y;
          return Math.sqrt(e * e + n * n);
        }),
        (t.prototype.distanceSquare = function (t) {
          var e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }),
        (t.prototype.negate = function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        }),
        (t.prototype.transform = function (t) {
          if (t) {
            var e = this.x,
              n = this.y;
            return (this.x = t[0] * e + t[2] * n + t[4]), (this.y = t[1] * e + t[3] * n + t[5]), this;
          }
        }),
        (t.prototype.toArray = function (t) {
          return (t[0] = this.x), (t[1] = this.y), t;
        }),
        (t.prototype.fromArray = function (t) {
          (this.x = t[0]), (this.y = t[1]);
        }),
        (t.set = function (t, e, n) {
          (t.x = e), (t.y = n);
        }),
        (t.copy = function (t, e) {
          (t.x = e.x), (t.y = e.y);
        }),
        (t.len = function (t) {
          return Math.sqrt(t.x * t.x + t.y * t.y);
        }),
        (t.lenSquare = function (t) {
          return t.x * t.x + t.y * t.y;
        }),
        (t.dot = function (t, e) {
          return t.x * e.x + t.y * e.y;
        }),
        (t.add = function (t, e, n) {
          (t.x = e.x + n.x), (t.y = e.y + n.y);
        }),
        (t.sub = function (t, e, n) {
          (t.x = e.x - n.x), (t.y = e.y - n.y);
        }),
        (t.scale = function (t, e, n) {
          (t.x = e.x * n), (t.y = e.y * n);
        }),
        (t.scaleAndAdd = function (t, e, n, i) {
          (t.x = e.x + n.x * i), (t.y = e.y + n.y * i);
        }),
        (t.lerp = function (t, e, n, i) {
          var r = 1 - i;
          (t.x = r * e.x + i * n.x), (t.y = r * e.y + i * n.y);
        }),
        t
      );
    })(),
    Mw = Math.min,
    Tw = Math.max,
    Cw = new Sw(),
    Iw = new Sw(),
    Dw = new Sw(),
    kw = new Sw(),
    Aw = new Sw(),
    Pw = new Sw(),
    Lw = (function () {
      function t(t, e, n, i) {
        0 > n && ((t += n), (n = -n)),
          0 > i && ((e += i), (i = -i)),
          (this.x = t),
          (this.y = e),
          (this.width = n),
          (this.height = i);
      }
      return (
        (t.prototype.union = function (t) {
          var e = Mw(t.x, this.x),
            n = Mw(t.y, this.y);
          (this.width =
            isFinite(this.x) && isFinite(this.width) ? Tw(t.x + t.width, this.x + this.width) - e : t.width),
            (this.height =
              isFinite(this.y) && isFinite(this.height) ? Tw(t.y + t.height, this.y + this.height) - n : t.height),
            (this.x = e),
            (this.y = n);
        }),
        (t.prototype.applyTransform = function (e) {
          t.applyTransform(this, this, e);
        }),
        (t.prototype.calculateTransform = function (t) {
          var e = this,
            n = t.width / e.width,
            i = t.height / e.height,
            r = oi();
          return ui(r, r, [-e.x, -e.y]), ci(r, r, [n, i]), ui(r, r, [t.x, t.y]), r;
        }),
        (t.prototype.intersect = function (e, n) {
          if (!e) return !1;
          e instanceof t || (e = t.create(e));
          var i = this,
            r = i.x,
            o = i.x + i.width,
            a = i.y,
            s = i.y + i.height,
            l = e.x,
            u = e.x + e.width,
            h = e.y,
            c = e.y + e.height,
            p = !(l > o || r > u || h > s || a > c);
          if (n) {
            var d = 1 / 0,
              f = 0,
              g = Math.abs(o - l),
              v = Math.abs(u - r),
              y = Math.abs(s - h),
              m = Math.abs(c - a),
              _ = Math.min(g, v),
              x = Math.min(y, m);
            l > o || r > u
              ? _ > f && ((f = _), v > g ? Sw.set(Pw, -g, 0) : Sw.set(Pw, v, 0))
              : d > _ && ((d = _), v > g ? Sw.set(Aw, g, 0) : Sw.set(Aw, -v, 0)),
              h > s || a > c
                ? x > f && ((f = x), m > y ? Sw.set(Pw, 0, -y) : Sw.set(Pw, 0, m))
                : d > _ && ((d = _), m > y ? Sw.set(Aw, 0, y) : Sw.set(Aw, 0, -m));
          }
          return n && Sw.copy(n, p ? Aw : Pw), p;
        }),
        (t.prototype.contain = function (t, e) {
          var n = this;
          return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        }),
        (t.prototype.clone = function () {
          return new t(this.x, this.y, this.width, this.height);
        }),
        (t.prototype.copy = function (e) {
          t.copy(this, e);
        }),
        (t.prototype.plain = function () {
          return { x: this.x, y: this.y, width: this.width, height: this.height };
        }),
        (t.prototype.isFinite = function () {
          return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
        }),
        (t.prototype.isZero = function () {
          return 0 === this.width || 0 === this.height;
        }),
        (t.create = function (e) {
          return new t(e.x, e.y, e.width, e.height);
        }),
        (t.copy = function (t, e) {
          (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
        }),
        (t.applyTransform = function (e, n, i) {
          if (!i) return void (e !== n && t.copy(e, n));
          if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
            var r = i[0],
              o = i[3],
              a = i[4],
              s = i[5];
            return (
              (e.x = n.x * r + a),
              (e.y = n.y * o + s),
              (e.width = n.width * r),
              (e.height = n.height * o),
              e.width < 0 && ((e.x += e.width), (e.width = -e.width)),
              void (e.height < 0 && ((e.y += e.height), (e.height = -e.height)))
            );
          }
          (Cw.x = Dw.x = n.x),
            (Cw.y = kw.y = n.y),
            (Iw.x = kw.x = n.x + n.width),
            (Iw.y = Dw.y = n.y + n.height),
            Cw.transform(i),
            kw.transform(i),
            Iw.transform(i),
            Dw.transform(i),
            (e.x = Mw(Cw.x, Iw.x, Dw.x, kw.x)),
            (e.y = Mw(Cw.y, Iw.y, Dw.y, kw.y));
          var l = Tw(Cw.x, Iw.x, Dw.x, kw.x),
            u = Tw(Cw.y, Iw.y, Dw.y, kw.y);
          (e.width = l - e.x), (e.height = u - e.y);
        }),
        t
      );
    })(),
    Ow = {},
    Rw = '__zr_normal__',
    Bw = bw.concat(['ignore']),
    zw = m(
      bw,
      function (t, e) {
        return (t[e] = !0), t;
      },
      { ignore: !1 },
    ),
    Ew = {},
    Nw = new Lw(0, 0, 0, 0),
    Fw = (function () {
      function t(t) {
        (this.id = o()), (this.animators = []), (this.currentStates = []), (this.states = {}), this._init(t);
      }
      return (
        (t.prototype._init = function (t) {
          this.attr(t);
        }),
        (t.prototype.drift = function (t, e) {
          switch (this.draggable) {
            case 'horizontal':
              e = 0;
              break;
            case 'vertical':
              t = 0;
          }
          var n = this.transform;
          n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
            (n[4] += t),
            (n[5] += e),
            this.decomposeTransform(),
            this.markRedraw();
        }),
        (t.prototype.beforeUpdate = function () {}),
        (t.prototype.afterUpdate = function () {}),
        (t.prototype.update = function () {
          this.updateTransform(), this.__dirty && this.updateInnerText();
        }),
        (t.prototype.updateInnerText = function (t) {
          var e = this._textContent;
          if (e && (!e.ignore || t)) {
            this.textConfig || (this.textConfig = {});
            var n = this.textConfig,
              i = n.local,
              r = e.innerTransformable,
              o = void 0,
              a = void 0,
              s = !1;
            r.parent = i ? this : null;
            var l = !1;
            if ((r.copyTransform(e), null != n.position)) {
              var u = Nw;
              u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()),
                i || u.applyTransform(this.transform),
                this.calculateTextPosition ? this.calculateTextPosition(Ew, n, u) : Si(Ew, n, u),
                (r.x = Ew.x),
                (r.y = Ew.y),
                (o = Ew.align),
                (a = Ew.verticalAlign);
              var h = n.origin;
              if (h && null != n.rotation) {
                var c = void 0,
                  p = void 0;
                'center' === h
                  ? ((c = 0.5 * u.width), (p = 0.5 * u.height))
                  : ((c = bi(h[0], u.width)), (p = bi(h[1], u.height))),
                  (l = !0),
                  (r.originX = -r.x + c + (i ? 0 : u.x)),
                  (r.originY = -r.y + p + (i ? 0 : u.y));
              }
            }
            null != n.rotation && (r.rotation = n.rotation);
            var d = n.offset;
            d && ((r.x += d[0]), (r.y += d[1]), l || ((r.originX = -d[0]), (r.originY = -d[1])));
            var f = null == n.inside ? 'string' == typeof n.position && n.position.indexOf('inside') >= 0 : n.inside,
              g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
              v = void 0,
              y = void 0,
              m = void 0;
            f && this.canBeInsideText()
              ? ((v = n.insideFill),
                (y = n.insideStroke),
                (null == v || 'auto' === v) && (v = this.getInsideTextFill()),
                (null == y || 'auto' === y) && ((y = this.getInsideTextStroke(v)), (m = !0)))
              : ((v = n.outsideFill),
                (y = n.outsideStroke),
                (null == v || 'auto' === v) && (v = this.getOutsideFill()),
                (null == y || 'auto' === y) && ((y = this.getOutsideStroke(v)), (m = !0))),
              (v = v || '#000'),
              (v !== g.fill || y !== g.stroke || m !== g.autoStroke || o !== g.align || a !== g.verticalAlign) &&
                ((s = !0),
                (g.fill = v),
                (g.stroke = y),
                (g.autoStroke = m),
                (g.align = o),
                (g.verticalAlign = a),
                e.setDefaultTextStyle(g)),
              (e.__dirty |= px),
              s && e.dirtyStyle(!0);
          }
        }),
        (t.prototype.canBeInsideText = function () {
          return !0;
        }),
        (t.prototype.getInsideTextFill = function () {
          return '#fff';
        }),
        (t.prototype.getInsideTextStroke = function () {
          return '#000';
        }),
        (t.prototype.getOutsideFill = function () {
          return this.__zr && this.__zr.isDarkMode() ? pw : cw;
        }),
        (t.prototype.getOutsideStroke = function () {
          var t = this.__zr && this.__zr.getBackgroundColor(),
            e = 'string' == typeof t && Sn(t);
          e || (e = [255, 255, 255, 1]);
          for (var n = e[3], i = this.__zr.isDarkMode(), r = 0; 3 > r; r++) e[r] = e[r] * n + (i ? 0 : 255) * (1 - n);
          return (e[3] = 1), Ln(e, 'rgba');
        }),
        (t.prototype.traverse = function () {}),
        (t.prototype.attrKV = function (t, e) {
          'textConfig' === t
            ? this.setTextConfig(e)
            : 'textContent' === t
            ? this.setTextContent(e)
            : 'clipPath' === t
            ? this.setClipPath(e)
            : 'extra' === t
            ? ((this.extra = this.extra || {}), h(this.extra, e))
            : (this[t] = e);
        }),
        (t.prototype.hide = function () {
          (this.ignore = !0), this.markRedraw();
        }),
        (t.prototype.show = function () {
          (this.ignore = !1), this.markRedraw();
        }),
        (t.prototype.attr = function (t, e) {
          if ('string' == typeof t) this.attrKV(t, e);
          else if (k(t))
            for (var n = t, i = w(n), r = 0; r < i.length; r++) {
              var o = i[r];
              this.attrKV(o, t[o]);
            }
          return this.markRedraw(), this;
        }),
        (t.prototype.saveCurrentToNormalState = function (t) {
          this._innerSaveToNormal(t);
          for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
            var i = this.animators[n],
              r = i.__fromStateTransition;
            if (!(i.getLoop() || (r && r !== Rw))) {
              var o = i.targetName,
                a = o ? e[o] : e;
              i.saveTo(a);
            }
          }
        }),
        (t.prototype._innerSaveToNormal = function (t) {
          var e = this._normalState;
          e || (e = this._normalState = {}),
            t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
            this._savePrimaryToNormal(t, e, Bw);
        }),
        (t.prototype._savePrimaryToNormal = function (t, e, n) {
          for (var i = 0; i < n.length; i++) {
            var r = n[i];
            null == t[r] || r in e || (e[r] = this[r]);
          }
        }),
        (t.prototype.hasState = function () {
          return this.currentStates.length > 0;
        }),
        (t.prototype.getState = function (t) {
          return this.states[t];
        }),
        (t.prototype.ensureState = function (t) {
          var e = this.states;
          return e[t] || (e[t] = {}), e[t];
        }),
        (t.prototype.clearStates = function (t) {
          this.useState(Rw, !1, t);
        }),
        (t.prototype.useState = function (t, e, n, i) {
          var r = t === Rw,
            o = this.hasState();
          if (o || !r) {
            var s = this.currentStates,
              l = this.stateTransition;
            if (!(p(s, t) >= 0) || (!e && 1 !== s.length)) {
              var u;
              if (
                (this.stateProxy && !r && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !r)
              )
                return void a('State ' + t + ' not exists.');
              r || this.saveCurrentToNormalState(u);
              var h = !!((u && u.hoverLayer) || i);
              h && this._toggleHoverLayerFlag(!0),
                this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
              var c = this._textContent,
                d = this._textGuide;
              return (
                c && c.useState(t, e, n, h),
                d && d.useState(t, e, n, h),
                r
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !h && this.__inHover && (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~px)),
                u
              );
            }
          }
        }),
        (t.prototype.useStates = function (t, e, n) {
          if (t.length) {
            var i = [],
              r = this.currentStates,
              o = t.length,
              a = o === r.length;
            if (a)
              for (var s = 0; o > s; s++)
                if (t[s] !== r[s]) {
                  a = !1;
                  break;
                }
            if (a) return;
            for (var s = 0; o > s; s++) {
              var l = t[s],
                u = void 0;
              this.stateProxy && (u = this.stateProxy(l, t)), u || (u = this.states[l]), u && i.push(u);
            }
            var h = i[o - 1],
              c = !!((h && h.hoverLayer) || n);
            c && this._toggleHoverLayerFlag(!0);
            var p = this._mergeStates(i),
              d = this.stateTransition;
            this.saveCurrentToNormalState(p),
              this._applyStateObj(
                t.join(','),
                p,
                this._normalState,
                !1,
                !e && !this.__inHover && d && d.duration > 0,
                d,
              );
            var f = this._textContent,
              g = this._textGuide;
            f && f.useStates(t, e, c),
              g && g.useStates(t, e, c),
              this._updateAnimationTargets(),
              (this.currentStates = t.slice()),
              this.markRedraw(),
              !c && this.__inHover && (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~px));
          } else this.clearStates();
        }),
        (t.prototype._updateAnimationTargets = function () {
          for (var t = 0; t < this.animators.length; t++) {
            var e = this.animators[t];
            e.targetName && e.changeTarget(this[e.targetName]);
          }
        }),
        (t.prototype.removeState = function (t) {
          var e = p(this.currentStates, t);
          if (e >= 0) {
            var n = this.currentStates.slice();
            n.splice(e, 1), this.useStates(n);
          }
        }),
        (t.prototype.replaceState = function (t, e, n) {
          var i = this.currentStates.slice(),
            r = p(i, t),
            o = p(i, e) >= 0;
          r >= 0 ? (o ? i.splice(r, 1) : (i[r] = e)) : n && !o && i.push(e), this.useStates(i);
        }),
        (t.prototype.toggleState = function (t, e) {
          e ? this.useState(t, !0) : this.removeState(t);
        }),
        (t.prototype._mergeStates = function (t) {
          for (var e, n = {}, i = 0; i < t.length; i++) {
            var r = t[i];
            h(n, r), r.textConfig && ((e = e || {}), h(e, r.textConfig));
          }
          return e && (n.textConfig = e), n;
        }),
        (t.prototype._applyStateObj = function (t, e, n, i, r, o) {
          var a = !(e && i);
          e && e.textConfig
            ? ((this.textConfig = h({}, i ? this.textConfig : n.textConfig)), h(this.textConfig, e.textConfig))
            : a && n.textConfig && (this.textConfig = n.textConfig);
          for (var s = {}, l = !1, u = 0; u < Bw.length; u++) {
            var c = Bw[u],
              p = r && zw[c];
            e && null != e[c]
              ? p
                ? ((l = !0), (s[c] = e[c]))
                : (this[c] = e[c])
              : a && null != n[c] && (p ? ((l = !0), (s[c] = n[c])) : (this[c] = n[c]));
          }
          if (!r)
            for (var u = 0; u < this.animators.length; u++) {
              var d = this.animators[u],
                f = d.targetName;
              d.getLoop() || d.__changeFinalValue(f ? (e || n)[f] : e || n);
            }
          l && this._transitionState(t, s, o);
        }),
        (t.prototype._attachComponent = function (t) {
          if ((!t.__zr || t.__hostTarget) && t !== this) {
            var e = this.__zr;
            e && t.addSelfToZr(e), (t.__zr = e), (t.__hostTarget = this);
          }
        }),
        (t.prototype._detachComponent = function (t) {
          t.__zr && t.removeSelfFromZr(t.__zr), (t.__zr = null), (t.__hostTarget = null);
        }),
        (t.prototype.getClipPath = function () {
          return this._clipPath;
        }),
        (t.prototype.setClipPath = function (t) {
          this._clipPath && this._clipPath !== t && this.removeClipPath(),
            this._attachComponent(t),
            (this._clipPath = t),
            this.markRedraw();
        }),
        (t.prototype.removeClipPath = function () {
          var t = this._clipPath;
          t && (this._detachComponent(t), (this._clipPath = null), this.markRedraw());
        }),
        (t.prototype.getTextContent = function () {
          return this._textContent;
        }),
        (t.prototype.setTextContent = function (t) {
          var e = this._textContent;
          e !== t &&
            (e && e !== t && this.removeTextContent(),
            (t.innerTransformable = new ww()),
            this._attachComponent(t),
            (this._textContent = t),
            this.markRedraw());
        }),
        (t.prototype.setTextConfig = function (t) {
          this.textConfig || (this.textConfig = {}), h(this.textConfig, t), this.markRedraw();
        }),
        (t.prototype.removeTextConfig = function () {
          (this.textConfig = null), this.markRedraw();
        }),
        (t.prototype.removeTextContent = function () {
          var t = this._textContent;
          t &&
            ((t.innerTransformable = null),
            this._detachComponent(t),
            (this._textContent = null),
            (this._innerTextDefaultStyle = null),
            this.markRedraw());
        }),
        (t.prototype.getTextGuideLine = function () {
          return this._textGuide;
        }),
        (t.prototype.setTextGuideLine = function (t) {
          this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
            this._attachComponent(t),
            (this._textGuide = t),
            this.markRedraw();
        }),
        (t.prototype.removeTextGuideLine = function () {
          var t = this._textGuide;
          t && (this._detachComponent(t), (this._textGuide = null), this.markRedraw());
        }),
        (t.prototype.markRedraw = function () {
          this.__dirty |= px;
          var t = this.__zr;
          t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
        }),
        (t.prototype.dirty = function () {
          this.markRedraw();
        }),
        (t.prototype._toggleHoverLayerFlag = function (t) {
          this.__inHover = t;
          var e = this._textContent,
            n = this._textGuide;
          e && (e.__inHover = t), n && (n.__inHover = t);
        }),
        (t.prototype.addSelfToZr = function (t) {
          if (this.__zr !== t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this._clipPath && this._clipPath.addSelfToZr(t),
              this._textContent && this._textContent.addSelfToZr(t),
              this._textGuide && this._textGuide.addSelfToZr(t);
          }
        }),
        (t.prototype.removeSelfFromZr = function (t) {
          if (this.__zr) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this._clipPath && this._clipPath.removeSelfFromZr(t),
              this._textContent && this._textContent.removeSelfFromZr(t),
              this._textGuide && this._textGuide.removeSelfFromZr(t);
          }
        }),
        (t.prototype.animate = function (t, e, n) {
          var i = t ? this[t] : this,
            r = new Kx(i, e, n);
          return t && (r.targetName = t), this.addAnimator(r, t), r;
        }),
        (t.prototype.addAnimator = function (t, e) {
          var n = this.__zr,
            i = this;
          t
            .during(function () {
              i.updateDuringAnimation(e);
            })
            .done(function () {
              var e = i.animators,
                n = p(e, t);
              n >= 0 && e.splice(n, 1);
            }),
            this.animators.push(t),
            n && n.animation.addAnimator(t),
            n && n.wakeUp();
        }),
        (t.prototype.updateDuringAnimation = function () {
          this.markRedraw();
        }),
        (t.prototype.stopAnimation = function (t, e) {
          for (var n = this.animators, i = n.length, r = [], o = 0; i > o; o++) {
            var a = n[o];
            t && t !== a.scope ? r.push(a) : a.stop(e);
          }
          return (this.animators = r), this;
        }),
        (t.prototype.animateTo = function (t, e, n) {
          Mi(this, t, e, n);
        }),
        (t.prototype.animateFrom = function (t, e, n) {
          Mi(this, t, e, n, !0);
        }),
        (t.prototype._transitionState = function (t, e, n, i) {
          for (var r = Mi(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t;
        }),
        (t.prototype.getBoundingRect = function () {
          return null;
        }),
        (t.prototype.getPaintRect = function () {
          return null;
        }),
        (t.initDefaultProps = (function () {
          function e(t, e, i, r) {
            function o(t, e) {
              Object.defineProperty(e, 0, {
                get: function () {
                  return t[i];
                },
                set: function (e) {
                  t[i] = e;
                },
              }),
                Object.defineProperty(e, 1, {
                  get: function () {
                    return t[r];
                  },
                  set: function (e) {
                    t[r] = e;
                  },
                });
            }
            Object.defineProperty(n, t, {
              get: function () {
                if (!this[e]) {
                  var t = (this[e] = []);
                  o(this, t);
                }
                return this[e];
              },
              set: function (t) {
                (this[i] = t[0]), (this[r] = t[1]), (this[e] = t), o(this, t);
              },
            });
          }
          var n = t.prototype;
          (n.type = 'element'),
            (n.name = ''),
            (n.ignore = n.silent = n.isGroup = n.draggable = n.dragging = n.ignoreClip = n.__inHover = !1),
            (n.__dirty = px),
            Object.defineProperty &&
              (e('position', '_legacyPos', 'x', 'y'),
              e('scale', '_legacyScale', 'scaleX', 'scaleY'),
              e('origin', '_legacyOrigin', 'originX', 'originY'));
        })()),
        t
      );
    })();
  f(Fw, q_), f(Fw, ww);
  var Vw = (function (t) {
    function n(e) {
      var n = t.call(this) || this;
      return (n.isGroup = !0), (n._children = []), n.attr(e), n;
    }
    return (
      e(n, t),
      (n.prototype.childrenRef = function () {
        return this._children;
      }),
      (n.prototype.children = function () {
        return this._children.slice();
      }),
      (n.prototype.childAt = function (t) {
        return this._children[t];
      }),
      (n.prototype.childOfName = function (t) {
        for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
      }),
      (n.prototype.childCount = function () {
        return this._children.length;
      }),
      (n.prototype.add = function (t) {
        return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
      }),
      (n.prototype.addBefore = function (t, e) {
        if (t && t !== this && t.parent !== this && e && e.parent === this) {
          var n = this._children,
            i = n.indexOf(e);
          i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
        }
        return this;
      }),
      (n.prototype.replace = function (t, e) {
        var n = p(this._children, t);
        return n >= 0 && this.replaceAt(e, n), this;
      }),
      (n.prototype.replaceAt = function (t, e) {
        var n = this._children,
          i = n[e];
        if (t && t !== this && t.parent !== this && t !== i) {
          (n[e] = t), (i.parent = null);
          var r = this.__zr;
          r && i.removeSelfFromZr(r), this._doAdd(t);
        }
        return this;
      }),
      (n.prototype._doAdd = function (t) {
        t.parent && t.parent.remove(t), (t.parent = this);
        var e = this.__zr;
        e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
      }),
      (n.prototype.remove = function (t) {
        var e = this.__zr,
          n = this._children,
          i = p(n, t);
        return 0 > i ? this : (n.splice(i, 1), (t.parent = null), e && t.removeSelfFromZr(e), e && e.refresh(), this);
      }),
      (n.prototype.removeAll = function () {
        for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
          var i = t[n];
          e && i.removeSelfFromZr(e), (i.parent = null);
        }
        return (t.length = 0), this;
      }),
      (n.prototype.eachChild = function (t, e) {
        for (var n = this._children, i = 0; i < n.length; i++) {
          var r = n[i];
          t.call(e, r, i);
        }
        return this;
      }),
      (n.prototype.traverse = function (t, e) {
        for (var n = 0; n < this._children.length; n++) {
          var i = this._children[n],
            r = t.call(e, i);
          i.isGroup && !r && i.traverse(t, e);
        }
        return this;
      }),
      (n.prototype.addSelfToZr = function (e) {
        t.prototype.addSelfToZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) {
          var i = this._children[n];
          i.addSelfToZr(e);
        }
      }),
      (n.prototype.removeSelfFromZr = function (e) {
        t.prototype.removeSelfFromZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) {
          var i = this._children[n];
          i.removeSelfFromZr(e);
        }
      }),
      (n.prototype.getBoundingRect = function (t) {
        for (var e = new Lw(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
          var a = n[o];
          if (!a.ignore && !a.invisible) {
            var s = a.getBoundingRect(),
              l = a.getLocalTransform(i);
            l ? (Lw.applyTransform(e, s, l), (r = r || e.clone()), r.union(e)) : ((r = r || s.clone()), r.union(s));
          }
        }
        return r || e;
      }),
      n
    );
  })(Fw);
  Vw.prototype.type = 'group';
  var Hw = {},
    Ww = {},
    Gw = (function () {
      function t(t, e, n) {
        var i = this;
        (this._sleepAfterStill = 10),
          (this._stillFrameAccum = 0),
          (this._needsRefresh = !0),
          (this._needsRefreshHover = !0),
          (this._darkMode = !1),
          (n = n || {}),
          (this.dom = e),
          (this.id = t);
        var r = new vx(),
          o = n.renderer || 'canvas';
        Hw[o] || (o = w(Hw)[0]), (n.useDirtyRect = null == n.useDirtyRect ? !1 : n.useDirtyRect);
        var a = new Hw[o](e, r, n, t),
          s = n.ssr || a.ssrOnly;
        (this.storage = r), (this.painter = a);
        var l = f_.node || f_.worker || s ? null : new sw(a.getViewportRoot(), a.root);
        (this.handler = new lx(r, a, l, a.root)),
          (this.animation = new $x({
            stage: {
              update: s
                ? null
                : function () {
                    return i._flush(!0);
                  },
            },
          })),
          s || this.animation.start();
      }
      return (
        (t.prototype.add = function (t) {
          t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
        }),
        (t.prototype.remove = function (t) {
          t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
        }),
        (t.prototype.configLayer = function (t, e) {
          this.painter.configLayer && this.painter.configLayer(t, e), this.refresh();
        }),
        (t.prototype.setBackgroundColor = function (t) {
          this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
            this.refresh(),
            (this._backgroundColor = t),
            (this._darkMode = Li(t));
        }),
        (t.prototype.getBackgroundColor = function () {
          return this._backgroundColor;
        }),
        (t.prototype.setDarkMode = function (t) {
          this._darkMode = t;
        }),
        (t.prototype.isDarkMode = function () {
          return this._darkMode;
        }),
        (t.prototype.refreshImmediately = function (t) {
          t || this.animation.update(!0), (this._needsRefresh = !1), this.painter.refresh(), (this._needsRefresh = !1);
        }),
        (t.prototype.refresh = function () {
          (this._needsRefresh = !0), this.animation.start();
        }),
        (t.prototype.flush = function () {
          this._flush(!1);
        }),
        (t.prototype._flush = function (t) {
          var e,
            n = jn();
          this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
            this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately());
          var i = jn();
          e
            ? ((this._stillFrameAccum = 0), this.trigger('rendered', { elapsedTime: i - n }))
            : this._sleepAfterStill > 0 &&
              (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
        }),
        (t.prototype.setSleepAfterStill = function (t) {
          this._sleepAfterStill = t;
        }),
        (t.prototype.wakeUp = function () {
          this.animation.start(), (this._stillFrameAccum = 0);
        }),
        (t.prototype.refreshHover = function () {
          this._needsRefreshHover = !0;
        }),
        (t.prototype.refreshHoverImmediately = function () {
          (this._needsRefreshHover = !1),
            this.painter.refreshHover && 'canvas' === this.painter.getType() && this.painter.refreshHover();
        }),
        (t.prototype.resize = function (t) {
          (t = t || {}), this.painter.resize(t.width, t.height), this.handler.resize();
        }),
        (t.prototype.clearAnimation = function () {
          this.animation.clear();
        }),
        (t.prototype.getWidth = function () {
          return this.painter.getWidth();
        }),
        (t.prototype.getHeight = function () {
          return this.painter.getHeight();
        }),
        (t.prototype.setCursorStyle = function (t) {
          this.handler.setCursorStyle(t);
        }),
        (t.prototype.findHover = function (t, e) {
          return this.handler.findHover(t, e);
        }),
        (t.prototype.on = function (t, e, n) {
          return this.handler.on(t, e, n), this;
        }),
        (t.prototype.off = function (t, e) {
          this.handler.off(t, e);
        }),
        (t.prototype.trigger = function (t, e) {
          this.handler.trigger(t, e);
        }),
        (t.prototype.clear = function () {
          for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
            t[e] instanceof Vw && t[e].removeSelfFromZr(this);
          this.storage.delAllRoots(), this.painter.clear();
        }),
        (t.prototype.dispose = function () {
          this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            (this.animation = this.storage = this.painter = this.handler = null),
            Pi(this.id);
        }),
        t
      );
    })(),
    Uw = '5.3.2',
    Xw = (Object.freeze || Object)({
      init: Oi,
      dispose: Ri,
      disposeAll: Bi,
      getInstance: zi,
      registerPainter: Ei,
      version: Uw,
    }),
    Yw = 1e-4,
    Zw = 20,
    qw = 9007199254740991,
    jw =
      /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    Kw = ('undefined' != typeof console && console.warn && console.log, 'series\x00'),
    $w = '\x00_ec_\x00',
    Qw = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'rich',
      'tag',
      'color',
      'textBorderColor',
      'textBorderWidth',
      'width',
      'height',
      'lineHeight',
      'align',
      'verticalAlign',
      'baseline',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'borderRadius',
      'padding',
    ],
    Jw = rr(),
    tb = { useDefault: !0, enableAll: !1, enableNone: !1 },
    eb = '.',
    nb = '___EC__COMPONENT__CONTAINER___',
    ib = '___EC__EXTENDED_CLASS___',
    rb = Math.round(10 * Math.random()),
    ob = [['fill', 'color'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['opacity'], ['shadowColor']],
    ab = Yr(ob),
    sb = (function () {
      function t() {}
      return (
        (t.prototype.getAreaStyle = function (t, e) {
          return ab(this, t, e);
        }),
        t
      );
    })(),
    lb = new Ox(50),
    ub = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    hb = (function () {
      function t() {}
      return t;
    })(),
    cb = (function () {
      function t(t) {
        (this.tokens = []), t && (this.tokens = t);
      }
      return t;
    })(),
    pb = (function () {
      function t() {
        (this.width = 0),
          (this.height = 0),
          (this.contentWidth = 0),
          (this.contentHeight = 0),
          (this.outerWidth = 0),
          (this.outerHeight = 0),
          (this.lines = []);
      }
      return t;
    })(),
    db = m(
      ',&?/;] '.split(''),
      function (t, e) {
        return (t[e] = !0), t;
      },
      {},
    ),
    fb = '__zr_style_' + Math.round(10 * Math.random()),
    gb = { shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: '#000', opacity: 1, blend: 'source-over' },
    vb = { style: { shadowBlur: !0, shadowOffsetX: !0, shadowOffsetY: !0, shadowColor: !0, opacity: !0 } };
  gb[fb] = !0;
  var yb = ['z', 'z2', 'invisible'],
    mb = ['invisible'],
    _b = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype._init = function (e) {
          for (var n = w(e), i = 0; i < n.length; i++) {
            var r = n[i];
            'style' === r ? this.useStyle(e[r]) : t.prototype.attrKV.call(this, r, e[r]);
          }
          this.style || this.useStyle({});
        }),
        (n.prototype.beforeBrush = function () {}),
        (n.prototype.afterBrush = function () {}),
        (n.prototype.innerBeforeBrush = function () {}),
        (n.prototype.innerAfterBrush = function () {}),
        (n.prototype.shouldBePainted = function (t, e, n, i) {
          var r = this.transform;
          if (
            this.ignore ||
            this.invisible ||
            0 === this.style.opacity ||
            (this.culling && so(this, t, e)) ||
            (r && !r[0] && !r[3])
          )
            return !1;
          if (n && this.__clipPaths)
            for (var o = 0; o < this.__clipPaths.length; ++o) if (this.__clipPaths[o].isZeroArea()) return !1;
          if (i && this.parent)
            for (var a = this.parent; a; ) {
              if (a.ignore) return !1;
              a = a.parent;
            }
          return !0;
        }),
        (n.prototype.contain = function (t, e) {
          return this.rectContain(t, e);
        }),
        (n.prototype.traverse = function (t, e) {
          t.call(e, this);
        }),
        (n.prototype.rectContain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
          return i.contain(n[0], n[1]);
        }),
        (n.prototype.getPaintRect = function () {
          var t = this._paintRect;
          if (!this._paintRect || this.__dirty) {
            var e = this.transform,
              n = this.getBoundingRect(),
              i = this.style,
              r = i.shadowBlur || 0,
              o = i.shadowOffsetX || 0,
              a = i.shadowOffsetY || 0;
            (t = this._paintRect || (this._paintRect = new Lw(0, 0, 0, 0))),
              e ? Lw.applyTransform(t, n, e) : t.copy(n),
              (r || o || a) &&
                ((t.width += 2 * r + Math.abs(o)),
                (t.height += 2 * r + Math.abs(a)),
                (t.x = Math.min(t.x, t.x + o - r)),
                (t.y = Math.min(t.y, t.y + a - r)));
            var s = this.dirtyRectTolerance;
            t.isZero() ||
              ((t.x = Math.floor(t.x - s)),
              (t.y = Math.floor(t.y - s)),
              (t.width = Math.ceil(t.width + 1 + 2 * s)),
              (t.height = Math.ceil(t.height + 1 + 2 * s)));
          }
          return t;
        }),
        (n.prototype.setPrevPaintRect = function (t) {
          t
            ? ((this._prevPaintRect = this._prevPaintRect || new Lw(0, 0, 0, 0)), this._prevPaintRect.copy(t))
            : (this._prevPaintRect = null);
        }),
        (n.prototype.getPrevPaintRect = function () {
          return this._prevPaintRect;
        }),
        (n.prototype.animateStyle = function (t) {
          return this.animate('style', t);
        }),
        (n.prototype.updateDuringAnimation = function (t) {
          'style' === t ? this.dirtyStyle() : this.markRedraw();
        }),
        (n.prototype.attrKV = function (e, n) {
          'style' !== e ? t.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
        }),
        (n.prototype.setStyle = function (t, e) {
          return 'string' == typeof t ? (this.style[t] = e) : h(this.style, t), this.dirtyStyle(), this;
        }),
        (n.prototype.dirtyStyle = function (t) {
          t || this.markRedraw(), (this.__dirty |= dx), this._rect && (this._rect = null);
        }),
        (n.prototype.dirty = function () {
          this.dirtyStyle();
        }),
        (n.prototype.styleChanged = function () {
          return !!(this.__dirty & dx);
        }),
        (n.prototype.styleUpdated = function () {
          this.__dirty &= ~dx;
        }),
        (n.prototype.createStyle = function (t) {
          return q(gb, t);
        }),
        (n.prototype.useStyle = function (t) {
          t[fb] || (t = this.createStyle(t)),
            this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
            this.dirtyStyle();
        }),
        (n.prototype.isStyleObject = function (t) {
          return t[fb];
        }),
        (n.prototype._innerSaveToNormal = function (e) {
          t.prototype._innerSaveToNormal.call(this, e);
          var n = this._normalState;
          e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)),
            this._savePrimaryToNormal(e, n, yb);
        }),
        (n.prototype._applyStateObj = function (e, n, i, r, o, a) {
          t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
          var s,
            l = !(n && r);
          if (
            (n && n.style
              ? o
                ? r
                  ? (s = n.style)
                  : ((s = this._mergeStyle(this.createStyle(), i.style)), this._mergeStyle(s, n.style))
                : ((s = this._mergeStyle(this.createStyle(), r ? this.style : i.style)), this._mergeStyle(s, n.style))
              : l && (s = i.style),
            s)
          )
            if (o) {
              var u = this.style;
              if (((this.style = this.createStyle(l ? {} : u)), l))
                for (var h = w(u), c = 0; c < h.length; c++) {
                  var p = h[c];
                  p in s && ((s[p] = s[p]), (this.style[p] = u[p]));
                }
              for (var d = w(s), c = 0; c < d.length; c++) {
                var p = d[c];
                this.style[p] = this.style[p];
              }
              this._transitionState(e, { style: s }, a, this.getAnimationStyleProps());
            } else this.useStyle(s);
          for (var f = this.__inHover ? mb : yb, c = 0; c < f.length; c++) {
            var p = f[c];
            n && null != n[p] ? (this[p] = n[p]) : l && null != i[p] && (this[p] = i[p]);
          }
        }),
        (n.prototype._mergeStates = function (e) {
          for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
            var o = e[r];
            o.style && ((n = n || {}), this._mergeStyle(n, o.style));
          }
          return n && (i.style = n), i;
        }),
        (n.prototype._mergeStyle = function (t, e) {
          return h(t, e), t;
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return vb;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          (t.type = 'displayable'),
            (t.invisible = !1),
            (t.z = 0),
            (t.z2 = 0),
            (t.zlevel = 0),
            (t.culling = !1),
            (t.cursor = 'pointer'),
            (t.rectHover = !1),
            (t.incremental = !1),
            (t._rect = null),
            (t.dirtyRectTolerance = 0),
            (t.__dirty = px | dx);
        })()),
        n
      );
    })(Fw),
    xb = new Lw(0, 0, 0, 0),
    wb = new Lw(0, 0, 0, 0),
    bb = Math.min,
    Sb = Math.max,
    Mb = Math.sin,
    Tb = Math.cos,
    Cb = 2 * Math.PI,
    Ib = Q(),
    Db = Q(),
    kb = Q(),
    Ab = [],
    Pb = [],
    Lb = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
    Ob = [],
    Rb = [],
    Bb = [],
    zb = [],
    Eb = [],
    Nb = [],
    Fb = Math.min,
    Vb = Math.max,
    Hb = Math.cos,
    Wb = Math.sin,
    Gb = Math.abs,
    Ub = Math.PI,
    Xb = 2 * Ub,
    Yb = 'undefined' != typeof Float32Array,
    Zb = [],
    qb = (function () {
      function t(t) {
        (this.dpr = 1),
          (this._xi = 0),
          (this._yi = 0),
          (this._x0 = 0),
          (this._y0 = 0),
          (this._len = 0),
          t && (this._saveData = !1),
          this._saveData && (this.data = []);
      }
      return (
        (t.prototype.increaseVersion = function () {
          this._version++;
        }),
        (t.prototype.getVersion = function () {
          return this._version;
        }),
        (t.prototype.setScale = function (t, e, n) {
          (n = n || 0), n > 0 && ((this._ux = Gb(n / uw / t) || 0), (this._uy = Gb(n / uw / e) || 0));
        }),
        (t.prototype.setDPR = function (t) {
          this.dpr = t;
        }),
        (t.prototype.setContext = function (t) {
          this._ctx = t;
        }),
        (t.prototype.getContext = function () {
          return this._ctx;
        }),
        (t.prototype.beginPath = function () {
          return this._ctx && this._ctx.beginPath(), this.reset(), this;
        }),
        (t.prototype.reset = function () {
          this._saveData && (this._len = 0),
            this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
            this._version++;
        }),
        (t.prototype.moveTo = function (t, e) {
          return (
            this._drawPendingPt(),
            this.addData(Lb.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            (this._x0 = t),
            (this._y0 = e),
            (this._xi = t),
            (this._yi = e),
            this
          );
        }),
        (t.prototype.lineTo = function (t, e) {
          var n = Gb(t - this._xi),
            i = Gb(e - this._yi),
            r = n > this._ux || i > this._uy;
          if ((this.addData(Lb.L, t, e), this._ctx && r && this._ctx.lineTo(t, e), r))
            (this._xi = t), (this._yi = e), (this._pendingPtDist = 0);
          else {
            var o = n * n + i * i;
            o > this._pendingPtDist && ((this._pendingPtX = t), (this._pendingPtY = e), (this._pendingPtDist = o));
          }
          return this;
        }),
        (t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
          return (
            this._drawPendingPt(),
            this.addData(Lb.C, t, e, n, i, r, o),
            this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o),
            (this._xi = r),
            (this._yi = o),
            this
          );
        }),
        (t.prototype.quadraticCurveTo = function (t, e, n, i) {
          return (
            this._drawPendingPt(),
            this.addData(Lb.Q, t, e, n, i),
            this._ctx && this._ctx.quadraticCurveTo(t, e, n, i),
            (this._xi = n),
            (this._yi = i),
            this
          );
        }),
        (t.prototype.arc = function (t, e, n, i, r, o) {
          this._drawPendingPt(), (Zb[0] = i), (Zb[1] = r), fo(Zb, o), (i = Zb[0]), (r = Zb[1]);
          var a = r - i;
          return (
            this.addData(Lb.A, t, e, n, n, i, a, 0, o ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, n, i, r, o),
            (this._xi = Hb(r) * n + t),
            (this._yi = Wb(r) * n + e),
            this
          );
        }),
        (t.prototype.arcTo = function (t, e, n, i, r) {
          return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        }),
        (t.prototype.rect = function (t, e, n, i) {
          return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(Lb.R, t, e, n, i), this;
        }),
        (t.prototype.closePath = function () {
          this._drawPendingPt(), this.addData(Lb.Z);
          var t = this._ctx,
            e = this._x0,
            n = this._y0;
          return t && t.closePath(), (this._xi = e), (this._yi = n), this;
        }),
        (t.prototype.fill = function (t) {
          t && t.fill(), this.toStatic();
        }),
        (t.prototype.stroke = function (t) {
          t && t.stroke(), this.toStatic();
        }),
        (t.prototype.len = function () {
          return this._len;
        }),
        (t.prototype.setData = function (t) {
          var e = t.length;
          (this.data && this.data.length === e) || !Yb || (this.data = new Float32Array(e));
          for (var n = 0; e > n; n++) this.data[n] = t[n];
          this._len = e;
        }),
        (t.prototype.appendPath = function (t) {
          t instanceof Array || (t = [t]);
          for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
          Yb && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
          for (var r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
          this._len = i;
        }),
        (t.prototype.addData = function () {
          if (this._saveData) {
            var t = this.data;
            this._len + arguments.length > t.length && (this._expandData(), (t = this.data));
            for (var e = 0; e < arguments.length; e++) t[this._len++] = arguments[e];
          }
        }),
        (t.prototype._drawPendingPt = function () {
          this._pendingPtDist > 0 &&
            (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), (this._pendingPtDist = 0));
        }),
        (t.prototype._expandData = function () {
          if (!(this.data instanceof Array)) {
            for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
            this.data = t;
          }
        }),
        (t.prototype.toStatic = function () {
          if (this._saveData) {
            this._drawPendingPt();
            var t = this.data;
            t instanceof Array && ((t.length = this._len), Yb && this._len > 11 && (this.data = new Float32Array(t)));
          }
        }),
        (t.prototype.getBoundingRect = function () {
          (Bb[0] = Bb[1] = Eb[0] = Eb[1] = Number.MAX_VALUE), (zb[0] = zb[1] = Nb[0] = Nb[1] = -Number.MAX_VALUE);
          var t,
            e = this.data,
            n = 0,
            i = 0,
            r = 0,
            o = 0;
          for (t = 0; t < this._len; ) {
            var a = e[t++],
              s = 1 === t;
            switch ((s && ((n = e[t]), (i = e[t + 1]), (r = n), (o = i)), a)) {
              case Lb.M:
                (n = r = e[t++]), (i = o = e[t++]), (Eb[0] = r), (Eb[1] = o), (Nb[0] = r), (Nb[1] = o);
                break;
              case Lb.L:
                lo(n, i, e[t], e[t + 1], Eb, Nb), (n = e[t++]), (i = e[t++]);
                break;
              case Lb.C:
                uo(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], Eb, Nb), (n = e[t++]), (i = e[t++]);
                break;
              case Lb.Q:
                ho(n, i, e[t++], e[t++], e[t], e[t + 1], Eb, Nb), (n = e[t++]), (i = e[t++]);
                break;
              case Lb.A:
                var l = e[t++],
                  u = e[t++],
                  h = e[t++],
                  c = e[t++],
                  p = e[t++],
                  d = e[t++] + p;
                t += 1;
                var f = !e[t++];
                s && ((r = Hb(p) * h + l), (o = Wb(p) * c + u)),
                  co(l, u, h, c, p, d, f, Eb, Nb),
                  (n = Hb(d) * h + l),
                  (i = Wb(d) * c + u);
                break;
              case Lb.R:
                (r = n = e[t++]), (o = i = e[t++]);
                var g = e[t++],
                  v = e[t++];
                lo(r, o, r + g, o + v, Eb, Nb);
                break;
              case Lb.Z:
                (n = r), (i = o);
            }
            ye(Bb, Bb, Eb), me(zb, zb, Nb);
          }
          return 0 === t && (Bb[0] = Bb[1] = zb[0] = zb[1] = 0), new Lw(Bb[0], Bb[1], zb[0] - Bb[0], zb[1] - Bb[1]);
        }),
        (t.prototype._calculateLength = function () {
          var t = this.data,
            e = this._len,
            n = this._ux,
            i = this._uy,
            r = 0,
            o = 0,
            a = 0,
            s = 0;
          this._pathSegLen || (this._pathSegLen = []);
          for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c; ) {
            var p = t[c++],
              d = 1 === c;
            d && ((r = t[c]), (o = t[c + 1]), (a = r), (s = o));
            var f = -1;
            switch (p) {
              case Lb.M:
                (r = a = t[c++]), (o = s = t[c++]);
                break;
              case Lb.L:
                var g = t[c++],
                  v = t[c++],
                  y = g - r,
                  m = v - o;
                (Gb(y) > n || Gb(m) > i || c === e - 1) && ((f = Math.sqrt(y * y + m * m)), (r = g), (o = v));
                break;
              case Lb.C:
                var _ = t[c++],
                  x = t[c++],
                  g = t[c++],
                  v = t[c++],
                  w = t[c++],
                  b = t[c++];
                (f = rn(r, o, _, x, g, v, w, b, 10)), (r = w), (o = b);
                break;
              case Lb.Q:
                var _ = t[c++],
                  x = t[c++],
                  g = t[c++],
                  v = t[c++];
                (f = cn(r, o, _, x, g, v, 10)), (r = g), (o = v);
                break;
              case Lb.A:
                var S = t[c++],
                  M = t[c++],
                  T = t[c++],
                  C = t[c++],
                  I = t[c++],
                  D = t[c++],
                  k = D + I;
                c += 1;
                {
                  !t[c++];
                }
                d && ((a = Hb(I) * T + S), (s = Wb(I) * C + M)),
                  (f = Vb(T, C) * Fb(Xb, Math.abs(D))),
                  (r = Hb(k) * T + S),
                  (o = Wb(k) * C + M);
                break;
              case Lb.R:
                (a = r = t[c++]), (s = o = t[c++]);
                var A = t[c++],
                  P = t[c++];
                f = 2 * A + 2 * P;
                break;
              case Lb.Z:
                var y = a - r,
                  m = s - o;
                (f = Math.sqrt(y * y + m * m)), (r = a), (o = s);
            }
            f >= 0 && ((l[h++] = f), (u += f));
          }
          return (this._pathLen = u), u;
        }),
        (t.prototype.rebuildPath = function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            h,
            c,
            p,
            d = this.data,
            f = this._ux,
            g = this._uy,
            v = this._len,
            y = 1 > e,
            m = 0,
            _ = 0,
            x = 0;
          if (
            !y ||
            (this._pathSegLen || this._calculateLength(), (l = this._pathSegLen), (u = this._pathLen), (h = e * u))
          )
            t: for (var w = 0; v > w; ) {
              var b = d[w++],
                S = 1 === w;
              switch (
                (S && ((r = d[w]), (o = d[w + 1]), (n = r), (i = o)),
                b !== Lb.L && x > 0 && (t.lineTo(c, p), (x = 0)),
                b)
              ) {
                case Lb.M:
                  (n = r = d[w++]), (i = o = d[w++]), t.moveTo(r, o);
                  break;
                case Lb.L:
                  (a = d[w++]), (s = d[w++]);
                  var M = Gb(a - r),
                    T = Gb(s - o);
                  if (M > f || T > g) {
                    if (y) {
                      var C = l[_++];
                      if (m + C > h) {
                        var I = (h - m) / C;
                        t.lineTo(r * (1 - I) + a * I, o * (1 - I) + s * I);
                        break t;
                      }
                      m += C;
                    }
                    t.lineTo(a, s), (r = a), (o = s), (x = 0);
                  } else {
                    var D = M * M + T * T;
                    D > x && ((c = a), (p = s), (x = D));
                  }
                  break;
                case Lb.C:
                  var k = d[w++],
                    A = d[w++],
                    P = d[w++],
                    L = d[w++],
                    O = d[w++],
                    R = d[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var I = (h - m) / C;
                      en(r, k, P, O, I, Ob),
                        en(o, A, L, R, I, Rb),
                        t.bezierCurveTo(Ob[1], Rb[1], Ob[2], Rb[2], Ob[3], Rb[3]);
                      break t;
                    }
                    m += C;
                  }
                  t.bezierCurveTo(k, A, P, L, O, R), (r = O), (o = R);
                  break;
                case Lb.Q:
                  var k = d[w++],
                    A = d[w++],
                    P = d[w++],
                    L = d[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var I = (h - m) / C;
                      un(r, k, P, I, Ob), un(o, A, L, I, Rb), t.quadraticCurveTo(Ob[1], Rb[1], Ob[2], Rb[2]);
                      break t;
                    }
                    m += C;
                  }
                  t.quadraticCurveTo(k, A, P, L), (r = P), (o = L);
                  break;
                case Lb.A:
                  var B = d[w++],
                    z = d[w++],
                    E = d[w++],
                    N = d[w++],
                    F = d[w++],
                    V = d[w++],
                    H = d[w++],
                    W = !d[w++],
                    G = E > N ? E : N,
                    U = Gb(E - N) > 0.001,
                    X = F + V,
                    Y = !1;
                  if (y) {
                    var C = l[_++];
                    m + C > h && ((X = F + (V * (h - m)) / C), (Y = !0)), (m += C);
                  }
                  if ((U && t.ellipse ? t.ellipse(B, z, E, N, H, F, X, W) : t.arc(B, z, G, F, X, W), Y)) break t;
                  S && ((n = Hb(F) * E + B), (i = Wb(F) * N + z)), (r = Hb(X) * E + B), (o = Wb(X) * N + z);
                  break;
                case Lb.R:
                  (n = r = d[w]), (i = o = d[w + 1]), (a = d[w++]), (s = d[w++]);
                  var Z = d[w++],
                    q = d[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var j = h - m;
                      t.moveTo(a, s),
                        t.lineTo(a + Fb(j, Z), s),
                        (j -= Z),
                        j > 0 && t.lineTo(a + Z, s + Fb(j, q)),
                        (j -= q),
                        j > 0 && t.lineTo(a + Vb(Z - j, 0), s + q),
                        (j -= Z),
                        j > 0 && t.lineTo(a, s + Vb(q - j, 0));
                      break t;
                    }
                    m += C;
                  }
                  t.rect(a, s, Z, q);
                  break;
                case Lb.Z:
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var I = (h - m) / C;
                      t.lineTo(r * (1 - I) + n * I, o * (1 - I) + i * I);
                      break t;
                    }
                    m += C;
                  }
                  t.closePath(), (r = n), (o = i);
              }
            }
        }),
        (t.prototype.clone = function () {
          var e = new t(),
            n = this.data;
          return (e.data = n.slice ? n.slice() : Array.prototype.slice.call(n)), (e._len = this._len), e;
        }),
        (t.CMD = Lb),
        (t.initDefaultProps = (function () {
          var e = t.prototype;
          (e._saveData = !0), (e._ux = 0), (e._uy = 0), (e._pendingPtDist = 0), (e._version = 0);
        })()),
        t
      );
    })(),
    jb = 2 * Math.PI,
    Kb = 2 * Math.PI,
    $b = qb.CMD,
    Qb = 2 * Math.PI,
    Jb = 1e-4,
    tS = [-1, -1, -1],
    eS = [-1, -1],
    nS = c(
      {
        fill: '#000',
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: 'butt',
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1,
      },
      gb,
    ),
    iS = {
      style: c(
        {
          fill: !0,
          stroke: !0,
          strokePercent: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineDashOffset: !0,
          lineWidth: !0,
          miterLimit: !0,
        },
        vb.style,
      ),
    },
    rS = bw.concat(['invisible', 'culling', 'z', 'z2', 'zlevel', 'parent']),
    oS = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.update = function () {
          var e = this;
          t.prototype.update.call(this);
          var i = this.style;
          if (i.decal) {
            var r = (this._decalEl = this._decalEl || new n());
            r.buildPath === n.prototype.buildPath &&
              (r.buildPath = function (t) {
                e.buildPath(t, e.shape);
              }),
              (r.silent = !0);
            var o = r.style;
            for (var a in i) o[a] !== i[a] && (o[a] = i[a]);
            (o.fill = i.fill ? i.decal : null),
              (o.decal = null),
              (o.shadowColor = null),
              i.strokeFirst && (o.stroke = null);
            for (var s = 0; s < rS.length; ++s) r[rS[s]] = this[rS[s]];
            r.__dirty |= px;
          } else this._decalEl && (this._decalEl = null);
        }),
        (n.prototype.getDecalElement = function () {
          return this._decalEl;
        }),
        (n.prototype._init = function (e) {
          var n = w(e);
          this.shape = this.getDefaultShape();
          var i = this.getDefaultStyle();
          i && this.useStyle(i);
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              a = e[o];
            'style' === o
              ? this.style
                ? h(this.style, a)
                : this.useStyle(a)
              : 'shape' === o
              ? h(this.shape, a)
              : t.prototype.attrKV.call(this, o, a);
          }
          this.style || this.useStyle({});
        }),
        (n.prototype.getDefaultStyle = function () {
          return null;
        }),
        (n.prototype.getDefaultShape = function () {
          return {};
        }),
        (n.prototype.canBeInsideText = function () {
          return this.hasFill();
        }),
        (n.prototype.getInsideTextFill = function () {
          var t = this.style.fill;
          if ('none' !== t) {
            if (C(t)) {
              var e = On(t, 0);
              return e > 0.5 ? cw : e > 0.2 ? dw : pw;
            }
            if (t) return pw;
          }
          return cw;
        }),
        (n.prototype.getInsideTextStroke = function (t) {
          var e = this.style.fill;
          if (C(e)) {
            var n = this.__zr,
              i = !(!n || !n.isDarkMode()),
              r = On(t, 0) < hw;
            if (i === r) return e;
          }
        }),
        (n.prototype.buildPath = function () {}),
        (n.prototype.pathUpdated = function () {
          this.__dirty &= ~fx;
        }),
        (n.prototype.getUpdatedPathProxy = function (t) {
          return (
            !this.path && this.createPathProxy(),
            this.path.beginPath(),
            this.buildPath(this.path, this.shape, t),
            this.path
          );
        }),
        (n.prototype.createPathProxy = function () {
          this.path = new qb(!1);
        }),
        (n.prototype.hasStroke = function () {
          var t = this.style,
            e = t.stroke;
          return !(null == e || 'none' === e || !(t.lineWidth > 0));
        }),
        (n.prototype.hasFill = function () {
          var t = this.style,
            e = t.fill;
          return null != e && 'none' !== e;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this._rect,
            e = this.style,
            n = !t;
          if (n) {
            var i = !1;
            this.path || ((i = !0), this.createPathProxy());
            var r = this.path;
            (i || this.__dirty & fx) && (r.beginPath(), this.buildPath(r, this.shape, !1), this.pathUpdated()),
              (t = r.getBoundingRect());
          }
          if (((this._rect = t), this.hasStroke() && this.path && this.path.len() > 0)) {
            var o = this._rectStroke || (this._rectStroke = t.clone());
            if (this.__dirty || n) {
              o.copy(t);
              var a = e.strokeNoScale ? this.getLineScale() : 1,
                s = e.lineWidth;
              if (!this.hasFill()) {
                var l = this.strokeContainThreshold;
                s = Math.max(s, null == l ? 4 : l);
              }
              a > 1e-10 && ((o.width += s / a), (o.height += s / a), (o.x -= s / a / 2), (o.y -= s / a / 2));
            }
            return o;
          }
          return t;
        }),
        (n.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect(),
            r = this.style;
          if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
            var o = this.path;
            if (this.hasStroke()) {
              var a = r.lineWidth,
                s = r.strokeNoScale ? this.getLineScale() : 1;
              if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), Do(o, a / s, t, e)))
                return !0;
            }
            if (this.hasFill()) return Io(o, t, e);
          }
          return !1;
        }),
        (n.prototype.dirtyShape = function () {
          (this.__dirty |= fx),
            this._rect && (this._rect = null),
            this._decalEl && this._decalEl.dirtyShape(),
            this.markRedraw();
        }),
        (n.prototype.dirty = function () {
          this.dirtyStyle(), this.dirtyShape();
        }),
        (n.prototype.animateShape = function (t) {
          return this.animate('shape', t);
        }),
        (n.prototype.updateDuringAnimation = function (t) {
          'style' === t ? this.dirtyStyle() : 'shape' === t ? this.dirtyShape() : this.markRedraw();
        }),
        (n.prototype.attrKV = function (e, n) {
          'shape' === e ? this.setShape(n) : t.prototype.attrKV.call(this, e, n);
        }),
        (n.prototype.setShape = function (t, e) {
          var n = this.shape;
          return n || (n = this.shape = {}), 'string' == typeof t ? (n[t] = e) : h(n, t), this.dirtyShape(), this;
        }),
        (n.prototype.shapeChanged = function () {
          return !!(this.__dirty & fx);
        }),
        (n.prototype.createStyle = function (t) {
          return q(nS, t);
        }),
        (n.prototype._innerSaveToNormal = function (e) {
          t.prototype._innerSaveToNormal.call(this, e);
          var n = this._normalState;
          e.shape && !n.shape && (n.shape = h({}, this.shape));
        }),
        (n.prototype._applyStateObj = function (e, n, i, r, o, a) {
          t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
          var s,
            l = !(n && r);
          if (
            (n && n.shape
              ? o
                ? r
                  ? (s = n.shape)
                  : ((s = h({}, i.shape)), h(s, n.shape))
                : ((s = h({}, r ? this.shape : i.shape)), h(s, n.shape))
              : l && (s = i.shape),
            s)
          )
            if (o) {
              this.shape = h({}, this.shape);
              for (var u = {}, c = w(s), p = 0; p < c.length; p++) {
                var d = c[p];
                'object' == typeof s[d] ? (this.shape[d] = s[d]) : (u[d] = s[d]);
              }
              this._transitionState(e, { shape: u }, a);
            } else (this.shape = s), this.dirtyShape();
        }),
        (n.prototype._mergeStates = function (e) {
          for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
            var o = e[r];
            o.shape && ((n = n || {}), this._mergeStyle(n, o.shape));
          }
          return n && (i.shape = n), i;
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return iS;
        }),
        (n.prototype.isZeroArea = function () {
          return !1;
        }),
        (n.extend = function (t) {
          var i = (function (n) {
            function i(e) {
              var i = n.call(this, e) || this;
              return t.init && t.init.call(i, e), i;
            }
            return (
              e(i, n),
              (i.prototype.getDefaultStyle = function () {
                return s(t.style);
              }),
              (i.prototype.getDefaultShape = function () {
                return s(t.shape);
              }),
              i
            );
          })(n);
          for (var r in t) 'function' == typeof t[r] && (i.prototype[r] = t[r]);
          return i;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          (t.type = 'path'),
            (t.strokeContainThreshold = 5),
            (t.segmentIgnoreThreshold = 0),
            (t.subPixelOptimize = !1),
            (t.autoBatch = !1),
            (t.__dirty = px | dx | fx);
        })()),
        n
      );
    })(_b),
    aS = c({ strokeFirst: !0, font: y_, x: 0, y: 0, textAlign: 'left', textBaseline: 'top', miterLimit: 2 }, nS),
    sS = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.hasStroke = function () {
          var t = this.style,
            e = t.stroke;
          return null != e && 'none' !== e && t.lineWidth > 0;
        }),
        (n.prototype.hasFill = function () {
          var t = this.style,
            e = t.fill;
          return null != e && 'none' !== e;
        }),
        (n.prototype.createStyle = function (t) {
          return q(aS, t);
        }),
        (n.prototype.setBoundingRect = function (t) {
          this._rect = t;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this.style;
          if (!this._rect) {
            var e = t.text;
            null != e ? (e += '') : (e = '');
            var n = mi(e, t.font, t.textAlign, t.textBaseline);
            if (((n.x += t.x || 0), (n.y += t.y || 0), this.hasStroke())) {
              var i = t.lineWidth;
              (n.x -= i / 2), (n.y -= i / 2), (n.width += i), (n.height += i);
            }
            this._rect = n;
          }
          return this._rect;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          t.dirtyRectTolerance = 10;
        })()),
        n
      );
    })(_b);
  sS.prototype.type = 'tspan';
  var lS = c({ x: 0, y: 0 }, gb),
    uS = { style: c({ x: !0, y: !0, width: !0, height: !0, sx: !0, sy: !0, sWidth: !0, sHeight: !0 }, vb.style) },
    hS = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.createStyle = function (t) {
          return q(lS, t);
        }),
        (n.prototype._getSize = function (t) {
          var e = this.style,
            n = e[t];
          if (null != n) return n;
          var i = ko(e.image) ? e.image : this.__image;
          if (!i) return 0;
          var r = 'width' === t ? 'height' : 'width',
            o = e[r];
          return null == o ? i[t] : (i[t] / i[r]) * o;
        }),
        (n.prototype.getWidth = function () {
          return this._getSize('width');
        }),
        (n.prototype.getHeight = function () {
          return this._getSize('height');
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return uS;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this.style;
          return this._rect || (this._rect = new Lw(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), this._rect;
        }),
        n
      );
    })(_b);
  hS.prototype.type = 'image';
  var cS = Math.round,
    pS = (function () {
      function t() {
        (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
      }
      return t;
    })(),
    dS = {},
    fS = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new pS();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n, i, r, o;
          if (this.subPixelOptimize) {
            var a = Lo(dS, e, this.style);
            (n = a.x), (i = a.y), (r = a.width), (o = a.height), (a.r = e.r), (e = a);
          } else (n = e.x), (i = e.y), (r = e.width), (o = e.height);
          e.r ? Ao(t, e) : t.rect(n, i, r, o);
        }),
        (n.prototype.isZeroArea = function () {
          return !this.shape.width || !this.shape.height;
        }),
        n
      );
    })(oS);
  fS.prototype.type = 'rect';
  var gS = { fill: '#000' },
    vS = 2,
    yS = {
      style: c(
        {
          fill: !0,
          stroke: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineWidth: !0,
          fontSize: !0,
          lineHeight: !0,
          width: !0,
          height: !0,
          textShadowColor: !0,
          textShadowBlur: !0,
          textShadowOffsetX: !0,
          textShadowOffsetY: !0,
          backgroundColor: !0,
          padding: !0,
          borderColor: !0,
          borderWidth: !0,
          borderRadius: !0,
        },
        vb.style,
      ),
    },
    mS = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (n.type = 'text'), (n._children = []), (n._defaultStyle = gS), n.attr(e), n;
      }
      return (
        e(n, t),
        (n.prototype.childrenRef = function () {
          return this._children;
        }),
        (n.prototype.update = function () {
          t.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
          for (var e = 0; e < this._children.length; e++) {
            var n = this._children[e];
            (n.zlevel = this.zlevel),
              (n.z = this.z),
              (n.z2 = this.z2),
              (n.culling = this.culling),
              (n.cursor = this.cursor),
              (n.invisible = this.invisible);
          }
        }),
        (n.prototype.updateTransform = function () {
          var e = this.innerTransformable;
          e
            ? (e.updateTransform(), e.transform && (this.transform = e.transform))
            : t.prototype.updateTransform.call(this);
        }),
        (n.prototype.getLocalTransform = function (e) {
          var n = this.innerTransformable;
          return n ? n.getLocalTransform(e) : t.prototype.getLocalTransform.call(this, e);
        }),
        (n.prototype.getComputedTransform = function () {
          return (
            this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)),
            t.prototype.getComputedTransform.call(this)
          );
        }),
        (n.prototype._updateSubTexts = function () {
          (this._childCursor = 0),
            Eo(this.style),
            this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
            (this._children.length = this._childCursor),
            this.styleUpdated();
        }),
        (n.prototype.addSelfToZr = function (e) {
          t.prototype.addSelfToZr.call(this, e);
          for (var n = 0; n < this._children.length; n++) this._children[n].__zr = e;
        }),
        (n.prototype.removeSelfFromZr = function (e) {
          t.prototype.removeSelfFromZr.call(this, e);
          for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null;
        }),
        (n.prototype.getBoundingRect = function () {
          if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
            for (var t = new Lw(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
              var o = e[r],
                a = o.getBoundingRect(),
                s = o.getLocalTransform(n);
              s
                ? (t.copy(a), t.applyTransform(s), (i = i || t.clone()), i.union(t))
                : ((i = i || a.clone()), i.union(a));
            }
            this._rect = i || t;
          }
          return this._rect;
        }),
        (n.prototype.setDefaultTextStyle = function (t) {
          this._defaultStyle = t || gS;
        }),
        (n.prototype.setTextContent = function () {}),
        (n.prototype._mergeStyle = function (t, e) {
          if (!e) return t;
          var n = e.rich,
            i = t.rich || (n && {});
          return h(t, e), n && i ? (this._mergeRich(i, n), (t.rich = i)) : i && (t.rich = i), t;
        }),
        (n.prototype._mergeRich = function (t, e) {
          for (var n = w(e), i = 0; i < n.length; i++) {
            var r = n[i];
            (t[r] = t[r] || {}), h(t[r], e[r]);
          }
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return yS;
        }),
        (n.prototype._getOrCreateChild = function (t) {
          var e = this._children[this._childCursor];
          return (
            (e && e instanceof t) || (e = new t()),
            (this._children[this._childCursor++] = e),
            (e.__zr = this.__zr),
            (e.parent = this),
            e
          );
        }),
        (n.prototype._updatePlainTexts = function () {
          var t = this.style,
            e = t.font || y_,
            n = t.padding,
            i = Wo(t),
            r = eo(i, t),
            o = Go(t),
            a = !!t.backgroundColor,
            s = r.outerHeight,
            l = r.outerWidth,
            u = r.contentWidth,
            h = r.lines,
            c = r.lineHeight,
            p = this._defaultStyle,
            d = t.x || 0,
            f = t.y || 0,
            g = t.align || p.align || 'left',
            v = t.verticalAlign || p.verticalAlign || 'top',
            y = d,
            m = xi(f, r.contentHeight, v);
          if (o || n) {
            var _ = _i(d, l, g),
              x = xi(f, s, v);
            o && this._renderBackground(t, t, _, x, l, s);
          }
          (m += c / 2), n && ((y = Ho(d, g, n)), 'top' === v ? (m += n[0]) : 'bottom' === v && (m -= n[2]));
          for (
            var w = 0,
              b = !1,
              S = Vo(('fill' in t) ? t.fill : ((b = !0), p.fill)),
              M = Fo(('stroke' in t) ? t.stroke : a || (p.autoStroke && !b) ? null : ((w = vS), p.stroke)),
              T = t.textShadowBlur > 0,
              C = null != t.width && ('truncate' === t.overflow || 'break' === t.overflow || 'breakAll' === t.overflow),
              I = r.calculatedLineHeight,
              D = 0;
            D < h.length;
            D++
          ) {
            var k = this._getOrCreateChild(sS),
              A = k.createStyle();
            k.useStyle(A),
              (A.text = h[D]),
              (A.x = y),
              (A.y = m),
              g && (A.textAlign = g),
              (A.textBaseline = 'middle'),
              (A.opacity = t.opacity),
              (A.strokeFirst = !0),
              T &&
                ((A.shadowBlur = t.textShadowBlur || 0),
                (A.shadowColor = t.textShadowColor || 'transparent'),
                (A.shadowOffsetX = t.textShadowOffsetX || 0),
                (A.shadowOffsetY = t.textShadowOffsetY || 0)),
              (A.stroke = M),
              (A.fill = S),
              M &&
                ((A.lineWidth = t.lineWidth || w),
                (A.lineDash = t.lineDash),
                (A.lineDashOffset = t.lineDashOffset || 0)),
              (A.font = e),
              Bo(A, t),
              (m += c),
              C && k.setBoundingRect(new Lw(_i(A.x, t.width, A.textAlign), xi(A.y, I, A.textBaseline), u, I));
          }
        }),
        (n.prototype._updateRichTexts = function () {
          var t = this.style,
            e = Wo(t),
            n = no(e, t),
            i = n.width,
            r = n.outerWidth,
            o = n.outerHeight,
            a = t.padding,
            s = t.x || 0,
            l = t.y || 0,
            u = this._defaultStyle,
            h = t.align || u.align,
            c = t.verticalAlign || u.verticalAlign,
            p = _i(s, r, h),
            d = xi(l, o, c),
            f = p,
            g = d;
          a && ((f += a[3]), (g += a[0]));
          var v = f + i;
          Go(t) && this._renderBackground(t, t, p, d, r, o);
          for (var y = !!t.backgroundColor, m = 0; m < n.lines.length; m++) {
            for (
              var _ = n.lines[m],
                x = _.tokens,
                w = x.length,
                b = _.lineHeight,
                S = _.width,
                M = 0,
                T = f,
                C = v,
                I = w - 1,
                D = void 0;
              w > M && ((D = x[M]), !D.align || 'left' === D.align);

            )
              this._placeToken(D, t, b, g, T, 'left', y), (S -= D.width), (T += D.width), M++;
            for (; I >= 0 && ((D = x[I]), 'right' === D.align); )
              this._placeToken(D, t, b, g, C, 'right', y), (S -= D.width), (C -= D.width), I--;
            for (T += (i - (T - f) - (v - C) - S) / 2; I >= M; )
              (D = x[M]), this._placeToken(D, t, b, g, T + D.width / 2, 'center', y), (T += D.width), M++;
            g += b;
          }
        }),
        (n.prototype._placeToken = function (t, e, n, i, r, o, a) {
          var s = e.rich[t.styleName] || {};
          s.text = t.text;
          var l = t.verticalAlign,
            u = i + n / 2;
          'top' === l ? (u = i + t.height / 2) : 'bottom' === l && (u = i + n - t.height / 2);
          var h = !t.isLineHolder && Go(s);
          h &&
            this._renderBackground(
              s,
              e,
              'right' === o ? r - t.width : 'center' === o ? r - t.width / 2 : r,
              u - t.height / 2,
              t.width,
              t.height,
            );
          var c = !!s.backgroundColor,
            p = t.textPadding;
          p && ((r = Ho(r, o, p)), (u -= t.height / 2 - p[0] - t.innerHeight / 2));
          var d = this._getOrCreateChild(sS),
            f = d.createStyle();
          d.useStyle(f);
          var g = this._defaultStyle,
            v = !1,
            y = 0,
            m = Vo('fill' in s ? s.fill : 'fill' in e ? e.fill : ((v = !0), g.fill)),
            _ = Fo(
              'stroke' in s
                ? s.stroke
                : 'stroke' in e
                ? e.stroke
                : c || a || (g.autoStroke && !v)
                ? null
                : ((y = vS), g.stroke),
            ),
            x = s.textShadowBlur > 0 || e.textShadowBlur > 0;
          (f.text = t.text),
            (f.x = r),
            (f.y = u),
            x &&
              ((f.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
              (f.shadowColor = s.textShadowColor || e.textShadowColor || 'transparent'),
              (f.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0),
              (f.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0)),
            (f.textAlign = o),
            (f.textBaseline = 'middle'),
            (f.font = t.font || y_),
            (f.opacity = F(s.opacity, e.opacity, 1)),
            Bo(f, s),
            _ &&
              ((f.lineWidth = F(s.lineWidth, e.lineWidth, y)),
              (f.lineDash = N(s.lineDash, e.lineDash)),
              (f.lineDashOffset = e.lineDashOffset || 0),
              (f.stroke = _)),
            m && (f.fill = m);
          var w = t.contentWidth,
            b = t.contentHeight;
          d.setBoundingRect(new Lw(_i(f.x, w, f.textAlign), xi(f.y, b, f.textBaseline), w, b));
        }),
        (n.prototype._renderBackground = function (t, e, n, i, r, o) {
          var a,
            s,
            l = t.backgroundColor,
            u = t.borderWidth,
            h = t.borderColor,
            c = l && l.image,
            p = l && !c,
            d = t.borderRadius,
            f = this;
          if (p || t.lineHeight || (u && h)) {
            (a = this._getOrCreateChild(fS)), a.useStyle(a.createStyle()), (a.style.fill = null);
            var g = a.shape;
            (g.x = n), (g.y = i), (g.width = r), (g.height = o), (g.r = d), a.dirtyShape();
          }
          if (p) {
            var v = a.style;
            (v.fill = l || null), (v.fillOpacity = N(t.fillOpacity, 1));
          } else if (c) {
            (s = this._getOrCreateChild(hS)),
              (s.onload = function () {
                f.dirtyStyle();
              });
            var y = s.style;
            (y.image = l.image), (y.x = n), (y.y = i), (y.width = r), (y.height = o);
          }
          if (u && h) {
            var v = a.style;
            (v.lineWidth = u),
              (v.stroke = h),
              (v.strokeOpacity = N(t.strokeOpacity, 1)),
              (v.lineDash = t.borderDash),
              (v.lineDashOffset = t.borderDashOffset || 0),
              (a.strokeContainThreshold = 0),
              a.hasFill() && a.hasStroke() && ((v.strokeFirst = !0), (v.lineWidth *= 2));
          }
          var m = (a || s).style;
          (m.shadowBlur = t.shadowBlur || 0),
            (m.shadowColor = t.shadowColor || 'transparent'),
            (m.shadowOffsetX = t.shadowOffsetX || 0),
            (m.shadowOffsetY = t.shadowOffsetY || 0),
            (m.opacity = F(t.opacity, e.opacity, 1));
        }),
        (n.makeFont = function (t) {
          var e = '';
          return (
            zo(t) && (e = [t.fontStyle, t.fontWeight, Ro(t.fontSize), t.fontFamily || 'sans-serif'].join(' ')),
            (e && G(e)) || t.textFont || t.font
          );
        }),
        n
      );
    })(_b),
    _S = { left: !0, right: 1, center: 1 },
    xS = { top: 1, bottom: 1, middle: 1 },
    wS = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily'],
    bS = Dr(),
    SS = function (t, e, n, i) {
      if (i) {
        var r = bS(i);
        (r.dataIndex = n),
          (r.dataType = e),
          (r.seriesIndex = t),
          'group' === i.type &&
            i.traverse(function (i) {
              var r = bS(i);
              (r.seriesIndex = t), (r.dataIndex = n), (r.dataType = e);
            });
      }
    },
    MS = 1,
    TS = {},
    CS = Dr(),
    IS = Dr(),
    DS = 0,
    kS = 1,
    AS = 2,
    PS = ['emphasis', 'blur', 'select'],
    LS = ['normal', 'emphasis', 'blur', 'select'],
    OS = 10,
    RS = 9,
    BS = 'highlight',
    zS = 'downplay',
    ES = 'select',
    NS = 'unselect',
    FS = 'toggleSelect',
    VS = new Ox(100),
    HS = ['emphasis', 'blur', 'select'],
    WS = { itemStyle: 'getItemStyle', lineStyle: 'getLineStyle', areaStyle: 'getAreaStyle' },
    GS = qb.CMD,
    US = [[], [], []],
    XS = Math.sqrt,
    YS = Math.atan2,
    ZS = Math.sqrt,
    qS = Math.sin,
    jS = Math.cos,
    KS = Math.PI,
    $S = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    QS = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    JS = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return e(n, t), (n.prototype.applyTransform = function () {}), n;
    })(oS),
    tM = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.r = 0);
      }
      return t;
    })(),
    eM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new tM();
        }),
        (n.prototype.buildPath = function (t, e) {
          t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
        }),
        n
      );
    })(oS);
  eM.prototype.type = 'circle';
  var nM = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
      }
      return t;
    })(),
    iM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new nM();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = 0.5522848,
            i = e.cx,
            r = e.cy,
            o = e.rx,
            a = e.ry,
            s = o * n,
            l = a * n;
          t.moveTo(i - o, r),
            t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a),
            t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r),
            t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a),
            t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r),
            t.closePath();
        }),
        n
      );
    })(oS);
  iM.prototype.type = 'ellipse';
  var rM = Math.PI,
    oM = 2 * rM,
    aM = Math.sin,
    sM = Math.cos,
    lM = Math.acos,
    uM = Math.atan2,
    hM = Math.abs,
    cM = Math.sqrt,
    pM = Math.max,
    dM = Math.min,
    fM = 1e-4,
    gM = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r0 = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0),
          (this.cornerRadius = 0);
      }
      return t;
    })(),
    vM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new gM();
        }),
        (n.prototype.buildPath = function (t, e) {
          Qa(t, e);
        }),
        (n.prototype.isZeroArea = function () {
          return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
        }),
        n
      );
    })(oS);
  vM.prototype.type = 'sector';
  var yM = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
      }
      return t;
    })(),
    mM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new yM();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            i = e.cy,
            r = 2 * Math.PI;
          t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
        }),
        n
      );
    })(oS);
  mM.prototype.type = 'ring';
  var _M = (function () {
      function t() {
        (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
      }
      return t;
    })(),
    xM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new _M();
        }),
        (n.prototype.buildPath = function (t, e) {
          ts(t, e, !0);
        }),
        n
      );
    })(oS);
  xM.prototype.type = 'polygon';
  var wM = (function () {
      function t() {
        (this.points = null), (this.percent = 1), (this.smooth = 0), (this.smoothConstraint = null);
      }
      return t;
    })(),
    bM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: '#000', fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new wM();
        }),
        (n.prototype.buildPath = function (t, e) {
          ts(t, e, !1);
        }),
        n
      );
    })(oS);
  bM.prototype.type = 'polyline';
  var SM = {},
    MM = (function () {
      function t() {
        (this.x1 = 0), (this.y1 = 0), (this.x2 = 0), (this.y2 = 0), (this.percent = 1);
      }
      return t;
    })(),
    TM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: '#000', fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new MM();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n, i, r, o;
          if (this.subPixelOptimize) {
            var a = Po(SM, e, this.style);
            (n = a.x1), (i = a.y1), (r = a.x2), (o = a.y2);
          } else (n = e.x1), (i = e.y1), (r = e.x2), (o = e.y2);
          var s = e.percent;
          0 !== s && (t.moveTo(n, i), 1 > s && ((r = n * (1 - s) + r * s), (o = i * (1 - s) + o * s)), t.lineTo(r, o));
        }),
        (n.prototype.pointAt = function (t) {
          var e = this.shape;
          return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
        }),
        n
      );
    })(oS);
  TM.prototype.type = 'line';
  var CM = [],
    IM = (function () {
      function t() {
        (this.x1 = 0),
          (this.y1 = 0),
          (this.x2 = 0),
          (this.y2 = 0),
          (this.cpx1 = 0),
          (this.cpy1 = 0),
          (this.percent = 1);
      }
      return t;
    })(),
    DM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: '#000', fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new IM();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.x1,
            i = e.y1,
            r = e.x2,
            o = e.y2,
            a = e.cpx1,
            s = e.cpy1,
            l = e.cpx2,
            u = e.cpy2,
            h = e.percent;
          0 !== h &&
            (t.moveTo(n, i),
            null == l || null == u
              ? (1 > h && (un(n, a, r, h, CM), (a = CM[1]), (r = CM[2]), un(i, s, o, h, CM), (s = CM[1]), (o = CM[2])),
                t.quadraticCurveTo(a, s, r, o))
              : (1 > h &&
                  (en(n, a, l, r, h, CM),
                  (a = CM[1]),
                  (l = CM[2]),
                  (r = CM[3]),
                  en(i, s, u, o, h, CM),
                  (s = CM[1]),
                  (u = CM[2]),
                  (o = CM[3])),
                t.bezierCurveTo(a, s, l, u, r, o)));
        }),
        (n.prototype.pointAt = function (t) {
          return es(this.shape, t, !1);
        }),
        (n.prototype.tangentAt = function (t) {
          var e = es(this.shape, t, !0);
          return ce(e, e);
        }),
        n
      );
    })(oS);
  DM.prototype.type = 'bezier-curve';
  var kM = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0);
      }
      return t;
    })(),
    AM = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: '#000', fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new kM();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            i = e.cy,
            r = Math.max(e.r, 0),
            o = e.startAngle,
            a = e.endAngle,
            s = e.clockwise,
            l = Math.cos(o),
            u = Math.sin(o);
          t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s);
        }),
        n
      );
    })(oS);
  AM.prototype.type = 'arc';
  var PM = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'compound'), e;
      }
      return (
        e(n, t),
        (n.prototype._updatePathDirty = function () {
          for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++)
            e = e || t[n].shapeChanged();
          e && this.dirtyShape();
        }),
        (n.prototype.beforeBrush = function () {
          this._updatePathDirty();
          for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++)
            t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
        }),
        (n.prototype.buildPath = function (t, e) {
          for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
        }),
        (n.prototype.afterBrush = function () {
          for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated();
        }),
        (n.prototype.getBoundingRect = function () {
          return this._updatePathDirty.call(this), oS.prototype.getBoundingRect.call(this);
        }),
        n
      );
    })(oS),
    LM = (function () {
      function t(t) {
        this.colorStops = t || [];
      }
      return (
        (t.prototype.addColorStop = function (t, e) {
          this.colorStops.push({ offset: t, color: e });
        }),
        t
      );
    })(),
    OM = (function (t) {
      function n(e, n, i, r, o, a) {
        var s = t.call(this, o) || this;
        return (
          (s.x = null == e ? 0 : e),
          (s.y = null == n ? 0 : n),
          (s.x2 = null == i ? 1 : i),
          (s.y2 = null == r ? 0 : r),
          (s.type = 'linear'),
          (s.global = a || !1),
          s
        );
      }
      return e(n, t), n;
    })(LM),
    RM = (function (t) {
      function n(e, n, i, r, o) {
        var a = t.call(this, r) || this;
        return (
          (a.x = null == e ? 0.5 : e),
          (a.y = null == n ? 0.5 : n),
          (a.r = null == i ? 0.5 : i),
          (a.type = 'radial'),
          (a.global = o || !1),
          a
        );
      }
      return e(n, t), n;
    })(LM),
    BM = [0, 0],
    zM = [0, 0],
    EM = new Sw(),
    NM = new Sw(),
    FM = (function () {
      function t(t, e) {
        (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
        for (var n = 0; 4 > n; n++) this._corners[n] = new Sw();
        for (var n = 0; 2 > n; n++) this._axes[n] = new Sw();
        t && this.fromBoundingRect(t, e);
      }
      return (
        (t.prototype.fromBoundingRect = function (t, e) {
          var n = this._corners,
            i = this._axes,
            r = t.x,
            o = t.y,
            a = r + t.width,
            s = o + t.height;
          if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e))
            for (var l = 0; 4 > l; l++) n[l].transform(e);
          Sw.sub(i[0], n[1], n[0]), Sw.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
          for (var l = 0; 2 > l; l++) this._origin[l] = i[l].dot(n[0]);
        }),
        (t.prototype.intersect = function (t, e) {
          var n = !0,
            i = !e;
          return (
            EM.set(1 / 0, 1 / 0),
            NM.set(0, 0),
            !this._intersectCheckOneSide(this, t, EM, NM, i, 1) && ((n = !1), i)
              ? n
              : !this._intersectCheckOneSide(t, this, EM, NM, i, -1) && ((n = !1), i)
              ? n
              : (i || Sw.copy(e, n ? EM : NM), n)
          );
        }),
        (t.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
          for (var a = !0, s = 0; 2 > s; s++) {
            var l = this._axes[s];
            if (
              (this._getProjMinMaxOnAxis(s, t._corners, BM),
              this._getProjMinMaxOnAxis(s, e._corners, zM),
              BM[1] < zM[0] || BM[0] > zM[1])
            ) {
              if (((a = !1), r)) return a;
              var u = Math.abs(zM[0] - BM[1]),
                h = Math.abs(BM[0] - zM[1]);
              Math.min(u, h) > i.len() && (h > u ? Sw.scale(i, l, -u * o) : Sw.scale(i, l, h * o));
            } else if (n) {
              var u = Math.abs(zM[0] - BM[1]),
                h = Math.abs(BM[0] - zM[1]);
              Math.min(u, h) < n.len() && (h > u ? Sw.scale(n, l, u * o) : Sw.scale(n, l, -h * o));
            }
          }
          return a;
        }),
        (t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
          for (
            var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1;
            l < e.length;
            l++
          ) {
            var u = e[l].dot(i) + r[t];
            (a = Math.min(u, a)), (s = Math.max(u, s));
          }
          (n[0] = a), (n[1] = s);
        }),
        t
      );
    })(),
    VM = [],
    HM = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e.notClear = !0),
          (e.incremental = !0),
          (e._displayables = []),
          (e._temporaryDisplayables = []),
          (e._cursor = 0),
          e
        );
      }
      return (
        e(n, t),
        (n.prototype.traverse = function (t, e) {
          t.call(e, this);
        }),
        (n.prototype.useStyle = function () {
          this.style = {};
        }),
        (n.prototype.getCursor = function () {
          return this._cursor;
        }),
        (n.prototype.innerAfterBrush = function () {
          this._cursor = this._displayables.length;
        }),
        (n.prototype.clearDisplaybles = function () {
          (this._displayables = []),
            (this._temporaryDisplayables = []),
            (this._cursor = 0),
            this.markRedraw(),
            (this.notClear = !1);
        }),
        (n.prototype.clearTemporalDisplayables = function () {
          this._temporaryDisplayables = [];
        }),
        (n.prototype.addDisplayable = function (t, e) {
          e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.markRedraw();
        }),
        (n.prototype.addDisplayables = function (t, e) {
          e = e || !1;
          for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }),
        (n.prototype.getDisplayables = function () {
          return this._displayables;
        }),
        (n.prototype.getTemporalDisplayables = function () {
          return this._temporaryDisplayables;
        }),
        (n.prototype.eachPendingDisplayable = function (t) {
          for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
          for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
        }),
        (n.prototype.update = function () {
          this.updateTransform();
          for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
          for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
        }),
        (n.prototype.getBoundingRect = function () {
          if (!this._rect) {
            for (var t = new Lw(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
              var n = this._displayables[e],
                i = n.getBoundingRect().clone();
              n.needLocalTransform() && i.applyTransform(n.getLocalTransform(VM)), t.union(i);
            }
            this._rect = t;
          }
          return this._rect;
        }),
        (n.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
          if (i.contain(n[0], n[1]))
            for (var r = 0; r < this._displayables.length; r++) {
              var o = this._displayables[r];
              if (o.contain(t, e)) return !0;
            }
          return !1;
        }),
        n
      );
    })(_b),
    WM = Dr(),
    GM = Math.max,
    UM = Math.min,
    XM = {},
    YM = Za,
    ZM = qa,
    qM = Oo;
  ds('circle', eM),
    ds('ellipse', iM),
    ds('sector', vM),
    ds('ring', mM),
    ds('polygon', xM),
    ds('polyline', bM),
    ds('rect', fS),
    ds('line', TM),
    ds('bezierCurve', DM),
    ds('arc', AM);
  var jM = (Object.freeze || Object)({
      updateProps: rs,
      initProps: os,
      removeElement: ss,
      removeElementWithFadeOut: us,
      isElementRemoved: as,
      extendShape: cs,
      extendPath: ps,
      registerShape: ds,
      getShapeClass: fs,
      makePath: gs,
      makeImage: vs,
      mergePath: ZM,
      resizePath: ms,
      subPixelOptimizeLine: _s,
      subPixelOptimizeRect: xs,
      subPixelOptimize: qM,
      getTransform: ws,
      applyTransform: bs,
      transformDirection: Ss,
      groupTransition: Cs,
      clipPointsByRect: Is,
      clipRectByRect: Ds,
      createIcon: ks,
      linePolygonIntersect: As,
      lineLineIntersect: Ps,
      setTooltipConfig: Rs,
      traverseElements: zs,
      Group: Vw,
      Image: hS,
      Text: mS,
      Circle: eM,
      Ellipse: iM,
      Sector: vM,
      Ring: mM,
      Polygon: xM,
      Polyline: bM,
      Rect: fS,
      Line: TM,
      BezierCurve: DM,
      Arc: AM,
      IncrementalDisplayable: HM,
      CompoundPath: PM,
      LinearGradient: OM,
      RadialGradient: RM,
      BoundingRect: Lw,
      OrientedBoundingRect: FM,
      Point: Sw,
      Path: oS,
    }),
    KM = {},
    $M = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY',
    ],
    QM = ['align', 'lineHeight', 'width', 'height', 'tag', 'verticalAlign'],
    JM = [
      'padding',
      'borderWidth',
      'borderRadius',
      'borderDashOffset',
      'backgroundColor',
      'borderColor',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY',
    ],
    tT = Dr(),
    eT = ['textStyle', 'color'],
    nT = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'padding',
      'lineHeight',
      'rich',
      'width',
      'height',
      'overflow',
    ],
    iT = new mS(),
    rT = (function () {
      function t() {}
      return (
        (t.prototype.getTextColor = function (t) {
          var e = this.ecModel;
          return this.getShallow('color') || (!t && e ? e.get(eT) : null);
        }),
        (t.prototype.getFont = function () {
          return Ys(
            {
              fontStyle: this.getShallow('fontStyle'),
              fontWeight: this.getShallow('fontWeight'),
              fontSize: this.getShallow('fontSize'),
              fontFamily: this.getShallow('fontFamily'),
            },
            this.ecModel,
          );
        }),
        (t.prototype.getTextRect = function (t) {
          for (
            var e = { text: t, verticalAlign: this.getShallow('verticalAlign') || this.getShallow('baseline') }, n = 0;
            n < nT.length;
            n++
          )
            e[nT[n]] = this.getShallow(nT[n]);
          return iT.useStyle(e), iT.update(), iT.getBoundingRect();
        }),
        t
      );
    })(),
    oT = [
      ['lineWidth', 'width'],
      ['stroke', 'color'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'type'],
      ['lineDashOffset', 'dashOffset'],
      ['lineCap', 'cap'],
      ['lineJoin', 'join'],
      ['miterLimit'],
    ],
    aT = Yr(oT),
    sT = (function () {
      function t() {}
      return (
        (t.prototype.getLineStyle = function (t) {
          return aT(this, t);
        }),
        t
      );
    })(),
    lT = [
      ['fill', 'color'],
      ['stroke', 'borderColor'],
      ['lineWidth', 'borderWidth'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'borderType'],
      ['lineDashOffset', 'borderDashOffset'],
      ['lineCap', 'borderCap'],
      ['lineJoin', 'borderJoin'],
      ['miterLimit', 'borderMiterLimit'],
    ],
    uT = Yr(lT),
    hT = (function () {
      function t() {}
      return (
        (t.prototype.getItemStyle = function (t, e) {
          return uT(this, t, e);
        }),
        t
      );
    })(),
    cT = (function () {
      function t(t, e, n) {
        (this.parentModel = e), (this.ecModel = n), (this.option = t);
      }
      return (
        (t.prototype.init = function () {
          for (var t = [], e = 3; e < arguments.length; e++) t[e - 3] = arguments[e];
        }),
        (t.prototype.mergeOption = function (t) {
          l(this.option, t, !0);
        }),
        (t.prototype.get = function (t, e) {
          return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
        }),
        (t.prototype.getShallow = function (t, e) {
          var n = this.option,
            i = null == n ? n : n[t];
          if (null == i && !e) {
            var r = this.parentModel;
            r && (i = r.getShallow(t));
          }
          return i;
        }),
        (t.prototype.getModel = function (e, n) {
          var i = null != e,
            r = i ? this.parsePath(e) : null,
            o = i ? this._doGet(r) : this.option;
          return (
            (n = n || (this.parentModel && this.parentModel.getModel(this.resolveParentPath(r)))),
            new t(o, n, this.ecModel)
          );
        }),
        (t.prototype.isEmpty = function () {
          return null == this.option;
        }),
        (t.prototype.restoreData = function () {}),
        (t.prototype.clone = function () {
          var t = this.constructor;
          return new t(s(this.option));
        }),
        (t.prototype.parsePath = function (t) {
          return 'string' == typeof t ? t.split('.') : t;
        }),
        (t.prototype.resolveParentPath = function (t) {
          return t;
        }),
        (t.prototype.isAnimationEnabled = function () {
          if (!f_.node && this.option) {
            if (null != this.option.animation) return !!this.option.animation;
            if (this.parentModel) return this.parentModel.isAnimationEnabled();
          }
        }),
        (t.prototype._doGet = function (t, e) {
          var n = this.option;
          if (!t) return n;
          for (
            var i = 0;
            i < t.length && (!t[i] || ((n = n && 'object' == typeof n ? n[t[i]] : null), null != n));
            i++
          );
          return null == n && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n;
        }),
        t
      );
    })();
  Fr(cT), Wr(cT), f(cT, sT), f(cT, hT), f(cT, sb), f(cT, rT);
  var pT = Math.round(10 * Math.random()),
    dT = {
      time: {
        month: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayOfWeekAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      legend: { selector: { all: 'All', inverse: 'Inv' } },
      toolbox: {
        brush: {
          title: {
            rect: 'Box Select',
            polygon: 'Lasso Select',
            lineX: 'Horizontally Select',
            lineY: 'Vertically Select',
            keep: 'Keep Selections',
            clear: 'Clear Selections',
          },
        },
        dataView: { title: 'Data View', lang: ['Data View', 'Close', 'Refresh'] },
        dataZoom: { title: { zoom: 'Zoom', back: 'Zoom Reset' } },
        magicType: {
          title: { line: 'Switch to Line Chart', bar: 'Switch to Bar Chart', stack: 'Stack', tiled: 'Tile' },
        },
        restore: { title: 'Restore' },
        saveAsImage: { title: 'Save as Image', lang: ['Right Click to Save Image'] },
      },
      series: {
        typeNames: {
          pie: 'Pie chart',
          bar: 'Bar chart',
          line: 'Line chart',
          scatter: 'Scatter plot',
          effectScatter: 'Ripple scatter plot',
          radar: 'Radar chart',
          tree: 'Tree',
          treemap: 'Treemap',
          boxplot: 'Boxplot',
          candlestick: 'Candlestick',
          k: 'K line chart',
          heatmap: 'Heat map',
          map: 'Map',
          parallel: 'Parallel coordinate map',
          lines: 'Line graph',
          graph: 'Relationship graph',
          sankey: 'Sankey diagram',
          funnel: 'Funnel chart',
          gauge: 'Gauge',
          pictorialBar: 'Pictorial bar',
          themeRiver: 'Theme River Map',
          sunburst: 'Sunburst',
        },
      },
      aria: {
        general: { withTitle: 'This is a chart about "{title}"', withoutTitle: 'This is a chart' },
        series: {
          single: {
            prefix: '',
            withName: ' with type {seriesType} named {seriesName}.',
            withoutName: ' with type {seriesType}.',
          },
          multiple: {
            prefix: '. It consists of {seriesCount} series count.',
            withName: ' The {seriesId} series is a {seriesType} representing {seriesName}.',
            withoutName: ' The {seriesId} series is a {seriesType}.',
            separator: { middle: '', end: '' },
          },
        },
        data: {
          allData: 'The data is as follows: ',
          partialData: 'The first {displayCnt} items are: ',
          withName: 'the data for {name} is {value}',
          withoutName: '{value}',
          separator: { middle: ', ', end: '. ' },
        },
      },
    },
    fT = {
      time: {
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthAbbr: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayOfWeekAbbr: ['日', '一', '二', '三', '四', '五', '六'],
      },
      legend: { selector: { all: '全选', inverse: '反选' } },
      toolbox: {
        brush: {
          title: {
            rect: '矩形选择',
            polygon: '圈选',
            lineX: '横向选择',
            lineY: '纵向选择',
            keep: '保持选择',
            clear: '清除选择',
          },
        },
        dataView: { title: '数据视图', lang: ['数据视图', '关闭', '刷新'] },
        dataZoom: { title: { zoom: '区域缩放', back: '区域缩放还原' } },
        magicType: { title: { line: '切换为折线图', bar: '切换为柱状图', stack: '切换为堆叠', tiled: '切换为平铺' } },
        restore: { title: '还原' },
        saveAsImage: { title: '保存为图片', lang: ['右键另存为图片'] },
      },
      series: {
        typeNames: {
          pie: '饼图',
          bar: '柱状图',
          line: '折线图',
          scatter: '散点图',
          effectScatter: '涟漪散点图',
          radar: '雷达图',
          tree: '树图',
          treemap: '矩形树图',
          boxplot: '箱型图',
          candlestick: 'K线图',
          k: 'K线图',
          heatmap: '热力图',
          map: '地图',
          parallel: '平行坐标图',
          lines: '线图',
          graph: '关系图',
          sankey: '桑基图',
          funnel: '漏斗图',
          gauge: '仪表盘图',
          pictorialBar: '象形柱图',
          themeRiver: '主题河流图',
          sunburst: '旭日图',
        },
      },
      aria: {
        general: { withTitle: '这是一个关于“{title}”的图表。', withoutTitle: '这是一个图表，' },
        series: {
          single: {
            prefix: '',
            withName: '图表类型是{seriesType}，表示{seriesName}。',
            withoutName: '图表类型是{seriesType}。',
          },
          multiple: {
            prefix: '它由{seriesCount}个图表系列组成。',
            withName: '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
            withoutName: '第{seriesId}个系列是一个{seriesType}，',
            separator: { middle: '；', end: '。' },
          },
        },
        data: {
          allData: '其数据是——',
          partialData: '其中，前{displayCnt}项是——',
          withName: '{name}的数据是{value}',
          withoutName: '{value}',
          separator: { middle: '，', end: '' },
        },
      },
    },
    gT = 'ZH',
    vT = 'EN',
    yT = vT,
    mT = {},
    _T = {},
    xT = f_.domSupported
      ? (function () {
          var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase();
          return t.indexOf(gT) > -1 ? gT : yT;
        })()
      : yT;
  Js(vT, dT), Js(gT, fT);
  var wT = 1e3,
    bT = 60 * wT,
    ST = 60 * bT,
    MT = 24 * ST,
    TT = 365 * MT,
    CT = {
      year: '{yyyy}',
      month: '{MMM}',
      day: '{d}',
      hour: '{HH}:{mm}',
      minute: '{HH}:{mm}',
      second: '{HH}:{mm}:{ss}',
      millisecond: '{HH}:{mm}:{ss} {SSS}',
      none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}',
    },
    IT = '{yyyy}-{MM}-{dd}',
    DT = {
      year: '{yyyy}',
      month: '{yyyy}-{MM}',
      day: IT,
      hour: IT + ' ' + CT.hour,
      minute: IT + ' ' + CT.minute,
      second: IT + ' ' + CT.second,
      millisecond: CT.none,
    },
    kT = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    AT = [
      'year',
      'half-year',
      'quarter',
      'month',
      'week',
      'half-week',
      'day',
      'half-day',
      'quarter-day',
      'hour',
      'minute',
      'second',
      'millisecond',
    ],
    PT = H,
    LT = /([&<>"'])/g,
    OT = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    RT = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    BT = function (t, e) {
      return '{' + t + (null == e ? '' : e) + '}';
    },
    zT = v,
    ET = ['left', 'right', 'top', 'bottom', 'width', 'height'],
    NT = [
      ['width', 'left', 'right'],
      ['height', 'top', 'bottom'],
    ],
    FT = zl,
    VT = (S(zl, 'vertical'), S(zl, 'horizontal'), Dr()),
    HT = (function (t) {
      function n(e, n, i) {
        var r = t.call(this, e, n, i) || this;
        return (r.uid = js('ec_cpt_model')), r;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n) {
          this.mergeDefaultAndTheme(t, n);
        }),
        (n.prototype.mergeDefaultAndTheme = function (t, e) {
          var n = Nl(this),
            i = n ? Vl(t) : {},
            r = e.getTheme();
          l(t, r.get(this.mainType)), l(t, this.getDefaultOption()), n && Fl(t, i, n);
        }),
        (n.prototype.mergeOption = function (t) {
          l(this.option, t, !0);
          var e = Nl(this);
          e && Fl(this.option, t, e);
        }),
        (n.prototype.optionUpdated = function () {}),
        (n.prototype.getDefaultOption = function () {
          var t = this.constructor;
          if (!Nr(t)) return t.defaultOption;
          var e = VT(this);
          if (!e.defaultOption) {
            for (var n = [], i = t; i; ) {
              var r = i.prototype.defaultOption;
              r && n.push(r), (i = i.superClass);
            }
            for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
            e.defaultOption = o;
          }
          return e.defaultOption;
        }),
        (n.prototype.getReferringComponents = function (t, e) {
          var n = t + 'Index',
            i = t + 'Id';
          return Pr(this.ecModel, t, { index: this.get(n, !0), id: this.get(i, !0) }, e);
        }),
        (n.prototype.getBoxLayoutParams = function () {
          var t = this;
          return {
            left: t.get('left'),
            top: t.get('top'),
            right: t.get('right'),
            bottom: t.get('bottom'),
            width: t.get('width'),
            height: t.get('height'),
          };
        }),
        (n.prototype.getZLevelKey = function () {
          return '';
        }),
        (n.prototype.setZLevel = function (t) {
          this.option.zlevel = t;
        }),
        (n.protoInitialize = (function () {
          var t = n.prototype;
          (t.type = 'component'),
            (t.id = ''),
            (t.name = ''),
            (t.mainType = ''),
            (t.subType = ''),
            (t.componentIndex = 0);
        })()),
        n
      );
    })(cT);
  Hr(HT, cT), Xr(HT), Ks(HT), $s(HT, Wl);
  var WT = '';
  'undefined' != typeof navigator && (WT = navigator.platform || '');
  var GT,
    UT,
    XT = 'rgba(0, 0, 0, 0.2)',
    YT = {
      darkMode: 'auto',
      colorBy: 'series',
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
      aria: {
        decal: {
          decals: [
            { color: XT, dashArrayX: [1, 0], dashArrayY: [2, 5], symbolSize: 1, rotation: Math.PI / 6 },
            {
              color: XT,
              symbol: 'circle',
              dashArrayX: [
                [8, 8],
                [0, 8, 8, 0],
              ],
              dashArrayY: [6, 0],
              symbolSize: 0.8,
            },
            { color: XT, dashArrayX: [1, 0], dashArrayY: [4, 3], rotation: -Math.PI / 4 },
            {
              color: XT,
              dashArrayX: [
                [6, 6],
                [0, 6, 6, 0],
              ],
              dashArrayY: [6, 0],
            },
            {
              color: XT,
              dashArrayX: [
                [1, 0],
                [1, 6],
              ],
              dashArrayY: [1, 0, 6, 0],
              rotation: Math.PI / 4,
            },
            {
              color: XT,
              symbol: 'triangle',
              dashArrayX: [
                [9, 9],
                [0, 9, 9, 0],
              ],
              dashArrayY: [7, 2],
              symbolSize: 0.75,
            },
          ],
        },
      },
      textStyle: {
        fontFamily: WT.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      blendMode: null,
      stateAnimation: { duration: 300, easing: 'cubicOut' },
      animation: 'auto',
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicInOut',
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1,
    },
    ZT = Y(['tooltip', 'label', 'itemName', 'itemId', 'itemGroupId', 'seriesName']),
    qT = 'original',
    jT = 'arrayRows',
    KT = 'objectRows',
    $T = 'keyedColumns',
    QT = 'typedArray',
    JT = 'unknown',
    tC = 'column',
    eC = 'row',
    nC = { Must: 1, Might: 2, Not: 3 },
    iC = Dr(),
    rC = Y(),
    oC = Dr(),
    aC =
      (Dr(),
      (function () {
        function t() {}
        return (
          (t.prototype.getColorFromPalette = function (t, e, n) {
            var i = ur(this.get('color', !0)),
              r = this.get('colorLayer', !0);
            return Ql(this, oC, i, r, t, e, n);
          }),
          (t.prototype.clearColorPalette = function () {
            Jl(this, oC);
          }),
          t
        );
      })()),
    sC = '\x00_ec_inner',
    lC = 1,
    uC = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n, i, r, o) {
          (i = i || {}),
            (this.option = null),
            (this._theme = new cT(i)),
            (this._locale = new cT(r)),
            (this._optionManager = o);
        }),
        (n.prototype.setOption = function (t, e, n) {
          var i = ru(e);
          this._optionManager.setOption(t, n, i), this._resetOption(null, i);
        }),
        (n.prototype.resetOption = function (t, e) {
          return this._resetOption(t, ru(e));
        }),
        (n.prototype._resetOption = function (t, e) {
          var n = !1,
            i = this._optionManager;
          if (!t || 'recreate' === t) {
            var r = i.mountOption('recreate' === t);
            this.option && 'recreate' !== t ? (this.restoreData(), this._mergeOption(r, e)) : UT(this, r), (n = !0);
          }
          if ((('timeline' === t || 'media' === t) && this.restoreData(), !t || 'recreate' === t || 'timeline' === t)) {
            var o = i.getTimelineOption(this);
            o && ((n = !0), this._mergeOption(o, e));
          }
          if (!t || 'recreate' === t || 'media' === t) {
            var a = i.getMediaOption(this);
            a.length &&
              v(
                a,
                function (t) {
                  (n = !0), this._mergeOption(t, e);
                },
                this,
              );
          }
          return n;
        }),
        (n.prototype.mergeOption = function (t) {
          this._mergeOption(t, null);
        }),
        (n.prototype._mergeOption = function (t, e) {
          function n(e) {
            var n = Kl(this, e, ur(t[e])),
              a = r.get(e),
              s = a ? (c && c.get(e) ? 'replaceMerge' : 'normalMerge') : 'replaceAll',
              l = dr(a, n, s);
            Tr(l, e, HT), (i[e] = null), r.set(e, null), o.set(e, 0);
            var u,
              p = [],
              d = [],
              f = 0;
            v(
              l,
              function (t, n) {
                var i = t.existing,
                  r = t.newOption;
                if (r) {
                  var o = 'series' === e,
                    a = HT.getClass(e, t.keyInfo.subType, !o);
                  if (!a) return;
                  if ('tooltip' === e) {
                    if (u) return;
                    u = !0;
                  }
                  if (i && i.constructor === a)
                    (i.name = t.keyInfo.name), i.mergeOption(r, this), i.optionUpdated(r, !1);
                  else {
                    var s = h({ componentIndex: n }, t.keyInfo);
                    (i = new a(r, this, this, s)),
                      h(i, s),
                      t.brandNew && (i.__requireNewView = !0),
                      i.init(r, this, this),
                      i.optionUpdated(null, !0);
                  }
                } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1));
                i ? (p.push(i.option), d.push(i), f++) : (p.push(void 0), d.push(void 0));
              },
              this,
            ),
              (i[e] = p),
              r.set(e, d),
              o.set(e, f),
              'series' === e && GT(this);
          }
          var i = this.option,
            r = this._componentsMap,
            o = this._componentsCount,
            a = [],
            u = Y(),
            c = e && e.replaceMergeMainTypeMap;
          Gl(this),
            v(t, function (t, e) {
              null != t &&
                (HT.hasClass(e) ? e && (a.push(e), u.set(e, !0)) : (i[e] = null == i[e] ? s(t) : l(i[e], t, !0)));
            }),
            c &&
              c.each(function (t, e) {
                HT.hasClass(e) && !u.get(e) && (a.push(e), u.set(e, !0));
              }),
            HT.topologicalTravel(a, HT.getAllClassMainTypes(), n, this),
            this._seriesIndices || GT(this);
        }),
        (n.prototype.getOption = function () {
          var t = s(this.option);
          return (
            v(t, function (e, n) {
              if (HT.hasClass(n)) {
                for (var i = ur(e), r = i.length, o = !1, a = r - 1; a >= 0; a--)
                  i[a] && !Mr(i[a]) ? (o = !0) : ((i[a] = null), !o && r--);
                (i.length = r), (t[n] = i);
              }
            }),
            delete t[sC],
            t
          );
        }),
        (n.prototype.getTheme = function () {
          return this._theme;
        }),
        (n.prototype.getLocaleModel = function () {
          return this._locale;
        }),
        (n.prototype.setUpdatePayload = function (t) {
          this._payload = t;
        }),
        (n.prototype.getUpdatePayload = function () {
          return this._payload;
        }),
        (n.prototype.getComponent = function (t, e) {
          var n = this._componentsMap.get(t);
          if (n) {
            var i = n[e || 0];
            if (i) return i;
            if (null == e) for (var r = 0; r < n.length; r++) if (n[r]) return n[r];
          }
        }),
        (n.prototype.queryComponents = function (t) {
          var e = t.mainType;
          if (!e) return [];
          var n = t.index,
            i = t.id,
            r = t.name,
            o = this._componentsMap.get(e);
          if (!o || !o.length) return [];
          var a;
          return (
            null != n
              ? ((a = []),
                v(ur(n), function (t) {
                  o[t] && a.push(o[t]);
                }))
              : (a =
                  null != i
                    ? nu('id', i, o)
                    : null != r
                    ? nu('name', r, o)
                    : _(o, function (t) {
                        return !!t;
                      })),
            iu(a, t)
          );
        }),
        (n.prototype.findComponents = function (t) {
          function e(t) {
            var e = r + 'Index',
              n = r + 'Id',
              i = r + 'Name';
            return !t || (null == t[e] && null == t[n] && null == t[i])
              ? null
              : { mainType: r, index: t[e], id: t[n], name: t[i] };
          }
          function n(e) {
            return t.filter ? _(e, t.filter) : e;
          }
          var i = t.query,
            r = t.mainType,
            o = e(i),
            a = o
              ? this.queryComponents(o)
              : _(this._componentsMap.get(r), function (t) {
                  return !!t;
                });
          return n(iu(a, t));
        }),
        (n.prototype.eachComponent = function (t, e, n) {
          var i = this._componentsMap;
          if (T(t)) {
            var r = e,
              o = t;
            i.each(function (t, e) {
              for (var n = 0; t && n < t.length; n++) {
                var i = t[n];
                i && o.call(r, e, i, i.componentIndex);
              }
            });
          } else
            for (var a = C(t) ? i.get(t) : k(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
              var l = a[s];
              l && e.call(n, l, l.componentIndex);
            }
        }),
        (n.prototype.getSeriesByName = function (t) {
          var e = br(t, null);
          return _(this._componentsMap.get('series'), function (t) {
            return !!t && null != e && t.name === e;
          });
        }),
        (n.prototype.getSeriesByIndex = function (t) {
          return this._componentsMap.get('series')[t];
        }),
        (n.prototype.getSeriesByType = function (t) {
          return _(this._componentsMap.get('series'), function (e) {
            return !!e && e.subType === t;
          });
        }),
        (n.prototype.getSeries = function () {
          return _(this._componentsMap.get('series'), function (t) {
            return !!t;
          });
        }),
        (n.prototype.getSeriesCount = function () {
          return this._componentsCount.get('series');
        }),
        (n.prototype.eachSeries = function (t, e) {
          v(
            this._seriesIndices,
            function (n) {
              var i = this._componentsMap.get('series')[n];
              t.call(e, i, n);
            },
            this,
          );
        }),
        (n.prototype.eachRawSeries = function (t, e) {
          v(this._componentsMap.get('series'), function (n) {
            n && t.call(e, n, n.componentIndex);
          });
        }),
        (n.prototype.eachSeriesByType = function (t, e, n) {
          v(
            this._seriesIndices,
            function (i) {
              var r = this._componentsMap.get('series')[i];
              r.subType === t && e.call(n, r, i);
            },
            this,
          );
        }),
        (n.prototype.eachRawSeriesByType = function (t, e, n) {
          return v(this.getSeriesByType(t), e, n);
        }),
        (n.prototype.isSeriesFiltered = function (t) {
          return null == this._seriesIndicesMap.get(t.componentIndex);
        }),
        (n.prototype.getCurrentSeriesIndices = function () {
          return (this._seriesIndices || []).slice();
        }),
        (n.prototype.filterSeries = function (t, e) {
          var n = [];
          v(
            this._seriesIndices,
            function (i) {
              var r = this._componentsMap.get('series')[i];
              t.call(e, r, i) && n.push(i);
            },
            this,
          ),
            (this._seriesIndices = n),
            (this._seriesIndicesMap = Y(n));
        }),
        (n.prototype.restoreData = function (t) {
          GT(this);
          var e = this._componentsMap,
            n = [];
          e.each(function (t, e) {
            HT.hasClass(e) && n.push(e);
          }),
            HT.topologicalTravel(n, HT.getAllClassMainTypes(), function (n) {
              v(e.get(n), function (e) {
                !e || ('series' === n && tu(e, t)) || e.restoreData();
              });
            });
        }),
        (n.internalField = (function () {
          (GT = function (t) {
            var e = (t._seriesIndices = []);
            v(t._componentsMap.get('series'), function (t) {
              t && e.push(t.componentIndex);
            }),
              (t._seriesIndicesMap = Y(e));
          }),
            (UT = function (t, e) {
              (t.option = {}), (t.option[sC] = lC), (t._componentsMap = Y({ series: [] })), (t._componentsCount = Y());
              var n = e.aria;
              k(n) && null == n.enabled && (n.enabled = !0),
                eu(e, t._theme.option),
                l(e, YT, !1),
                t._mergeOption(e, null);
            });
        })()),
        n
      );
    })(cT);
  f(uC, aC);
  var hC,
    cC,
    pC,
    dC,
    fC,
    gC,
    vC = [
      'getDom',
      'getZr',
      'getWidth',
      'getHeight',
      'getDevicePixelRatio',
      'dispatchAction',
      'isSSR',
      'isDisposed',
      'on',
      'off',
      'getDataURL',
      'getConnectedDataURL',
      'getOption',
      'getId',
      'updateLabelLayout',
    ],
    yC = (function () {
      function t(t) {
        v(
          vC,
          function (e) {
            this[e] = z_(t[e], t);
          },
          this,
        );
      }
      return t;
    })(),
    mC = {},
    _C = (function () {
      function t() {
        this._coordinateSystems = [];
      }
      return (
        (t.prototype.create = function (t, e) {
          var n = [];
          v(mC, function (i) {
            var r = i.create(t, e);
            n = n.concat(r || []);
          }),
            (this._coordinateSystems = n);
        }),
        (t.prototype.update = function (t, e) {
          v(this._coordinateSystems, function (n) {
            n.update && n.update(t, e);
          });
        }),
        (t.prototype.getCoordinateSystems = function () {
          return this._coordinateSystems.slice();
        }),
        (t.register = function (t, e) {
          mC[t] = e;
        }),
        (t.get = function (t) {
          return mC[t];
        }),
        t
      );
    })(),
    xC = /^(min|max)?(.+)$/,
    wC = (function () {
      function t(t) {
        (this._timelineOptions = []), (this._mediaList = []), (this._currentMediaIndices = []), (this._api = t);
      }
      return (
        (t.prototype.setOption = function (t, e) {
          t &&
            (v(ur(t.series), function (t) {
              t && t.data && P(t.data) && U(t.data);
            }),
            v(ur(t.dataset), function (t) {
              t && t.source && P(t.source) && U(t.source);
            })),
            (t = s(t));
          var n = this._optionBackup,
            i = ou(t, e, !n);
          (this._newBaseOption = i.baseOption),
            n
              ? (i.timelineOptions.length && (n.timelineOptions = i.timelineOptions),
                i.mediaList.length && (n.mediaList = i.mediaList),
                i.mediaDefault && (n.mediaDefault = i.mediaDefault))
              : (this._optionBackup = i);
        }),
        (t.prototype.mountOption = function (t) {
          var e = this._optionBackup;
          return (
            (this._timelineOptions = e.timelineOptions),
            (this._mediaList = e.mediaList),
            (this._mediaDefault = e.mediaDefault),
            (this._currentMediaIndices = []),
            s(t ? e.baseOption : this._newBaseOption)
          );
        }),
        (t.prototype.getTimelineOption = function (t) {
          var e,
            n = this._timelineOptions;
          if (n.length) {
            var i = t.getComponent('timeline');
            i && (e = s(n[i.getCurrentIndex()]));
          }
          return e;
        }),
        (t.prototype.getMediaOption = function () {
          var t = this._api.getWidth(),
            e = this._api.getHeight(),
            n = this._mediaList,
            i = this._mediaDefault,
            r = [],
            o = [];
          if (!n.length && !i) return o;
          for (var a = 0, l = n.length; l > a; a++) au(n[a].query, t, e) && r.push(a);
          return (
            !r.length && i && (r = [-1]),
            r.length &&
              !lu(r, this._currentMediaIndices) &&
              (o = y(r, function (t) {
                return s(-1 === t ? i.option : n[t].option);
              })),
            (this._currentMediaIndices = r),
            o
          );
        }),
        t
      );
    })(),
    bC = v,
    SC = k,
    MC = ['areaStyle', 'lineStyle', 'nodeStyle', 'linkStyle', 'chordStyle', 'label', 'labelLine'],
    TC = [
      ['x', 'left'],
      ['y', 'top'],
      ['x2', 'right'],
      ['y2', 'bottom'],
    ],
    CC = ['grid', 'geo', 'parallel', 'legend', 'toolbox', 'title', 'visualMap', 'dataZoom', 'timeline'],
    IC = [
      ['borderRadius', 'barBorderRadius'],
      ['borderColor', 'barBorderColor'],
      ['borderWidth', 'barBorderWidth'],
    ],
    DC = (function () {
      function t(t) {
        (this.data = t.data || (t.sourceFormat === $T ? {} : [])),
          (this.sourceFormat = t.sourceFormat || JT),
          (this.seriesLayoutBy = t.seriesLayoutBy || tC),
          (this.startIndex = t.startIndex || 0),
          (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
          (this.metaRawOption = t.metaRawOption);
        var e = (this.dimensionsDefine = t.dimensionsDefine);
        if (e)
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            null == i.type && ql(this, n) === nC.Must && (i.type = 'ordinal');
          }
      }
      return t;
    })(),
    kC = (function () {
      function t(t, e) {
        var n = ku(t) ? t : Pu(t);
        this._source = n;
        var i = (this._data = n.data);
        n.sourceFormat === QT && ((this._offset = 0), (this._dimSize = e), (this._data = i)), fC(this, i, n);
      }
      return (
        (t.prototype.getSource = function () {
          return this._source;
        }),
        (t.prototype.count = function () {
          return 0;
        }),
        (t.prototype.getItem = function () {}),
        (t.prototype.appendData = function () {}),
        (t.prototype.clean = function () {}),
        (t.protoInitialize = (function () {
          var e = t.prototype;
          (e.pure = !1), (e.persistent = !0);
        })()),
        (t.internalField = (function () {
          function t(t) {
            for (var e = 0; e < t.length; e++) this._data.push(t[e]);
          }
          var e;
          fC = function (t, e, o) {
            var a = o.sourceFormat,
              s = o.seriesLayoutBy,
              l = o.startIndex,
              u = o.dimensionsDefine,
              c = dC[Wu(a, s)];
            if ((h(t, c), a === QT)) (t.getItem = n), (t.count = r), (t.fillStorage = i);
            else {
              var p = Fu(a, s);
              t.getItem = z_(p, null, e, l, u);
              var d = Vu(a, s);
              t.count = z_(d, null, e, l, u);
            }
          };
          var n = function (t, e) {
              (t -= this._offset), (e = e || []);
              for (var n = this._data, i = this._dimSize, r = i * t, o = 0; i > o; o++) e[o] = n[r + o];
              return e;
            },
            i = function (t, e, n, i) {
              for (var r = this._data, o = this._dimSize, a = 0; o > a; a++) {
                for (
                  var s = i[a],
                    l = null == s[0] ? 1 / 0 : s[0],
                    u = null == s[1] ? -1 / 0 : s[1],
                    h = e - t,
                    c = n[a],
                    p = 0;
                  h > p;
                  p++
                ) {
                  var d = r[p * o + a];
                  (c[t + p] = d), l > d && (l = d), d > u && (u = d);
                }
                (s[0] = l), (s[1] = u);
              }
            },
            r = function () {
              return this._data ? this._data.length / this._dimSize : 0;
            };
          (e = {}),
            (e[jT + '_' + tC] = { pure: !0, appendData: t }),
            (e[jT + '_' + eC] = {
              pure: !0,
              appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
              },
            }),
            (e[KT] = { pure: !0, appendData: t }),
            (e[$T] = {
              pure: !0,
              appendData: function (t) {
                var e = this._data;
                v(t, function (t, n) {
                  for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
                });
              },
            }),
            (e[qT] = { appendData: t }),
            (e[QT] = {
              persistent: !1,
              pure: !0,
              appendData: function (t) {
                this._data = t;
              },
              clean: function () {
                (this._offset += this.count()), (this._data = null);
              },
            }),
            (dC = e);
        })()),
        t
      );
    })(),
    AC = function (t, e, n, i) {
      return t[i];
    },
    PC =
      ((hC = {}),
      (hC[jT + '_' + tC] = function (t, e, n, i) {
        return t[i + e];
      }),
      (hC[jT + '_' + eC] = function (t, e, n, i, r) {
        i += e;
        for (var o = r || [], a = t, s = 0; s < a.length; s++) {
          var l = a[s];
          o[s] = l ? l[i] : null;
        }
        return o;
      }),
      (hC[KT] = AC),
      (hC[$T] = function (t, e, n, i, r) {
        for (var o = r || [], a = 0; a < n.length; a++) {
          var s = n[a].name,
            l = t[s];
          o[a] = l ? l[i] : null;
        }
        return o;
      }),
      (hC[qT] = AC),
      hC),
    LC = function (t) {
      return t.length;
    },
    OC =
      ((cC = {}),
      (cC[jT + '_' + tC] = function (t, e) {
        return Math.max(0, t.length - e);
      }),
      (cC[jT + '_' + eC] = function (t, e) {
        var n = t[0];
        return n ? Math.max(0, n.length - e) : 0;
      }),
      (cC[KT] = LC),
      (cC[$T] = function (t, e, n) {
        var i = n[0].name,
          r = t[i];
        return r ? r.length : 0;
      }),
      (cC[qT] = LC),
      cC),
    RC = function (t, e) {
      return t[e];
    },
    BC =
      ((pC = {}),
      (pC[jT] = RC),
      (pC[KT] = function (t, e, n) {
        return t[n];
      }),
      (pC[$T] = RC),
      (pC[qT] = function (t, e) {
        var n = cr(t);
        return n instanceof Array ? n[e] : n;
      }),
      (pC[QT] = RC),
      pC),
    zC = /\{@(.+?)\}/g,
    EC = (function () {
      function t() {}
      return (
        (t.prototype.getDataParams = function (t, e) {
          var n = this.getData(e),
            i = this.getRawValue(t, e),
            r = n.getRawIndex(t),
            o = n.getName(t),
            a = n.getRawDataItem(t),
            s = n.getItemVisual(t, 'style'),
            l = s && s[n.getItemVisual(t, 'drawType') || 'fill'],
            u = s && s.stroke,
            h = this.mainType,
            c = 'series' === h,
            p = n.userOutput && n.userOutput.get();
          return {
            componentType: h,
            componentSubType: this.subType,
            componentIndex: this.componentIndex,
            seriesType: c ? this.subType : null,
            seriesIndex: this.seriesIndex,
            seriesId: c ? this.id : null,
            seriesName: c ? this.name : null,
            name: o,
            dataIndex: r,
            data: a,
            dataType: e,
            value: i,
            color: l,
            borderColor: u,
            dimensionNames: p ? p.fullDimensions : null,
            encode: p ? p.encode : null,
            $vars: ['seriesName', 'name', 'value'],
          };
        }),
        (t.prototype.getFormattedLabel = function (t, e, n, i, r, o) {
          e = e || 'normal';
          var a = this.getData(n),
            s = this.getDataParams(t, n);
          if ((o && (s.value = o.interpolatedValue), null != i && M(s.value) && (s.value = s.value[i]), !r)) {
            var l = a.getItemModel(t);
            r = l.get('normal' === e ? ['label', 'formatter'] : [e, 'label', 'formatter']);
          }
          if (T(r)) return (s.status = e), (s.dimensionIndex = i), r(s);
          if (C(r)) {
            var u = Al(r, s);
            return u.replace(zC, function (e, n) {
              var i = n.length,
                r = n;
              '[' === r.charAt(0) && ']' === r.charAt(i - 1) && (r = +r.slice(1, i - 1));
              var s = Gu(a, t, r);
              if (o && M(o.interpolatedValue)) {
                var l = a.getDimensionIndex(r);
                l >= 0 && (s = o.interpolatedValue[l]);
              }
              return null != s ? s + '' : '';
            });
          }
        }),
        (t.prototype.getRawValue = function (t, e) {
          return Gu(this.getData(e), t);
        }),
        (t.prototype.formatTooltip = function () {}),
        t
      );
    })(),
    NC = (function () {
      function t(t) {
        (t = t || {}),
          (this._reset = t.reset),
          (this._plan = t.plan),
          (this._count = t.count),
          (this._onDirty = t.onDirty),
          (this._dirty = !0);
      }
      return (
        (t.prototype.perform = function (t) {
          function e(t) {
            return !(t >= 1) && (t = 1), t;
          }
          var n = this._upstream,
            i = t && t.skip;
          if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData;
          }
          this.__pipeline && (this.__pipeline.currentTask = this);
          var o;
          this._plan && !i && (o = this._plan(this.context));
          var a = e(this._modBy),
            s = this._modDataCount || 0,
            l = e(t && t.modBy),
            u = (t && t.modDataCount) || 0;
          (a !== l || s !== u) && (o = 'reset');
          var h;
          (this._dirty || 'reset' === o) && ((this._dirty = !1), (h = this._doReset(i))),
            (this._modBy = l),
            (this._modDataCount = u);
          var c = t && t.step;
          if (
            ((this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0), this._progress)
          ) {
            var p = this._dueIndex,
              d = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (h || d > p)) {
              var f = this._progress;
              if (M(f)) for (var g = 0; g < f.length; g++) this._doProgress(f[g], p, d, l, u);
              else this._doProgress(f, p, d, l, u);
            }
            this._dueIndex = d;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : d;
            this._outputDueEnd = v;
          } else
            this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
          return this.unfinished();
        }),
        (t.prototype.dirty = function () {
          (this._dirty = !0), this._onDirty && this._onDirty(this.context);
        }),
        (t.prototype._doProgress = function (t, e, n, i, r) {
          FC.reset(e, n, i, r),
            (this._callingProgress = t),
            this._callingProgress({ start: e, end: n, count: n - e, next: FC.next }, this.context);
        }),
        (t.prototype._doReset = function (t) {
          (this._dueIndex = this._outputDueEnd = this._dueEnd = 0), (this._settedOutputEnd = null);
          var e, n;
          !t &&
            this._reset &&
            ((e = this._reset(this.context)),
            e && e.progress && ((n = e.forceFirstProgress), (e = e.progress)),
            M(e) && !e.length && (e = null)),
            (this._progress = e),
            (this._modBy = this._modDataCount = null);
          var i = this._downstream;
          return i && i.dirty(), n;
        }),
        (t.prototype.unfinished = function () {
          return this._progress && this._dueIndex < this._dueEnd;
        }),
        (t.prototype.pipe = function (t) {
          (this._downstream !== t || this._dirty) && ((this._downstream = t), (t._upstream = this), t.dirty());
        }),
        (t.prototype.dispose = function () {
          this._disposed ||
            (this._upstream && (this._upstream._downstream = null),
            this._downstream && (this._downstream._upstream = null),
            (this._dirty = !1),
            (this._disposed = !0));
        }),
        (t.prototype.getUpstream = function () {
          return this._upstream;
        }),
        (t.prototype.getDownstream = function () {
          return this._downstream;
        }),
        (t.prototype.setOutputEnd = function (t) {
          this._outputDueEnd = this._settedOutputEnd = t;
        }),
        t
      );
    })(),
    FC = (function () {
      function t() {
        return n > i ? i++ : null;
      }
      function e() {
        var t = (i % a) * r + Math.ceil(i / a),
          e = i >= n ? null : o > t ? t : i;
        return i++, e;
      }
      var n,
        i,
        r,
        o,
        a,
        s = {
          reset: function (l, u, h, c) {
            (i = l), (n = u), (r = h), (o = c), (a = Math.ceil(o / r)), (s.next = r > 1 && o > 0 ? e : t);
          },
        };
      return s;
    })(),
    VC =
      (Y({
        number: function (t) {
          return parseFloat(t);
        },
        time: function (t) {
          return +Ki(t);
        },
        trim: function (t) {
          return C(t) ? G(t) : t;
        },
      }),
      {
        lt: function (t, e) {
          return e > t;
        },
        lte: function (t, e) {
          return e >= t;
        },
        gt: function (t, e) {
          return t > e;
        },
        gte: function (t, e) {
          return t >= e;
        },
      }),
    HC =
      ((function () {
        function t(t, e) {
          if (!D(e)) {
            var n = '';
            sr(n);
          }
          (this._opFn = VC[t]), (this._rvalFloat = nr(e));
        }
        return (
          (t.prototype.evaluate = function (t) {
            return D(t) ? this._opFn(t, this._rvalFloat) : this._opFn(nr(t), this._rvalFloat);
          }),
          t
        );
      })(),
      (function () {
        function t(t, e) {
          var n = 'desc' === t;
          (this._resultLT = n ? 1 : -1),
            null == e && (e = n ? 'min' : 'max'),
            (this._incomparable = 'min' === e ? -1 / 0 : 1 / 0);
        }
        return (
          (t.prototype.evaluate = function (t, e) {
            var n = D(t) ? t : nr(t),
              i = D(e) ? e : nr(e),
              r = isNaN(n),
              o = isNaN(i);
            if ((r && (n = this._incomparable), o && (i = this._incomparable), r && o)) {
              var a = C(t),
                s = C(e);
              a && (n = s ? t : 0), s && (i = a ? e : 0);
            }
            return i > n ? this._resultLT : n > i ? -this._resultLT : 0;
          }),
          t
        );
      })()),
    WC =
      ((function () {
        function t(t, e) {
          (this._rval = e), (this._isEQ = t), (this._rvalTypeof = typeof e), (this._rvalFloat = nr(e));
        }
        return (
          (t.prototype.evaluate = function (t) {
            var e = t === this._rval;
            if (!e) {
              var n = typeof t;
              n === this._rvalTypeof ||
                ('number' !== n && 'number' !== this._rvalTypeof) ||
                (e = nr(t) === this._rvalFloat);
            }
            return this._isEQ ? e : !e;
          }),
          t
        );
      })(),
      (function () {
        function t() {}
        return (
          (t.prototype.getRawData = function () {
            throw new Error('not supported');
          }),
          (t.prototype.getRawDataItem = function () {
            throw new Error('not supported');
          }),
          (t.prototype.cloneRawData = function () {}),
          (t.prototype.getDimensionInfo = function () {}),
          (t.prototype.cloneAllDimensionInfo = function () {}),
          (t.prototype.count = function () {}),
          (t.prototype.retrieveValue = function () {}),
          (t.prototype.retrieveValueFromItem = function () {}),
          (t.prototype.convertValue = function (t, e) {
            return Yu(t, e);
          }),
          t
        );
      })()),
    GC = Y(),
    UC = 'undefined',
    XC = typeof Uint32Array === UC ? Array : Uint32Array,
    YC = typeof Uint16Array === UC ? Array : Uint16Array,
    ZC = typeof Int32Array === UC ? Array : Int32Array,
    qC = typeof Float64Array === UC ? Array : Float64Array,
    jC = { float: qC, int: ZC, ordinal: Array, number: Array, time: qC },
    KC = (function () {
      function t() {
        (this._chunks = []),
          (this._rawExtent = []),
          (this._extent = []),
          (this._count = 0),
          (this._rawCount = 0),
          (this._calcDimNameToIdx = Y());
      }
      return (
        (t.prototype.initData = function (t, e, n) {
          (this._provider = t),
            (this._chunks = []),
            (this._indices = null),
            (this.getRawIndex = this._getRawIdxIdentity);
          var i = t.getSource(),
            r = (this.defaultDimValueGetter = gC[i.sourceFormat]);
          (this._dimValueGetter = n || r), (this._rawExtent = []);
          Nu(i);
          (this._dimensions = y(e, function (t) {
            return { type: t.type, property: t.property };
          })),
            this._initDataFromProvider(0, t.count());
        }),
        (t.prototype.getProvider = function () {
          return this._provider;
        }),
        (t.prototype.getSource = function () {
          return this._provider.getSource();
        }),
        (t.prototype.ensureCalculationDimension = function (t, e) {
          var n = this._calcDimNameToIdx,
            i = this._dimensions,
            r = n.get(t);
          if (null != r) {
            if (i[r].type === e) return r;
          } else r = i.length;
          return (
            (i[r] = { type: e }),
            n.set(t, r),
            (this._chunks[r] = new jC[e || 'float'](this._rawCount)),
            (this._rawExtent[r] = ih()),
            r
          );
        }),
        (t.prototype.collectOrdinalMeta = function (t, e) {
          var n = this._chunks[t],
            i = this._dimensions[t],
            r = this._rawExtent,
            o = i.ordinalOffset || 0,
            a = n.length;
          0 === o && (r[t] = ih());
          for (var s = r[t], l = o; a > l; l++) {
            var u = (n[l] = e.parseAndCollect(n[l]));
            isNaN(u) || ((s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1])));
          }
          (i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = 'ordinal');
        }),
        (t.prototype.getOrdinalMeta = function (t) {
          var e = this._dimensions[t],
            n = e.ordinalMeta;
          return n;
        }),
        (t.prototype.getDimensionProperty = function (t) {
          var e = this._dimensions[t];
          return e && e.property;
        }),
        (t.prototype.appendData = function (t) {
          var e = this._provider,
            n = this.count();
          e.appendData(t);
          var i = e.count();
          return e.persistent || (i += n), i > n && this._initDataFromProvider(n, i, !0), [n, i];
        }),
        (t.prototype.appendValues = function (t, e) {
          for (
            var n = this._chunks,
              i = this._dimensions,
              r = i.length,
              o = this._rawExtent,
              a = this.count(),
              s = a + Math.max(t.length, e || 0),
              l = 0;
            r > l;
            l++
          ) {
            var u = i[l];
            oh(n, l, u.type, s, !0);
          }
          for (var h = [], c = a; s > c; c++)
            for (var p = c - a, d = 0; r > d; d++) {
              var u = i[d],
                f = gC.arrayRows.call(this, t[p] || h, u.property, p, d);
              n[d][c] = f;
              var g = o[d];
              f < g[0] && (g[0] = f), f > g[1] && (g[1] = f);
            }
          return (this._rawCount = this._count = s), { start: a, end: s };
        }),
        (t.prototype._initDataFromProvider = function (t, e, n) {
          for (
            var i = this._provider,
              r = this._chunks,
              o = this._dimensions,
              a = o.length,
              s = this._rawExtent,
              l = y(o, function (t) {
                return t.property;
              }),
              u = 0;
            a > u;
            u++
          ) {
            var h = o[u];
            s[u] || (s[u] = ih()), oh(r, u, h.type, e, n);
          }
          if (i.fillStorage) i.fillStorage(t, e, r, s);
          else
            for (var c = [], p = t; e > p; p++) {
              c = i.getItem(p, c);
              for (var d = 0; a > d; d++) {
                var f = r[d],
                  g = this._dimValueGetter(c, l[d], p, d);
                f[p] = g;
                var v = s[d];
                g < v[0] && (v[0] = g), g > v[1] && (v[1] = g);
              }
            }
          !i.persistent && i.clean && i.clean(), (this._rawCount = this._count = e), (this._extent = []);
        }),
        (t.prototype.count = function () {
          return this._count;
        }),
        (t.prototype.get = function (t, e) {
          if (!(e >= 0 && e < this._count)) return 0 / 0;
          var n = this._chunks[t];
          return n ? n[this.getRawIndex(e)] : 0 / 0;
        }),
        (t.prototype.getValues = function (t, e) {
          var n = [],
            i = [];
          if (null == e) {
            (e = t), (t = []);
            for (var r = 0; r < this._dimensions.length; r++) i.push(r);
          } else i = t;
          for (var r = 0, o = i.length; o > r; r++) n.push(this.get(i[r], e));
          return n;
        }),
        (t.prototype.getByRawIndex = function (t, e) {
          if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
          var n = this._chunks[t];
          return n ? n[e] : 0 / 0;
        }),
        (t.prototype.getSum = function (t) {
          var e = this._chunks[t],
            n = 0;
          if (e)
            for (var i = 0, r = this.count(); r > i; i++) {
              var o = this.get(t, i);
              isNaN(o) || (n += o);
            }
          return n;
        }),
        (t.prototype.getMedian = function (t) {
          var e = [];
          this.each([t], function (t) {
            isNaN(t) || e.push(t);
          });
          var n = e.sort(function (t, e) {
              return t - e;
            }),
            i = this.count();
          return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
        }),
        (t.prototype.indexOfRawIndex = function (t) {
          if (t >= this._rawCount || 0 > t) return -1;
          if (!this._indices) return t;
          var e = this._indices,
            n = e[t];
          if (null != n && n < this._count && n === t) return t;
          for (var i = 0, r = this._count - 1; r >= i; ) {
            var o = ((i + r) / 2) | 0;
            if (e[o] < t) i = o + 1;
            else {
              if (!(e[o] > t)) return o;
              r = o - 1;
            }
          }
          return -1;
        }),
        (t.prototype.indicesOfNearest = function (t, e, n) {
          var i = this._chunks,
            r = i[t],
            o = [];
          if (!r) return o;
          null == n && (n = 1 / 0);
          for (var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
            var c = this.getRawIndex(u),
              p = e - r[c],
              d = Math.abs(p);
            n >= d && ((a > d || (d === a && p >= 0 && 0 > s)) && ((a = d), (s = p), (l = 0)), p === s && (o[l++] = u));
          }
          return (o.length = l), o;
        }),
        (t.prototype.getIndices = function () {
          var t,
            e = this._indices;
          if (e) {
            var n = e.constructor,
              i = this._count;
            if (n === Array) {
              t = new n(i);
              for (var r = 0; i > r; r++) t[r] = e[r];
            } else t = new n(e.buffer, 0, i);
          } else {
            var n = nh(this._rawCount);
            t = new n(this.count());
            for (var r = 0; r < t.length; r++) t[r] = r;
          }
          return t;
        }),
        (t.prototype.filter = function (t, e) {
          if (!this._count) return this;
          for (
            var n = this.clone(),
              i = n.count(),
              r = nh(n._rawCount),
              o = new r(i),
              a = [],
              s = t.length,
              l = 0,
              u = t[0],
              h = n._chunks,
              c = 0;
            i > c;
            c++
          ) {
            var p = void 0,
              d = n.getRawIndex(c);
            if (0 === s) p = e(c);
            else if (1 === s) {
              var f = h[u][d];
              p = e(f, c);
            } else {
              for (var g = 0; s > g; g++) a[g] = h[t[g]][d];
              (a[g] = c), (p = e.apply(null, a));
            }
            p && (o[l++] = d);
          }
          return i > l && (n._indices = o), (n._count = l), (n._extent = []), n._updateGetRawIdx(), n;
        }),
        (t.prototype.selectRange = function (t) {
          var e = this.clone(),
            n = e._count;
          if (!n) return this;
          var i = w(t),
            r = i.length;
          if (!r) return this;
          var o = e.count(),
            a = nh(e._rawCount),
            s = new a(o),
            l = 0,
            u = i[0],
            h = t[u][0],
            c = t[u][1],
            p = e._chunks,
            d = !1;
          if (!e._indices) {
            var f = 0;
            if (1 === r) {
              for (var g = p[i[0]], v = 0; n > v; v++) {
                var y = g[v];
                ((y >= h && c >= y) || isNaN(y)) && (s[l++] = f), f++;
              }
              d = !0;
            } else if (2 === r) {
              for (var g = p[i[0]], m = p[i[1]], _ = t[i[1]][0], x = t[i[1]][1], v = 0; n > v; v++) {
                var y = g[v],
                  b = m[v];
                ((y >= h && c >= y) || isNaN(y)) && ((b >= _ && x >= b) || isNaN(b)) && (s[l++] = f), f++;
              }
              d = !0;
            }
          }
          if (!d)
            if (1 === r)
              for (var v = 0; o > v; v++) {
                var S = e.getRawIndex(v),
                  y = p[i[0]][S];
                ((y >= h && c >= y) || isNaN(y)) && (s[l++] = S);
              }
            else
              for (var v = 0; o > v; v++) {
                for (var M = !0, S = e.getRawIndex(v), T = 0; r > T; T++) {
                  var C = i[T],
                    y = p[C][S];
                  (y < t[C][0] || y > t[C][1]) && (M = !1);
                }
                M && (s[l++] = e.getRawIndex(v));
              }
          return o > l && (e._indices = s), (e._count = l), (e._extent = []), e._updateGetRawIdx(), e;
        }),
        (t.prototype.map = function (t, e) {
          var n = this.clone(t);
          return this._updateDims(n, t, e), n;
        }),
        (t.prototype.modify = function (t, e) {
          this._updateDims(this, t, e);
        }),
        (t.prototype._updateDims = function (t, e, n) {
          for (
            var i = t._chunks, r = [], o = e.length, a = t.count(), s = [], l = t._rawExtent, u = 0;
            u < e.length;
            u++
          )
            l[e[u]] = ih();
          for (var h = 0; a > h; h++) {
            for (var c = t.getRawIndex(h), p = 0; o > p; p++) s[p] = i[e[p]][c];
            s[o] = h;
            var d = n && n.apply(null, s);
            if (null != d) {
              'object' != typeof d && ((r[0] = d), (d = r));
              for (var u = 0; u < d.length; u++) {
                var f = e[u],
                  g = d[u],
                  v = l[f],
                  y = i[f];
                y && (y[c] = g), g < v[0] && (v[0] = g), g > v[1] && (v[1] = g);
              }
            }
          }
        }),
        (t.prototype.lttbDownSample = function (t, e) {
          var n,
            i,
            r,
            o = this.clone([t], !0),
            a = o._chunks,
            s = a[t],
            l = this.count(),
            u = 0,
            h = Math.floor(1 / e),
            c = this.getRawIndex(0),
            p = new (nh(this._rawCount))(Math.min(2 * (Math.ceil(l / h) + 2), l));
          p[u++] = c;
          for (var d = 1; l - 1 > d; d += h) {
            for (
              var f = Math.min(d + h, l - 1), g = Math.min(d + 2 * h, l), v = (g + f) / 2, y = 0, m = f;
              g > m;
              m++
            ) {
              var _ = this.getRawIndex(m),
                x = s[_];
              isNaN(x) || (y += x);
            }
            y /= g - f;
            var w = d,
              b = Math.min(d + h, l),
              S = d - 1,
              M = s[c];
            (n = -1), (r = w);
            for (var T = -1, C = 0, m = w; b > m; m++) {
              var _ = this.getRawIndex(m),
                x = s[_];
              isNaN(x)
                ? (C++, 0 > T && (T = _))
                : ((i = Math.abs((S - v) * (x - M) - (S - m) * (y - M))), i > n && ((n = i), (r = _)));
            }
            C > 0 && b - w > C && ((p[u++] = Math.min(T, r)), (r = Math.max(T, r))), (p[u++] = r), (c = r);
          }
          return (
            (p[u++] = this.getRawIndex(l - 1)), (o._count = u), (o._indices = p), (o.getRawIndex = this._getRawIdx), o
          );
        }),
        (t.prototype.downSample = function (t, e, n, i) {
          for (
            var r = this.clone([t], !0),
              o = r._chunks,
              a = [],
              s = Math.floor(1 / e),
              l = o[t],
              u = this.count(),
              h = (r._rawExtent[t] = ih()),
              c = new (nh(this._rawCount))(Math.ceil(u / s)),
              p = 0,
              d = 0;
            u > d;
            d += s
          ) {
            s > u - d && ((s = u - d), (a.length = s));
            for (var f = 0; s > f; f++) {
              var g = this.getRawIndex(d + f);
              a[f] = l[g];
            }
            var v = n(a),
              y = this.getRawIndex(Math.min(d + i(a, v) || 0, u - 1));
            (l[y] = v), v < h[0] && (h[0] = v), v > h[1] && (h[1] = v), (c[p++] = y);
          }
          return (r._count = p), (r._indices = c), r._updateGetRawIdx(), r;
        }),
        (t.prototype.each = function (t, e) {
          if (this._count)
            for (var n = t.length, i = this._chunks, r = 0, o = this.count(); o > r; r++) {
              var a = this.getRawIndex(r);
              switch (n) {
                case 0:
                  e(r);
                  break;
                case 1:
                  e(i[t[0]][a], r);
                  break;
                case 2:
                  e(i[t[0]][a], i[t[1]][a], r);
                  break;
                default:
                  for (var s = 0, l = []; n > s; s++) l[s] = i[t[s]][a];
                  (l[s] = r), e.apply(null, l);
              }
            }
        }),
        (t.prototype.getDataExtent = function (t) {
          var e = this._chunks[t],
            n = ih();
          if (!e) return n;
          var i,
            r = this.count(),
            o = !this._indices;
          if (o) return this._rawExtent[t].slice();
          if ((i = this._extent[t])) return i.slice();
          i = n;
          for (var a = i[0], s = i[1], l = 0; r > l; l++) {
            var u = this.getRawIndex(l),
              h = e[u];
            a > h && (a = h), h > s && (s = h);
          }
          return (i = [a, s]), (this._extent[t] = i), i;
        }),
        (t.prototype.getRawDataItem = function (t) {
          var e = this.getRawIndex(t);
          if (this._provider.persistent) return this._provider.getItem(e);
          for (var n = [], i = this._chunks, r = 0; r < i.length; r++) n.push(i[r][e]);
          return n;
        }),
        (t.prototype.clone = function (e, n) {
          var i = new t(),
            r = this._chunks,
            o =
              e &&
              m(
                e,
                function (t, e) {
                  return (t[e] = !0), t;
                },
                {},
              );
          if (o) for (var a = 0; a < r.length; a++) i._chunks[a] = o[a] ? rh(r[a]) : r[a];
          else i._chunks = r;
          return this._copyCommonProps(i), n || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
        }),
        (t.prototype._copyCommonProps = function (t) {
          (t._count = this._count),
            (t._rawCount = this._rawCount),
            (t._provider = this._provider),
            (t._dimensions = this._dimensions),
            (t._extent = s(this._extent)),
            (t._rawExtent = s(this._rawExtent));
        }),
        (t.prototype._cloneIndices = function () {
          if (this._indices) {
            var t = this._indices.constructor,
              e = void 0;
            if (t === Array) {
              var n = this._indices.length;
              e = new t(n);
              for (var i = 0; n > i; i++) e[i] = this._indices[i];
            } else e = new t(this._indices);
            return e;
          }
          return null;
        }),
        (t.prototype._getRawIdxIdentity = function (t) {
          return t;
        }),
        (t.prototype._getRawIdx = function (t) {
          return t < this._count && t >= 0 ? this._indices[t] : -1;
        }),
        (t.prototype._updateGetRawIdx = function () {
          this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
        }),
        (t.internalField = (function () {
          function t(t, e, n, i) {
            return Yu(t[i], this._dimensions[i]);
          }
          gC = {
            arrayRows: t,
            objectRows: function (t, e, n, i) {
              return Yu(t[e], this._dimensions[i]);
            },
            keyedColumns: t,
            original: function (t, e, n, i) {
              var r = t && (null == t.value ? t : t.value);
              return Yu(r instanceof Array ? r[i] : r, this._dimensions[i]);
            },
            typedArray: function (t, e, n, i) {
              return t[i];
            },
          };
        })()),
        t
      );
    })(),
    $C = (function () {
      function t(t) {
        (this._sourceList = []),
          (this._storeList = []),
          (this._upstreamSignList = []),
          (this._versionSignBase = 0),
          (this._dirty = !0),
          (this._sourceHost = t);
      }
      return (
        (t.prototype.dirty = function () {
          this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0);
        }),
        (t.prototype._setLocalSource = function (t, e) {
          (this._sourceList = t),
            (this._upstreamSignList = e),
            this._versionSignBase++,
            this._versionSignBase > 9e10 && (this._versionSignBase = 0);
        }),
        (t.prototype._getVersionSign = function () {
          return this._sourceHost.uid + '_' + this._versionSignBase;
        }),
        (t.prototype.prepareSource = function () {
          this._isDirty() && (this._createSource(), (this._dirty = !1));
        }),
        (t.prototype._createSource = function () {
          this._setLocalSource([], []);
          var t,
            e,
            n = this._sourceHost,
            i = this._getUpstreamSourceManagers(),
            r = !!i.length;
          if (sh(n)) {
            var o = n,
              a = void 0,
              s = void 0,
              l = void 0;
            if (r) {
              var u = i[0];
              u.prepareSource(), (l = u.getSource()), (a = l.data), (s = l.sourceFormat), (e = [u._getVersionSign()]);
            } else (a = o.get('data', !0)), (s = P(a) ? QT : qT), (e = []);
            var h = this._getSourceMetaRawOption() || {},
              c = (l && l.metaRawOption) || {},
              p = N(h.seriesLayoutBy, c.seriesLayoutBy) || null,
              d = N(h.sourceHeader, c.sourceHeader),
              f = N(h.dimensions, c.dimensions),
              g = p !== c.seriesLayoutBy || !!d != !!c.sourceHeader || f;
            t = g ? [Au(a, { seriesLayoutBy: p, sourceHeader: d, dimensions: f }, s)] : [];
          } else {
            var v = n;
            if (r) {
              var y = this._applyTransform(i);
              (t = y.sourceList), (e = y.upstreamSignList);
            } else {
              var m = v.get('source', !0);
              (t = [Au(m, this._getSourceMetaRawOption(), null)]), (e = []);
            }
          }
          this._setLocalSource(t, e);
        }),
        (t.prototype._applyTransform = function (t) {
          var e = this._sourceHost,
            n = e.get('transform', !0),
            i = e.get('fromTransformResult', !0);
          if (null != i) {
            var r = '';
            1 !== t.length && lh(r);
          }
          var o,
            a = [],
            s = [];
          return (
            v(t, function (t) {
              t.prepareSource();
              var e = t.getSource(i || 0),
                n = '';
              null == i || e || lh(n), a.push(e), s.push(t._getVersionSign());
            }),
            n ? (o = Ju(n, a, { datasetIndex: e.componentIndex })) : null != i && (o = [Lu(a[0])]),
            { sourceList: o, upstreamSignList: s }
          );
        }),
        (t.prototype._isDirty = function () {
          if (this._dirty) return !0;
          for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
            var n = t[e];
            if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()) return !0;
          }
        }),
        (t.prototype.getSource = function (t) {
          t = t || 0;
          var e = this._sourceList[t];
          if (!e) {
            var n = this._getUpstreamSourceManagers();
            return n[0] && n[0].getSource(t);
          }
          return e;
        }),
        (t.prototype.getSharedDataStore = function (t) {
          var e = t.makeStoreSchema();
          return this._innerGetDataStore(e.dimensions, t.source, e.hash);
        }),
        (t.prototype._innerGetDataStore = function (t, e, n) {
          var i = 0,
            r = this._storeList,
            o = r[i];
          o || (o = r[i] = {});
          var a = o[n];
          if (!a) {
            var s = this._getUpstreamSourceManagers()[0];
            sh(this._sourceHost) && s
              ? (a = s._innerGetDataStore(t, e, n))
              : ((a = new KC()), a.initData(new kC(e, t.length), t)),
              (o[n] = a);
          }
          return a;
        }),
        (t.prototype._getUpstreamSourceManagers = function () {
          var t = this._sourceHost;
          if (sh(t)) {
            var e = Yl(t);
            return e ? [e.getSourceManager()] : [];
          }
          return y(Zl(t), function (t) {
            return t.getSourceManager();
          });
        }),
        (t.prototype._getSourceMetaRawOption = function () {
          var t,
            e,
            n,
            i = this._sourceHost;
          if (sh(i)) (t = i.get('seriesLayoutBy', !0)), (e = i.get('sourceHeader', !0)), (n = i.get('dimensions', !0));
          else if (!this._getUpstreamSourceManagers().length) {
            var r = i;
            (t = r.get('seriesLayoutBy', !0)), (e = r.get('sourceHeader', !0)), (n = r.get('dimensions', !0));
          }
          return { seriesLayoutBy: t, sourceHeader: e, dimensions: n };
        }),
        t
      );
    })(),
    QC = 'line-height:1',
    JC = [0, 10, 20, 30],
    tI = ['', '\n', '\n\n', '\n\n\n'],
    eI = (function () {
      function t() {
        (this.richTextStyles = {}), (this._nextStyleNameId = rr());
      }
      return (
        (t.prototype._generateStyleName = function () {
          return '__EC_aUTo_' + this._nextStyleNameId++;
        }),
        (t.prototype.makeTooltipMarker = function (t, e, n) {
          var i = 'richText' === n ? this._generateStyleName() : null,
            r = Pl({ color: e, type: t, renderMode: n, markerId: i });
          return C(r) ? r : ((this.richTextStyles[i] = r.style), r.content);
        }),
        (t.prototype.wrapRichTextStyle = function (t, e) {
          var n = {};
          M(e)
            ? v(e, function (t) {
                return h(n, t);
              })
            : h(n, e);
          var i = this._generateStyleName();
          return (this.richTextStyles[i] = n), '{' + i + '|' + t + '}';
        }),
        t
      );
    })(),
    nI = Dr(),
    iI = '__universalTransitionEnabled',
    rI = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e._selectedDataIndicesMap = {}), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n) {
          (this.seriesIndex = this.componentIndex),
            (this.dataTask = Xu({ count: Ah, reset: Ph })),
            (this.dataTask.context = { model: this }),
            this.mergeDefaultAndTheme(t, n);
          var i = (nI(this).sourceManager = new $C(this));
          i.prepareSource();
          var r = this.getInitialData(t, n);
          Oh(r, this),
            (this.dataTask.context.data = r),
            (nI(this).dataBeforeProcessed = r),
            Dh(this),
            this._initSelectedMapFromData(r);
        }),
        (n.prototype.mergeDefaultAndTheme = function (t, e) {
          var n = Nl(this),
            i = n ? Vl(t) : {},
            r = this.subType;
          HT.hasClass(r) && (r += 'Series'),
            l(t, e.getTheme().get(this.subType)),
            l(t, this.getDefaultOption()),
            hr(t, 'label', ['show']),
            this.fillDataTextStyle(t.data),
            n && Fl(t, i, n);
        }),
        (n.prototype.mergeOption = function (t, e) {
          (t = l(this.option, t, !0)), this.fillDataTextStyle(t.data);
          var n = Nl(this);
          n && Fl(this.option, t, n);
          var i = nI(this).sourceManager;
          i.dirty(), i.prepareSource();
          var r = this.getInitialData(t, e);
          Oh(r, this),
            this.dataTask.dirty(),
            (this.dataTask.context.data = r),
            (nI(this).dataBeforeProcessed = r),
            Dh(this),
            this._initSelectedMapFromData(r);
        }),
        (n.prototype.fillDataTextStyle = function (t) {
          if (t && !P(t)) for (var e = ['show'], n = 0; n < t.length; n++) t[n] && t[n].label && hr(t[n], 'label', e);
        }),
        (n.prototype.getInitialData = function () {}),
        (n.prototype.appendData = function (t) {
          var e = this.getRawData();
          e.appendData(t.data);
        }),
        (n.prototype.getData = function (t) {
          var e = Bh(this);
          if (e) {
            var n = e.context.data;
            return null == t ? n : n.getLinkedData(t);
          }
          return nI(this).data;
        }),
        (n.prototype.getAllData = function () {
          var t = this.getData();
          return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }];
        }),
        (n.prototype.setData = function (t) {
          var e = Bh(this);
          if (e) {
            var n = e.context;
            (n.outputData = t), e !== this.dataTask && (n.data = t);
          }
          nI(this).data = t;
        }),
        (n.prototype.getEncode = function () {
          var t = this.get('encode', !0);
          return t ? Y(t) : void 0;
        }),
        (n.prototype.getSourceManager = function () {
          return nI(this).sourceManager;
        }),
        (n.prototype.getSource = function () {
          return this.getSourceManager().getSource();
        }),
        (n.prototype.getRawData = function () {
          return nI(this).dataBeforeProcessed;
        }),
        (n.prototype.getColorBy = function () {
          var t = this.get('colorBy');
          return t || 'series';
        }),
        (n.prototype.isColorBySeries = function () {
          return 'series' === this.getColorBy();
        }),
        (n.prototype.getBaseAxis = function () {
          var t = this.coordinateSystem;
          return t && t.getBaseAxis && t.getBaseAxis();
        }),
        (n.prototype.formatTooltip = function (t, e) {
          return Th({ series: this, dataIndex: t, multipleSeries: e });
        }),
        (n.prototype.isAnimationEnabled = function () {
          var t = this.ecModel;
          if (f_.node && (!t || !t.ssr)) return !1;
          var e = this.getShallow('animation');
          return e && this.getData().count() > this.getShallow('animationThreshold') && (e = !1), !!e;
        }),
        (n.prototype.restoreData = function () {
          this.dataTask.dirty();
        }),
        (n.prototype.getColorFromPalette = function (t, e, n) {
          var i = this.ecModel,
            r = aC.prototype.getColorFromPalette.call(this, t, e, n);
          return r || (r = i.getColorFromPalette(t, e, n)), r;
        }),
        (n.prototype.coordDimToDataDim = function (t) {
          return this.getRawData().mapDimensionsAll(t);
        }),
        (n.prototype.getProgressive = function () {
          return this.get('progressive');
        }),
        (n.prototype.getProgressiveThreshold = function () {
          return this.get('progressiveThreshold');
        }),
        (n.prototype.select = function (t, e) {
          this._innerSelect(this.getData(e), t);
        }),
        (n.prototype.unselect = function (t, e) {
          var n = this.option.selectedMap;
          if (n) {
            var i = this.option.selectedMode,
              r = this.getData(e);
            if ('series' === i || 'all' === n)
              return (this.option.selectedMap = {}), void (this._selectedDataIndicesMap = {});
            for (var o = 0; o < t.length; o++) {
              var a = t[o],
                s = Ih(r, a);
              (n[s] = !1), (this._selectedDataIndicesMap[s] = -1);
            }
          }
        }),
        (n.prototype.toggleSelect = function (t, e) {
          for (var n = [], i = 0; i < t.length; i++)
            (n[0] = t[i]), this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e);
        }),
        (n.prototype.getSelectedDataIndices = function () {
          if ('all' === this.option.selectedMap) return [].slice.call(this.getData().getIndices());
          for (var t = this._selectedDataIndicesMap, e = w(t), n = [], i = 0; i < e.length; i++) {
            var r = t[e[i]];
            r >= 0 && n.push(r);
          }
          return n;
        }),
        (n.prototype.isSelected = function (t, e) {
          var n = this.option.selectedMap;
          if (!n) return !1;
          var i = this.getData(e);
          return ('all' === n || n[Ih(i, t)]) && !i.getItemModel(t).get(['select', 'disabled']);
        }),
        (n.prototype.isUniversalTransitionEnabled = function () {
          if (this[iI]) return !0;
          var t = this.option.universalTransition;
          return t ? (t === !0 ? !0 : t && t.enabled) : !1;
        }),
        (n.prototype._innerSelect = function (t, e) {
          var n,
            i,
            r = this.option,
            o = r.selectedMode,
            a = e.length;
          if (o && a)
            if ('series' === o) r.selectedMap = 'all';
            else if ('multiple' === o) {
              k(r.selectedMap) || (r.selectedMap = {});
              for (var s = r.selectedMap, l = 0; a > l; l++) {
                var u = e[l],
                  h = Ih(t, u);
                (s[h] = !0), (this._selectedDataIndicesMap[h] = t.getRawIndex(u));
              }
            } else if ('single' === o || o === !0) {
              var c = e[a - 1],
                h = Ih(t, c);
              (r.selectedMap = ((n = {}), (n[h] = !0), n)),
                (this._selectedDataIndicesMap = ((i = {}), (i[h] = t.getRawIndex(c)), i));
            }
        }),
        (n.prototype._initSelectedMapFromData = function (t) {
          if (!this.option.selectedMap) {
            var e = [];
            t.hasItemOption &&
              t.each(function (n) {
                var i = t.getRawDataItem(n);
                i && i.selected && e.push(n);
              }),
              e.length > 0 && this._innerSelect(t, e);
          }
        }),
        (n.registerClass = function (t) {
          return HT.registerClass(t);
        }),
        (n.protoInitialize = (function () {
          var t = n.prototype;
          (t.type = 'series.__base__'),
            (t.seriesIndex = 0),
            (t.ignoreStyleOnData = !1),
            (t.hasSymbolVisual = !1),
            (t.defaultSymbol = 'circle'),
            (t.visualStyleAccessPath = 'itemStyle'),
            (t.visualDrawType = 'fill');
        })()),
        n
      );
    })(HT);
  f(rI, EC), f(rI, aC), Hr(rI, HT);
  var oI = (function () {
    function t() {
      (this.group = new Vw()), (this.uid = js('viewComponent'));
    }
    return (
      (t.prototype.init = function () {}),
      (t.prototype.render = function () {}),
      (t.prototype.dispose = function () {}),
      (t.prototype.updateView = function () {}),
      (t.prototype.updateLayout = function () {}),
      (t.prototype.updateVisual = function () {}),
      (t.prototype.toggleBlurSeries = function () {}),
      (t.prototype.eachRendered = function (t) {
        var e = this.group;
        e && e.traverse(t);
      }),
      t
    );
  })();
  Fr(oI), Xr(oI);
  var aI = Dr(),
    sI = zh(),
    lI = (function () {
      function t() {
        (this.group = new Vw()),
          (this.uid = js('viewChart')),
          (this.renderTask = Xu({ plan: Fh, reset: Vh })),
          (this.renderTask.context = { view: this });
      }
      return (
        (t.prototype.init = function () {}),
        (t.prototype.render = function () {}),
        (t.prototype.highlight = function (t, e, n, i) {
          var r = t.getData(i && i.dataType);
          r && Nh(r, i, 'emphasis');
        }),
        (t.prototype.downplay = function (t, e, n, i) {
          var r = t.getData(i && i.dataType);
          r && Nh(r, i, 'normal');
        }),
        (t.prototype.remove = function () {
          this.group.removeAll();
        }),
        (t.prototype.dispose = function () {}),
        (t.prototype.updateView = function (t, e, n, i) {
          this.render(t, e, n, i);
        }),
        (t.prototype.updateLayout = function (t, e, n, i) {
          this.render(t, e, n, i);
        }),
        (t.prototype.updateVisual = function (t, e, n, i) {
          this.render(t, e, n, i);
        }),
        (t.prototype.eachRendered = function (t) {
          zs(this.group, t);
        }),
        (t.markUpdateMethod = function (t, e) {
          aI(t).updateMethod = e;
        }),
        (t.protoInitialize = (function () {
          var e = t.prototype;
          e.type = 'chart';
        })()),
        t
      );
    })();
  Fr(lI, ['dispose']), Xr(lI);
  var uI,
    hI = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
        },
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload);
        },
      },
    },
    cI = '\x00__throttleOriginMethod',
    pI = '\x00__throttleRate',
    dI = '\x00__throttleType',
    fI = Dr(),
    gI = { itemStyle: Yr(lT, !0), lineStyle: Yr(oT, !0) },
    vI = { lineStyle: 'stroke', itemStyle: 'fill' },
    yI = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var n = t.getData(),
          i = t.visualStyleAccessPath || 'itemStyle',
          r = t.getModel(i),
          o = Uh(t, i),
          a = o(r),
          s = r.getShallow('decal');
        s && (n.setVisual('decal', s), (s.dirty = !0));
        var l = Xh(t, i),
          u = a[l],
          c = T(u) ? u : null,
          p = 'auto' === a.fill || 'auto' === a.stroke;
        if (!a[l] || c || p) {
          var d = t.getColorFromPalette(t.name, null, e.getSeriesCount());
          a[l] || ((a[l] = d), n.setVisual('colorFromPalette', !0)),
            (a.fill = 'auto' === a.fill || T(a.fill) ? d : a.fill),
            (a.stroke = 'auto' === a.stroke || T(a.stroke) ? d : a.stroke);
        }
        return (
          n.setVisual('style', a),
          n.setVisual('drawType', l),
          !e.isSeriesFiltered(t) && c
            ? (n.setVisual('colorFromPalette', !1),
              {
                dataEach: function (e, n) {
                  var i = t.getDataParams(n),
                    r = h({}, a);
                  (r[l] = c(i)), e.setItemVisual(n, 'style', r);
                },
              })
            : void 0
        );
      },
    },
    mI = new cT(),
    _I = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
          var n = t.getData(),
            i = t.visualStyleAccessPath || 'itemStyle',
            r = Uh(t, i),
            o = n.getVisual('drawType');
          return {
            dataEach: n.hasItemOption
              ? function (t, e) {
                  var n = t.getRawDataItem(e);
                  if (n && n[i]) {
                    mI.option = n[i];
                    var a = r(mI),
                      s = t.ensureUniqueItemVisual(e, 'style');
                    h(s, a),
                      mI.option.decal && (t.setItemVisual(e, 'decal', mI.option.decal), (mI.option.decal.dirty = !0)),
                      o in a && t.setItemVisual(e, 'colorFromPalette', !1);
                  }
                }
              : null,
          };
        }
      },
    },
    xI = {
      performRawSeries: !0,
      overallReset: function (t) {
        var e = Y();
        t.eachSeries(function (t) {
          var n = t.getColorBy();
          if (!t.isColorBySeries()) {
            var i = t.type + '-' + n,
              r = e.get(i);
            r || ((r = {}), e.set(i, r)), (fI(t).scope = r);
          }
        }),
          t.eachSeries(function (e) {
            if (!e.isColorBySeries() && !t.isSeriesFiltered(e)) {
              var n = e.getRawData(),
                i = {},
                r = e.getData(),
                o = fI(e).scope,
                a = e.visualStyleAccessPath || 'itemStyle',
                s = Xh(e, a);
              r.each(function (t) {
                var e = r.getRawIndex(t);
                i[e] = t;
              }),
                n.each(function (t) {
                  var a = i[t],
                    l = r.getItemVisual(a, 'colorFromPalette');
                  if (l) {
                    var u = r.ensureUniqueItemVisual(a, 'style'),
                      h = n.getName(t) || t + '',
                      c = n.count();
                    u[s] = e.getColorFromPalette(h, o, c);
                  }
                });
            }
          });
      },
    },
    wI = Math.PI,
    bI = (function () {
      function t(t, e, n, i) {
        (this._stageTaskMap = Y()),
          (this.ecInstance = t),
          (this.api = e),
          (n = this._dataProcessorHandlers = n.slice()),
          (i = this._visualHandlers = i.slice()),
          (this._allHandlers = n.concat(i));
      }
      return (
        (t.prototype.restoreData = function (t, e) {
          t.restoreData(e),
            this._stageTaskMap.each(function (t) {
              var e = t.overallTask;
              e && e.dirty();
            });
        }),
        (t.prototype.getPerformArgs = function (t, e) {
          if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
              i = n.context,
              r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
              o = r ? n.step : null,
              a = i && i.modDataCount,
              s = null != a ? Math.ceil(a / o) : null;
            return { step: o, modBy: s, modDataCount: a };
          }
        }),
        (t.prototype.getPipeline = function (t) {
          return this._pipelineMap.get(t);
        }),
        (t.prototype.updateStreamModes = function (t, e) {
          var n = this._pipelineMap.get(t.uid),
            i = t.getData(),
            r = i.count(),
            o = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
            a = t.get('large') && r >= t.get('largeThreshold'),
            s = 'mod' === t.get('progressiveChunkMode') ? r : null;
          t.pipelineContext = n.context = { progressiveRender: o, modDataCount: s, large: a };
        }),
        (t.prototype.restorePipelines = function (t) {
          var e = this,
            n = (e._pipelineMap = Y());
          t.eachSeries(function (t) {
            var i = t.getProgressive(),
              r = t.uid;
            n.set(r, {
              id: r,
              head: null,
              tail: null,
              threshold: t.getProgressiveThreshold(),
              progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
              blockIndex: -1,
              step: Math.round(i || 700),
              count: 0,
            }),
              e._pipe(t, t.dataTask);
          });
        }),
        (t.prototype.prepareStageTasks = function () {
          var t = this._stageTaskMap,
            e = this.api.getModel(),
            n = this.api;
          v(
            this._allHandlers,
            function (i) {
              var r = t.get(i.uid) || t.set(i.uid, {}),
                o = '';
              W(!(i.reset && i.overallReset), o),
                i.reset && this._createSeriesStageTask(i, r, e, n),
                i.overallReset && this._createOverallStageTask(i, r, e, n);
            },
            this,
          );
        }),
        (t.prototype.prepareView = function (t, e, n, i) {
          var r = t.renderTask,
            o = r.context;
          (o.model = e), (o.ecModel = n), (o.api = i), (r.__block = !t.incrementalPrepareRender), this._pipe(e, r);
        }),
        (t.prototype.performDataProcessorTasks = function (t, e) {
          this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 });
        }),
        (t.prototype.performVisualTasks = function (t, e, n) {
          this._performStageTasks(this._visualHandlers, t, e, n);
        }),
        (t.prototype._performStageTasks = function (t, e, n, i) {
          function r(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
          }
          i = i || {};
          var o = !1,
            a = this;
          v(t, function (t) {
            if (!i.visualType || i.visualType === t.visualType) {
              var s = a._stageTaskMap.get(t.uid),
                l = s.seriesTaskMap,
                u = s.overallTask;
              if (u) {
                var h,
                  c = u.agentStubMap;
                c.each(function (t) {
                  r(i, t) && (t.dirty(), (h = !0));
                }),
                  h && u.dirty(),
                  a.updatePayload(u, n);
                var p = a.getPerformArgs(u, i.block);
                c.each(function (t) {
                  t.perform(p);
                }),
                  u.perform(p) && (o = !0);
              } else
                l &&
                  l.each(function (s) {
                    r(i, s) && s.dirty();
                    var l = a.getPerformArgs(s, i.block);
                    (l.skip = !t.performRawSeries && e.isSeriesFiltered(s.context.model)),
                      a.updatePayload(s, n),
                      s.perform(l) && (o = !0);
                  });
            }
          }),
            (this.unfinished = o || this.unfinished);
        }),
        (t.prototype.performSeriesTasks = function (t) {
          var e;
          t.eachSeries(function (t) {
            e = t.dataTask.perform() || e;
          }),
            (this.unfinished = e || this.unfinished);
        }),
        (t.prototype.plan = function () {
          this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
              if (e.__block) {
                t.blockIndex = e.__idxInPipeline;
                break;
              }
              e = e.getUpstream();
            } while (e);
          });
        }),
        (t.prototype.updatePayload = function (t, e) {
          'remain' !== e && (t.context.payload = e);
        }),
        (t.prototype._createSeriesStageTask = function (t, e, n, i) {
          function r(e) {
            var r = e.uid,
              l = s.set(r, (a && a.get(r)) || Xu({ plan: $h, reset: Qh, count: tc }));
            (l.context = {
              model: e,
              ecModel: n,
              api: i,
              useClearVisual: t.isVisual && !t.isLayout,
              plan: t.plan,
              reset: t.reset,
              scheduler: o,
            }),
              o._pipe(e, l);
          }
          var o = this,
            a = e.seriesTaskMap,
            s = (e.seriesTaskMap = Y()),
            l = t.seriesType,
            u = t.getTargetSeries;
          t.createOnAllSeries ? n.eachRawSeries(r) : l ? n.eachRawSeriesByType(l, r) : u && u(n, i).each(r);
        }),
        (t.prototype._createOverallStageTask = function (t, e, n, i) {
          function r(t) {
            var e = t.uid,
              n = l.set(e, (s && s.get(e)) || ((p = !0), Xu({ reset: qh, onDirty: Kh })));
            (n.context = { model: t, overallProgress: c }), (n.agent = a), (n.__block = c), o._pipe(t, n);
          }
          var o = this,
            a = (e.overallTask = e.overallTask || Xu({ reset: Zh }));
          a.context = { ecModel: n, api: i, overallReset: t.overallReset, scheduler: o };
          var s = a.agentStubMap,
            l = (a.agentStubMap = Y()),
            u = t.seriesType,
            h = t.getTargetSeries,
            c = !0,
            p = !1,
            d = '';
          W(!t.createOnAllSeries, d),
            u ? n.eachRawSeriesByType(u, r) : h ? h(n, i).each(r) : ((c = !1), v(n.getSeries(), r)),
            p && a.dirty();
        }),
        (t.prototype._pipe = function (t, e) {
          var n = t.uid,
            i = this._pipelineMap.get(n);
          !i.head && (i.head = e),
            i.tail && i.tail.pipe(e),
            (i.tail = e),
            (e.__idxInPipeline = i.count++),
            (e.__pipeline = i);
        }),
        (t.wrapStageHandler = function (t, e) {
          return (
            T(t) && (t = { overallReset: t, seriesType: ec(t) }),
            (t.uid = js('stageHandler')),
            e && (t.visualType = e),
            t
          );
        }),
        t
      );
    })(),
    SI = Jh(0),
    MI = {},
    TI = {};
  nc(MI, uC),
    nc(TI, yC),
    (MI.eachSeriesByType = MI.eachRawSeriesByType =
      function (t) {
        uI = t;
      }),
    (MI.eachComponent = function (t) {
      'series' === t.mainType && t.subType && (uI = t.subType);
    });
  var CI = [
      '#37A2DA',
      '#32C5E9',
      '#67E0E3',
      '#9FE6B8',
      '#FFDB5C',
      '#ff9f7f',
      '#fb7293',
      '#E062AE',
      '#E690D1',
      '#e7bcf3',
      '#9d96f5',
      '#8378EA',
      '#96BFFF',
    ],
    II = {
      color: CI,
      colorLayer: [
        ['#37A2DA', '#ffd85c', '#fd7b5f'],
        ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
        ['#37A2DA', '#32C5E9', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378EA', '#96BFFF'],
        CI,
      ],
    },
    DI = '#B9B8CE',
    kI = '#100C2A',
    AI = function () {
      return {
        axisLine: { lineStyle: { color: DI } },
        splitLine: { lineStyle: { color: '#484753' } },
        splitArea: { areaStyle: { color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'] } },
        minorSplitLine: { lineStyle: { color: '#20203B' } },
      };
    },
    PI = ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
    LI = {
      darkMode: !0,
      color: PI,
      backgroundColor: kI,
      axisPointer: { lineStyle: { color: '#817f91' }, crossStyle: { color: '#817f91' }, label: { color: '#fff' } },
      legend: { textStyle: { color: DI } },
      textStyle: { color: DI },
      title: { textStyle: { color: '#EEF1FA' }, subtextStyle: { color: '#B9B8CE' } },
      toolbox: { iconStyle: { borderColor: DI } },
      dataZoom: {
        borderColor: '#71708A',
        textStyle: { color: DI },
        brushStyle: { color: 'rgba(135,163,206,0.3)' },
        handleStyle: { color: '#353450', borderColor: '#C5CBE3' },
        moveHandleStyle: { color: '#B0B6C3', opacity: 0.3 },
        fillerColor: 'rgba(135,163,206,0.2)',
        emphasis: {
          handleStyle: { borderColor: '#91B7F2', color: '#4D587D' },
          moveHandleStyle: { color: '#636D9A', opacity: 0.7 },
        },
        dataBackground: { lineStyle: { color: '#71708A', width: 1 }, areaStyle: { color: '#71708A' } },
        selectedDataBackground: { lineStyle: { color: '#87A3CE' }, areaStyle: { color: '#87A3CE' } },
      },
      visualMap: { textStyle: { color: DI } },
      timeline: { lineStyle: { color: DI }, label: { color: DI }, controlStyle: { color: DI, borderColor: DI } },
      calendar: {
        itemStyle: { color: kI },
        dayLabel: { color: DI },
        monthLabel: { color: DI },
        yearLabel: { color: DI },
      },
      timeAxis: AI(),
      logAxis: AI(),
      valueAxis: AI(),
      categoryAxis: AI(),
      line: { symbol: 'circle' },
      graph: { color: PI },
      gauge: {
        title: { color: DI },
        axisLine: { lineStyle: { color: [[1, 'rgba(207,212,219,0.2)']] } },
        axisLabel: { color: DI },
        detail: { color: '#EEF1FA' },
      },
      candlestick: {
        itemStyle: { color: '#f64e56', color0: '#54ea92', borderColor: '#f64e56', borderColor0: '#54ea92' },
      },
    };
  LI.categoryAxis.splitLine.show = !1;
  var OI = (function () {
      function t() {}
      return (
        (t.prototype.normalizeQuery = function (t) {
          var e = {},
            n = {},
            i = {};
          if (C(t)) {
            var r = zr(t);
            (e.mainType = r.main || null), (e.subType = r.sub || null);
          } else {
            var o = ['Index', 'Name', 'Id'],
              a = { name: 1, dataIndex: 1, dataType: 1 };
            v(t, function (t, r) {
              for (var s = !1, l = 0; l < o.length; l++) {
                var u = o[l],
                  h = r.lastIndexOf(u);
                if (h > 0 && h === r.length - u.length) {
                  var c = r.slice(0, h);
                  'data' !== c && ((e.mainType = c), (e[u.toLowerCase()] = t), (s = !0));
                }
              }
              a.hasOwnProperty(r) && ((n[r] = t), (s = !0)), s || (i[r] = t);
            });
          }
          return { cptQuery: e, dataQuery: n, otherQuery: i };
        }),
        (t.prototype.filter = function (t, e) {
          function n(t, e, n, i) {
            return null == t[n] || e[i || n] === t[n];
          }
          var i = this.eventInfo;
          if (!i) return !0;
          var r = i.targetEl,
            o = i.packedEvent,
            a = i.model,
            s = i.view;
          if (!a || !s) return !0;
          var l = e.cptQuery,
            u = e.dataQuery;
          return (
            n(l, a, 'mainType') &&
            n(l, a, 'subType') &&
            n(l, a, 'index', 'componentIndex') &&
            n(l, a, 'name') &&
            n(l, a, 'id') &&
            n(u, o, 'name') &&
            n(u, o, 'dataIndex') &&
            n(u, o, 'dataType') &&
            (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o))
          );
        }),
        (t.prototype.afterTrigger = function () {
          this.eventInfo = null;
        }),
        t
      );
    })(),
    RI = ['symbol', 'symbolSize', 'symbolRotate', 'symbolOffset'],
    BI = RI.concat(['symbolKeepAspect']),
    zI = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(e, n) {
          for (var i = t.getRawValue(n), r = t.getDataParams(n), a = 0; a < c.length; a++) {
            var s = c[a];
            e.setItemVisual(n, s, o[s](i, r));
          }
        }
        var i = t.getData();
        if ((t.legendIcon && i.setVisual('legendIcon', t.legendIcon), t.hasSymbolVisual)) {
          for (var r = {}, o = {}, a = !1, s = 0; s < RI.length; s++) {
            var l = RI[s],
              u = t.get(l);
            T(u) ? ((a = !0), (o[l] = u)) : (r[l] = u);
          }
          if (
            ((r.symbol = r.symbol || t.defaultSymbol),
            i.setVisual(h({ legendIcon: t.legendIcon || r.symbol, symbolKeepAspect: t.get('symbolKeepAspect') }, r)),
            !e.isSeriesFiltered(t))
          ) {
            var c = w(o);
            return { dataEach: a ? n : null };
          }
        }
      },
    },
    EI = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(t, e) {
          for (var n = t.getItemModel(e), i = 0; i < BI.length; i++) {
            var r = BI[i],
              o = n.getShallow(r, !0);
            null != o && t.setItemVisual(e, r, o);
          }
        }
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) {
          var i = t.getData();
          return { dataEach: i.hasItemOption ? n : null };
        }
      },
    },
    NI = Math.round(9 * Math.random()),
    FI = 'function' == typeof Object.defineProperty,
    VI = (function () {
      function t() {
        this._id = '__ec_inner_' + NI++;
      }
      return (
        (t.prototype.get = function (t) {
          return this._guard(t)[this._id];
        }),
        (t.prototype.set = function (t, e) {
          var n = this._guard(t);
          return (
            FI ? Object.defineProperty(n, this._id, { value: e, enumerable: !1, configurable: !0 }) : (n[this._id] = e),
            this
          );
        }),
        (t.prototype['delete'] = function (t) {
          return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
        }),
        (t.prototype.has = function (t) {
          return !!this._guard(t)[this._id];
        }),
        (t.prototype._guard = function (t) {
          if (t !== Object(t)) throw TypeError('Value of WeakMap is not a non-null object.');
          return t;
        }),
        t
      );
    })(),
    HI = oS.extend({
      type: 'triangle',
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath();
      },
    }),
    WI = oS.extend({
      type: 'diamond',
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath();
      },
    }),
    GI = oS.extend({
      type: 'pin',
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.x,
          i = e.y,
          r = (e.width / 5) * 3,
          o = Math.max(r, e.height),
          a = r / 2,
          s = (a * a) / (o - a),
          l = i - o + a + s,
          u = Math.asin(s / a),
          h = Math.cos(u) * a,
          c = Math.sin(u),
          p = Math.cos(u),
          d = 0.6 * a,
          f = 0.7 * a;
        t.moveTo(n - h, l + s),
          t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u),
          t.bezierCurveTo(n + h - c * d, l + s + p * d, n, i - f, n, i),
          t.bezierCurveTo(n, i - f, n - h + c * d, l + s + p * d, n - h, l + s),
          t.closePath();
      },
    }),
    UI = oS.extend({
      type: 'arrow',
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          o = e.y,
          a = (i / 3) * 2;
        t.moveTo(r, o),
          t.lineTo(r + a, o + n),
          t.lineTo(r, o + (n / 4) * 3),
          t.lineTo(r - a, o + n),
          t.lineTo(r, o),
          t.closePath();
      },
    }),
    XI = { line: TM, rect: fS, roundRect: fS, square: fS, circle: eM, diamond: WI, pin: GI, arrow: UI, triangle: HI },
    YI = {
      line: function (t, e, n, i, r) {
        (r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2);
      },
      rect: function (t, e, n, i, r) {
        (r.x = t), (r.y = e), (r.width = n), (r.height = i);
      },
      roundRect: function (t, e, n, i, r) {
        (r.x = t), (r.y = e), (r.width = n), (r.height = i), (r.r = Math.min(n, i) / 4);
      },
      square: function (t, e, n, i, r) {
        var o = Math.min(n, i);
        (r.x = t), (r.y = e), (r.width = o), (r.height = o);
      },
      circle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2);
      },
      diamond: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
      pin: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      arrow: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      triangle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
    },
    ZI = {};
  v(XI, function (t, e) {
    ZI[e] = new t();
  });
  var qI = oS.extend({
      type: 'symbol',
      shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
      calculateTextPosition: function (t, e, n) {
        var i = Si(t, e, n),
          r = this.shape;
        return r && 'pin' === r.symbolType && 'inside' === e.position && (i.y = n.y + 0.4 * n.height), i;
      },
      buildPath: function (t, e, n) {
        var i = e.symbolType;
        if ('none' !== i) {
          var r = ZI[i];
          r || ((i = 'rect'), (r = ZI[i])), YI[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);
        }
      },
    }),
    jI = new qb(!0),
    KI = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
    $I = [
      ['lineCap', 'butt'],
      ['lineJoin', 'miter'],
      ['miterLimit', 10],
    ],
    QI = 1,
    JI = 2,
    tD = 3,
    eD = 4,
    nD = new VI(),
    iD = new Ox(100),
    rD = [
      'symbol',
      'symbolSize',
      'symbolKeepAspect',
      'color',
      'backgroundColor',
      'dashArrayX',
      'dashArrayY',
      'maxTileWidth',
      'maxTileHeight',
    ],
    oD = new q_(),
    aD = {},
    sD = 'undefined' != typeof window,
    lD = '5.3.3',
    uD = { zrender: '5.3.2' },
    hD = 1,
    cD = 800,
    pD = 900,
    dD = 1e3,
    fD = 2e3,
    gD = 5e3,
    vD = 1e3,
    yD = 1100,
    mD = 2e3,
    _D = 3e3,
    xD = 4e3,
    wD = 4500,
    bD = 4600,
    SD = 5e3,
    MD = 6e3,
    TD = 7e3,
    CD = {
      PROCESSOR: { FILTER: dD, SERIES_FILTER: cD, STATISTIC: gD },
      VISUAL: {
        LAYOUT: vD,
        PROGRESSIVE_LAYOUT: yD,
        GLOBAL: mD,
        CHART: _D,
        POST_CHART_LAYOUT: bD,
        COMPONENT: xD,
        BRUSH: SD,
        CHART_ITEM: wD,
        ARIA: MD,
        DECAL: TD,
      },
    },
    ID = '__flagInMainProcess',
    DD = '__pendingUpdate',
    kD = '__needsUpdateStatus',
    AD = /^[a-zA-Z0-9_]+$/,
    PD = '__connectUpdateStatus',
    LD = 0,
    OD = 1,
    RD = 2,
    BD = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return e(n, t), n;
    })(q_),
    zD = BD.prototype;
  (zD.on = Jc('on')), (zD.off = Jc('off'));
  var ED,
    ND,
    FD,
    VD,
    HD,
    WD,
    GD,
    UD,
    XD,
    YD,
    ZD,
    qD,
    jD,
    KD,
    $D,
    QD,
    JD,
    tk,
    ek = (function (t) {
      function n(e, n, i) {
        function r(t, e) {
          return t.__prio - e.__prio;
        }
        var o = t.call(this, new OI()) || this;
        (o._chartsViews = []),
          (o._chartsMap = {}),
          (o._componentsViews = []),
          (o._componentsMap = {}),
          (o._pendingActions = []),
          (i = i || {}),
          C(n) && (n = uk[n]),
          (o._dom = e);
        var a = 'canvas',
          l = !1,
          u = (o._zr = Oi(e, {
            renderer: i.renderer || a,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height,
            ssr: i.ssr,
            useDirtyRect: null == i.useDirtyRect ? l : i.useDirtyRect,
          }));
        (o._ssr = i.ssr),
          (o._throttledZrFlush = Hh(z_(u.flush, u), 17)),
          (n = s(n)),
          n && Cu(n, !0),
          (o._theme = n),
          (o._locale = tl(i.locale || xT)),
          (o._coordSysMgr = new _C());
        var h = (o._api = $D(o));
        return (
          Ye(lk, r),
          Ye(ak, r),
          (o._scheduler = new bI(o, h, ak, lk)),
          (o._messageCenter = new BD()),
          o._initEvents(),
          (o.resize = z_(o.resize, o)),
          u.animation.on('frame', o._onframe, o),
          YD(u, o),
          ZD(u, o),
          U(o),
          o
        );
      }
      return (
        e(n, t),
        (n.prototype._onframe = function () {
          if (!this._disposed) {
            tk(this);
            var t = this._scheduler;
            if (this[DD]) {
              var e = this[DD].silent;
              this[ID] = !0;
              try {
                ED(this), VD.update.call(this, null, this[DD].updateParams);
              } catch (n) {
                throw ((this[ID] = !1), (this[DD] = null), n);
              }
              this._zr.flush(), (this[ID] = !1), (this[DD] = null), UD.call(this, e), XD.call(this, e);
            } else if (t.unfinished) {
              var i = hD,
                r = this._model,
                o = this._api;
              t.unfinished = !1;
              do {
                var a = +new Date();
                t.performSeriesTasks(r),
                  t.performDataProcessorTasks(r),
                  WD(this, r),
                  t.performVisualTasks(r),
                  KD(this, this._model, o, 'remain', {}),
                  (i -= +new Date() - a);
              } while (i > 0 && t.unfinished);
              t.unfinished || this._zr.flush();
            }
          }
        }),
        (n.prototype.getDom = function () {
          return this._dom;
        }),
        (n.prototype.getId = function () {
          return this.id;
        }),
        (n.prototype.getZr = function () {
          return this._zr;
        }),
        (n.prototype.isSSR = function () {
          return this._ssr;
        }),
        (n.prototype.setOption = function (t, e, n) {
          if (!this[ID] && !this._disposed) {
            var i, r, o;
            if (
              (k(e) && ((n = e.lazyUpdate), (i = e.silent), (r = e.replaceMerge), (o = e.transition), (e = e.notMerge)),
              (this[ID] = !0),
              !this._model || e)
            ) {
              var a = new wC(this._api),
                s = this._theme,
                l = (this._model = new uC());
              (l.scheduler = this._scheduler), (l.ssr = this._ssr), l.init(null, null, null, s, this._locale, a);
            }
            this._model.setOption(t, { replaceMerge: r }, sk);
            var u = { seriesTransition: o, optionChanged: !0 };
            if (n) (this[DD] = { silent: i, updateParams: u }), (this[ID] = !1), this.getZr().wakeUp();
            else {
              try {
                ED(this), VD.update.call(this, null, u);
              } catch (h) {
                throw ((this[DD] = null), (this[ID] = !1), h);
              }
              this._ssr || this._zr.flush(), (this[DD] = null), (this[ID] = !1), UD.call(this, i), XD.call(this, i);
            }
          }
        }),
        (n.prototype.setTheme = function () {}),
        (n.prototype.getModel = function () {
          return this._model;
        }),
        (n.prototype.getOption = function () {
          return this._model && this._model.getOption();
        }),
        (n.prototype.getWidth = function () {
          return this._zr.getWidth();
        }),
        (n.prototype.getHeight = function () {
          return this._zr.getHeight();
        }),
        (n.prototype.getDevicePixelRatio = function () {
          return this._zr.painter.dpr || (sD && window.devicePixelRatio) || 1;
        }),
        (n.prototype.getRenderedCanvas = function (t) {
          return this.renderToCanvas(t);
        }),
        (n.prototype.renderToCanvas = function (t) {
          t = t || {};
          var e = this._zr.painter;
          return e.getRenderedCanvas({
            backgroundColor: t.backgroundColor || this._model.get('backgroundColor'),
            pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
          });
        }),
        (n.prototype.renderToSVGString = function (t) {
          t = t || {};
          var e = this._zr.painter;
          return e.renderToString({ useViewBox: t.useViewBox });
        }),
        (n.prototype.getSvgDataURL = function () {
          if (f_.svgSupported) {
            var t = this._zr,
              e = t.storage.getDisplayList();
            return (
              v(e, function (t) {
                t.stopAnimation(null, !0);
              }),
              t.painter.toDataURL()
            );
          }
        }),
        (n.prototype.getDataURL = function (t) {
          if (!this._disposed) {
            t = t || {};
            var e = t.excludeComponents,
              n = this._model,
              i = [],
              r = this;
            v(e, function (t) {
              n.eachComponent({ mainType: t }, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), (e.group.ignore = !0));
              });
            });
            var o =
              'svg' === this._zr.painter.getType()
                ? this.getSvgDataURL()
                : this.renderToCanvas(t).toDataURL('image/' + ((t && t.type) || 'png'));
            return (
              v(i, function (t) {
                t.group.ignore = !1;
              }),
              o
            );
          }
        }),
        (n.prototype.getConnectedDataURL = function (t) {
          if (!this._disposed) {
            var e = 'svg' === t.type,
              n = this.group,
              i = Math.min,
              r = Math.max,
              o = 1 / 0;
            if (pk[n]) {
              var a = o,
                l = o,
                u = -o,
                h = -o,
                c = [],
                p = (t && t.pixelRatio) || this.getDevicePixelRatio();
              v(ck, function (o) {
                if (o.group === n) {
                  var p = e ? o.getZr().painter.getSvgDom().innerHTML : o.renderToCanvas(s(t)),
                    d = o.getDom().getBoundingClientRect();
                  (a = i(d.left, a)),
                    (l = i(d.top, l)),
                    (u = r(d.right, u)),
                    (h = r(d.bottom, h)),
                    c.push({ dom: p, left: d.left, top: d.top });
                }
              }),
                (a *= p),
                (l *= p),
                (u *= p),
                (h *= p);
              var d = u - a,
                f = h - l,
                g = b_.createCanvas(),
                y = Oi(g, { renderer: e ? 'svg' : 'canvas' });
              if ((y.resize({ width: d, height: f }), e)) {
                var m = '';
                return (
                  v(c, function (t) {
                    var e = t.left - a,
                      n = t.top - l;
                    m += '<g transform="translate(' + e + ',' + n + ')">' + t.dom + '</g>';
                  }),
                  (y.painter.getSvgRoot().innerHTML = m),
                  t.connectedBackgroundColor && y.painter.setBackgroundColor(t.connectedBackgroundColor),
                  y.refreshImmediately(),
                  y.painter.toDataURL()
                );
              }
              return (
                t.connectedBackgroundColor &&
                  y.add(
                    new fS({ shape: { x: 0, y: 0, width: d, height: f }, style: { fill: t.connectedBackgroundColor } }),
                  ),
                v(c, function (t) {
                  var e = new hS({ style: { x: t.left * p - a, y: t.top * p - l, image: t.dom } });
                  y.add(e);
                }),
                y.refreshImmediately(),
                g.toDataURL('image/' + ((t && t.type) || 'png'))
              );
            }
            return this.getDataURL(t);
          }
        }),
        (n.prototype.convertToPixel = function (t, e) {
          return HD(this, 'convertToPixel', t, e);
        }),
        (n.prototype.convertFromPixel = function (t, e) {
          return HD(this, 'convertFromPixel', t, e);
        }),
        (n.prototype.containPixel = function (t, e) {
          if (!this._disposed) {
            var n,
              i = this._model,
              r = kr(i, t);
            return (
              v(
                r,
                function (t, i) {
                  i.indexOf('Models') >= 0 &&
                    v(
                      t,
                      function (t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint) n = n || !!r.containPoint(e);
                        else if ('seriesModels' === i) {
                          var o = this._chartsMap[t.__viewId];
                          o && o.containPoint && (n = n || o.containPoint(e, t));
                        }
                      },
                      this,
                    );
                },
                this,
              ),
              !!n
            );
          }
        }),
        (n.prototype.getVisual = function (t, e) {
          var n = this._model,
            i = kr(n, t, { defaultMainType: 'series' }),
            r = i.seriesModel,
            o = r.getData(),
            a = i.hasOwnProperty('dataIndexInside')
              ? i.dataIndexInside
              : i.hasOwnProperty('dataIndex')
              ? o.indexOfRawIndex(i.dataIndex)
              : null;
          return null != a ? ic(o, a, e) : rc(o, e);
        }),
        (n.prototype.getViewOfComponentModel = function (t) {
          return this._componentsMap[t.__viewId];
        }),
        (n.prototype.getViewOfSeriesModel = function (t) {
          return this._chartsMap[t.__viewId];
        }),
        (n.prototype._initEvents = function () {
          var t = this;
          v(ik, function (e) {
            var n = function (n) {
              var i,
                r = t.getModel(),
                o = n.target,
                a = 'globalout' === e;
              if (
                (a
                  ? (i = {})
                  : o &&
                    lc(
                      o,
                      function (t) {
                        var e = bS(t);
                        if (e && null != e.dataIndex) {
                          var n = e.dataModel || r.getSeriesByIndex(e.seriesIndex);
                          return (i = (n && n.getDataParams(e.dataIndex, e.dataType)) || {}), !0;
                        }
                        return e.eventData ? ((i = h({}, e.eventData)), !0) : void 0;
                      },
                      !0,
                    ),
                i)
              ) {
                var s = i.componentType,
                  l = i.componentIndex;
                ('markLine' === s || 'markPoint' === s || 'markArea' === s) && ((s = 'series'), (l = i.seriesIndex));
                var u = s && null != l && r.getComponent(s, l),
                  c = u && t['series' === u.mainType ? '_chartsMap' : '_componentsMap'][u.__viewId];
                (i.event = n),
                  (i.type = e),
                  (t._$eventProcessor.eventInfo = { targetEl: o, packedEvent: i, model: u, view: c }),
                  t.trigger(e, i);
              }
            };
            (n.zrEventfulCallAtLast = !0), t._zr.on(e, n, t);
          }),
            v(ok, function (e, n) {
              t._messageCenter.on(
                n,
                function (t) {
                  this.trigger(n, t);
                },
                t,
              );
            }),
            v(['selectchanged'], function (e) {
              t._messageCenter.on(
                e,
                function (t) {
                  this.trigger(e, t);
                },
                t,
              );
            }),
            sc(this._messageCenter, this, this._api);
        }),
        (n.prototype.isDisposed = function () {
          return this._disposed;
        }),
        (n.prototype.clear = function () {
          this._disposed || this.setOption({ series: [] }, !0);
        }),
        (n.prototype.dispose = function () {
          if (!this._disposed) {
            this._disposed = !0;
            var t = this.getDom();
            t && Lr(this.getDom(), gk, '');
            var e = this,
              n = e._api,
              i = e._model;
            v(e._componentsViews, function (t) {
              t.dispose(i, n);
            }),
              v(e._chartsViews, function (t) {
                t.dispose(i, n);
              }),
              e._zr.dispose(),
              (e._dom =
                e._model =
                e._chartsMap =
                e._componentsMap =
                e._chartsViews =
                e._componentsViews =
                e._scheduler =
                e._api =
                e._zr =
                e._throttledZrFlush =
                e._theme =
                e._coordSysMgr =
                e._messageCenter =
                  null),
              delete ck[e.id];
          }
        }),
        (n.prototype.resize = function (t) {
          if (!this[ID] && !this._disposed) {
            this._zr.resize(t);
            var e = this._model;
            if ((this._loadingFX && this._loadingFX.resize(), e)) {
              var n = e.resetOption('media'),
                i = t && t.silent;
              this[DD] && (null == i && (i = this[DD].silent), (n = !0), (this[DD] = null)), (this[ID] = !0);
              try {
                n && ED(this),
                  VD.update.call(this, { type: 'resize', animation: h({ duration: 0 }, t && t.animation) });
              } catch (r) {
                throw ((this[ID] = !1), r);
              }
              (this[ID] = !1), UD.call(this, i), XD.call(this, i);
            }
          }
        }),
        (n.prototype.showLoading = function (t, e) {
          if (!this._disposed && (k(t) && ((e = t), (t = '')), (t = t || 'default'), this.hideLoading(), hk[t])) {
            var n = hk[t](this._api, e),
              i = this._zr;
            (this._loadingFX = n), i.add(n);
          }
        }),
        (n.prototype.hideLoading = function () {
          this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), (this._loadingFX = null));
        }),
        (n.prototype.makeActionFromEvent = function (t) {
          var e = h({}, t);
          return (e.type = ok[t.type]), e;
        }),
        (n.prototype.dispatchAction = function (t, e) {
          if (!this._disposed && (k(e) || (e = { silent: !!e }), rk[t.type] && this._model)) {
            if (this[ID]) return void this._pendingActions.push(t);
            var n = e.silent;
            GD.call(this, t, n);
            var i = e.flush;
            i ? this._zr.flush() : i !== !1 && f_.browser.weChat && this._throttledZrFlush(),
              UD.call(this, n),
              XD.call(this, n);
          }
        }),
        (n.prototype.updateLabelLayout = function () {
          oD.trigger('series:layoutlabels', this._model, this._api, { updatedSeries: [] });
        }),
        (n.prototype.appendData = function (t) {
          if (!this._disposed) {
            var e = t.seriesIndex,
              n = this.getModel(),
              i = n.getSeriesByIndex(e);
            i.appendData(t), (this._scheduler.unfinished = !0), this.getZr().wakeUp();
          }
        }),
        (n.internalField = (function () {
          function t(t) {
            t.clearColorPalette(),
              t.eachSeries(function (t) {
                t.clearColorPalette();
              });
          }
          function n(t) {
            var e = [],
              n = [],
              i = !1;
            if (
              (t.eachComponent(function (t, r) {
                var o = r.get('zlevel') || 0,
                  a = r.get('z') || 0,
                  s = r.getZLevelKey();
                (i = i || !!s),
                  ('series' === t ? n : e).push({ zlevel: o, z: a, idx: r.componentIndex, type: t, key: s });
              }),
              i)
            ) {
              var r,
                o,
                a = e.concat(n);
              Ye(a, function (t, e) {
                return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel;
              }),
                v(a, function (e) {
                  var n = t.getComponent(e.type, e.idx),
                    i = e.zlevel,
                    a = e.key;
                  null != r && (i = Math.max(r, i)),
                    a ? (i === r && a !== o && i++, (o = a)) : o && (i === r && i++, (o = '')),
                    (r = i),
                    n.setZLevel(i);
                });
            }
          }
          function i(t) {
            for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
              var r = n[i];
              'emphasis' !== r && 'blur' !== r && 'select' !== r && e.push(r);
            }
            t.selected && t.states.select && e.push('select'),
              t.hoverState === AS && t.states.emphasis
                ? e.push('emphasis')
                : t.hoverState === kS && t.states.blur && e.push('blur'),
              t.useStates(e);
          }
          function r(t, e) {
            var n = t._zr,
              i = n.storage,
              r = 0;
            i.traverse(function (t) {
              t.isGroup || r++;
            }),
              r > e.get('hoverLayerThreshold') &&
                !f_.node &&
                !f_.worker &&
                e.eachSeries(function (e) {
                  if (!e.preventUsingHoverLayer) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive &&
                      n.eachRendered(function (t) {
                        t.states.emphasis && (t.states.emphasis.hoverLayer = !0);
                      });
                  }
                });
          }
          function o(t, e) {
            var n = t.get('blendMode') || null;
            e.eachRendered(function (t) {
              t.isGroup || (t.style.blend = n);
            });
          }
          function a(t, e) {
            if (!t.preventAutoZ) {
              var n = t.get('z') || 0,
                i = t.get('zlevel') || 0;
              e.eachRendered(function (t) {
                return s(t, n, i, -1 / 0), !0;
              });
            }
          }
          function s(t, e, n, i) {
            var r = t.getTextContent(),
              o = t.getTextGuideLine(),
              a = t.isGroup;
            if (a) for (var l = t.childrenRef(), u = 0; u < l.length; u++) i = Math.max(s(l[u], e, n, i), i);
            else (t.z = e), (t.zlevel = n), (i = Math.max(t.z2, i));
            if ((r && ((r.z = e), (r.zlevel = n), isFinite(i) && (r.z2 = i + 2)), o)) {
              var h = t.textGuideLineConfig;
              (o.z = e), (o.zlevel = n), isFinite(i) && (o.z2 = i + (h && h.showAbove ? 1 : -1));
            }
            return i;
          }
          function l(t, e) {
            e.eachRendered(function (t) {
              if (!as(t)) {
                var e = t.getTextContent(),
                  n = t.getTextGuideLine();
                t.stateTransition && (t.stateTransition = null),
                  e && e.stateTransition && (e.stateTransition = null),
                  n && n.stateTransition && (n.stateTransition = null),
                  t.hasState()
                    ? ((t.prevStates = t.currentStates), t.clearStates())
                    : t.prevStates && (t.prevStates = null);
              }
            });
          }
          function u(t, e) {
            var n = t.getModel('stateAnimation'),
              r = t.isAnimationEnabled(),
              o = n.get('duration'),
              a = o > 0 ? { duration: o, delay: n.get('delay'), easing: n.get('easing') } : null;
            e.eachRendered(function (t) {
              if (t.states && t.states.emphasis) {
                if (as(t)) return;
                if ((t instanceof oS && Ea(t), t.__dirty)) {
                  var e = t.prevStates;
                  e && t.useStates(e);
                }
                if (r) {
                  t.stateTransition = a;
                  var n = t.getTextContent(),
                    o = t.getTextGuideLine();
                  n && (n.stateTransition = a), o && (o.stateTransition = a);
                }
                t.__dirty && i(t);
              }
            });
          }
          (ED = function (t) {
            var e = t._scheduler;
            e.restorePipelines(t._model), e.prepareStageTasks(), ND(t, !0), ND(t, !1), e.plan();
          }),
            (ND = function (t, e) {
              function n(t) {
                var n = t.__requireNewView;
                t.__requireNewView = !1;
                var u = '_ec_' + t.id + '_' + t.type,
                  h = !n && a[u];
                if (!h) {
                  var c = zr(t.type),
                    p = e ? oI.getClass(c.main, c.sub) : lI.getClass(c.sub);
                  (h = new p()), h.init(i, l), (a[u] = h), o.push(h), s.add(h.group);
                }
                (t.__viewId = h.__id = u),
                  (h.__alive = !0),
                  (h.__model = t),
                  (h.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }),
                  !e && r.prepareView(h, t, i, l);
              }
              for (
                var i = t._model,
                  r = t._scheduler,
                  o = e ? t._componentsViews : t._chartsViews,
                  a = e ? t._componentsMap : t._chartsMap,
                  s = t._zr,
                  l = t._api,
                  u = 0;
                u < o.length;
                u++
              )
                o[u].__alive = !1;
              e
                ? i.eachComponent(function (t, e) {
                    'series' !== t && n(e);
                  })
                : i.eachSeries(n);
              for (var u = 0; u < o.length; ) {
                var h = o[u];
                h.__alive
                  ? u++
                  : (!e && h.renderTask.dispose(),
                    s.remove(h.group),
                    h.dispose(i, l),
                    o.splice(u, 1),
                    a[h.__id] === h && delete a[h.__id],
                    (h.__id = h.group.__ecComponentInfo = null));
              }
            }),
            (FD = function (t, e, n, i, r) {
              function o(i) {
                i && i.__alive && i[e] && i[e](i.__model, a, t._api, n);
              }
              var a = t._model;
              if ((a.setUpdatePayload(n), !i)) return void v([].concat(t._componentsViews).concat(t._chartsViews), o);
              var s = {};
              (s[i + 'Id'] = n[i + 'Id']), (s[i + 'Index'] = n[i + 'Index']), (s[i + 'Name'] = n[i + 'Name']);
              var l = { mainType: i, query: s };
              r && (l.subType = r);
              var u,
                h = n.excludeSeriesId;
              null != h &&
                ((u = Y()),
                v(ur(h), function (t) {
                  var e = br(t, null);
                  null != e && u.set(e, !0);
                })),
                a &&
                  a.eachComponent(
                    l,
                    function (e) {
                      var i = u && null !== u.get(e.id);
                      if (!i)
                        if (za(n))
                          if (e instanceof rI)
                            n.type !== BS || n.notBlur || e.get(['emphasis', 'disabled']) || xa(e, n, t._api);
                          else {
                            var r = wa(e.mainType, e.componentIndex, n.name, t._api),
                              o = r.focusSelf,
                              a = r.dispatchers;
                            n.type === BS && o && !n.notBlur && _a(e.mainType, e.componentIndex, t._api),
                              a &&
                                v(a, function (t) {
                                  n.type === BS ? ha(t) : ca(t);
                                });
                          }
                        else Ba(n) && e instanceof rI && (Ma(e, n, t._api), Ta(e), JD(t));
                    },
                    t,
                  ),
                a &&
                  a.eachComponent(
                    l,
                    function (e) {
                      var n = u && null !== u.get(e.id);
                      n || o(t['series' === i ? '_chartsMap' : '_componentsMap'][e.__viewId]);
                    },
                    t,
                  );
            }),
            (VD = {
              prepareAndUpdate: function (t) {
                ED(this), VD.update.call(this, t, { optionChanged: null != t.newOption });
              },
              update: function (e, n) {
                var i = this._model,
                  r = this._api,
                  o = this._zr,
                  a = this._coordSysMgr,
                  s = this._scheduler;
                if (i) {
                  i.setUpdatePayload(e),
                    s.restoreData(i, e),
                    s.performSeriesTasks(i),
                    a.create(i, r),
                    s.performDataProcessorTasks(i, e),
                    WD(this, i),
                    a.update(i, r),
                    t(i),
                    s.performVisualTasks(i, e),
                    qD(this, i, r, e, n);
                  var l = i.get('backgroundColor') || 'transparent',
                    u = i.get('darkMode');
                  o.setBackgroundColor(l),
                    null != u && 'auto' !== u && o.setDarkMode(u),
                    oD.trigger('afterupdate', i, r);
                }
              },
              updateTransform: function (e) {
                var n = this,
                  i = this._model,
                  r = this._api;
                if (i) {
                  i.setUpdatePayload(e);
                  var o = [];
                  i.eachComponent(function (t, a) {
                    if ('series' !== t) {
                      var s = n.getViewOfComponentModel(a);
                      if (s && s.__alive)
                        if (s.updateTransform) {
                          var l = s.updateTransform(a, i, r, e);
                          l && l.update && o.push(s);
                        } else o.push(s);
                    }
                  });
                  var a = Y();
                  i.eachSeries(function (t) {
                    var o = n._chartsMap[t.__viewId];
                    if (o.updateTransform) {
                      var s = o.updateTransform(t, i, r, e);
                      s && s.update && a.set(t.uid, 1);
                    } else a.set(t.uid, 1);
                  }),
                    t(i),
                    this._scheduler.performVisualTasks(i, e, { setDirty: !0, dirtyMap: a }),
                    KD(this, i, r, e, {}, a),
                    oD.trigger('afterupdate', i, r);
                }
              },
              updateView: function (e) {
                var n = this._model;
                n &&
                  (n.setUpdatePayload(e),
                  lI.markUpdateMethod(e, 'updateView'),
                  t(n),
                  this._scheduler.performVisualTasks(n, e, { setDirty: !0 }),
                  qD(this, n, this._api, e, {}),
                  oD.trigger('afterupdate', n, this._api));
              },
              updateVisual: function (e) {
                var n = this,
                  i = this._model;
                i &&
                  (i.setUpdatePayload(e),
                  i.eachSeries(function (t) {
                    t.getData().clearAllVisual();
                  }),
                  lI.markUpdateMethod(e, 'updateVisual'),
                  t(i),
                  this._scheduler.performVisualTasks(i, e, { visualType: 'visual', setDirty: !0 }),
                  i.eachComponent(function (t, r) {
                    if ('series' !== t) {
                      var o = n.getViewOfComponentModel(r);
                      o && o.__alive && o.updateVisual(r, i, n._api, e);
                    }
                  }),
                  i.eachSeries(function (t) {
                    var r = n._chartsMap[t.__viewId];
                    r.updateVisual(t, i, n._api, e);
                  }),
                  oD.trigger('afterupdate', i, this._api));
              },
              updateLayout: function (t) {
                VD.update.call(this, t);
              },
            }),
            (HD = function (t, e, n, i) {
              if (!t._disposed)
                for (
                  var r, o = t._model, a = t._coordSysMgr.getCoordinateSystems(), s = kr(o, n), l = 0;
                  l < a.length;
                  l++
                ) {
                  var u = a[l];
                  if (u[e] && null != (r = u[e](o, s, i))) return r;
                }
            }),
            (WD = function (t, e) {
              var n = t._chartsMap,
                i = t._scheduler;
              e.eachSeries(function (t) {
                i.updateStreamModes(t, n[t.__viewId]);
              });
            }),
            (GD = function (t, e) {
              var n = this,
                i = this.getModel(),
                r = t.type,
                o = t.escapeConnect,
                a = rk[r],
                s = a.actionInfo,
                l = (s.update || 'update').split(':'),
                u = l.pop(),
                p = null != l[0] && zr(l[0]);
              this[ID] = !0;
              var d = [t],
                f = !1;
              t.batch &&
                ((f = !0),
                (d = y(t.batch, function (e) {
                  return (e = c(h({}, e), t)), (e.batch = null), e;
                })));
              var g,
                m = [],
                _ = Ba(t),
                x = za(t);
              if (
                (x && ya(this._api),
                v(d, function (e) {
                  if (
                    ((g = a.action(e, n._model, n._api)),
                    (g = g || h({}, e)),
                    (g.type = s.event || g.type),
                    m.push(g),
                    x)
                  ) {
                    var i = Ar(t),
                      r = i.queryOptionMap,
                      o = i.mainTypeSpecified,
                      l = o ? r.keys()[0] : 'series';
                    FD(n, u, e, l), JD(n);
                  } else _ ? (FD(n, u, e, 'series'), JD(n)) : p && FD(n, u, e, p.main, p.sub);
                }),
                'none' !== u && !x && !_ && !p)
              )
                try {
                  this[DD] ? (ED(this), VD.update.call(this, t), (this[DD] = null)) : VD[u].call(this, t);
                } catch (w) {
                  throw ((this[ID] = !1), w);
                }
              if (((g = f ? { type: s.event || r, escapeConnect: o, batch: m } : m[0]), (this[ID] = !1), !e)) {
                var b = this._messageCenter;
                if ((b.trigger(g.type, g), _)) {
                  var S = {
                    type: 'selectchanged',
                    escapeConnect: o,
                    selected: Ca(i),
                    isFromClick: t.isFromClick || !1,
                    fromAction: t.type,
                    fromActionPayload: t,
                  };
                  b.trigger(S.type, S);
                }
              }
            }),
            (UD = function (t) {
              for (var e = this._pendingActions; e.length; ) {
                var n = e.shift();
                GD.call(this, n, t);
              }
            }),
            (XD = function (t) {
              !t && this.trigger('updated');
            }),
            (YD = function (t, e) {
              t.on('rendered', function (n) {
                e.trigger('rendered', n),
                  !t.animation.isFinished() ||
                    e[DD] ||
                    e._scheduler.unfinished ||
                    e._pendingActions.length ||
                    e.trigger('finished');
              });
            }),
            (ZD = function (t, e) {
              t.on('mouseover', function (t) {
                var n = t.target,
                  i = lc(n, Oa);
                i && (ba(i, t, e._api), JD(e));
              })
                .on('mouseout', function (t) {
                  var n = t.target,
                    i = lc(n, Oa);
                  i && (Sa(i, t, e._api), JD(e));
                })
                .on('click', function (t) {
                  var n = t.target,
                    i = lc(
                      n,
                      function (t) {
                        return null != bS(t).dataIndex;
                      },
                      !0,
                    );
                  if (i) {
                    var r = i.selected ? 'unselect' : 'select',
                      o = bS(i);
                    e._api.dispatchAction({
                      type: r,
                      dataType: o.dataType,
                      dataIndexInside: o.dataIndex,
                      seriesIndex: o.seriesIndex,
                      isFromClick: !0,
                    });
                  }
                });
            }),
            (qD = function (t, e, i, r, o) {
              n(e),
                jD(t, e, i, r, o),
                v(t._chartsViews, function (t) {
                  t.__alive = !1;
                }),
                KD(t, e, i, r, o),
                v(t._chartsViews, function (t) {
                  t.__alive || t.remove(e, i);
                });
            }),
            (jD = function (t, e, n, i, r, o) {
              v(o || t._componentsViews, function (t) {
                var r = t.__model;
                l(r, t), t.render(r, e, n, i), a(r, t), u(r, t);
              });
            }),
            (KD = function (t, e, n, i, s, c) {
              var p = t._scheduler;
              (s = h(s || {}, { updatedSeries: e.getSeries() })), oD.trigger('series:beforeupdate', e, n, s);
              var d = !1;
              e.eachSeries(function (e) {
                var n = t._chartsMap[e.__viewId];
                n.__alive = !0;
                var r = n.renderTask;
                p.updatePayload(r, i),
                  l(e, n),
                  c && c.get(e.uid) && r.dirty(),
                  r.perform(p.getPerformArgs(r)) && (d = !0),
                  (n.group.silent = !!e.get('silent')),
                  o(e, n),
                  Ta(e);
              }),
                (p.unfinished = d || p.unfinished),
                oD.trigger('series:layoutlabels', e, n, s),
                oD.trigger('series:transition', e, n, s),
                e.eachSeries(function (e) {
                  var n = t._chartsMap[e.__viewId];
                  a(e, n), u(e, n);
                }),
                r(t, e),
                oD.trigger('series:afterupdate', e, n, s);
            }),
            (JD = function (t) {
              (t[kD] = !0), t.getZr().wakeUp();
            }),
            (tk = function (t) {
              t[kD] &&
                (t.getZr().storage.traverse(function (t) {
                  as(t) || i(t);
                }),
                (t[kD] = !1));
            }),
            ($D = function (t) {
              return new ((function (n) {
                function i() {
                  return (null !== n && n.apply(this, arguments)) || this;
                }
                return (
                  e(i, n),
                  (i.prototype.getCoordinateSystems = function () {
                    return t._coordSysMgr.getCoordinateSystems();
                  }),
                  (i.prototype.getComponentByElement = function (e) {
                    for (; e; ) {
                      var n = e.__ecComponentInfo;
                      if (null != n) return t._model.getComponent(n.mainType, n.index);
                      e = e.parent;
                    }
                  }),
                  (i.prototype.enterEmphasis = function (e, n) {
                    ha(e, n), JD(t);
                  }),
                  (i.prototype.leaveEmphasis = function (e, n) {
                    ca(e, n), JD(t);
                  }),
                  (i.prototype.enterBlur = function (e) {
                    pa(e), JD(t);
                  }),
                  (i.prototype.leaveBlur = function (e) {
                    da(e), JD(t);
                  }),
                  (i.prototype.enterSelect = function (e) {
                    fa(e), JD(t);
                  }),
                  (i.prototype.leaveSelect = function (e) {
                    ga(e), JD(t);
                  }),
                  (i.prototype.getModel = function () {
                    return t.getModel();
                  }),
                  (i.prototype.getViewOfComponentModel = function (e) {
                    return t.getViewOfComponentModel(e);
                  }),
                  (i.prototype.getViewOfSeriesModel = function (e) {
                    return t.getViewOfSeriesModel(e);
                  }),
                  i
                );
              })(yC))(t);
            }),
            (QD = function (t) {
              function e(t, e) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  i[PD] = e;
                }
              }
              v(ok, function (n, i) {
                t._messageCenter.on(i, function (n) {
                  if (pk[t.group] && t[PD] !== LD) {
                    if (n && n.escapeConnect) return;
                    var i = t.makeActionFromEvent(n),
                      r = [];
                    v(ck, function (e) {
                      e !== t && e.group === t.group && r.push(e);
                    }),
                      e(r, LD),
                      v(r, function (t) {
                        t[PD] !== OD && t.dispatchAction(i);
                      }),
                      e(r, RD);
                  }
                });
              });
            });
        })()),
        n
      );
    })(q_),
    nk = ek.prototype;
  (nk.on = Qc('on')),
    (nk.off = Qc('off')),
    (nk.one = function (t, e, n) {
      function i() {
        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
        e && e.apply && e.apply(this, n), r.off(t, i);
      }
      var r = this;
      this.on.call(this, t, i, n);
    });
  var ik = [
      'click',
      'dblclick',
      'mouseover',
      'mouseout',
      'mousemove',
      'mousedown',
      'mouseup',
      'globalout',
      'contextmenu',
    ],
    rk = {},
    ok = {},
    ak = [],
    sk = [],
    lk = [],
    uk = {},
    hk = {},
    ck = {},
    pk = {},
    dk = +new Date() - 0,
    fk = +new Date() - 0,
    gk = '_echarts_instance_',
    vk = ip,
    yk = [],
    mk = Qu;
  yp(mD, yI),
    yp(wD, _I),
    yp(wD, xI),
    yp(mD, zI),
    yp(wD, EI),
    yp(TD, jc),
    lp(Cu),
    up(pD, Iu),
    _p('default', Yh),
    dp({ type: BS, event: BS, update: BS }, $),
    dp({ type: zS, event: zS, update: zS }, $),
    dp({ type: ES, event: ES, update: ES }, $),
    dp({ type: NS, event: NS, update: NS }, $),
    dp({ type: FS, event: FS, update: FS }, $),
    sp('light', II),
    sp('dark', LI);
  var _k,
    xk,
    wk,
    bk,
    Sk,
    Mk,
    Tk,
    Ck = {},
    Ik = (function () {
      function t(t, e, n, i, r, o) {
        (this._old = t),
          (this._new = e),
          (this._oldKeyGetter = n || Mp),
          (this._newKeyGetter = i || Mp),
          (this.context = r),
          (this._diffModeMultiple = 'multiple' === o);
      }
      return (
        (t.prototype.add = function (t) {
          return (this._add = t), this;
        }),
        (t.prototype.update = function (t) {
          return (this._update = t), this;
        }),
        (t.prototype.updateManyToOne = function (t) {
          return (this._updateManyToOne = t), this;
        }),
        (t.prototype.updateOneToMany = function (t) {
          return (this._updateOneToMany = t), this;
        }),
        (t.prototype.updateManyToMany = function (t) {
          return (this._updateManyToMany = t), this;
        }),
        (t.prototype.remove = function (t) {
          return (this._remove = t), this;
        }),
        (t.prototype.execute = function () {
          this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']();
        }),
        (t.prototype._executeOneToOne = function () {
          var t = this._old,
            e = this._new,
            n = {},
            i = new Array(t.length),
            r = new Array(e.length);
          this._initIndexMap(t, null, i, '_oldKeyGetter'), this._initIndexMap(e, n, r, '_newKeyGetter');
          for (var o = 0; o < t.length; o++) {
            var a = i[o],
              s = n[a],
              l = Sp(s);
            if (l > 1) {
              var u = s.shift();
              1 === s.length && (n[a] = s[0]), this._update && this._update(u, o);
            } else 1 === l ? ((n[a] = null), this._update && this._update(s, o)) : this._remove && this._remove(o);
          }
          this._performRestAdd(r, n);
        }),
        (t.prototype._executeMultiple = function () {
          var t = this._old,
            e = this._new,
            n = {},
            i = {},
            r = [],
            o = [];
          this._initIndexMap(t, n, r, '_oldKeyGetter'), this._initIndexMap(e, i, o, '_newKeyGetter');
          for (var a = 0; a < r.length; a++) {
            var s = r[a],
              l = n[s],
              u = i[s],
              h = Sp(l),
              c = Sp(u);
            if (h > 1 && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), (i[s] = null);
            else if (1 === h && c > 1) this._updateOneToMany && this._updateOneToMany(u, l), (i[s] = null);
            else if (1 === h && 1 === c) this._update && this._update(u, l), (i[s] = null);
            else if (h > 1 && c > 1) this._updateManyToMany && this._updateManyToMany(u, l), (i[s] = null);
            else if (h > 1) for (var p = 0; h > p; p++) this._remove && this._remove(l[p]);
            else this._remove && this._remove(l);
          }
          this._performRestAdd(o, i);
        }),
        (t.prototype._performRestAdd = function (t, e) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n],
              r = e[i],
              o = Sp(r);
            if (o > 1) for (var a = 0; o > a; a++) this._add && this._add(r[a]);
            else 1 === o && this._add && this._add(r);
            e[i] = null;
          }
        }),
        (t.prototype._initIndexMap = function (t, e, n, i) {
          for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
            var a = '_ec_' + this[i](t[o], o);
            if ((r || (n[o] = a), e)) {
              var s = e[a],
                l = Sp(s);
              0 === l ? ((e[a] = o), r && n.push(a)) : 1 === l ? (e[a] = [s, o]) : s.push(o);
            }
          }
        }),
        t
      );
    })(),
    Dk = (function () {
      function t(t, e) {
        (this._encode = t), (this._schema = e);
      }
      return (
        (t.prototype.get = function () {
          return { fullDimensions: this._getFullDimensionNames(), encode: this._encode };
        }),
        (t.prototype._getFullDimensionNames = function () {
          return (
            this._cachedDimNames ||
              (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []),
            this._cachedDimNames
          );
        }),
        t
      );
    })(),
    kk = (function () {
      function t(t) {
        (this.otherDims = {}), null != t && h(this, t);
      }
      return t;
    })(),
    Ak = Dr(),
    Pk = { float: 'f', int: 'i', ordinal: 'o', number: 'n', time: 't' },
    Lk = (function () {
      function t(t) {
        (this.dimensions = t.dimensions),
          (this._dimOmitted = t.dimensionOmitted),
          (this.source = t.source),
          (this._fullDimCount = t.fullDimensionCount),
          this._updateDimOmitted(t.dimensionOmitted);
      }
      return (
        (t.prototype.isDimensionOmitted = function () {
          return this._dimOmitted;
        }),
        (t.prototype._updateDimOmitted = function (t) {
          (this._dimOmitted = t), t && (this._dimNameMap || (this._dimNameMap = Pp(this.source)));
        }),
        (t.prototype.getSourceDimensionIndex = function (t) {
          return N(this._dimNameMap.get(t), -1);
        }),
        (t.prototype.getSourceDimension = function (t) {
          var e = this.source.dimensionsDefine;
          return e ? e[t] : void 0;
        }),
        (t.prototype.makeStoreSchema = function () {
          for (var t = this._fullDimCount, e = Nu(this.source), n = !Lp(t), i = '', r = [], o = 0, a = 0; t > o; o++) {
            var s = void 0,
              l = void 0,
              u = void 0,
              h = this.dimensions[a];
            if (h && h.storeDimIndex === o) (s = e ? h.name : null), (l = h.type), (u = h.ordinalMeta), a++;
            else {
              var c = this.getSourceDimension(o);
              c && ((s = e ? c.name : null), (l = c.type));
            }
            r.push({ property: s, type: l, ordinalMeta: u }),
              !e ||
                null == s ||
                (h && h.isCalculationCoord) ||
                (i += n ? s.replace(/\`/g, '`1').replace(/\$/g, '`2') : s),
              (i += '$'),
              (i += Pk[l] || 'f'),
              u && (i += u.uid),
              (i += '$');
          }
          var p = this.source,
            d = [p.seriesLayoutBy, p.startIndex, i].join('$$');
          return { dimensions: r, hash: d };
        }),
        (t.prototype.makeOutputDimensionNames = function () {
          for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
            var i = void 0,
              r = this.dimensions[n];
            if (r && r.storeDimIndex === e) r.isCalculationCoord || (i = r.name), n++;
            else {
              var o = this.getSourceDimension(e);
              o && (i = o.name);
            }
            t.push(i);
          }
          return t;
        }),
        (t.prototype.appendCalculationDimension = function (t) {
          this.dimensions.push(t), (t.isCalculationCoord = !0), this._fullDimCount++, this._updateDimOmitted(!0);
        }),
        t
      );
    })(),
    Ok = k,
    Rk = y,
    Bk = 'undefined' == typeof Int32Array ? Array : Int32Array,
    zk = 'e\x00\x00',
    Ek = -1,
    Nk = [
      'hasItemOption',
      '_nameList',
      '_idList',
      '_invertedIndicesMap',
      '_dimSummary',
      'userOutput',
      '_rawData',
      '_dimValueGetter',
      '_nameDimIdx',
      '_idDimIdx',
      '_nameRepeatCount',
    ],
    Fk = ['_approximateExtent'],
    Vk = (function () {
      function t(t, e) {
        (this.type = 'list'),
          (this._dimOmitted = !1),
          (this._nameList = []),
          (this._idList = []),
          (this._visual = {}),
          (this._layout = {}),
          (this._itemVisuals = []),
          (this._itemLayouts = []),
          (this._graphicEls = []),
          (this._approximateExtent = {}),
          (this._calculationInfo = {}),
          (this.hasItemOption = !1),
          (this.TRANSFERABLE_METHODS = ['cloneShallow', 'downSample', 'lttbDownSample', 'map']),
          (this.CHANGABLE_METHODS = ['filterSelf', 'selectRange']),
          (this.DOWNSAMPLE_METHODS = ['downSample', 'lttbDownSample']);
        var n,
          i = !1;
        kp(t)
          ? ((n = t.dimensions), (this._dimOmitted = t.isDimensionOmitted()), (this._schema = t))
          : ((i = !0), (n = t)),
          (n = n || ['x', 'y']);
        for (var r = {}, o = [], a = {}, s = !1, l = {}, u = 0; u < n.length; u++) {
          var h = n[u],
            c = C(h) ? new kk({ name: h }) : h instanceof kk ? h : new kk(h),
            p = c.name;
          (c.type = c.type || 'float'), c.coordDim || ((c.coordDim = p), (c.coordDimIndex = 0));
          var d = (c.otherDims = c.otherDims || {});
          o.push(p),
            (r[p] = c),
            null != l[p] && (s = !0),
            c.createInvertedIndices && (a[p] = []),
            0 === d.itemName && (this._nameDimIdx = u),
            0 === d.itemId && (this._idDimIdx = u),
            i && (c.storeDimIndex = u);
        }
        if (
          ((this.dimensions = o),
          (this._dimInfos = r),
          this._initGetDimensionInfo(s),
          (this.hostModel = e),
          (this._invertedIndicesMap = a),
          this._dimOmitted)
        ) {
          var f = (this._dimIdxToName = Y());
          v(o, function (t) {
            f.set(r[t].storeDimIndex, t);
          });
        }
      }
      return (
        (t.prototype.getDimension = function (t) {
          var e = this._recognizeDimIndex(t);
          if (null == e) return t;
          if (((e = t), !this._dimOmitted)) return this.dimensions[e];
          var n = this._dimIdxToName.get(e);
          if (null != n) return n;
          var i = this._schema.getSourceDimension(e);
          return i ? i.name : void 0;
        }),
        (t.prototype.getDimensionIndex = function (t) {
          var e = this._recognizeDimIndex(t);
          if (null != e) return e;
          if (null == t) return -1;
          var n = this._getDimInfo(t);
          return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
        }),
        (t.prototype._recognizeDimIndex = function (t) {
          return D(t) ||
            (null != t &&
              !isNaN(t) &&
              !this._getDimInfo(t) &&
              (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
            ? +t
            : void 0;
        }),
        (t.prototype._getStoreDimIndex = function (t) {
          var e = this.getDimensionIndex(t);
          return e;
        }),
        (t.prototype.getDimensionInfo = function (t) {
          return this._getDimInfo(this.getDimension(t));
        }),
        (t.prototype._initGetDimensionInfo = function (t) {
          var e = this._dimInfos;
          this._getDimInfo = t
            ? function (t) {
                return e.hasOwnProperty(t) ? e[t] : void 0;
              }
            : function (t) {
                return e[t];
              };
        }),
        (t.prototype.getDimensionsOnCoord = function () {
          return this._dimSummary.dataDimsOnCoord.slice();
        }),
        (t.prototype.mapDimension = function (t, e) {
          var n = this._dimSummary;
          if (null == e) return n.encodeFirstDimNotExtra[t];
          var i = n.encode[t];
          return i ? i[e] : null;
        }),
        (t.prototype.mapDimensionsAll = function (t) {
          var e = this._dimSummary,
            n = e.encode[t];
          return (n || []).slice();
        }),
        (t.prototype.getStore = function () {
          return this._store;
        }),
        (t.prototype.initData = function (t, e, n) {
          var i,
            r = this;
          if ((t instanceof KC && (i = t), !i)) {
            var o = this.dimensions,
              a = ku(t) || g(t) ? new kC(t, o.length) : t;
            i = new KC();
            var s = Rk(o, function (t) {
              return { type: r._dimInfos[t].type, property: t };
            });
            i.initData(a, s, n);
          }
          (this._store = i),
            (this._nameList = (e || []).slice()),
            (this._idList = []),
            (this._nameRepeatCount = {}),
            this._doInit(0, i.count()),
            (this._dimSummary = Tp(this, this._schema)),
            (this.userOutput = this._dimSummary.userOutput);
        }),
        (t.prototype.appendData = function (t) {
          var e = this._store.appendData(t);
          this._doInit(e[0], e[1]);
        }),
        (t.prototype.appendValues = function (t, e) {
          var n = this._store.appendValues(t, e.length),
            i = n.start,
            r = n.end,
            o = this._shouldMakeIdFromName();
          if ((this._updateOrdinalMeta(), e))
            for (var a = i; r > a; a++) {
              var s = a - i;
              (this._nameList[a] = e[s]), o && Tk(this, a);
            }
        }),
        (t.prototype._updateOrdinalMeta = function () {
          for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
            var i = this._dimInfos[e[n]];
            i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
          }
        }),
        (t.prototype._shouldMakeIdFromName = function () {
          var t = this._store.getProvider();
          return null == this._idDimIdx && t.getSource().sourceFormat !== QT && !t.fillStorage;
        }),
        (t.prototype._doInit = function (t, e) {
          if (!(t >= e)) {
            var n = this._store,
              i = n.getProvider();
            this._updateOrdinalMeta();
            var r = this._nameList,
              o = this._idList,
              a = i.getSource().sourceFormat,
              s = a === qT;
            if (s && !i.pure)
              for (var l = [], u = t; e > u; u++) {
                var h = i.getItem(u, l);
                if ((!this.hasItemOption && pr(h) && (this.hasItemOption = !0), h)) {
                  var c = h.name;
                  null == r[u] && null != c && (r[u] = br(c, null));
                  var p = h.id;
                  null == o[u] && null != p && (o[u] = br(p, null));
                }
              }
            if (this._shouldMakeIdFromName()) for (var u = t; e > u; u++) Tk(this, u);
            _k(this);
          }
        }),
        (t.prototype.getApproximateExtent = function (t) {
          return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
        }),
        (t.prototype.setApproximateExtent = function (t, e) {
          (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
        }),
        (t.prototype.getCalculationInfo = function (t) {
          return this._calculationInfo[t];
        }),
        (t.prototype.setCalculationInfo = function (t, e) {
          Ok(t) ? h(this._calculationInfo, t) : (this._calculationInfo[t] = e);
        }),
        (t.prototype.getName = function (t) {
          var e = this.getRawIndex(t),
            n = this._nameList[e];
          return null == n && null != this._nameDimIdx && (n = wk(this, this._nameDimIdx, e)), null == n && (n = ''), n;
        }),
        (t.prototype._getCategory = function (t, e) {
          var n = this._store.get(t, e),
            i = this._store.getOrdinalMeta(t);
          return i ? i.categories[n] : n;
        }),
        (t.prototype.getId = function (t) {
          return xk(this, this.getRawIndex(t));
        }),
        (t.prototype.count = function () {
          return this._store.count();
        }),
        (t.prototype.get = function (t, e) {
          var n = this._store,
            i = this._dimInfos[t];
          return i ? n.get(i.storeDimIndex, e) : void 0;
        }),
        (t.prototype.getByRawIndex = function (t, e) {
          var n = this._store,
            i = this._dimInfos[t];
          return i ? n.getByRawIndex(i.storeDimIndex, e) : void 0;
        }),
        (t.prototype.getIndices = function () {
          return this._store.getIndices();
        }),
        (t.prototype.getDataExtent = function (t) {
          return this._store.getDataExtent(this._getStoreDimIndex(t));
        }),
        (t.prototype.getSum = function (t) {
          return this._store.getSum(this._getStoreDimIndex(t));
        }),
        (t.prototype.getMedian = function (t) {
          return this._store.getMedian(this._getStoreDimIndex(t));
        }),
        (t.prototype.getValues = function (t, e) {
          var n = this,
            i = this._store;
          return M(t)
            ? i.getValues(
                Rk(t, function (t) {
                  return n._getStoreDimIndex(t);
                }),
                e,
              )
            : i.getValues(t);
        }),
        (t.prototype.hasValue = function (t) {
          for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; i > n; n++)
            if (isNaN(this._store.get(e[n], t))) return !1;
          return !0;
        }),
        (t.prototype.indexOfName = function (t) {
          for (var e = 0, n = this._store.count(); n > e; e++) if (this.getName(e) === t) return e;
          return -1;
        }),
        (t.prototype.getRawIndex = function (t) {
          return this._store.getRawIndex(t);
        }),
        (t.prototype.indexOfRawIndex = function (t) {
          return this._store.indexOfRawIndex(t);
        }),
        (t.prototype.rawIndexOf = function (t, e) {
          var n = t && this._invertedIndicesMap[t],
            i = n[e];
          return null == i || isNaN(i) ? Ek : i;
        }),
        (t.prototype.indicesOfNearest = function (t, e, n) {
          return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
        }),
        (t.prototype.each = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = []));
          var i = n || this,
            r = Rk(bk(t), this._getStoreDimIndex, this);
          this._store.each(r, i ? z_(e, i) : e);
        }),
        (t.prototype.filterSelf = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = []));
          var i = n || this,
            r = Rk(bk(t), this._getStoreDimIndex, this);
          return (this._store = this._store.filter(r, i ? z_(e, i) : e)), this;
        }),
        (t.prototype.selectRange = function (t) {
          var e = this,
            n = {},
            i = w(t),
            r = [];
          return (
            v(i, function (i) {
              var o = e._getStoreDimIndex(i);
              (n[o] = t[i]), r.push(o);
            }),
            (this._store = this._store.selectRange(n)),
            this
          );
        }),
        (t.prototype.mapArray = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = [])), (n = n || this);
          var i = [];
          return (
            this.each(
              t,
              function () {
                i.push(e && e.apply(this, arguments));
              },
              n,
            ),
            i
          );
        }),
        (t.prototype.map = function (t, e, n, i) {
          var r = n || i || this,
            o = Rk(bk(t), this._getStoreDimIndex, this),
            a = Mk(this);
          return (a._store = this._store.map(o, r ? z_(e, r) : e)), a;
        }),
        (t.prototype.modify = function (t, e, n, i) {
          var r = n || i || this,
            o = Rk(bk(t), this._getStoreDimIndex, this);
          this._store.modify(o, r ? z_(e, r) : e);
        }),
        (t.prototype.downSample = function (t, e, n, i) {
          var r = Mk(this);
          return (r._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i)), r;
        }),
        (t.prototype.lttbDownSample = function (t, e) {
          var n = Mk(this);
          return (n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)), n;
        }),
        (t.prototype.getRawDataItem = function (t) {
          return this._store.getRawDataItem(t);
        }),
        (t.prototype.getItemModel = function (t) {
          var e = this.hostModel,
            n = this.getRawDataItem(t);
          return new cT(n, e, e && e.ecModel);
        }),
        (t.prototype.diff = function (t) {
          var e = this;
          return new Ik(
            t ? t.getStore().getIndices() : [],
            this.getStore().getIndices(),
            function (e) {
              return xk(t, e);
            },
            function (t) {
              return xk(e, t);
            },
          );
        }),
        (t.prototype.getVisual = function (t) {
          var e = this._visual;
          return e && e[t];
        }),
        (t.prototype.setVisual = function (t, e) {
          (this._visual = this._visual || {}), Ok(t) ? h(this._visual, t) : (this._visual[t] = e);
        }),
        (t.prototype.getItemVisual = function (t, e) {
          var n = this._itemVisuals[t],
            i = n && n[e];
          return null == i ? this.getVisual(e) : i;
        }),
        (t.prototype.hasItemVisual = function () {
          return this._itemVisuals.length > 0;
        }),
        (t.prototype.ensureUniqueItemVisual = function (t, e) {
          var n = this._itemVisuals,
            i = n[t];
          i || (i = n[t] = {});
          var r = i[e];
          return (
            null == r && ((r = this.getVisual(e)), M(r) ? (r = r.slice()) : Ok(r) && (r = h({}, r)), (i[e] = r)), r
          );
        }),
        (t.prototype.setItemVisual = function (t, e, n) {
          var i = this._itemVisuals[t] || {};
          (this._itemVisuals[t] = i), Ok(e) ? h(i, e) : (i[e] = n);
        }),
        (t.prototype.clearAllVisual = function () {
          (this._visual = {}), (this._itemVisuals = []);
        }),
        (t.prototype.setLayout = function (t, e) {
          Ok(t) ? h(this._layout, t) : (this._layout[t] = e);
        }),
        (t.prototype.getLayout = function (t) {
          return this._layout[t];
        }),
        (t.prototype.getItemLayout = function (t) {
          return this._itemLayouts[t];
        }),
        (t.prototype.setItemLayout = function (t, e, n) {
          this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e;
        }),
        (t.prototype.clearItemLayouts = function () {
          this._itemLayouts.length = 0;
        }),
        (t.prototype.setItemGraphicEl = function (t, e) {
          var n = this.hostModel && this.hostModel.seriesIndex;
          SS(n, this.dataType, t, e), (this._graphicEls[t] = e);
        }),
        (t.prototype.getItemGraphicEl = function (t) {
          return this._graphicEls[t];
        }),
        (t.prototype.eachItemGraphicEl = function (t, e) {
          v(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i);
          });
        }),
        (t.prototype.cloneShallow = function (e) {
          return (
            e || (e = new t(this._schema ? this._schema : Rk(this.dimensions, this._getDimInfo, this), this.hostModel)),
            Sk(e, this),
            (e._store = this._store),
            e
          );
        }),
        (t.prototype.wrapMethod = function (t, e) {
          var n = this[t];
          T(n) &&
            ((this.__wrappedMethods = this.__wrappedMethods || []),
            this.__wrappedMethods.push(t),
            (this[t] = function () {
              var t = n.apply(this, arguments);
              return e.apply(this, [t].concat(V(arguments)));
            }));
        }),
        (t.internalField = (function () {
          (_k = function (t) {
            var e = t._invertedIndicesMap;
            v(e, function (n, i) {
              var r = t._dimInfos[i],
                o = r.ordinalMeta,
                a = t._store;
              if (o) {
                n = e[i] = new Bk(o.categories.length);
                for (var s = 0; s < n.length; s++) n[s] = Ek;
                for (var s = 0; s < a.count(); s++) n[a.get(r.storeDimIndex, s)] = s;
              }
            });
          }),
            (wk = function (t, e, n) {
              return br(t._getCategory(e, n), null);
            }),
            (xk = function (t, e) {
              var n = t._idList[e];
              return null == n && null != t._idDimIdx && (n = wk(t, t._idDimIdx, e)), null == n && (n = zk + e), n;
            }),
            (bk = function (t) {
              return M(t) || (t = null != t ? [t] : []), t;
            }),
            (Mk = function (e) {
              var n = new t(e._schema ? e._schema : Rk(e.dimensions, e._getDimInfo, e), e.hostModel);
              return Sk(n, e), n;
            }),
            (Sk = function (t, e) {
              v(Nk.concat(e.__wrappedMethods || []), function (n) {
                e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
                (t.__wrappedMethods = e.__wrappedMethods),
                v(Fk, function (n) {
                  t[n] = s(e[n]);
                }),
                (t._calculationInfo = h({}, e._calculationInfo));
            }),
            (Tk = function (t, e) {
              var n = t._nameList,
                i = t._idList,
                r = t._nameDimIdx,
                o = t._idDimIdx,
                a = n[e],
                s = i[e];
              if (
                (null == a && null != r && (n[e] = a = wk(t, r, e)),
                null == s && null != o && (i[e] = s = wk(t, o, e)),
                null == s && null != a)
              ) {
                var l = t._nameRepeatCount,
                  u = (l[a] = (l[a] || 0) + 1);
                (s = a), u > 1 && (s += '__ec__' + u), (i[e] = s);
              }
            });
        })()),
        t
      );
    })(),
    Hk = (function () {
      function t(t) {
        (this.coordSysDims = []), (this.axisMap = Y()), (this.categoryAxisMap = Y()), (this.coordSysName = t);
      }
      return t;
    })(),
    Wk = {
      cartesian2d: function (t, e, n, i) {
        var r = t.getReferringComponents('xAxis', tb).models[0],
          o = t.getReferringComponents('yAxis', tb).models[0];
        (e.coordSysDims = ['x', 'y']),
          n.set('x', r),
          n.set('y', o),
          Fp(r) && (i.set('x', r), (e.firstCategoryDimIndex = 0)),
          Fp(o) && (i.set('y', o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
      },
      singleAxis: function (t, e, n, i) {
        var r = t.getReferringComponents('singleAxis', tb).models[0];
        (e.coordSysDims = ['single']), n.set('single', r), Fp(r) && (i.set('single', r), (e.firstCategoryDimIndex = 0));
      },
      polar: function (t, e, n, i) {
        var r = t.getReferringComponents('polar', tb).models[0],
          o = r.findAxisModel('radiusAxis'),
          a = r.findAxisModel('angleAxis');
        (e.coordSysDims = ['radius', 'angle']),
          n.set('radius', o),
          n.set('angle', a),
          Fp(o) && (i.set('radius', o), (e.firstCategoryDimIndex = 0)),
          Fp(a) && (i.set('angle', a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
      },
      geo: function (t, e) {
        e.coordSysDims = ['lng', 'lat'];
      },
      parallel: function (t, e, n, i) {
        var r = t.ecModel,
          o = r.getComponent('parallel', t.get('parallelIndex')),
          a = (e.coordSysDims = o.dimensions.slice());
        v(o.parallelAxisIndex, function (t, o) {
          var s = r.getComponent('parallelAxis', t),
            l = a[o];
          n.set(l, s), Fp(s) && (i.set(l, s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o));
        });
      },
    },
    Gk = (function () {
      function t(t) {
        (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
      }
      return (
        (t.prototype.getSetting = function (t) {
          return this._setting[t];
        }),
        (t.prototype.unionExtent = function (t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }),
        (t.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (t.prototype.getExtent = function () {
          return this._extent.slice();
        }),
        (t.prototype.setExtent = function (t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }),
        (t.prototype.isInExtentRange = function (t) {
          return this._extent[0] <= t && this._extent[1] >= t;
        }),
        (t.prototype.isBlank = function () {
          return this._isBlank;
        }),
        (t.prototype.setBlank = function (t) {
          this._isBlank = t;
        }),
        t
      );
    })();
  Xr(Gk);
  var Uk = 0,
    Xk = (function () {
      function t(t) {
        (this.categories = t.categories || []),
          (this._needCollect = t.needCollect),
          (this._deduplication = t.deduplication),
          (this.uid = ++Uk);
      }
      return (
        (t.createByAxisModel = function (e) {
          var n = e.option,
            i = n.data,
            r = i && y(i, jp);
          return new t({ categories: r, needCollect: !r, deduplication: n.dedplication !== !1 });
        }),
        (t.prototype.getOrdinal = function (t) {
          return this._getOrCreateMap().get(t);
        }),
        (t.prototype.parseAndCollect = function (t) {
          var e,
            n = this._needCollect;
          if (!C(t) && !n) return t;
          if (n && !this._deduplication) return (e = this.categories.length), (this.categories[e] = t), e;
          var i = this._getOrCreateMap();
          return (
            (e = i.get(t)),
            null == e && (n ? ((e = this.categories.length), (this.categories[e] = t), i.set(t, e)) : (e = 0 / 0)),
            e
          );
        }),
        (t.prototype._getOrCreateMap = function () {
          return this._map || (this._map = Y(this.categories));
        }),
        t
      );
    })(),
    Yk = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        n.type = 'ordinal';
        var i = n.getSetting('ordinalMeta');
        return (
          i || (i = new Xk({})),
          M(i) &&
            (i = new Xk({
              categories: y(i, function (t) {
                return k(t) ? t.value : t;
              }),
            })),
          (n._ordinalMeta = i),
          (n._extent = n.getSetting('extent') || [0, i.categories.length - 1]),
          n
        );
      }
      return (
        e(n, t),
        (n.prototype.parse = function (t) {
          return null == t ? 0 / 0 : C(t) ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        }),
        (n.prototype.contain = function (t) {
          return (t = this.parse(t)), nd(t, this._extent) && null != this._ordinalMeta.categories[t];
        }),
        (n.prototype.normalize = function (t) {
          return (t = this._getTickNumber(this.parse(t))), id(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return (t = Math.round(rd(t, this._extent))), this.getRawOrdinalNumber(t);
        }),
        (n.prototype.getTicks = function () {
          for (var t = [], e = this._extent, n = e[0]; n <= e[1]; ) t.push({ value: n }), n++;
          return t;
        }),
        (n.prototype.getMinorTicks = function () {}),
        (n.prototype.setSortInfo = function (t) {
          if (null == t) return void (this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null);
          for (
            var e = t.ordinalNumbers,
              n = (this._ordinalNumbersByTick = []),
              i = (this._ticksByOrdinalNumber = []),
              r = 0,
              o = this._ordinalMeta.categories.length,
              a = Math.min(o, e.length);
            a > r;
            ++r
          ) {
            var s = e[r];
            (n[r] = s), (i[s] = r);
          }
          for (var l = 0; o > r; ++r) {
            for (; null != i[l]; ) l++;
            n.push(l), (i[l] = r);
          }
        }),
        (n.prototype._getTickNumber = function (t) {
          var e = this._ticksByOrdinalNumber;
          return e && t >= 0 && t < e.length ? e[t] : t;
        }),
        (n.prototype.getRawOrdinalNumber = function (t) {
          var e = this._ordinalNumbersByTick;
          return e && t >= 0 && t < e.length ? e[t] : t;
        }),
        (n.prototype.getLabel = function (t) {
          if (!this.isBlank()) {
            var e = this.getRawOrdinalNumber(t.value),
              n = this._ordinalMeta.categories[e];
            return null == n ? '' : n + '';
          }
        }),
        (n.prototype.count = function () {
          return this._extent[1] - this._extent[0] + 1;
        }),
        (n.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (n.prototype.isInExtentRange = function (t) {
          return (t = this._getTickNumber(t)), this._extent[0] <= t && this._extent[1] >= t;
        }),
        (n.prototype.getOrdinalMeta = function () {
          return this._ordinalMeta;
        }),
        (n.prototype.calcNiceTicks = function () {}),
        (n.prototype.calcNiceExtent = function () {}),
        (n.type = 'ordinal'),
        n
      );
    })(Gk);
  Gk.registerClass(Yk);
  var Zk = Hi,
    qk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'interval'), (e._interval = 0), (e._intervalPrecision = 2), e;
      }
      return (
        e(n, t),
        (n.prototype.parse = function (t) {
          return t;
        }),
        (n.prototype.contain = function (t) {
          return nd(t, this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return id(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return rd(t, this._extent);
        }),
        (n.prototype.setExtent = function (t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
        }),
        (n.prototype.unionExtent = function (t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1]);
        }),
        (n.prototype.getInterval = function () {
          return this._interval;
        }),
        (n.prototype.setInterval = function (t) {
          (this._interval = t), (this._niceExtent = this._extent.slice()), (this._intervalPrecision = Jp(t));
        }),
        (n.prototype.getTicks = function (t) {
          var e = this._interval,
            n = this._extent,
            i = this._niceExtent,
            r = this._intervalPrecision,
            o = [];
          if (!e) return o;
          var a = 1e4;
          n[0] < i[0] && o.push(t ? { value: Zk(i[0] - e, r) } : { value: n[0] });
          for (var s = i[0]; s <= i[1] && (o.push({ value: s }), (s = Zk(s + e, r)), s !== o[o.length - 1].value); )
            if (o.length > a) return [];
          var l = o.length ? o[o.length - 1].value : i[1];
          return n[1] > l && o.push(t ? { value: Zk(l + e, r) } : { value: n[1] }), o;
        }),
        (n.prototype.getMinorTicks = function (t) {
          for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
            for (var o = e[r], a = e[r - 1], s = 0, l = [], u = o.value - a.value, h = u / t; t - 1 > s; ) {
              var c = Zk(a.value + (s + 1) * h);
              c > i[0] && c < i[1] && l.push(c), s++;
            }
            n.push(l);
          }
          return n;
        }),
        (n.prototype.getLabel = function (t, e) {
          if (null == t) return '';
          var n = e && e.precision;
          null == n ? (n = Gi(t.value) || 0) : 'auto' === n && (n = this._intervalPrecision);
          var i = Zk(t.value, n, !0);
          return Cl(i);
        }),
        (n.prototype.calcNiceTicks = function (t, e, n) {
          t = t || 5;
          var i = this._extent,
            r = i[1] - i[0];
          if (isFinite(r)) {
            0 > r && ((r = -r), i.reverse());
            var o = $p(i, t, e, n);
            (this._intervalPrecision = o.intervalPrecision),
              (this._interval = o.interval),
              (this._niceExtent = o.niceTickExtent);
          }
        }),
        (n.prototype.calcNiceExtent = function (t) {
          var e = this._extent;
          if (e[0] === e[1])
            if (0 !== e[0]) {
              var n = e[0];
              t.fixMax ? (e[0] -= n / 2) : ((e[1] += n / 2), (e[0] -= n / 2));
            } else e[1] = 1;
          var i = e[1] - e[0];
          isFinite(i) || ((e[0] = 0), (e[1] = 1)), this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
          var r = this._interval;
          t.fixMin || (e[0] = Zk(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Zk(Math.ceil(e[1] / r) * r));
        }),
        (n.prototype.setNiceExtent = function (t, e) {
          this._niceExtent = [t, e];
        }),
        (n.type = 'interval'),
        n
      );
    })(Gk);
  Gk.registerClass(qk);
  var jk = 'undefined' != typeof Float32Array,
    Kk = jk ? Float32Array : Array,
    $k = '__ec_stack_',
    Qk = function (t, e, n, i) {
      for (; i > n; ) {
        var r = (n + i) >>> 1;
        t[r][1] < e ? (n = r + 1) : (i = r);
      }
      return n;
    },
    Jk = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = 'time'), n;
      }
      return (
        e(n, t),
        (n.prototype.getLabel = function (t) {
          var e = this.getSetting('useUTC');
          return sl(t.value, DT[al(rl(this._minLevelUnit))] || DT.second, e, this.getSetting('locale'));
        }),
        (n.prototype.getFormattedLabel = function (t, e, n) {
          var i = this.getSetting('useUTC'),
            r = this.getSetting('locale');
          return ll(t, e, n, r, i);
        }),
        (n.prototype.getTicks = function () {
          var t = this._interval,
            e = this._extent,
            n = [];
          if (!t) return n;
          n.push({ value: e[0], level: 0 });
          var i = this.getSetting('useUTC'),
            r = Cd(this._minLevelUnit, this._approxInterval, i, e);
          return (n = n.concat(r)), n.push({ value: e[1], level: 0 }), n;
        }),
        (n.prototype.calcNiceExtent = function (t) {
          var e = this._extent;
          if ((e[0] === e[1] && ((e[0] -= MT), (e[1] += MT)), e[1] === -1 / 0 && 1 / 0 === e[0])) {
            var n = new Date();
            (e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())), (e[0] = e[1] - MT);
          }
          this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        }),
        (n.prototype.calcNiceTicks = function (t, e, n) {
          t = t || 10;
          var i = this._extent,
            r = i[1] - i[0];
          (this._approxInterval = r / t),
            null != e && this._approxInterval < e && (this._approxInterval = e),
            null != n && this._approxInterval > n && (this._approxInterval = n);
          var o = tA.length,
            a = Math.min(Qk(tA, this._approxInterval, 0, o), o - 1);
          (this._interval = tA[a][1]), (this._minLevelUnit = tA[Math.max(a - 1, 0)][0]);
        }),
        (n.prototype.parse = function (t) {
          return D(t) ? t : +Ki(t);
        }),
        (n.prototype.contain = function (t) {
          return nd(this.parse(t), this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return id(this.parse(t), this._extent);
        }),
        (n.prototype.scale = function (t) {
          return rd(t, this._extent);
        }),
        (n.type = 'time'),
        n
      );
    })(qk),
    tA = [
      ['second', wT],
      ['minute', bT],
      ['hour', ST],
      ['quarter-day', 6 * ST],
      ['half-day', 12 * ST],
      ['day', 1.2 * MT],
      ['half-week', 3.5 * MT],
      ['week', 7 * MT],
      ['month', 31 * MT],
      ['quarter', 95 * MT],
      ['half-year', TT / 2],
      ['year', TT],
    ];
  Gk.registerClass(Jk);
  var eA = Gk.prototype,
    nA = qk.prototype,
    iA = Hi,
    rA = Math.floor,
    oA = Math.ceil,
    aA = Math.pow,
    sA = Math.log,
    lA = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'log'), (e.base = 10), (e._originalScale = new qk()), (e._interval = 0), e;
      }
      return (
        e(n, t),
        (n.prototype.getTicks = function (t) {
          var e = this._originalScale,
            n = this._extent,
            i = e.getExtent(),
            r = nA.getTicks.call(this, t);
          return y(
            r,
            function (t) {
              var e = t.value,
                r = Hi(aA(this.base, e));
              return (
                (r = e === n[0] && this._fixMin ? Id(r, i[0]) : r),
                (r = e === n[1] && this._fixMax ? Id(r, i[1]) : r),
                { value: r }
              );
            },
            this,
          );
        }),
        (n.prototype.setExtent = function (t, e) {
          var n = this.base;
          (t = sA(t) / sA(n)), (e = sA(e) / sA(n)), nA.setExtent.call(this, t, e);
        }),
        (n.prototype.getExtent = function () {
          var t = this.base,
            e = eA.getExtent.call(this);
          (e[0] = aA(t, e[0])), (e[1] = aA(t, e[1]));
          var n = this._originalScale,
            i = n.getExtent();
          return this._fixMin && (e[0] = Id(e[0], i[0])), this._fixMax && (e[1] = Id(e[1], i[1])), e;
        }),
        (n.prototype.unionExtent = function (t) {
          this._originalScale.unionExtent(t);
          var e = this.base;
          (t[0] = sA(t[0]) / sA(e)), (t[1] = sA(t[1]) / sA(e)), eA.unionExtent.call(this, t);
        }),
        (n.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (n.prototype.calcNiceTicks = function (t) {
          t = t || 10;
          var e = this._extent,
            n = e[1] - e[0];
          if (!(1 / 0 === n || 0 >= n)) {
            var i = $i(n),
              r = (t / n) * i;
            for (0.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0; ) i *= 10;
            var o = [Hi(oA(e[0] / i) * i), Hi(rA(e[1] / i) * i)];
            (this._interval = i), (this._niceExtent = o);
          }
        }),
        (n.prototype.calcNiceExtent = function (t) {
          nA.calcNiceExtent.call(this, t), (this._fixMin = t.fixMin), (this._fixMax = t.fixMax);
        }),
        (n.prototype.parse = function (t) {
          return t;
        }),
        (n.prototype.contain = function (t) {
          return (t = sA(t) / sA(this.base)), nd(t, this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return (t = sA(t) / sA(this.base)), id(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return (t = rd(t, this._extent)), aA(this.base, t);
        }),
        (n.type = 'log'),
        n
      );
    })(Gk),
    uA = lA.prototype;
  (uA.getMinorTicks = nA.getMinorTicks), (uA.getLabel = nA.getLabel), Gk.registerClass(lA);
  var hA = (function () {
      function t(t, e, n) {
        this._prepareParams(t, e, n);
      }
      return (
        (t.prototype._prepareParams = function (t, e, n) {
          n[1] < n[0] && (n = [0 / 0, 0 / 0]), (this._dataMin = n[0]), (this._dataMax = n[1]);
          var i = (this._isOrdinal = 'ordinal' === t.type);
          this._needCrossZero = 'interval' === t.type && e.getNeedCrossZero && e.getNeedCrossZero();
          var r = (this._modelMinRaw = e.get('min', !0));
          T(r)
            ? (this._modelMinNum = kd(t, r({ min: n[0], max: n[1] })))
            : 'dataMin' !== r && (this._modelMinNum = kd(t, r));
          var o = (this._modelMaxRaw = e.get('max', !0));
          if (
            (T(o)
              ? (this._modelMaxNum = kd(t, o({ min: n[0], max: n[1] })))
              : 'dataMax' !== o && (this._modelMaxNum = kd(t, o)),
            i)
          )
            this._axisDataLen = e.getCategories().length;
          else {
            var a = e.get('boundaryGap'),
              s = M(a) ? a : [a || 0, a || 0];
            this._boundaryGapInner =
              'boolean' == typeof s[0] || 'boolean' == typeof s[1] ? [0, 0] : [bi(s[0], 1), bi(s[1], 1)];
          }
        }),
        (t.prototype.calculate = function () {
          var t = this._isOrdinal,
            e = this._dataMin,
            n = this._dataMax,
            i = this._axisDataLen,
            r = this._boundaryGapInner,
            o = t ? null : n - e || Math.abs(e),
            a = 'dataMin' === this._modelMinRaw ? e : this._modelMinNum,
            s = 'dataMax' === this._modelMaxRaw ? n : this._modelMaxNum,
            l = null != a,
            u = null != s;
          null == a && (a = t ? (i ? 0 : 0 / 0) : e - r[0] * o),
            null == s && (s = t ? (i ? i - 1 : 0 / 0) : n + r[1] * o),
            (null == a || !isFinite(a)) && (a = 0 / 0),
            (null == s || !isFinite(s)) && (s = 0 / 0);
          var h = z(a) || z(s) || (t && !i);
          this._needCrossZero && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
          var c = this._determinedMin,
            p = this._determinedMax;
          return (
            null != c && ((a = c), (l = !0)),
            null != p && ((s = p), (u = !0)),
            { min: a, max: s, minFixed: l, maxFixed: u, isBlank: h }
          );
        }),
        (t.prototype.modifyDataMinMax = function (t, e) {
          this[pA[t]] = e;
        }),
        (t.prototype.setDeterminedMinMax = function (t, e) {
          var n = cA[t];
          this[n] = e;
        }),
        (t.prototype.freeze = function () {
          this.frozen = !0;
        }),
        t
      );
    })(),
    cA = { min: '_determinedMin', max: '_determinedMax' },
    pA = { min: '_dataMin', max: '_dataMax' },
    dA = (function () {
      function t() {}
      return (
        (t.prototype.getNeedCrossZero = function () {
          var t = this.option;
          return !t.scale;
        }),
        (t.prototype.getCoordSysModel = function () {}),
        t
      );
    })(),
    fA = { isDimensionStacked: Wp, enableDataStack: Vp, getStackedDimension: Gp },
    gA = (Object.freeze || Object)({
      createList: Wd,
      getLayoutRect: El,
      dataStack: fA,
      createScale: Gd,
      mixinAxisModelCommonMethods: Ud,
      getECData: bS,
      createTextStyle: Xd,
      createDimensions: Op,
      createSymbol: hc,
      enableHoverEmphasis: Ia,
    }),
    vA = [],
    yA = {
      registerPreprocessor: lp,
      registerProcessor: up,
      registerPostInit: hp,
      registerPostUpdate: cp,
      registerUpdateLifecycle: pp,
      registerAction: dp,
      registerCoordinateSystem: fp,
      registerLayout: vp,
      registerVisual: yp,
      registerTransform: mk,
      registerLoading: _p,
      registerMap: wp,
      registerImpl: Kc,
      PRIORITY: CD,
      ComponentModel: HT,
      ComponentView: oI,
      SeriesModel: rI,
      ChartView: lI,
      registerComponentModel: function (t) {
        HT.registerClass(t);
      },
      registerComponentView: function (t) {
        oI.registerClass(t);
      },
      registerSeriesModel: function (t) {
        rI.registerClass(t);
      },
      registerChartView: function (t) {
        lI.registerClass(t);
      },
      registerSubTypeDefaulter: function (t, e) {
        HT.registerSubTypeDefaulter(t, e);
      },
      registerPainter: function (t, e) {
        Ei(t, e);
      },
    },
    mA = 1e-8,
    _A = [],
    xA = (function () {
      function t(t) {
        this.name = t;
      }
      return (
        (t.prototype.setCenter = function (t) {
          this._center = t;
        }),
        (t.prototype.getCenter = function () {
          var t = this._center;
          return t || (t = this._center = this.calcCenter()), t;
        }),
        t
      );
    })(),
    wA = (function () {
      function t(t, e) {
        (this.type = 'polygon'), (this.exterior = t), (this.interiors = e);
      }
      return t;
    })(),
    bA = (function () {
      function t(t) {
        (this.type = 'linestring'), (this.points = t);
      }
      return t;
    })(),
    SA = (function (t) {
      function n(e, n, i) {
        var r = t.call(this, e) || this;
        return (r.type = 'geoJSON'), (r.geometries = n), (r._center = i && [i[0], i[1]]), r;
      }
      return (
        e(n, t),
        (n.prototype.calcCenter = function () {
          for (var t, e = this.geometries, n = 0, i = 0; i < e.length; i++) {
            var r = e[i],
              o = r.exterior,
              a = o && o.length;
            a > n && ((t = r), (n = a));
          }
          if (t) return $d(t.exterior);
          var s = this.getBoundingRect();
          return [s.x + s.width / 2, s.y + s.height / 2];
        }),
        (n.prototype.getBoundingRect = function (t) {
          var e = this._rect;
          if (e && !t) return e;
          var n = [1 / 0, 1 / 0],
            i = [-1 / 0, -1 / 0],
            r = this.geometries;
          return (
            v(r, function (e) {
              'polygon' === e.type
                ? Kd(e.exterior, n, i, t)
                : v(e.points, function (e) {
                    Kd(e, n, i, t);
                  });
            }),
            (isFinite(n[0]) && isFinite(n[1]) && isFinite(i[0]) && isFinite(i[1])) || (n[0] = n[1] = i[0] = i[1] = 0),
            (e = new Lw(n[0], n[1], i[0] - n[0], i[1] - n[1])),
            t || (this._rect = e),
            e
          );
        }),
        (n.prototype.contain = function (t) {
          var e = this.getBoundingRect(),
            n = this.geometries;
          if (!e.contain(t[0], t[1])) return !1;
          t: for (var i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            if ('polygon' === o.type) {
              var a = o.exterior,
                s = o.interiors;
              if (qd(a, t[0], t[1])) {
                for (var l = 0; l < (s ? s.length : 0); l++) if (qd(s[l], t[0], t[1])) continue t;
                return !0;
              }
            }
          }
          return !1;
        }),
        (n.prototype.transformTo = function (t, e, n, i) {
          var r = this.getBoundingRect(),
            o = r.width / r.height;
          n ? i || (i = n / o) : (n = o * i);
          for (var a = new Lw(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) {
            var h = l[u];
            'polygon' === h.type
              ? (jd(h.exterior, s),
                v(h.interiors, function (t) {
                  jd(t, s);
                }))
              : v(h.points, function (t) {
                  jd(t, s);
                });
          }
          (r = this._rect), r.copy(a), (this._center = [r.x + r.width / 2, r.y + r.height / 2]);
        }),
        (n.prototype.cloneShallow = function (t) {
          null == t && (t = this.name);
          var e = new n(t, this.geometries, this._center);
          return (e._rect = this._rect), (e.transformTo = null), e;
        }),
        n
      );
    })(xA),
    MA =
      ((function (t) {
        function n(e, n) {
          var i = t.call(this, e) || this;
          return (i.type = 'geoSVG'), (i._elOnlyForCalculate = n), i;
        }
        return (
          e(n, t),
          (n.prototype.calcCenter = function () {
            for (
              var t = this._elOnlyForCalculate,
                e = t.getBoundingRect(),
                n = [e.x + e.width / 2, e.y + e.height / 2],
                i = ai(_A),
                r = t;
              r && !r.isGeoSVGGraphicRoot;

            )
              li(i, r.getLocalTransform(), i), (r = r.parent);
            return pi(i, i), ve(n, n, i), n;
          }),
          n
        );
      })(xA),
      (Object.freeze || Object)({
        linearMap: Fi,
        round: Hi,
        asc: Wi,
        getPrecision: Gi,
        getPrecisionSafe: Ui,
        getPixelPrecision: Xi,
        getPercentWithPrecision: Yi,
        MAX_SAFE_INTEGER: qw,
        remRadian: qi,
        isRadianAroundZero: ji,
        parseDate: Ki,
        quantity: $i,
        quantityExponent: Qi,
        nice: Ji,
        quantile: tr,
        reformIntervals: er,
        isNumeric: ir,
        numericToNumber: nr,
      })),
    TA = (Object.freeze || Object)({ parse: Ki, format: sl }),
    CA = (Object.freeze || Object)({
      extendShape: cs,
      extendPath: ps,
      makePath: gs,
      makeImage: vs,
      mergePath: ZM,
      resizePath: ms,
      createIcon: ks,
      updateProps: rs,
      initProps: os,
      getTransform: ws,
      clipPointsByRect: Is,
      clipRectByRect: Ds,
      registerShape: ds,
      getShapeClass: fs,
      Group: Vw,
      Image: hS,
      Text: mS,
      Circle: eM,
      Ellipse: iM,
      Sector: vM,
      Ring: mM,
      Polygon: xM,
      Polyline: bM,
      Rect: fS,
      Line: TM,
      BezierCurve: DM,
      Arc: AM,
      IncrementalDisplayable: HM,
      CompoundPath: PM,
      LinearGradient: OM,
      RadialGradient: RM,
      BoundingRect: Lw,
    }),
    IA = (Object.freeze || Object)({
      addCommas: Cl,
      toCamelCase: Il,
      normalizeCssArray: PT,
      encodeHTML: Dl,
      formatTpl: Al,
      getTooltipMarker: Pl,
      formatTime: Ll,
      capitalFirst: Ol,
      truncateText: $r,
      getTextRect: Tl,
    }),
    DA = (Object.freeze || Object)({
      map: y,
      each: v,
      indexOf: p,
      inherits: d,
      reduce: m,
      filter: _,
      bind: z_,
      curry: S,
      isArray: M,
      isString: C,
      isObject: k,
      isFunction: T,
      extend: h,
      defaults: c,
      clone: s,
      merge: l,
    }),
    kA = Dr(),
    AA = [0, 1],
    PA = (function () {
      function t(t, e, n) {
        (this.onBand = !1), (this.inverse = !1), (this.dim = t), (this.scale = e), (this._extent = n || [0, 0]);
      }
      return (
        (t.prototype.contain = function (t) {
          var e = this._extent,
            n = Math.min(e[0], e[1]),
            i = Math.max(e[0], e[1]);
          return t >= n && i >= t;
        }),
        (t.prototype.containData = function (t) {
          return this.scale.contain(t);
        }),
        (t.prototype.getExtent = function () {
          return this._extent.slice();
        }),
        (t.prototype.getPixelPrecision = function (t) {
          return Xi(t || this.scale.getExtent(), this._extent);
        }),
        (t.prototype.setExtent = function (t, e) {
          var n = this._extent;
          (n[0] = t), (n[1] = e);
        }),
        (t.prototype.dataToCoord = function (t, e) {
          var n = this._extent,
            i = this.scale;
          return (
            (t = i.normalize(t)),
            this.onBand && 'ordinal' === i.type && ((n = n.slice()), yf(n, i.count())),
            Fi(t, AA, n, e)
          );
        }),
        (t.prototype.coordToData = function (t, e) {
          var n = this._extent,
            i = this.scale;
          this.onBand && 'ordinal' === i.type && ((n = n.slice()), yf(n, i.count()));
          var r = Fi(t, n, AA, e);
          return this.scale.scale(r);
        }),
        (t.prototype.pointToData = function () {}),
        (t.prototype.getTicksCoords = function (t) {
          t = t || {};
          var e = t.tickModel || this.getTickModel(),
            n = rf(this, e),
            i = n.ticks,
            r = y(
              i,
              function (t) {
                return {
                  coord: this.dataToCoord('ordinal' === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
                  tickValue: t,
                };
              },
              this,
            ),
            o = e.get('alignWithLabel');
          return mf(this, r, o, t.clamp), r;
        }),
        (t.prototype.getMinorTicksCoords = function () {
          if ('ordinal' === this.scale.type) return [];
          var t = this.model.getModel('minorTick'),
            e = t.get('splitNumber');
          (e > 0 && 100 > e) || (e = 5);
          var n = this.scale.getMinorTicks(e),
            i = y(
              n,
              function (t) {
                return y(
                  t,
                  function (t) {
                    return { coord: this.dataToCoord(t), tickValue: t };
                  },
                  this,
                );
              },
              this,
            );
          return i;
        }),
        (t.prototype.getViewLabels = function () {
          return nf(this).labels;
        }),
        (t.prototype.getLabelModel = function () {
          return this.model.getModel('axisLabel');
        }),
        (t.prototype.getTickModel = function () {
          return this.model.getModel('axisTick');
        }),
        (t.prototype.getBandWidth = function () {
          var t = this._extent,
            e = this.scale.getExtent(),
            n = e[1] - e[0] + (this.onBand ? 1 : 0);
          0 === n && (n = 1);
          var i = Math.abs(t[1] - t[0]);
          return Math.abs(i) / n;
        }),
        (t.prototype.calculateCategoryInterval = function () {
          return df(this);
        }),
        t
      );
    })(),
    LA = 2 * Math.PI,
    OA = qb.CMD,
    RA = ['top', 'right', 'bottom', 'left'],
    BA = [],
    zA = new Sw(),
    EA = new Sw(),
    NA = new Sw(),
    FA = new Sw(),
    VA = new Sw(),
    HA = [],
    WA = new Sw(),
    GA = ['align', 'verticalAlign', 'width', 'height', 'fontSize'],
    UA = new ww(),
    XA = Dr(),
    YA = Dr(),
    ZA = ['x', 'y', 'rotation'],
    qA = (function () {
      function t() {
        (this._labelList = []), (this._chartViewList = []);
      }
      return (
        (t.prototype.clearLabels = function () {
          (this._labelList = []), (this._chartViewList = []);
        }),
        (t.prototype._addLabel = function (t, e, n, i, r) {
          var o = i.style,
            a = i.__hostTarget,
            s = a.textConfig || {},
            l = i.getComputedTransform(),
            u = i.getBoundingRect().plain();
          Lw.applyTransform(u, u, l),
            l
              ? UA.setLocalTransform(l)
              : ((UA.x = UA.y = UA.rotation = UA.originX = UA.originY = 0), (UA.scaleX = UA.scaleY = 1));
          var h,
            c = i.__hostTarget;
          if (c) {
            h = c.getBoundingRect().plain();
            var p = c.getComputedTransform();
            Lw.applyTransform(h, h, p);
          }
          var d = h && c.getTextGuideLine();
          this._labelList.push({
            label: i,
            labelLine: d,
            seriesModel: n,
            dataIndex: t,
            dataType: e,
            layoutOption: r,
            computedLayoutOption: null,
            rect: u,
            hostRect: h,
            priority: h ? h.width * h.height : 0,
            defaultAttr: {
              ignore: i.ignore,
              labelGuideIgnore: d && d.ignore,
              x: UA.x,
              y: UA.y,
              scaleX: UA.scaleX,
              scaleY: UA.scaleY,
              rotation: UA.rotation,
              style: {
                x: o.x,
                y: o.y,
                align: o.align,
                verticalAlign: o.verticalAlign,
                width: o.width,
                height: o.height,
                fontSize: o.fontSize,
              },
              cursor: i.cursor,
              attachedPos: s.position,
              attachedRot: s.rotation,
            },
          });
        }),
        (t.prototype.addLabelsOfSeries = function (t) {
          var e = this;
          this._chartViewList.push(t);
          var n = t.__model,
            i = n.get('labelLayout');
          (T(i) || w(i).length) &&
            t.group.traverse(function (t) {
              if (t.ignore) return !0;
              var r = t.getTextContent(),
                o = bS(t);
              r && !r.disableLabelLayout && e._addLabel(o.dataIndex, o.dataType, n, r, i);
            });
        }),
        (t.prototype.updateLayoutConfig = function (t) {
          function e(t, e) {
            return function () {
              kf(t, e);
            };
          }
          for (var n = t.getWidth(), i = t.getHeight(), r = 0; r < this._labelList.length; r++) {
            var o = this._labelList[r],
              a = o.label,
              s = a.__hostTarget,
              l = o.defaultAttr,
              u = void 0;
            (u = T(o.layoutOption) ? o.layoutOption(Wf(o, s)) : o.layoutOption),
              (u = u || {}),
              (o.computedLayoutOption = u);
            var h = Math.PI / 180;
            s &&
              s.setTextConfig({
                local: !1,
                position: null != u.x || null != u.y ? null : l.attachedPos,
                rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
                offset: [u.dx || 0, u.dy || 0],
              });
            var c = !1;
            if (
              (null != u.x
                ? ((a.x = Vi(u.x, n)), a.setStyle('x', 0), (c = !0))
                : ((a.x = l.x), a.setStyle('x', l.style.x)),
              null != u.y
                ? ((a.y = Vi(u.y, i)), a.setStyle('y', 0), (c = !0))
                : ((a.y = l.y), a.setStyle('y', l.style.y)),
              u.labelLinePoints)
            ) {
              var p = s.getTextGuideLine();
              p && (p.setShape({ points: u.labelLinePoints }), (c = !1));
            }
            var d = XA(a);
            (d.needsUpdateLabelLine = c),
              (a.rotation = null != u.rotate ? u.rotate * h : l.rotation),
              (a.scaleX = l.scaleX),
              (a.scaleY = l.scaleY);
            for (var f = 0; f < GA.length; f++) {
              var g = GA[f];
              a.setStyle(g, null != u[g] ? u[g] : l.style[g]);
            }
            if (u.draggable) {
              if (((a.draggable = !0), (a.cursor = 'move'), s)) {
                var v = o.seriesModel;
                if (null != o.dataIndex) {
                  var y = o.seriesModel.getData(o.dataType);
                  v = y.getItemModel(o.dataIndex);
                }
                a.on('drag', e(s, v.getModel('labelLine')));
              }
            } else a.off('drag'), (a.cursor = l.cursor);
          }
        }),
        (t.prototype.layout = function (t) {
          var e = t.getWidth(),
            n = t.getHeight(),
            i = zf(this._labelList),
            r = _(i, function (t) {
              return 'shiftX' === t.layoutOption.moveOverlap;
            }),
            o = _(i, function (t) {
              return 'shiftY' === t.layoutOption.moveOverlap;
            });
          Nf(r, 0, e), Ff(o, 0, n);
          var a = _(i, function (t) {
            return t.layoutOption.hideOverlap;
          });
          Vf(a);
        }),
        (t.prototype.processLabelsOverall = function () {
          var t = this;
          v(this._chartViewList, function (e) {
            var n = e.__model,
              i = e.ignoreLabelLineUpdate,
              r = n.isAnimationEnabled();
            e.group.traverse(function (e) {
              if (e.ignore && !e.forceLabelAnimation) return !0;
              var o = !i,
                a = e.getTextContent();
              !o && a && (o = XA(a).needsUpdateLabelLine), o && t._updateLabelLine(e, n), r && t._animateLabels(e, n);
            });
          });
        }),
        (t.prototype._updateLabelLine = function (t, e) {
          var n = t.getTextContent(),
            i = bS(t),
            r = i.dataIndex;
          if (n && null != r) {
            var o = e.getData(i.dataType),
              a = o.getItemModel(r),
              s = {},
              l = o.getItemVisual(r, 'style'),
              u = o.getVisual('drawType');
            s.stroke = l[u];
            var h = a.getModel('labelLine');
            Rf(t, Bf(a), s), kf(t, h);
          }
        }),
        (t.prototype._animateLabels = function (t, e) {
          var n = t.getTextContent(),
            i = t.getTextGuideLine();
          if (n && (t.forceLabelAnimation || (!n.ignore && !n.invisible && !t.disableLabelAnimation && !as(t)))) {
            var r = XA(n),
              o = r.oldLayout,
              a = bS(t),
              s = a.dataIndex,
              l = { x: n.x, y: n.y, rotation: n.rotation },
              u = e.getData(a.dataType);
            if (o) {
              n.attr(o);
              var h = t.prevStates;
              h &&
                (p(h, 'select') >= 0 && n.attr(r.oldLayoutSelect),
                p(h, 'emphasis') >= 0 && n.attr(r.oldLayoutEmphasis)),
                rs(n, l, e, s);
            } else if ((n.attr(l), !tT(n).valueAnimation)) {
              var c = N(n.style.opacity, 1);
              (n.style.opacity = 0), os(n, { style: { opacity: c } }, e, s);
            }
            if (((r.oldLayout = l), n.states.select)) {
              var d = (r.oldLayoutSelect = {});
              Gf(d, l, ZA), Gf(d, n.states.select, ZA);
            }
            if (n.states.emphasis) {
              var f = (r.oldLayoutEmphasis = {});
              Gf(f, l, ZA), Gf(f, n.states.emphasis, ZA);
            }
            qs(n, s, u, e, e);
          }
          if (i && !i.ignore && !i.invisible) {
            var r = YA(i),
              o = r.oldLayout,
              g = { points: i.shape.points };
            o
              ? (i.attr({ shape: o }), rs(i, { shape: g }, e))
              : (i.setShape(g), (i.style.strokePercent = 0), os(i, { style: { strokePercent: 1 } }, e)),
              (r.oldLayout = g);
          }
        }),
        t
      );
    })(),
    jA = Dr();
  Yd(Uf);
  var KA = (function (t) {
      function n(e, n, i) {
        var r = t.call(this) || this;
        (r.motionBlur = !1),
          (r.lastFrameAlpha = 0.7),
          (r.dpr = 1),
          (r.virtual = !1),
          (r.config = {}),
          (r.incremental = !1),
          (r.zlevel = 0),
          (r.maxRepaintRectCount = 5),
          (r.__dirty = !0),
          (r.__firstTimePaint = !0),
          (r.__used = !1),
          (r.__drawIndex = 0),
          (r.__startIndex = 0),
          (r.__endIndex = 0),
          (r.__prevStartIndex = null),
          (r.__prevEndIndex = null);
        var o;
        (i = i || uw),
          'string' == typeof e ? (o = Xf(e, n, i)) : k(e) && ((o = e), (e = o.id)),
          (r.id = e),
          (r.dom = o);
        var a = o.style;
        return (
          a &&
            (j(o),
            (o.onselectstart = function () {
              return !1;
            }),
            (a.padding = '0'),
            (a.margin = '0'),
            (a.borderWidth = '0')),
          (r.painter = n),
          (r.dpr = i),
          r
        );
      }
      return (
        e(n, t),
        (n.prototype.getElementCount = function () {
          return this.__endIndex - this.__startIndex;
        }),
        (n.prototype.afterBrush = function () {
          (this.__prevStartIndex = this.__startIndex), (this.__prevEndIndex = this.__endIndex);
        }),
        (n.prototype.initContext = function () {
          (this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr);
        }),
        (n.prototype.setUnpainted = function () {
          this.__firstTimePaint = !0;
        }),
        (n.prototype.createBackBuffer = function () {
          var t = this.dpr;
          (this.domBack = Xf('back-' + this.id, this.painter, t)),
            (this.ctxBack = this.domBack.getContext('2d')),
            1 !== t && this.ctxBack.scale(t, t);
        }),
        (n.prototype.createRepaintRects = function (t, e, n, i) {
          function r(t) {
            if (t.isFinite() && !t.isZero())
              if (0 === o.length) {
                var e = new Lw(0, 0, 0, 0);
                e.copy(t), o.push(e);
              } else {
                for (var n = !1, i = 1 / 0, r = 0, u = 0; u < o.length; ++u) {
                  var h = o[u];
                  if (h.intersect(t)) {
                    var c = new Lw(0, 0, 0, 0);
                    c.copy(h), c.union(t), (o[u] = c), (n = !0);
                    break;
                  }
                  if (s) {
                    l.copy(t), l.union(h);
                    var p = t.width * t.height,
                      d = h.width * h.height,
                      f = l.width * l.height,
                      g = f - p - d;
                    i > g && ((i = g), (r = u));
                  }
                }
                if ((s && (o[r].union(t), (n = !0)), !n)) {
                  var e = new Lw(0, 0, 0, 0);
                  e.copy(t), o.push(e);
                }
                s || (s = o.length >= a);
              }
          }
          if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
          for (
            var o = [], a = this.maxRepaintRectCount, s = !1, l = new Lw(0, 0, 0, 0), u = this.__startIndex;
            u < this.__endIndex;
            ++u
          ) {
            var h = t[u];
            if (h) {
              var c = h.shouldBePainted(n, i, !0, !0),
                p = h.__isRendered && (h.__dirty & px || !c) ? h.getPrevPaintRect() : null;
              p && r(p);
              var d = c && (h.__dirty & px || !h.__isRendered) ? h.getPaintRect() : null;
              d && r(d);
            }
          }
          for (var u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
            var h = e[u],
              c = h.shouldBePainted(n, i, !0, !0);
            if (h && (!c || !h.__zr) && h.__isRendered) {
              var p = h.getPrevPaintRect();
              p && r(p);
            }
          }
          var f;
          do {
            f = !1;
            for (var u = 0; u < o.length; )
              if (o[u].isZero()) o.splice(u, 1);
              else {
                for (var g = u + 1; g < o.length; )
                  o[u].intersect(o[g]) ? ((f = !0), o[u].union(o[g]), o.splice(g, 1)) : g++;
                u++;
              }
          } while (f);
          return (this._paintRects = o), o;
        }),
        (n.prototype.debugGetPaintRects = function () {
          return (this._paintRects || []).slice();
        }),
        (n.prototype.resize = function (t, e) {
          var n = this.dpr,
            i = this.dom,
            r = i.style,
            o = this.domBack;
          r && ((r.width = t + 'px'), (r.height = e + 'px')),
            (i.width = t * n),
            (i.height = e * n),
            o && ((o.width = t * n), (o.height = e * n), 1 !== n && this.ctxBack.scale(n, n));
        }),
        (n.prototype.clear = function (t, e, n) {
          function i(t, n, i, r) {
            if ((o.clearRect(t, n, i, r), e && 'transparent' !== e)) {
              var a = void 0;
              O(e)
                ? ((a = e.__canvasGradient || vc(o, e, { x: 0, y: 0, width: i, height: r })), (e.__canvasGradient = a))
                : R(e) &&
                  (a = Ic(o, e, {
                    dirty: function () {
                      c.setUnpainted(), c.__painter.refresh();
                    },
                  })),
                o.save(),
                (o.fillStyle = a || e),
                o.fillRect(t, n, i, r),
                o.restore();
            }
            l && (o.save(), (o.globalAlpha = u), o.drawImage(p, t, n, i, r), o.restore());
          }
          var r = this.dom,
            o = this.ctx,
            a = r.width,
            s = r.height;
          e = e || this.clearColor;
          var l = this.motionBlur && !t,
            u = this.lastFrameAlpha,
            h = this.dpr,
            c = this;
          l &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = 'copy'),
            this.ctxBack.drawImage(r, 0, 0, a / h, s / h));
          var p = this.domBack;
          !n || l
            ? i(0, 0, a, s)
            : n.length &&
              v(n, function (t) {
                i(t.x * h, t.y * h, t.width * h, t.height * h);
              });
        }),
        n
      );
    })(q_),
    $A = 1e5,
    QA = 314159,
    JA = 0.01,
    tP = 0.001,
    eP = (function () {
      function t(t, e, n) {
        (this.type = 'canvas'),
          (this._zlevelList = []),
          (this._prevDisplayList = []),
          (this._layers = {}),
          (this._layerConfig = {}),
          (this._needsManuallyCompositing = !1),
          (this.type = 'canvas');
        var i = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase();
        (this._opts = n = h({}, n || {})),
          (this.dpr = n.devicePixelRatio || uw),
          (this._singleCanvas = i),
          (this.root = t);
        var r = t.style;
        r && (j(t), (t.innerHTML = '')), (this.storage = e);
        var o = this._zlevelList;
        this._prevDisplayList = [];
        var a = this._layers;
        if (i) {
          var s = t,
            l = s.width,
            u = s.height;
          null != n.width && (l = n.width),
            null != n.height && (u = n.height),
            (this.dpr = n.devicePixelRatio || 1),
            (s.width = l * this.dpr),
            (s.height = u * this.dpr),
            (this._width = l),
            (this._height = u);
          var c = new KA(s, this, this.dpr);
          (c.__builtin__ = !0), c.initContext(), (a[QA] = c), (c.zlevel = QA), o.push(QA), (this._domRoot = t);
        } else {
          (this._width = _c(t, 0, n)), (this._height = _c(t, 1, n));
          var p = (this._domRoot = Zf(this._width, this._height));
          t.appendChild(p);
        }
      }
      return (
        (t.prototype.getType = function () {
          return 'canvas';
        }),
        (t.prototype.isSingleCanvas = function () {
          return this._singleCanvas;
        }),
        (t.prototype.getViewportRoot = function () {
          return this._domRoot;
        }),
        (t.prototype.getViewportRootOffset = function () {
          var t = this.getViewportRoot();
          return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;
        }),
        (t.prototype.refresh = function (t) {
          var e = this.storage.getDisplayList(!0),
            n = this._prevDisplayList,
            i = this._zlevelList;
          (this._redrawId = Math.random()), this._paintList(e, n, t, this._redrawId);
          for (var r = 0; r < i.length; r++) {
            var o = i[r],
              a = this._layers[o];
            if (!a.__builtin__ && a.refresh) {
              var s = 0 === r ? this._backgroundColor : null;
              a.refresh(s);
            }
          }
          return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
        }),
        (t.prototype.refreshHover = function () {
          this._paintHoverList(this.storage.getDisplayList(!1));
        }),
        (t.prototype._paintHoverList = function (t) {
          var e = t.length,
            n = this._hoverlayer;
          if ((n && n.clear(), e)) {
            for (var i, r = { inHover: !0, viewWidth: this._width, viewHeight: this._height }, o = 0; e > o; o++) {
              var a = t[o];
              a.__inHover &&
                (n || (n = this._hoverlayer = this.getLayer($A)),
                i || ((i = n.ctx), i.save()),
                Hc(i, a, r, o === e - 1));
            }
            i && i.restore();
          }
        }),
        (t.prototype.getHoverLayer = function () {
          return this.getLayer($A);
        }),
        (t.prototype.paintOne = function (t, e) {
          Vc(t, e);
        }),
        (t.prototype._paintList = function (t, e, n, i) {
          if (this._redrawId === i) {
            (n = n || !1), this._updateLayerStatus(t);
            var r = this._doPaintList(t, e, n),
              o = r.finished,
              a = r.needsRefreshHover;
            if ((this._needsManuallyCompositing && this._compositeManually(), a && this._paintHoverList(t), o))
              this.eachLayer(function (t) {
                t.afterBrush && t.afterBrush();
              });
            else {
              var s = this;
              yx(function () {
                s._paintList(t, e, n, i);
              });
            }
          }
        }),
        (t.prototype._compositeManually = function () {
          var t = this.getLayer(QA).ctx,
            e = this._domRoot.width,
            n = this._domRoot.height;
          t.clearRect(0, 0, e, n),
            this.eachBuiltinLayer(function (i) {
              i.virtual && t.drawImage(i.dom, 0, 0, e, n);
            });
        }),
        (t.prototype._doPaintList = function (t, e, n) {
          for (var i = this, r = [], o = this._opts.useDirtyRect, a = 0; a < this._zlevelList.length; a++) {
            var s = this._zlevelList[a],
              l = this._layers[s];
            l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l);
          }
          for (
            var u = !0,
              h = !1,
              c = function (a) {
                var s = r[a],
                  l = s.ctx,
                  c = o && s.createRepaintRects(t, e, p._width, p._height),
                  d = n ? s.__startIndex : s.__drawIndex,
                  f = !n && s.incremental && Date.now,
                  g = f && Date.now(),
                  v = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, v, c);
                else if (d === s.__startIndex) {
                  var y = t[d];
                  (y.incremental && y.notClear && !n) || s.clear(!1, v, c);
                }
                -1 === d && (console.error('For some unknown reason. drawIndex is -1'), (d = s.__startIndex));
                var m,
                  _ = function (e) {
                    var n = { inHover: !1, allClipped: !1, prevEl: null, viewWidth: i._width, viewHeight: i._height };
                    for (m = d; m < s.__endIndex; m++) {
                      var r = t[m];
                      if ((r.__inHover && (h = !0), i._doPaintEl(r, s, o, e, n, m === s.__endIndex - 1), f)) {
                        var a = Date.now() - g;
                        if (a > 15) break;
                      }
                    }
                    n.prevElClipPaths && l.restore();
                  };
                if (c)
                  if (0 === c.length) m = s.__endIndex;
                  else
                    for (var x = p.dpr, w = 0; w < c.length; ++w) {
                      var b = c[w];
                      l.save(),
                        l.beginPath(),
                        l.rect(b.x * x, b.y * x, b.width * x, b.height * x),
                        l.clip(),
                        _(b),
                        l.restore();
                    }
                else l.save(), _(), l.restore();
                (s.__drawIndex = m), s.__drawIndex < s.__endIndex && (u = !1);
              },
              p = this,
              d = 0;
            d < r.length;
            d++
          )
            c(d);
          return (
            f_.wxa &&
              v(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
              }),
            { finished: u, needsRefreshHover: h }
          );
        }),
        (t.prototype._doPaintEl = function (t, e, n, i, r, o) {
          var a = e.ctx;
          if (n) {
            var s = t.getPaintRect();
            (!i || (s && s.intersect(i))) && (Hc(a, t, r, o), t.setPrevPaintRect(s));
          } else Hc(a, t, r, o);
        }),
        (t.prototype.getLayer = function (t, e) {
          this._singleCanvas && !this._needsManuallyCompositing && (t = QA);
          var n = this._layers[t];
          return (
            n ||
              ((n = new KA('zr_' + t, this, this.dpr)),
              (n.zlevel = t),
              (n.__builtin__ = !0),
              this._layerConfig[t]
                ? l(n, this._layerConfig[t], !0)
                : this._layerConfig[t - JA] && l(n, this._layerConfig[t - JA], !0),
              e && (n.virtual = e),
              this.insertLayer(t, n),
              n.initContext()),
            n
          );
        }),
        (t.prototype.insertLayer = function (t, e) {
          var n = this._layers,
            i = this._zlevelList,
            r = i.length,
            o = this._domRoot,
            a = null,
            s = -1;
          if (!n[t] && Yf(e)) {
            if (r > 0 && t > i[0]) {
              for (s = 0; r - 1 > s && !(i[s] < t && i[s + 1] > t); s++);
              a = n[i[s]];
            }
            if ((i.splice(s + 1, 0, t), (n[t] = e), !e.virtual))
              if (a) {
                var l = a.dom;
                l.nextSibling ? o.insertBefore(e.dom, l.nextSibling) : o.appendChild(e.dom);
              } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
            e.__painter = this;
          }
        }),
        (t.prototype.eachLayer = function (t, e) {
          for (var n = this._zlevelList, i = 0; i < n.length; i++) {
            var r = n[i];
            t.call(e, this._layers[r], r);
          }
        }),
        (t.prototype.eachBuiltinLayer = function (t, e) {
          for (var n = this._zlevelList, i = 0; i < n.length; i++) {
            var r = n[i],
              o = this._layers[r];
            o.__builtin__ && t.call(e, o, r);
          }
        }),
        (t.prototype.eachOtherLayer = function (t, e) {
          for (var n = this._zlevelList, i = 0; i < n.length; i++) {
            var r = n[i],
              o = this._layers[r];
            o.__builtin__ || t.call(e, o, r);
          }
        }),
        (t.prototype.getLayers = function () {
          return this._layers;
        }),
        (t.prototype._updateLayerStatus = function (t) {
          function e(t) {
            s && (s.__endIndex !== t && (s.__dirty = !0), (s.__endIndex = t));
          }
          if (
            (this.eachBuiltinLayer(function (t) {
              t.__dirty = t.__used = !1;
            }),
            this._singleCanvas)
          )
            for (var n = 1; n < t.length; n++) {
              var i = t[n];
              if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                this._needsManuallyCompositing = !0;
                break;
              }
            }
          var r,
            o,
            s = null,
            l = 0;
          for (o = 0; o < t.length; o++) {
            var i = t[o],
              u = i.zlevel,
              h = void 0;
            r !== u && ((r = u), (l = 0)),
              i.incremental
                ? ((h = this.getLayer(u + tP, this._needsManuallyCompositing)), (h.incremental = !0), (l = 1))
                : (h = this.getLayer(u + (l > 0 ? JA : 0), this._needsManuallyCompositing)),
              h.__builtin__ || a('ZLevel ' + u + ' has been used by unkown layer ' + h.id),
              h !== s &&
                ((h.__used = !0),
                h.__startIndex !== o && (h.__dirty = !0),
                (h.__startIndex = o),
                (h.__drawIndex = h.incremental ? -1 : o),
                e(o),
                (s = h)),
              i.__dirty & px &&
                !i.__inHover &&
                ((h.__dirty = !0), h.incremental && h.__drawIndex < 0 && (h.__drawIndex = o));
          }
          e(o),
            this.eachBuiltinLayer(function (t) {
              !t.__used &&
                t.getElementCount() > 0 &&
                ((t.__dirty = !0), (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        }),
        (t.prototype.clear = function () {
          return this.eachBuiltinLayer(this._clearLayer), this;
        }),
        (t.prototype._clearLayer = function (t) {
          t.clear();
        }),
        (t.prototype.setBackgroundColor = function (t) {
          (this._backgroundColor = t),
            v(this._layers, function (t) {
              t.setUnpainted();
            });
        }),
        (t.prototype.configLayer = function (t, e) {
          if (e) {
            var n = this._layerConfig;
            n[t] ? l(n[t], e, !0) : (n[t] = e);
            for (var i = 0; i < this._zlevelList.length; i++) {
              var r = this._zlevelList[i];
              if (r === t || r === t + JA) {
                var o = this._layers[r];
                l(o, n[t], !0);
              }
            }
          }
        }),
        (t.prototype.delLayer = function (t) {
          var e = this._layers,
            n = this._zlevelList,
            i = e[t];
          i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(p(n, t), 1));
        }),
        (t.prototype.resize = function (t, e) {
          if (this._domRoot.style) {
            var n = this._domRoot;
            n.style.display = 'none';
            var i = this._opts,
              r = this.root;
            if (
              (null != t && (i.width = t),
              null != e && (i.height = e),
              (t = _c(r, 0, i)),
              (e = _c(r, 1, i)),
              (n.style.display = ''),
              this._width !== t || e !== this._height)
            ) {
              (n.style.width = t + 'px'), (n.style.height = e + 'px');
              for (var o in this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
              this.refresh(!0);
            }
            (this._width = t), (this._height = e);
          } else {
            if (null == t || null == e) return;
            (this._width = t), (this._height = e), this.getLayer(QA).resize(t, e);
          }
          return this;
        }),
        (t.prototype.clearLayer = function (t) {
          var e = this._layers[t];
          e && e.clear();
        }),
        (t.prototype.dispose = function () {
          (this.root.innerHTML = ''), (this.root = this.storage = this._domRoot = this._layers = null);
        }),
        (t.prototype.getRenderedCanvas = function (t) {
          if (((t = t || {}), this._singleCanvas && !this._compositeManually)) return this._layers[QA].dom;
          var e = new KA('image', this, t.pixelRatio || this.dpr);
          e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
          var n = e.ctx;
          if (t.pixelRatio <= this.dpr) {
            this.refresh();
            var i = e.dom.width,
              r = e.dom.height;
            this.eachLayer(function (t) {
              t.__builtin__
                ? n.drawImage(t.dom, 0, 0, i, r)
                : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore());
            });
          } else
            for (
              var o = { inHover: !1, viewWidth: this._width, viewHeight: this._height },
                a = this.storage.getDisplayList(!0),
                s = 0,
                l = a.length;
              l > s;
              s++
            ) {
              var u = a[s];
              Hc(n, u, o, s === l - 1);
            }
          return e.dom;
        }),
        (t.prototype.getWidth = function () {
          return this._width;
        }),
        (t.prototype.getHeight = function () {
          return this._height;
        }),
        t
      );
    })(),
    nP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'dataset'), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (e, n, i) {
          t.prototype.init.call(this, e, n, i), (this._sourceManager = new $C(this)), ah(this);
        }),
        (n.prototype.mergeOption = function (e, n) {
          t.prototype.mergeOption.call(this, e, n), ah(this);
        }),
        (n.prototype.optionUpdated = function () {
          this._sourceManager.dirty();
        }),
        (n.prototype.getSourceManager = function () {
          return this._sourceManager;
        }),
        (n.type = 'dataset'),
        (n.defaultOption = { seriesLayoutBy: tC }),
        n
      );
    })(HT),
    iP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'dataset'), e;
      }
      return e(n, t), (n.type = 'dataset'), n;
    })(oI);
  Yd([qf, jf]), Yd(Uf);
  var rP = {
      average: function (t) {
        for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || ((e += t[i]), n++);
        return 0 === n ? 0 / 0 : e / n;
      },
      sum: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
        return e;
      },
      max: function (t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0;
      },
      min: function (t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0;
      },
      nearest: function (t) {
        return t[0];
      },
    },
    oP = function (t) {
      return Math.round(t.length / 2);
    },
    aP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return Yp(null, this, { useEncodeDefaulter: !0 });
        }),
        (n.prototype.getMarkerPosition = function (t) {
          var e = this.coordinateSystem;
          if (e && e.clampData) {
            var n = e.dataToPoint(e.clampData(t)),
              i = this.getData(),
              r = i.getLayout('offset'),
              o = i.getLayout('size'),
              a = e.getBaseAxis().isHorizontal() ? 0 : 1;
            return (n[a] += r + o / 2), n;
          }
          return [0 / 0, 0 / 0];
        }),
        (n.type = 'series.__base_bar__'),
        (n.defaultOption = {
          z: 2,
          coordinateSystem: 'cartesian2d',
          legendHoverLink: !0,
          barMinHeight: 0,
          barMinAngle: 0,
          large: !1,
          largeThreshold: 400,
          progressive: 3e3,
          progressiveChunkMode: 'mod',
        }),
        n
      );
    })(rI);
  rI.registerClass(aP);
  var sP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return Yp(null, this, {
            useEncodeDefaulter: !0,
            createInvertedIndices: !!this.get('realtimeSort', !0) || null,
          });
        }),
        (n.prototype.getProgressive = function () {
          return this.get('large') ? this.get('progressive') : !1;
        }),
        (n.prototype.getProgressiveThreshold = function () {
          var t = this.get('progressiveThreshold'),
            e = this.get('largeThreshold');
          return e > t && (t = e), t;
        }),
        (n.prototype.brushSelector = function (t, e, n) {
          return n.rect(e.getItemLayout(t));
        }),
        (n.type = 'series.bar'),
        (n.dependencies = ['grid', 'polar']),
        (n.defaultOption = Qs(aP.defaultOption, {
          clip: !0,
          roundCap: !1,
          showBackground: !1,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
            borderColor: null,
            borderWidth: 0,
            borderType: 'solid',
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1,
          },
          select: { itemStyle: { borderColor: '#212121' } },
          realtimeSort: !1,
        })),
        n
      );
    })(aP),
    lP = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r0 = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0);
      }
      return t;
    })(),
    uP = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = 'sausage'), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new lP();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            i = e.cy,
            r = Math.max(e.r0 || 0, 0),
            o = Math.max(e.r, 0),
            a = 0.5 * (o - r),
            s = r + a,
            l = e.startAngle,
            u = e.endAngle,
            h = e.clockwise,
            c = 2 * Math.PI,
            p = h ? c > u - l : c > l - u;
          p || (l = u - (h ? c : -c));
          var d = Math.cos(l),
            f = Math.sin(l),
            g = Math.cos(u),
            v = Math.sin(u);
          p
            ? (t.moveTo(d * r + n, f * r + i), t.arc(d * s + n, f * s + i, a, -Math.PI + l, l, !h))
            : t.moveTo(d * o + n, f * o + i),
            t.arc(n, i, o, l, u, !h),
            t.arc(g * s + n, v * s + i, a, u - 2 * Math.PI, u - Math.PI, !h),
            0 !== r && t.arc(n, i, r, u, l, h);
        }),
        n
      );
    })(oS),
    hP = Math.max,
    cP = Math.min,
    pP = (function (t) {
      function n() {
        var e = t.call(this) || this;
        return (e.type = n.type), (e._isFirstFrame = !0), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n, i) {
          (this._model = t), this._removeOnRenderedListener(n), this._updateDrawMode(t);
          var r = t.get('coordinateSystem');
          ('cartesian2d' === r || 'polar' === r) &&
            ((this._progressiveEls = null),
            this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n, i));
        }),
        (n.prototype.incrementalPrepareRender = function (t) {
          this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
        }),
        (n.prototype.incrementalRender = function (t, e) {
          (this._progressiveEls = []), this._incrementalRenderLarge(t, e);
        }),
        (n.prototype.eachRendered = function (t) {
          zs(this._progressiveEls || this.group, t);
        }),
        (n.prototype._updateDrawMode = function (t) {
          var e = t.pipelineContext.large;
          (null == this._isLargeDraw || e !== this._isLargeDraw) && ((this._isLargeDraw = e), this._clear());
        }),
        (n.prototype._renderNormal = function (t, e, n, i) {
          function r(t) {
            var e = mP[u.type](s, t),
              n = mg(u, o, e);
            return n.useStyle(y.getItemStyle()), 'cartesian2d' === u.type && n.setShape('r', m), (_[t] = n), n;
          }
          var o,
            a = this.group,
            s = t.getData(),
            l = this._data,
            u = t.coordinateSystem,
            h = u.getBaseAxis();
          'cartesian2d' === u.type ? (o = h.isHorizontal()) : 'polar' === u.type && (o = 'angle' === h.dim);
          var c = t.isAnimationEnabled() ? t : null,
            p = lg(t, u);
          p && this._enableRealtimeSort(p, s, n);
          var d = t.get('clip', !0) || p,
            f = sg(u, s);
          a.removeClipPath();
          var g = t.get('roundCap', !0),
            v = t.get('showBackground', !0),
            y = t.getModel('backgroundStyle'),
            m = y.get('borderRadius') || 0,
            _ = [],
            x = this._backgroundEls,
            w = i && i.isInitSort,
            b = i && 'changeAxisOrder' === i.type;
          s.diff(l)
            .add(function (e) {
              var n = s.getItemModel(e),
                i = mP[u.type](s, e, n);
              if ((v && r(e), s.hasValue(e) && yP[u.type](i))) {
                var l = !1;
                d && (l = dP[u.type](f, i));
                var y = fP[u.type](t, s, e, i, o, c, h.model, !1, g);
                p && (y.forceLabelAnimation = !0),
                  dg(y, s, e, n, i, t, o, 'polar' === u.type),
                  w ? y.attr({ shape: i }) : p ? ug(p, c, y, i, e, o, !1, !1) : os(y, { shape: i }, t, e),
                  s.setItemGraphicEl(e, y),
                  a.add(y),
                  (y.ignore = l);
              }
            })
            .update(function (e, n) {
              var i = s.getItemModel(e),
                S = mP[u.type](s, e, i);
              if (v) {
                var M = void 0;
                0 === x.length
                  ? (M = r(n))
                  : ((M = x[n]),
                    M.useStyle(y.getItemStyle()),
                    'cartesian2d' === u.type && M.setShape('r', m),
                    (_[e] = M));
                var T = mP[u.type](s, e),
                  C = yg(o, T, u);
                rs(M, { shape: C }, c, e);
              }
              var I = l.getItemGraphicEl(n);
              if (!s.hasValue(e) || !yP[u.type](S)) return void a.remove(I);
              var D = !1;
              if (
                (d && ((D = dP[u.type](f, S)), D && a.remove(I)),
                I ? hs(I) : (I = fP[u.type](t, s, e, S, o, c, h.model, !!I, g)),
                p && (I.forceLabelAnimation = !0),
                b)
              ) {
                var k = I.getTextContent();
                if (k) {
                  var A = tT(k);
                  null != A.prevValue && (A.prevValue = A.value);
                }
              } else dg(I, s, e, i, S, t, o, 'polar' === u.type);
              w ? I.attr({ shape: S }) : p ? ug(p, c, I, S, e, o, !0, b) : rs(I, { shape: S }, t, e, null),
                s.setItemGraphicEl(e, I),
                (I.ignore = D),
                a.add(I);
            })
            .remove(function (e) {
              var n = l.getItemGraphicEl(e);
              n && us(n, t, e);
            })
            .execute();
          var S = this._backgroundGroup || (this._backgroundGroup = new Vw());
          S.removeAll();
          for (var M = 0; M < _.length; ++M) S.add(_[M]);
          a.add(S), (this._backgroundEls = _), (this._data = s);
        }),
        (n.prototype._renderLarge = function (t) {
          this._clear(), gg(t, this.group), this._updateLargeClip(t);
        }),
        (n.prototype._incrementalRenderLarge = function (t, e) {
          this._removeBackground(), gg(e, this.group, this._progressiveEls, !0);
        }),
        (n.prototype._updateLargeClip = function (t) {
          var e = t.get('clip', !0) && Jf(t.coordinateSystem, !1, t),
            n = this.group;
          e ? n.setClipPath(e) : n.removeClipPath();
        }),
        (n.prototype._enableRealtimeSort = function (t, e, n) {
          var i = this;
          if (e.count()) {
            var r = t.baseAxis;
            if (this._isFirstFrame) this._dispatchInitSort(e, t, n), (this._isFirstFrame = !1);
            else {
              var o = function (t) {
                var n = e.getItemGraphicEl(t),
                  i = n && n.shape;
                return (i && Math.abs(r.isHorizontal() ? i.height : i.width)) || 0;
              };
              (this._onRendered = function () {
                i._updateSortWithinSameData(e, o, r, n);
              }),
                n.getZr().on('rendered', this._onRendered);
            }
          }
        }),
        (n.prototype._dataSort = function (t, e, n) {
          var i = [];
          return (
            t.each(t.mapDimension(e.dim), function (t, e) {
              var r = n(e);
              (r = null == r ? 0 / 0 : r), i.push({ dataIndex: e, mappedValue: r, ordinalNumber: t });
            }),
            i.sort(function (t, e) {
              return e.mappedValue - t.mappedValue;
            }),
            {
              ordinalNumbers: y(i, function (t) {
                return t.ordinalNumber;
              }),
            }
          );
        }),
        (n.prototype._isOrderChangedWithinSameData = function (t, e, n) {
          for (
            var i = n.scale,
              r = t.mapDimension(n.dim),
              o = Number.MAX_VALUE,
              a = 0,
              s = i.getOrdinalMeta().categories.length;
            s > a;
            ++a
          ) {
            var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a)),
              u = 0 > l ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
            if (u > o) return !0;
            o = u;
          }
          return !1;
        }),
        (n.prototype._isOrderDifferentInView = function (t, e) {
          for (
            var n = e.scale,
              i = n.getExtent(),
              r = Math.max(0, i[0]),
              o = Math.min(i[1], n.getOrdinalMeta().categories.length - 1);
            o >= r;
            ++r
          )
            if (t.ordinalNumbers[r] !== n.getRawOrdinalNumber(r)) return !0;
        }),
        (n.prototype._updateSortWithinSameData = function (t, e, n, i) {
          if (this._isOrderChangedWithinSameData(t, e, n)) {
            var r = this._dataSort(t, n, e);
            this._isOrderDifferentInView(r, n) &&
              (this._removeOnRenderedListener(i),
              i.dispatchAction({
                type: 'changeAxisOrder',
                componentType: n.dim + 'Axis',
                axisId: n.index,
                sortInfo: r,
              }));
          }
        }),
        (n.prototype._dispatchInitSort = function (t, e, n) {
          var i = e.baseAxis,
            r = this._dataSort(t, i, function (n) {
              return t.get(t.mapDimension(e.otherAxis.dim), n);
            });
          n.dispatchAction({
            type: 'changeAxisOrder',
            componentType: i.dim + 'Axis',
            isInitSort: !0,
            axisId: i.index,
            sortInfo: r,
          });
        }),
        (n.prototype.remove = function (t, e) {
          this._clear(this._model), this._removeOnRenderedListener(e);
        }),
        (n.prototype.dispose = function (t, e) {
          this._removeOnRenderedListener(e);
        }),
        (n.prototype._removeOnRenderedListener = function (t) {
          this._onRendered && (t.getZr().off('rendered', this._onRendered), (this._onRendered = null));
        }),
        (n.prototype._clear = function (t) {
          var e = this.group,
            n = this._data;
          t && t.isAnimationEnabled() && n && !this._isLargeDraw
            ? (this._removeBackground(),
              (this._backgroundEls = []),
              n.eachItemGraphicEl(function (e) {
                us(e, t, bS(e).dataIndex);
              }))
            : e.removeAll(),
            (this._data = null),
            (this._isFirstFrame = !0);
        }),
        (n.prototype._removeBackground = function () {
          this.group.remove(this._backgroundGroup), (this._backgroundGroup = null);
        }),
        (n.type = 'bar'),
        n
      );
    })(lI),
    dP = {
      cartesian2d: function (t, e) {
        var n = e.width < 0 ? -1 : 1,
          i = e.height < 0 ? -1 : 1;
        0 > n && ((e.x += e.width), (e.width = -e.width)), 0 > i && ((e.y += e.height), (e.height = -e.height));
        var r = t.x + t.width,
          o = t.y + t.height,
          a = hP(e.x, t.x),
          s = cP(e.x + e.width, r),
          l = hP(e.y, t.y),
          u = cP(e.y + e.height, o),
          h = a > s,
          c = l > u;
        return (
          (e.x = h && a > r ? s : a),
          (e.y = c && l > o ? u : l),
          (e.width = h ? 0 : s - a),
          (e.height = c ? 0 : u - l),
          0 > n && ((e.x += e.width), (e.width = -e.width)),
          0 > i && ((e.y += e.height), (e.height = -e.height)),
          h || c
        );
      },
      polar: function (t, e) {
        var n = e.r0 <= e.r ? 1 : -1;
        if (0 > n) {
          var i = e.r;
          (e.r = e.r0), (e.r0 = i);
        }
        var r = cP(e.r, t.r),
          o = hP(e.r0, t.r0);
        (e.r = r), (e.r0 = o);
        var a = 0 > r - o;
        if (0 > n) {
          var i = e.r;
          (e.r = e.r0), (e.r0 = i);
        }
        return a;
      },
    },
    fP = {
      cartesian2d: function (t, e, n, i, r, o) {
        var a = new fS({ shape: h({}, i), z2: 1 });
        if (((a.__dataIndex = n), (a.name = 'item'), o)) {
          var s = a.shape,
            l = r ? 'height' : 'width';
          s[l] = 0;
        }
        return a;
      },
      polar: function (t, e, n, i, r, o, a, s, l) {
        var u = !r && l ? uP : vM,
          h = new u({ shape: i, z2: 1 });
        h.name = 'item';
        var c = pg(r);
        if (((h.calculateTextPosition = ig(c, { isRoundCap: u === uP })), o)) {
          var p = h.shape,
            d = r ? 'r' : 'endAngle',
            f = {};
          (p[d] = r ? 0 : i.startAngle), (f[d] = i[d]), (s ? rs : os)(h, { shape: f }, o);
        }
        return h;
      },
    },
    gP = ['x', 'y', 'width', 'height'],
    vP = ['cx', 'cy', 'r', 'startAngle', 'endAngle'],
    yP = {
      cartesian2d: function (t) {
        return !hg(t, gP);
      },
      polar: function (t) {
        return !hg(t, vP);
      },
    },
    mP = {
      cartesian2d: function (t, e, n) {
        var i = t.getItemLayout(e),
          r = n ? fg(n, i) : 0,
          o = i.width > 0 ? 1 : -1,
          a = i.height > 0 ? 1 : -1;
        return { x: i.x + (o * r) / 2, y: i.y + (a * r) / 2, width: i.width - o * r, height: i.height - a * r };
      },
      polar: function (t, e) {
        var n = t.getItemLayout(e);
        return {
          cx: n.cx,
          cy: n.cy,
          r0: n.r0,
          r: n.r,
          startAngle: n.startAngle,
          endAngle: n.endAngle,
          clockwise: n.clockwise,
        };
      },
    },
    _P = (function () {
      function t() {}
      return t;
    })(),
    xP = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = 'largeBar'), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new _P();
        }),
        (n.prototype.buildPath = function (t, e) {
          for (
            var n = e.points, i = this.baseDimIdx, r = 1 - this.baseDimIdx, o = [], a = [], s = this.barWidth, l = 0;
            l < n.length;
            l += 3
          )
            (a[i] = s), (a[r] = n[l + 2]), (o[i] = n[l + i]), (o[r] = n[l + r]), t.rect(o[0], o[1], a[0], a[1]);
        }),
        n
      );
    })(oS),
    wP = Hh(
      function (t) {
        var e = this,
          n = vg(e, t.offsetX, t.offsetY);
        bS(e).dataIndex = n >= 0 ? n : null;
      },
      30,
      !1,
    );
  Yd(_g);
  var bP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.hasSymbolVisual = !0), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return Yp(null, this, { useEncodeDefaulter: !0 });
        }),
        (n.prototype.getLegendIcon = function (t) {
          var e = new Vw(),
            n = hc('line', 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
          e.add(n), n.setStyle(t.lineStyle);
          var i = this.getData().getVisual('symbol'),
            r = this.getData().getVisual('symbolRotate'),
            o = 'none' === i ? 'circle' : i,
            a = 0.8 * t.itemHeight,
            s = hc(o, (t.itemWidth - a) / 2, (t.itemHeight - a) / 2, a, a, t.itemStyle.fill);
          e.add(s), s.setStyle(t.itemStyle);
          var l = 'inherit' === t.iconRotate ? r : t.iconRotate || 0;
          return (
            (s.rotation = (l * Math.PI) / 180),
            s.setOrigin([t.itemWidth / 2, t.itemHeight / 2]),
            o.indexOf('empty') > -1 &&
              ((s.style.stroke = s.style.fill), (s.style.fill = '#fff'), (s.style.lineWidth = 2)),
            e
          );
        }),
        (n.type = 'series.line'),
        (n.dependencies = ['grid', 'polar']),
        (n.defaultOption = {
          z: 3,
          coordinateSystem: 'cartesian2d',
          legendHoverLink: !0,
          clip: !0,
          label: { position: 'top' },
          endLabel: { show: !1, valueAnimation: !0, distance: 8 },
          lineStyle: { width: 2, type: 'solid' },
          emphasis: { scale: !0 },
          step: !1,
          smooth: !1,
          smoothMonotone: null,
          symbol: 'emptyCircle',
          symbolSize: 4,
          symbolRotate: null,
          showSymbol: !0,
          showAllSymbol: 'auto',
          connectNulls: !1,
          sampling: 'none',
          animationEasing: 'linear',
          progressive: 0,
          hoverLayerThreshold: 1 / 0,
          universalTransition: { divideShape: 'clone' },
          triggerLineEvent: !1,
        }),
        n
      );
    })(rI),
    SP = (function (t) {
      function n(e, n, i, r) {
        var o = t.call(this) || this;
        return o.updateData(e, n, i, r), o;
      }
      return (
        e(n, t),
        (n.prototype._createSymbol = function (t, e, n, i, r) {
          this.removeAll();
          var o = hc(t, -1, -1, 2, 2, null, r);
          o.attr({ z2: 100, culling: !0, scaleX: i[0] / 2, scaleY: i[1] / 2 }),
            (o.drift = xg),
            (this._symbolType = t),
            this.add(o);
        }),
        (n.prototype.stopSymbolAnimation = function (t) {
          this.childAt(0).stopAnimation(null, t);
        }),
        (n.prototype.getSymbolType = function () {
          return this._symbolType;
        }),
        (n.prototype.getSymbolPath = function () {
          return this.childAt(0);
        }),
        (n.prototype.highlight = function () {
          ha(this.childAt(0));
        }),
        (n.prototype.downplay = function () {
          ca(this.childAt(0));
        }),
        (n.prototype.setZ = function (t, e) {
          var n = this.childAt(0);
          (n.zlevel = t), (n.z = e);
        }),
        (n.prototype.setDraggable = function (t, e) {
          var n = this.childAt(0);
          (n.draggable = t), (n.cursor = !e && t ? 'move' : n.cursor);
        }),
        (n.prototype.updateData = function (t, e, i, r) {
          this.silent = !1;
          var o = t.getItemVisual(e, 'symbol') || 'circle',
            a = t.hostModel,
            s = n.getSymbolSize(t, e),
            l = o !== this._symbolType,
            u = r && r.disableAnimation;
          if (l) {
            var h = t.getItemVisual(e, 'symbolKeepAspect');
            this._createSymbol(o, t, e, s, h);
          } else {
            var c = this.childAt(0);
            c.silent = !1;
            var p = { scaleX: s[0] / 2, scaleY: s[1] / 2 };
            u ? c.attr(p) : rs(c, p, a, e), hs(c);
          }
          if ((this._updateCommon(t, e, s, i, r), l)) {
            var c = this.childAt(0);
            if (!u) {
              var p = { scaleX: this._sizeX, scaleY: this._sizeY, style: { opacity: c.style.opacity } };
              (c.scaleX = c.scaleY = 0), (c.style.opacity = 0), os(c, p, a, e);
            }
          }
          u && this.childAt(0).stopAnimation('leave');
        }),
        (n.prototype._updateCommon = function (t, e, n, i, r) {
          function o(e) {
            return I ? t.getName(e) : eg(t, e);
          }
          var a,
            s,
            l,
            u,
            c,
            p,
            d,
            f,
            g,
            v = this.childAt(0),
            y = t.hostModel;
          if (
            (i &&
              ((a = i.emphasisItemStyle),
              (s = i.blurItemStyle),
              (l = i.selectItemStyle),
              (u = i.focus),
              (c = i.blurScope),
              (d = i.labelStatesModels),
              (f = i.hoverScale),
              (g = i.cursorStyle),
              (p = i.emphasisDisabled)),
            !i || t.hasItemOption)
          ) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e),
              _ = m.getModel('emphasis');
            (a = _.getModel('itemStyle').getItemStyle()),
              (l = m.getModel(['select', 'itemStyle']).getItemStyle()),
              (s = m.getModel(['blur', 'itemStyle']).getItemStyle()),
              (u = _.get('focus')),
              (c = _.get('blurScope')),
              (p = _.get('disabled')),
              (d = Vs(m)),
              (f = _.getShallow('scale')),
              (g = m.getShallow('cursor'));
          }
          var x = t.getItemVisual(e, 'symbolRotate');
          v.attr('rotation', ((x || 0) * Math.PI) / 180 || 0);
          var w = pc(t.getItemVisual(e, 'symbolOffset'), n);
          w && ((v.x = w[0]), (v.y = w[1])), g && v.attr('cursor', g);
          var b = t.getItemVisual(e, 'style'),
            S = b.fill;
          if (v instanceof hS) {
            var M = v.style;
            v.useStyle(h({ image: M.image, x: M.x, y: M.y, width: M.width, height: M.height }, b));
          } else
            v.useStyle(v.__isEmptyBrush ? h({}, b) : b),
              (v.style.decal = null),
              v.setColor(S, r && r.symbolInnerColor),
              (v.style.strokeNoScale = !0);
          var T = t.getItemVisual(e, 'liftZ'),
            C = this._z2;
          null != T ? null == C && ((this._z2 = v.z2), (v.z2 += T)) : null != C && ((v.z2 = C), (this._z2 = null));
          var I = r && r.useNameLabel;
          Fs(v, d, { labelFetcher: y, labelDataIndex: e, defaultText: o, inheritColor: S, defaultOpacity: b.opacity }),
            (this._sizeX = n[0] / 2),
            (this._sizeY = n[1] / 2);
          var k = v.ensureState('emphasis');
          if (((k.style = a), (v.ensureState('select').style = l), (v.ensureState('blur').style = s), f)) {
            var A = Math.max(D(f) ? f : 1.1, 3 / this._sizeY);
            (k.scaleX = this._sizeX * A), (k.scaleY = this._sizeY * A);
          }
          this.setSymbolScale(1), ka(this, u, c, p);
        }),
        (n.prototype.setSymbolScale = function (t) {
          this.scaleX = this.scaleY = t;
        }),
        (n.prototype.fadeOut = function (t, e, n) {
          var i = this.childAt(0),
            r = bS(this).dataIndex,
            o = n && n.animation;
          if (((this.silent = i.silent = !0), n && n.fadeLabel)) {
            var a = i.getTextContent();
            a &&
              ss(a, { style: { opacity: 0 } }, e, {
                dataIndex: r,
                removeOpt: o,
                cb: function () {
                  i.removeTextContent();
                },
              });
          } else i.removeTextContent();
          ss(i, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, e, { dataIndex: r, cb: t, removeOpt: o });
        }),
        (n.getSymbolSize = function (t, e) {
          return cc(t.getItemVisual(e, 'symbolSize'));
        }),
        n
      );
    })(Vw),
    MP = (function () {
      function t(t) {
        (this.group = new Vw()), (this._SymbolCtor = t || SP);
      }
      return (
        (t.prototype.updateData = function (t, e) {
          (this._progressiveEls = null), (e = bg(e));
          var n = this.group,
            i = t.hostModel,
            r = this._data,
            o = this._SymbolCtor,
            a = e.disableAnimation,
            s = Sg(t),
            l = { disableAnimation: a },
            u =
              e.getSymbolPoint ||
              function (e) {
                return t.getItemLayout(e);
              };
          r || n.removeAll(),
            t
              .diff(r)
              .add(function (i) {
                var r = u(i);
                if (wg(t, r, i, e)) {
                  var a = new o(t, i, s, l);
                  a.setPosition(r), t.setItemGraphicEl(i, a), n.add(a);
                }
              })
              .update(function (h, c) {
                var p = r.getItemGraphicEl(c),
                  d = u(h);
                if (!wg(t, d, h, e)) return void n.remove(p);
                var f = t.getItemVisual(h, 'symbol') || 'circle',
                  g = p && p.getSymbolType && p.getSymbolType();
                if (!p || (g && g !== f)) n.remove(p), (p = new o(t, h, s, l)), p.setPosition(d);
                else {
                  p.updateData(t, h, s, l);
                  var v = { x: d[0], y: d[1] };
                  a ? p.attr(v) : rs(p, v, i);
                }
                n.add(p), t.setItemGraphicEl(h, p);
              })
              .remove(function (t) {
                var e = r.getItemGraphicEl(t);
                e &&
                  e.fadeOut(function () {
                    n.remove(e);
                  }, i);
              })
              .execute(),
            (this._getSymbolPoint = u),
            (this._data = t);
        }),
        (t.prototype.updateLayout = function () {
          var t = this,
            e = this._data;
          e &&
            e.eachItemGraphicEl(function (e, n) {
              var i = t._getSymbolPoint(n);
              e.setPosition(i), e.markRedraw();
            });
        }),
        (t.prototype.incrementalPrepareUpdate = function (t) {
          (this._seriesScope = Sg(t)), (this._data = null), this.group.removeAll();
        }),
        (t.prototype.incrementalUpdate = function (t, e, n) {
          function i(t) {
            t.isGroup || ((t.incremental = !0), (t.ensureState('emphasis').hoverLayer = !0));
          }
          (this._progressiveEls = []), (n = bg(n));
          for (var r = t.start; r < t.end; r++) {
            var o = e.getItemLayout(r);
            if (wg(e, o, r, n)) {
              var a = new this._SymbolCtor(e, r, this._seriesScope);
              a.traverse(i),
                a.setPosition(o),
                this.group.add(a),
                e.setItemGraphicEl(r, a),
                this._progressiveEls.push(a);
            }
          }
        }),
        (t.prototype.eachRendered = function (t) {
          zs(this._progressiveEls || this.group, t);
        }),
        (t.prototype.remove = function (t) {
          var e = this.group,
            n = this._data;
          n && t
            ? n.eachItemGraphicEl(function (t) {
                t.fadeOut(function () {
                  e.remove(t);
                }, n.hostModel);
              })
            : e.removeAll();
        }),
        t
      );
    })(),
    TP = Math.min,
    CP = Math.max,
    IP = (function () {
      function t() {
        (this.smooth = 0), (this.smoothConstraint = !0);
      }
      return t;
    })(),
    DP = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = 'ec-polyline'), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: '#000', fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new IP();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.points,
            i = 0,
            r = n.length / 2;
          if (e.connectNulls) {
            for (; r > 0 && kg(n[2 * r - 2], n[2 * r - 1]); r--);
            for (; r > i && kg(n[2 * i], n[2 * i + 1]); i++);
          }
          for (; r > i; ) i += Ag(t, n, i, r, r, 1, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
        }),
        (n.prototype.getPointOn = function (t, e) {
          this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
          for (var n, i, r = this.path, o = r.data, a = qb.CMD, s = 'x' === e, l = [], u = 0; u < o.length; ) {
            var h = o[u++],
              c = void 0,
              p = void 0,
              d = void 0,
              f = void 0,
              g = void 0,
              v = void 0,
              y = void 0;
            switch (h) {
              case a.M:
                (n = o[u++]), (i = o[u++]);
                break;
              case a.L:
                if (((c = o[u++]), (p = o[u++]), (y = s ? (t - n) / (c - n) : (t - i) / (p - i)), 1 >= y && y >= 0)) {
                  var m = s ? (p - i) * y + i : (c - n) * y + n;
                  return s ? [t, m] : [m, t];
                }
                (n = c), (i = p);
                break;
              case a.C:
                (c = o[u++]), (p = o[u++]), (d = o[u++]), (f = o[u++]), (g = o[u++]), (v = o[u++]);
                var _ = s ? Je(n, c, d, g, t, l) : Je(i, p, f, v, t, l);
                if (_ > 0)
                  for (var x = 0; _ > x; x++) {
                    var w = l[x];
                    if (1 >= w && w >= 0) {
                      var m = s ? $e(i, p, f, v, w) : $e(n, c, d, g, w);
                      return s ? [t, m] : [m, t];
                    }
                  }
                (n = g), (i = v);
            }
          }
        }),
        n
      );
    })(oS),
    kP = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return e(n, t), n;
    })(IP),
    AP = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = 'ec-polygon'), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new kP();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.points,
            i = e.stackedOnPoints,
            r = 0,
            o = n.length / 2,
            a = e.smoothMonotone;
          if (e.connectNulls) {
            for (; o > 0 && kg(n[2 * o - 2], n[2 * o - 1]); o--);
            for (; o > r && kg(n[2 * r], n[2 * r + 1]); r++);
          }
          for (; o > r; ) {
            var s = Ag(t, n, r, o, o, 1, e.smooth, a, e.connectNulls);
            Ag(t, i, r + s - 1, s, o, -1, e.stackedOnSmooth, a, e.connectNulls), (r += s + 1), t.closePath();
          }
        }),
        n
      );
    })(oS),
    PP = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.init = function () {
          var t = new Vw(),
            e = new MP();
          this.group.add(e.group), (this._symbolDraw = e), (this._lineGroup = t);
        }),
        (n.prototype.render = function (t, e, n) {
          var i = this,
            r = t.coordinateSystem,
            o = this.group,
            a = t.getData(),
            s = t.getModel('lineStyle'),
            l = t.getModel('areaStyle'),
            u = a.getLayout('points') || [],
            h = 'polar' === r.type,
            p = this._coordSys,
            d = this._symbolDraw,
            f = this._polyline,
            g = this._polygon,
            v = this._lineGroup,
            y = t.get('animation'),
            m = !l.isEmpty(),
            _ = l.get('origin'),
            x = Mg(r, a, _),
            w = m && Bg(r, a, x),
            b = t.get('showSymbol'),
            S = t.get('connectNulls'),
            M = b && !h && Fg(t, a, r),
            T = this._data;
          T &&
            T.eachItemGraphicEl(function (t, e) {
              t.__temp && (o.remove(t), T.setItemGraphicEl(e, null));
            }),
            b || d.remove(),
            o.add(v);
          var C,
            I = h ? !1 : t.get('step');
          r &&
            r.getArea &&
            t.get('clip', !0) &&
            ((C = r.getArea()),
            null != C.width
              ? ((C.x -= 0.1), (C.y -= 0.1), (C.width += 0.2), (C.height += 0.2))
              : C.r0 && ((C.r0 -= 0.5), (C.r += 0.5))),
            (this._clipShapeForSymbol = C);
          var D = Ng(a, r, n) || a.getVisual('style')[a.getVisual('drawType')];
          if (f && p.type === r.type && I === this._step) {
            m && !g ? (g = this._newPolygon(u, w)) : g && !m && (v.remove(g), (g = this._polygon = null)),
              h || this._initOrUpdateEndLabel(t, r, Rl(D));
            var k = v.getClipPath();
            if (k) {
              var A = Yg(this, r, !1, t);
              os(k, { shape: A.shape }, t);
            } else v.setClipPath(Yg(this, r, !0, t));
            b &&
              d.updateData(a, {
                isIgnore: M,
                clipShape: C,
                disableAnimation: !0,
                getSymbolPoint: function (t) {
                  return [u[2 * t], u[2 * t + 1]];
                },
              }),
              (Pg(this._stackedOnPoints, w) && Pg(this._points, u)) ||
                (y
                  ? this._doUpdateAnimation(a, w, r, n, I, _, S)
                  : (I && ((u = zg(u, r, I, S)), w && (w = zg(w, r, I, S))),
                    f.setShape({ points: u }),
                    g && g.setShape({ points: u, stackedOnPoints: w })));
          } else
            b &&
              d.updateData(a, {
                isIgnore: M,
                clipShape: C,
                disableAnimation: !0,
                getSymbolPoint: function (t) {
                  return [u[2 * t], u[2 * t + 1]];
                },
              }),
              y && this._initSymbolLabelAnimation(a, r, C),
              I && ((u = zg(u, r, I, S)), w && (w = zg(w, r, I, S))),
              (f = this._newPolyline(u)),
              m ? (g = this._newPolygon(u, w)) : g && (v.remove(g), (g = this._polygon = null)),
              h || this._initOrUpdateEndLabel(t, r, Rl(D)),
              v.setClipPath(Yg(this, r, !0, t));
          var P = t.getModel('emphasis'),
            L = P.get('focus'),
            O = P.get('blurScope'),
            R = P.get('disabled');
          if (
            (f.useStyle(c(s.getLineStyle(), { fill: 'none', stroke: D, lineJoin: 'bevel' })),
            Pa(f, t, 'lineStyle'),
            f.style.lineWidth > 0 && 'bolder' === t.get(['emphasis', 'lineStyle', 'width']))
          ) {
            var B = f.getState('emphasis').style;
            B.lineWidth = +f.style.lineWidth + 1;
          }
          (bS(f).seriesIndex = t.seriesIndex), ka(f, L, O, R);
          var z = Rg(t.get('smooth')),
            E = t.get('smoothMonotone');
          if ((f.setShape({ smooth: z, smoothMonotone: E, connectNulls: S }), g)) {
            var N = a.getCalculationInfo('stackedOnSeries'),
              F = 0;
            g.useStyle(
              c(l.getAreaStyle(), { fill: D, opacity: 0.7, lineJoin: 'bevel', decal: a.getVisual('style').decal }),
            ),
              N && (F = Rg(N.get('smooth'))),
              g.setShape({ smooth: z, stackedOnSmooth: F, smoothMonotone: E, connectNulls: S }),
              Pa(g, t, 'areaStyle'),
              (bS(g).seriesIndex = t.seriesIndex),
              ka(g, L, O, R);
          }
          var V = function (t) {
            i._changePolyState(t);
          };
          a.eachItemGraphicEl(function (t) {
            t && (t.onHoverStateChange = V);
          }),
            (this._polyline.onHoverStateChange = V),
            (this._data = a),
            (this._coordSys = r),
            (this._stackedOnPoints = w),
            (this._points = u),
            (this._step = I),
            (this._valueOrigin = _),
            t.get('triggerLineEvent') && (this.packEventData(t, f), g && this.packEventData(t, g));
        }),
        (n.prototype.packEventData = function (t, e) {
          bS(e).eventData = {
            componentType: 'series',
            componentSubType: 'line',
            componentIndex: t.componentIndex,
            seriesIndex: t.seriesIndex,
            seriesName: t.name,
            seriesType: 'line',
          };
        }),
        (n.prototype.highlight = function (t, e, n, i) {
          var r = t.getData(),
            o = Ir(r, i);
          if ((this._changePolyState('emphasis'), !(o instanceof Array) && null != o && o >= 0)) {
            var a = r.getLayout('points'),
              s = r.getItemGraphicEl(o);
            if (!s) {
              var l = a[2 * o],
                u = a[2 * o + 1];
              if (isNaN(l) || isNaN(u)) return;
              if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(l, u)) return;
              var h = t.get('zlevel'),
                c = t.get('z');
              (s = new SP(r, o)), (s.x = l), (s.y = u), s.setZ(h, c);
              var p = s.getSymbolPath().getTextContent();
              p && ((p.zlevel = h), (p.z = c), (p.z2 = this._polyline.z2 + 1)),
                (s.__temp = !0),
                r.setItemGraphicEl(o, s),
                s.stopSymbolAnimation(!0),
                this.group.add(s);
            }
            s.highlight();
          } else lI.prototype.highlight.call(this, t, e, n, i);
        }),
        (n.prototype.downplay = function (t, e, n, i) {
          var r = t.getData(),
            o = Ir(r, i);
          if ((this._changePolyState('normal'), null != o && o >= 0)) {
            var a = r.getItemGraphicEl(o);
            a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay());
          } else lI.prototype.downplay.call(this, t, e, n, i);
        }),
        (n.prototype._changePolyState = function (t) {
          var e = this._polygon;
          ea(this._polyline, t), e && ea(e, t);
        }),
        (n.prototype._newPolyline = function (t) {
          var e = this._polyline;
          return (
            e && this._lineGroup.remove(e),
            (e = new DP({ shape: { points: t }, segmentIgnoreThreshold: 2, z2: 10 })),
            this._lineGroup.add(e),
            (this._polyline = e),
            e
          );
        }),
        (n.prototype._newPolygon = function (t, e) {
          var n = this._polygon;
          return (
            n && this._lineGroup.remove(n),
            (n = new AP({ shape: { points: t, stackedOnPoints: e }, segmentIgnoreThreshold: 2 })),
            this._lineGroup.add(n),
            (this._polygon = n),
            n
          );
        }),
        (n.prototype._initSymbolLabelAnimation = function (t, e, n) {
          var i,
            r,
            o = e.getBaseAxis(),
            a = o.inverse;
          'cartesian2d' === e.type
            ? ((i = o.isHorizontal()), (r = !1))
            : 'polar' === e.type && ((i = 'angle' === o.dim), (r = !0));
          var s = t.hostModel,
            l = s.get('animationDuration');
          T(l) && (l = l(null));
          var u = s.get('animationDelay') || 0,
            h = T(u) ? u(null) : u;
          t.eachItemGraphicEl(function (t, o) {
            var s = t;
            if (s) {
              var c = [t.x, t.y],
                p = void 0,
                d = void 0,
                f = void 0;
              if (n)
                if (r) {
                  var g = n,
                    v = e.pointToCoord(c);
                  i
                    ? ((p = g.startAngle), (d = g.endAngle), (f = (-v[1] / 180) * Math.PI))
                    : ((p = g.r0), (d = g.r), (f = v[0]));
                } else {
                  var y = n;
                  i ? ((p = y.x), (d = y.x + y.width), (f = t.x)) : ((p = y.y + y.height), (d = y.y), (f = t.y));
                }
              var m = d === p ? 0 : (f - p) / (d - p);
              a && (m = 1 - m);
              var _ = T(u) ? u(o) : l * m + h,
                x = s.getSymbolPath(),
                w = x.getTextContent();
              s.attr({ scaleX: 0, scaleY: 0 }),
                s.animateTo({ scaleX: 1, scaleY: 1 }, { duration: 200, setToFinal: !0, delay: _ }),
                w && w.animateFrom({ style: { opacity: 0 } }, { duration: 300, delay: _ }),
                (x.disableLabelAnimation = !0);
            }
          });
        }),
        (n.prototype._initOrUpdateEndLabel = function (t, e, n) {
          var i = t.getModel('endLabel');
          if (Xg(t)) {
            var r = t.getData(),
              o = this._polyline,
              a = r.getLayout('points');
            if (!a) return o.removeTextContent(), void (this._endLabel = null);
            var s = this._endLabel;
            s ||
              ((s = this._endLabel = new mS({ z2: 200 })),
              (s.ignoreClip = !0),
              o.setTextContent(this._endLabel),
              (o.disableLabelAnimation = !0));
            var l = Wg(a);
            l >= 0 &&
              (Fs(
                o,
                Vs(t, 'endLabel'),
                {
                  inheritColor: n,
                  labelFetcher: t,
                  labelDataIndex: l,
                  defaultText: function (t, e, n) {
                    return null != n ? ng(r, n) : eg(r, t);
                  },
                  enableTextSetter: !0,
                },
                Zg(i, e),
              ),
              (o.textConfig.position = null));
          } else this._endLabel && (this._polyline.removeTextContent(), (this._endLabel = null));
        }),
        (n.prototype._endLabelOnDuring = function (t, e, n, i, r, o, a) {
          var s = this._endLabel,
            l = this._polyline;
          if (s) {
            1 > t && null == i.originalX && ((i.originalX = s.x), (i.originalY = s.y));
            var u = n.getLayout('points'),
              h = n.hostModel,
              c = h.get('connectNulls'),
              p = o.get('precision'),
              d = o.get('distance') || 0,
              f = a.getBaseAxis(),
              g = f.isHorizontal(),
              v = f.inverse,
              y = e.shape,
              m = v ? (g ? y.x : y.y + y.height) : g ? y.x + y.width : y.y,
              _ = (g ? d : 0) * (v ? -1 : 1),
              x = (g ? 0 : -d) * (v ? -1 : 1),
              w = g ? 'x' : 'y',
              b = Ug(u, m, w),
              S = b.range,
              M = S[1] - S[0],
              T = void 0;
            if (M >= 1) {
              if (M > 1 && !c) {
                var C = Gg(u, S[0]);
                s.attr({ x: C[0] + _, y: C[1] + x }), r && (T = h.getRawValue(S[0]));
              } else {
                var C = l.getPointOn(m, w);
                C && s.attr({ x: C[0] + _, y: C[1] + x });
                var I = h.getRawValue(S[0]),
                  D = h.getRawValue(S[1]);
                r && (T = Br(n, p, I, D, b.t));
              }
              i.lastFrameIndex = S[0];
            } else {
              var k = 1 === t || i.lastFrameIndex > 0 ? S[0] : 0,
                C = Gg(u, k);
              r && (T = h.getRawValue(k)), s.attr({ x: C[0] + _, y: C[1] + x });
            }
            r && tT(s).setLabelText(T);
          }
        }),
        (n.prototype._doUpdateAnimation = function (t, e, n, i, r, o, a) {
          var s = this._polyline,
            l = this._polygon,
            u = t.hostModel,
            h = Dg(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o),
            c = h.current,
            p = h.stackedOnCurrent,
            d = h.next,
            f = h.stackedOnNext;
          if (
            (r &&
              ((c = zg(h.current, n, r, a)),
              (p = zg(h.stackedOnCurrent, n, r, a)),
              (d = zg(h.next, n, r, a)),
              (f = zg(h.stackedOnNext, n, r, a))),
            Og(c, d) > 3e3 || (l && Og(p, f) > 3e3))
          )
            return (
              s.stopAnimation(),
              s.setShape({ points: d }),
              void (l && (l.stopAnimation(), l.setShape({ points: d, stackedOnPoints: f })))
            );
          (s.shape.__points = h.current), (s.shape.points = c);
          var g = { shape: { points: d } };
          h.current !== c && (g.shape.__points = h.next),
            s.stopAnimation(),
            rs(s, g, u),
            l &&
              (l.setShape({ points: c, stackedOnPoints: p }),
              l.stopAnimation(),
              rs(l, { shape: { stackedOnPoints: f } }, u),
              s.shape.points !== l.shape.points && (l.shape.points = s.shape.points));
          for (var v = [], y = h.status, m = 0; m < y.length; m++) {
            var _ = y[m].cmd;
            if ('=' === _) {
              var x = t.getItemGraphicEl(y[m].idx1);
              x && v.push({ el: x, ptIdx: m });
            }
          }
          s.animators &&
            s.animators.length &&
            s.animators[0].during(function () {
              l && l.dirtyShape();
              for (var t = s.shape.__points, e = 0; e < v.length; e++) {
                var n = v[e].el,
                  i = 2 * v[e].ptIdx;
                (n.x = t[i]), (n.y = t[i + 1]), n.markRedraw();
              }
            });
        }),
        (n.prototype.remove = function () {
          var t = this.group,
            e = this._data;
          this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            e &&
              e.eachItemGraphicEl(function (n, i) {
                n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));
              }),
            (this._polyline =
              this._polygon =
              this._coordSys =
              this._points =
              this._stackedOnPoints =
              this._endLabel =
              this._data =
                null);
        }),
        (n.type = 'line'),
        n
      );
    })(lI);
  Yd(jg);
  var LP = 2 * Math.PI,
    OP = Math.PI / 180,
    RP = Math.PI / 180,
    BP = (function (t) {
      function n(e, n, i) {
        var r = t.call(this) || this;
        r.z2 = 2;
        var o = new mS();
        return r.setTextContent(o), r.updateData(e, n, i, !0), r;
      }
      return (
        e(n, t),
        (n.prototype.updateData = function (t, e, n, i) {
          var r = this,
            o = t.hostModel,
            a = t.getItemModel(e),
            s = a.getModel('emphasis'),
            l = t.getItemLayout(e),
            u = h(ov(a.getModel('itemStyle'), l, !0), l);
          if (isNaN(u.startAngle)) return void r.setShape(u);
          if (i) {
            r.setShape(u);
            var c = o.getShallow('animationType');
            o.ecModel.ssr
              ? (os(r, { scaleX: 0, scaleY: 0 }, o, { dataIndex: e, isFrom: !0 }),
                (r.originX = u.cx),
                (r.originY = u.cy))
              : 'scale' === c
              ? ((r.shape.r = l.r0), os(r, { shape: { r: l.r } }, o, e))
              : null != n
              ? (r.setShape({ startAngle: n, endAngle: n }),
                os(r, { shape: { startAngle: l.startAngle, endAngle: l.endAngle } }, o, e))
              : ((r.shape.endAngle = l.startAngle), rs(r, { shape: { endAngle: l.endAngle } }, o, e));
          } else hs(r), rs(r, { shape: u }, o, e);
          r.useStyle(t.getItemVisual(e, 'style')), Pa(r, a);
          var p = (l.startAngle + l.endAngle) / 2,
            d = o.get('selectedOffset'),
            f = Math.cos(p) * d,
            g = Math.sin(p) * d,
            v = a.getShallow('cursor');
          v && r.attr('cursor', v),
            this._updateLabel(o, t, e),
            (r.ensureState('emphasis').shape = h(
              { r: l.r + (s.get('scale') ? s.get('scaleSize') || 0 : 0) },
              ov(s.getModel('itemStyle'), l),
            )),
            h(r.ensureState('select'), { x: f, y: g, shape: ov(a.getModel(['select', 'itemStyle']), l) }),
            h(r.ensureState('blur'), { shape: ov(a.getModel(['blur', 'itemStyle']), l) });
          var y = r.getTextGuideLine(),
            m = r.getTextContent();
          y && h(y.ensureState('select'), { x: f, y: g }),
            h(m.ensureState('select'), { x: f, y: g }),
            ka(this, s.get('focus'), s.get('blurScope'), s.get('disabled'));
        }),
        (n.prototype._updateLabel = function (t, e, n) {
          var i = this,
            r = e.getItemModel(n),
            o = r.getModel('labelLine'),
            a = e.getItemVisual(n, 'style'),
            s = a && a.fill,
            l = a && a.opacity;
          Fs(i, Vs(r), {
            labelFetcher: e.hostModel,
            labelDataIndex: n,
            inheritColor: s,
            defaultOpacity: l,
            defaultText: t.getFormattedLabel(n, 'normal') || e.getName(n),
          });
          var u = i.getTextContent();
          i.setTextConfig({ position: null, rotation: null }), u.attr({ z2: 10 });
          var h = t.get(['label', 'position']);
          if ('outside' !== h && 'outer' !== h) i.removeTextGuideLine();
          else {
            var c = this.getTextGuideLine();
            c || ((c = new bM()), this.setTextGuideLine(c)),
              Rf(this, Bf(r), { stroke: s, opacity: F(o.get(['lineStyle', 'opacity']), l, 1) });
          }
        }),
        n
      );
    })(vM),
    zP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.ignoreLabelLineUpdate = !0), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n) {
          var i,
            r = t.getData(),
            o = this._data,
            a = this.group;
          if (!o && r.count() > 0) {
            for (var s = r.getItemLayout(0), l = 1; isNaN(s && s.startAngle) && l < r.count(); ++l)
              s = r.getItemLayout(l);
            s && (i = s.startAngle);
          }
          if (
            (this._emptyCircleSector && a.remove(this._emptyCircleSector), 0 === r.count() && t.get('showEmptyCircle'))
          ) {
            var u = new vM({ shape: $g(t, n) });
            u.useStyle(t.getModel('emptyCircleStyle').getItemStyle()), (this._emptyCircleSector = u), a.add(u);
          }
          r
            .diff(o)
            .add(function (t) {
              var e = new BP(r, t, i);
              r.setItemGraphicEl(t, e), a.add(e);
            })
            .update(function (t, e) {
              var n = o.getItemGraphicEl(e);
              n.updateData(r, t, i), n.off('click'), a.add(n), r.setItemGraphicEl(t, n);
            })
            .remove(function (e) {
              var n = o.getItemGraphicEl(e);
              us(n, t, e);
            })
            .execute(),
            rv(t),
            'expansion' !== t.get('animationTypeUpdate') && (this._data = r);
        }),
        (n.prototype.dispose = function () {}),
        (n.prototype.containPoint = function (t, e) {
          var n = e.getData(),
            i = n.getItemLayout(0);
          if (i) {
            var r = t[0] - i.cx,
              o = t[1] - i.cy,
              a = Math.sqrt(r * r + o * o);
            return a <= i.r && a >= i.r0;
          }
        }),
        (n.type = 'pie'),
        n
      );
    })(lI),
    EP = (function () {
      function t(t, e) {
        (this._getDataWithEncodedVisual = t), (this._getRawData = e);
      }
      return (
        (t.prototype.getAllNames = function () {
          var t = this._getRawData();
          return t.mapArray(t.getName);
        }),
        (t.prototype.containName = function (t) {
          var e = this._getRawData();
          return e.indexOfName(t) >= 0;
        }),
        (t.prototype.indexOfName = function (t) {
          var e = this._getDataWithEncodedVisual();
          return e.indexOfName(t);
        }),
        (t.prototype.getItemVisual = function (t, e) {
          var n = this._getDataWithEncodedVisual();
          return n.getItemVisual(t, e);
        }),
        t
      );
    })(),
    NP = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.init = function (e) {
          t.prototype.init.apply(this, arguments),
            (this.legendVisualProvider = new EP(z_(this.getData, this), z_(this.getRawData, this))),
            this._defaultLabelLine(e);
        }),
        (n.prototype.mergeOption = function () {
          t.prototype.mergeOption.apply(this, arguments);
        }),
        (n.prototype.getInitialData = function () {
          return av(this, { coordDimensions: ['value'], encodeDefaulter: S(Xl, this) });
        }),
        (n.prototype.getDataParams = function (e) {
          var n = this.getData(),
            i = t.prototype.getDataParams.call(this, e),
            r = [];
          return (
            n.each(n.mapDimension('value'), function (t) {
              r.push(t);
            }),
            (i.percent = Yi(r, e, n.hostModel.get('percentPrecision'))),
            i.$vars.push('percent'),
            i
          );
        }),
        (n.prototype._defaultLabelLine = function (t) {
          hr(t, 'labelLine', ['show']);
          var e = t.labelLine,
            n = t.emphasis.labelLine;
          (e.show = e.show && t.label.show), (n.show = n.show && t.emphasis.label.show);
        }),
        (n.type = 'series.pie'),
        (n.defaultOption = {
          z: 2,
          legendHoverLink: !0,
          colorBy: 'data',
          center: ['50%', '50%'],
          radius: [0, '75%'],
          clockwise: !0,
          startAngle: 90,
          minAngle: 0,
          minShowLabelAngle: 0,
          selectedOffset: 10,
          percentPrecision: 2,
          stillShowZeroSum: !0,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: null,
          height: null,
          label: {
            rotate: 0,
            show: !0,
            overflow: 'truncate',
            position: 'outer',
            alignTo: 'none',
            edgeDistance: '25%',
            bleedMargin: 10,
            distanceToLabelLine: 5,
          },
          labelLine: {
            show: !0,
            length: 15,
            length2: 15,
            smooth: !1,
            minTurnAngle: 90,
            maxSurfaceAngle: 90,
            lineStyle: { width: 1, type: 'solid' },
          },
          itemStyle: { borderWidth: 1, borderJoin: 'round' },
          showEmptyCircle: !0,
          emptyCircleStyle: { color: 'lightgray', opacity: 1 },
          labelLayout: { hideOverlap: !0 },
          emphasis: { scale: !0, scaleSize: 5 },
          avoidLabelOverlap: !0,
          animationType: 'expansion',
          animationDuration: 1e3,
          animationTypeUpdate: 'transition',
          animationEasingUpdate: 'cubicInOut',
          animationDurationUpdate: 500,
          animationEasing: 'cubicInOut',
        }),
        n
      );
    })(rI);
  Yd(lv);
  var FP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.hasSymbolVisual = !0), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return Yp(null, this, { useEncodeDefaulter: !0 });
        }),
        (n.prototype.getProgressive = function () {
          var t = this.option.progressive;
          return null == t ? (this.option.large ? 5e3 : this.get('progressive')) : t;
        }),
        (n.prototype.getProgressiveThreshold = function () {
          var t = this.option.progressiveThreshold;
          return null == t ? (this.option.large ? 1e4 : this.get('progressiveThreshold')) : t;
        }),
        (n.prototype.brushSelector = function (t, e, n) {
          return n.point(e.getItemLayout(t));
        }),
        (n.prototype.getZLevelKey = function () {
          return this.getData().count() > this.getProgressiveThreshold() ? this.id : '';
        }),
        (n.type = 'series.scatter'),
        (n.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
        (n.defaultOption = {
          coordinateSystem: 'cartesian2d',
          z: 2,
          legendHoverLink: !0,
          symbolSize: 10,
          large: !1,
          largeThreshold: 2e3,
          itemStyle: { opacity: 0.8 },
          emphasis: { scale: !0 },
          clip: !0,
          select: { itemStyle: { borderColor: '#212121' } },
          universalTransition: { divideShape: 'clone' },
        }),
        n
      );
    })(rI),
    VP = 4,
    HP = (function () {
      function t() {}
      return t;
    })(),
    WP = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n._off = 0), (n.hoverDataIdx = -1), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new HP();
        }),
        (n.prototype.reset = function () {
          (this.notClear = !1), (this._off = 0);
        }),
        (n.prototype.buildPath = function (t, e) {
          var n,
            i = e.points,
            r = e.size,
            o = this.symbolProxy,
            a = o.shape,
            s = t.getContext ? t.getContext() : t,
            l = s && r[0] < VP,
            u = this.softClipShape;
          if (l) return void (this._ctx = s);
          for (this._ctx = null, n = this._off; n < i.length; ) {
            var h = i[n++],
              c = i[n++];
            isNaN(h) ||
              isNaN(c) ||
              ((!u || u.contain(h, c)) &&
                ((a.x = h - r[0] / 2),
                (a.y = c - r[1] / 2),
                (a.width = r[0]),
                (a.height = r[1]),
                o.buildPath(t, a, !0)));
          }
          this.incremental && ((this._off = n), (this.notClear = !0));
        }),
        (n.prototype.afterBrush = function () {
          var t,
            e = this.shape,
            n = e.points,
            i = e.size,
            r = this._ctx,
            o = this.softClipShape;
          if (r) {
            for (t = this._off; t < n.length; ) {
              var a = n[t++],
                s = n[t++];
              isNaN(a) || isNaN(s) || ((!o || o.contain(a, s)) && r.fillRect(a - i[0] / 2, s - i[1] / 2, i[0], i[1]));
            }
            this.incremental && ((this._off = t), (this.notClear = !0));
          }
        }),
        (n.prototype.findDataIndex = function (t, e) {
          for (
            var n = this.shape,
              i = n.points,
              r = n.size,
              o = Math.max(r[0], 4),
              a = Math.max(r[1], 4),
              s = i.length / 2 - 1;
            s >= 0;
            s--
          ) {
            var l = 2 * s,
              u = i[l] - o / 2,
              h = i[l + 1] - a / 2;
            if (t >= u && e >= h && u + o >= t && h + a >= e) return s;
          }
          return -1;
        }),
        (n.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
          if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
            var r = (this.hoverDataIdx = this.findDataIndex(t, e));
            return r >= 0;
          }
          return (this.hoverDataIdx = -1), !1;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this._rect;
          if (!t) {
            for (
              var e = this.shape,
                n = e.points,
                i = e.size,
                r = i[0],
                o = i[1],
                a = 1 / 0,
                s = 1 / 0,
                l = -1 / 0,
                u = -1 / 0,
                h = 0;
              h < n.length;

            ) {
              var c = n[h++],
                p = n[h++];
              (a = Math.min(c, a)), (l = Math.max(c, l)), (s = Math.min(p, s)), (u = Math.max(p, u));
            }
            t = this._rect = new Lw(a - r / 2, s - o / 2, l - a + r, u - s + o);
          }
          return t;
        }),
        n
      );
    })(oS),
    GP = (function () {
      function t() {
        this.group = new Vw();
      }
      return (
        (t.prototype.updateData = function (t, e) {
          this._clear();
          var n = this._create();
          n.setShape({ points: t.getLayout('points') }), this._setCommon(n, t, e);
        }),
        (t.prototype.updateLayout = function (t) {
          var e = t.getLayout('points');
          this.group.eachChild(function (t) {
            if (null != t.startIndex) {
              var n = 2 * (t.endIndex - t.startIndex),
                i = 4 * t.startIndex * 2;
              e = new Float32Array(e.buffer, i, n);
            }
            t.setShape('points', e), t.reset();
          });
        }),
        (t.prototype.incrementalPrepareUpdate = function () {
          this._clear();
        }),
        (t.prototype.incrementalUpdate = function (t, e, n) {
          var i = this._newAdded[0],
            r = e.getLayout('points'),
            o = i && i.shape.points;
          if (o && o.length < 2e4) {
            var a = o.length,
              s = new Float32Array(a + r.length);
            s.set(o), s.set(r, a), (i.endIndex = t.end), i.setShape({ points: s });
          } else {
            this._newAdded = [];
            var l = this._create();
            (l.startIndex = t.start),
              (l.endIndex = t.end),
              (l.incremental = !0),
              l.setShape({ points: r }),
              this._setCommon(l, e, n);
          }
        }),
        (t.prototype.eachRendered = function (t) {
          this._newAdded[0] && t(this._newAdded[0]);
        }),
        (t.prototype._create = function () {
          var t = new WP({ cursor: 'default' });
          return this.group.add(t), this._newAdded.push(t), t;
        }),
        (t.prototype._setCommon = function (t, e, n) {
          var i = e.hostModel;
          n = n || {};
          var r = e.getVisual('symbolSize');
          t.setShape('size', r instanceof Array ? r : [r, r]),
            (t.softClipShape = n.clipShape || null),
            (t.symbolProxy = hc(e.getVisual('symbol'), 0, 0, 0, 0)),
            (t.setColor = t.symbolProxy.setColor);
          var o = t.shape.size[0] < VP;
          t.useStyle(i.getModel('itemStyle').getItemStyle(o ? ['color', 'shadowBlur', 'shadowColor'] : ['color']));
          var a = e.getVisual('style'),
            s = a && a.fill;
          s && t.setColor(s);
          var l = bS(t);
          (l.seriesIndex = i.seriesIndex),
            t.on('mousemove', function () {
              l.dataIndex = null;
              var e = t.hoverDataIdx;
              e >= 0 && (l.dataIndex = e + (t.startIndex || 0));
            });
        }),
        (t.prototype.remove = function () {
          this._clear();
        }),
        (t.prototype._clear = function () {
          (this._newAdded = []), this.group.removeAll();
        }),
        t
      );
    })(),
    UP = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t) {
          var e = t.getData(),
            n = this._updateSymbolDraw(e, t);
          n.updateData(e, { clipShape: this._getClipShape(t) }), (this._finished = !0);
        }),
        (n.prototype.incrementalPrepareRender = function (t) {
          var e = t.getData(),
            n = this._updateSymbolDraw(e, t);
          n.incrementalPrepareUpdate(e), (this._finished = !1);
        }),
        (n.prototype.incrementalRender = function (t, e) {
          this._symbolDraw.incrementalUpdate(t, e.getData(), { clipShape: this._getClipShape(e) }),
            (this._finished = t.end === e.getData().count());
        }),
        (n.prototype.updateTransform = function (t, e, n) {
          var i = t.getData();
          if ((this.group.dirty(), !this._finished || i.count() > 1e4)) return { update: !0 };
          var r = qg('').reset(t, e, n);
          r.progress && r.progress({ start: 0, end: i.count(), count: i.count() }, i), this._symbolDraw.updateLayout(i);
        }),
        (n.prototype.eachRendered = function (t) {
          this._symbolDraw && this._symbolDraw.eachRendered(t);
        }),
        (n.prototype._getClipShape = function (t) {
          var e = t.coordinateSystem,
            n = e && e.getArea && e.getArea();
          return t.get('clip', !0) ? n : null;
        }),
        (n.prototype._updateSymbolDraw = function (t, e) {
          var n = this._symbolDraw,
            i = e.pipelineContext,
            r = i.large;
          return (
            (n && r === this._isLargeDraw) ||
              (n && n.remove(),
              (n = this._symbolDraw = r ? new GP() : new MP()),
              (this._isLargeDraw = r),
              this.group.removeAll()),
            this.group.add(n.group),
            n
          );
        }),
        (n.prototype.remove = function () {
          this._symbolDraw && this._symbolDraw.remove(!0), (this._symbolDraw = null);
        }),
        (n.prototype.dispose = function () {}),
        (n.type = 'scatter'),
        n
      );
    })(lI),
    XP = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.type = 'grid'),
        (n.dependencies = ['xAxis', 'yAxis']),
        (n.layoutMode = 'box'),
        (n.defaultOption = {
          show: !1,
          z: 0,
          left: '10%',
          top: 60,
          right: '10%',
          bottom: 70,
          containLabel: !1,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 1,
          borderColor: '#ccc',
        }),
        n
      );
    })(HT),
    YP = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.getCoordSysModel = function () {
          return this.getReferringComponents('grid', tb).models[0];
        }),
        (n.type = 'cartesian2dAxis'),
        n
      );
    })(HT);
  f(YP, dA);
  var ZP = {
      show: !0,
      z: 0,
      inverse: !1,
      name: '',
      nameLocation: 'end',
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: '...', placeholder: '.' },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: { show: !1 },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: { color: '#6E7079', width: 1, type: 'solid' },
        symbol: ['none', 'none'],
        symbolSize: [10, 15],
      },
      axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
      axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 },
      splitLine: { show: !0, lineStyle: { color: ['#E0E6F1'], width: 1, type: 'solid' } },
      splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] } },
    },
    qP = l(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: { show: !1 },
        axisTick: { alignWithLabel: !1, interval: 'auto' },
        axisLabel: { interval: 'auto' },
      },
      ZP,
    ),
    jP = l(
      {
        boundaryGap: [0, 0],
        axisLine: { show: 'auto' },
        axisTick: { show: 'auto' },
        splitNumber: 5,
        minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
        minorSplitLine: { show: !1, lineStyle: { color: '#F4F7FD', width: 1 } },
      },
      ZP,
    ),
    KP = l(
      {
        splitNumber: 6,
        axisLabel: { showMinLabel: !1, showMaxLabel: !1, rich: { primary: { fontWeight: 'bold' } } },
        splitLine: { show: !1 },
      },
      jP,
    ),
    $P = c({ logBase: 10 }, jP),
    QP = { category: qP, value: jP, time: KP, log: $P },
    JP = { value: 1, category: 1, time: 1, log: 1 },
    tL = (function () {
      function t(t) {
        (this.type = 'cartesian'), (this._dimList = []), (this._axes = {}), (this.name = t || '');
      }
      return (
        (t.prototype.getAxis = function (t) {
          return this._axes[t];
        }),
        (t.prototype.getAxes = function () {
          return y(
            this._dimList,
            function (t) {
              return this._axes[t];
            },
            this,
          );
        }),
        (t.prototype.getAxesByScale = function (t) {
          return (
            (t = t.toLowerCase()),
            _(this.getAxes(), function (e) {
              return e.scale.type === t;
            })
          );
        }),
        (t.prototype.addAxis = function (t) {
          var e = t.dim;
          (this._axes[e] = t), this._dimList.push(e);
        }),
        t
      );
    })(),
    eL = ['x', 'y'],
    nL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'cartesian2d'), (e.dimensions = eL), e;
      }
      return (
        e(n, t),
        (n.prototype.calcAffineTransform = function () {
          this._transform = this._invTransform = null;
          var t = this.getAxis('x').scale,
            e = this.getAxis('y').scale;
          if (cv(t) && cv(e)) {
            var n = t.getExtent(),
              i = e.getExtent(),
              r = this.dataToPoint([n[0], i[0]]),
              o = this.dataToPoint([n[1], i[1]]),
              a = n[1] - n[0],
              s = i[1] - i[0];
            if (a && s) {
              var l = (o[0] - r[0]) / a,
                u = (o[1] - r[1]) / s,
                h = r[0] - n[0] * l,
                c = r[1] - i[0] * u,
                p = (this._transform = [l, 0, 0, u, h, c]);
              this._invTransform = pi([], p);
            }
          }
        }),
        (n.prototype.getBaseAxis = function () {
          return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x');
        }),
        (n.prototype.containPoint = function (t) {
          var e = this.getAxis('x'),
            n = this.getAxis('y');
          return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
        }),
        (n.prototype.containData = function (t) {
          return this.getAxis('x').containData(t[0]) && this.getAxis('y').containData(t[1]);
        }),
        (n.prototype.containZone = function (t, e) {
          var n = this.dataToPoint(t),
            i = this.dataToPoint(e),
            r = this.getArea(),
            o = new Lw(n[0], n[1], i[0] - n[0], i[1] - n[1]);
          return r.intersect(o);
        }),
        (n.prototype.dataToPoint = function (t, e, n) {
          n = n || [];
          var i = t[0],
            r = t[1];
          if (this._transform && null != i && isFinite(i) && null != r && isFinite(r)) return ve(n, t, this._transform);
          var o = this.getAxis('x'),
            a = this.getAxis('y');
          return (n[0] = o.toGlobalCoord(o.dataToCoord(i, e))), (n[1] = a.toGlobalCoord(a.dataToCoord(r, e))), n;
        }),
        (n.prototype.clampData = function (t, e) {
          var n = this.getAxis('x').scale,
            i = this.getAxis('y').scale,
            r = n.getExtent(),
            o = i.getExtent(),
            a = n.parse(t[0]),
            s = i.parse(t[1]);
          return (
            (e = e || []),
            (e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1]))),
            (e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1]))),
            e
          );
        }),
        (n.prototype.pointToData = function (t, e) {
          var n = [];
          if (this._invTransform) return ve(n, t, this._invTransform);
          var i = this.getAxis('x'),
            r = this.getAxis('y');
          return (n[0] = i.coordToData(i.toLocalCoord(t[0]), e)), (n[1] = r.coordToData(r.toLocalCoord(t[1]), e)), n;
        }),
        (n.prototype.getOtherAxis = function (t) {
          return this.getAxis('x' === t.dim ? 'y' : 'x');
        }),
        (n.prototype.getArea = function () {
          var t = this.getAxis('x').getGlobalExtent(),
            e = this.getAxis('y').getGlobalExtent(),
            n = Math.min(t[0], t[1]),
            i = Math.min(e[0], e[1]),
            r = Math.max(t[0], t[1]) - n,
            o = Math.max(e[0], e[1]) - i;
          return new Lw(n, i, r, o);
        }),
        n
      );
    })(tL),
    iL = (function (t) {
      function n(e, n, i, r, o) {
        var a = t.call(this, e, n, i) || this;
        return (a.index = 0), (a.type = r || 'value'), (a.position = o || 'bottom'), a;
      }
      return (
        e(n, t),
        (n.prototype.isHorizontal = function () {
          var t = this.position;
          return 'top' === t || 'bottom' === t;
        }),
        (n.prototype.getGlobalExtent = function (t) {
          var e = this.getExtent();
          return (
            (e[0] = this.toGlobalCoord(e[0])), (e[1] = this.toGlobalCoord(e[1])), t && e[0] > e[1] && e.reverse(), e
          );
        }),
        (n.prototype.pointToData = function (t, e) {
          return this.coordToData(this.toLocalCoord(t['x' === this.dim ? 0 : 1]), e);
        }),
        (n.prototype.setCategorySortInfo = function (t) {
          return 'category' !== this.type
            ? !1
            : ((this.model.option.categorySortInfo = t), void this.scale.setSortInfo(t));
        }),
        n
      );
    })(PA),
    rL = Math.log,
    oL = (function () {
      function t(t, e, n) {
        (this.type = 'grid'),
          (this._coordsMap = {}),
          (this._coordsList = []),
          (this._axesMap = {}),
          (this._axesList = []),
          (this.axisPointerEnabled = !0),
          (this.dimensions = eL),
          this._initCartesian(t, e, n),
          (this.model = t);
      }
      return (
        (t.prototype.getRect = function () {
          return this._rect;
        }),
        (t.prototype.update = function (t, e) {
          function n(t) {
            var e,
              n = w(t),
              i = n.length;
            if (i) {
              for (var r = [], o = i - 1; o >= 0; o--) {
                var a = +n[o],
                  s = t[a],
                  l = s.model,
                  u = s.scale;
                Kp(u) && l.get('alignTicks') && null == l.get('interval') ? r.push(s) : (Ld(u, l), Kp(u) && (e = s));
              }
              r.length &&
                (e || ((e = r.pop()), Ld(e.scale, e.model)),
                v(r, function (t) {
                  gv(t.scale, t.model, e.scale);
                }));
            }
          }
          var i = this._axesMap;
          this._updateScale(t, this.model), n(i.x), n(i.y);
          var r = {};
          v(i.x, function (t) {
            yv(i, 'y', t, r);
          }),
            v(i.y, function (t) {
              yv(i, 'x', t, r);
            }),
            this.resize(this.model, e);
        }),
        (t.prototype.resize = function (t, e, n) {
          function i() {
            v(s, function (t) {
              var e = t.isHorizontal(),
                n = e ? [0, a.width] : [0, a.height],
                i = t.inverse ? 1 : 0;
              t.setExtent(n[i], n[1 - i]), _v(t, e ? a.x : a.y);
            });
          }
          var r = t.getBoxLayoutParams(),
            o = !n && t.get('containLabel'),
            a = El(r, { width: e.getWidth(), height: e.getHeight() });
          this._rect = a;
          var s = this._axesList;
          i(),
            o &&
              (v(s, function (t) {
                if (!t.model.get(['axisLabel', 'inside'])) {
                  var e = Ed(t);
                  if (e) {
                    var n = t.isHorizontal() ? 'height' : 'width',
                      i = t.model.get(['axisLabel', 'margin']);
                    (a[n] -= e[n] + i),
                      'top' === t.position ? (a.y += e.height + i) : 'left' === t.position && (a.x += e.width + i);
                  }
                }
              }),
              i()),
            v(this._coordsList, function (t) {
              t.calcAffineTransform();
            });
        }),
        (t.prototype.getAxis = function (t, e) {
          var n = this._axesMap[t];
          return null != n ? n[e || 0] : void 0;
        }),
        (t.prototype.getAxes = function () {
          return this._axesList.slice();
        }),
        (t.prototype.getCartesian = function (t, e) {
          if (null != t && null != e) {
            var n = 'x' + t + 'y' + e;
            return this._coordsMap[n];
          }
          k(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
          for (var i = 0, r = this._coordsList; i < r.length; i++)
            if (r[i].getAxis('x').index === t || r[i].getAxis('y').index === e) return r[i];
        }),
        (t.prototype.getCartesians = function () {
          return this._coordsList.slice();
        }),
        (t.prototype.convertToPixel = function (t, e, n) {
          var i = this._findConvertTarget(e);
          return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
        }),
        (t.prototype.convertFromPixel = function (t, e, n) {
          var i = this._findConvertTarget(e);
          return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
        }),
        (t.prototype._findConvertTarget = function (t) {
          var e,
            n,
            i = t.seriesModel,
            r = t.xAxisModel || (i && i.getReferringComponents('xAxis', tb).models[0]),
            o = t.yAxisModel || (i && i.getReferringComponents('yAxis', tb).models[0]),
            a = t.gridModel,
            s = this._coordsList;
          if (i) (e = i.coordinateSystem), p(s, e) < 0 && (e = null);
          else if (r && o) e = this.getCartesian(r.componentIndex, o.componentIndex);
          else if (r) n = this.getAxis('x', r.componentIndex);
          else if (o) n = this.getAxis('y', o.componentIndex);
          else if (a) {
            var l = a.coordinateSystem;
            l === this && (e = this._coordsList[0]);
          }
          return { cartesian: e, axis: n };
        }),
        (t.prototype.containPoint = function (t) {
          var e = this._coordsList[0];
          return e ? e.containPoint(t) : void 0;
        }),
        (t.prototype._initCartesian = function (t, e) {
          function n(e) {
            return function (n, i) {
              if (vv(n, t)) {
                var l = n.get('position');
                'x' === e
                  ? 'top' !== l && 'bottom' !== l && (l = o.bottom ? 'top' : 'bottom')
                  : 'left' !== l && 'right' !== l && (l = o.left ? 'right' : 'left'),
                  (o[l] = !0);
                var u = new iL(e, Od(n), [0, 0], n.get('type'), l),
                  h = 'category' === u.type;
                (u.onBand = h && n.get('boundaryGap')),
                  (u.inverse = n.get('inverse')),
                  (n.axis = u),
                  (u.model = n),
                  (u.grid = r),
                  (u.index = i),
                  r._axesList.push(u),
                  (a[e][i] = u),
                  s[e]++;
              }
            };
          }
          var i = this,
            r = this,
            o = { left: !1, right: !1, top: !1, bottom: !1 },
            a = { x: {}, y: {} },
            s = { x: 0, y: 0 };
          return (
            e.eachComponent('xAxis', n('x'), this),
            e.eachComponent('yAxis', n('y'), this),
            s.x && s.y
              ? ((this._axesMap = a),
                void v(a.x, function (e, n) {
                  v(a.y, function (r, o) {
                    var a = 'x' + n + 'y' + o,
                      s = new nL(a);
                    (s.master = i),
                      (s.model = t),
                      (i._coordsMap[a] = s),
                      i._coordsList.push(s),
                      s.addAxis(e),
                      s.addAxis(r);
                  });
                }))
              : ((this._axesMap = {}), void (this._axesList = []))
          );
        }),
        (t.prototype._updateScale = function (t, e) {
          function n(t, e) {
            v(Hd(t, e.dim), function (n) {
              e.scale.unionExtentFromData(t, n);
            });
          }
          v(this._axesList, function (t) {
            if ((t.scale.setExtent(1 / 0, -1 / 0), 'category' === t.type)) {
              var e = t.model.get('categorySortInfo');
              t.scale.setSortInfo(e);
            }
          }),
            t.eachSeries(function (t) {
              if (dv(t)) {
                var i = fv(t),
                  r = i.xAxisModel,
                  o = i.yAxisModel;
                if (!vv(r, e) || !vv(o, e)) return;
                var a = this.getCartesian(r.componentIndex, o.componentIndex),
                  s = t.getData(),
                  l = a.getAxis('x'),
                  u = a.getAxis('y');
                n(s, l), n(s, u);
              }
            }, this);
        }),
        (t.prototype.getTooltipAxes = function (t) {
          var e = [],
            n = [];
          return (
            v(this.getCartesians(), function (i) {
              var r = null != t && 'auto' !== t ? i.getAxis(t) : i.getBaseAxis(),
                o = i.getOtherAxis(r);
              p(e, r) < 0 && e.push(r), p(n, o) < 0 && n.push(o);
            }),
            { baseAxes: e, otherAxes: n }
          );
        }),
        (t.create = function (e, n) {
          var i = [];
          return (
            e.eachComponent('grid', function (r, o) {
              var a = new t(r, e, n);
              (a.name = 'grid_' + o), a.resize(r, n, !0), (r.coordinateSystem = a), i.push(a);
            }),
            e.eachSeries(function (t) {
              if (dv(t)) {
                var e = fv(t),
                  n = e.xAxisModel,
                  i = e.yAxisModel,
                  r = n.getCoordSysModel(),
                  o = r.coordinateSystem;
                t.coordinateSystem = o.getCartesian(n.componentIndex, i.componentIndex);
              }
            }),
            i
          );
        }),
        (t.dimensions = eL),
        t
      );
    })(),
    aL = Math.PI,
    sL = (function () {
      function t(t, e) {
        (this.group = new Vw()),
          (this.opt = e),
          (this.axisModel = t),
          c(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0,
            handleAutoShown: function () {
              return !0;
            },
          });
        var n = new Vw({ x: e.position[0], y: e.position[1], rotation: e.rotation });
        n.updateTransform(), (this._transformGroup = n);
      }
      return (
        (t.prototype.hasBuilder = function (t) {
          return !!lL[t];
        }),
        (t.prototype.add = function (t) {
          lL[t](this.opt, this.axisModel, this.group, this._transformGroup);
        }),
        (t.prototype.getGroup = function () {
          return this.group;
        }),
        (t.innerTextLayout = function (t, e, n) {
          var i,
            r,
            o = qi(e - t);
          return (
            ji(o)
              ? ((r = n > 0 ? 'top' : 'bottom'), (i = 'center'))
              : ji(o - aL)
              ? ((r = n > 0 ? 'bottom' : 'top'), (i = 'center'))
              : ((r = 'middle'), (i = o > 0 && aL > o ? (n > 0 ? 'right' : 'left') : n > 0 ? 'left' : 'right')),
            { rotation: o, textAlign: i, textVerticalAlign: r }
          );
        }),
        (t.makeAxisEventDataBase = function (t) {
          var e = { componentType: t.mainType, componentIndex: t.componentIndex };
          return (e[t.mainType + 'Index'] = t.componentIndex), e;
        }),
        (t.isLabelSilent = function (t) {
          var e = t.get('tooltip');
          return t.get('silent') || !(t.get('triggerEvent') || (e && e.show));
        }),
        t
      );
    })(),
    lL = {
      axisLine: function (t, e, n, i) {
        var r = e.get(['axisLine', 'show']);
        if (('auto' === r && t.handleAutoShown && (r = t.handleAutoShown('axisLine')), r)) {
          var o = e.axis.getExtent(),
            a = i.transform,
            s = [o[0], 0],
            l = [o[1], 0];
          a && (ve(s, s, a), ve(l, l, a));
          var u = h({ lineCap: 'round' }, e.getModel(['axisLine', 'lineStyle']).getLineStyle()),
            c = new TM({
              subPixelOptimize: !0,
              shape: { x1: s[0], y1: s[1], x2: l[0], y2: l[1] },
              style: u,
              strokeContainThreshold: t.strokeContainThreshold || 5,
              silent: !0,
              z2: 1,
            });
          (c.anid = 'line'), n.add(c);
          var p = e.get(['axisLine', 'symbol']);
          if (null != p) {
            var d = e.get(['axisLine', 'symbolSize']);
            C(p) && (p = [p, p]), (C(d) || D(d)) && (d = [d, d]);
            var f = pc(e.get(['axisLine', 'symbolOffset']) || 0, d),
              g = d[0],
              y = d[1];
            v(
              [
                { rotate: t.rotation + Math.PI / 2, offset: f[0], r: 0 },
                {
                  rotate: t.rotation - Math.PI / 2,
                  offset: f[1],
                  r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1])),
                },
              ],
              function (e, i) {
                if ('none' !== p[i] && null != p[i]) {
                  var r = hc(p[i], -g / 2, -y / 2, g, y, u.stroke, !0),
                    o = e.r + e.offset;
                  r.attr({
                    rotation: e.rotate,
                    x: s[0] + o * Math.cos(t.rotation),
                    y: s[1] - o * Math.sin(t.rotation),
                    silent: !0,
                    z2: 11,
                  }),
                    n.add(r);
                }
              },
            );
          }
        }
      },
      axisTickLabel: function (t, e, n, i) {
        var r = Cv(n, i, e, t),
          o = Dv(n, i, e, t);
        if ((wv(e, o, r), Iv(n, i, e, t.tickDirection), e.get(['axisLabel', 'hideOverlap']))) {
          var a = zf(
            y(o, function (t) {
              return { label: t, priority: t.z2, defaultAttr: { ignore: t.ignore } };
            }),
          );
          Vf(a);
        }
      },
      axisName: function (t, e, n, i) {
        var r = E(t.axisName, e.get('name'));
        if (r) {
          var o,
            a = e.get('nameLocation'),
            s = t.nameDirection,
            l = e.getModel('nameTextStyle'),
            u = e.get('nameGap') || 0,
            h = e.axis.getExtent(),
            c = h[0] > h[1] ? -1 : 1,
            p = [
              'start' === a ? h[0] - c * u : 'end' === a ? h[1] + c * u : (h[0] + h[1]) / 2,
              Mv(a) ? t.labelOffset + s * u : 0,
            ],
            d = e.get('nameRotate');
          null != d && (d = (d * aL) / 180);
          var f;
          Mv(a)
            ? (o = sL.innerTextLayout(t.rotation, null != d ? d : t.rotation, s))
            : ((o = xv(t.rotation, a, d || 0, h)),
              (f = t.axisNameAvailableWidth),
              null != f && ((f = Math.abs(f / Math.sin(o.rotation))), !isFinite(f) && (f = null)));
          var g = l.getFont(),
            v = e.get('nameTruncate', !0) || {},
            y = v.ellipsis,
            m = E(t.nameTruncateMaxWidth, v.maxWidth, f),
            _ = new mS({
              x: p[0],
              y: p[1],
              rotation: o.rotation,
              silent: sL.isLabelSilent(e),
              style: Hs(l, {
                text: r,
                font: g,
                overflow: 'truncate',
                width: m,
                ellipsis: y,
                fill: l.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
                align: l.get('align') || o.textAlign,
                verticalAlign: l.get('verticalAlign') || o.textVerticalAlign,
              }),
              z2: 1,
            });
          if (
            (Rs({ el: _, componentModel: e, itemName: r }),
            (_.__fullText = r),
            (_.anid = 'name'),
            e.get('triggerEvent'))
          ) {
            var x = sL.makeAxisEventDataBase(e);
            (x.targetType = 'axisName'), (x.name = r), (bS(_).eventData = x);
          }
          i.add(_), _.updateTransform(), n.add(_), _.decomposeTransform();
        }
      },
    },
    uL = {},
    hL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (e, n, i) {
          this.axisPointerClass && Bv(e),
            t.prototype.render.apply(this, arguments),
            this._doUpdateAxisPointerClass(e, i, !0);
        }),
        (n.prototype.updateAxisPointer = function (t, e, n) {
          this._doUpdateAxisPointerClass(t, n, !1);
        }),
        (n.prototype.remove = function (t, e) {
          var n = this._axisPointer;
          n && n.remove(e);
        }),
        (n.prototype.dispose = function (e, n) {
          this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments);
        }),
        (n.prototype._doUpdateAxisPointerClass = function (t, e, i) {
          var r = n.getAxisPointerClass(this.axisPointerClass);
          if (r) {
            var o = Ev(t);
            o ? (this._axisPointer || (this._axisPointer = new r())).render(t, o, e, i) : this._disposeAxisPointer(e);
          }
        }),
        (n.prototype._disposeAxisPointer = function (t) {
          this._axisPointer && this._axisPointer.dispose(t), (this._axisPointer = null);
        }),
        (n.registerAxisPointerClass = function (t, e) {
          uL[t] = e;
        }),
        (n.getAxisPointerClass = function (t) {
          return t && uL[t];
        }),
        (n.type = 'axis'),
        n
      );
    })(oI),
    cL = Dr(),
    pL = ['axisLine', 'axisTickLabel', 'axisName'],
    dL = ['splitArea', 'splitLine', 'minorSplitLine'],
    fL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.axisPointerClass = 'CartesianAxisPointer'), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (e, n, i, r) {
          this.group.removeAll();
          var o = this._axisGroup;
          if (((this._axisGroup = new Vw()), this.group.add(this._axisGroup), e.get('show'))) {
            var a = e.getCoordSysModel(),
              s = pv(a, e),
              l = new sL(
                e,
                h(
                  {
                    handleAutoShown: function () {
                      for (var t = a.coordinateSystem.getCartesians(), n = 0; n < t.length; n++)
                        if (Kp(t[n].getOtherAxis(e.axis).scale)) return !0;
                      return !1;
                    },
                  },
                  s,
                ),
              );
            v(pL, l.add, l),
              this._axisGroup.add(l.getGroup()),
              v(
                dL,
                function (t) {
                  e.get([t, 'show']) && gL[t](this, this._axisGroup, e, a);
                },
                this,
              );
            var u = r && 'changeAxisOrder' === r.type && r.isInitSort;
            u || Cs(o, this._axisGroup, e), t.prototype.render.call(this, e, n, i, r);
          }
        }),
        (n.prototype.remove = function () {
          Hv(this);
        }),
        (n.type = 'cartesianAxis'),
        n
      );
    })(hL),
    gL = {
      splitLine: function (t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank()) {
          var o = n.getModel('splitLine'),
            a = o.getModel('lineStyle'),
            s = a.get('color');
          s = M(s) ? s : [s];
          for (
            var l = i.coordinateSystem.getRect(),
              u = r.isHorizontal(),
              h = 0,
              p = r.getTicksCoords({ tickModel: o }),
              d = [],
              f = [],
              g = a.getLineStyle(),
              v = 0;
            v < p.length;
            v++
          ) {
            var y = r.toGlobalCoord(p[v].coord);
            u
              ? ((d[0] = y), (d[1] = l.y), (f[0] = y), (f[1] = l.y + l.height))
              : ((d[0] = l.x), (d[1] = y), (f[0] = l.x + l.width), (f[1] = y));
            var m = h++ % s.length,
              _ = p[v].tickValue;
            e.add(
              new TM({
                anid: null != _ ? 'line_' + p[v].tickValue : null,
                subPixelOptimize: !0,
                autoBatch: !0,
                shape: { x1: d[0], y1: d[1], x2: f[0], y2: f[1] },
                style: c({ stroke: s[m] }, g),
                silent: !0,
              }),
            );
          }
        }
      },
      minorSplitLine: function (t, e, n, i) {
        var r = n.axis,
          o = n.getModel('minorSplitLine'),
          a = o.getModel('lineStyle'),
          s = i.coordinateSystem.getRect(),
          l = r.isHorizontal(),
          u = r.getMinorTicksCoords();
        if (u.length)
          for (var h = [], c = [], p = a.getLineStyle(), d = 0; d < u.length; d++)
            for (var f = 0; f < u[d].length; f++) {
              var g = r.toGlobalCoord(u[d][f].coord);
              l
                ? ((h[0] = g), (h[1] = s.y), (c[0] = g), (c[1] = s.y + s.height))
                : ((h[0] = s.x), (h[1] = g), (c[0] = s.x + s.width), (c[1] = g)),
                e.add(
                  new TM({
                    anid: 'minor_line_' + u[d][f].tickValue,
                    subPixelOptimize: !0,
                    autoBatch: !0,
                    shape: { x1: h[0], y1: h[1], x2: c[0], y2: c[1] },
                    style: p,
                    silent: !0,
                  }),
                );
            }
      },
      splitArea: function (t, e, n, i) {
        Vv(t, e, n, i);
      },
    },
    vL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return e(n, t), (n.type = 'xAxis'), n;
    })(fL),
    yL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = vL.type), e;
      }
      return e(n, t), (n.type = 'yAxis'), n;
    })(fL),
    mL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = 'grid'), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t) {
          this.group.removeAll(),
            t.get('show') &&
              this.group.add(
                new fS({
                  shape: t.coordinateSystem.getRect(),
                  style: c({ fill: t.get('backgroundColor') }, t.getItemStyle()),
                  silent: !0,
                  z2: -1,
                }),
              );
        }),
        (n.type = 'grid'),
        n
      );
    })(oI),
    _L = { offset: 0 };
  Yd(Gv);
  var xL = { color: 'fill', borderColor: 'stroke' },
    wL = { symbol: 1, symbolSize: 1, symbolKeepAspect: 1, legendIcon: 1, visualMeta: 1, liftZ: 1, decal: 1 },
    bL = Dr(),
    SL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.optionUpdated = function () {
          (this.currentZLevel = this.get('zlevel', !0)), (this.currentZ = this.get('z', !0));
        }),
        (n.prototype.getInitialData = function () {
          return Yp(null, this);
        }),
        (n.prototype.getDataParams = function (e, n, i) {
          var r = t.prototype.getDataParams.call(this, e, n);
          return i && (r.info = bL(i).info), r;
        }),
        (n.type = 'series.custom'),
        (n.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
        (n.defaultOption = { coordinateSystem: 'cartesian2d', z: 2, legendHoverLink: !0, clip: !1 }),
        n
      );
    })(rI),
    ML = { position: ['x', 'y'], scale: ['scaleX', 'scaleY'], origin: ['originX', 'originY'] },
    TL = w(ML),
    CL =
      (m(
        bw,
        function (t, e) {
          return (t[e] = 1), t;
        },
        {},
      ),
      bw.join(', '),
      ['', 'style', 'shape', 'extra']),
    IL = Dr(),
    DL = {},
    kL = {
      setTransform: function (t, e) {
        return (DL.el[t] = e), this;
      },
      getTransform: function (t) {
        return DL.el[t];
      },
      setShape: function (t, e) {
        var n = DL.el,
          i = n.shape || (n.shape = {});
        return (i[t] = e), n.dirtyShape && n.dirtyShape(), this;
      },
      getShape: function (t) {
        var e = DL.el.shape;
        return e ? e[t] : void 0;
      },
      setStyle: function (t, e) {
        var n = DL.el,
          i = n.style;
        return i && ((i[t] = e), n.dirtyStyle && n.dirtyStyle()), this;
      },
      getStyle: function (t) {
        var e = DL.el.style;
        return e ? e[t] : void 0;
      },
      setExtra: function (t, e) {
        var n = DL.el.extra || (DL.el.extra = {});
        return (n[t] = e), this;
      },
      getExtra: function (t) {
        var e = DL.el.extra;
        return e ? e[t] : void 0;
      },
    },
    AL = Dr(),
    PL = ['percent', 'easing', 'shape', 'style', 'extra'],
    LL = 'emphasis',
    OL = 'normal',
    RL = 'blur',
    BL = 'select',
    zL = [OL, LL, RL, BL],
    EL = { normal: ['itemStyle'], emphasis: [LL, 'itemStyle'], blur: [RL, 'itemStyle'], select: [BL, 'itemStyle'] },
    NL = { normal: ['label'], emphasis: [LL, 'label'], blur: [RL, 'label'], select: [BL, 'label'] },
    FL = ['x', 'y'],
    VL = 'e\x00\x00',
    HL = { normal: {}, emphasis: {}, blur: {}, select: {} },
    WL = { cartesian2d: Xv, geo: Zv, single: jv, polar: $v, calendar: Qv },
    GL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n, i) {
          this._progressiveEls = null;
          var r = this._data,
            o = t.getData(),
            a = this.group,
            s = ky(t, o, e, n);
          r || a.removeAll(),
            o
              .diff(r)
              .add(function (e) {
                Py(n, null, e, s(e, i), t, a, o);
              })
              .remove(function (e) {
                var n = r.getItemGraphicEl(e);
                sy(n, bL(n).option, t);
              })
              .update(function (e, l) {
                var u = r.getItemGraphicEl(l);
                Py(n, u, e, s(e, i), t, a, o);
              })
              .execute();
          var l = t.get('clip', !0) ? Jf(t.coordinateSystem, !1, t) : null;
          l ? a.setClipPath(l) : a.removeClipPath(), (this._data = o);
        }),
        (n.prototype.incrementalPrepareRender = function () {
          this.group.removeAll(), (this._data = null);
        }),
        (n.prototype.incrementalRender = function (t, e, n, i, r) {
          function o(t) {
            t.isGroup || ((t.incremental = !0), (t.ensureState('emphasis').hoverLayer = !0));
          }
          for (var a = e.getData(), s = ky(e, a, n, i), l = (this._progressiveEls = []), u = t.start; u < t.end; u++) {
            var h = Py(null, null, u, s(u, r), e, this.group, a);
            h && (h.traverse(o), l.push(h));
          }
        }),
        (n.prototype.eachRendered = function (t) {
          zs(this._progressiveEls || this.group, t);
        }),
        (n.prototype.filterForExposedEvent = function (t, e, n) {
          var i = e.element;
          if (null == i || n.name === i) return !0;
          for (; (n = n.__hostTarget || n.parent) && n !== this.group; ) if (n.name === i) return !0;
          return !1;
        }),
        (n.type = 'custom'),
        n
      );
    })(lI);
  Yd(Yy), Yd(Wv);
  var UL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.layoutMode = { type: 'box', ignoreSize: !0 }), e;
      }
      return (
        e(n, t),
        (n.type = 'title'),
        (n.defaultOption = {
          z: 6,
          show: !0,
          text: '',
          target: 'blank',
          subtext: '',
          subtarget: 'blank',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 5,
          itemGap: 10,
          textStyle: { fontSize: 18, fontWeight: 'bold', color: '#464646' },
          subtextStyle: { fontSize: 12, color: '#6E7079' },
        }),
        n
      );
    })(HT),
    XL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n) {
          if ((this.group.removeAll(), t.get('show'))) {
            var i = this.group,
              r = t.getModel('textStyle'),
              o = t.getModel('subtextStyle'),
              a = t.get('textAlign'),
              s = N(t.get('textBaseline'), t.get('textVerticalAlign')),
              l = new mS({ style: Hs(r, { text: t.get('text'), fill: r.getTextColor() }, { disableBox: !0 }), z2: 10 }),
              u = l.getBoundingRect(),
              h = t.get('subtext'),
              c = new mS({
                style: Hs(
                  o,
                  { text: h, fill: o.getTextColor(), y: u.height + t.get('itemGap'), verticalAlign: 'top' },
                  { disableBox: !0 },
                ),
                z2: 10,
              }),
              p = t.get('link'),
              d = t.get('sublink'),
              f = t.get('triggerEvent', !0);
            (l.silent = !p && !f),
              (c.silent = !d && !f),
              p &&
                l.on('click', function () {
                  Bl(p, '_' + t.get('target'));
                }),
              d &&
                c.on('click', function () {
                  Bl(d, '_' + t.get('subtarget'));
                }),
              (bS(l).eventData = bS(c).eventData =
                f ? { componentType: 'title', componentIndex: t.componentIndex } : null),
              i.add(l),
              h && i.add(c);
            var g = i.getBoundingRect(),
              v = t.getBoxLayoutParams();
            (v.width = g.width), (v.height = g.height);
            var y = El(v, { width: n.getWidth(), height: n.getHeight() }, t.get('padding'));
            a ||
              ((a = t.get('left') || t.get('right')),
              'middle' === a && (a = 'center'),
              'right' === a ? (y.x += y.width) : 'center' === a && (y.x += y.width / 2)),
              s ||
                ((s = t.get('top') || t.get('bottom')),
                'center' === s && (s = 'middle'),
                'bottom' === s ? (y.y += y.height) : 'middle' === s && (y.y += y.height / 2),
                (s = s || 'top')),
              (i.x = y.x),
              (i.y = y.y),
              i.markRedraw();
            var m = { align: a, verticalAlign: s };
            l.setStyle(m), c.setStyle(m), (g = i.getBoundingRect());
            var _ = y.margin,
              x = t.getItemStyle(['color', 'opacity']);
            x.fill = t.get('backgroundColor');
            var w = new fS({
              shape: {
                x: g.x - _[3],
                y: g.y - _[0],
                width: g.width + _[1] + _[3],
                height: g.height + _[0] + _[2],
                r: t.get('borderRadius'),
              },
              style: x,
              subPixelOptimize: !0,
              silent: !0,
            });
            i.add(w);
          }
        }),
        (n.type = 'title'),
        n
      );
    })(oI);
  Yd(Zy);
  var YL = function (t, e) {
      return 'all' === e
        ? { type: 'all', title: t.getLocaleModel().get(['legend', 'selector', 'all']) }
        : 'inverse' === e
        ? { type: 'inverse', title: t.getLocaleModel().get(['legend', 'selector', 'inverse']) }
        : void 0;
    },
    ZL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.layoutMode = { type: 'box', ignoreSize: !0 }), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n) {
          this.mergeDefaultAndTheme(t, n), (t.selected = t.selected || {}), this._updateSelector(t);
        }),
        (n.prototype.mergeOption = function (e, n) {
          t.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
        }),
        (n.prototype._updateSelector = function (t) {
          var e = t.selector,
            n = this.ecModel;
          e === !0 && (e = t.selector = ['all', 'inverse']),
            M(e) &&
              v(e, function (t, i) {
                C(t) && (t = { type: t }), (e[i] = l(t, YL(n, t.type)));
              });
        }),
        (n.prototype.optionUpdated = function () {
          this._updateData(this.ecModel);
          var t = this._data;
          if (t[0] && 'single' === this.get('selectedMode')) {
            for (var e = !1, n = 0; n < t.length; n++) {
              var i = t[n].get('name');
              if (this.isSelected(i)) {
                this.select(i), (e = !0);
                break;
              }
            }
            !e && this.select(t[0].get('name'));
          }
        }),
        (n.prototype._updateData = function (t) {
          var e = [],
            n = [];
          t.eachRawSeries(function (i) {
            var r = i.name;
            n.push(r);
            var o;
            if (i.legendVisualProvider) {
              var a = i.legendVisualProvider,
                s = a.getAllNames();
              t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? (e = e.concat(s)) : (o = !0);
            } else o = !0;
            o && Sr(i) && e.push(i.name);
          }),
            (this._availableNames = n);
          var i = this.get('data') || e,
            r = y(
              i,
              function (t) {
                return (C(t) || D(t)) && (t = { name: t }), new cT(t, this, this.ecModel);
              },
              this,
            );
          this._data = r;
        }),
        (n.prototype.getData = function () {
          return this._data;
        }),
        (n.prototype.select = function (t) {
          var e = this.option.selected,
            n = this.get('selectedMode');
          if ('single' === n) {
            var i = this._data;
            v(i, function (t) {
              e[t.get('name')] = !1;
            });
          }
          e[t] = !0;
        }),
        (n.prototype.unSelect = function (t) {
          'single' !== this.get('selectedMode') && (this.option.selected[t] = !1);
        }),
        (n.prototype.toggleSelected = function (t) {
          var e = this.option.selected;
          e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? 'unSelect' : 'select'](t);
        }),
        (n.prototype.allSelect = function () {
          var t = this._data,
            e = this.option.selected;
          v(t, function (t) {
            e[t.get('name', !0)] = !0;
          });
        }),
        (n.prototype.inverseSelect = function () {
          var t = this._data,
            e = this.option.selected;
          v(t, function (t) {
            var n = t.get('name', !0);
            e.hasOwnProperty(n) || (e[n] = !0), (e[n] = !e[n]);
          });
        }),
        (n.prototype.isSelected = function (t) {
          var e = this.option.selected;
          return !(e.hasOwnProperty(t) && !e[t]) && p(this._availableNames, t) >= 0;
        }),
        (n.prototype.getOrient = function () {
          return 'vertical' === this.get('orient') ? { index: 1, name: 'vertical' } : { index: 0, name: 'horizontal' };
        }),
        (n.type = 'legend.plain'),
        (n.dependencies = ['series']),
        (n.defaultOption = {
          z: 4,
          show: !0,
          orient: 'horizontal',
          left: 'center',
          top: 0,
          align: 'auto',
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderRadius: 0,
          borderWidth: 0,
          padding: 5,
          itemGap: 10,
          itemWidth: 25,
          itemHeight: 14,
          symbolRotate: 'inherit',
          symbolKeepAspect: !0,
          inactiveColor: '#ccc',
          inactiveBorderColor: '#ccc',
          inactiveBorderWidth: 'auto',
          itemStyle: {
            color: 'inherit',
            opacity: 'inherit',
            borderColor: 'inherit',
            borderWidth: 'auto',
            borderCap: 'inherit',
            borderJoin: 'inherit',
            borderDashOffset: 'inherit',
            borderMiterLimit: 'inherit',
          },
          lineStyle: {
            width: 'auto',
            color: 'inherit',
            inactiveColor: '#ccc',
            inactiveWidth: 2,
            opacity: 'inherit',
            type: 'inherit',
            cap: 'inherit',
            join: 'inherit',
            dashOffset: 'inherit',
            miterLimit: 'inherit',
          },
          textStyle: { color: '#333' },
          selectedMode: !0,
          selector: !1,
          selectorLabel: {
            show: !0,
            borderRadius: 10,
            padding: [3, 5, 3, 5],
            fontSize: 12,
            fontFamily: 'sans-serif',
            color: '#666',
            borderWidth: 1,
            borderColor: '#666',
          },
          emphasis: { selectorLabel: { show: !0, color: '#eee', backgroundColor: '#666' } },
          selectorPosition: 'auto',
          selectorItemGap: 7,
          selectorButtonGap: 10,
          tooltip: { show: !1 },
        }),
        n
      );
    })(HT),
    qL = S,
    jL = v,
    KL = Vw,
    $L = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.newlineDisabled = !1), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function () {
          this.group.add((this._contentGroup = new KL())),
            this.group.add((this._selectorGroup = new KL())),
            (this._isFirstRender = !0);
        }),
        (n.prototype.getContentGroup = function () {
          return this._contentGroup;
        }),
        (n.prototype.getSelectorGroup = function () {
          return this._selectorGroup;
        }),
        (n.prototype.render = function (t, e, n) {
          var i = this._isFirstRender;
          if (((this._isFirstRender = !1), this.resetInner(), t.get('show', !0))) {
            var r = t.get('align'),
              o = t.get('orient');
            (r && 'auto' !== r) || (r = 'right' === t.get('left') && 'vertical' === o ? 'right' : 'left');
            var a = t.get('selector', !0),
              s = t.get('selectorPosition', !0);
            !a || (s && 'auto' !== s) || (s = 'horizontal' === o ? 'end' : 'start'),
              this.renderInner(r, t, e, n, a, o, s);
            var l = t.getBoxLayoutParams(),
              u = { width: n.getWidth(), height: n.getHeight() },
              h = t.get('padding'),
              p = El(l, u, h),
              d = this.layoutInner(t, r, p, i, a, s),
              f = El(c({ width: d.width, height: d.height }, l), u, h);
            (this.group.x = f.x - d.x),
              (this.group.y = f.y - d.y),
              this.group.markRedraw(),
              this.group.add((this._backgroundEl = qy(d, t)));
          }
        }),
        (n.prototype.resetInner = function () {
          this.getContentGroup().removeAll(),
            this._backgroundEl && this.group.remove(this._backgroundEl),
            this.getSelectorGroup().removeAll();
        }),
        (n.prototype.renderInner = function (t, e, n, i, r, o, a) {
          var s = this.getContentGroup(),
            l = Y(),
            u = e.get('selectedMode'),
            c = [];
          n.eachRawSeries(function (t) {
            !t.get('legendHoverLink') && c.push(t.id);
          }),
            jL(
              e.getData(),
              function (r, o) {
                var a = r.get('name');
                if (!this.newlineDisabled && ('' === a || '\n' === a)) {
                  var p = new KL();
                  return (p.newline = !0), void s.add(p);
                }
                var d = n.getSeriesByName(a)[0];
                if (!l.get(a))
                  if (d) {
                    var f = d.getData(),
                      g = f.getVisual('legendLineStyle') || {},
                      v = f.getVisual('legendIcon'),
                      y = f.getVisual('style'),
                      m = this._createItem(d, a, o, r, e, t, g, y, v, u, i);
                    m
                      .on('click', qL($y, a, null, i, c))
                      .on('mouseover', qL(Jy, d.name, null, i, c))
                      .on('mouseout', qL(tm, d.name, null, i, c)),
                      l.set(a, !0);
                  } else
                    n.eachRawSeries(function (n) {
                      if (!l.get(a) && n.legendVisualProvider) {
                        var s = n.legendVisualProvider;
                        if (!s.containName(a)) return;
                        var p = s.indexOfName(a),
                          d = s.getItemVisual(p, 'style'),
                          f = s.getItemVisual(p, 'legendIcon'),
                          g = Sn(d.fill);
                        g && 0 === g[3] && ((g[3] = 0.2), (d = h(h({}, d), { fill: Ln(g, 'rgba') })));
                        var v = this._createItem(n, a, o, r, e, t, {}, d, f, u, i);
                        v
                          .on('click', qL($y, null, a, i, c))
                          .on('mouseover', qL(Jy, null, a, i, c))
                          .on('mouseout', qL(tm, null, a, i, c)),
                          l.set(a, !0);
                      }
                    }, this);
              },
              this,
            ),
            r && this._createSelector(r, e, i, o, a);
        }),
        (n.prototype._createSelector = function (t, e, n) {
          var i = this.getSelectorGroup();
          jL(t, function (t) {
            var r = t.type,
              o = new mS({
                style: { x: 0, y: 0, align: 'center', verticalAlign: 'middle' },
                onclick: function () {
                  n.dispatchAction({ type: 'all' === r ? 'legendAllSelect' : 'legendInverseSelect' });
                },
              });
            i.add(o);
            var a = e.getModel('selectorLabel'),
              s = e.getModel(['emphasis', 'selectorLabel']);
            Fs(o, { normal: a, emphasis: s }, { defaultText: t.title }), Ia(o);
          });
        }),
        (n.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
          var c = t.visualDrawType,
            p = r.get('itemWidth'),
            d = r.get('itemHeight'),
            f = r.isSelected(e),
            g = i.get('symbolRotate'),
            v = i.get('symbolKeepAspect'),
            y = i.get('icon');
          l = y || l || 'roundRect';
          var m = jy(l, i, a, s, c, f, h),
            _ = new KL(),
            x = i.getModel('textStyle');
          if (!T(t.getLegendIcon) || (y && 'inherit' !== y)) {
            var w =
              'inherit' === y && t.getData().getVisual('symbol')
                ? 'inherit' === g
                  ? t.getData().getVisual('symbolRotate')
                  : g
                : 0;
            _.add(
              Ky({
                itemWidth: p,
                itemHeight: d,
                icon: l,
                iconRotate: w,
                itemStyle: m.itemStyle,
                lineStyle: m.lineStyle,
                symbolKeepAspect: v,
              }),
            );
          } else
            _.add(
              t.getLegendIcon({
                itemWidth: p,
                itemHeight: d,
                icon: l,
                iconRotate: g,
                itemStyle: m.itemStyle,
                lineStyle: m.lineStyle,
                symbolKeepAspect: v,
              }),
            );
          var b = 'left' === o ? p + 5 : -5,
            S = o,
            M = r.get('formatter'),
            I = e;
          C(M) && M ? (I = M.replace('{name}', null != e ? e : '')) : T(M) && (I = M(e));
          var D = i.get('inactiveColor');
          _.add(
            new mS({
              style: Hs(x, {
                text: I,
                x: b,
                y: d / 2,
                fill: f ? x.getTextColor() : D,
                align: S,
                verticalAlign: 'middle',
              }),
            }),
          );
          var k = new fS({ shape: _.getBoundingRect(), invisible: !0 }),
            A = i.getModel('tooltip');
          return (
            A.get('show') && Rs({ el: k, componentModel: r, itemName: e, itemTooltipOption: A.option }),
            _.add(k),
            _.eachChild(function (t) {
              t.silent = !0;
            }),
            (k.silent = !u),
            this.getContentGroup().add(_),
            Ia(_),
            (_.__legendDataIndex = n),
            _
          );
        }),
        (n.prototype.layoutInner = function (t, e, n, i, r, o) {
          var a = this.getContentGroup(),
            s = this.getSelectorGroup();
          FT(t.get('orient'), a, t.get('itemGap'), n.width, n.height);
          var l = a.getBoundingRect(),
            u = [-l.x, -l.y];
          if ((s.markRedraw(), a.markRedraw(), r)) {
            FT('horizontal', s, t.get('selectorItemGap', !0));
            var h = s.getBoundingRect(),
              c = [-h.x, -h.y],
              p = t.get('selectorButtonGap', !0),
              d = t.getOrient().index,
              f = 0 === d ? 'width' : 'height',
              g = 0 === d ? 'height' : 'width',
              v = 0 === d ? 'y' : 'x';
            'end' === o ? (c[d] += l[f] + p) : (u[d] += h[f] + p),
              (c[1 - d] += l[g] / 2 - h[g] / 2),
              (s.x = c[0]),
              (s.y = c[1]),
              (a.x = u[0]),
              (a.y = u[1]);
            var y = { x: 0, y: 0 };
            return (y[f] = l[f] + p + h[f]), (y[g] = Math.max(l[g], h[g])), (y[v] = Math.min(0, h[v] + c[1 - d])), y;
          }
          return (a.x = u[0]), (a.y = u[1]), this.group.getBoundingRect();
        }),
        (n.prototype.remove = function () {
          this.getContentGroup().removeAll(), (this._isFirstRender = !0);
        }),
        (n.type = 'legend.plain'),
        n
      );
    })(oI),
    QL = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.setScrollDataIndex = function (t) {
          this.option.scrollDataIndex = t;
        }),
        (n.prototype.init = function (e, n, i) {
          var r = Vl(e);
          t.prototype.init.call(this, e, n, i), om(this, e, r);
        }),
        (n.prototype.mergeOption = function (e, n) {
          t.prototype.mergeOption.call(this, e, n), om(this, this.option, e);
        }),
        (n.type = 'legend.scroll'),
        (n.defaultOption = Qs(ZL.defaultOption, {
          scrollDataIndex: 0,
          pageButtonItemGap: 5,
          pageButtonGap: null,
          pageButtonPosition: 'end',
          pageFormatter: '{current}/{total}',
          pageIcons: {
            horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
            vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'],
          },
          pageIconColor: '#2f4554',
          pageIconInactiveColor: '#aaa',
          pageIconSize: 15,
          pageTextStyle: { color: '#333' },
          animationDurationUpdate: 800,
        })),
        n
      );
    })(ZL),
    JL = Vw,
    tO = ['width', 'height'],
    eO = ['x', 'y'],
    nO = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), (e.newlineDisabled = !0), (e._currentIndex = 0), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function () {
          t.prototype.init.call(this),
            this.group.add((this._containerGroup = new JL())),
            this._containerGroup.add(this.getContentGroup()),
            this.group.add((this._controllerGroup = new JL()));
        }),
        (n.prototype.resetInner = function () {
          t.prototype.resetInner.call(this),
            this._controllerGroup.removeAll(),
            this._containerGroup.removeClipPath(),
            (this._containerGroup.__rectSize = null);
        }),
        (n.prototype.renderInner = function (e, n, i, r, o, a, s) {
          function l(t, e) {
            var i = t + 'DataIndex',
              o = ks(
                n.get('pageIcons', !0)[n.getOrient().name][e],
                { onclick: z_(u._pageGo, u, i, n, r) },
                { x: -p[0] / 2, y: -p[1] / 2, width: p[0], height: p[1] },
              );
            (o.name = t), h.add(o);
          }
          var u = this;
          t.prototype.renderInner.call(this, e, n, i, r, o, a, s);
          var h = this._controllerGroup,
            c = n.get('pageIconSize', !0),
            p = M(c) ? c : [c, c];
          l('pagePrev', 0);
          var d = n.getModel('pageTextStyle');
          h.add(
            new mS({
              name: 'pageText',
              style: {
                text: 'xx/xx',
                fill: d.getTextColor(),
                font: d.getFont(),
                verticalAlign: 'middle',
                align: 'center',
              },
              silent: !0,
            }),
          ),
            l('pageNext', 1);
        }),
        (n.prototype.layoutInner = function (t, e, n, i, r, o) {
          var a = this.getSelectorGroup(),
            l = t.getOrient().index,
            u = tO[l],
            h = eO[l],
            c = tO[1 - l],
            p = eO[1 - l];
          r && FT('horizontal', a, t.get('selectorItemGap', !0));
          var d = t.get('selectorButtonGap', !0),
            f = a.getBoundingRect(),
            g = [-f.x, -f.y],
            v = s(n);
          r && (v[u] = n[u] - f[u] - d);
          var y = this._layoutContentAndController(t, i, v, l, u, c, p, h);
          if (r) {
            if ('end' === o) g[l] += y[u] + d;
            else {
              var m = f[u] + d;
              (g[l] -= m), (y[h] -= m);
            }
            (y[u] += f[u] + d),
              (g[1 - l] += y[p] + y[c] / 2 - f[c] / 2),
              (y[c] = Math.max(y[c], f[c])),
              (y[p] = Math.min(y[p], f[p] + g[1 - l])),
              (a.x = g[0]),
              (a.y = g[1]),
              a.markRedraw();
          }
          return y;
        }),
        (n.prototype._layoutContentAndController = function (t, e, n, i, r, o, a, s) {
          var l = this.getContentGroup(),
            u = this._containerGroup,
            h = this._controllerGroup;
          FT(t.get('orient'), l, t.get('itemGap'), i ? n.width : null, i ? null : n.height),
            FT('horizontal', h, t.get('pageButtonItemGap', !0));
          var c = l.getBoundingRect(),
            p = h.getBoundingRect(),
            d = (this._showController = c[r] > n[r]),
            f = [-c.x, -c.y];
          e || (f[i] = l[s]);
          var g = [0, 0],
            v = [-p.x, -p.y],
            y = N(t.get('pageButtonGap', !0), t.get('itemGap', !0));
          if (d) {
            var m = t.get('pageButtonPosition', !0);
            'end' === m ? (v[i] += n[r] - p[r]) : (g[i] += p[r] + y);
          }
          (v[1 - i] += c[o] / 2 - p[o] / 2), l.setPosition(f), u.setPosition(g), h.setPosition(v);
          var _ = { x: 0, y: 0 };
          if (
            ((_[r] = d ? n[r] : c[r]),
            (_[o] = Math.max(c[o], p[o])),
            (_[a] = Math.min(0, p[a] + v[1 - i])),
            (u.__rectSize = n[r]),
            d)
          ) {
            var x = { x: 0, y: 0 };
            (x[r] = Math.max(n[r] - p[r] - y, 0)),
              (x[o] = _[o]),
              u.setClipPath(new fS({ shape: x })),
              (u.__rectSize = x[r]);
          } else
            h.eachChild(function (t) {
              t.attr({ invisible: !0, silent: !0 });
            });
          var w = this._getPageInfo(t);
          return (
            null != w.pageIndex && rs(l, { x: w.contentPosition[0], y: w.contentPosition[1] }, d ? t : null),
            this._updatePageInfoView(t, w),
            _
          );
        }),
        (n.prototype._pageGo = function (t, e, n) {
          var i = this._getPageInfo(e)[t];
          null != i && n.dispatchAction({ type: 'legendScroll', scrollDataIndex: i, legendId: e.id });
        }),
        (n.prototype._updatePageInfoView = function (t, e) {
          var n = this._controllerGroup;
          v(['pagePrev', 'pageNext'], function (i) {
            var r = i + 'DataIndex',
              o = null != e[r],
              a = n.childOfName(i);
            a &&
              (a.setStyle('fill', o ? t.get('pageIconColor', !0) : t.get('pageIconInactiveColor', !0)),
              (a.cursor = o ? 'pointer' : 'default'));
          });
          var i = n.childOfName('pageText'),
            r = t.get('pageFormatter'),
            o = e.pageIndex,
            a = null != o ? o + 1 : 0,
            s = e.pageCount;
          i &&
            r &&
            i.setStyle(
              'text',
              C(r)
                ? r.replace('{current}', null == a ? '' : a + '').replace('{total}', null == s ? '' : s + '')
                : r({ current: a, total: s }),
            );
        }),
        (n.prototype._getPageInfo = function (t) {
          function e(t) {
            if (t) {
              var e = t.getBoundingRect(),
                n = e[l] + t[l];
              return { s: n, e: n + e[s], i: t.__legendDataIndex };
            }
          }
          function n(t, e) {
            return t.e >= e && t.s <= e + o;
          }
          var i = t.get('scrollDataIndex', !0),
            r = this.getContentGroup(),
            o = this._containerGroup.__rectSize,
            a = t.getOrient().index,
            s = tO[a],
            l = eO[a],
            u = this._findTargetItemIndex(i),
            h = r.children(),
            c = h[u],
            p = h.length,
            d = p ? 1 : 0,
            f = {
              contentPosition: [r.x, r.y],
              pageCount: d,
              pageIndex: d - 1,
              pagePrevDataIndex: null,
              pageNextDataIndex: null,
            };
          if (!c) return f;
          var g = e(c);
          f.contentPosition[a] = -g.s;
          for (var v = u + 1, y = g, m = g, _ = null; p >= v; ++v)
            (_ = e(h[v])),
              ((!_ && m.e > y.s + o) || (_ && !n(_, y.s))) &&
                ((y = m.i > y.i ? m : _),
                y && (null == f.pageNextDataIndex && (f.pageNextDataIndex = y.i), ++f.pageCount)),
              (m = _);
          for (var v = u - 1, y = g, m = g, _ = null; v >= -1; --v)
            (_ = e(h[v])),
              (_ && n(m, _.s)) ||
                !(y.i < m.i) ||
                ((m = y), null == f.pagePrevDataIndex && (f.pagePrevDataIndex = y.i), ++f.pageCount, ++f.pageIndex),
              (y = _);
          return f;
        }),
        (n.prototype._findTargetItemIndex = function (t) {
          if (!this._showController) return 0;
          var e,
            n,
            i = this.getContentGroup();
          return (
            i.eachChild(function (i, r) {
              var o = i.__legendDataIndex;
              null == n && null != o && (n = r), o === t && (e = r);
            }),
            null != e ? e : n
          );
        }),
        (n.type = 'legend.scroll'),
        n
      );
    })($L);
  Yd(sm);
  var iO = Dr(),
    rO = s,
    oO = z_,
    aO = (function () {
      function t() {
        (this._dragging = !1), (this.animationThreshold = 15);
      }
      return (
        (t.prototype.render = function (t, e, n, i) {
          var r = e.get('value'),
            o = e.get('status');
          if (
            ((this._axisModel = t),
            (this._axisPointerModel = e),
            (this._api = n),
            i || this._lastValue !== r || this._lastStatus !== o)
          ) {
            (this._lastValue = r), (this._lastStatus = o);
            var a = this._group,
              s = this._handle;
            if (!o || 'hide' === o) return a && a.hide(), void (s && s.hide());
            a && a.show(), s && s.show();
            var l = {};
            this.makeElOption(l, r, t, e, n);
            var u = l.graphicKey;
            u !== this._lastGraphicKey && this.clear(n), (this._lastGraphicKey = u);
            var h = (this._moveAnimation = this.determineAnimation(t, e));
            if (a) {
              var c = S(lm, e, h);
              this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e);
            } else
              (a = this._group = new Vw()),
                this.createPointerEl(a, l, t, e),
                this.createLabelEl(a, l, t, e),
                n.getZr().add(a);
            pm(a, e, !0), this._renderHandle(r);
          }
        }),
        (t.prototype.remove = function (t) {
          this.clear(t);
        }),
        (t.prototype.dispose = function (t) {
          this.clear(t);
        }),
        (t.prototype.determineAnimation = function (t, e) {
          var n = e.get('animation'),
            i = t.axis,
            r = 'category' === i.type,
            o = e.get('snap');
          if (!o && !r) return !1;
          if ('auto' === n || null == n) {
            var a = this.animationThreshold;
            if (r && i.getBandWidth() > a) return !0;
            if (o) {
              var s = zv(t).seriesDataCount,
                l = i.getExtent();
              return Math.abs(l[0] - l[1]) / s > a;
            }
            return !1;
          }
          return n === !0;
        }),
        (t.prototype.makeElOption = function () {}),
        (t.prototype.createPointerEl = function (t, e) {
          var n = e.pointer;
          if (n) {
            var i = (iO(t).pointerEl = new jM[n.type](rO(e.pointer)));
            t.add(i);
          }
        }),
        (t.prototype.createLabelEl = function (t, e, n, i) {
          if (e.label) {
            var r = (iO(t).labelEl = new mS(rO(e.label)));
            t.add(r), hm(r, i);
          }
        }),
        (t.prototype.updatePointerEl = function (t, e, n) {
          var i = iO(t).pointerEl;
          i && e.pointer && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
        }),
        (t.prototype.updateLabelEl = function (t, e, n, i) {
          var r = iO(t).labelEl;
          r && (r.setStyle(e.label.style), n(r, { x: e.label.x, y: e.label.y }), hm(r, i));
        }),
        (t.prototype._renderHandle = function (t) {
          if (!this._dragging && this.updateHandleTransform) {
            var e = this._axisPointerModel,
              n = this._api.getZr(),
              i = this._handle,
              r = e.getModel('handle'),
              o = e.get('status');
            if (!r.get('show') || !o || 'hide' === o) return i && n.remove(i), void (this._handle = null);
            var a;
            this._handle ||
              ((a = !0),
              (i = this._handle =
                ks(r.get('icon'), {
                  cursor: 'move',
                  draggable: !0,
                  onmousemove: function (t) {
                    ex(t.event);
                  },
                  onmousedown: oO(this._onHandleDragMove, this, 0, 0),
                  drift: oO(this._onHandleDragMove, this),
                  ondragend: oO(this._onHandleDragEnd, this),
                })),
              n.add(i)),
              pm(i, e, !1),
              i.setStyle(
                r.getItemStyle(null, [
                  'color',
                  'borderColor',
                  'borderWidth',
                  'opacity',
                  'shadowColor',
                  'shadowBlur',
                  'shadowOffsetX',
                  'shadowOffsetY',
                ]),
              );
            var s = r.get('size');
            M(s) || (s = [s, s]),
              (i.scaleX = s[0] / 2),
              (i.scaleY = s[1] / 2),
              Wh(this, '_doDispatchAxisPointer', r.get('throttle') || 0, 'fixRate'),
              this._moveHandleToValue(t, a);
          }
        }),
        (t.prototype._moveHandleToValue = function (t, e) {
          lm(
            this._axisPointerModel,
            !e && this._moveAnimation,
            this._handle,
            cm(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)),
          );
        }),
        (t.prototype._onHandleDragMove = function (t, e) {
          var n = this._handle;
          if (n) {
            this._dragging = !0;
            var i = this.updateHandleTransform(cm(n), [t, e], this._axisModel, this._axisPointerModel);
            (this._payloadInfo = i),
              n.stopAnimation(),
              n.attr(cm(i)),
              (iO(n).lastProp = null),
              this._doDispatchAxisPointer();
          }
        }),
        (t.prototype._doDispatchAxisPointer = function () {
          var t = this._handle;
          if (t) {
            var e = this._payloadInfo,
              n = this._axisModel;
            this._api.dispatchAction({
              type: 'updateAxisPointer',
              x: e.cursorPoint[0],
              y: e.cursorPoint[1],
              tooltipOption: e.tooltipOption,
              axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }],
            });
          }
        }),
        (t.prototype._onHandleDragEnd = function () {
          this._dragging = !1;
          var t = this._handle;
          if (t) {
            var e = this._axisPointerModel.get('value');
            this._moveHandleToValue(e), this._api.dispatchAction({ type: 'hideTip' });
          }
        }),
        (t.prototype.clear = function (t) {
          (this._lastValue = null), (this._lastStatus = null);
          var e = t.getZr(),
            n = this._group,
            i = this._handle;
          e &&
            n &&
            ((this._lastGraphicKey = null),
            n && e.remove(n),
            i && e.remove(i),
            (this._group = null),
            (this._handle = null),
            (this._payloadInfo = null)),
            Gh(this, '_doDispatchAxisPointer');
        }),
        (t.prototype.doClear = function () {}),
        (t.prototype.buildLabel = function (t, e, n) {
          return (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
        }),
        t
      );
    })(),
    sO = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.makeElOption = function (t, e, n, i, r) {
          var o = n.axis,
            a = o.grid,
            s = i.get('type'),
            l = wm(a, o).getOtherAxis(o).getGlobalExtent(),
            u = o.toGlobalCoord(o.dataToCoord(e, !0));
          if (s && 'none' !== s) {
            var h = dm(i),
              c = lO[s](o, u, l);
            (c.style = h), (t.graphicKey = c.type), (t.pointer = c);
          }
          var p = pv(a.model, n);
          mm(e, t, p, n, i, r);
        }),
        (n.prototype.getHandleTransform = function (t, e, n) {
          var i = pv(e.axis.grid.model, e, { labelInside: !1 });
          i.labelMargin = n.get(['handle', 'margin']);
          var r = ym(e.axis, t, i);
          return { x: r[0], y: r[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
        }),
        (n.prototype.updateHandleTransform = function (t, e, n) {
          var i = n.axis,
            r = i.grid,
            o = i.getGlobalExtent(!0),
            a = wm(r, i).getOtherAxis(i).getGlobalExtent(),
            s = 'x' === i.dim ? 0 : 1,
            l = [t.x, t.y];
          (l[s] += e[s]), (l[s] = Math.min(o[1], l[s])), (l[s] = Math.max(o[0], l[s]));
          var u = (a[1] + a[0]) / 2,
            h = [u, u];
          h[s] = l[s];
          var c = [{ verticalAlign: 'middle' }, { align: 'center' }];
          return { x: l[0], y: l[1], rotation: t.rotation, cursorPoint: h, tooltipOption: c[s] };
        }),
        n
      );
    })(aO),
    lO = {
      line: function (t, e, n) {
        var i = _m([e, n[0]], [e, n[1]], bm(t));
        return { type: 'Line', subPixelOptimize: !0, shape: i };
      },
      shadow: function (t, e, n) {
        var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];
        return { type: 'Rect', shape: xm([e - i / 2, n[0]], [i, r], bm(t)) };
      },
    },
    uO = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.type = 'axisPointer'),
        (n.defaultOption = {
          show: 'auto',
          z: 50,
          type: 'line',
          snap: !1,
          triggerTooltip: !0,
          value: null,
          status: null,
          link: [],
          animation: null,
          animationDurationUpdate: 200,
          lineStyle: { color: '#B9BEC9', width: 1, type: 'dashed' },
          shadowStyle: { color: 'rgba(210,219,238,0.2)' },
          label: {
            show: !0,
            formatter: null,
            precision: 'auto',
            margin: 3,
            color: '#fff',
            padding: [5, 7, 5, 7],
            backgroundColor: 'auto',
            borderColor: null,
            borderWidth: 0,
            borderRadius: 3,
          },
          handle: {
            show: !1,
            icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
            size: 45,
            margin: 50,
            color: '#333',
            shadowBlur: 3,
            shadowColor: '#aaa',
            shadowOffsetX: 0,
            shadowOffsetY: 2,
            throttle: 40,
          },
        }),
        n
      );
    })(HT),
    hO = Dr(),
    cO = v,
    pO = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n) {
          var i = e.getComponent('tooltip'),
            r = t.get('triggerOn') || (i && i.get('triggerOn')) || 'mousemove|click';
          Sm('axisPointer', n, function (t, e, n) {
            'none' !== r &&
              ('leave' === t || r.indexOf(t) >= 0) &&
              n({ type: 'updateAxisPointer', currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });
          });
        }),
        (n.prototype.remove = function (t, e) {
          km('axisPointer', e);
        }),
        (n.prototype.dispose = function (t, e) {
          km('axisPointer', e);
        }),
        (n.type = 'axisPointer'),
        n
      );
    })(oI),
    dO = Dr(),
    fO = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.type = 'tooltip'),
        (n.dependencies = ['axisPointer']),
        (n.defaultOption = {
          z: 60,
          show: !0,
          showContent: !0,
          trigger: 'item',
          triggerOn: 'mousemove|click',
          alwaysShowContent: !1,
          displayMode: 'single',
          renderMode: 'auto',
          confine: null,
          showDelay: 0,
          hideDelay: 100,
          transitionDuration: 0.4,
          enterable: !1,
          backgroundColor: '#fff',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, .2)',
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          borderRadius: 4,
          borderWidth: 1,
          padding: null,
          extraCssText: '',
          axisPointer: {
            type: 'line',
            axis: 'auto',
            animation: 'auto',
            animationDurationUpdate: 200,
            animationEasingUpdate: 'exponentialOut',
            crossStyle: { color: '#999', width: 1, type: 'dashed', textStyle: {} },
          },
          textStyle: { color: '#666', fontSize: 14 },
        }),
        n
      );
    })(HT),
    gO = Um(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
    vO = Um(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
    yO = Xm(vO, 'transition'),
    mO = Xm(gO, 'transform'),
    _O =
      'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
      (f_.transform3dSupported ? 'will-change:transform;' : ''),
    xO = (function () {
      function t(t, e, n) {
        if (
          ((this._show = !1),
          (this._styleCoord = [0, 0, 0, 0]),
          (this._enterable = !0),
          (this._firstShow = !0),
          (this._longHide = !0),
          f_.wxa)
        )
          return null;
        var i = document.createElement('div');
        (i.domBelongToZr = !0), (this.el = i);
        var r = (this._zr = e.getZr()),
          o = (this._appendToBody = n && n.appendToBody);
        Jm(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2),
          o ? document.body.appendChild(i) : t.appendChild(i),
          (this._container = t);
        var a = this;
        (i.onmouseenter = function () {
          a._enterable && (clearTimeout(a._hideTimeout), (a._show = !0)), (a._inContent = !0);
        }),
          (i.onmousemove = function (t) {
            if (((t = t || window.event), !a._enterable)) {
              var e = r.handler,
                n = r.painter.getViewportRoot();
              ke(n, t, !0), e.dispatch('mousemove', t);
            }
          }),
          (i.onmouseleave = function () {
            (a._inContent = !1), a._enterable && a._show && a.hideLater(a._hideDelay);
          });
      }
      return (
        (t.prototype.update = function (t) {
          var e = this._container,
            n = Ym(e, 'position'),
            i = e.style;
          'absolute' !== i.position && 'absolute' !== n && (i.position = 'relative');
          var r = t.get('alwaysShowContent');
          r && this._moveIfResized(), (this.el.className = t.get('className') || '');
        }),
        (t.prototype.show = function (t, e) {
          clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
          var n = this.el,
            i = n.style,
            r = this._styleCoord;
          n.innerHTML
            ? (i.cssText =
                _O +
                Qm(t, !this._firstShow, this._longHide) +
                Km(r[0], r[1], !0) +
                ('border-color:' + Rl(e) + ';') +
                (t.get('extraCssText') || '') +
                (';pointer-events:' + (this._enterable ? 'auto' : 'none')))
            : (i.display = 'none'),
            (this._show = !0),
            (this._firstShow = !1),
            (this._longHide = !1);
        }),
        (t.prototype.setContent = function (t, e, n, i, r) {
          var o = this.el;
          if (null == t) return void (o.innerHTML = '');
          var a = '';
          if ((C(r) && 'item' === n.get('trigger') && !Gm(n) && (a = qm(n, i, r)), C(t))) o.innerHTML = t + a;
          else if (t) {
            (o.innerHTML = ''), M(t) || (t = [t]);
            for (var s = 0; s < t.length; s++) L(t[s]) && t[s].parentNode !== o && o.appendChild(t[s]);
            if (a && o.childNodes.length) {
              var l = document.createElement('div');
              (l.innerHTML = a), o.appendChild(l);
            }
          }
        }),
        (t.prototype.setEnterable = function (t) {
          this._enterable = t;
        }),
        (t.prototype.getSize = function () {
          var t = this.el;
          return [t.offsetWidth, t.offsetHeight];
        }),
        (t.prototype.moveTo = function (t, e) {
          var n = this._styleCoord;
          if ((Jm(n, this._zr, this._appendToBody, t, e), null != n[0] && null != n[1])) {
            var i = this.el.style,
              r = Km(n[0], n[1]);
            v(r, function (t) {
              i[t[0]] = t[1];
            });
          }
        }),
        (t.prototype._moveIfResized = function () {
          var t = this._styleCoord[2],
            e = this._styleCoord[3];
          this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
        }),
        (t.prototype.hide = function () {
          var t = this,
            e = this.el.style;
          (e.visibility = 'hidden'),
            (e.opacity = '0'),
            f_.transform3dSupported && (e.willChange = ''),
            (this._show = !1),
            (this._longHideTimeout = setTimeout(function () {
              return (t._longHide = !0);
            }, 500));
        }),
        (t.prototype.hideLater = function (t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(z_(this.hide, this), t)))
              : this.hide());
        }),
        (t.prototype.isShow = function () {
          return this._show;
        }),
        (t.prototype.dispose = function () {
          this.el.parentNode.removeChild(this.el);
        }),
        t
      );
    })(),
    wO = (function () {
      function t(t) {
        (this._show = !1),
          (this._styleCoord = [0, 0, 0, 0]),
          (this._enterable = !0),
          (this._zr = t.getZr()),
          n_(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
      }
      return (
        (t.prototype.update = function (t) {
          var e = t.get('alwaysShowContent');
          e && this._moveIfResized();
        }),
        (t.prototype.show = function () {
          this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), (this._show = !0);
        }),
        (t.prototype.setContent = function (t, e, n, i) {
          var r = this;
          k(t) && sr(''), this.el && this._zr.remove(this.el);
          var o = n.getModel('textStyle');
          (this.el = new mS({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: o.get('textShadowColor'),
              fill: n.get(['textStyle', 'color']),
              padding: Mh(n, 'richText'),
              verticalAlign: 'top',
              align: 'left',
            },
            z: n.get('z'),
          })),
            v(
              ['backgroundColor', 'borderRadius', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
              function (t) {
                r.el.style[t] = n.get(t);
              },
            ),
            v(['textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY'], function (t) {
              r.el.style[t] = o.get(t) || 0;
            }),
            this._zr.add(this.el);
          var a = this;
          this.el.on('mouseover', function () {
            a._enterable && (clearTimeout(a._hideTimeout), (a._show = !0)), (a._inContent = !0);
          }),
            this.el.on('mouseout', function () {
              a._enterable && a._show && a.hideLater(a._hideDelay), (a._inContent = !1);
            });
        }),
        (t.prototype.setEnterable = function (t) {
          this._enterable = t;
        }),
        (t.prototype.getSize = function () {
          var t = this.el,
            e = this.el.getBoundingRect(),
            n = e_(t.style);
          return [e.width + n.left + n.right, e.height + n.top + n.bottom];
        }),
        (t.prototype.moveTo = function (t, e) {
          var n = this.el;
          if (n) {
            var i = this._styleCoord;
            n_(i, this._zr, t, e), (t = i[0]), (e = i[1]);
            var r = n.style,
              o = t_(r.borderWidth || 0),
              a = e_(r);
            (n.x = t + o + a.left), (n.y = e + o + a.top), n.markRedraw();
          }
        }),
        (t.prototype._moveIfResized = function () {
          var t = this._styleCoord[2],
            e = this._styleCoord[3];
          this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
        }),
        (t.prototype.hide = function () {
          this.el && this.el.hide(), (this._show = !1);
        }),
        (t.prototype.hideLater = function (t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(z_(this.hide, this), t)))
              : this.hide());
        }),
        (t.prototype.isShow = function () {
          return this._show;
        }),
        (t.prototype.dispose = function () {
          this._zr.remove(this.el);
        }),
        t
      );
    })(),
    bO = new fS({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
    SO = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e) {
          if (!f_.node && e.getDom()) {
            var n = t.getComponent('tooltip'),
              i = (this._renderMode = Rr(n.get('renderMode')));
            this._tooltipContent =
              'richText' === i ? new wO(e) : new xO(e.getDom(), e, { appendToBody: n.get('appendToBody', !0) });
          }
        }),
        (n.prototype.render = function (t, e, n) {
          if (!f_.node && n.getDom()) {
            this.group.removeAll(),
              (this._tooltipModel = t),
              (this._ecModel = e),
              (this._api = n),
              (this._alwaysShowContent = t.get('alwaysShowContent'));
            var i = this._tooltipContent;
            i.update(t),
              i.setEnterable(t.get('enterable')),
              this._initGlobalListener(),
              this._keepShow(),
              'richText' !== this._renderMode && t.get('transitionDuration')
                ? Wh(this, '_updatePosition', 50, 'fixRate')
                : Gh(this, '_updatePosition');
          }
        }),
        (n.prototype._initGlobalListener = function () {
          var t = this._tooltipModel,
            e = t.get('triggerOn');
          Sm(
            'itemTooltip',
            this._api,
            z_(function (t, n, i) {
              'none' !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : 'leave' === t && this._hide(i));
            }, this),
          );
        }),
        (n.prototype._keepShow = function () {
          var t = this._tooltipModel,
            e = this._ecModel,
            n = this._api,
            i = t.get('triggerOn');
          if (null != this._lastX && null != this._lastY && 'none' !== i && 'click' !== i) {
            var r = this;
            clearTimeout(this._refreshUpdateTimeout),
              (this._refreshUpdateTimeout = setTimeout(function () {
                !n.isDisposed() &&
                  r.manuallyShowTip(t, e, n, { x: r._lastX, y: r._lastY, dataByCoordSys: r._lastDataByCoordSys });
              }));
          }
        }),
        (n.prototype.manuallyShowTip = function (t, e, n, i) {
          if (i.from !== this.uid && !f_.node && n.getDom()) {
            var r = r_(i, n);
            this._ticket = '';
            var o = i.dataByCoordSys,
              a = u_(i, e, n);
            if (a) {
              var s = a.el.getBoundingRect().clone();
              s.applyTransform(a.el.transform),
                this._tryShow(
                  {
                    offsetX: s.x + s.width / 2,
                    offsetY: s.y + s.height / 2,
                    target: a.el,
                    position: i.position,
                    positionDefault: 'bottom',
                  },
                  r,
                );
            } else if (i.tooltip && null != i.x && null != i.y) {
              var l = bO;
              (l.x = i.x),
                (l.y = i.y),
                l.update(),
                (bS(l).tooltipConfig = { name: null, option: i.tooltip }),
                this._tryShow({ offsetX: i.x, offsetY: i.y, target: l }, r);
            } else if (o)
              this._tryShow(
                { offsetX: i.x, offsetY: i.y, position: i.position, dataByCoordSys: o, tooltipOption: i.tooltipOption },
                r,
              );
            else if (null != i.seriesIndex) {
              if (this._manuallyAxisShowTip(t, e, n, i)) return;
              var u = Am(i, e),
                h = u.point[0],
                c = u.point[1];
              null != h &&
                null != c &&
                this._tryShow(
                  { offsetX: h, offsetY: c, target: u.el, position: i.position, positionDefault: 'bottom' },
                  r,
                );
            } else
              null != i.x &&
                null != i.y &&
                (n.dispatchAction({ type: 'updateAxisPointer', x: i.x, y: i.y }),
                this._tryShow(
                  { offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target },
                  r,
                ));
          }
        }),
        (n.prototype.manuallyHideTip = function (t, e, n, i) {
          var r = this._tooltipContent;
          !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get('hideDelay')),
            (this._lastX = this._lastY = this._lastDataByCoordSys = null),
            i.from !== this.uid && this._hide(r_(i, n));
        }),
        (n.prototype._manuallyAxisShowTip = function (t, e, n, i) {
          var r = i.seriesIndex,
            o = i.dataIndex,
            a = e.getComponent('axisPointer').coordSysAxesInfo;
          if (null != r && null != o && null != a) {
            var s = e.getSeriesByIndex(r);
            if (s) {
              var l = s.getData(),
                u = i_([l.getItemModel(o), s, (s.coordinateSystem || {}).model], this._tooltipModel);
              if ('axis' === u.get('trigger'))
                return (
                  n.dispatchAction({ type: 'updateAxisPointer', seriesIndex: r, dataIndex: o, position: i.position }),
                  !0
                );
            }
          }
        }),
        (n.prototype._tryShow = function (t, e) {
          var n = t.target,
            i = this._tooltipModel;
          if (i) {
            (this._lastX = t.offsetX), (this._lastY = t.offsetY);
            var r = t.dataByCoordSys;
            if (r && r.length) this._showAxisTooltip(r, t);
            else if (n) {
              this._lastDataByCoordSys = null;
              var o, a;
              lc(
                n,
                function (t) {
                  return null != bS(t).dataIndex ? ((o = t), !0) : null != bS(t).tooltipConfig ? ((a = t), !0) : void 0;
                },
                !0,
              ),
                o ? this._showSeriesItemTooltip(t, o, e) : a ? this._showComponentItemTooltip(t, a, e) : this._hide(e);
            } else (this._lastDataByCoordSys = null), this._hide(e);
          }
        }),
        (n.prototype._showOrMove = function (t, e) {
          var n = t.get('showDelay');
          (e = z_(e, this)), clearTimeout(this._showTimout), n > 0 ? (this._showTimout = setTimeout(e, n)) : e();
        }),
        (n.prototype._showAxisTooltip = function (t, e) {
          var n = this._ecModel,
            i = this._tooltipModel,
            r = [e.offsetX, e.offsetY],
            o = i_([e.tooltipOption], i),
            a = this._renderMode,
            s = [],
            l = hh('section', { blocks: [], noHeader: !0 }),
            u = [],
            c = new eI();
          v(t, function (t) {
            v(t.dataByAxis, function (t) {
              var e = n.getComponent(t.axisDim + 'Axis', t.axisIndex),
                r = t.value;
              if (e && null != r) {
                var o = vm(r, e.axis, n, t.seriesDataIndices, t.valueLabelOpt),
                  p = hh('section', { header: o, noHeader: !G(o), sortBlocks: !0, blocks: [] });
                l.blocks.push(p),
                  v(t.seriesDataIndices, function (l) {
                    var d = n.getSeriesByIndex(l.seriesIndex),
                      f = l.dataIndexInside,
                      g = d.getDataParams(f);
                    if (!(g.dataIndex < 0)) {
                      (g.axisDim = t.axisDim),
                        (g.axisIndex = t.axisIndex),
                        (g.axisType = t.axisType),
                        (g.axisId = t.axisId),
                        (g.axisValue = zd(e.axis, { value: r })),
                        (g.axisValueLabel = o),
                        (g.marker = c.makeTooltipMarker('item', Rl(g.color), a));
                      var v = Uu(d.formatTooltip(f, !0, null)),
                        y = v.frag;
                      if (y) {
                        var m = i_([d], i).get('valueFormatter');
                        p.blocks.push(m ? h({ valueFormatter: m }, y) : y);
                      }
                      v.text && u.push(v.text), s.push(g);
                    }
                  });
              }
            });
          }),
            l.blocks.reverse(),
            u.reverse();
          var p = e.position,
            d = o.get('order'),
            f = vh(l, c, a, d, n.get('useUTC'), o.get('textStyle'));
          f && u.unshift(f);
          var g = 'richText' === a ? '\n\n' : '<br/>',
            y = u.join(g);
          this._showOrMove(o, function () {
            this._updateContentNotChangedOnAxis(t, s)
              ? this._updatePosition(o, p, r[0], r[1], this._tooltipContent, s)
              : this._showTooltipContent(o, y, s, Math.random() + '', r[0], r[1], p, null, c);
          });
        }),
        (n.prototype._showSeriesItemTooltip = function (t, e, n) {
          var i = this._ecModel,
            r = bS(e),
            o = r.seriesIndex,
            a = i.getSeriesByIndex(o),
            s = r.dataModel || a,
            l = r.dataIndex,
            u = r.dataType,
            c = s.getData(u),
            p = this._renderMode,
            d = t.positionDefault,
            f = i_(
              [c.getItemModel(l), s, a && (a.coordinateSystem || {}).model],
              this._tooltipModel,
              d ? { position: d } : null,
            ),
            g = f.get('trigger');
          if (null == g || 'item' === g) {
            var v = s.getDataParams(l, u),
              y = new eI();
            v.marker = y.makeTooltipMarker('item', Rl(v.color), p);
            var m = Uu(s.formatTooltip(l, !1, u)),
              _ = f.get('order'),
              x = f.get('valueFormatter'),
              w = m.frag,
              b = w ? vh(x ? h({ valueFormatter: x }, w) : w, y, p, _, i.get('useUTC'), f.get('textStyle')) : m.text,
              S = 'item_' + s.name + '_' + l;
            this._showOrMove(f, function () {
              this._showTooltipContent(f, b, v, S, t.offsetX, t.offsetY, t.position, t.target, y);
            }),
              n({ type: 'showTip', dataIndexInside: l, dataIndex: c.getRawIndex(l), seriesIndex: o, from: this.uid });
          }
        }),
        (n.prototype._showComponentItemTooltip = function (t, e, n) {
          var i = bS(e),
            r = i.tooltipConfig,
            o = r.option || {};
          if (C(o)) {
            var a = o;
            o = { content: a, formatter: a };
          }
          var l = [o],
            u = this._ecModel.getComponent(i.componentMainType, i.componentIndex);
          u && l.push(u), l.push({ formatter: o.content });
          var h = t.positionDefault,
            c = i_(l, this._tooltipModel, h ? { position: h } : null),
            p = c.get('content'),
            d = Math.random() + '',
            f = new eI();
          this._showOrMove(c, function () {
            var n = s(c.get('formatterParams') || {});
            this._showTooltipContent(c, p, n, d, t.offsetX, t.offsetY, t.position, e, f);
          }),
            n({ type: 'showTip', from: this.uid });
        }),
        (n.prototype._showTooltipContent = function (t, e, n, i, r, o, a, s, l) {
          if (((this._ticket = ''), t.get('showContent') && t.get('show'))) {
            var u = this._tooltipContent;
            u.setEnterable(t.get('enterable'));
            var h = t.get('formatter');
            a = a || t.get('position');
            var c = e,
              p = this._getNearestPoint([r, o], n, t.get('trigger'), t.get('borderColor')),
              d = p.color;
            if (h)
              if (C(h)) {
                var f = t.ecModel.get('useUTC'),
                  g = M(n) ? n[0] : n,
                  v = g && g.axisType && g.axisType.indexOf('time') >= 0;
                (c = h), v && (c = sl(g.axisValue, c, f)), (c = Al(c, n, !0));
              } else if (T(h)) {
                var y = z_(function (e, i) {
                  e === this._ticket && (u.setContent(i, l, t, d, a), this._updatePosition(t, a, r, o, u, n, s));
                }, this);
                (this._ticket = i), (c = h(n, i, y));
              } else c = h;
            u.setContent(c, l, t, d, a), u.show(t, d), this._updatePosition(t, a, r, o, u, n, s);
          }
        }),
        (n.prototype._getNearestPoint = function (t, e, n, i) {
          return 'axis' === n || M(e)
            ? { color: i || ('html' === this._renderMode ? '#fff' : 'none') }
            : M(e)
            ? void 0
            : { color: i || e.color || e.borderColor };
        }),
        (n.prototype._updatePosition = function (t, e, n, i, r, o, a) {
          var s = this._api.getWidth(),
            l = this._api.getHeight();
          e = e || t.get('position');
          var u = r.getSize(),
            h = t.get('align'),
            c = t.get('verticalAlign'),
            p = a && a.getBoundingRect().clone();
          if (
            (a && p.applyTransform(a.transform),
            T(e) && (e = e([n, i], o, r.el, p, { viewSize: [s, l], contentSize: u.slice() })),
            M(e))
          )
            (n = Vi(e[0], s)), (i = Vi(e[1], l));
          else if (k(e)) {
            var d = e;
            (d.width = u[0]), (d.height = u[1]);
            var f = El(d, { width: s, height: l });
            (n = f.x), (i = f.y), (h = null), (c = null);
          } else if (C(e) && a) {
            var g = s_(e, p, u, t.get('borderWidth'));
            (n = g[0]), (i = g[1]);
          } else {
            var g = o_(n, i, r, s, l, h ? null : 20, c ? null : 20);
            (n = g[0]), (i = g[1]);
          }
          if (
            (h && (n -= l_(h) ? u[0] / 2 : 'right' === h ? u[0] : 0),
            c && (i -= l_(c) ? u[1] / 2 : 'bottom' === c ? u[1] : 0),
            Gm(t))
          ) {
            var g = a_(n, i, r, s, l);
            (n = g[0]), (i = g[1]);
          }
          r.moveTo(n, i);
        }),
        (n.prototype._updateContentNotChangedOnAxis = function (t, e) {
          var n = this._lastDataByCoordSys,
            i = this._cbParamsList,
            r = !!n && n.length === t.length;
          return (
            r &&
              v(n, function (n, o) {
                var a = n.dataByAxis || [],
                  s = t[o] || {},
                  l = s.dataByAxis || [];
                (r = r && a.length === l.length),
                  r &&
                    v(a, function (t, n) {
                      var o = l[n] || {},
                        a = t.seriesDataIndices || [],
                        s = o.seriesDataIndices || [];
                      (r =
                        r &&
                        t.value === o.value &&
                        t.axisType === o.axisType &&
                        t.axisId === o.axisId &&
                        a.length === s.length),
                        r &&
                          v(a, function (t, e) {
                            var n = s[e];
                            r = r && t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex;
                          }),
                        i &&
                          v(t.seriesDataIndices, function (t) {
                            var n = t.seriesIndex,
                              o = e[n],
                              a = i[n];
                            o && a && a.data !== o.data && (r = !1);
                          });
                    });
              }),
            (this._lastDataByCoordSys = t),
            (this._cbParamsList = e),
            !!r
          );
        }),
        (n.prototype._hide = function (t) {
          (this._lastDataByCoordSys = null), t({ type: 'hideTip', from: this.uid });
        }),
        (n.prototype.dispose = function (t, e) {
          !f_.node && e.getDom() && (Gh(this, '_updatePosition'), this._tooltipContent.dispose(), km('itemTooltip', e));
        }),
        (n.type = 'tooltip'),
        n
      );
    })(oI);
  Yd(h_),
    (t.version = lD),
    (t.dependencies = uD),
    (t.PRIORITY = CD),
    (t.init = ep),
    (t.connect = np),
    (t.disConnect = ip),
    (t.disconnect = vk),
    (t.dispose = rp),
    (t.getInstanceByDom = op),
    (t.getInstanceById = ap),
    (t.registerTheme = sp),
    (t.registerPreprocessor = lp),
    (t.registerProcessor = up),
    (t.registerPostInit = hp),
    (t.registerPostUpdate = cp),
    (t.registerUpdateLifecycle = pp),
    (t.registerAction = dp),
    (t.registerCoordinateSystem = fp),
    (t.getCoordinateSystemDimensions = gp),
    (t.registerLayout = vp),
    (t.registerVisual = yp),
    (t.registerLoading = _p),
    (t.setCanvasCreator = xp),
    (t.registerMap = wp),
    (t.getMap = bp),
    (t.registerTransform = mk),
    (t.dataTool = Ck),
    (t.registerLocale = Js),
    (t.zrender = Xw),
    (t.matrix = fw),
    (t.vector = X_),
    (t.zrUtil = V_),
    (t.color = Fx),
    (t.helper = gA),
    (t.number = MA),
    (t.time = TA),
    (t.graphic = CA),
    (t.format = IA),
    (t.util = DA),
    (t.List = Vk),
    (t.ComponentModel = HT),
    (t.ComponentView = oI),
    (t.SeriesModel = rI),
    (t.ChartView = lI),
    (t.extendComponentModel = _f),
    (t.extendComponentView = xf),
    (t.extendSeriesModel = wf),
    (t.extendChartView = bf),
    (t.throttle = Hh),
    (t.use = Yd),
    (t.setPlatformAPI = r),
    (t.parseGeoJSON = ef),
    (t.parseGeoJson = ef),
    (t.env = f_),
    (t.Model = cT),
    (t.Axis = PA),
    (t.innerDrawElementOnCanvas = Vc);
});
