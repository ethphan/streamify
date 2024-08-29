import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const revenueDistributionData = {
  labels: ["Subscriptions", "Ads", "Premium Features"],
  values: [50000, 20000, 5000],
};

const RevenueDistribution = () => {
  const chartData = {
    labels: revenueDistributionData.labels,
    datasets: [
      {
        data: revenueDistributionData.values,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default RevenueDistribution;
