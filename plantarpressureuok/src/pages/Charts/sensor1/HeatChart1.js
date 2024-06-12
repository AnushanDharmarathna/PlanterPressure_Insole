import React from "react";
import HeatMap from "react-heatmap-grid";
function HeatChart1({ sensorData }) {
  const timeLabels = sensorData.map((data) => data.time);
  const sensorReadings = sensorData.map((data) => data.sensor1);
  const dataMatrix = [sensorReadings];
  return (
    <div>
      <HeatMap
        xLabels={timeLabels}
        yLabels={[50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
        data={dataMatrix}
      />
    </div>
  );
}

export default HeatChart1;
