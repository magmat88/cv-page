import { useState } from "react";
import "../../App.scss";
import "./experience.component.scss";
import experienceImg from "../../images/experience/experienceImg.jpg";
import {
	ExperienceProps,
	WorkProps,
	ProjectsProps,
} from "../../modules/content/content.state";
import type { Project } from "../../modules/content/content.state";
export const Work = ({
	companyName,
	companyLogo,
	department,
	earnedSkills,
	endDate,
	extraInformation,
	position,
	responsibilities,
	startDate,
}: WorkProps) => {
	return (
		<div>
			<div>
				<ul>
					<li>Company: {companyName}</li>
					<li>Department: {department}</li>
					<li>Position: {position}</li>
					<li>
						From {startDate} to {endDate ? endDate : "present"}
					</li>
					{extraInformation.map((info) => {
						return <li>{info}</li>;
					})}
					<li>
						Responsibilities:
						<ul>
							{responsibilities.map((responsibility) => {
								return <li>{responsibility}</li>;
							})}
						</ul>
					</li>
					<li>
						Earned skills:
						<ul>
							{earnedSkills.map((earnedSkill) => {
								return <li>{earnedSkill}</li>;
							})}
						</ul>
					</li>
				</ul>
			</div>
			<div>
				<figure>
					<img src={companyLogo} alt="company-logo" />
				</figure>
			</div>
		</div>
	);
};

export const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div>
			{projects.map((project: Project) => {
				return (
					<div className="project-container">
						<ul>
							<li>project</li>
						</ul>
						<div className="project-logo">
							{[project] && (
								<figure>
									{/* <img src={[project].projectLogo} alt="project-logo" /> */}
								</figure>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export const Experience = ({
	title,
	index,
	experienceRef,
	work,
	projects
}: ExperienceProps) => {
	const [workDetailsVisible, setWorkDetailsVisible] =
		useState(false);
	const [
		projectsDetailsVisible,
		setProjectsDetailsVisible,
	] = useState(false);

	return (
		<section
			className="experience-container"
			ref={experienceRef}
			id={`component-${index}`}
		>
			<div className="experience-content">
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
			<div className="experience-img">
				<img src={experienceImg} alt="experience-pic" />
			</div>
			<div education-items-container>
				<button onClick={() =>
						setWorkDetailsVisible(!workDetailsVisible)
					}>Work {workDetailsVisible ? "-" : "+"}</button>
				<div className="itemVisibility">
					<Work
						companyName={work.companyName}
						companyLogo={work.companyLogo}
						department={work.department}
						earnedSkills={work.earnedSkills}
						endDate={work.endDate}
						extraInformation={work.extraInformation}
						position={work.position}
						responsibilities={work.responsibilities}
						startDate={work.startDate}
					/>
				</div>
				<button onClick={() =>
						setProjectsDetailsVisible(!projectsDetailsVisible)
					}>Projects {projectsDetailsVisible ? "-" : "+"}</button>
				<Projects 
					projects={projects.projects}/>
			</div>
		</section>
	);
};

// export const ExperienceItem = ({
// 	company,
// 	companyLogo,
// 	department,
// 	startDate,
// 	endDate,
// 	extraInformation,
// 	responsibilities,
//   }: ExperienceItemProps) => {
// 	return (
// 	  <div className="styledItem">
// 		{/* <div className={showCompanyName ? 'show' : 'hide'}> */}
// 		  {/* <h3>
// 			{company} | {department}
// 		  </h3>
// 		</div> */}

// 		{/* // <div className={showCompanyLogo ? 'show' : 'hide'}>
// 		//   <img src={companyLogo} alt="company-logo" />
// 		// </div>

// 		<h3>{title}</h3>
// 		<p>
// 		  {startDate}
// 		  {endDate ? `to ${endDate}` : 'To present'}
// 		</p>
// 		<br />
// 		<p>
// 		  <em>{extraInformation}</em>
// 		</p>

// 		<div className={showResponsibilities ? 'show' : 'hide'}>
// 		  <div className="smallContainter">
// 			{responsibilities.map((item) => {
// 			  return (
// 				<ul>
// 				  <li>{item}</li>
// 				</ul>
// 			  );
// 			})} */}
// 		  {/* </div>
// 		</div> */}
// 	  </div>
// 	);
//   };

// export const Experience = ({
// 	title,
// 	index,
// 	experienceRef,
// }: ExperienceProps) => {
// 	const [responsibilitiesVisible, setResponsibilitiesVisible] =
// 		useState(false);
// 	const [companyLogoVisible, setCompanyLogoVisible] = useState(
// false	);
// 	const [companyNameVisible, setCompanyNameVisible] = useState(
// false	);

// 	return (
// 		<section
// 			className="styledComponent"
// 			id={`#component-${index}`}
// 			ref={experienceRef}
// 		>
// 				<div className="styledItem">
// 					<div className="styledTitle">
// 						<h1>{title}</h1>
// 					</div>
// 					<div className="btnContainter">
// 						<button
// 							className="btn"
// 							onClick={() =>
// 								setCompanyNameVisible(!companyNameVisible)
// 							}
// 						>
// 							{companyNameVisible ? "Hide" : "Show"} company name
// 						</button>

// 						<button
// 							className="btn"
// 							onClick={() =>
// 								setCompanyLogoVisible(!companyLogoVisible)
// 							}
// 						>
// 							{companyLogoVisible ? "Hide" : "Show"} company logo
// 						</button>

// 						<button
// 							className="btn"
// 							onClick={() =>
// 								setResponsibilitiesVisible(
// 									!responsibilitiesVisible
// 								)
// 							}
// 						>
// 							{responsibilitiesVisible ? "Hide" : "Show"}{" "}
// 							responsibilities
// 						</button>
// 					</div>
// 					{/* <ExperienceItem
// 						company={experienceItem.company}
// 						companyLogo={experienceItem.companyLogo}
// 						position={experienceItem.position}
// 						department={experienceItem.department}
// 						startDate={experienceItem.startDate}
// 						endDate={experienceItem.endDate}
// 						extraInformation={experienceItem.extraInformation}
// 						responsibilities={experienceItem.responsibilities}
// 						keywordsResponsibilities={
// 							experienceItem.keywordsResponsibilities
// 						}
// 					/> */}
// 				</div>
// 		</section>
// 	);
// };
