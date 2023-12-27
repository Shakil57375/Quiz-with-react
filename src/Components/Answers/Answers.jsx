/* eslint-disable react/prop-types */
import Checkbox from "../Checkbox/Checkbox";
import Loader from "../Pages/Loader/Loader";
import "./Answers.css";
const Answers = ({ options = [], handleChanges, loading }) => {
  return (
    <div className="answers">
      {loading && <Loader />}
      {options.map((option, index) => (
        <Checkbox
          key={index}
          text={option?.title}
          value={index}
          checked={option?.checked}
          className={`answer`}
          onChange={(e) => handleChanges(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
