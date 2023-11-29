import Answers from "../../Answers/Answers";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;
