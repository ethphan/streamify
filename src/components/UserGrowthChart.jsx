import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { userGrowthData } from "../data/dashboardData";
import { useDashboard } from "../context/DashBoardContext";

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
      <Line data={chartData} />
    </div>
  );
};

export default UserGrowthChart;
