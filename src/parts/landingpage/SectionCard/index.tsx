// components/SectionCard.tsx
import React from "react";

interface SectionCardProps {
  leftContent?: React.ReactNode;
  topContent: {
    imageSrc: string;
    description: string;
  };
  bottomContent: {
    imageSrc: string;
    description: string;
  };
}

const SectionCard: React.FC<SectionCardProps> = ({
  leftContent,
  topContent,
  bottomContent,
}) => {
  return (
    <section className="section-card section-cdr-text">
      <div className="custom-container">
        <div className="row">
          {leftContent && (
            <div className="col-md-6 text-center left">{leftContent}</div>
          )}
          <div className="col-md-6 right">
            <div className="top">
              <img src={topContent.imageSrc} alt="Top Section Image" />
              <p>{topContent.description}</p>
            </div>
            <div className="bottom">
              <img src={bottomContent.imageSrc} alt="Bottom Section Image" />
              <p>{bottomContent.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
