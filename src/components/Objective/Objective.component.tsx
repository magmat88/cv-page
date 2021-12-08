import './objective.component.scss';
import objectiveImg from '../../images/objective/objectiveImg.jpg';
import { ObjectiveProps } from '../../modules/content/content.state';

export const Objective = ({
  title,
  index,
  objectiveRef,
  objective
}: ObjectiveProps) => {
  return (
    <section
      className="objective-container"
      id={`#component-${index}`}
      ref={objectiveRef}
    >
      <h1>{title}</h1>
      <figure className="objective-img">
        <img src={objectiveImg} alt="objective-pic" />
      </figure>
      <div className="objective-content">
        <p>{objective}</p>
      </div>
    </section>
  );
};