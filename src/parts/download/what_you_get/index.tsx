import Link from "next/link";
import React from "react";

const WhatYouGet: React.FC = () => (
  <section className="section-project-down">
    <div className="custom-container">
      <div className="row">
        <div className="col-md-7">
          <img src="/images/download/3.png" alt="What you get" />
        </div>
        <div className="col-md-5">
          <h2 className="down-title">What you get</h2>
          <p className="down-description">
            We have developed the easiest user interface, based on real market
            demands, and we will continue to update it in the background
            bringing more features. You just sit back and monitor your calls.
          </p>
          <Link href="/pricing" className="morebutton">
            VIEW PRICES
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default WhatYouGet;
