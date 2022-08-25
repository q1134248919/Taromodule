/* eslint-disable @typescript-eslint/explicit-function-return-type */
import model from '@/utils/modal';

export interface DarwSate {
  number: number;
}

const draw = model.extend({
  namespace: 'test',
  state: {
    test: 5,
  },
  effects: {},
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export default draw;
