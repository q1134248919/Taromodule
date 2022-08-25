//配置dvaApp的models
import draw, { DarwSate } from './draw';
import test from './test';

export interface AllState {
  draw: DarwSate;
}

//各个page的models都需要在这里"注册"
export default [draw, test];
