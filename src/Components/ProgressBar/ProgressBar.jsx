import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProgressBar.css";
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
const ProgressBar = ({next, prev, progress}) => {
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <FaArrowLeft/>
      </div>
      <div className="rangeArea">
        <div className="tooltip">{progress}% Cimplete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
        <Button className="flex items-center px-6 py-2 font-semibold uppercase gap-2 rounded-xl cursor-pointer" onClick = {next}>
          <span>Next Question</span>
          <FaArrowRight />
        </Button>
    </div>
  );
};

export default ProgressBar;
