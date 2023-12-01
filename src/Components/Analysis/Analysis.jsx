import Answers from "../Answers/Answers";
import "./Analysis.css";
const Analysis = () => {
  return (
    <div>
      <div className="analysis">
        <h1 className="text-4xl font-bold">Question Analysis</h1>
        <h4 className="text-lg font-semibold">You answerd 5 out of 10 questions correctly</h4>
        <Answers/>
      </div>
    </div>
  );
};

export default Analysis;
