"use client";
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";

const mockData = {
  $id: "1",
  users: {
    $id: "2",
    $values: [
      {
        $id: "3",
        dn: "2160",
        display_name: "Emre Orhan",
        totalinbound: 160,
        totaloutbound: 0,
        totalmissed: 92,
      },
      {
        $id: "4",
        dn: "2161",
        display_name: "Emre Orhan",
        totalinbound: 71,
        totaloutbound: 0,
        totalmissed: 42,
      },
      {
        $id: "5",
        dn: "5010",
        display_name: "ADNAN DIKICI",
        totalinbound: 0,
        totaloutbound: 3,
        totalmissed: 0,
      },
      {
        $id: "6",
        dn: "5027",
        display_name: "GUVENLIK",
        totalinbound: 1,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "7",
        dn: "1001",
        display_name: "Hiddenbay Info",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "8",
        dn: "1200",
        display_name: "V2 Resepsiyon",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "9",
        dn: "2220",
        display_name: "Çetin Altaş",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "10",
        dn: "2250",
        display_name: "Mehmet İbili",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "11",
        dn: "2260",
        display_name: "Süleyman Çelik",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "12",
        dn: "2110",
        display_name: "Assema Ualiyeva",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "13",
        dn: "2370",
        display_name: "Gönül Keskin",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "14",
        dn: "2270",
        display_name: "Ümit Ögüd",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "15",
        dn: "2280",
        display_name: "Caner Tura",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "16",
        dn: "2410",
        display_name: "İbrahim Burhan",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "17",
        dn: "2440",
        display_name: "Ferhat Güneş",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "18",
        dn: "2330",
        display_name: "Yurdagül Sertkaya",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "19",
        dn: "2170",
        display_name: "2170 BOS",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "20",
        dn: "2350",
        display_name: "2350 BOS",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "21",
        dn: "2420",
        display_name: "2420 BOS",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "22",
        dn: "1000",
        display_name: "Emre Dikici",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "23",
        dn: "1220",
        display_name: "V2 Oda 2",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "24",
        dn: "1230",
        display_name: "V2 Oda 3",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "25",
        dn: "1240",
        display_name: "V2 Oda 4",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "26",
        dn: "1250",
        display_name: "V2 Oda 5",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "27",
        dn: "1260",
        display_name: "V2 Oda 6",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "28",
        dn: "1270",
        display_name: "V2 Oda 7",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "29",
        dn: "5000",
        display_name: "OPERATOR",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "30",
        dn: "5011",
        display_name: "Mert Uzunoğlu",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "31",
        dn: "5025",
        display_name: "Ainur TANADBAYEVA",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "32",
        dn: "2140",
        display_name: "Gözde Kursav",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "33",
        dn: "5026",
        display_name: "MUHASEBE Emine hn",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "34",
        dn: "2360",
        display_name: "Zeliha Bayram",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "35",
        dn: "5040",
        display_name: "Snack Bar",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "36",
        dn: "1600",
        display_name: "Villa 6",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "37",
        dn: "2580",
        display_name: "Adnan Ev",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "38",
        dn: "7500",
        display_name: "Rukiye Dikici",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "39",
        dn: "1210",
        display_name: "V2 Oda 1",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "40",
        dn: "2310",
        display_name: "Nurcan Çiloğlu",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "41",
        dn: "2868",
        display_name: "Ainur Tanadbayeva Cep",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
      {
        $id: "42",
        dn: "2320",
        display_name: "Merve Önder",
        totalinbound: 0,
        totaloutbound: 0,
        totalmissed: 0,
      },
    ],
  },
};
const UsersExTable: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        pageLength: 20,
        data: mockData.users.$values.map((user) => ({
          No: user.dn,
          NameSurname: `<div>${user.display_name}</div>`,
          Email: `<div class="person-email" id="email-${user.dn}"></div>`,
          Phone: `<div class="person-phone" id="phone-${user.dn}"></div>`,
          TotalInbound:
            user.totalinbound > 0
              ? `<span style="font-weight:bold; color:#00b392">${user.totalinbound}</span>`
              : user.totalinbound,
          TotalOutbound:
            user.totaloutbound > 0
              ? `<span style="font-weight:bold; color:#FF0266">${user.totaloutbound}</span>`
              : user.totaloutbound,
          TotalMissed:
            user.totalmissed > 0
              ? `<span style="font-weight:bold; color:#FF8C4B">${user.totalmissed}</span>`
              : user.totalmissed,
          Button: `<a class="CallDetailsButton" href="/dashboard2/user/${user.dn}">
                     <img src="/app-assets/images/icons/eye-table.svg" alt="View Details">
                   </a>`,
        })),
        columns: [
          { data: "No" },
          { data: "NameSurname" },
          { data: "Email" },
          { data: "Phone" },
          { data: "TotalInbound" },
          { data: "TotalOutbound" },
          { data: "TotalMissed" },
          { data: "Button" },
        ],
        dom: "Bfrtip",
        buttons: [
          {
            extend: "excelHtml5",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6],
            },
          },
        ],
        language: {
          //@ts-ignore
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sSearch: "Search:",
          sZeroRecords: "No matching records found",
          oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
          },
        },
        responsive: true,
        autoWidth: false,
      });
      return () => {
        table.destroy();
      };
    }
  }, []);

  return (
    <div className="table-responsive">
      <table
        ref={tableRef}
        className="table table-de mb-0 table-hover display nowrap"
        id="CompanyPersonTable"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Total Inbound Calls</th>
            <th>Total Outbound Calls</th>
            <th>Unanswered Missed Calls</th>
            <th className="all"></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default UsersExTable;
