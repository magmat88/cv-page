import { useState } from 'react';
import './education.component.scss';
import '../../App.scss';

export interface EducationItemProps {
  degree: string;
  university: string;
  location: string;
  department: string | null;
  startYear: string | null;
  startMonth: string | null;
  endYear: string | null;
  endMonth: string | null;
  showExtraInformation: boolean;
  extraInformation: any[];
}

export const EducationItem = ({
  degree,
  university,
  location,
  department,
  startYear,
  startMonth,
  endYear,
  endMonth,
  showExtraInformation,
  extraInformation,
}: EducationItemProps) => {
  const [extraInformationVisible, setExtraInformationVisible] =
    useState(showExtraInformation);
  return (
    <div className="styledItem">
      <div className="btnContainter">
        <button
          className="btn"
          onClick={() => setExtraInformationVisible(!extraInformationVisible)}
        >
          {extraInformationVisible ? 'Hide' : 'Show'} extra information
        </button>
      </div>
      <h3>
        {university} | {location}
      </h3>
      <p>
        {startMonth !== null ? `from ${startMonth} ${startYear} ` : null}
        {endMonth !== null ? `to ${endMonth} ${endYear}` : 'To present'}
      </p>
      <br />
      <h4>
        {degree} {department !== null ? `in ${department}` : null}
      </h4>
      <br />
      <div className={extraInformationVisible ? 'show' : 'hide'}>
        {extraInformation.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};