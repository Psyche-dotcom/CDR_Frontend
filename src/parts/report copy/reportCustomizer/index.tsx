"use client";
import FavFilterRow from "@/components/others/favfilterrow";
import React, { useState } from "react";

const ReportCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block ${
        isOpen && "open"
      }`}
    >
      <a
        className="customizer-close"
        href="#"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="ft-x font-medium-3"></i>
      </a>
      <a
        className="customizer-toggle box-shadow-3"
        style={{ backgroundColor: "#ffefc0" }}
        href="#"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img
          className="align-baseline font-medium-3 spinner white"
          src="/app-assets/images/icons/star.svg"
          alt="toggle icon"
        />
      </a>{" "}
      <div className="customizer-content p-2 ps">
        <h4 className="text-uppercase mb-0">
          Favorite Filter List
          {/* {"CDR_FavoriteFilterList"} */}
        </h4>
        <hr />
        <div id="FavoriteReportList">
          {/* <img
            src="/app-assets/images/loading.gif"
            style={{
              display: "block",
              margin: "0 auto",
              width: "64px",
              height: "64px",
            }}
            alt="Loading..."
          /> */}
          <FavFilterRow
            filterdata={JSON.stringify({
              Title: "fav1",
              DatesStart: "",
              DatesEnd: "",
              Source: "1",
              SourceCriteria: "1",
              SourceCriteriaInput: "",
              Target: "1",
              TargetCriteria: "1",
              TargetCriteriaInput: "",
              Status: "1",
            })}
            title="Fav 1"
            id="2"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportCustomizer;
