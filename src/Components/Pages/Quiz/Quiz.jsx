import Answers from "../../Answers/Answers";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold">Pick three of your favorite Star Wars Films</h1>
      <h4 className="text-lg font-semibold">Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;
