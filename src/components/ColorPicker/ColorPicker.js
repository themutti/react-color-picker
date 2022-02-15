import React from "react";
import ColorButton from "./ColorButton";
import colors from "../../data/colors";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ul className="colors-list">
          {colors.map((color) => (
            <ColorButton key={color.name} color={color} />
          ))}
        </ul>
      </div>
    );
  }
}
