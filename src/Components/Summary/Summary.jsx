/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Summary.css";
const Summary = ({ score, noq, id, correctIndexes, checkedIndexes }) => {
  console.log({ checkedIndexes });
  console.log({ correctIndexes });
  const extractNumbersAndTitles = (correctIndexes) => {
    const numbers = [];
    const titles = [];

    correctIndexes.map((item, index) => {
      if (typeof item === "number") {
        numbers.push(item);
      } else if (typeof item === "object" && item.hasOwnProperty("title")) {
        titles.push(item.title);
      }
      return item; // Required for map function, but not used in this example.
    });

    return { numbers, titles };
  };

  const renderNumbersAndTitles = (numbers, titles) => {
    const result = [];

    for (let i = 0; i < Math.min(numbers.length, titles.length); i++) {
      const formattedString = `${numbers[i]} : ${titles[i]}`;
      result.push({
        index: i,
        formattedString,
        number: numbers[i],
        title: titles[i],
      });
    }

    return result;
  };

  const { numbers, titles } = extractNumbersAndTitles(correctIndexes);

  const formattedData = renderNumbersAndTitles(numbers, titles);

  console.log(formattedData);

  return (
    <div>
      <div className="flex justify-between items-center  lg:flex-row flex-col mt-20">
        <div className="flex flex-col gap-5 basis-1/2 items-center">
          <p className="text-2xl font-bold">
            <p>Your score is</p>
            <span className="text-blue-600">{score}</span> out of{" "}
            <span className="text-green-600">{noq * 5}</span>
          </p>
          <p>
            {score <= 5 ? (
              <div className="text-red-500">
                Scored below expectations. It's important to revisit the basics.
                Explore more and try again. Don't be discouraged; learning takes
                time!
              </div>
            ) : score <= 10 ? (
              <div className="text-red-500">
                Fair effort, but there's room for improvement. Take your time to
                review the questions you missed. Keep exploring the material and
                try again. You're on the right path!
              </div>
            ) : score <= 15 ? (
              <div className="text-red-500">
                You're making progress! Focus on understanding the basics and
                addressing areas where you struggled. Keep exploring and
                practicing; improvement is within reach.
              </div>
            ) : score <= 20 ? (
              <div className="text-yellow-600">
                Not bad at all! There's room for improvement, so review the
                questions you missed. Consider delving deeper into the material
                and practicing regularly. You're on the right track!
              </div>
            ) : score <= 25 ? (
              <div className="text-orange-500">
                Good effort! You're demonstrating a solid understanding. Review
                your performance and challenge yourself with more advanced
                concepts. Keep up the momentum!
              </div>
            ) : score <= 30 ? (
              <div className="text-green-300">
                Well done! You have a strong grasp of the material. Focus on
                refining your knowledge and tackling more complex questions.
                Your dedication is paying off; keep it up!
              </div>
            ) : score <= 35 ? (
              <div className="text-green-500">
                Impressive! You've mastered the majority of the quiz. Consider
                exploring advanced topics or challenging yourself with
                additional material. Your commitment to learning is commendable!
              </div>
            ) : score <= 39 ? (
              <div className="text-green-800">
                Outstanding performance! You've demonstrated a high level of
                understanding. Focus on refining your knowledge and maybe even
                consider sharing your expertise. Keep pushing yourself!
              </div>
            ) : (
              <div className="text-green-800">
                Perfect score! Congratulations, you've mastered the quiz.
                Challenge yourself with even more advanced topics or consider
                sharing your expertise with others. Your dedication to learning
                is truly commendable!
              </div>
            )}
          </p>
          <Link
            to={`/quiz/${id}`}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Try Again
          </Link>
        </div>
        <div className="basis-1/2">
          <img src="../../../images/success.png" alt="Success" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
