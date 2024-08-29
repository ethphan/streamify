import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const top5StreamedSongsData = {
  songs: ["Song A", "Song B", "Song C", "Song D", "Song E"],
  streamCounts: [12000, 10000, 9000, 8000, 7000],
};

const Top5StreamedSongs = () => {
  const chartData = {
    labels: top5StreamedSongsData.songs,
    datasets: [
      {
        label: "Stream Count",
        data: top5StreamedSongsData.streamCounts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="section">
      <h3 className="header">Revenue Distribution</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Top5StreamedSongs;
