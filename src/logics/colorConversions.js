// based on https://css-tricks.com/converting-color-spaces-in-javascript/

export function rgbComponentToHex(c) {
  c = c.toString(16);
  return c.length === 1 ? "0" + c : c;
}

export function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
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

  return { h: h, s: s, l: l };
}

export function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c/2;
  let r, g, b;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { red: r, green: g, blue: b };
}

export function rgbToHexStr(red, green, blue) {
  return (
    "#" + rgbComponentToHex(red) + 
    rgbComponentToHex(green) + 
    rgbComponentToHex(blue)
  ).toUpperCase();
}

export function rgbToRgbStr(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}

export function rgbToHslStr(red, green, blue) {
  const hsl = rgbToHsl(red, green, blue);
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}
