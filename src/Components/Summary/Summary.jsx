
import "./Summary.css";
const Summary = () => {
  
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
