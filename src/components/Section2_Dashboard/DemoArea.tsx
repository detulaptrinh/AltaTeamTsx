import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const DemoArea= () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    color:'#FF7506',
  };
  return <Area {...config} />;
};

export default DemoArea;