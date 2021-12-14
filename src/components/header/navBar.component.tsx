import "../../App.scss";
import { useState } from "react";
import { NavBarProps } from "../../modules/content/content.state";

export const NavBar = ({
	aboutMeRef,
	objectiveRef,
	educationRef,
	experienceRef,
	skillsRef,
	contactRef,
	components
}: NavBarProps) => {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const onClickHandler = () => setMenuVisible(!isMenuVisible);
	const menuVisibilityClass = isMenuVisible ? "hiddenIfMobile" : "visible";

	return (
		<section className={`navigation-list ${menuVisibilityClass}`}>
			<button
				className="navBtn"
				onClick={() => {
					aboutMeRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				About me
			</button>
			<button
				className="navBtn"
				onClick={() => {
					objectiveRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				Objective
			</button>
			<button
				className="navBtn"
				onClick={() => {
					educationRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				Education
			</button>
			<button
				className="navBtn"
				onClick={() => {
					experienceRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				Work experience
			</button>
			<button
				className="navBtn"
				onClick={() => {
					skillsRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				Skills
			</button>
			<button
				className="navBtn"
				onClick={() => {
					contactRef.current.scrollIntoView();
					onClickHandler();
				}}
			>
				Contact
			</button>
		</section>
	);
};
