import React from "react";

interface StatisticRowProps {
  label: string;
  value: string;
  icon: string;
}

const StatisticRow: React.FC<StatisticRowProps> = ({ label, value, icon }) => {
  return (
    <tr>
      <td>{label}</td>
      <td className="text-right">
        <img src={icon} alt="icon" />
        <span className="badge badge-pill badge-secondary">{value}</span>
      </td>
    </tr>
  );
};

export default StatisticRow;
