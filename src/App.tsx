import { useRef } from "react";
import "./App.scss";
import cvData from "./cvData.json";
import { Header } from "./components/header/header.component";
import { Footer } from "./components/footer/footer.component";
import { AboutMe } from "./components/aboutMe/aboutMe.component";
import { Objective } from "./components/objective/objective.component";
import { Education } from "./components/education/education.component";
import { Experience } from "./components/experience/experience.component";
import { Skills } from "./components/skills/skills.component";
import { Contact } from "./components/contact/contact.component";
import {
	AboutMeProps,
	Component,
	ContactProps,
	EducationProps,
	ExperienceProps,
	ObjectiveProps,
	SkillsProps,
} from "./modules/content/content.state";

function App() {
	const aboutMeRef = useRef(null);
	const objectiveRef = useRef(null);
	const educationRef = useRef(null);
	const experienceRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<div className="styledApp">
			<Header 
				components={cvData.components} 
				aboutMeRef={aboutMeRef}
				objectiveRef={objectiveRef}
				educationRef={educationRef}
				experienceRef={experienceRef}
				skillsRef={skillsRef}
				contactRef={contactRef} />
			<main>
			{cvData.components.map((component, index) => {
				switch (component.type) {
					case Component.ABOUT_ME:
						return (
							<AboutMe
								{...(component as unknown as Omit<
									AboutMeProps,
									"index"
								>)}
								index={index}
								key={index}
								aboutMeRef={aboutMeRef}
							/>
						);
					case Component.OBJECTIVE:
						return (
							<Objective
								{...(component as unknown as Omit<
									ObjectiveProps,
									"index"
								>)}
								index={index}
								key={index}
								objectiveRef={objectiveRef}
							/>
						);
					case Component.EDUCATION:
						return (
							<Education
								{...(component as unknown as Omit<
									EducationProps,
									"index"
								>)}
								index={index}
								key={index}
								educationRef={educationRef}
							/>
						);
					case Component.EXPERIENCE:
						return (
							<Experience
								{...(component as unknown as Omit<
									ExperienceProps,
									"index"
								>)}
								index={index}
								key={index}
								experienceRef={experienceRef}
							/>
						);
					case Component.SKILLS:
						return (
							<Skills
								{...(component as unknown as Omit<
									SkillsProps,
									"index"
								>)}
								index={index}
								key={index}
								skillsRef={skillsRef}
							/>
						);
					case Component.CONTACT:
						return (
							<Contact
								{...(component as unknown as Omit<
									ContactProps,
									"index"
								>)}
								index={index}
								key={index}
								contactRef={contactRef}
							/>
						);
					default:
						return <></>;
				}
			})}
		</main>
			<Footer aboutPage={"text about page"} author={"magmat88"} />
		</div>
	);
}

export default App;
