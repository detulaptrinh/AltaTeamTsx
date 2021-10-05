import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const Progress2: React.FC = () => {
  var config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.45,
    color: ['#FF7506', '#E8EDF3'],
  };
  return <Progress {...config} />;
};

export default Progress2;