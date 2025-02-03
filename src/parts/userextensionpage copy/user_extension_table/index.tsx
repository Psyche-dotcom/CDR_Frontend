import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import CallInfoDetails from "@/components/others/callinfo";

interface UserExtensionTableProps {
  localizations: Record<string, string>;
}

interface CallData {
  call_id: number;
  from: string;
  to: string;
  inorout: string;
  durationstring: string;
  talktimestring: string;
  ringtimestring: string;
  date: string;
  starttimestring: string;
  stoptimestring: string;
  status: string;
  button: string;
}

const mockData = {
  dataList: {
    $values: [
      {
        call_id: 10847,
        from: "05307913268",
        to: "Emre Dikici (1000)",
        duration: "00:00:16",
        talktime: "00:00:00",
        ringtime: "00:00:00",
        year: 2024,
        month: 12,
        day: 16,
        starttime: "05:12:43",
        stoptime: "05:12:59",
        inorout: "inbound",
        status: "missed",
        button:
          '<button class="btn btn-sm round CallDetailsButton btn-outline-danger"  data-type="10847"> Details</button>',
        durationstring: "00:00:16",
        talktimestring: "00:00:00",
        ringtimestring: "00:00:00",
        date: "16.12.2024",
        starttimestring: "05:12:43",
        stoptimestring: "05:12:59",
        tablecolumninorout: '<span class="badge badge-success">Inbound</span>',
        tablecolumnstatus:
          '<span class="badge badge-missed"><i class="las la-phone-slash" style="font-size: unset;"></i> Missed</span>',
        tablecolumnduration:
          '<div class="table-column-duration"><i class="la la-clock"></i> 00:00:16</div>',
        tablecolumntalktime:
          '<div class="table-column-talktime"><i class="la la-clock"></i> 00:00:00</div>',
        tablecolumnringtime:
          '<div class="table-column-ringtime"><i class="la la-clock"></i> 00:00:00</div>',
        tablecolumndate:
          '<div class="table-column-date"><img src="/app-assets/images/icons/filter-calendar.svg"> 16.12.2024</div>',
        tablecolumnstarttime:
          '<div class="table-column-starttime"><i class="la la-clock"></i> 05:12:43</div>',
        tablecolumnstoptime:
          '<div class="table-column-stoptime"><i class="la la-clock"></i> 05:12:59</div>',
        tablecolumnfrom:
          '<div class="table-column-from"><img src="/app-assets/images/icons/user-from.svg"> 05307913268</div>',
        tablecolumnto:
          '<div class="table-column-to"><img src="/app-assets/images/icons/user-to.svg"> Emre Dikici (1000) </div>',
        tablecolumnbutton:
          '<a class="CallDetailsButton" data-type="10847"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
        excelinorout: "Inbound",
        excelstatus: "Missed",
      },
    ],
  },
};

