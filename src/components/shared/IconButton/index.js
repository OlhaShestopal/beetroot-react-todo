import "./iconButton.scss";

function IconButton(props) {
  return (
    <button className={`button ${props.className}`}>
      {props.children}
    </button>
  )
}

export {
  IconButton
}