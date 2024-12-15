import React from "react";
interface IToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

const HeroPricing: React.FC<IToggleProps> = ({ isAnnual, onToggle }) => {
  return (
    <section className="section-pricing-top">
      <div className="custom-container">
        <h1>No subscription fees. No paywalls. No hidden costs.</h1>
        <p>
          All of our plans are commission-free with no hidden charges!
          <br />
          With 30 days of full-access to our PRO plan, no credit card required.
        </p>
        <div className="row bottom pricing-check">
          <span>Monthly</span>
          <label className="toggle-control">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={onToggle}
              id="PriceCheck"
            />
            <span className="control"></span>
          </label>
          <span className={isAnnual ? "active" : ""}>Annually</span>
        </div>
      </div>
    </section>
  );
};
export default HeroPricing;
