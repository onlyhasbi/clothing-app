import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, variant, ...props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
