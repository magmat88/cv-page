import "./contact.component.scss";
import contactImg from "../../images/contact/contactImg.jpg";
import { ContactProps } from "../../modules/content/content.state";

export const Contact = ({ title, index, contactRef, email }: ContactProps) => {
	return (
		<section
			className="contact-container"
			id={`#component-${index}`}
			ref={contactRef}
		>
			<h1>{title}</h1>
			<div className="contact-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				<button
					onClick={(e) => {
						window.location.href = `mailto:${email}`;
						e.preventDefault();
					}}
				>Email</button>
			</div>
			<figure className="contact-img"><img src={contactImg} alt="contact-pic" /></figure>
		</section>
	);
};
