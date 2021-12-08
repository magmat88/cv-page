import "../../App.scss";
import "./skills.component.scss";
import { SkillsItemProps } from "../../modules/content/content.state";

export const SkillsItem = ({ skills }: SkillsItemProps) => {
	return (
		<div className="div1">
			<div className="skillsContainer">
				<h3>{skills}</h3>
			</div>
		</div>
	);
};
