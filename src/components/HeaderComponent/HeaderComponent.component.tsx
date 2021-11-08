import React from 'react';
import '../../App.css';
import NavBarComponent from '../NavBarComponent/NavBarComponent.component';

interface HeaderComponentProps {
  data: {
    name: string;
    job: string;
    linkToCv: string;
  };
  components: any[];
  aboutMeRef: any;
  objectiveRef: any;
  educationRef: any;
  workExperienceRef: any;
  skillsRef: any;
  contactRef: any;
}

const HeaderComponent = ({
  data: { name, job, linkToCv },
  aboutMeRef,
  objectiveRef,
  educationRef,
  workExperienceRef,
  skillsRef,
  contactRef,
}: HeaderComponentProps) => {
  return (
    <section className="styledHeader">
      <NavBarComponent
        aboutMeRef={aboutMeRef}
        objectiveRef={objectiveRef}
        educationRef={educationRef}
        workExperienceRef={workExperienceRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div className="headerItem">
        <div className="nameItem">
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
        <div className="cvBtn">
          <button
            className="navBtn"
            id="cv-btn"
            onClick={() => window.open(linkToCv)}
          >
            My CV in PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
