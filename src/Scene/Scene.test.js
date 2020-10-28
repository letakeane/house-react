import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import Scene from "./Scene";

// it should render a scenario with two options based on the story prop

// create story prop

describe("Scene", () => {
  it("should render a scenario", () => {
    const history = createMemoryHistory();
    const story = {
      id: "beginning",
      html:
        ["You wake up out of a dead sleep.", "Your phone screen is shockingly bright as you check the time: 3:12am.","Wait. Something woke you up. There's a faint memory from the edge of wakefulness. What was it? You think back..."],
      options: [
        { storyID: 1, text: "It was a noise, somewhere in the house." },
        {
          storyID: 2,
          text:
            "It was a sensation of movement - like a breeze whispering across your face.",
        },
      ],
    };

    render(
      <Router history={history}>
        <Scene story={story} />
      </Router>
    );

    const innerHTML = screen.getByText("You wake up out of a dead sleep.");

    expect(
      innerHTML
    ).toBeInTheDocument();
    expect(
      screen.getByText("It was a noise, somewhere in the house.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "It was a sensation of movement - like a breeze whispering across your face."
      )
    ).toBeInTheDocument();
  });
});
