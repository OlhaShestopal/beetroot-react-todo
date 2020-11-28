function Switch(props) {
  return (
    <label class="matter-switch">
      <input
        {...props}
        type="checkbox"
        role="switch"
      />
      <span>{props.children}</span>
    </label>
  )
}

export {
  Switch
}