import "./Video.css";
import image from "../../../images/success.png"
const Video = () => {
  return (
    <div>
      <a href="">
        <div className="video">
          <img src={image} alt="video title" />
          <p>#23 React Hooks Bangla </p>
          <div className="qmeta">
            <p>10 questions</p>
            <p>score : not taken yet</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Video;
