import React from "react";
import ConnectionCard1 from "../connection_card_first";
import ConnectionCard2 from "../connection_card_second";

const ConnectionDetails = () => {
  return (
    <div
      className="content-body tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div className="row">
        <ConnectionCard1 />
        <ConnectionCard2 />
      </div>
    </div>
  );
};

export default ConnectionDetails;
