"use client";
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";

import DataTable, { TableColumn } from "react-data-table-component";
interface UserData {
  no: number;
  tablecolumnname: string;
  tablecolumnemail: string;
  tablecolumnphonenumber: string;
  totalinboundcalls: number;
  totaloutboundcalls: number;
  unansweredmissedcalls: number;
  tablecolumnbutton: string;
}

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
        no: 1001,
        totalinboundcalls: 0,
        totaloutboundcalls: 0,
        unansweredmissedcalls: 0,

        tablecolumnname:
          '<div class="table-column-date"><img src="/app-assets/avatar/H.svg" style="width:25px;margin-right: 5px;">Hiddenbay Info</div>',
        tablecolumnphonenumber:
          '<div class="person-phone"><img src="/app-assets/images/icons/ext-phone.svg" > 31614347080</div>',

        tablecolumnemail:
          '<div class="person-email" style="display:flex;gap:2px;" id="email-1000"><img src="/app-assets/images/icons/ext-mail.svg">emre@k2mbilisim.com</div>',
        tablecolumnbutton:
          '<a class="CallDetailsButton" href="/dashboard2/user/1000"><img src="/app-assets/images/icons/eye-table.svg" alt="View Details"></a>',
      },
    ],
  },
  reportDate: "2025/01/27 08:47:27",
};
const UsersExTable: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);

  const columns: TableColumn<UserData>[] = [
    {
      name: "No",
      selector: (row) => row.no,
    },
    {
      name: "Name",
      selector: (row) => row.tablecolumnname,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnname }} />
      ),
    },
    {
      name: "Email",
      selector: (row) => row.tablecolumnemail,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnemail }} />
      ),
    },
    {
      name: "Phone Number",
      selector: (row) => row.tablecolumnphonenumber,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnphonenumber }} />
      ),
    },
    {
      name: "Total Inbound Calls",
      selector: (row) => row.totalinboundcalls,
    },
    {
      name: "Total Outbound Calls",
      selector: (row) => row.totaloutboundcalls,
    },
    {
      name: "Unanswered Missed Calls",
      selector: (row) => row.unansweredmissedcalls,
    },
    {
      name: "Action",
      selector: (row) => row.tablecolumnbutton,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecolumnbutton }} />
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
    <div className="table-responsive">
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
  );
};

export default UsersExTable;
