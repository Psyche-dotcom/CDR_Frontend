"use client";
import { Package } from "@/interface/component";

import PricingList from "../price_list";
import { useEffect, useState } from "react";

interface PricingSectionProps {
  type: boolean;
  monthlyPackages: any;
  annualPackages: any;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  type,
  monthlyPackages,
  annualPackages,
}) => {
  const [displayType, setDisplayType] = useState(type);

  useEffect(() => {
    setDisplayType(type);
  }, [type]);
  return (
    <section className="section-pricing">
      <div
        className="mg-hero-overley"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgb(255 255 255) 100%)",
        }}
      ></div>
      <div className="clouds_one"></div>
      <div className="clouds_two"></div>
      <div className="clouds_three"></div>
      <div className="custom-container">
        <div className="row justify-content-center">
          <PricingList
            displayType={displayType}
            monthlyPackages={monthlyPackages}
            annualPackages={annualPackages}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
