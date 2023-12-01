import Answers from "../Answers/Answers";
import "./Questions.css";
import { IoMdHelpCircle } from "react-icons/io";
const Questions = () => {
  return (
    <div className="question">
      <div className="qtitle">
        <IoMdHelpCircle />
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Questions;
