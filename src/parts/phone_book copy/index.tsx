"use client";
import DashboardContentHeaderV2 from "@/components/dashbobard_contentheaderv2";
import React, { useEffect, useState } from "react";
import PhoneBookContent from "./phonebookContent";
import ExportModal from "./exportmodal";
import CreateUserModal from "./createusermodal";
import Script from "next/script";
import "../../css/phonebook.css";
import DeleteUserModal from "./deleteusermodal";
const PhoneBookMainSection2 = () => {
  const [userObj, setUserObj] = useState<Record<string, any> | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any> | null>(null);
  const [filterFormData, setFilterFormData] = useState<Record<
    string,
    any
  > | null>(null);

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

  useEffect(() => {
    if (userObj !== null) {
      setFormData({
        firstname: userObj?.firstname,
        lastname: userObj?.lastname,
        email: userObj?.email,
        phonenumber: userObj?.phonenumber,
        company: userObj?.company,
      });
    } else {
      setFormData(null);
    }
  }, [userObj]);

  return (
    <>
      <DashboardContentHeaderV2
        title="Company Phonebook"
        dashboardLabel="Dashboard"
        activeLabel="Company Phonebook"
      />
      <PhoneBookContent
        setIsOpen={setIsOpen}
        setUserObj={setUserObj}
        userObj={userObj}
        setIsDeleteOpen={setIsDeleteOpen}
        filterFormData={filterFormData}
        setFilterFormData={setFilterFormData}
      />
      <ExportModal
        onFileChange={handleFileChange}
        localizationService={LocalizationService}
      />
      <CreateUserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formData={formData}
        setFormData={setFormData}
      />
      <DeleteUserModal
        isDeleteOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
    </>
  );
};

export default PhoneBookMainSection2;
