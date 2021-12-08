import "../../App.scss";
import "./contact.component.scss";
import { ContactProps } from "../../modules/content/content.state";

export const Contact = ({
	title,
	index,
	contactRef,
	github,
	linkedIn,
	email,
}: ContactProps) => {
	return (
		<section
			className="styledComponent"
			id={`#component-${index}`}
			ref={contactRef}
		>
			<div className="styledItem">
				<div className="styledTitle">
					<h1>{title}</h1>
				</div>
				<div className="btnContainer">
					<p>
						place for 'contact me' information
					</p>
					<button
						className="btn"
						id="github-btn"
						onClick={() => window.open(github)}
					>
						Github
					</button>
					<button
						className="btn"
						id="linkedIn-btn"
						onClick={() => window.open(linkedIn)}
					>
						LinkedIn
					</button>
					<button
						className="btn"
						id="linkedIn-btn"
						onClick={(e) => {
							window.location.href = `mailto:${email}`;
							e.preventDefault();
						}}
					>
						Email
					</button>
				</div>
			</div>
		</section>
	);
};
