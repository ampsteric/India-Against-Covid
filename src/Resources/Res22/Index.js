import React, { Component } from "react";
import Appmark from "./res.md";
import ReactMarkdown from "react-markdown";

class App extends Component {
  constructor() {
    super();
    this.state = { mark: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(Appmark)
      .then((res) => res.text())
      .then((text) => this.setState({ mark: text }));
  }

  render() {
    const { mark } = this.state;
    return (
      <div>
        <ReactMarkdown children={mark} />
      </div>
    );
  }
}

export default App;
