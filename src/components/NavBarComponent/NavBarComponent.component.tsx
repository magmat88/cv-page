import React from 'react';
import '../../App.css';

interface NavBarComponentProps {
  // components: any[];
  aboutMeRef: any;
  objectiveRef: any;
  educationRef: any;
  workExperienceRef: any;
  skillsRef: any;
  contactRef: any;
}

const NavBarComponent = ({
  aboutMeRef,
  objectiveRef,
  educationRef,
  workExperienceRef,
  skillsRef,
  contactRef,
}: NavBarComponentProps) => {
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
          workExperienceRef.current.scrollIntoView();
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

export default NavBarComponent;
