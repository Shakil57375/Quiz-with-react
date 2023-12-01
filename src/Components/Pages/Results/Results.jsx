import Analysis from "../../Analysis/Analysis";
import Summary from "../../Summary/Summary";
import "./Results.css";
const Results = () => {
  return (
    <div className="mt-40">
      <Summary />
      <Analysis />
    </div>
  );
};

export default Results;
