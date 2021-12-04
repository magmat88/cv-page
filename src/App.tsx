import React, { useRef } from 'react';
import './App.scss';
import cvData from './cvData.json';
import { Header } from './components/Header/Header.component';
import {
  AboutMe,
  AboutMeProps,
} from './components/AboutMe/AboutMe.component';
import {
  Objective,
  ObjectiveProps,
} from './components/Objective/Objective.component';
import {Education,
  EducationProps
} from './components/Education/Education.component';
import {WorkExperience,
  WorkExperienceProps
} from './components/WorkExperience/WorkExperience.component';
import {Skills,
  SkillsProps,
} from './components/Skills/Skills.component';
import {Contact,
  ContactProps
} from './components/Contact/Contact.component';

export enum Component {
  ABOUT_ME = 'aboutMe',
  OBJECTIVE = 'objective',
  EDUCATION = 'education',
  WORK_EXPERIENCE = 'workExperience',
  SKILLS = 'skills',
  CONTACT = 'contact',
}

function App() {
  const aboutMeRef = useRef(null);
  const objectiveRef = useRef(null);
  const educationRef = useRef(null);
  const workExperienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="styledApp">
      <header>
        <Header
          data={cvData.header}
          components={cvData.components}
          aboutMeRef={aboutMeRef}
          objectiveRef={objectiveRef}
          educationRef={educationRef}
          workExperienceRef={workExperienceRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
      </header>
      <main>
        {cvData.components.map((component, index) => {
          switch (component.type) {
            case Component.ABOUT_ME:
              return (
                <AboutMe
                  {...(component as unknown as Omit<
                    AboutMeProps,
                    'index'
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
                    'index'
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
                    'index'
                  >)}
                  index={index}
                  key={index}
                  educationRef={educationRef}
                />
              );
            case Component.WORK_EXPERIENCE:
              return (
                <WorkExperience
                  {...(component as unknown as Omit<
                    WorkExperienceProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  workExperienceRef={workExperienceRef}
                />
              );
            case Component.SKILLS:
              return (
                <Skills
                  {...(component as unknown as Omit<
                    SkillsProps,
                    'index'
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
                    'index'
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
    </div>
  );
}

export default App;
