import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useDashboard } from "../hooks/useDashboard";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Top5StreamedSongs = () => {
  const { top5StreamedSongs } = useDashboard();

  const chartData = useMemo(
    () => ({
      labels: top5StreamedSongs.songs,
      datasets: [
        {
          label: "Stream Count",
          data: top5StreamedSongs.streamCounts,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    }),
    [top5StreamedSongs]
  );

  return (
    <div className="section">
      <h3 className="header">Revenue Distribution</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Top5StreamedSongs;
