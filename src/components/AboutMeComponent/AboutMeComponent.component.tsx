import React, { useState } from 'react';
import '../../App.css';

export interface AboutMeComponentProps {
  title: string;
  index: number;
  componentData: {
    about: string;
    showCvImg: boolean;
    cvImg: string;
  };
  aboutMeRef: any;
}

const AboutMeComponent = ({
  componentData,
  title,
  index,
  aboutMeRef,
}: AboutMeComponentProps) => {
  const [cvImgVisible, setCvImgVisible] = useState(componentData.showCvImg);

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
              src={componentData.cvImg}
              className="cvImg"
            />
          </div>
        
        </div>
        <p>{componentData.about}</p>
      </div>
    </section>
  );
};

export default AboutMeComponent;
