// components/ProjectSection.tsx
import React from "react";

interface ProjectSectionProps {
  imagePosition: "left" | "right";
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  listItems: string[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  imagePosition,
  imageSrc,
  title,
  subtitle,
  description,
  listItems,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="section-project py-5">
      <div className="custom-container container">
        <div className="row">
          {isImageLeft && (
            <div className="col-xl-8 col-md-7 col-sm-12 mb-4 mb-md-0">
              <img src={imageSrc} alt={title} className="img-fluid" />
            </div>
          )}
          <div className="col-xl-4 col-md-5 col-sm-12">
            <p className="small-text text-uppercase text-muted mb-2">
              {subtitle}
            </p>
            <h2 className="mb-4">{title}</h2>
            <p className="description mb-4">{description}</p>
            <ul className="list-unstyled ps-3">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {!isImageLeft && (
            <div className="col-xl-8 col-md-7 col-sm-12 mt-4 mt-md-0">
              <img src={imageSrc} alt={title} className="img-fluid" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
