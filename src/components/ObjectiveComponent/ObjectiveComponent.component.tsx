import React from 'react';
import '../../App.css';

export interface ObjectiveComponentProps {
  title: string;
  componentData: {
    objectiveInformation: string;
  };
  index: number;
  objectiveRef: any;
}

const ObjectiveComponent = ({
  componentData,
  title,
  index,
  objectiveRef,
}: ObjectiveComponentProps) => {
  return (
    <section
      className="styledComponent"
      id={`#component-${index}`}
      ref={objectiveRef}
    >
      <div className="styledItem">
        <div className="styledTitle">
          <h1>{title}</h1>
        </div>
        <p>{componentData.objectiveInformation}</p>
      </div>
    </section>
  );
};

export default ObjectiveComponent;
