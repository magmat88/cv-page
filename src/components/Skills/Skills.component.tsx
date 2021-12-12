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
