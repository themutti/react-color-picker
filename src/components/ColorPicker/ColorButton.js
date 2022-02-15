export default function ColorButton(props) {
  return (
    <li className="color-item">
      <button
        style={{
          backgroundColor: `rgb(${props.color.red}, ${props.color.green}, ${props.color.blue})`
        }}
        className="color-btn"
        onClick={props.onClick}
      ></button>
    </li>
  );
}
