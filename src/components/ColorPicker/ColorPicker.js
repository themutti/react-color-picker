import React from "react";
import ColorsGrid from "./ColorsGrid";
import ColorDetails from "./ColorDetails";
import COLORS from "../../data/colors";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: COLORS[0]
    };
  }

  render() {
    return (
      <div className="container">
        <ColorsGrid
          colors={COLORS}
          onColorSelect={(color) => this.setState({ selectedColor: color })}
        />
        <ColorDetails color={this.state.selectedColor} />
      </div>
    );
  }
}
