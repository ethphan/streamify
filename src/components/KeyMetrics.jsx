import React from "react";

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="section">
      <h3 className="header">Key Metrics</h3>
      <div className="key-metrics-ctn">
        {Object.keys(metrics).map((key) => (
          <div key={key} className="key-metric-card">
            <h4>{key}</h4>
            <p>{metrics[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
