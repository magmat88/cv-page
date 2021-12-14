import "./contact.component.scss";
import contactImg from "../../images/contact/contactImg.jpg";
import { useState } from "react";
import {
	ContactProps,
	ContactWaysProps,
} from "../../modules/content/content.state";

export const ContactWays = ({ email, linkedIn }: ContactWaysProps) => {
	return (
		<div className="item-container">
			<p>
				<strong>Ways of contact:</strong>
			</p>
			<div className="btns-container">
				<button
					className="btn"
					onClick={(e) => {
						window.location.href = `mailto:${email}`;
						e.preventDefault();
					}}
				>
					Email
				</button>
				<button className="btn" onClick={() => window.open(linkedIn)}>
					LinkedIn
				</button>
			</div>
		</div>
	);
};

export const Contact = ({
	title,
	index,
	contactRef,
	email,
	linkedIn,
}: ContactProps) => {
	const [waysOfContactVisible, setWaysOfContactVisible] = useState(false);

	return (
		<section
			className="contact-container"
			id={`#component-${index}`}
			ref={contactRef}
		>
			<div className="content-top-container">
				<figure className="contact-img">
					<img src={contactImg} alt="contact-pic" />
				</figure>
				<div className="contact-content">
					<div className="content-header">
						<h1>{title}</h1>
					</div>
					<div className="content-text">
						<p>
							If you have any questions about my skills,
							experience or current projects, do not hesitate to
							contact me. I am looking for new oportunities and
							ready for new challenges.
						</p>
					</div>
				</div>
			</div>

			<div className="contact-item-container">
				<button
					className="btn-item"
					onClick={() =>
						setWaysOfContactVisible(!waysOfContactVisible)
					}
				>
					<p>Contact </p>
					<p>{waysOfContactVisible ? "-" : "+"}</p>
				</button>
				<div className={waysOfContactVisible ? "show" : "hide"}>
					<ContactWays email={email} linkedIn={linkedIn} />
				</div>
			</div>
		</section>
	);
};
