import React, { useRef } from 'react';
import './App.css';
import cvData from './cvData.json';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.component';
import AboutMeComponent, {
  AboutMeComponentProps,
} from './components/AboutMeComponent/AboutMeComponent.component';
import ObjectiveComponent, {
  ObjectiveComponentProps,
} from './components/ObjectiveComponent/ObjectiveComponent.component';
import EducationComponent, {
  EducationComponentProps,
} from './components/EducationComponent/EducationComponent.component';
import WorkExperienceComponent, {
  WorkExperienceComponentProps,
} from './components/WorkExperienceComponent/WorkExperienceComponent.component';
import SkillsComponent, {
  SkillsComponentProps,
} from './components/SkillsComponent/SkillsComponent.component';
import ContactComponent, {
  ContactComponentProps,
} from './components/ContactComponent/ContactComponent.component';

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
        <HeaderComponent
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
                <AboutMeComponent
                  {...(component as unknown as Omit<
                    AboutMeComponentProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  aboutMeRef={aboutMeRef}
                />
              );
            case Component.OBJECTIVE:
              return (
                <ObjectiveComponent
                  {...(component as unknown as Omit<
                    ObjectiveComponentProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  objectiveRef={objectiveRef}
                />
              );
            case Component.EDUCATION:
              return (
                <EducationComponent
                  {...(component as unknown as Omit<
                    EducationComponentProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  educationRef={educationRef}
                />
              );
            case Component.WORK_EXPERIENCE:
              return (
                <WorkExperienceComponent
                  {...(component as unknown as Omit<
                    WorkExperienceComponentProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  workExperienceRef={workExperienceRef}
                />
              );
            case Component.SKILLS:
              return (
                <SkillsComponent
                  {...(component as unknown as Omit<
                    SkillsComponentProps,
                    'index'
                  >)}
                  index={index}
                  key={index}
                  skillsRef={skillsRef}
                />
              );
            case Component.CONTACT:
              return (
                <ContactComponent
                  {...(component as unknown as Omit<
                    ContactComponentProps,
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
