import { useState } from 'react';
import '../../App.scss';
import './aboutMe.component.scss';
import { AboutMeProps } from "../../modules/content/content.state";

export const AboutMe = ({
  title,
  index,
  aboutMeRef,
  about,
  image
}: AboutMeProps) => {
  const [cvImgVisible, setCvImgVisible] = useState(false);

  return (
    <section
      className="styledComponent"
      id={`#component-${index}`}
      ref={aboutMeRef}
    >
      <div className="styledItem">
        <div className="styledTitle">
          <h1>{title}</h1>
        </div>
        <div className="btnContainer">
          <button
            className="btn"
            id="cv-btn"
            onClick={() => setCvImgVisible(!cvImgVisible)}
          >
            {cvImgVisible ? 'Hide' : 'Show'} Cv image
          </button>
          <div className={cvImgVisible ? 'show' : 'hide'}>
            <img
              height="400px"
              alt="cv-img"
              src={image}
              className="cvImg"
            />
          </div>
        
        </div>
        <p>{about}</p>
      </div>
    </section>
  );
};