import "../../App.scss";
import "./header.component.scss";
import { NavBar } from "./navBar.component";

interface HeaderProps {
	data: {
		name: string;
		position: string;
		linkToCv: string;
	};
	components: any[];
	aboutMeRef: any;
	objectiveRef: any;
	educationRef: any;
	experienceRef: any;
	skillsRef: any;
	contactRef: any;
}

export const Header = ({
	data: { name, position, linkToCv },
	aboutMeRef,
	objectiveRef,
	educationRef,
	experienceRef,
	skillsRef,
	contactRef,
}: HeaderProps) => {
	return (
		<section className="styledHeader">
			<div className="headerItem">
				<div className="nameItem">
					<h2>{name}</h2>
					<p>{position}</p>
					<p>
						<i
							className="fa fa-file-download"
							aria-hidden="true"
						></i>
					</p>
				</div>
				<div className="cvBtn">
					<button
						className="navBtn"
						id="cv-btn"
						onClick={() => window.open(linkToCv)}
					>
						{"↓ My CV"}
					</button>
				</div>
			</div>
			<div className="navigation-item">
				<NavBar
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
