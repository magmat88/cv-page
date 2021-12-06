import "../../App.scss";
import "./education.component.scss";
import { EducationItem } from "./educationItem.component";
import {
	EducationItemProps,
	EducationProps,
} from "../../modules/content/content.state";

export const Education = ({
	componentData,
	title,
	index,
	educationRef,
	showExtraInformation,
}: EducationProps) => {
	return (
		<section
			className="styledComponent"
			id={`#component-${index}`}
			ref={educationRef}
		>
			<div className="styledItem">
				<div className="styledTitle">
					<h1>{title}</h1>
				</div>
				{componentData.map((educationItem: EducationItemProps) => (
					<EducationItem
						degree={educationItem.degree}
						university={educationItem.university}
						location={educationItem.location}
						department={educationItem.department}
						startYear={educationItem.startYear}
						startMonth={educationItem.startMonth}
						endYear={educationItem.endYear}
						endMonth={educationItem.endMonth}
						showExtraInformation={
							educationItem.showExtraInformation
						}
						extraInformation={educationItem.extraInformation}
					/>
				))}
			</div>
		</section>
	);
};
