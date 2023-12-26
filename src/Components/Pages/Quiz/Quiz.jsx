import { useParams } from "react-router-dom";
import Answers from "../../Answers/Answers";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import "./Quiz.css";
import { useReducer, useState } from "react";
import useQuestion from "../../../Hooks/useQuestion";
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    default:
      return state;
  }
};
const Quiz = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, questions } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const initialValue = null;
  const [qna, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold">
        Pick three of your favorite Star Wars Films
      </h1>
      <h4 className="text-lg font-semibold">
        Question can have multiple answers
      </h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;
