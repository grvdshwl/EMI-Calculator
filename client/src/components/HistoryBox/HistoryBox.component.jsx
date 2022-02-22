import React from "react";
import "./HistoryBox.styles.css";

const HistoryBox = ({ data, showEmiHistory }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header">S.No</th>
          <th className="table-header">History</th>
          <th className="table-header">Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`history-${index}`}>
            <td className="table-data">{index + 1}</td>
            <td className="table-data">{`History ${index + 1}`}</td>
            <td className="table-data table-btn">
              <div onClick={() => showEmiHistory(item)}>Visit</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryBox;
