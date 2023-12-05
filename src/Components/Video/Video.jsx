import "./Video.css";
import image from "../../../images/3.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Video = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    Swal.fire({
      title: "To participate in the quiz, kindly log in.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: { from: location } });
      }
    });
  };

  return (
    <div>
      {user ? (
        <div className="video">
          <img src={image} alt="video title" />
          <p>#23 React Hooks Bangla </p>
          <div className="qmeta">
            <p>10 questions</p>
            <p>score : not taken yet</p>
          </div>
        </div>
      ) : (
        handleLogin()
      )}
    </div>
  );
};

export default Video;
