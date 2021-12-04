import { useRef } from "react";
import "./App.scss";
import cvData from "./cvData.json";
import { Header } from "./components/header/header.component";
import { AboutMe, AboutMeProps } from "./components/aboutMe/aboutMe.component";
import {
	Objective,
	ObjectiveProps,
} from "./components/objective/objective.component";
import {
	Education,
	EducationProps,
} from "./components/education/education.component";
import {
	Experience,
	ExperienceProps,
} from "./components/experience/experience.component";
import { Skills, SkillsProps } from "./components/skills/skills.component";
import { Contact, ContactProps } from "./components/contact/contact.component";
import { Footer } from "./components/footer/footer.component";

export enum Component {
	ABOUT_ME = "aboutMe",
	OBJECTIVE = "objective",
	EDUCATION = "education",
	EXPERIENCE = "experience",
	SKILLS = "skills",
	CONTACT = "contact",
}

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
					data={cvData.header}
					components={cvData.components}
					aboutMeRef={aboutMeRef}
					objectiveRef={objectiveRef}
					educationRef={educationRef}
					experienceRef={experienceRef}
					skillsRef={skillsRef}
					contactRef={contactRef}
				/>
			<main>
				{cvData.components.map((component, index) => {
					switch (component.type) {
						case Component.ABOUT_ME:
							return (
								<AboutMe
									{...(component as unknown as Omit<AboutMeProps, "index">)}
									index={index}
									key={index}
									aboutMeRef={aboutMeRef}
								/>
							);
						case Component.OBJECTIVE:
							return (
								<Objective
									{...(component as unknown as Omit<ObjectiveProps, "index">)}
									index={index}
									key={index}
									objectiveRef={objectiveRef}
								/>
							);
						case Component.EDUCATION:
							return (
								<Education
									{...(component as unknown as Omit<EducationProps, "index">)}
									index={index}
									key={index}
									educationRef={educationRef}
								/>
							);
						case Component.EXPERIENCE:
							return (
								<Experience
									{...(component as unknown as Omit<ExperienceProps, "index">)}
									index={index}
									key={index}
									experienceRef={experienceRef}
								/>
							);
						case Component.SKILLS:
							return (
								<Skills
									{...(component as unknown as Omit<SkillsProps, "index">)}
									index={index}
									key={index}
									skillsRef={skillsRef}
								/>
							);
						case Component.CONTACT:
							return (
								<Contact
									{...(component as unknown as Omit<ContactProps, "index">)}
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
			<Footer aboutPage={"text about page"} aboutAuthor={"&copy; magmat88"} />
		</div>
	);
}

export default App;
