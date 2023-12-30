/* eslint-disable no-undef */
import Summary from "../../Summary/Summary";
import { useLocation, useParams } from "react-router-dom";
import "./Results.css";
import useAnswers from "../../../Hooks/useAnswers";
import _ from "lodash";
import Loader from "../Loader/Loader";
const Results = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  console.log({ qna });
  const { loading, error, answers } = useAnswers(id);
  console.log({ answers });
  const calculate = () => {
    let score = 0;
    let correctIndexes = [];
    let checkedIndexes = [];
    answers.forEach((question, index1) => {
      console.log({ question });
      console.log({ index1 });
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2, option);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2, option);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score += 5;
      }
    });
    return {
      score: score,
      correctIndexes: correctIndexes,
      checkedIndexes: checkedIndexes,
    };
  };
  const userScore = calculate();
  return (
    <div>
      {loading && <Loader />}
      {error && <div>There was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary
            score={userScore.score}
            correctIndexes={userScore.correctIndexes}
            checkedIndexes={userScore.checkedIndexes}
            noq={answers.length}
            id={id}
          />
        </>
      )}
    </div>
  );
};

export default Results;
