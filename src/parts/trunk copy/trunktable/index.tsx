"use client";
import { useEffect, useRef, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface TrunkCall {
  status: string;
  caller: string;
  callee: string;
  type: string;
  duration: string;
  id: string;
  callername: string;
  transferredCaller: string;
  trunkname: string;
  calleename: string;
  lastchangestatus: string;
}
let json = {
  $id: "1",
  draw: 1,
  recordsFiltered: 215,
  recordsTotal: 215,
  data: {
    $id: "2",
    $values: [],
  },
  reportDate: "2025/01/27 08:47:27",
};

const TrunkDataTable = ({
  selectedTrunk,
  allTrunksActiveCalls,
  allTrunksInfo,
  themeColorDuration,
}: {
  selectedTrunk: string;
  allTrunksActiveCalls: TrunkCall[];
  allTrunksInfo: any[];
  themeColorDuration: string[];
}) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);

  const columns: TableColumn<TrunkCall>[] = [
    {
      name: "Trunk Name",
      selector: (row) => row.trunkname,
      sortable: true,
    },
    {
      name: "Caller",
      selector: (row) => row.caller,
      sortable: true,
    },
    {
      name: "Caller Name",
      selector: (row) => row.callername,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Callee",
      selector: (row) => row.callee,
      sortable: true,
    },
    {
      name: "Callee Name",
      selector: (row) => row.calleename,
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Last Change Status",
      selector: (row) => row.lastchangestatus,
      sortable: true,
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    setData(json.data.$values);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card-content">
        <div className="row">
          <div className="col-md-12">
            <div className="mt-2 mb-2 table-responsive">
              <DataTable
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangePage={(page) => setPage(page)}
                onChangeRowsPerPage={(currentRowsPerPage) =>
                  setPerPage(currentRowsPerPage)
                }
                // onRowClicked={(row) => localizationService.setUserObj(row)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DataTableData = (
  dataTable: any,
  selectedTrunk: string,
  allTrunksActiveCalls: TrunkCall[],
  allTrunksInfo: any[],
  themeColorDuration: string[]
) => {
  dataTable.clear().draw();

  const rows =
    selectedTrunk === "-1"
      ? allTrunksActiveCalls
      : allTrunksActiveCalls.filter((call) => call.id === selectedTrunk);

  rows.forEach((call: TrunkCall) => {
    const row = DataRow(call, allTrunksInfo, themeColorDuration);
    dataTable.row.add(row).draw(false);
  });
};

const DataRow = (
  call: TrunkCall,
  allTrunksInfo: any[],
  themeColorDuration: string[]
) => {
  const {
    status,
    caller,
    callee,
    type,
    duration,
    lastchangestatus,
    id,
    callername,
    transferredCaller,
  } = call;

  const _gmt = parseFloat(
    (document.getElementById("Gmt") as HTMLInputElement)?.value || "0"
  );
  const _hour = Math.floor(_gmt);
  const _minute = Math.round((_gmt - _hour) * 100);

  // Parse duration and adjust for GMT
  const [_durationHour, _durationMinute, _durationSecond] = duration
    .split(":")
    .map(Number);
  const totalSeconds =
    _durationHour * 3600 + _durationMinute * 60 + _durationSecond;
  const adjustedSeconds = totalSeconds - (_hour * 3600 + _minute * 60);
  const adjustedDuration = new Date(adjustedSeconds * 1000)
    .toISOString()
    .substr(11, 8);

  // Parse Icstatus and adjust for GMT
  const [_IcstatusDate, _IcstatusTime] = lastchangestatus.split(" ");
  const [_IcstatusHour, _IcstatusMinute, _IcstatusSecond] = _IcstatusTime
    .split(":")
    .map(Number);
  const totalIcstatusSeconds =
    _IcstatusHour * 3600 + _IcstatusMinute * 60 + _IcstatusSecond;
  const adjustedIcstatusSeconds =
    totalIcstatusSeconds + (_hour * 3600 + _minute * 60);
  const adjustedIcstatusTime = new Date(adjustedIcstatusSeconds * 1000)
    .toISOString()
    .substr(11, 8);

  // Extract caller and callee details
  const _callerBracketsIn = caller.match(/\((.*)\)/)?.[1] || "";
  const _callerBracketsOut = caller.split("(")[0];
  const _callerTrunkName = find(allTrunksInfo, _callerBracketsOut);
  const _callerName = callername || _callerBracketsIn;

  const _calleeBracketsIn = callee.match(/\((.*)\)/)?.[1] || "";
  const _calleeBracketsOut = callee.split("(")[0];
  const _calleeTrunkName = find(allTrunksInfo, _calleeBracketsOut);

  const _trunkname = _callerTrunkName
    ? _callerBracketsOut
    : _calleeTrunkName
    ? _calleeBracketsOut
    : "";

  // Determine duration color and icon
  const parseDuration = parseInt(adjustedDuration.split(":")[1]) || 0;
  const parseDurationHour = parseInt(adjustedDuration.split(":")[0]) || 0;

  let _colorDuration = "#a8b6c4";
  let _colorWeight = "normal";
  let _colorIcon = "time-grey.svg";
  let _durationStatue = "0";

  if (parseDurationHour === 0) {
    if (parseDuration >= 5 && parseDuration < 10) {
      _colorDuration = themeColorDuration[1];
      _colorWeight = "bold";
      _colorIcon = "time-blue.svg";
      _durationStatue = "2";
    } else if (parseDuration >= 10 && parseDuration < 20) {
      _colorDuration = themeColorDuration[2];
      _colorWeight = "bold";
      _colorIcon = "time-orange.svg";
      _durationStatue = "3";
    } else if (parseDuration >= 20) {
      _colorDuration = themeColorDuration[3];
      _colorWeight = "bold";
      _colorIcon = "time-red.svg";
      _durationStatue = "4";
    } else {
      _colorDuration = themeColorDuration[0];
      _colorWeight = "bold";
      _colorIcon = "time-green.svg";
      _durationStatue = "1";
    }
  } else {
    _colorDuration = themeColorDuration[3];
    _colorWeight = "bold";
    _colorIcon = "time-red.svg";
    _durationStatue = "4";
  }

  // Build the row
  const _row = [
    _trunkname,
    _callerBracketsOut,
    `<img src="/app-assets/images/icons/user-green.svg" />${_callerName}`,
    type === "Inbound"
      ? `<div class="badge badge-inbound" data-id="${id}"><i class="ft-phone-incoming"></i> Inbound</div>`
      : type === "Outbound"
      ? `<div class="badge badge-outbound" data-id="${id}"><i class="ft-phone-outgoing"></i> Outbound</div>`
      : "",
    _calleeBracketsOut,
    `<img src="/app-assets/images/icons/user-red.svg" />${_calleeBracketsIn}`,
    `<span class="trunk-duration-number" style="color:${_colorDuration}">${parseDuration}</span>
     <span class="trunk-duration-min" style="color:${_colorDuration}">Min</span>
     <span class="trunk-duration-time">
       <img src="/app-assets/images/icons/${_colorIcon}" />
       <span class="duration-statue" data-item="${_durationStatue}" style="color:${_colorDuration}; font-weight:${_colorWeight}">${adjustedDuration}</span>
     </span>`,
    status === "Connected"
      ? `<div class="badge badge-warning" data-id="${id}"><i class="ft-wifi"></i> Connected</div>`
      : status === "Ringing"
      ? `<div class="badge badge-success trunk-status-badge" data-id="${id}"><i class="ft-phone-incoming"></i> Ringing</div>`
      : status === "Dialing"
      ? `<div class="badge badge-danger" data-id="${id}"><i class="ft-phone-outgoing"></i> Dialing</div>`
      : status === "Transferring"
      ? `<div class="badge badge-danger" data-id="${id}"><i class="ft-phone-outgoing"></i> Transferring ${transferredCaller}</div>`
      : "",
    `<div class="trunkstatue-date"><img src="/app-assets/images/icons/Calendar-purple.svg" />${_IcstatusDate}</div>
     <div class="trunkstatue-time"><img src="/app-assets/images/icons/time-date-green.svg" />${adjustedIcstatusTime}</div>`,
  ];

  return _row;
};

const find = (arr: any[], value: string) => {
  return arr.find((item) => item === value) || "";
};

export default TrunkDataTable;
