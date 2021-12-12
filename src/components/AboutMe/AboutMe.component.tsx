import aboutMeImg from "../../images/aboutMe/aboutMeImg.jpg";
import { AboutMeProps } from "../../modules/content/content.state";
import "./aboutMe.component.scss";
// import {ReactComponent as GithubLogo} from "../../icons/githubIcon.svg";

export const AboutMe = ({
	index,
	aboutMeRef,
	linkToCV,
	github,
	linkedIn,
}: AboutMeProps) => {
	return (
		<section
			className="about-me-container"
			ref={aboutMeRef}
			id={`#component-${index}`}
		>
			<div className="about-me-content">
				<div className="content-header">
					<h1>Magdalena Matusiak</h1>
					<h3>
						<em>Frontend Developer</em>
					</h3>
				</div>
				
				<div className="content-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur.
					</p>
				</div>
				<div className="btn-container">
					<button className="btn" onClick={() => window.open(github)}>
						{/* <GithubLogo /> */}
						Github
					</button>
					<button
						className="btn"
						onClick={() => window.open(linkedIn)}
					>
						LinkedIn
					</button>
					<button
						className="btn"
						onClick={() => window.open(linkToCV)}
					>
						{"↓ My CV"}
					</button>
				</div>
			</div>
			<figure className="about-me-img">
				<img src={aboutMeImg} alt="about-me-pic" />
			</figure>
		</section>
	);
};
