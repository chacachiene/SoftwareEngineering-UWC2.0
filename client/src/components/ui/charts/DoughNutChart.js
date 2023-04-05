import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ dataInput, size}) => {
  const data = {
    datasets: [
      {
        labels: "This will be hide",
        data: dataInput,
        backgroundColor: ["rgba(1, 87, 9, 0.6)", "#015704"],
      },
    ],
    labels: [],
  };

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
