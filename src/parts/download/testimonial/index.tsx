import React from "react";

const Testimonial: React.FC = () => (
  <section className="section-test-download">
    <div className="custom-container">
      <h3>Testimonials</h3>
      <img src="/images/download/essilor.png" alt="Essilor" />
      <p>
        The CDR Cloud solution was the fastest way for our management team to
        generate the reports needed for our call center. The 3CX partner
        activated this service in less than an hour and we received a simple set
        of login credentials.
      </p>

      <div className="down-profile">
        <img src="/images/download/cdravatar.png" alt="Ionut ANTON" />
        <h4>Ionut ANTON</h4>
        <span>IT Administrator</span>
      </div>
    </div>
  </section>
);

export default Testimonial;
