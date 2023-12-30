import "./Summary.css";
const Summary = ({score, noq}) => {  
  return (
    <div>
      <div className="summary">
        <div className="point">
          <p className="score">
            Your score is <br />{score} out of {noq * 5}
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
