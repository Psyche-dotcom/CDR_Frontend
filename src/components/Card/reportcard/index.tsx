// Card.tsx
import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

const ReportCard = ({ title, children }: CardProps) => (
  <div className="card">
    <div className="card-header flex justify-between items-center">
      <h4 className="card-title">{title}</h4>
      <div className="heading-elements">
        <ul className="list-inline mb-0">
          <li>
            <a>
              <i className="ft-minus" data-action="collapse"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="card-content collapse show report-content-filter">
      <div className="card-body">{children}</div>
    </div>
  </div>
);

export default ReportCard;
