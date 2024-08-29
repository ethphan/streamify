import React, { useEffect, useState } from "react";
import { tableData } from "../data";

const DataTable = () => {
  const [sortColumn, setSortColumn] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tableData);
  }, []);

  const sortedData = [...data].sort((a, b) => {
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
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th onClick={() => handleSort("songName")}>Song Name</th>
          <th onClick={() => handleSort("artist")}>Artist</th>
          <th onClick={() => handleSort("dateStreamed")}>Date Streamed</th>
          <th onClick={() => handleSort("streamCount")}>Stream Count</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td>{row.songName}</td>
            <td>{row.artist}</td>
            <td>{row.dateStreamed}</td>
            <td>{row.streamCount}</td>
            <td>{row.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
