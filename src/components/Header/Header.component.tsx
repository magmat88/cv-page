import "./header.component.scss";
import { NavBar } from "./navBar.component";
import { HeaderProps } from "../../modules/content/content.state";

export const Header = ({
	aboutMeRef,
	objectiveRef,
	educationRef,
	experienceRef,
	skillsRef,
	contactRef,
	components
}: HeaderProps) => {
	return (
		<section className="styledHeader">
			<div className="headerItem">
				<div className="nameItem">
					<p>
						<i
							className="fa fa-file-download"
							aria-hidden="true"
						></i>
					</p>
				</div>
			</div>
			<div className="navigation-item">
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
		</section>
	);
};
