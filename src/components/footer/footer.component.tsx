// import '../../App.scss';
import './footer.component.scss';

interface FooterProps {
    aboutPage: string;
    aboutAuthor: string;
}

export const Footer = ({aboutPage, aboutAuthor}: FooterProps) => {
    return (
        <div className="footer-container">
            <div className="about-container">{aboutPage}</div>
            <div className="author-container">{aboutAuthor}</div>
        </div>
    );
};
