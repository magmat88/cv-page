import { useState } from "react";
// import { ExperienceItem } from "./experienceItem.component";
import "../../App.scss";
import "./experience.component.scss";
import {
	ExperienceProps,
	ExperienceItemProps
} from "../../modules/content/content.state";


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

export const Experience = ({
	title,
	index,
	experienceRef,
}: ExperienceProps) => {
	const [responsibilitiesVisible, setResponsibilitiesVisible] =
		useState(false);
	const [companyLogoVisible, setCompanyLogoVisible] = useState(
false	);
	const [companyNameVisible, setCompanyNameVisible] = useState(
false	);

	return (
		<section
			className="styledComponent"
			id={`#component-${index}`}
			ref={experienceRef}
		>
				<div className="styledItem">
					<div className="styledTitle">
						<h1>{title}</h1>
					</div>
					<div className="btnContainter">
						<button
							className="btn"
							onClick={() =>
								setCompanyNameVisible(!companyNameVisible)
							}
						>
							{companyNameVisible ? "Hide" : "Show"} company name
						</button>

						<button
							className="btn"
							onClick={() =>
								setCompanyLogoVisible(!companyLogoVisible)
							}
						>
							{companyLogoVisible ? "Hide" : "Show"} company logo
						</button>

						<button
							className="btn"
							onClick={() =>
								setResponsibilitiesVisible(
									!responsibilitiesVisible
								)
							}
						>
							{responsibilitiesVisible ? "Hide" : "Show"}{" "}
							responsibilities
						</button>
					</div>
					{/* <ExperienceItem
						company={experienceItem.company}
						companyLogo={experienceItem.companyLogo}
						position={experienceItem.position}
						department={experienceItem.department}
						startDate={experienceItem.startDate}
						endDate={experienceItem.endDate}
						extraInformation={experienceItem.extraInformation}
						responsibilities={experienceItem.responsibilities}
						keywordsResponsibilities={
							experienceItem.keywordsResponsibilities
						}
					/> */}
				</div>
		</section>
	);
};
