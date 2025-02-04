import React from "react";

interface LocalizationService {
  getLocalization: (key: string) => { data: string };
  setFilterFormData: React.Dispatch<
    React.SetStateAction<Record<string, any> | null>
  >;
  filterFormData: Record<string, any> | null;
}

const FilterFormField: React.FC<{
  localizationService: LocalizationService;
}> = ({ localizationService }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localizationService.setFilterFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value, // Dynamically update state based on input name
    }));
  };
  const handleSubmit = () => {
    console.log(localizationService.filterFormData);
  };
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
            name="NameSurname"
            value={localizationService.filterFormData?.NameSurname}
            id="NameSurname"
            onChange={handleChange}
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
            name={"email"}
            value={localizationService.filterFormData?.Email}
            onChange={handleChange}
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
            name={"Phone"}
            value={localizationService.filterFormData?.Phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-md-1">
        <div className="form-group">
          <button
            className="btn btn-primary"
            style={{ marginTop: "25px" }}
            id="Filter"
            onClick={handleSubmit}
          >
            {localizationService.getLocalization("CDR_Filter").data}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterFormField;
