import "../../App.scss";
import "./skills.component.scss";
import { SkillsItemProps } from "../../modules/content/content.state";

export const SkillsItem = ({ skillName, skillIconName }: SkillsItemProps) => {
	return (
		<div className="div1">
			<div className="skillsContainer">
				<h3>{skillName}</h3>
				<p>{skillIconName}</p>
			</div>
		</div>
	);
};
