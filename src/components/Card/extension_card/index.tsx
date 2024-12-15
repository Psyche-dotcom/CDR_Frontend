// components/Card.tsx
import React, { ReactNode } from "react";

interface ExtensionCardCardProps {
  title: string;
  headingElements?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}

const ExtensionCard: React.FC<ExtensionCardCardProps> = ({
  title,
  headingElements,
  children,
  contentClassName,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <a className="heading-elements-toggle">
          <i className="la la-ellipsis-v font-medium-3"></i>
        </a>
        <div className="heading-elements">{headingElements}</div>
      </div>
      <div className={`card-content ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default ExtensionCard;
