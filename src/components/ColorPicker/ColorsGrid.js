import ColorButton from "./ColorButton";

export default function ColorsGrid(props) {
  return (
    <section className="colors-grid">
      <h2 className="section-title">Pick a color</h2>
      <ul className="colors-list">
        {props.colors.map((color) => (
          <ColorButton 
            key={color.name}
            color={color}
            onClick={() => props.onColorSelect(color)}
          />
        ))}
      </ul>
    </section>
  );
}
