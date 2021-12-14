import "./education.component.scss";
import { useState } from "react";
import {
	EducationProps,
	ProgrammingSkillsProps,
	UniversityProps,
} from "../../modules/content/content.state";
import educationImg from "../../images/education/educationImg.jpg";

export const University = ({
	degree,
	department,
	endDate,
	extraInformation,
	startDate,
	universityName,
}: UniversityProps) => {
	return (
		<div className="item-container">
			<p>
				<strong>{universityName}</strong>
			</p>

			<ul>
				<li>Department of {department}</li>
				<li>
					From {startDate} to {endDate ? endDate : "present"}
				</li>
				<li>
					<em>{extraInformation}</em>
				</li>
			</ul>
		</div>
	);
};

export const ProgrammingSkillsEducation = ({
	onlineCertifications,
	onlineCourses,
}: ProgrammingSkillsProps) => {
	return (
		<div className="item-container">
			<p>
				<strong>Online certifications:</strong>
			</p>
			<ul>
				{onlineCertifications.map((certifications) => {
					return <li>{certifications}</li>;
				})}
			</ul>
			<p>
				<strong>Online courses:</strong>
			</p>
			<ul>
				{onlineCourses.map((courses) => {
					return <li>{courses}</li>;
				})}
			</ul>
		</div>
	);
};

export const Education = ({
	title,
	index,
	educationRef,
	degree,
	department,
	endDate,
	extraInformation,
	onlineCertifications,
	onlineCourses,
	startDate,
	universityName,
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
			<div className="content-top-container">
				<div className="education-content">
					<div className="content-header">
						<h1>{title}</h1>
					</div>
					<div className="content-text">
						<p>
							Graduated Wroclaw University of Technology with honors.
						</p>
						<p>Learns programming on her own, uses a variety of available resources 
							such as FreeCodeCamp, Codecademy, Udemy courses.</p>
						<p>Willingly broadens her horizons. Likes learning new things. 
							Is not afraid to take on difficult challenges. 
							Solves problems by working with documentation.</p>
					</div>
				</div>
				<figure className="education-img">
					<img src={educationImg} alt="education-pic" />
				</figure>
			</div>

			<div className="education-items-container">
				<button
					className="btn-item"
					onClick={() =>
						setUniversityDetailsVisible(!universityDetailsVisible)
					}
				>
					<p>Master of Engineering degree </p>
					<p>{universityDetailsVisible ? "-" : "+"}</p>
				</button>
				<div className={universityDetailsVisible ? "show" : "hide"}>
					<University
						degree={degree}
						department={department}
						endDate={endDate}
						extraInformation={extraInformation}
						startDate={startDate}
						universityName={universityName}
					/>
				</div>

				<button
					className="btn-item"
					onClick={() =>
						setProgrammingSkillsDetailsVisible(
							!programmingSkillsDetailsVisible
						)
					}
				>
					<p>Programming skills education </p>
					<p>{programmingSkillsDetailsVisible ? "-" : "+"}</p>
				</button>
				<div
					className={
						programmingSkillsDetailsVisible ? "show" : "hide"
					}
				>
					<ProgrammingSkillsEducation
						onlineCertifications={onlineCertifications}
						onlineCourses={onlineCourses}
					/>
				</div>
			</div>
		</section>
	);
};
