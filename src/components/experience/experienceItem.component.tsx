import '../../App.scss';
import './experience.component.scss';
import { ExperienceItemProps } from "../../modules/content/content.state";

export const ExperienceItem = ({
  company,
  companyLogo,
  department,
  startDate,
  endDate,
  extraInformation,
  responsibilities,
}: ExperienceItemProps) => {
  return (
    <div className="styledItem">
      {/* <div className={showCompanyName ? 'show' : 'hide'}> */}
        {/* <h3>
          {company} | {department}
        </h3>
      </div> */}

      {/* // <div className={showCompanyLogo ? 'show' : 'hide'}>
      //   <img src={companyLogo} alt="company-logo" />
      // </div>

      <h3>{title}</h3>
      <p>
        {startDate}
        {endDate ? `to ${endDate}` : 'To present'}
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
          })} */}
        {/* </div>
      </div> */}
    </div>
  );
};