import "../../App.scss";
// import './header.component.scss';

interface NavBarProps {
	aboutMeRef: any;
	objectiveRef: any;
	educationRef: any;
	experienceRef: any;
	skillsRef: any;
	contactRef: any;
}

export const NavBar = ({
	aboutMeRef,
	objectiveRef,
	educationRef,
	experienceRef,
	skillsRef,
	contactRef,
}: NavBarProps) => {
	return (
		<section className="navItem">
			<button
				className="navBtn"
				onClick={() => {
					aboutMeRef.current.scrollIntoView();
				}}
			>
				About me
			</button>
			<button
				className="navBtn"
				onClick={() => {
					objectiveRef.current.scrollIntoView();
				}}
			>
				Objective
			</button>
			<button
				className="navBtn"
				onClick={() => {
					educationRef.current.scrollIntoView();
				}}
			>
				Education
			</button>
			<button
				className="navBtn"
				onClick={() => {
					experienceRef.current.scrollIntoView();
				}}
			>
				Work experience
			</button>
			<button
				className="navBtn"
				onClick={() => {
					skillsRef.current.scrollIntoView();
				}}
			>
				Skills
			</button>
			<button
				className="navBtn"
				onClick={() => {
					contactRef.current.scrollIntoView();
				}}
			>
				Contact
			</button>
		</section>
	);
};