import React from "react";

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.keys(metrics).map((key) => (
        <div key={key} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{key}</h3>
          <p className="text-2xl">{metrics[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;
