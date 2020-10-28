import React from "react";
import { Link } from "react-router-dom";

const Scene = ({ story }) => {
  const option1 = story.options[0];
  const option2 = story.options[1];
  const scenarioToDisplay = story.html.map((sentence, i) => <p key={`scenario${i}`}>{sentence}</p>)

  return (
    <section>
      <div className="scenario">{scenarioToDisplay}</div>
      <div className="options">
        <Link
          className="option1"
          to={`/${option1.storyID}`}
        >
          <span>A:</span> {option1.text}
        </Link>
        <Link
          className="option2"
          to={`/${option2.storyID}`}
        >
          <span>B:</span> {option2.text}
        </Link>
      </div>
    </section>
  );
};

export default Scene;
