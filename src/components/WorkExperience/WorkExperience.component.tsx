import React, { useState } from 'react';
import {
  WorkExperienceItem,
  WorkExperienceItemProps,
} from './WorkExperienceItem.component';
import '../../App.scss';

export interface WorkExperienceProps {
  componentData: any;
  title: string;
  index: number;
  workExperienceRef: any;
}

export const WorkExperience = ({
  componentData,
  title,
  index,
  workExperienceRef,
}: WorkExperienceProps) => {
  const [responsibilitiesVisible, setResponsibilitiesVisible] = useState(
    componentData.showResponsibilities
  );
  const [companyLogoVisible, setCompanyLogoVisible] = useState(
    componentData.showCompanyLogo
  );
  const [companyNameVisible, setCompanyNameVisible] = useState(
    componentData.showCompanyName
  );

  return (
    <section
      className="styledComponent"
      id={`#component-${index}`}
      ref={workExperienceRef}
    >
      {componentData.map((workExperienceItem: WorkExperienceItemProps) => (
        <div className="styledItem">
          <div className="styledTitle">
            <h1>{title}</h1>
          </div>
          <div className="btnContainter">
            <button
              className="btn"
              onClick={() => setCompanyNameVisible(!companyNameVisible)}
            >
              {companyNameVisible ? 'Hide' : 'Show'} company name
            </button>

            <button
              className="btn"
              onClick={() => setCompanyLogoVisible(!companyLogoVisible)}
            >
              {companyLogoVisible ? 'Hide' : 'Show'} company logo
            </button>

            <button
              className="btn"
              onClick={() =>
                setResponsibilitiesVisible(!responsibilitiesVisible)
              }
            >
              {responsibilitiesVisible ? 'Hide' : 'Show'} responsibilities
            </button>
          </div>
          <WorkExperienceItem
            company={workExperienceItem.company}
            companyLogo={workExperienceItem.companyLogo}
            title={workExperienceItem.title}
            department={workExperienceItem.department}
            startYear={workExperienceItem.startYear}
            startMonth={workExperienceItem.startMonth}
            endYear={workExperienceItem.endYear}
            endMonth={workExperienceItem.endMonth}
            showCompanyName={companyNameVisible}
            showCompanyLogo={companyLogoVisible}
            extraInformation={workExperienceItem.extraInformation}
            showResponsibilities={responsibilitiesVisible}
            responsibilities={workExperienceItem.responsibilities}
            keywordsResponsibilities={
              workExperienceItem.keywordsResponsibilities
            }
          />
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
