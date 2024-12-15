import { Package } from "@/interface/component";
import React from "react";

interface PackageCardProps {
  packageItem: any;
  discountPackage?: any;
}

const PackageCard: React.FC<PackageCardProps> = ({
  packageItem,
  discountPackage,
}) => {
  const currencyIcon = (currency: number) => {
    return currency === 3 ? "$" : "€";
  };
  console.log("pack item", packageItem);
  const getDiscountPercentage = (
    itemYearPrice: number,
    monthlyYearPrice: number
  ) => {
    return (100 - ((itemYearPrice / 12) * 100) / monthlyYearPrice).toFixed(0);
  };

  return (
    <div className="pricing-list">
      <div className="top">
        {discountPackage && (
          <span>
            {getDiscountPercentage(
              packageItem.yearPrice,
              discountPackage.yearPrice
            )}
            %
          </span>
        )}
        <h1>{packageItem.name}</h1>
        {discountPackage && (
          <div className="discount-div">
            <span>
              {currencyIcon(packageItem.currency)}{" "}
              {discountPackage.yearPrice.toFixed(0)}
            </span>
          </div>
        )}
        <p>
          {currencyIcon(packageItem.currency)}
          <span className="price">
            {(packageItem.yearPrice / 12).toFixed(0)}
          </span>
          /per month <br />
          with <span className="special-text">annual payment</span>
        </p>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <img src="/images/check.png" alt="Check" /> <span>Hosted</span>{" "}
            Services
          </li>
          <li>
            <img src="/images/check.png" alt="Check" /> Multiple{" "}
            <span>Login</span> Options
          </li>
          <li>
            <img src="/images/check.png" alt="Check" /> Detailed{" "}
            <span>Reports</span>
          </li>
          <li>
            <img src="/images/check.png" alt="Check" /> Real Time{" "}
            <span>Trunk Status</span>
          </li>
        </ul>
      </div>
      <a href="/panel/page/index">
        Try for free <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default PackageCard;
