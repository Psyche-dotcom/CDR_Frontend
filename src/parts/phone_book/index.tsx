"use client";
import DashboardContentHeaderV2 from "@/components/dashbobard_contentheaderv2";
import React from "react";
import PhoneBookContent from "./phonebookContent";
import ExportModal from "./exportmodal";
import CreateUserModal from "./createusermodal";
import Script from "next/script";
import "../../css/phonebook.css";
const PhoneBookMainSection = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const LocalizationService = {
    getLocalization: (key: string) => {
      const localizations: { [key: string]: { Data: string } } = {
        CDR_AddCotactsFromExcel: { Data: "Add Contacts from Excel" },
        CDR_SelectXlsFile: { Data: "Select an Excel file" },
        CDR_Cancel: { Data: "Cancel" },
        CDR_Upload: { Data: "Upload" },
      };
      return localizations[key] || { Data: "" };
    },
  };
  return (
    <>
      <DashboardContentHeaderV2
        title="Company Phonebook"
        dashboardLabel="Dashboard"
        activeLabel="Company Phonebook"
      />
      <PhoneBookContent />
      <ExportModal
        onFileChange={handleFileChange}
        localizationService={LocalizationService}
      />
      <CreateUserModal />

      <Script src="/app-assets/vendors/js/tables/datatable/datatables.min.js" />
      <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      />
      <link
        href="/app-assets/responsive-datatable/datatables.min.css"
        rel="stylesheet"
      />
      <Script
        src="/app-assets/responsive-datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/company-phone-book.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default PhoneBookMainSection;
