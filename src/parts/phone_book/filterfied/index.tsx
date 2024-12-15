import React from "react";

interface LocalizationService {
  getLocalization: (key: string) => { data: string };
}

const FilterFormField: React.FC<{
  localizationService: LocalizationService;
}> = ({ localizationService }) => {
  return (
    <div className="row pl-2">
      <div className="col-md-2">
        <div className="form-group">
          <label htmlFor="NameSurname">
            {localizationService.getLocalization("CDR_Name").data}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            defaultValue=""
            id="NameSurname"
          />
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-group">
          <label htmlFor="Email">
            {localizationService.getLocalization("CDR_Email").data}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            defaultValue=""
            id="Email"
          />
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-group">
          <label htmlFor="Phone">
            {localizationService.getLocalization("CDR_Mobile").data}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            defaultValue=""
            id="Phone"
          />
        </div>
      </div>
      <div className="col-md-1">
        <div className="form-group">
          <button
            className="btn btn-primary"
            style={{ marginTop: "25px" }}
            id="Filter"
          >
            {localizationService.getLocalization("CDR_Filter").data}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterFormField;
