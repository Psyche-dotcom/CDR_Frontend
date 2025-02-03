import ReportCard from "@/components/Card/reportcard";
import FormSection from "@/components/FormSection";
import RadioGroup2 from "@/components/RadioGroup2";

const FilterPanel = () => {
  return (
    <div className="row">
      <div className="col-12">
        <ReportCard
          title={
            "Filter"
            // localization("CDR_Filter")
          }
        >
          <div className="row">
            <div className="col-md-2">
              <FormSection
                iconSrc="/app-assets/images/icons/source.svg"
                title={
                  "Source"
                  // localization("CDR_Source")
                }
                sectionclass={"calls-source"}
              >
                <RadioGroup2
                  name="source-radio"
                  options={[
                    {
                      value: "1",
                      label: "All",
                      //   localization("CDR_All"),
                      checked: true,
                    },
                    {
                      value: "2",
                      label: "External Number",
                      // localization("CDR_ExternalNumber")
                    },
                    {
                      value: "3",
                      label: "Extensions",
                      //   localization("CDR_InternalExtensions"),
                    },
                  ]}
                />
              </FormSection>
            </div>

            <div className="col-md-3">
              <FormSection
                sectionclass="calls-source-criteria"
                iconSrc="/app-assets/images/icons/source-criteria.svg"
                title={
                  "Source Criteria"
                  // localization("CDR_SourceCriteria")
                }
              >
                <RadioGroup2
                  name="source-criteria-radio"
                  options={[
                    {
                      value: "1",
                      label: "All",
                      //   localization("CDR_All"),
                      checked: true,
                    },
                    {
                      value: "2",
                      label: "Extension or Range of Extensions",
                      // localization("CDR_ExtensionRange")
                    },
                    {
                      value: "3",
                      label: "Numbers",
                      // localization("CDR_Numbers")
                    },
                    {
                      value: "4",
                      label: "Numbers Contains",
                      // localization("CDR_NumbersContains")
                    },
                  ]}
                />
                <div
                  className="form-group mt-2"
                  id="SourceCriteriaInputDiv"
                  style={{ display: "none" }}
                >
                  <label>
                    {
                      "Number"
                      //   localization("CDR_Number")
                    }
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
                      // localization("CDR_ReportEmptyMessage")
                    }
                  </p>
                </div>
              </FormSection>
            </div>

            {/* Target Section */}
            <div className="col-md-2">
              <FormSection
                sectionclass="calls-target"
                iconSrc="/app-assets/images/icons/target.svg"
                title={
                  "Target"
                  // localization("CDR_Target")
                }
              >
                <RadioGroup2
                  name="target-radio"
                  options={[
                    {
                      value: "1",
                      label: "All",
                      //   localization("CDR_All"),
                      checked: true,
                    },
                    {
                      value: "2",
                      label: "External Number",
                      // localization("CDR_ExternalNumber")
                    },
                    {
                      value: "3",
                      label: "Extensions",
                      //   localization("CDR_InternalExtensions"),
                    },
                  ]}
                />
              </FormSection>
            </div>

            {/* Target Criteria */}
            <div className="col-md-3">
              <FormSection
                sectionclass="calls-target-criteria"
                iconSrc="/app-assets/images/icons/target-criteria.svg"
                title={
                  "Target Criteria"
                  // localization("CDR_TargetCriteria")
                }
              >
                <RadioGroup2
                  name="target-criteria-radio"
                  options={[
                    {
                      value: "1",
                      label: "All",
                      //   localization("CDR_All"),
                      checked: true,
                    },
                    {
                      value: "2",
                      label: "Extension or Range of Extensions",
                      //localization("CDR_ExtensionRange")
                    },
                    {
                      value: "3",
                      label: "Numbers",
                      // localization("CDR_Numbers")
                    },
                    {
                      value: "4",
                      label: "Numbers Contains",
                      // localization("CDR_NumbersContains")
                    },
                  ]}
                />
                <div
                  className="form-group mt-2"
                  id="TargetCriteriaInputDiv"
                  style={{ display: "none" }}
                >
                  <label>
                    {
                      "Number"
                      //localization("CDR_Number")
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
                    <i className="la la-exclamation"></i>
                    {"Field should not be empty"}
                    {/* {localization("CDR_ReportEmptyMessage")} */}
                  </p>
                </div>
              </FormSection>
            </div>

            {/* Call Status Section */}
            <div className="col-md-2">
              <FormSection
                sectionclass="calls-statue"
                iconSrc="/app-assets/images/icons/criteria-3.svg"
                title={
                  "criteria 3"
                  // localization("CDR_Criteria3")
                }
              >
                <RadioGroup2
                  name="criteria-radio"
                  options={[
                    {
                      value: "1",
                      label: "Answered & Unanswered Calls",
                      //   localization("CDR_AnsweredUnanswered"),
                      checked: true,
                    },
                    {
                      value: "2",
                      label: "Answered Calls",
                      // localization("CDR_AnsweredCalls")
                    },
                    {
                      value: "3",
                      label: "UnansweredCalls",
                      // localization("CDR_UnansweredCalls")
                    },
                  ]}
                />
              </FormSection>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right">
              <button className="btn btn-primary" style={{ marginTop: "25px" }}>
                Filter
                {/* {localization("CDR_Filter")} */}
              </button>
            </div>
          </div>
        </ReportCard>
      </div>
    </div>
  );
};

export default FilterPanel;
