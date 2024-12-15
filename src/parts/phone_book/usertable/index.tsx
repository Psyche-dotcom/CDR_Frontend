import React from "react";

interface LocalizationService {
  getLocalization: (key: string) => { data: string };
}

const UserTablev3: React.FC<{ localizationService: LocalizationService }> = ({
  localizationService,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row text-right">
          <div className="col-md-12" style={{ paddingRight: "24px" }}>
            <a
              className="create-user-modal"
              title={localizationService.getLocalization("CDR_AddUser").data}
              data-placement="top"
            >
              <img
                src="/app-assets/images/icons/create-user-phonebook.svg"
                style={{ width: "34px" }}
                alt="Create User"
              />
            </a>
            <a
              className="update-user-modal ml-1"
              title={localizationService.getLocalization("CDR_UpdateUser").data}
              data-placement="top"
            >
              <img
                src="/app-assets/images/icons/update-user-phonebook.svg"
                style={{ width: "34px" }}
                alt="Update User"
              />
            </a>
            <a
              className="deleteRows ml-1"
              title={localizationService.getLocalization("CDR_DeleteUser").data}
              data-placement="top"
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
              data-placement="top"
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
              data-placement="top"
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
          <table
            className="table table-de mb-0 company-phonebook-table display nowrap"
            id="DataList"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                  {localizationService.getLocalization("CDR_FirstName").data}
                </th>
                <th>
                  {localizationService.getLocalization("CDR_LastName").data}
                </th>
                <th>{localizationService.getLocalization("CDR_Email").data}</th>
                <th>
                  {localizationService.getLocalization("CDR_Mobile").data}
                </th>
                <th>
                  {localizationService.getLocalization("CDR_CompanyName").data}
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTablev3;
