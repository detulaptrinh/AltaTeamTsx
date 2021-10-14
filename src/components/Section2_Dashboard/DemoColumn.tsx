import React from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const data = [
    {"class": '6A1',"type":'Giỏi',"value": 35},
    {"class": '6A1',"type":'Khá',"value":20},
    {"class": '6A1',"type":'Trung bình',"value":15},
    {"class": '6A1',"type":'Yếu',"value":10},
    {"class": '6A2',"type":'Giỏi',"value":27},
    {"class": '6A2',"type":'Khá',"value":20},
    {"class": '6A2',"type":'Trung bình',"value":18},
    {"class": '6A2',"type":'Yếu',"value":5},
    {"class": '6A3',"type":'Giỏi',"value": 24},
    {"class": '6A3',"type":'Khá',"value":26},
    {"class": '6A3',"type":'Trung bình',"value":10},
    {"class": '6A3',"type":'Yếu',"value":5},
    {"class": '6A4',"type":'Giỏi',"value": 26},
    {"class": '6A4',"type":'Khá',"value":20},
    {"class": '6A4',"type":'Trung bình',"value":10},
    {"class": '6A4',"type":'Yếu',"value":15},
    {"class": '6A5',"type":'Giỏi',"value": 15},
    {"class": '6A5',"type":'Khá',"value":30},
    {"class": '6A5',"type":'Trung bình',"value":10},
    {"class": '6A5',"type":'Yếu',"value":3},
    {"class": '6A6',"type":'Giỏi',"value": 20},
    {"class": '6A6',"type":'Khá',"value":20},
    {"class": '6A6',"type":'Trung bình',"value":10},
    {"class": '6A6',"type":'Yếu',"value":10},
    {"class": '6A7',"type":'Giỏi',"value": 26},
    {"class": '6A7',"type":'Khá',"value":28},
    {"class": '6A7',"type":'Trung bình',"value":19},
    {"class": '6A7',"type":'Yếu',"value":2},
    {"class": '6A8',"type":'Giỏi',"value": 25},
    {"class": '6A8',"type":'Khá',"value":9},
    {"class": '6A8',"type":'Trung bình',"value":19},
    {"class": '6A8',"type":'Yếu',"value":10},
    {"value":50}
    
  ]
  
  var config:any = {
    data: data,
    xField: 'class',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
    height: 200,
    dodgePadding: 2,
    colorField: 'type', // or seriesField in some cases
    color: ['#c83901', '#ff7506', '#Ffa75e','#ffd8b8'],
    
  };
  return <Column {...config} />;
};

export default DemoColumn;