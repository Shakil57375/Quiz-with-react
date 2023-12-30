import Analysis from "../../Analysis/Analysis";
import Summary from "../../Summary/Summary";
import { useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import "./Results.css";
const Results = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, answers } = useAnswers(id);
  return (
    <div>
      <Summary />
      <Analysis />
    </div>
  );
};

export default Results;
