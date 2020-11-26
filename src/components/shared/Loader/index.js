import "./style.scss";

function Loader(props) {
  return (
    <div
      {...props}
      className={`loader ${props.className}`}
    >
      <progress className="matter-progress-linear" />
    </div>
  )
}

export {
  Loader
}