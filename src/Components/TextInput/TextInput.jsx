/* eslint-disable react/prop-types */
import "./TextInput.css";
const TextInput = ({ icon, className, ...rest  }) => {
  return (
    <div>
      <div className={className}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </div>
  );
};

export default TextInput;
