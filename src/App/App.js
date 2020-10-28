import React, { Component } from "react";
import { getStories } from "../apiCalls.js";
import Home from "../Home/Home.js";
import Scene from "../Scene/Scene.js";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [
        {
          id: "beginning",
          html:
            "<p>You wake up out of a dead sleep.</p><p>Your phone screen is shockingly bright as you check the time: 3:12am.</p><p>Wait. Something woke you up. There's a faint memory from the edge of wakefulness. What was it? You think back...</p>",
          options: [
            { storyID: 1, text: "It was a noise, somewhere in the house." },
            {
              storyID: 2,
              text:
                "It was a sensation of movement - like a breeze whispering across your face.",
            },
          ],
        },
      ],
      error: "",
    };
  }

  componentDidMount() {
    getStories().then((stories) => this.setState({ stories }));
  }

  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route
          path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            const storyToRender = this.state.stories.find(story => story.id === id);
            return <Scene story={storyToRender} />;
          }}
        />
      </main>
    );
  }
}

export default App;
