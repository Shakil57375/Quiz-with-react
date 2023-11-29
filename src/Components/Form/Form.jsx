/* eslint-disable react/prop-types */
import "./Form.css";
const Form = ({ children, className, ...rest }) => {
  return (
    <div>
      <form className={`${className} form `} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
};

export default Form;
