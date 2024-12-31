"use client";
import React, { useEffect } from "react";
import UserExtensionHeader from "./extensionheader";
import UserHeaderContent from "./header_content";
import "../../css/extension.css";
import { useGetUserExtension } from "@/services/api_service/company_service";
import UserExtensionCard from "@/components/Card/user_extension_card";
import UserContactProfileCard from "@/components/Card/user_contact_profile_card";
import UserExtensionTable from "./user_extension_table";
import Script from "next/script";
interface UserExtensionMainPageProps {
  id: string;
}

const UserExtensionMainPage: React.FC<UserExtensionMainPageProps> = ({
  id,
}) => {
  const localizations = {
    CDR_CardSettings: "Card Settings",
    CDR_SelectTimes: "Select Time Periods",
    CDR_Daily: "Daily",
    CDR_Weekly: "Weekly",
    CDR_Monthly: "Monthly",
    CDR_Yearly: "Yearly",
    CDR_Dashboard: "Dashboard",
    CDR_CompanyExtensions: "Company Extensions",
    CDR_Extension_Statistic_Report: "Extension Statistic Report",
    CDR_TotalOfCalls: "Total Number of Calls",
    CDR_TotalTalkTime: "Total Talk Time",
    CDR_TotalNumberAnsweredCalls: "Total Number of Answered Calls",
    CDR_TotalNumberMissedCalls: "Total Number of Missed Calls",
    CDR_Top6TopCalls: "Top 6 - Calls",
    CDR_Top6TalkTime: "Top 6 - Talk Time",
    CDR_Top6MissedCalls: "Top 6 - Missed Calls",
    CDR_Top6AnsweredCalls: "Top 6 - Answered Calls",
    CDR_CallReportsLastData: "Call Reports (Last 500 Logs)",
    CDR_AllCalls: "All Calls",
    CDR_InboundCalls: "Inbound Calls",
    CDR_MissedCalls: "Missed Calls",
    CDR_OutboundCalls: "Outbound Calls",
    CDR_Ext2ExtCalls: "Internal Calls",
    CDR_CallId: "Call Id",
    CDR_Date: "Date",
    CDR_StartTime: "Start Time",
    CDR_From: "From",
    CDR_To: "To",
    CDR_Type: "Type",
    CDR_Duration: "Duration",
    CDR_TalkTime: "Talk Time",
    CDR_RingTime: "Ring Time",
    CDR_StopTime: "Stop Time",
    CDR_Status: "Status",
  };
  return (
    <>
      <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      />
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
        src="/app-assets/page-scripts/card-loading.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/calls.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/company-person-detail.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/audio/wavesurfer.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/audio/wavesurfer.cursor.min.js"
        strategy="afterInteractive"
      />

      <UserExtensionHeader localizations={localizations} />
      <UserHeaderContent id={id} localizations={localizations} />
      <div className="content-body">
        <div className="row">
          <UserExtensionCard
            icon={"la-phone info"}
            title={localizations.CDR_TotalOfCalls}
            dataclass={"info"}
            dataid={"totalcalls"}
            data={"0"}
            progressclass={
              "bg-gradient-x-info contactprofiletopcards-progress1"
            }
            progressid={"totalcalls-progress"}
          />
          <UserExtensionCard
            icon={"la-clock-o warning"}
            title={localizations.CDR_TotalTalkTime}
            dataclass={"warning"}
            dataid={"totaltalktime"}
            data={"00:00:00"}
            progressclass={
              "bg-gradient-x-warning contactprofiletopcards-progress2"
            }
            progressid={"totaltalktime-progress"}
          />
          <UserExtensionCard
            icon={"la-check success"}
            title={localizations.CDR_TotalNumberAnsweredCalls}
            dataclass={"success"}
            dataid={"numofanswered"}
            data={"0"}
            progressclass={
              "bg-gradient-x-success contactprofiletopcards-progress3"
            }
            progressid={"numofanswered-progress"}
          />
          <UserExtensionCard
            icon={"la la-ban danger"}
            title={localizations.CDR_TotalNumberMissedCalls}
            dataclass={"danger"}
            dataid={"numofmissed"}
            data={"0"}
            progressclass={
              "bg-gradient-x-danger contactprofiletopcards-progress4"
            }
            progressid={"numofmissed-progress"}
          />
        </div>

        <div className="row justify-content-center kisi-detay-tops">
          <UserContactProfileCard
            classcolor={"bg-totalnumber-call contactprofilebottomcards-color3"}
            iconclass={"ft-phone-outgoing"}
            title={localizations.CDR_Top6TopCalls}
            dataid={"TopSixConversationNumber"}
          />
          <UserContactProfileCard
            classcolor={"bg-outgoing-call contactprofilebottomcards-color3"}
            iconclass={"ft-phone-outgoing"}
            title={localizations.CDR_Top6TalkTime}
            dataid={"TopSixConversationTime"}
          />
          <UserContactProfileCard
            classcolor={"bg-incoming-call contactprofilebottomcards-color2"}
            iconclass={"ft-phone-incoming"}
            title={localizations.CDR_Top6AnsweredCalls}
            dataid={"TopSixAnsweredNumber"}
          />
          <UserContactProfileCard
            classcolor={"bg-danger-call contactprofilebottomcards-color1"}
            iconclass={"la la-ban"}
            title={localizations.CDR_Top6MissedCalls}
            dataid={"TopSixMissedNumber"}
          />
        </div>
        <UserExtensionTable localizations={localizations} />
      </div>
    </>
  );
};

export default UserExtensionMainPage;
