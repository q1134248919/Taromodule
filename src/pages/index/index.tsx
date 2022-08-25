// 商品详情
import React, { useEffect, useState } from 'react';
import { AllState } from '@/modles/index';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
// import * as echarts from '../../ec-canvas/echarts';

type IProps = {};

const GoodsDetailPage: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  console.log('1');
  const [obj, setObj] = useState({});
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

  const initChart = (canvas, width, height) => {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
    });
    canvas.setChart(chart);

    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
        textStyle: {
          fontSize: 13,
        },
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    chart.setOption(option);
    return chart;
  };

  const { number } = useSelector((state: AllState) => state.draw);
  const { test } = useSelector((state: AllState) => state.test);

  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setObj({
      onInit: initChart,
    });

    // dispatch({ type: 'draw/getAddress' });
    // dispatch({ type: 'draw/getUser', payload: { account: '123', password: '123' } });
  }, [dispatch]);
  const getUser = () => {
    Taro.getUserProfile({
      desc: '用于完善会员资料1', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        console.log(res, 'res');
      },
      fail: (res) => {
        console.log(res, 'res ');
      },
    });
  };

  return (
    <View onClick={() => getUser()} className='container' style={{ width: '100vw', height: '100vh' }}>
      {/* <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={obj}></ec-canvas> */}
      {number}
      {test}
    </View>
  );
};

export default GoodsDetailPage;
