import Taro from '@tarojs/taro';

const HTTP_ERROR = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const requestArr = [];

interface Options {
  method?: 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | undefined;
  header?: Record<string, any>;
  data?: object;
}
interface Response {
  statusCode: number;
  data: BackData;
}
interface BackData {
  code: number;
  data: object;
  msg: string;
}

/**
 * 检查http状态值
 * @param response
 * @returns {*}
 */
function checkHttpStatus(response: Response): any {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return Promise.resolve(response);
  }
  const message = HTTP_ERROR[response.statusCode] || `ERROR CODE: ${response.statusCode}`;
  const error: Error = new Error(message);
  error.response = response;
  throw error;
}

/**
 * 检查返回值是否正常
 * @param data
 * @returns {*}
 */
function checkSuccess(response: any, resolve): any {
  const { data } = response;
  if (typeof data.code === 'number' && data.code === 200) {
    return resolve(data);
  }
  if (data.code == 401) {
    Taro.showToast({
      title: '权限验证失败',
      icon: 'none',
      duration: 3000,
    });

    return;
  }

  Taro.showToast({
    title: `${data.msg || '服务端返回异常'}`,
    icon: 'none',
    duration: 3000,
  });
}

/**
 * 请求错误处理
 * @param error
 * @param reject
 */
function throwError(error): void {
  const { data } = error;
  if (data.code == 401) {
    Taro.showToast({
      title: '权限验证失败',
      icon: 'none',
      duration: 3000,
    });
    return;
  }
  Taro.showToast({
    title: `${error.errMsg || '服务器正在维护中'}`,
    icon: 'none',
    duration: 3000,
  });
}

const request = (url: string, options: Options): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (requestArr.length === 0) {
      Taro.showLoading({
        title: '加载中',
        mask: true,
      });
    }
    const { method = 'GET', header } = options;
    Taro.request({
      method,
      url: `${REQUEST_URL}${url}`,
      header,
      ...options,
    })
      .then((res: CallbackResult): void => {
        requestArr.shift();
        if (requestArr.length === 0) {
          Taro.hideLoading();
        }
        return checkHttpStatus(res);
      })
      .then((res) => {
        return checkSuccess(res, resolve);
      })
      .catch((error) => {
        throwError(error);
      });
  });
};

export default request;
