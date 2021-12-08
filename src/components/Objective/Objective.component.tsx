import '../../App.scss';
import './objective.component.scss';
import { ObjectiveProps } from '../../modules/content/content.state';

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