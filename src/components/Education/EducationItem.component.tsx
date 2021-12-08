import { useState } from "react";
import "./education.component.scss";
import "../../App.scss";
import { EducationItemProps } from "../../modules/content/content.state";

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
