import '../../App.scss';

export interface ObjectiveProps {
  title: string;
  componentData: {
    objectiveInformation: string;
  };
  index: number;
  objectiveRef: any;
}

export const Objective = ({
  componentData,
  title,
  index,
  objectiveRef,
}: ObjectiveProps) => {
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