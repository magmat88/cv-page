import aboutMeImg from "../../images/aboutMe/aboutMeImg.jpg";
import { AboutMeProps } from "../../modules/content/content.state";
import "./aboutMe.component.scss";

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
						<em>Front-end Developer</em>
					</h3>
				</div>

				<div className="content-text">
					<p>
						For last year intensively improved skills of web design
						and web development.
					</p>

					<p>
						Currently working on her own React/ TypeScript projects
						and on two-person React/ TypeScript project. Using both
						individual and pair programming to learn best practices.
						
					</p>
					<p>
						Passionate ready to start working with issues that bring
						her a lot of satisfaction.
					</p>
				</div>
				<div className="btn-container">
					<button className="btn" onClick={() => window.open(github)}>
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
						{"My CV"}
					</button>
				</div>
			</div>
			<figure className="about-me-img">
				<img src={aboutMeImg} alt="about-me-pic" />
			</figure>
		</section>
	);
};
