import React, { Component } from "react";

class StyleButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.select(this.props.name)}>
        {this.props.name}
      </button>
    );
  }
}

export default StyleButton;
