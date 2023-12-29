import { useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import "./Summary.css";
const Summary = () => {
  const { id } = useParams();
  const { loading, error, answers } = useAnswers(id);
  console.log(id);
  return (
    <div>
      <div className="summary">
        <div className="point">
          <p className="score">
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className="badge">
          <img src="../../../images/success.png" alt="Success" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
