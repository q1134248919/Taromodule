/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { testApi, testApi1 } from '@/services/draw';
import model from '@/utils/modal';

export interface DarwSate {
  number: number;
}

const draw = model.extend({
  namespace: 'draw',
  state: {
    number: 1,
    test: 4,
  },
  effects: {
    // 获取地址
    *getAddress({}, { call, update, put }) {
      // const data = yield call(testApi);

      // if (code === 200 && data) {
      yield update({ number: 2 });
      yield put({
        type: 'test/save',
        payload: {
          test: 10,
        },
      });
      // }
    },
    *getUser({ payload }, { call, update }) {
      const data = yield call(testApi1, payload);
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export default draw;
