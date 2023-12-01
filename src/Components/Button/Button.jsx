/* eslint-disable react/prop-types */
import "./Button.css";
const Button = ({ children }) => {
  return (
    <div className="button">
      {children}
    </div>
  );
};

export default Button;
