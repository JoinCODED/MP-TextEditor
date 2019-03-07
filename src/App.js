import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: null,
    fontWeight: null,
    fontStyle: null,
    textDecorationLine: null
  };
  selectColor = color => {
    this.setState({ color: color });
  };

  selectStyle = style => {
    const translator = {
      bold: "fontWeight",
      italic: "fontStyle",
      underline: "textDeocrationLine"
    };

    if (this.state[translator[style]])
      return this.setState({ [translator[style]]: null });

    this.setState(styles[style]);
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.selectStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.state} />

        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
