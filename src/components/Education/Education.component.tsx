import "./education.component.scss";
import { useState } from "react";
import "./education.component.scss";
import {
	EducationItemProps,
	EducationProps,
} from "../../modules/content/content.state";

export const EducationItem = ({
	degree,
	department,
	endDate,
	extraInformation,
	startDate,
	university
}: EducationItemProps) => {
	const [extraInformationVisible, setExtraInformationVisible] =
		useState(false);
	return (
		<div className="styledItem">
			<div className="btnContainter">
				<button
					className="btn"
					onClick={() =>
						setExtraInformationVisible(!extraInformationVisible)
					}
				>
					{extraInformationVisible ? "Hide" : "Show"} extra
					information
				</button>
			</div>
			<h3>
				{university}
			</h3>
			<p>
				{startDate}
				{endDate !== null ? `to ${endDate}` : "To present"}
			</p>
			<br />
			<h4>
				`${degree} in ${department}`
			</h4>
			<br />
			<div className={extraInformationVisible ? "show" : "hide"}>
				{extraInformation.map((item) => {
					return (
						<ul>
							<li>{item}</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
};

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
