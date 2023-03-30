import "./App.css";
import React from "react";
import Example from "./Example.";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "Ukraine",
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return prevState.country === "Ukraine"
        ? { country: "Ukraine is the best country" }
        : { country: "Ukraine" };
    });
  };

  render() {
    return (
      <>
        <Example country={this.state.country} />
        <button onClick={this.handleClick}>Toggle</button>
      </>
    );
  }
}

export default App;
