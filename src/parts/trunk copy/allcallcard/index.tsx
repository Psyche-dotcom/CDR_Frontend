import React from "react";
import TrunkDataTable from "../trunktable";

const AllCallCard = () => {
  const themeColorDuration = ["#00ff00", "#0000ff", "#ffa500", "#ff0000"];
  const emptyData: any[] = [];

  const themeColors = ["#a8b6c4", "#00ff00", "#ffa500", "#ff0000"];
  return (
    <div className="row">
      <div className="col-12">
        <div className="card" id="AllCallsCard">
          <div className="card-header">
            <h4 className="card-title">
              <span id="TableTitle">
                All Trunks - Active Calls
                {/* {localize("CDR_AllTrunks")} - {localize("CDR_ActiveCalls")} */}
              </span>
            </h4>
            <a className="heading-elements-toggle">
              <i className="la la-ellipsis-v font-medium-3"></i>
            </a>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li>
                  <a data-action="expand">
                    <i className="ft-maximize"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <TrunkDataTable
            selectedTrunk="-1"
            allTrunksActiveCalls={emptyData}
            allTrunksInfo={[]}
            themeColorDuration={themeColorDuration}
          />
          {/*   <div className="card-content">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive mb-2">
                  <table
                    className="table table-de mb-0 table-striped"
                    id="TrunkDataTable"
                  >
                    <thead>
                      <tr>
                        <th>
                           {localize("CDR_TrunkName")} 
                          Trunk Name
                        </th>
                        <th>
                          Caller
                        {localize("CDR_Caller")}
                        </th>
                        <th>
                          Caller Name
                          {localize("CDR_CallerName")} 
                        </th>
                        <th>
                          Type
                          {localize("CDR_Type")} 
                        </th>
                        <th>
                          Callee
                          {localize("CDR_Callee")} 
                        </th>
                        <th>
                          Callee Name
                          {/* {localize("CDR_CalleeName")} 
                        </th>
                        <th>
                          Duration
                          {/* {localize("CDR_Duration")} 
                        </th>
                        <th>
                          Status
                          {/* {localize("CDR_Status")} 
                        </th>
                        <th>
                          Last Change Status
                          {/* {localize("CDR_LastChangeStatus")} 
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default AllCallCard;
