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
    type: string;
    title: string;
    componentData: any[];
    ref: any;
}

export interface AboutMeProps {
    title: string;
    index: number;
    componentData: {
      about: string;
      showCvImg: boolean;
      cvImg: string;
    };
    aboutMeRef: any;
  }

export interface AboutMeProps {
	title: string;
	index: number;
	aboutMeRef: any;
}

export interface ContactProps {
	title: string;
	index: number;
	contactRef: any;
}

export interface EducationProps extends EducationItemProps {
	componentData: {
		degree: string;
		university: string;
		location: string;
		department: string;
		startYear: string | null;
		startMonth: string | null;
		endYear: string | null;
		endMonth: string | null;
		showExtraInformation: boolean;
		extraInformation: any[];
	}[];
	title: string;
	type: string;
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
	componentData: any;
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
