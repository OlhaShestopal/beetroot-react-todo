function Button(props) {
  // Classes: matter-primary, matter-secondary, matter-error, matter-warning, matter-success
  const {
    type = 'contained',
    nativeType = 'button',
    color = 'primary',
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type={nativeType}
      className={`matter-button-${type} matter-${color} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export {
  Button
}