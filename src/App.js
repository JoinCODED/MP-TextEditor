import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  setStyle(style) {
    this.setState(prevState => ({ [style]: !prevState[style] }));
  }

  setColor(color) {
    this.setState({ color });
  }

  getStyle() {
    let style = {
      color: this.state.color
    };

    if (this.state.bold) style = { ...style, ...styles.bold };
    if (this.state.italic) style = { ...style, ...styles.italic };
    if (this.state.underline) style = { ...style, ...styles.underline };

    return style;
  }

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          className={`btn ${this.state[style] && "btn-primary"}`}
          onClick={() => this.setStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = this.colors.map(color => {
      return (
        <button
          onClick={() => this.setColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.getStyle()} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
