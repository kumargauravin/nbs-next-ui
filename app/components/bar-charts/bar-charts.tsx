import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Paper from '@mui/material/Paper';
import { Prosto_One } from 'next/font/google';

const chartSetting = {
  yAxis: [
    {
      label: 'Match %',
    },
  ],
  width: 500,
  height: 300,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    node: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    node: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    node: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    node: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    node: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    node: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    node: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    node: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    node: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    node: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    node: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    node: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}%`;

export default function BarCharts(props:any) {

  const defaultSeries = [
    { dataKey: 'london', label: 'London', valueFormatter },
    { dataKey: 'paris', label: 'Paris', valueFormatter },
    { dataKey: 'newYork', label: 'New York', valueFormatter },
    { dataKey: 'seoul', label: 'Seoul', valueFormatter },
  ];

  const defaultScale = [{ scaleType: 'band', dataKey: 'node' }];

  return (
    <Paper style={{width: "100%" }}>
    {/* <BarChart
      dataset={props?.dataset}
      xAxis={props?.xAxis}
      series={props?.series}
      {...chartSetting}
      skipAnimation
    /> */}
    </Paper>
  );
}