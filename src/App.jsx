import "./App.css";
import KeyMetrics from "./components/KeyMetrics";
import UserGrowthChart from "./components/UserGrowthChart";
import DataTable from "./components/DataTable";
import Top5StreamedSongs from "./components/Top5StreamedSongs";
import RevenueDistribution from "./components/RevenueDistribution";

function App() {
  return (
    <div className="App">
      <KeyMetrics />
      <RevenueDistribution />
      <Top5StreamedSongs />
      <UserGrowthChart />
      <DataTable />
    </div>
  );
}

export default App;
