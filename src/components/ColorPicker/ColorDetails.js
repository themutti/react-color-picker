import { rgbToRgbStr, rgbToHexStr, rgbToHslStr } from "../../logics/colorConversions";

function ColorGradientsButton(props) {
  return (
    <button
      className="gradients-btn"
      onClick={props.onClick}
    >
      { props.isGradients ? "Show all colors" : "Show gradients" }
    </button>
  );
}

export default function ColorDetails(props) {
  const c = props.color;
  
  return (
    <section className="color-details">
      <h2 className="section-title">Selected color</h2>
      <div
        style={{ backgroundColor: rgbToRgbStr(c.red, c.green, c.blue) }}
        className="color-preview"
      ></div>
      {c.name && <div className="color-detail">{c.name}</div>}
      <div className="color-detail">{rgbToRgbStr(c.red, c.green, c.blue)}</div>
      <div className="color-detail">{rgbToHexStr(c.red, c.green, c.blue)}</div>
      <div className="color-detail">{rgbToHslStr(c.red, c.green, c.blue)}</div>
      <ColorGradientsButton
        isGradients={props.isGradients}
        onClick={props.onGradientsClick}
      />
    </section>
  );
}
