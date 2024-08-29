import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useDashboard } from "../context/DashBoardContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueDistribution = () => {
  const { revenueDistribution } = useDashboard();
  const chartData = useMemo(
    () => ({
      labels: revenueDistribution.labels,
      datasets: [
        {
          data: revenueDistribution.values,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    }),
    [revenueDistribution]
  );

  return (
    <div className="section">
      <h3 className="header">Revenue Distribution</h3>
      <div className="revenue-pie-chart-ctn">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default RevenueDistribution;
