import Image from "next/image";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="animation-preloader">
        <div className="spinner">
          <Image
            src="/images/orj-logo-light-3d.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="c" className="letters-loading">
            c
          </span>
          <span data-text-preloader="d" className="letters-loading">
            d
          </span>
          <span data-text-preloader="r" className="letters-loading">
            r
          </span>
          <span data-text-preloader="c" className="letters-loading">
            c
          </span>
          <span data-text-preloader="l" className="letters-loading">
            l
          </span>
          <span data-text-preloader="o" className="letters-loading">
            o
          </span>
          <span data-text-preloader="u" className="letters-loading">
            u
          </span>
          <span data-text-preloader="d" className="letters-loading">
            d
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
