import React from "react";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";

import FooterSection from "./Footer";
import SectionCard from "./SectionCard";
import OurFeatures from "./OurFeatures";
import { features } from "@/constant";
import "../../../public/css/landing.css";
import KeepSection from "./KeepSection";
import PaymentSection from "./PaymentCard";

const LandPage = () => {
  return (
    <>
      <div className="mg-hero-overley"></div>
      <div className="clouds_one"></div>
      <div className="clouds_two"></div>
      <div className="clouds_three"></div>
      <HeroSection />
      <ProjectSection
        imagePosition="left"
        imageSrc="/images/screenshot/home.png"
        title="Intuitive Overview Dashboard"
        subtitle="BUSINESS INTELLIGENCE"
        description="In one single screen, you can view in real-time everything that is happening with your telephone lines at any given moment."
        listItems={[
          "View on top all the cards with the most important information, revealing useful counters and graphs to help you make the best decisions.",
          "The information can be viewed in a Daily, Monthly, or Yearly mode, helping you zoom in and out to have a complete overall overview as well as in-depth screenshots.",
          "With a simple click, you can remove or add types of calls and provide accurate information based on the incoming or outgoing calls.",
          "TOP 5 is there to show the most important information and save you the time to search and run complicated filtering with information about Talk Time, Answered Calls, and Inbound or Outbound calls.",
        ]}
      />
      <div>
        <SectionCard
          leftContent={
            <h1 className="cdr-text" data-shadow="cdr?">
              <span>cdr?</span>
            </h1>
          }
          topContent={{
            imageSrc: "/images/earth-logo.svg",
            description:
              "Our company has taken its place in the IT distribution and software development areas, with its technological solutions that can respond to the changing and challenging IT&C needs of the customers, help businesses, increase productivity, offer competitive prices, and work understanding that prioritizes the highest ethical values.",
          }}
          bottomContent={{
            imageSrc: "/images/chart-logo.svg",
            description:
              "We are located in the beautiful Izmir, Turkey, with the offices right next to the seashore. We resell our products via a network of distributors and resellers on all the continents and in most of the regions.",
          }}
        />
      </div>
      <ProjectSection
        imagePosition="right"
        imageSrc="/images/screenshot/trunk.png"
        title="Real-Time Trunks Call Monitoring"
        subtitle="LIVE MONITORING"
        description="Without accessing the PBX console, you have the possibility to view in real-time the usage levels for all the trunks connected together with details for each of the active calls."
        listItems={[
          "Intuitive dashboard with graphical information displayed per trunk and in total for both incoming and outgoing calls.",
          "You can see immediately if the number of lines needs to be upgraded or which of the trunk lines is most used and improve your LCR strategy.",
          "If you have many trunks connected, you are able to add or remove trunks from the dashboard to keep only the important information in focus.",
          "See each call details in a table format with every single information you will need to know at any given moment and its outcome.",
        ]}
      />
      <OurFeatures features={features} />
      <KeepSection />
      <ProjectSection
        imagePosition="left"
        imageSrc="/images/screenshot/profile.png"
        title="Unlimited users and levels"
        subtitle="USER MANAGEMENT"
        description="Keeping control of your business communications is vital and the CDR tool enables you to add and give access to different users"
        listItems={[
          "Add a new user is extremely simple and the user must not necessarily be an extension of the PBX",
          "Monitor and audit the changes and keep full control over user’s application usage",
          "No need to access the PBX management console to set up rights and avoid a security risk if the user is able to view and download sensitive security details",
          "You can add as many users as you need, you will only be charged based on the PBX size and the number of simultaneous calls",
        ]}
      />
      <PaymentSection />
      <FooterSection />
    </>
  );
};

export default LandPage;
