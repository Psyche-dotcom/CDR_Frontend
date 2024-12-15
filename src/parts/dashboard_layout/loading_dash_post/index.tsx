import React from "react";

const LoadingDashPost = () => {
  return (
    <div className="PostLoader">
      <div className="loader">
        <div className="preloader">
          <div className="spinner-layer pl-red">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <p>
          {/* {_staticService.GetLocalization("CDR_IslemDevamEdiyor").Data} */}
        </p>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default LoadingDashPost;
