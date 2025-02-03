import React from "react";

interface ProfileComponentProps {
  total: number;
  answered: number;
  unanswered: number;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  total,
  answered,
  unanswered,
}) => {
  return (
    <table className="last-call-statistic titlesizeweight">
      <tbody>
        <tr>
          <td>Total Calls</td>
          <td>
            <span className="badge-primary">{total}</span>
          </td>
        </tr>
        <tr>
          <td>Answered Calls</td>
          <td>
            <span className="badge-primary">{answered}</span>
          </td>
        </tr>
        <tr>
          <td>Unanswered Calls</td>
          <td>
            <span className="badge-primary">{unanswered}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileComponent;
