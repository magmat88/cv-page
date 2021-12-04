import '../../App.scss';
import { SkillsItem, SkillsItemProps } from './SkillsItem.component';

export interface SkillsProps {
  componentData: SkillsItemProps[];
  title: string;
  index: number;
  skillsRef: any;
}

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
                skillImg={skillsItem.skillImg}
                skillName={skillsItem.skillName}
                extraInformation={skillsItem.extraInformation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
