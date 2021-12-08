import { useState } from "react";
import "./education.component.scss";
import "../../App.scss";
import { EducationItemProps } from "../../modules/content/content.state";

export const EducationItem = ({
	degree,
	department,
	endMonth,
	endYear,
	extraInformation,
	location,
	startMonth,
	startYear,
	university,
	showExtraInformation,
}: EducationItemProps) => {
	const [extraInformationVisible, setExtraInformationVisible] =
		useState(showExtraInformation);
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
				{university} | {location}
			</h3>
			<p>
				{startMonth !== null
					? `from ${startMonth} ${startYear} `
					: null}
				{endMonth !== null ? `to ${endMonth} ${endYear}` : "To present"}
			</p>
			<br />
			<h4>
				{degree} {department !== null ? `in ${department}` : null}
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
