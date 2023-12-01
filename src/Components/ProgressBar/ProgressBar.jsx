import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProgressBar.css";
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
const ProgressBar = () => {
  return (
    <div className="progressBar">
      <div className="backButton">
        <FaArrowLeft/>
      </div>
      <div className="rangeArea">
        <div className="tooltip">24% Cimplete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to={"/result"}>
        <Button className="next">
          <span>Next Question</span>
          <FaArrowRight />
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
