import objectiveImg from "../../images/objective/objectiveImg.jpg";
import { ObjectiveProps } from "../../modules/content/content.state";
import "./objective.component.scss";

export const Objective = ({
	title,
	index,
	objectiveRef,
	objective,
}: ObjectiveProps) => {
	return (
		<section
			className="objective-container"
			id={`#component-${index}`}
			ref={objectiveRef}
		>
			<div className="objective-content">
				<div className="content-header">
					<h1>{title}</h1>
				</div>
				<div className="content-text">
					<p>{objective}</p>
				</div>
			</div>
			<figure className="objective-img">
				<img src={objectiveImg} alt="objective-pic" />
			</figure>
		</section>
	);
};
