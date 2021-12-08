export interface HeaderProps extends NavBarProps {
	data: {
		name: string;
		position: string;
		linkToCv: string;
	};
	components: any[];
}

export interface NavBarProps {
	aboutMeRef: any;
	objectiveRef: any;
	educationRef: any;
	experienceRef: any;
	skillsRef: any;
	contactRef: any;
}

export enum Component {
	ABOUT_ME = "aboutMe",
	CONTACT = "contact",
	EDUCATION = "education",
	EXPERIENCE = "experience",
	OBJECTIVE = "objective",
	SKILLS = "skills",
}

export interface ComponentData {
	title: string;
	componentData: any[];
	ref: any;
}

export interface AboutMeProps {
	title: string;
	index: number;
	about: string;
	image: string;
	aboutMeRef: any;
}

export interface ContactProps {
	title: string;
	index: number;
	contactRef: any;
	github: string;
	linkedIn: string;
	email: string;
}

export interface EducationProps extends EducationItemProps {
	title: string;
	index: number;
	educationRef: any;
}

export interface EducationItemProps {
	degree: string;
	department: string;
	endDate: string | null;
	extraInformation: any[];
	startDate: string;
	university: string;
}

export interface ExperienceProps extends ExperienceItemProps {
	title: string;
	index: number;
	experienceRef: any;
}

export interface ExperienceItemProps {
	company: string;
	companyLogo: string;
	position: string;
	department: string;
	startDate: string;
	endDate: string | null;
	extraInformation: string | null;
	responsibilities: string[];
	earnedSkills: string[];
}

export interface FooterProps {
	aboutPage: string;
	author: string;
}

export interface SkillsProps extends SkillsItemProps {
	title: string;
	index: number;
	skillsRef: any;
}

export interface SkillsItemProps {
	skills: string[];
}

export interface ObjectiveProps {
	title: string;
	index: number;
	objectiveRef: any;
	objectiveInformation: string;
}
