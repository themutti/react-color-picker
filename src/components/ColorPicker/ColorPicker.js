import React from "react";
import ColorsGrid from "./ColorsGrid";
import ColorDetails from "./ColorDetails";
import { rgbToHsl, hslToRgb } from "../../logics/colorConversions";
import COLORS from "../../data/colors";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleGradients = this.handleGradients.bind(this);
    this.state = {
      colors: COLORS,
      selectedColor: COLORS[0],
      isGradients: false
    };
  }

  handleGradients() {
    const selColor = this.state.selectedColor;
    let colors = [];
    if (!this.state.isGradients) {
      const hsl = rgbToHsl(selColor.red, selColor.green, selColor.blue);
      for (let i = 0; i < 11; i++) {
        const rgb = hslToRgb(hsl.h, hsl.s, i*10);
        colors.push({
          red: rgb.red,
          green: rgb.green,
          blue: rgb.blue
        });
      }
    } else {
      colors = COLORS;
    }

    this.setState({
      colors: colors,
      isGradients: !this.state.isGradients
    });
  }

  render() {
    return (
      <div className="color-picker container">
        <ColorsGrid
          colors={this.state.colors}
          onColorSelect={(color) => this.setState({ selectedColor: color })}
        />
        <ColorDetails
          color={this.state.selectedColor}
          isGradients={this.state.isGradients}
          onGradientsClick={this.handleGradients}
        />
      </div>
    );
  }
}
