import React from "react";
import "./InfoTable.styles.css";
const InfoTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header">S.No</th>
          <th className="table-header">Month</th>
          <th className="table-header">EMI</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.serial}>
            <td className="table-data">{item.serial}</td>
            <td className="table-data">{item.date}</td>
            <td className="table-data">
              {"₹ "}
              {item.emi}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;
