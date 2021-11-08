import React from 'react';
import '../../App.css';
import EducationItem, { EducationItemProps } from './EducationItem.component';

export interface EducationComponentProps {
  componentData: {
    degree: string;
    university: string;
    location: string;
    department: string;
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
    showExtraInformation: boolean;
    extraInformation: any[];
  }[];
  title: string;
  type: string;
  index: number;
  educationRef: any;
  showExtraInformation: boolean;
}

const EducationComponent = ({
  componentData,
  title,
  index,
  educationRef,
  showExtraInformation,
}: EducationComponentProps) => {
  return (
    <section
      className="styledComponent"
      id={`#component-${index}`}
      ref={educationRef}
    >
      <div className="styledItem">
        <div className="styledTitle">
          <h1>{title}</h1>
        </div>
        {componentData.map((educationItem: EducationItemProps) => (
          <EducationItem
            degree={educationItem.degree}
            university={educationItem.university}
            location={educationItem.location}
            department={educationItem.department}
            startYear={educationItem.startYear}
            startMonth={educationItem.startMonth}
            endYear={educationItem.endYear}
            endMonth={educationItem.endMonth}
            showExtraInformation={educationItem.showExtraInformation}
            extraInformation={educationItem.extraInformation}
          />
        ))}
      </div>
    </section>
  );
};
export default EducationComponent;
