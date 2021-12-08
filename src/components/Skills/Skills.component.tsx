import "../../App.scss";
import "./skills.component.scss";
// import { SkillsItem } from './skillsItem.component';
import {
	// SkillsItemProps,
	SkillsProps,
} from "../../modules/content/content.state";

export const Skills = ({ title, index, skillsRef }: SkillsProps) => {
	return (
		<section
			className="styledComponent"
			id={`#component-${index}`}
			ref={skillsRef}
		>
			<div className="styledItem">
				<div className="styledTitle">
					<h1>{title}</h1>
				</div>
				<div className="flexSkills">
					<p>place for skills list</p>
				</div>
			</div>
		</section>
	);
};
