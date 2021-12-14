import "./skills.component.scss";
import { useState } from "react";
import {
	SkillsListProps,
	SkillsProps,
} from "../../modules/content/content.state";
import skillsImg from "../../images/skills/skillsImg.jpg";

export const SkillsList = ({ skills }: SkillsListProps) => {
	return (
		<div className="item-container">
			<p>
				<strong>List of skills</strong>
				<ul>
					{skills.map((skill) => {
						return <li>{skill}</li>;
					})}
				</ul>
			</p>
		</div>
	);
};

export const Skills = ({ title, index, skillsRef, skills }: SkillsProps) => {
	const [skillsListVisible, setSkillsListVisible] = useState(false);

	return (
		<section
			className="skills-container"
			id={`#component-${index}`}
			ref={skillsRef}
		>
			<div className="content-top-container">
				<div className="skills-content">
					<div className="content-header">
						<h1>{title}</h1>
					</div>
					<div className="content-text">
						<p>
							With solid JavaScript Fundamentals. Currently improving skills in ReactJS and TypeScript.
						</p>
						<p>Uses GIT distributed version-control system.</p>
						<p>Uses Lean Management Tools in problem solving.</p>
						<p>Open to learning new skills.</p>
					</div>
				</div>
				<figure className="skills-img">
					<img src={skillsImg} alt="skills-pic" />
				</figure>
			</div>

			<div className="skills-item-container">
				<button
					className="btn-item"
					onClick={() => setSkillsListVisible(!skillsListVisible)}
				>
					<p>Skills </p>
					<p>{skillsListVisible ? "-" : "+"}</p>
				</button>
				<div className={skillsListVisible ? "show" : "hide"}>
					<SkillsList skills={skills} />
				</div>
			</div>
		</section>
	);
};
