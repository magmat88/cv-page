import './footer.component.scss';
import { FooterProps } from "../../modules/content/content.state";

export const Footer = ({aboutPage, author}: FooterProps) => {
    return (
        <div className="footer-container">
            <div className="about-container">{aboutPage}</div>
            <div className="author-container"><p>&copy; {author}</p></div>
        </div>
    );
};
