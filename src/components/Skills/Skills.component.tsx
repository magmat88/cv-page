import '../../App.scss';
import './skills.component.scss';
import { SkillsItem } from './skillsItem.component';
import { SkillsItemProps, SkillsProps } from '../../modules/content/content.state';

export const Skills = ({
  componentData,
  title,
  index,
  skillsRef,
}: SkillsProps) => {
  return (
    <section
      className="styledComponent"
      id={`#component-${index}`}
      ref={skillsRef}
    >
      <div className="styledItem">
        <div className="styledTitle">
          <h1>{title}</h1>
        </div>
        <div className="flexSkills">
          {componentData.map((skillsItem: SkillsItemProps) => (
            <div className="flexSkills">
              <SkillsItem
                skillName={skillsItem.skillName}
                skillIconName={skillsItem.skillIconName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};