import React, { Component } from "react";
import AppMarkdown from "./README.md";
import Res1 from "./Resources/Res1/Index";
import Res2 from "./Resources/Res2/Index";
import Res3 from "./Resources/Res3/Index";
import Res4 from "./Resources/Res4/Index";
import Res5 from "./Resources/Res5/Index";
import ReactMarkdown from "react-markdown";

class App extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  ComponentdidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <ReactMarkdown children={markdown} />
        <Res1 />
        <Res2 />
        <Res3 />
        <Res4 />
        <Res5 />
      </div>
    );
  }
}

export default App;
