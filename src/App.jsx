import { useEffect, useState } from "react";
import "./App.css";
import { metricsData } from "./data";
import KeyMetrics from "./components/KeyMetrics";
import UserGrowthChart from "./components/UserGrowthChart";
import DataTable from "./components/DataTable";
import Top5StreamedSongs from "./components/Top5StreamedSongs";
import RevenueDistribution from "./components/RevenueDistribution";

function App() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    setMetrics(metricsData);
  }, []);

  return (
    <div className="App">
      <KeyMetrics metrics={metrics} />
      <RevenueDistribution />
      <Top5StreamedSongs />
      <UserGrowthChart />
      <DataTable />
    </div>
  );
}

export default App;
