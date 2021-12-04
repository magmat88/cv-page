import { useState } from "react";
import {
	ExperienceItem,
	ExperienceItemProps,
} from "./experienceItem.component";
import "../../App.scss";
import "./experience.component.scss";

export interface ExperienceProps {
	componentData: any;
	title: string;
	index: number;
	experienceRef: any;
}

export const Experience = ({
	componentData,
	title,
	index,
	experienceRef,
}: ExperienceProps) => {
	const [responsibilitiesVisible, setResponsibilitiesVisible] = useState(
		componentData.showResponsibilities
	);
	const [companyLogoVisible, setCompanyLogoVisible] = useState(
		componentData.showCompanyLogo
	);
	const [companyNameVisible, setCompanyNameVisible] = useState(
		componentData.showCompanyName
	);

	return (
		<section
			className="styledComponent"
			id={`#component-${index}`}
			ref={experienceRef}
		>
			{componentData.map((experienceItem: ExperienceItemProps) => (
				<div className="styledItem">
					<div className="styledTitle">
						<h1>{title}</h1>
					</div>
					<div className="btnContainter">
						<button
							className="btn"
							onClick={() =>
								setCompanyNameVisible(!companyNameVisible)
							}
						>
							{companyNameVisible ? "Hide" : "Show"} company name
						</button>

						<button
							className="btn"
							onClick={() =>
								setCompanyLogoVisible(!companyLogoVisible)
							}
						>
							{companyLogoVisible ? "Hide" : "Show"} company logo
						</button>

						<button
							className="btn"
							onClick={() =>
								setResponsibilitiesVisible(
									!responsibilitiesVisible
								)
							}
						>
							{responsibilitiesVisible ? "Hide" : "Show"}{" "}
							responsibilities
						</button>
					</div>
					<ExperienceItem
						company={experienceItem.company}
						companyLogo={experienceItem.companyLogo}
						title={experienceItem.title}
						department={experienceItem.department}
						startYear={experienceItem.startYear}
						startMonth={experienceItem.startMonth}
						endYear={experienceItem.endYear}
						endMonth={experienceItem.endMonth}
						showCompanyName={companyNameVisible}
						showCompanyLogo={companyLogoVisible}
						extraInformation={experienceItem.extraInformation}
						showResponsibilities={responsibilitiesVisible}
						responsibilities={experienceItem.responsibilities}
						keywordsResponsibilities={
							experienceItem.keywordsResponsibilities
						}
					/>
				</div>
			))}
		</section>
	);
};
