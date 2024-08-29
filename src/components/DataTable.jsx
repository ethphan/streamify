import React, { useState } from "react";
import { useDashboard } from "../context/DashBoardContext";

const DataTable = () => {
  const [sortColumn, setSortColumn] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const { table } = useDashboard();

  const sortedData = [...table].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    }
    return a[sortColumn] < b[sortColumn] ? 1 : -1;
  });

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="section">
      <h3 className="header">Data Table</h3>
      <table className="data-table">
        <thead>
          <tr className="data-table-row">
            <th onClick={() => handleSort("songName")}>Song Name</th>
            <th onClick={() => handleSort("artist")}>Artist</th>
            <th onClick={() => handleSort("dateStreamed")}>Date Streamed</th>
            <th onClick={() => handleSort("streamCount")}>Stream Count</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="data-table-row">
              <td>{row.songName}</td>
              <td>{row.artist}</td>
              <td>{row.dateStreamed}</td>
              <td>{row.streamCount}</td>
              <td>{row.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
