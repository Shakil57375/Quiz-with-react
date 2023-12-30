import Answers from "../Answers/Answers";
import "./Analysis.css";
const Analysis = ({answers}) => {
  return (
    <div>
      <div className="analysis">
        <h1 className="text-4xl font-bold">Question Analysis</h1>
        <Answers/>
      </div>
    </div>
  );
};

export default Analysis;
