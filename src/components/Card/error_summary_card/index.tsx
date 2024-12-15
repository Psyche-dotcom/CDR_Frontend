import React from "react";

interface ErrorSummaryProps {
  errors: (string | undefined)[]; // Allow string | undefined
}

const ErrorSummary: React.FC<ErrorSummaryProps> = ({ errors }) => {
  const filteredErrors = errors.filter(
    (error): error is string => typeof error === "string"
  );

  if (filteredErrors.length === 0) return null;

  return (
    <div className="alert alert-danger" role="alert">
      <ul className="list-unstyled">
        {filteredErrors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorSummary;
