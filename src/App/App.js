import React, { Component } from "react";
// import { getStories } from "../apiCalls.js";
import { stories } from '../storyData.js';
import Home from "../Home/Home.js";
import Scene from "../Scene/Scene.js";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories,
      error: "",
    };
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
