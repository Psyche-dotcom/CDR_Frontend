import React from "react";

// Interface for the PackageItem props
interface PackageItemProps {
  id: string;
  name: string;
  price: string;
  description?: string;
  isSelected: boolean;
}

// Functional Component for Package Item
const PackageItem: React.FC<PackageItemProps> = ({
  id,
  name,
  price,
  description,
  isSelected,
}) => {
  return (
    <div className="col-xl-4 col-md-6 col-12">
      <div
        className={`card profile-card-with-cover package-list-item ${
          isSelected ? "selected" : ""
        }`}
      >
        <input type="hidden" className="SelectedPackageInput" value={id} />
        <div className="card-content card-deck text-center">
          <div className="card box-shadow">
            <div className="card-body">
              <h2 className="my-0 font-weight-bold">{name}</h2>
              <h1 className="pricing-card-title">
                {price} <small className="text-muted">/ mo</small>
              </h1>
              <ul
                className="list-unstyled mt-2 mb-2"
                style={{ minHeight: "50px" }}
              >
                {description && <li>{description}</li>}
              </ul>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className={`btn btn-lg package-button btn-block ${
                  isSelected ? "btn-warning" : "btn-outline-warning"
                }`}
              >
                {isSelected ? "Selected Package" : "Select Package"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
