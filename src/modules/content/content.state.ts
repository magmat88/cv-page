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
	componentData: AboutMeItemProps[];
	aboutMeRef: any;
}

export interface AboutMeItemProps {
	about: string;
	showCvImg: boolean;
	cvImg: string;
}

export interface ContactProps {
	title: string;
	index: number;
	componentData: ContactItemProps[];
	contactRef: any;
}

export interface ContactItemProps {
	github: string;
	linkedIn: string;
	email: string;
}

export interface EducationProps {
	componentData: EducationItemProps[];
	title: string;
	index: number;
	educationRef: any;
	showExtraInformation: boolean;
}

export interface EducationItemProps {
	degree: string;
	university: string;
	location: string;
	department: string | null;
	startYear: string | null;
	startMonth: string | null;
	endYear: string | null;
	endMonth: string | null;
	showExtraInformation: boolean;
	extraInformation: any[];
}

export interface ExperienceProps {
	componentData: ExperienceItemProps[];
	title: string;
	index: number;
	experienceRef: any;
}

export interface ExperienceItemProps {
	company: string;
	companyLogo: string;
	title: string;
	department: string;
	startYear: string;
	startMonth: string;
	endYear: string | null;
	endMonth: string | null;
	showCompanyName: boolean;
	showCompanyLogo: boolean;
	extraInformation: string | null;
	showResponsibilities: boolean;
	responsibilities: string[];
	keywordsResponsibilities: string[];
}

export interface FooterProps {
	aboutPage: string;
	author: string;
}

export interface SkillsProps {
	componentData: SkillsItemProps[];
	title: string;
	index: number;
	skillsRef: any;
}

export interface SkillsItemProps {
	skillName: string;
	skillIconName: string;
}

export interface ObjectiveProps {
	title: string;
	componentData: {
		objectiveInformation: string;
	};
	index: number;
	objectiveRef: any;
}
