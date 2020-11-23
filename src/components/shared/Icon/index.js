import "./icon.scss";

function Icon(props) {
  const { icon } = props;
  return <i className={`icon icon--${icon}`} aria-hidden="true" />
}

export {
  Icon
}