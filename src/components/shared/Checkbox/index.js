function Checkbox({ children, ...props }) {
  return (
    <label className="matter-checkbox">
      <input
        {...props}
        type="checkbox"
      />
      <span>{children}</span>
    </label>
  )
}

export {
  Checkbox
}