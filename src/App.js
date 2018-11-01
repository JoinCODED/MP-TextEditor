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
  setStyle = style => {
    const newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  };

  chooseColor = color => this.setState({ color: color });

  render() {
    let stylingBoxes = stylings.map(style => (
      <button
        className={this.state[style] ? "btn btn-primary" : "btn btn-light"}
        style={styles[style]}
        key={style}
        onClick={() => this.setStyle(style)}
      >
        {style}
      </button>
    ));

    let colorBoxes = colors.map(color => (
      <button
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
        onClick={() => this.chooseColor(color)}
      />
    ));

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
