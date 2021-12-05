import "../../App.scss";
import { useRef } from "react";
import "./mainContent.component.scss";
import { AboutMe, AboutMeProps } from "../aboutMe/aboutMe.component";
import {
	Objective,
	ObjectiveProps,
} from "../objective/objective.component";
import {
	Education,
	EducationProps,
} from "../education/education.component";
import {
	Experience,
	ExperienceProps,
} from "../experience/experience.component";
import { Skills, SkillsProps } from "../skills/skills.component";
import { Contact, ContactProps } from "../contact/contact.component";
import cvData from "../../cvData.json";

export enum Component {
	ABOUT_ME = "aboutMe",
	OBJECTIVE = "objective",
	EDUCATION = "education",
	EXPERIENCE = "experience",
	SKILLS = "skills",
	CONTACT = "contact",
}

export const MainContent = (): JSX.Element => {
	
    const aboutMeRef = useRef(null);
	const objectiveRef = useRef(null);
	const educationRef = useRef(null);
	const experienceRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

    return (
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
	);
};
