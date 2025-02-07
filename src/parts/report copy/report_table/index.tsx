"use client";

import { useEffect, useRef, useState } from "react";
import CardHeader from "../ReportCardtableHeader";
import CallInfoDetails from "@/components/others/callinfo";
import DataTable, { TableColumn } from "react-data-table-component";

interface ReportData {
  tablecolumndate: string;
  tablecolumnstarttime: string;
  tablecolumnfrom: string;
  tablecolumnto: string;
  tablecolumninorout: string;
  tablecolumnduration: string;
  tablecolumntalktime: string;
  tablecolumnstatus: string;
  tablecolumnbutton: string;
}

const ReportTable: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setopen] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);
  const [reportObject, setReportObject] = useState<any>();
  let json = {
    $id: "1",
    draw: 1,
    recordsFiltered: 215,
    recordsTotal: 215,
    data: {
      $id: "2",
      $values: [
        {
          $id: "3",
          call_id: 11200,
          from: "31614347080",
          to: "Turkce (8003)",
          duration: "00:00:17",
          talktime: "00:00:00",
          ringtime: "00:00:00",
          year: 2025,
          month: 1,
          day: 27,
          starttime: "10:13:03",
          stoptime: "10:13:25",
          inorout: "inbound",
          status: "completed",
          button:
            '<button class="btn btn-sm round CallDetailsButton btn-outline-danger" data-type="11200"> Details</button>',
          durationstring: "00:00:17",
          talktimestring: "00:00:00",
          ringtimestring: "00:00:00",
          date: "27.01.2025",
          starttimestring: "10:13:03",
          stoptimestring: "10:13:25",
          tablecolumninorout:
            '<span class="badge badge-success">Inbound</span>',
          tablecolumnstatus:
            '<span class="badge badge-completed"><i class="la la-check" style="font-size: unset;"></i> Completed</span>',
          tablecolumnduration:
            '<div class="table-column-duration"><i class="la la-clock"></i> 00:00:17</div>',
          tablecolumntalktime:
            '<div class="table-column-talktime"><i class="la la-clock"></i> 00:00:00</div>',
          tablecolumnringtime:
            '<div class="table-column-ringtime"><i class="la la-clock"></i> 00:00:00</div>',
          tablecolumndate:
            '<div class="table-column-date"><img src="/app-assets/images/icons/filter-calendar.svg"> 27.01.2025</div>',
          tablecolumnstarttime:
            '<div class="table-column-starttime"><i class="la la-clock"></i> 10:13:03</div>',
          tablecolumnstoptime:
            '<div class="table-column-stoptime"><i class="la la-clock"></i> 10:13:25</div>',
          tablecolumnfrom:
            '<div class="table-column-from"><img src="/app-assets/images/icons/user-from.svg"> 31614347080</div>',
          tablecolumnto:
            '<div class="table-column-to"><img src="/app-assets/images/icons/user-to.svg"> Turkce (8003)</div>',
          tablecolumnbutton:
            '<a class="CallDetailsButton" data-type="11200"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
          excelinorout: "Inbound",
          excelstatus: "Completed",
        },
        {
          $id: "4",
          call_id: 11199,
          from: "05343303369",
          to: "Turkce (8003)",
          duration: "00:00:18",
          talktime: "00:00:00",
          ringtime: "00:00:01",
          year: 2025,
          month: 1,
          day: 27,
          starttime: "07:13:58",
          stoptime: "07:14:20",
          inorout: "inbound",
          status: "completed",
          button:
            '<button class="btn btn-sm round CallDetailsButton btn-outline-danger" data-type="11199"> Details</button>',
          durationstring: "00:00:18",
          talktimestring: "00:00:00",
          ringtimestring: "00:00:01",
          date: "27.01.2025",
          starttimestring: "07:13:58",
          stoptimestring: "07:14:20",
          tablecolumninorout:
            '<span class="badge badge-success">Inbound</span>',
          tablecolumnstatus:
            '<span class="badge badge-completed"><i class="la la-check" style="font-size: unset;"></i> Completed</span>',
          tablecolumnduration:
            '<div class="table-column-duration"><i class="la la-clock"></i> 00:00:18</div>',
          tablecolumntalktime:
            '<div class="table-column-talktime"><i class="la la-clock"></i> 00:00:00</div>',
          tablecolumnringtime:
            '<div class="table-column-ringtime"><i class="la la-clock"></i> 00:00:01</div>',
          tablecolumndate:
            '<div class="table-column-date"><img src="/app-assets/images/icons/filter-calendar.svg"> 27.01.2025</div>',
          tablecolumnstarttime:
            '<div class="table-column-starttime"><i class="la la-clock"></i> 07:13:58</div>',
          tablecolumnstoptime:
            '<div class="table-column-stoptime"><i class="la la-clock"></i> 07:14:20</div>',
          tablecolumnfrom:
            '<div class="table-column-from"><img src="/app-assets/images/icons/user-from.svg"> 05343303369</div>',
          tablecolumnto:
            '<div class="table-column-to"><img src="/app-assets/images/icons/user-to.svg"> Turkce (8003)</div>',
          tablecolumnbutton:
            '<a class="CallDetailsButton" data-type="11199"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
          excelinorout: "Inbound",
          excelstatus: "Completed",
        },
        {
          $id: "5",
          call_id: 11198,
          from: "05343303369",
          to: "Turkce (8003)",
          duration: "00:00:17",
          talktime: "00:00:00",
          ringtime: "00:00:00",
          year: 2025,
          month: 1,
          day: 27,
          starttime: "07:12:31",
          stoptime: "07:12:53",
          inorout: "inbound",
          status: "completed",
          button:
            '<button class="btn btn-sm round CallDetailsButton btn-outline-danger" data-type="11198"> Details</button>',
          durationstring: "00:00:17",
          talktimestring: "00:00:00",
          ringtimestring: "00:00:00",
          date: "27.01.2025",
          starttimestring: "07:12:31",
          stoptimestring: "07:12:53",
          tablecolumninorout:
            '<span class="badge badge-success">Inbound</span>',
          tablecolumnstatus:
            '<span class="badge badge-completed"><i class="la la-check" style="font-size: unset;"></i> Completed</span>',
          tablecolumnduration:
            '<div class="table-column-duration"><i class="la la-clock"></i> 00:00:17</div>',
          tablecolumntalktime:
            '<div class="table-column-talktime"><i class="la la-clock"></i> 00:00:00</div>',
          tablecolumnringtime:
            '<div class="table-column-ringtime"><i class="la la-clock"></i> 00:00:00</div>',
          tablecolumndate:
            '<div class="table-column-date"><img src="/app-assets/images/icons/filter-calendar.svg"> 27.01.2025</div>',
          tablecolumnstarttime:
            '<div class="table-column-starttime"><i class="la la-clock"></i> 07:12:31</div>',
          tablecolumnstoptime:
            '<div class="table-column-stoptime"><i class="la la-clock"></i> 07:12:53</div>',
          tablecolumnfrom:
            '<div class="table-column-from"><img src="/app-assets/images/icons/user-from.svg"> 05343303369</div>',
          tablecolumnto:
            '<div class="table-column-to"><img src="/app-assets/images/icons/user-to.svg"> Turkce (8003)</div>',
          tablecolumnbutton:
            '<a class="CallDetailsButton" data-type="11198"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
          excelinorout: "Inbound",
          excelstatus: "Completed",
        },
        {
          $id: "6",
          call_id: 11197,
          from: "ADNAN DIKICI (5010)",
          to: "05496770049",
          duration: "00:02:57",
          talktime: "00:02:53",
          ringtime: "00:00:04",
          year: 2025,
          month: 1,
          day: 27,
          starttime: "03:28:37",
          stoptime: "03:31:34",
          inorout: "outbound",
          status: "completed",
          button:
            '<button class="btn btn-sm round CallDetailsButton btn-outline-danger" data-type="11197"> Details</button>',
          durationstring: "00:02:57",
          talktimestring: "00:02:53",
          ringtimestring: "00:00:04",
          date: "27.01.2025",
          starttimestring: "03:28:37",
          stoptimestring: "03:31:34",
          tablecolumninorout:
            '<span class="badge badge-danger">Outbound</span>',
          tablecolumnstatus:
            '<span class="badge badge-completed"><i class="la la-check" style="font-size: unset;"></i> Completed</span>',
          tablecolumnduration:
            '<div class="table-column-duration"><i class="la la-clock"></i> 00:02:57</div>',
          tablecolumntalktime:
            '<div class="table-column-talktime"><i class="la la-clock"></i> 00:02:53</div>',
          tablecolumnringtime:
            '<div class="table-column-ringtime"><i class="la la-clock"></i> 00:00:04</div>',
          tablecolumndate:
            '<div class="table-column-date"><img src="/app-assets/images/icons/filter-calendar.svg"> 27.01.2025</div>',
          tablecolumnstarttime:
            '<div class="table-column-starttime"><i class="la la-clock"></i> 03:28:37</div>',
          tablecolumnstoptime:
            '<div class="table-column-stoptime"><i class="la la-clock"></i> 03:31:34</div>',
          tablecolumnfrom:
            '<div class="table-column-from"><img src="/app-assets/images/icons/user-from.svg"> ADNAN DIKICI (5010)</div>',
          tablecolumnto:
            '<div class="table-column-to"><img src="/app-assets/images/icons/user-to.svg"> 05496770049</div>',
          tablecolumnbutton:
            '<a class="CallDetailsButton" data-type="11197"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
          excelinorout: "Outbound",
          excelstatus: "Completed",
        },
      ],
    },
    reportDate: "2025/01/27 08:47:27",
  };
  const columns: TableColumn<ReportData>[] = [
    {
      name: "Date",
      selector: (row) => row.tablecolumndate,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumndate }} />
      ),
      sortable: true,
    },
    {
      name: "Start Time",
      selector: (row) => row.tablecolumnstarttime,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnstarttime }} />
      ),
      sortable: true,
    },
    {
      name: "From",
      selector: (row) => row.tablecolumnfrom,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnfrom }} />
      ),
      sortable: true,
    },
    {
      name: "To",
      selector: (row) => row.tablecolumnto,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnto }} />
      ),
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.tablecolumninorout,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumninorout }} />
      ),
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row) => row.tablecolumnduration,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnduration }} />
      ),
      sortable: true,
    },
    {
      name: "Talk Time",
      selector: (row) => row.tablecolumntalktime,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumntalktime }} />
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.tablecolumnstatus,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnstatus }} />
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.tablecolumnbutton,
      cell: (row) => (
        <div
          onClick={() => setopen(true)}
          dangerouslySetInnerHTML={{ __html: row.tablecolumnbutton }}
        />
      ),
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
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/2.2.1/css/dataTables.dataTables.css"
      />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <CardHeader title="Reports" />
            <div className="card-content">
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
      </div>
      <CallInfoDetails status={open} setStatus={setopen} />
    </>
  );
};

export default ReportTable;
