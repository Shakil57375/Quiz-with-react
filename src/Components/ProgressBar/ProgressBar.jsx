/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import "./ProgressBar.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ProgressBar = ({ next, prev, submit, progress }) => {
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <FaArrowLeft />
      </div>
      <div className="rangeArea">
        <div className="tooltip">{progress}% Complete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <Button
        className="flex items-center px-6 py-2 font-semibold uppercase gap-2 rounded-xl cursor-pointer bg-[#00ff84]"
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Answers" : "Next Question"}</span>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default ProgressBar;
