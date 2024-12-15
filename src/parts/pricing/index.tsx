"use client";
import React, { useEffect, useState } from "react";
import HeroPricing from "./hero_pricing";
import { useGetAllPricing } from "@/services/api_service/home_service";
import PricingSection from "./pricing_section";
import ContactUsPricing from "./contact_us";
const PricingMainSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };
  const {
    getAllPricingIsFetching,
    getAllPricingIsFetched,
    getAllPricingIsLoading,
    getAllPricingDataError,
    getAllPricingData,
    refreshgetAllPricingData,
    getAllPricingRequest,
  } = useGetAllPricing({ enabled: true });

  useEffect(() => {
    getAllPricingRequest(true);
  }, [getAllPricingRequest]);

  return (
    <>
      <HeroPricing isAnnual={isAnnual} onToggle={handleToggle} />

      <PricingSection
        type={isAnnual}
        monthlyPackages={getAllPricingData?.monthly?.packages}
        annualPackages={getAllPricingData?.annual?.packages}
      />
      <ContactUsPricing />
    </>
  );
};

export default PricingMainSection;
