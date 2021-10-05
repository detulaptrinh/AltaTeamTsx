import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  var config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    color: ['#FF7506', '#E8EDF3'],
  };
  return <Progress {...config} />;
};

export default DemoProgress;