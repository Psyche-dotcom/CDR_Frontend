// FormSection.tsx
import { ReactNode } from "react";

type FormSectionProps = {
  iconSrc: string;
  title: string;
  sectionclass: string;
  children: ReactNode;
};

const FormSection = ({
  iconSrc,
  title,
  children,
  sectionclass,
}: FormSectionProps) => (
  <div>
    <h4 className={`form-section ${sectionclass}`}>
      <img src={iconSrc} alt="" className="inline mr-2" />
      {title}
    </h4>
    {children}
  </div>
);

export default FormSection;
