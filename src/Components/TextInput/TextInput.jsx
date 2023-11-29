/* eslint-disable react/prop-types */
import "./TextInput.css";
const TextInput = ({ icon, ...rest }) => {
  return (
    <div>
      <div className="textInput">
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </div>
  );
};

export default TextInput;
