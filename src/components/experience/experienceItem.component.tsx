import '../../App.scss';
import './experience.component.scss';

export interface ExperienceItemProps {
  company: string;
  companyLogo: string;
  title: string;
  department: string;
  startYear: string;
  startMonth: string;
  endYear: string | null;
  endMonth: string | null;
  showCompanyName: boolean;
  showCompanyLogo: boolean;
  extraInformation: string | null;
  showResponsibilities: boolean;
  responsibilities: string[];
  keywordsResponsibilities: string[];
}

export const ExperienceItem = ({
  company,
  companyLogo,
  title,
  department,
  startYear,
  startMonth,
  endYear,
  endMonth,
  showCompanyName,
  showCompanyLogo,
  extraInformation,
  showResponsibilities,
  responsibilities,
}: ExperienceItemProps) => {
  return (
    <div className="styledItem">
      <div className={showCompanyName ? 'show' : 'hide'}>
        <h3>
          {company} | {department}
        </h3>
      </div>

      <div className={showCompanyLogo ? 'show' : 'hide'}>
        <img src={companyLogo} alt="company-logo" />
      </div>

      <h3>{title}</h3>
      <p>
        {startMonth ? `from ${startMonth} ${startYear} ` : null}
        {endMonth ? `to ${endMonth} ${endYear}` : 'To present'}
      </p>
      <br />
      <p>
        <em>{extraInformation}</em>
      </p>

      <div className={showResponsibilities ? 'show' : 'hide'}>
        <div className="smallContainter">
          {responsibilities.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};