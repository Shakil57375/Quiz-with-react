/* eslint-disable react/prop-types */
import "./Button.css";
const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
