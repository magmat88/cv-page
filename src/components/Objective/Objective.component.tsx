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
					<p>
						Over 9 years of experience in quality control in FMCG
						industry, where the advantages were inquisitiveness and
						conscientiousness. Paying attention to details.
					</p>

					<p>
						Highly motivated, open-minded person with good business
						and social skills.
					</p>

					<p>
						Well developed logical and analytical thinking.
						Experienced in problem solving.
					</p>

					<p>
						100% of the personal goals achieved in the previous
						annual PDR. With ability of working under pressure to
						deliver tasks on time. Good team player.
					</p>

					<p>
						Ready for next step in her career.
					</p>
				</div>
			</div>

			<figure className="objective-img">
				<img src={objectiveImg} alt="objective-pic" />
			</figure>
		</section>
	);
};
