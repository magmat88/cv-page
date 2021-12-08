import "../../App.scss";
import "./education.component.scss";
// import { EducationItem } from "./educationItem.component";
import {
	// EducationItemProps,
	EducationProps,
} from "../../modules/content/content.state";

export const Education = ({
	title,
	index,
	educationRef,
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
					{/* <EducationItem
						degree={degree}
						university={educationItem.university}
						department={educationItem.department}
						startDate={educationItem.startDate}
						endDate={educationItem.endDate}
						extraInformation={educationItem.extraInformation}
					/> */}
			</div>
		</section>
	);
};
