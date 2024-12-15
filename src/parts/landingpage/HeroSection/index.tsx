// components/HeroSection.tsx
import ButtonLink from "@/components/Buttons/button_link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section-top mg-hero-header py-12 ">
      <div className="custom-container mx-auto px-4">
        <img
          src="/images/download/3CX-Logo.wine.png"
          alt="3CX Logo"
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-center mb-4">
          Hosted Calls Details Reporting Tool
        </h1>
        <p className="text-lg text-center mb-8">
          A channel-friendly hosted application to allow any PBX reseller to
          offer a simple, fast, and intuitive reporting and monitoring tool to
          customers of any size and from any business vertical.
        </p>
        <div className="flex justify-center space-x-4">
          <ButtonLink href="/pricing">Start for free</ButtonLink>
          <ButtonLink href="/download" style={{ background: "#4fd986" }}>
            Download
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
