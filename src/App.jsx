import { useEffect, useState } from "react";
import "./App.css";
import { metricsData } from "./data";
import KeyMetrics from "./components/KeyMetrics";
import UserGrowthChart from "./components/UserGrowthChart";
import DataTable from "./components/DataTable";

function App() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    setMetrics(metricsData);
  }, []);

  return (
    <div className="App">
      <KeyMetrics metrics={metrics} />
      <DataTable />
      <UserGrowthChart />
    </div>
  );
}

export default App;
