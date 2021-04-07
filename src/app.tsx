import React from 'react';
import { Provider } from 'react-redux';
import dva from '@/utils/dva';

import models from '@/modles';
import './app.scss';

const dvaApp: any = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

type IProps = {
  children: Record<string, unknown>;
};

const App: React.FC<IProps> = (props: IProps) => {
  // console.log(Taro.getCurrentInstance());
  // const dispatch = useDispatch();
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default App;
