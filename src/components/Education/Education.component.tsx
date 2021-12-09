import "./education.component.scss";
import { useState } from "react";
import {
	EducationProps,
	ProgrammingSkillsProps,
	UniversityProps,
} from "../../modules/content/content.state";
import educationImg from "../../images/education/educationImg.jpg";

export const University = ({
	department,
	endDate,
	extraInformation,
	startDate,
	universityName,
}: UniversityProps) => {
	return (
		<div>
			<ul>
				<li>University: {universityName}</li>
				<li>Department: {department}</li>
				<li>
					From {startDate} to {endDate ? endDate : "present"}
				</li>
				{extraInformation.map((info) => {
					return <li>{info}</li>;
				})}
			</ul>
		</div>
	);
};

export const ProgrammingSkillsEducation = ({
	onlineCertifications,
	onlineCourses,
}: ProgrammingSkillsProps) => {
	return (
		<div>
			<ul>
				<li>
					Online certifications:
					<ul>
						{onlineCertifications.map((certification) => {
							return <li>{certification}</li>;
						})}
					</ul>
				</li>
				<li>
					Online courses:
					<ul>
						{onlineCourses.map((courses) => {
							return <li>{courses}</li>;
						})}
					</ul>
				</li>
			</ul>
		</div>
	);
};

export const Education = ({
	title,
	index,
	educationRef,
	university,
	programmingSkills,
}: EducationProps) => {
	const [universityDetailsVisible, setUniversityDetailsVisible] =
		useState(false);
	const [
		programmingSkillsDetailsVisible,
		setProgrammingSkillsDetailsVisible,
	] = useState(false);

	return (
		<section
			className="education-container"
			ref={educationRef}
			id={`component-${index}`}
		>
			<div className="education-content">
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
			<div className="education-img">
				<img src={educationImg} alt="education-pic" />
			</div>
			<div education-items-container>
				<button
					onClick={() =>
						setUniversityDetailsVisible(!universityDetailsVisible)
					}
				>
					Master of Engineering degree {universityDetailsVisible ? "-" : "+"}
				</button>
				<University
					degree={university.degree}
					department={university.department}
					endDate={university.endDate}
					extraInformation={university.extraInformation}
					startDate={university.startDate}
					universityName={university.universityName}
				/>
				<button
					onClick={() =>
						setProgrammingSkillsDetailsVisible(
							!programmingSkillsDetailsVisible
						)
					}
				>
					Programming skills education {programmingSkillsDetailsVisible ? "-" : "+"}
				</button>
				<ProgrammingSkillsEducation
					onlineCertifications={
						programmingSkills.onlineCertifications
					}
					onlineCourses={programmingSkills.onlineCourses}
				/>
			</div>
		</section>
	);
};

// return (
// <div className="styledItem">
// 	<div className="btnContainter">
/* <button
					className="btn"
					onClick={() =>
						setExtraInformationVisible(!extraInformationVisible)
					}
				>
					{extraInformationVisible ? "Hide" : "Show"} extra
					information
				</button> */
// 			</div>
// 			<h3>
// 				{university}
// 			</h3>
// 			<p>
// 				{startDate}
// 				{endDate !== null ? `to ${endDate}` : "To present"}
// 			</p>
// 			<br />
// 			<h4>
// 				`${degree} in ${department}`
// 			</h4>
// 			<br />
// 			<div className={extraInformationVisible ? "show" : "hide"}>
// 				{extraInformation.map((item) => {
// 					return (
// 						<ul>
// 							<li>{item}</li>
// 						</ul>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export const Education = ({
// 	title,
// 	index,
// 	educationRef,
// }: EducationProps) => {
// 	return (
// 		<section
// 			className="styledComponent"
// 			id={`#component-${index}`}
// 			ref={educationRef}
// 		>
// 			<div className="styledItem">
// 				<div className="styledTitle">
// 					<h1>{title}</h1>
// 				</div>
// 					{/* <EducationItem
// 						degree={degree}
// 						university={educationItem.university}
// 						department={educationItem.department}
// 						startDate={educationItem.startDate}
// 						endDate={educationItem.endDate}
// 						extraInformation={educationItem.extraInformation}
// 					/> */}
// 			</div>
// 		</section>
// 	);
// };
