import { useRef } from "react";
import "./App.scss";
import cvData from "./cvData.json";
import { Header } from "./components/header/header.component";
import { MainContent } from "./components/mainContent/mainContent.component";
import { Footer } from "./components/footer/footer.component";

function App() {
	const aboutMeRef = useRef(null);
	const objectiveRef = useRef(null);
	const educationRef = useRef(null);
	const experienceRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<div className="styledApp">
			<Header
				components={cvData.components}
				aboutMeRef={aboutMeRef}
				objectiveRef={objectiveRef}
				educationRef={educationRef}
				experienceRef={experienceRef}
				skillsRef={skillsRef}
				contactRef={contactRef}
			/>
			<MainContent />
			<Footer aboutPage={"text about page"} author={"magmat88"} />
		</div>
	);
}

export default App;
