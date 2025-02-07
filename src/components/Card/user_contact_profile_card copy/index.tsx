import React from "react";

interface UserContactProfileCardProps {
  classcolor: string;
  iconclass: string;
  title: string;
  dataid: string;
  data: { inbound: string; outbound: string; time: string }[]; // Define the structure of the data array
}

const UserContactProfileCardCopy: React.FC<UserContactProfileCardProps> = ({
  classcolor,
  iconclass,
  title,
  data,
  dataid,
}) => {
  return (
    <div className="col-md-3 last-call-statistic-container">
      <div className="card contactprofilebottomcards">
        <div
          className={`card-header card-head-inverse ${classcolor} contactprofilebottomcards-header`}
        >
          <h4 className="card-title text-white">
            <i className={iconclass}></i>&nbsp;&nbsp;
            {title}
          </h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li>
                <a data-action="collapse">
                  <i className="ft-minus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body" id={dataid}>
            <table className="last-call-statistic">
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={3}>Data Not Found</td>
                  </tr>
                ) : (
                  data.map((info, index) => (
                    <tr key={index}>
                      <td>{info.inbound}</td>
                      <td>{info.outbound}</td>
                      <td>{info.time}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContactProfileCardCopy;
