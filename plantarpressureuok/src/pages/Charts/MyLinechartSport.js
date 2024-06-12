import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyLineChart = ({ sensorData }) => {
  return (
    <LineChart width={650} height={400} data={sensorData}>
      <XAxis dataKey="time" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sensor1"
        stroke="#8884d8"
        name="Sensor 1"
      />
      <Line
        type="monotone"
        dataKey="sensor2"
        stroke="#82ca9d"
        name="Sensor 2"
      />
      <Line
        type="monotone"
        dataKey="sensor3"
        stroke="#ff0000"
        name="Sensor 3"
      />
      <Line
        type="monotone"
        dataKey="sensor4"
        stroke="#00ff00"
        name="Sensor 4"
      />
      <Line
        type="monotone"
        dataKey="sensor5"
        stroke="#0000ff"
        name="Sensor 5"
      />
    </LineChart>
  );
};

export default MyLineChart;
