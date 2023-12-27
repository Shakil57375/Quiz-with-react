import Checkbox from "../Checkbox/Checkbox";
import "./Answers.css";
const Answers = ({ options = [], handleChanges }) => {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Checkbox
          key={index}
          text={option.title}
          value={index}
          checked={option.checked}
          className={`answer`}
          onChange = {(e) => handleChanges(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
