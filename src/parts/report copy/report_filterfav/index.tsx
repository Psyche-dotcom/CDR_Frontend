"use client";
import React from "react";
import RadioOption from "@/components/RadioOption";
import swal from "sweetalert";

const ReportFilterFav: React.FC = () => {
  const Localization = {
    sEmptyTable: "No data available in table",
    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
    sInfoEmpty: "Showing 0 to 0 of 0 entries",
    sInfoFiltered: "(filtered from _MAX_ total entries)",
    sLengthMenu: "Show _MENU_ entries",
    sLoadingRecords: "Loading...",
    sProcessing: "Processing..",
    sSearch: "Search",
    sZeroRecords: "No matching records found",
    sFirst: "First",
    sLast: "Last",
    sNext: "Next",
    sPrevious: "Previous",
    Favorite: "Favorite",
    FavoriBaslikMesaji: "Please write your favorite name",
    WriteSomething: "Write something",
    EnAz1SecimYap: "Select at least 1 option",
    Error: "Error",
    Success: "Success",
    AreYouSure: "Are You Sure",
    FavoriSilmekEminMisiniz: "Are you sure to delete your favorite filter?",
    EvetSil: "Yes, delete it",
    FavoriFiltrelemesiBulunamadi: "Favorite filter information not found",
    RecordingNotFound: "Recording Not Found",
    RecordingDownload: "Recording Download",
    AudioRecordingsVoiceRecord: "Audio Recordings Voice Record",
    WriteSomethingMessage: "Please give the favorite a name",
  };

  const addFilter = () => {
    swal({
      title: Localization.Favorite,
      text: Localization.FavoriBaslikMesaji,
      content: {
        element: "input",
        attributes: {
          placeholder: Localization.WriteSomething,
        },
      },
      buttons: {
        cancel: true,
        confirm: true,
      },
    }).then((inputValue) => {
      if (inputValue === null) return false;
      if (inputValue.trim() === "") {
        //@ts-ignore
        swal.showInputError(Localization.WriteSomethingMessage);
        return false;
      }
    });
  };

  return (
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
                    label="All"
                    checked
                  />
                  <RadioOption
                    name="source-radio"
                    value="2"
                    label="External Number"
                  />
                  <RadioOption
                    name="source-radio"
                    value="3"
                    label="Internal Extensions"
                  />
                </div>

                {/* Calls Source Criteria Section */}
                <div className="col-md-3">
                  <h4 className="form-section calls-source-criteria">
                    <img
                      src="/app-assets/images/icons/source-criteria.svg"
                      alt="source criteria icon"
                    />
                    Source Criteria
                  </h4>
                  <RadioOption
                    name="source-creteria-radio"
                    value="1"
                    label="All"
                    checked
                  />
                  <RadioOption
                    name="source-creteria-radio"
                    value="2"
                    label="Extension or Range of Extensions"
                    dataPlaceholder="100-150,162-175,177"
                  />
                  <RadioOption
                    name="source-creteria-radio"
                    value="3"
                    label="Numbers"
                    dataPlaceholder="05555555555"
                  />
                  <RadioOption
                    name="source-creteria-radio"
                    value="4"
                    label="Numbers Contains"
                    dataPlaceholder="555"
                  />
                  <div
                    className="form-group mt-2"
                    id="SourceCriteriaInputDiv"
                    style={{ display: "none" }}
                  >
                    <label>Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="SourceCriteriaInput"
                    />
                    <p
                      className="criteria-empty-message"
                      id="SourceCriteriaMessage"
                    >
                      <i className="la la-exclamation"></i> Field should not be
                      empty
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
                  </h4>
                  <RadioOption
                    name="target-radio"
                    value="1"
                    label="All"
                    checked
                  />
                  <RadioOption
                    name="target-radio"
                    value="2"
                    label="External Number"
                  />
                  <RadioOption
                    name="target-radio"
                    value="3"
                    label="Extensions"
                  />
                </div>

                {/* Calls Target Criteria Section */}
                <div className="col-md-3">
                  <h4 className="form-section calls-target-criteria">
                    <img
                      src="/app-assets/images/icons/target-criteria.svg"
                      alt="target criteria icon"
                    />
                    Target Criteria
                  </h4>
                  <RadioOption
                    name="target-creteria-radio"
                    value="1"
                    label="All"
                    checked
                  />
                  <RadioOption
                    name="target-creteria-radio"
                    value="2"
                    label="Extension or Range of Extensions"
                    dataPlaceholder="100-150,162-175,177"
                  />
                  <RadioOption
                    name="target-creteria-radio"
                    value="3"
                    label="Numbers"
                    dataPlaceholder="05555555555"
                  />
                  <RadioOption
                    name="target-creteria-radio"
                    value="4"
                    label="Numbers Contains"
                    dataPlaceholder="555"
                  />
                  <div
                    className="form-group mt-2"
                    id="TargetCriteriaInputDiv"
                    style={{ display: "none" }}
                  >
                    <label>Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="TargetCriteriaInput"
                    />
                    <p
                      className="criteria-empty-message"
                      id="TargetCriteriaMessage"
                    >
                      <i className="la la-exclamation"></i> Field should not be
                      empty
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
                    Status Criteria
                  </h4>
                  <RadioOption
                    name="criteria-radio"
                    value="1"
                    label="Answered & Unanswered Calls"
                    checked
                  />
                  <RadioOption
                    name="criteria-radio"
                    value="2"
                    label="AnsweredCalls"
                  />
                  <RadioOption
                    name="criteria-radio"
                    value="3"
                    label="UnansweredCalls"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group text-right">
                    <span
                      className="fav-btn"
                      id="AddFavorite"
                      onClick={addFilter}
                    >
                      <a></a>
                    </span>
                    <button
                      className="btn btn-primary"
                      id="Filter"
                      style={{ marginTop: "25px" }}
                    >
                      Filter
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
};

export default ReportFilterFav;
