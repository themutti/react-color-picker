function rgbToRgbStr(color) {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}

function rgbComponentToHex(c) {
  c = c.toString(16);
  return c.length === 1 ? "0" + c : c;
}

function rgbToHexStr(color) {
  return (
    "#" + rgbComponentToHex(color.red) + 
    rgbComponentToHex(color.green) + 
    rgbComponentToHex(color.blue)
  ).toUpperCase();
}

function rgbToHslStr(color) {
  const r = color.red / 255;
  const g = color.green / 255;
  const b = color.blue / 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h, s, l;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta !== 0 ? (delta / (1 - Math.abs(2 * l - 1))) : 0;
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return `hsl(${h}, ${s}%, ${l}%)`;
}


function ColorGradientsButton(props) {
  return (
    <button></button>
  );
}

export default function ColorDetails(props) {
  return (
    <div>
      <h2>Selected color</h2>
      <div
        style={{ backgroundColor: rgbToRgbStr(props.color) }}
        className="color-preview"
      ></div>
      <div>{props.color.name}</div>
      <div>{rgbToRgbStr(props.color)}</div>
      <div>{rgbToHexStr(props.color)}</div>
      <div>{rgbToHslStr(props.color)}</div>
    </div>
  );
}