const UserExtensionTable: React.FC<UserExtensionTableProps> = ({
  localizations,
}) => {
  const [filterType, setFilterType] = useState<string>("1");
  const [handle, sethandle] = useState<boolean>(false);

  useEffect(() => {
    const table = $("#CallInfoTable").DataTable({
      processing: true,
      pageLength: 10,
      data: mockData.dataList.$values.map((item) => ({
        call_id: item.call_id,
        date: item.date,
        starttimestring: item.starttimestring,
        from: item.from,
        to: item.to,
        inorout: item.tablecolumninorout,
        durationstring: item.tablecolumnduration,
        talktimestring: item.tablecolumntalktime,
        ringtimestring: item.tablecolumnringtime,
        stoptimestring: item.stoptimestring,
        status: item.tablecolumnstatus,
        button: item.tablecolumnbutton,
      })),
      columns: [
        { data: "call_id", visible: false },
        { data: "date" },
        { data: "starttimestring" },
        { data: "from" },
        { data: "to" },
        { data: "inorout" },
        { data: "durationstring" },
        { data: "talktimestring" },
        { data: "ringtimestring" },
        { data: "stoptimestring" },
        { data: "status" },
        { data: "button" },
      ],
      //@ts-ignore
      fnDrawCallback: function (oSettings) {
        $(".call-info-filter a").removeClass("disabled-button");
      },
      responsive: true,
      autoWidth: false,
      bLengthChange: false,
      order: [[0, "desc"]],
      language: {
        //@ts-ignore
        sEmptyTable: localizations["sEmptyTable"],
        sInfo: localizations["sInfo"],
        sInfoEmpty: localizations["sInfoEmpty"],
        sInfoFiltered: localizations["sInfoFiltered"],
        sLengthMenu: localizations["sLengthMenu"],
        sLoadingRecords: localizations["sLoadingRecords"],
        sSearch: localizations["sSearch"],
        sZeroRecords: localizations["sZeroRecords"],
        oPaginate: {
          sFirst: localizations["sFirst"],
          sLast: localizations["sLast"],
          sNext: localizations["sNext"],
          sPrevious: localizations["sPrevious"],
        },
      },
      oLanguage: { sProcessing: '<span class="load load-button"></span>' },
    });
    $(document).on("click", ".CallDetailsButton", function () {
      sethandle(true);
    });
    // Handle filter clicks
    $(".call-info-filter a").on("click", function (e) {
      e.preventDefault();
      $(".call-info-filter a").removeClass("active");
      $(this).addClass("active");
      $(".call-info-filter a").addClass("disabled-button");

      const newFilterType = $(this).attr("data-type") || "1";
      setFilterType(newFilterType);

      // Simulate filtering by reloading the table with mock data
      table.clear();
      table.rows.add(
        mockData.dataList.$values.map((item) => ({
          call_id: item.call_id,
          date: item.date,
          starttimestring: item.starttimestring,
          from: item.from,
          to: item.to,
          inorout: item.tablecolumninorout,
          durationstring: item.tablecolumnduration,
          talktimestring: item.tablecolumntalktime,
          ringtimestring: item.tablecolumnringtime,
          stoptimestring: item.stoptimestring,
          status: item.tablecolumnstatus,
          button: item.tablecolumnbutton,
        }))
      );
      table.draw();
    });
    return () => {
      table.destroy();
      $(".call-info-filter a").off("click");
    };
  }, [filterType, localizations]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">
                {localizations["CDR_CallReportsLastData"]}
              </h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3"></i>
              </a>
              <div className="heading-elements"></div>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs nav-linetriangle no-hover-bg call-info-filter">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="detail-tab-1"
                        data-type="1"
                        data-toggle="tab"
                        aria-controls="tab41"
                        href="#detail-tab-1-content"
                        aria-expanded="true"
                      >
                        {localizations["CDR_AllCalls"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="detail-tab-2"
                        data-type="2"
                        data-toggle="tab"
                        aria-controls="tab42"
                        href="#detail-tab-2-content"
                        aria-expanded="false"
                      >
                        {localizations["CDR_InboundCalls"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="detail-tab-3"
                        data-type="3"
                        data-toggle="tab"
                        aria-controls="tab43"
                        href="#detail-tab-3-content"
                        aria-expanded="false"
                      >
                        {localizations["CDR_OutboundCalls"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="detail-tab-4"
                        data-type="4"
                        data-toggle="tab"
                        aria-controls="tab44"
                        href="#detail-tab-4-content"
                        aria-expanded="false"
                      >
                        {localizations["CDR_MissedCalls"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="detail-tab-5"
                        data-type="5"
                        data-toggle="tab"
                        aria-controls="tab45"
                        href="#detail-tab-5-content"
                        aria-expanded="false"
                      >
                        {localizations["CDR_Ext2ExtCalls"]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row p-1">
                <div className="col-md-12">
                  <div className="row text-right">
                    <div className="col-md-12" style={{ paddingRight: "24px" }}>
                      <a className="exportExcel">
                        <img
                          src="/app-assets/images/excel-icon.svg"
                          alt="Export to Excel"
                          style={{ width: "40px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      className="table table-de mb-0 report-table display nowrap table-hover"
                      id="CallInfoTable"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>{localizations["CDR_CallId"]}</th>
                          <th>{localizations["CDR_Date"]}</th>
                          <th>{localizations["CDR_StartTime"]}</th>
                          <th>{localizations["CDR_From"]}</th>
                          <th>{localizations["CDR_To"]}</th>
                          <th>{localizations["CDR_Type"]}</th>
                          <th>{localizations["CDR_Duration"]}</th>
                          <th>{localizations["CDR_TalkTime"]}</th>
                          <th>{localizations["CDR_RingTime"]}</th>
                          <th>{localizations["CDR_StopTime"]}</th>
                          <th>{localizations["CDR_Status"]}</th>
                          <th className="all"></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallInfoDetails status={handle} setStatus={sethandle} />
    </>
  );
};

export default UserExtensionTable;
