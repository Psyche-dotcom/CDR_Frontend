import CardHeader from "../ReportCardtableHeader";
import TableHeader from "../TableHeader";

const ReportTable: React.FC = () => {
  const headers = [
    "Call ID",
    "Date",
    "Start Time",
    "From",
    "To",
    "Type",
    "Duration",
    "Talk Time",
    "Status",
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card" id="AllCallsCard">
          <CardHeader title="Reports" />
          <div className="card-content">
            <input type="hidden" id="ReportCount" value="-1" />
            <input type="hidden" id="ReportDate" value="" />
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive mt-2 mb-2">
                  <table
                    className="table table-de mb-0 report-table display nowrap table-hover"
                    id="AllTable"
                    style={{ width: "100%" }}
                  >
                    <TableHeader headers={headers} />
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
