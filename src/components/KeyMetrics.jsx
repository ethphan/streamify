import React from "react";
import { useDashboard } from "../context/DashBoardContext";

const KeyMetrics = () => {
  const { keyMetrics } = useDashboard();
  console.log("keyMetricsData", keyMetrics);
  return (
    <div className="section">
      <h3 className="header">Key Metrics</h3>
      <div className="key-metrics-ctn">
        {Object.keys(keyMetrics).map((key) => (
          <div key={key} className="key-metric-card">
            <h4>{key}</h4>
            <p>{keyMetrics[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
