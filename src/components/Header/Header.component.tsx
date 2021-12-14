import { useState } from "react";
import { NavBar } from "./navBar.component";
import { HeaderProps } from "../../modules/content/content.state";
import "./header.component.scss";

export const Header = ({
	aboutMeRef,
	objectiveRef,
	educationRef,
	experienceRef,
	skillsRef,
	contactRef,
	components,
}: HeaderProps) => {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const onClickHandler = () => setMenuVisible(!isMenuVisible);
	const iconVisibilityClass = isMenuVisible ? "animate" : "";
	const menuVisibilityClass = isMenuVisible ? "visible" : "hiddenIfMobile";

	return (
		
		<div className="navigation-container">
			<div className="header-logo-and-icon-container">
				<div
					className="hamburger-icon-container"
					onClick={onClickHandler}
				>
					<div
						className={`hamburger-icon ${iconVisibilityClass}`}
					></div>
				</div>
				<div className="product-name-container">
					<p>CV Page</p>
				</div>
			</div>
			<div className={`navbar-container ${menuVisibilityClass}`}>
				<NavBar
					components={components}
					aboutMeRef={aboutMeRef}
					objectiveRef={objectiveRef}
					educationRef={educationRef}
					experienceRef={experienceRef}
					skillsRef={skillsRef}
					contactRef={contactRef}
				/>
			</div>
		</div>
	);
};
