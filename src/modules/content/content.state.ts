export interface HeaderProps extends NavBarProps {
	//
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
	aboutMeRef: any;
	about: string;
	linkToCV: string;
	github: string;
	linkedIn: string;
}

export interface ContactProps {
	title: string;
	index: number;
	contactRef: any;
	email: string;
}

export interface EducationProps {
	title: string;
	index: number;
	educationRef: any;
	degree: string;
	department: string;
	endDate: string | null;
	extraInformation: string[];
	startDate: string;
	universityName: string;
	onlineCertifications: string[];
	onlineCourses: string[];
}

export interface UniversityProps {
	degree: string;
	department: string;
	endDate: string | null;
	extraInformation: string[];
	startDate: string;
	universityName: string;
}

export interface ProgrammingSkillsProps {
	onlineCertifications: string[];
	onlineCourses: string[];
}

export interface ExperienceProps {
	title: string;
	index: number;
	experienceRef: any;
	projects: Project[];
	work: WorkProps;
	companyName: string;
	companyLogo: string;
	department: string;
	earnedSkills: string[];
	endDate: string | null;
	extraInformation: string[];
	position: string;
	responsibilities: string[];
	startDate: string;
}

export type WorkProps = {
	companyName: string;
	companyLogo: string;
	department: string;
	earnedSkills: string[];
	endDate: string | null;
	extraInformation: string[];
	position: string;
	responsibilities: string[];
	startDate: string;
}

export interface ProjectsProps {
	projects: Project[];
}

export type Project = {
	projectName: string;
	projectLogo: string | null;
	projectLink: string;
	extraInformation: string[];
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
	objective: string;
}
