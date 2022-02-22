import { rgbToRgbStr } from "../../logics/colorConversions";

export default function ColorButton(props) {
  const c = props.color;

  return (
    <li className="color-item">
      <button
        style={{
          backgroundColor: rgbToRgbStr(c.red, c.green, c.blue)
        }}
        className="color-btn"
        onClick={props.onClick}
      ></button>
    </li>
  );
}
