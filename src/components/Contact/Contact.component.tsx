import '../../App.scss';
import './contact.component.scss';
import { ContactProps } from "../../modules/content/content.state";

export const Contact = ({
  title,
  index,
  contactRef,
  componentData
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
            Feel free to check out my Github and LinkedIn. Contact me by
            sending an email.
          </p>
          <button
            className="btn"
            id="github-btn"
            onClick={() => window.open(componentData.github)}
          >
            Github
          </button>
          <button
            className="btn"
            id="linkedIn-btn"
            onClick={() => window.open(componentData.linkedIn)}
          >
            LinkedIn
          </button>
          <button
            className="btn"
            id="linkedIn-btn"
            onClick={(e) => {
              window.location.href = `mailto:${componentData.email}`;
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