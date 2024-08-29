import React, { useEffect, useState } from "react";
import {
  metricsData,
  revenueDistributionData,
  userGrowthData,
  tableData,
  top5StreamedSongsData,
} from "../data/dashboardData";

export const useDashboard = () => {
  const [keyMetrics, setKeyMetrics] = useState([]);
  const [revenueDistribution, setRevenueDistribution] = useState({});
  const [top5StreamedSongs, setTop5StreamedSongs] = useState({});
  const [userGrowth, setUserGrowth] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    setKeyMetrics(metricsData);
    setRevenueDistribution(revenueDistributionData);
    setTable(tableData);
    setUserGrowth(userGrowthData);
    setTop5StreamedSongs(top5StreamedSongsData);
  }, []);

  return {
    keyMetrics,
    revenueDistribution,
    top5StreamedSongs,
    userGrowth,
    table,
  };
};
