/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
import { useParams } from "react-router-dom";
import Answers from "../../Answers/Answers";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import _ from "lodash";
import "./Quiz.css";
import { useEffect, useReducer, useState } from "react";
import useQuestion from "../../../Hooks/useQuestion";
import Loader from "../Loader/Loader";
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};
const initialValue = null;
const Quiz = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, questions } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(questions);
  const [qna, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };
  // handle when user clicks the next button to get the next question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  // handle when user clicks the prev button to get the prev question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  // calculate percentage of progress

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div className="mt-10">
      {loading && <Loader />}
      {error && <div>there was an error</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1 className="text-4xl font-bold">{qna[currentQuestion].title}</h1>
          <h4 className="text-lg font-semibold">
            Question can have multiple answers
          </h4>
          <Answers
            options={
              qna && qna[currentQuestion] && qna[currentQuestion]?.options
            }
            handleChanges={handleAnswerChange}
            loading={loading}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
          />
          <MiniPlayer />
        </>
      )}
    </div>
  );
};

export default Quiz;
