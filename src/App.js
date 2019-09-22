import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
        <button style={styles[style]} key={style}>
          {style}
        </button>
      );
    });

    const colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
