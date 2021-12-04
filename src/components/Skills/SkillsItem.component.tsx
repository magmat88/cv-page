import '../../App.scss';

export interface SkillsItemProps {
  skillImg: string;
  skillName: string;
  extraInformation: string | null;
}

export const SkillsItem = ({
  skillImg,
  skillName,
  extraInformation,
}: SkillsItemProps) => {
  return (
    <div className="div1">
      <div className="skillsContainer">
        <img
          src={skillImg}
          key="{skillName}-img"
          alt={skillName}
          className="smallImg"
        />
        <div className="imgText">
          <h3>{skillName}</h3>
          {extraInformation && <p>{extraInformation}</p>}
        </div>
      </div>
    </div>
  );
};