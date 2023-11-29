/* eslint-disable react/prop-types */
import "./Button.css";
const Button = ({ children }) => {
  return (
    <div className="button">
      <span>{children}</span>
    </div>
  );
};

export default Button;
