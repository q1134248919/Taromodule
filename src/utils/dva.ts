import { create } from 'dva-core';
import createLoading from 'dva-loading';
import { Dispatch } from 'react';
import { Store, Action } from 'redux';

let app;
let store;
let dispatch;
let registered;

function createApp(opt): object {
  // redux日志
  // opt.onAction = [createLogger()]
  app = create(opt);
  app.use(createLoading({}));

  if (!registered) opt.models.forEach((model) => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = (): Store => store;
  app.use({});

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

// 获取对应的effect函数
export function getEffect(effectName, curNamespace): string {
  const targetNamespace = effectName.includes('/') ? effectName.split('/')[0] : curNamespace;
  const targetEffectName = effectName.includes('/') ? effectName : `${curNamespace}/${effectName}`;
  const targetModel = window.$$dvaApp._models.find(({ namespace }) => namespace === targetNamespace);
  return targetModel.effects[targetEffectName];
}

export default {
  createApp,
  getDispatch(): Dispatch<Action> {
    return app.dispatch;
  },
};
