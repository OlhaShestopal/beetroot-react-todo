import "./checkbox.scss";

function Checkbox(props) {
  const { className, ...otherProps } = props;

  return (
    <label className={`checkbox ${className} ${props.checked && "checked"}`}>
      <input
        {...otherProps}
        type="checkbox"
        className="checkbox__control"
      />
      {props.children &&
        <span className="checkbox__label">
          {props.children}
        </span>
      }
    </label>
  )
}

export {
  Checkbox
}