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
    <LineChart width={700} height={400} data={sensorData}>
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
      <Line
        type="monotone"
        dataKey="sensor6"
        stroke="#ffa500"
        name="Sensor 6"
      />
      <Line
        type="monotone"
        dataKey="sensor7"
        stroke="#800080"
        name="Sensor 7"
      />
      <Line
        type="monotone"
        dataKey="sensor8"
        stroke="#008080"
        name="Sensor 8"
      />
      <Line
        type="monotone"
        dataKey="sensor9"
        stroke="#ff00ff"
        name="Sensor 9"
      />
    </LineChart>
  );
};

export default MyLineChart;
