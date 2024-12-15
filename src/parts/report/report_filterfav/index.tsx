import RadioOption from "@/components/RadioOption";

const ReportFilterFav: React.FC = () => (
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Filter</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li>
                <a data-action="collapse">
                  <i className="ft-minus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content collapse show report-content-filter">
          <div className="card-body">
            <div className="row">
              {/* Calls Source Section */}
              <div className="col-md-2">
                <h4 className="form-section calls-source">
                  <img
                    src="/app-assets/images/icons/source.svg"
                    alt="source icon"
                  />
                  Source
                </h4>
                <RadioOption
                  name="source-radio"
                  value="1"
                  label={
                    "All"
                    // localizationService.GetLocalization("CDR_All").Data
                  }
                  checked
                />
                <RadioOption
                  name="source-radio"
                  value="2"
                  label={
                    "External Number"
                    // localizationService.GetLocalization("CDR_ExternalNumber").Data
                  }
                />
                <RadioOption
                  name="source-radio"
                  value="3"
                  label={
                    "Internal Extensions"
                    // localizationService.GetLocalization(
                    //   "CDR_InternalExtensions"
                    // ).Data
                  }
                />
              </div>

              {/* Calls Source Criteria Section */}
              <div className="col-md-3">
                <h4 className="form-section calls-source-criteria">
                  <img
                    src="/app-assets/images/icons/source-criteria.svg"
                    alt="source criteria icon"
                  />
                  {
                    "Source Criteria"

                    // localizationService.GetLocalization("CDR_SourceCriteria")
                    //   .Data
                  }
                </h4>
                <RadioOption
                  name="source-creteria-radio"
                  value="1"
                  label={
                    "All"
                    // localizationService.GetLocalization("CDR_All").Data
                  }
                  checked
                />
                <RadioOption
                  name="source-creteria-radio"
                  value="2"
                  label={
                    "Extension or Range of Extensions"
                    // localizationService.GetLocalization("CDR_ExtensionRange")
                    //   .Data
                  }
                  dataPlaceholder="100-150,162-175,177"
                />
                <RadioOption
                  name="source-creteria-radio"
                  value="3"
                  label={
                    "Numbers"
                    // localizationService.GetLocalization("CDR_Numbers").Data
                  }
                  dataPlaceholder="05555555555"
                />
                <RadioOption
                  name="source-creteria-radio"
                  value="4"
                  label={
                    "Numbers Contains"
                    // localizationService.GetLocalization("CDR_NumbersContains")
                    //   .Data
                  }
                  dataPlaceholder="555"
                />
                <div
                  className="form-group mt-2"
                  id="SourceCriteriaInputDiv"
                  style={{ display: "none" }}
                >
                  <label>
                    Number
                    {/* {localizationService.GetLocalization("CDR_Number").Data} */}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="SourceCriteriaInput"
                  />
                  <p
                    className="criteria-empty-message"
                    id="SourceCriteriaMessage"
                  >
                    <i className="la la-exclamation"></i>{" "}
                    {
                      "Field should not be empty"
                      //   localizationService.GetLocalization(
                      //     "CDR_ReportEmptyMessage"
                      //   ).Data
                    }
                  </p>
                </div>
              </div>

              {/* Calls Target Section */}
              <div className="col-md-2">
                <h4 className="form-section calls-target">
                  <img
                    src="/app-assets/images/icons/target.svg"
                    alt="target icon"
                  />
                  Target
                  {/* {localizationService.GetLocalization("CDR_Target").Data} */}
                </h4>
                <RadioOption
                  name="target-radio"
                  value="1"
                  label={
                    "All"
                    // localizationService.GetLocalization("CDR_All").Data
                  }
                  checked
                />
                <RadioOption
                  name="target-radio"
                  value="2"
                  label={
                    "External Number"
                    // localizationService.GetLocalization("CDR_ExternalNumber")
                    //   .Data
                  }
                />
                <RadioOption
                  name="target-radio"
                  value="3"
                  label={
                    "Extensions"
                    // localizationService.GetLocalization(
                    //   "CDR_InternalExtensions"
                    // ).Data
                  }
                />
              </div>

              {/* Calls Target Criteria Section */}
              <div className="col-md-3">
                <h4 className="form-section calls-target-criteria">
                  <img
                    src="/app-assets/images/icons/target-criteria.svg"
                    alt="target criteria icon"
                  />
                  {
                    "Target Criteria"
                    // localizationService.GetLocalization("CDR_TargetCriteria")
                    //   .Data
                  }
                </h4>
                <RadioOption
                  name="target-creteria-radio"
                  value="1"
                  label={
                    "All"
                    // localizationService.GetLocalization("CDR_All").Data
                  }
                  checked
                />
                <RadioOption
                  name="target-creteria-radio"
                  value="2"
                  label={
                    "Extension or Range of Extensions"
                    // localizationService.GetLocalization("CDR_ExtensionRange")
                    //   .Data
                  }
                  dataPlaceholder="100-150,162-175,177"
                />
                <RadioOption
                  name="target-creteria-radio"
                  value="3"
                  label={
                    "Numbers"
                    // localizationService.GetLocalization("CDR_Numbers").Data
                  }
                  dataPlaceholder="05555555555"
                />
                <RadioOption
                  name="target-creteria-radio"
                  value="4"
                  label={
                    "Numbers Contains"
                    // localizationService.GetLocalization("CDR_NumbersContains")
                    //   .Data
                  }
                  dataPlaceholder="555"
                />
                <div
                  className="form-group mt-2"
                  id="TargetCriteriaInputDiv"
                  style={{ display: "none" }}
                >
                  <label>
                    {
                      "Number"
                      // localizationService.GetLocalization("CDR_Number").Data
                    }
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="TargetCriteriaInput"
                  />
                  <p
                    className="criteria-empty-message"
                    id="TargetCriteriaMessage"
                  >
                    <i className="la la-exclamation"></i>{" "}
                    {
                      "Field should not be empty"
                      //   localizationService.GetLocalization(
                      //     "CDR_ReportEmptyMessage"
                      //   ).Data
                    }
                  </p>
                </div>
              </div>

              {/* Calls Statue Section */}
              <div className="col-md-2">
                <h4 className="form-section calls-statue">
                  <img
                    src="/app-assets/images/icons/criteria-3.svg"
                    alt="criteria icon"
                  />
                  {
                    "Status Criteria"
                    //   localizationService.GetLocalization("CDR_Criteria3").Data
                  }
                </h4>
                <RadioOption
                  name="criteria-radio"
                  value="1"
                  label={
                    "Answered & Unanswered Calls"
                    // localizationService.GetLocalization(
                    //   "CDR_AnsweredUnanswered"
                    // ).Data
                  }
                  checked
                />
                <RadioOption
                  name="criteria-radio"
                  value="2"
                  label={
                    "AnsweredCalls"

                    // localizationService.GetLocalization("CDR_AnsweredCalls")
                    //   .Data
                  }
                />
                <RadioOption
                  name="criteria-radio"
                  value="3"
                  label={
                    "UnansweredCalls"

                    // localizationService.GetLocalization("CDR_UnansweredCalls")
                    //   .Data
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group text-right">
                  <span className="fav-btn" id="AddFavorite">
                    <a></a>
                  </span>
                  <button
                    className="btn btn-primary"
                    id="Filter"
                    style={{ marginTop: "25px" }}
                  >
                    {
                      "Filter"
                      // localizationService.GetLocalization("CDR_Filter").Data
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReportFilterFav;
