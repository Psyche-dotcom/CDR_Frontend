import Link from "next/link";
import React from "react";

const CloudFeature: React.FC = () => (
  <section className="section-project-right-down">
    <div className="custom-container">
      <div className="row">
        <div className="col-md-5">
          <h2 className="down-title">CDR Cloud Features</h2>
          <p className="down-description">
            If you want a simple way to monitor your calls, then look no
            further. CDR Cloud has an impressive pack of features to help you
            easily follow your team’s phone calls.
          </p>
          <Link href="/Home/Pricing" className="morebutton">
            VIEW PRICES
          </Link>
        </div>
        <div className="col-md-7">
          <img src="/images/download/2.png" alt="CDR Cloud Features" />
        </div>
      </div>
    </div>
  </section>
);

export default CloudFeature;
