import { useState } from "react";
import "../../App.scss";
import "./experience.component.scss";
import experienceImg from "../../images/experience/experienceImg.jpg";
import {
	ExperienceProps,
	ProjectsProps,
} from "../../modules/content/content.state";
import type { Project, WorkProps } from "../../modules/content/content.state";

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
	const [responsibilitiesVisible, setResponsibilitiesVisible] =
		useState(false);
	const [earnedSkillsVisible, setEarnedSkillsVisible] = useState(false);

	return (
		<div className="item-container">
			<p>
				<strong>{companyName}</strong>
			</p>
			<ul>
				<li>{department} department</li>
				<li>Position: {position}</li>
				<li>
					From {startDate} to {endDate ? endDate : "present"}
				</li>
				<li>
					<em>{extraInformation}</em>
				</li>
			</ul>
			<button
				className="btn-item"
				onClick={() =>
					setResponsibilitiesVisible(!responsibilitiesVisible)
				}
			>
				<p>Responsibilities </p>
				<p>{responsibilitiesVisible ? "-" : "+"}</p>
			</button>
			<div
				className={`subitem-container ${
					responsibilitiesVisible ? "show" : "hide"
				}`}
			>
				<ul className="list-style-circle">
					{responsibilities.map((responsibility) => {
						return <li>{responsibility}</li>;
					})}
				</ul>
				<figure>
					<img
						className="logo-img"
						src={companyLogo}
						alt="company-logo"
					/>
				</figure>
			</div>
			<button
				className="btn-item"
				onClick={() => setEarnedSkillsVisible(!earnedSkillsVisible)}
			>
				<p>Skills earned at work </p>
				<p>{earnedSkillsVisible ? "-" : "+"}</p>
			</button>
			<div
				className={`subitem-container ${
					earnedSkillsVisible ? "show" : "hide"
				}`}
			>
				<ul className="list-style-circle">
					{earnedSkills.map((earnedSkill) => {
						return <li>{earnedSkill}</li>;
					})}
				</ul>
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
						<h4>{project.projectName}</h4>
						<p>{project.extraInformation}</p>

						<button
							className="btn"
							onClick={() => window.open(project.projectLink)}
						>
							Link to {project.projectName}
						</button>

						<div className="project-logo">
							{project.projectLogo && (
								<figure>
									<img
										src={project.projectLogo}
										alt="project-logo"
									/>
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
	projects,
	companyName,
	companyLogo,
	department,
	earnedSkills,
	endDate,
	extraInformation,
	position,
	responsibilities,
	startDate,
}: ExperienceProps) => {
	const [workDetailsVisible, setWorkDetailsVisible] = useState(false);
	const [projectsDetailsVisible, setProjectsDetailsVisible] = useState(false);

	return (
		<section
			className="experience-container"
			ref={experienceRef}
			id={`component-${index}`}
		>
			<div className="content-top-container">
				<div className="experience-content">
					<div className="content-header">
						<h1>{title}</h1>
					</div>
					<div className="content-text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
						</p>
					</div>
				</div>
				<div className="experience-img">
					<img src={experienceImg} alt="experience-pic" />
				</div>
			</div>

			<div className="experience-items-container">
				<button
					className="btn-item"
					onClick={() => setWorkDetailsVisible(!workDetailsVisible)}
				>
					<p>Work</p>
					<p>{workDetailsVisible ? "+" : "-"}</p>
				</button>
				<div className={workDetailsVisible ? "hide" : "show"}>
					<Work
						companyName={companyName}
						companyLogo={companyLogo}
						department={department}
						earnedSkills={earnedSkills}
						endDate={endDate}
						extraInformation={extraInformation}
						position={position}
						responsibilities={responsibilities}
						startDate={startDate}
					/>
				</div>
				<button
					className="btn-item"
					onClick={() =>
						setProjectsDetailsVisible(!projectsDetailsVisible)
					}
				>
					<p>Projects</p>
					<p>{projectsDetailsVisible ? "+" : "-"}</p>
				</button>
				<div className={projectsDetailsVisible ? "hide" : "show"}>
					<Projects projects={projects} />
				</div>
			</div>
		</section>
	);
};
