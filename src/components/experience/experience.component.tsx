import { useState } from "react";
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
				<p>Work - Responsibilities </p>
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
				{/* <figure>
					<img
						className="logo-img"
						src={companyLogo}
						alt="company-logo"
					/>
				</figure> */}
			</div>
			<button
				className="btn-item"
				onClick={() => setEarnedSkillsVisible(!earnedSkillsVisible)}
			>
				<p>Work - Skills earned at work </p>
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
		<div className="btns-container">
			{projects.map((project: Project) => {
				return (
					<div className="project-container">
						<button
							className="btn"
							onClick={() => window.open(project.projectLink)}
						>
							{project.projectName}
						</button>
						<p>{project.extraInformation}</p>

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
				<figure className="experience-img">
					<img src={experienceImg} alt="experience-pic" />
				</figure>
				<div className="experience-content">
					<div className="content-header">
						<h1>{title}</h1>
					</div>
					<div className="content-text">
						<p>
							Experienced as Analytical Chemist. Convinced that
							earned skills and expertise from her previous
							proffesion are fully transferable into the new one.
						</p>
						<p>
							Very good listener and responsible co-worker.
							Focuses on what the team needs the most.
						</p>
						<p>
							Gets satisfaction when implementing new solutions.
							Focused on continuous improvement.
						</p>
						<p>
							Learns programming on her own, uses a variety of
							available resources such as FreeCodeCamp,
							Codecademy, Udemy courses.
						</p>
					</div>
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
