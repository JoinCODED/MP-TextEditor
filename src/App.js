import React, { Component } from "react";
import "./App.css";
import StyleButton from "./StyleButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: {
        bold: false,
        italic: false,
        underline: false
      },
      color: "black"
    };

    this.colors = ["yellow", "blue", "red", "black", "purple"];

    this.setStyle = this.setStyle.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  setStyle(style) {
    const styling = { ...this.state.styling };
    styling[style] = !styling[style];
    this.setState({ styling: styling });
  }

  chooseColor(color) {
    this.setState({ color: color });
  }

  render() {
    let colorBoxes = this.colors.map(color => {
      return <button key={color} onClick={() => this.chooseColor(color)} />;
    });

    return (
      <div className="App">
        <br />
        <StyleButton select={this.setStyle} name="bold" />
        <StyleButton select={this.setStyle} name="italic" />
        <StyleButton select={this.setStyle} name="underline" />
        <br />
        <br />
        <textarea />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
