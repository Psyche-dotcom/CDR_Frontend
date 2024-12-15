import { LiquidButton } from "@/components/Buttons/liquid_button";
import React from "react";

const Pricing: React.FC = () => (
  <section className="section-pricing-card">
    <div className="custom-container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h1>Pricing</h1>
          <p>
            No hidden costs. Choose the annual option and get the special
            discount.
          </p>
        </div>
        <div className="col-md-6 col-sm-6 text-right">
          <span>30-DAYS FREE TRIAL</span>
          <h3>
            <span>€5</span>
            /month
          </h3>
          <h4>Click here for the complete price list</h4>
          <LiquidButton
            text="Get Started For Free"
            color1="#FFF500"
            color2="#20D8F9"
            color3="#20D8F9"
            href="Pricing"
            id={"price"}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
