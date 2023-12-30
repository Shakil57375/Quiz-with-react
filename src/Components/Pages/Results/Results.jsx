import Analysis from "../../Analysis/Analysis";
import Summary from "../../Summary/Summary";
import { useLocation, useParams } from "react-router-dom";
import "./Results.css";
import useAnswers from "../../../Hooks/useAnswers";
import Loader from "../Loader/Loader";
const Results = () => {
  const { id } = useParams();
  const { location } = useLocation();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);
  return (
    <div>
      {loading && <Loader />}
      {error && <div>There was an error</div>}
      <Summary />
      <Analysis />
    </div>
  );
};

export default Results;
