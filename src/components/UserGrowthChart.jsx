import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { userGrowthData } from "../data";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const UserGrowthChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      totalUsers: [
        1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500,
      ],
      activeUsers: [
        800, 1200, 1700, 2200, 2700, 3200, 3700, 4200, 4700, 5200, 5700, 6200,
      ],
    };
    console.log("data", data);
    if (data) {
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Total Users",
            data: data.totalUsers,
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Active Users",
            data: data.activeUsers,
            borderColor: "green",
            fill: false,
          },
        ],
      });
    }
  }, []);

  if (!chartData) {
    return null;
  }

  return <Line data={chartData} />;
};

export default UserGrowthChart;
