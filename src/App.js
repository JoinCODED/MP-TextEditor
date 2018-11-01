import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  setStyle = style => {
    const newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  };

  chooseColor = color => {
    this.setState({ color: color });
  };

  render() {
    const styles = {
      bold: { fontWeight: "bold" },
      italic: { fontStyle: "italic" },
      underline: { textDecorationLine: "underline" }
    };

    const styleNames = ["bold", "italic", "underline"];
    const colors = ["yellow", "blue", "red", "black", "purple"];

    const stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.setStyle(style)}
        >
          {style}
        </button>
      );
    });

    const colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.chooseColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
