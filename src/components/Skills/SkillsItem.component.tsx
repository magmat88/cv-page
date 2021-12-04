import '../../App.scss';
import './skills.component.scss';

export interface SkillsItemProps {
    skillName: string;
    skillIconName: string;
}

export const SkillsItem = ({ skillName, skillIconName }: SkillsItemProps) => {
    return (
        <div className="div1">
            <div className="skillsContainer">
                <h3>{skillName}</h3>
                <p>{skillIconName}</p>
            </div>
        </div>
    );
};
