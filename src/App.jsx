import { useEffect, useState } from "react";
import "./App.css";
import KeyMetrics from "./components/KeyMetrics";
import { metricsData } from "./data";

function App() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    setMetrics(metricsData);
  }, []);
  return (
    <div className="App">
      <KeyMetrics metrics={metrics} />
    </div>
  );
}

export default App;
