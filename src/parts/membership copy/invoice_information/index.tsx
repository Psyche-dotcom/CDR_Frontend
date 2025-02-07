const InvoiceInformation: React.FC = () => {
  return (
    <fieldset
      id="steps-uid-1-p-1"
      role="tabpanel"
      aria-labelledby="steps-uid-1-h-1"
      className="body current"
      aria-hidden="false"
    >
      <div className="step-invoice-content">
        <div
          className="alert bg-info alert-icon-left alert-dismissible mt-1"
          role="alert"
        >
          <span className="alert-icon">
            <i className="la la-info"></i>
          </span>
          After update any information, Please click{" "}
          <strong>Save Changes</strong> button
        </div>

        <div className="form-group">
          <label>Country</label>
          <select
            className="form-control bselect select2-hidden-accessible Setted"
            data-live-search="true"
            id="invoice-country"
            style={{ width: "100%" }}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="0" selected disabled>
              Please select a country
            </option>
            <option value="1">Afghanistan</option>
            <option value="2">Albania</option>
            <option value="3">Algeria</option>
            <option value="4">American Samoa</option>
            <option value="5">Andorra</option>
            {/* Add all other country options here */}
            <option value="246">Zimbabwe</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control"
            id="invoice-address"
            maxLength={2000}
            style={{ resize: "none" }}
          >
            Denizli Mh. Yalı Cd. No:2/B Urla/İzmir
          </textarea>
        </div>

        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            className="form-control"
            maxLength={10}
            value="35000"
            id="invoice-zip-code"
          />
        </div>
      </div>
    </fieldset>
  );
};
