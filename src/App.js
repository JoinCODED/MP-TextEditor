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
  render() {
    const stylingBoxes = stylings.map(style => (
      <button
        className="btn btn-light"
        style={{ ...styles[style], marginTop: "20px", marginBottom: "15px" }}
        key={style}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => (
      <button
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
      />
    ));

    return (
      <div className="App">
        <div>{stylingBoxes}</div>
        <textarea />
        <div>{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
