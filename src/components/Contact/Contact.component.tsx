import "./contact.component.scss";
import contactImg from "../../images/contact/contactImg.jpg";
import { useState } from "react";
import {
	ContactProps,
	ContactWaysProps,
} from "../../modules/content/content.state";

export const ContactWays = ({ email }: ContactWaysProps) => {
	return (
		<div className="item-container">
			<p>
				<strong>Ways of contact</strong>
			</p>
			<ul>
				<li>
					<button
						className="btn"
						onClick={(e) => {
							window.location.href = `mailto:${email}`;
							e.preventDefault();
						}}
					>
						Email
					</button>
				</li>
			</ul>
		</div>
	);
};

export const Contact = ({ title, index, contactRef, email }: ContactProps) => {
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
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
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
					<ContactWays email={email} />
				</div>
			</div>
		</section>
	);
};
