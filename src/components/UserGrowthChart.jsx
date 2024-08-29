import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useDashboard } from "../hooks/useDashboard";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const UserGrowthChart = () => {
  const { userGrowth } = useDashboard();

  const chartData = useMemo(
    () => ({
      labels: userGrowth.labels,
      datasets: [
        {
          label: "Total Users",
          data: userGrowth.totalUsers,
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Active Users",
          data: userGrowth.activeUsers,
          borderColor: "green",
          fill: false,
        },
      ],
    }),
    [userGrowth]
  );

  return (
    <div className="section">
      <h3 className="header">User Growth</h3>
      <canvas data-testid="user-growth-chart">
        <Line data={chartData} />
      </canvas>
    </div>
  );
};

export default UserGrowthChart;
