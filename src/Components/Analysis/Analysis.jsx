import Questions from "../Questions/Questions";
import "./Analysis.css";
const Analysis = ({ answers }) => {
  return (
    <div>
      <div className="analysis">
        <h1 className="text-4xl font-bold">Question Analysis</h1>
        <Questions answers = {answers} />
      </div>
    </div>
  );
};

export default Analysis;
