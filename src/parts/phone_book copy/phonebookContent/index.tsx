"use client";
import PhoneBookCard from "@/components/Card/phone_book_card";
import React from "react";
import FilterFormField from "../filterfied";
import UserTablev3 from "../usertable";

const PhoneBookContent = ({
  setIsOpen,
  setUserObj,
  userObj,
  setIsDeleteOpen,
  filterFormData,
  setFilterFormData,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUserObj: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
  userObj: Record<string, any> | null;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterFormData: React.Dispatch<
    React.SetStateAction<Record<string, any> | null>
  >;
  filterFormData: Record<string, any> | null;
}) => {
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
    setIsOpen: setIsOpen,
    setUserObj: setUserObj,
    userObj: userObj,
    setIsDeleteOpen: setIsDeleteOpen,
    filterFormData: filterFormData,
    setFilterFormData: setFilterFormData,
  };
  return (
    <PhoneBookCard title="Contacts">
      <FilterFormField localizationService={localizationService} />
      <UserTablev3 localizationService={localizationService} />
    </PhoneBookCard>
  );
};

export default PhoneBookContent;
