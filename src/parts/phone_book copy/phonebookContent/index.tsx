"use client";
import PhoneBookCard from "@/components/Card/phone_book_card";
import React from "react";
import FilterFormField from "../filterfied";
import UserTablev3 from "../usertable";

const PhoneBookContent = () => {
  const localizationService = {
    getLocalization: (key: string) => {
      const translations: { [key: string]: { data: string } } = {
        CDR_Name: { data: "Name" },
        CDR_Email: { data: "Email" },
        CDR_Mobile: { data: "Mobile" },
        CDR_Filter: { data: "Filter" },
        CDR_AddUser: { data: "Add User" },
        CDR_UpdateUser: { data: "Update User" },
        CDR_DeleteUser: { data: "Delete User" },
        CDR_ExportExcel: { data: "Export to Excel" },
        CDR_ImportExcel: { data: "Import from Excel" },
        CDR_FirstName: { data: "First Name" },
        CDR_LastName: { data: "Last Name" },
        CDR_CompanyName: { data: "Company Name" },
      };
      return translations[key] || { data: key };
    },
  };
  return (
    <PhoneBookCard title="Contacts">
      <FilterFormField localizationService={localizationService} />
      <UserTablev3 localizationService={localizationService} />
    </PhoneBookCard>
  );
};

export default PhoneBookContent;
