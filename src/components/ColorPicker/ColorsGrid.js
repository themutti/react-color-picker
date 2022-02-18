import ColorButton from "./ColorButton";

export default function ColorsGrid(props) {
  return (
    <ul className="colors-list">
      {props.colors.map((color) => (
        <ColorButton 
          key={color.name}
          color={color}
          onClick={() => props.onColorSelect(color)}
        />
      ))}
    </ul>
  );
}
