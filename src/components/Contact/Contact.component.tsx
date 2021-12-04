import '../../App.css';

export interface ContactProps {
  title: string;
  index: number;
  contactRef: any;
  componentData: {
    github: string;
    linkedIn: string;
  };
}

export const Contact = ({
  title,
  index,
  contactRef,
  componentData: { github, linkedIn },
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
            Feel free to check out my Github and LinkedIn. You can contact me by
            sending an email.
          </p>
          <button
            className="btn"
            id="github-btn"
            onClick={() => window.open(github)}
          >
            Go to Github
          </button>
          <button
            className="btn"
            id="linkedIn-btn"
            onClick={() => window.open(linkedIn)}
          >
            Go to LinkedIn
          </button>
          <button
            className="btn"
            id="linkedIn-btn"
            onClick={(e) => {
              window.location.href = 'mailto:magdalena.matusiak88@gmail.com';
              e.preventDefault();
            }}
          >
            Send me an email
          </button>
        </div>
      </div>
    </section>
  );
};