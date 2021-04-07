// 商品详情
import React, { useEffect } from 'react';
import { AllState } from '@/modles/index';
import { View } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';

type IProps = {};

const GoodsDetailPage: React.FC<IProps> = (props: IProps) => {
  const {} = props;

  const { number } = useSelector((state: AllState) => state.draw);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: 'draw/getAddress' });
    dispatch({ type: 'draw/getUser', payload: { account: '123', password: '123' } });
  }, [dispatch]);

  return <View className=''>{number}</View>;
};

export default GoodsDetailPage;
