import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { TableColumn } from "react-data-table-component";

interface LocalizationService {
  getLocalization: (key: string) => { data: string };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUserObj: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
  userObj: Record<string, any> | null;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PhoneBookData {
  idphonebook: number;
  firstname: string;
  lastname: string;
  tableemail: string;
  tablephone: string;
  tablecompany: string;
}

interface ApiResponse {
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
  data: {
    $values: PhoneBookData[];
  };
}
const response = {
  $id: "1",
  draw: 1,
  recordsFiltered: 3,
  recordsTotal: 3,
  data: {
    $id: "2",
    $values: [
      {
        $id: "3",
        idphonebook: 3,
        firstname: "Saheeddzfgd",
        lastname: "Babatundescsd",
        phonenumber: "08160250471",
        company: "jbdhfb",
        email: "bsaheed745439@gmail.com",
        tableemail:
          '<img src="/app-assets/images/icons/ext-mail.svg" class="mr-1">bsaheed745439@gmail.com',
        tablephone:
          '<img src="/app-assets/images/icons/ext-phone.svg" class="mr-1">08160250471',
        tablecompany:
          '<img src="/app-assets/images/icons/bag-menu.svg" class="mr-1">jbdhfb',
      },
      {
        $id: "4",
        idphonebook: 4,
        firstname: "test",
        lastname: "test",
        phonenumber: "test",
        company: "test",
        email: "test",
        tableemail:
          '<img src="/app-assets/images/icons/ext-mail.svg" class="mr-1">test',
        tablephone:
          '<img src="/app-assets/images/icons/ext-phone.svg" class="mr-1">test',
        tablecompany:
          '<img src="/app-assets/images/icons/bag-menu.svg" class="mr-1">test',
      },
      {
        $id: "5",
        idphonebook: 7,
        firstname: "test1",
        lastname: "test1",
        phonenumber: "test1",
        company: "test1",
        email: "test1",
        tableemail:
          '<img src="/app-assets/images/icons/ext-mail.svg" class="mr-1">test1',
        tablephone:
          '<img src="/app-assets/images/icons/ext-phone.svg" class="mr-1">test1',
        tablecompany:
          '<img src="/app-assets/images/icons/bag-menu.svg" class="mr-1">test1',
      },
    ],
  },
};
const UserTablev3: React.FC<{ localizationService: LocalizationService }> = ({
  localizationService,
}) => {
  const [data, setData] = useState<PhoneBookData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);

  const fetchData = async () => {
    setLoading(true);
    try {
      setData(response.data.$values);
      setTotalRows(response.recordsTotal);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, perPage]);

  const columns: TableColumn<PhoneBookData>[] = [
    {
      name: localizationService.getLocalization("CDR_FirstName").data,
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: localizationService.getLocalization("CDR_LastName").data,
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: localizationService.getLocalization("CDR_Email").data,
      selector: (row) => row.tableemail,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tableemail }} />
      ),
      sortable: true,
    },
    {
      name: localizationService.getLocalization("CDR_Mobile").data,
      selector: (row) => row.tablephone,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablephone }} />
      ),
      sortable: true,
    },
    {
      name: localizationService.getLocalization("CDR_CompanyName").data,
      selector: (row) => row.tablecompany,
      cell: (row) => (
        <div dangerouslySetInnerHTML={{ __html: row.tablecompany }} />
      ),
      sortable: true,
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row text-right">
          <div className="col-md-12" style={{ paddingRight: "24px" }}>
            {/* Action buttons */}
            <a
              onClick={() => {
                localizationService.setUserObj(null);
                localizationService.setIsOpen(true);
              }}
              className="create-user-modal"
              title={localizationService.getLocalization("CDR_AddUser").data}
            >
              <img
                src="/app-assets/images/icons/create-user-phonebook.svg"
                style={{ width: "34px" }}
                alt="Create User"
              />
            </a>
            <a
              onClick={() => {
                if (localizationService.userObj !== null) {
                  localizationService.setIsOpen(true);
                }
              }}
              className="update-user-modal ml-1"
              title={localizationService.getLocalization("CDR_UpdateUser").data}
            >
              <img
                src="/app-assets/images/icons/update-user-phonebook.svg"
                style={{ width: "34px" }}
                alt="Update User"
              />
            </a>
            <a
              onClick={() => {
                if (localizationService.userObj !== null) {
                  localizationService.setIsDeleteOpen(true);
                }
              }}
              className="deleteRows ml-1"
              title={localizationService.getLocalization("CDR_DeleteUser").data}
            >
              <img
                src="/app-assets/images/icons/delete-user-phonebook.svg"
                style={{ width: "34px" }}
                alt="Delete User"
              />
            </a>
            <a
              className="exportExcel mr-1 ml-1"
              title={
                localizationService.getLocalization("CDR_ExportExcel").data
              }
            >
              <img
                src="/app-assets/images/excel-icon.svg"
                style={{ width: "40px" }}
                alt="Export Excel"
              />
            </a>
            <a
              className="import-excel"
              title={
                localizationService.getLocalization("CDR_ImportExcel").data
              }
            >
              <img
                src="/app-assets/images/excel-import-icon.svg"
                style={{ width: "40px" }}
                alt="Import Excel"
              />
            </a>
          </div>
        </div>
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
            onRowClicked={(row) => localizationService.setUserObj(row)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTablev3;
