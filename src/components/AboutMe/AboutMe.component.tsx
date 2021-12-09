import aboutMeImg from "../../images/aboutMe/aboutMeImg.jpg";
import { AboutMeProps } from "../../modules/content/content.state";

export const AboutMe = ({
	title,
	index,
	aboutMeRef,
	about,
	linkToCV,
	github,
	linkedIn,
}: AboutMeProps) => {
	// const [cvImgVisible, setCvImgVisible] = useState(false);

	return (
		<section
			className="about-me-container"
			ref={aboutMeRef}
			id={`#component-${index}`}
		>
			<div className="about-me-content">
				<h1>Magdalena Matusiak</h1>
				<h3>Frontend Developer</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<button
					onClick={() => window.open(github)}
				>
					Github
				</button>
				<button
					onClick={() => window.open(linkedIn)}
				>
					LinkedIn
				</button>
					<button
						onClick={() => window.open(linkToCV)}
					>
						{"↓ My CV"}
					</button>
			</div>
			<figure className="about-me-img">
				<img src={aboutMeImg} alt="about-me-pic" />
			</figure>
		</section>

		// <section
		//   className="styledComponent"
		//   id={`#component-${index}`}
		//   ref={aboutMeRef}
		// >
		//   <div className="styledItem">
		//     <div className="styledTitle">
		//       <h1>{title}</h1>
		//     </div>
		//     <div className="btnContainer">
		//       <button
		//         className="btn"
		//         id="cv-btn"
		//         onClick={() => setCvImgVisible(!cvImgVisible)}
		//       >
		//         {cvImgVisible ? 'Hide' : 'Show'} Cv image
		//       </button>
		//       <div className={cvImgVisible ? 'show' : 'hide'}>
		//         <img
		//           height="400px"
		//           alt="cv-img"
		//           src={image}
		//           className="cvImg"
		//         />
		//       </div>

		//     </div>
		//     <p>{about}</p>
		//   </div>
		// </section>
	);
};
