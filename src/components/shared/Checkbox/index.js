function Checkbox(props) {
  return (
    <label className="matter-checkbox">
      <input
        {...props}
        type="checkbox"
      />
      <span>{props.children}</span>
    </label>
  )
}

export {
  Checkbox
}