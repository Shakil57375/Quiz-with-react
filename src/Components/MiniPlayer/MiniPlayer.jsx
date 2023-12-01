import "./MiniPlayer.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
const MiniPlayer = () => {
  return (
    <div>
      <div className="miniPlayer floatingBtn">
        <span className=" open">
          <FaCirclePlay />
        </span>
        <span className=" close">
          <IoCloseSharp />
        </span>
        <img src="../../../images/3.jpg" alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </div>
  );
};

export default MiniPlayer;
