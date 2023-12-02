/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");  
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const emailRef = useRef()
  const from = location.state?.from?.pathname || "/";
  const { loginUser, goggleRegister, githubRegister, forgetPass } = useContext(AuthContext);
  const handleSubmit = (event) => {
    setError("")
    setSuccess("")
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Please add more then 6 character");
      return;
    }
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result);
          navigate(from, {replace : true});
          setSuccess("User successfully loggedIn");
          form.reset();
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
  };
  const handleGoogleLogin = () => {
    goggleRegister()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Sign up successfully");
        navigate(from, {replace : true});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubRegister()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Sign up successfully");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleResetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Please provide your email address to reset password");
      return;
    }
    forgetPass(email)
      .then(() => {
        toast("Please check your email");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen lg:mt-24 mt-[4.2rem] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold">Log in!</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[450px] w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  ref={emailRef}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input  input-bordered "
                  name="password"
                  required
                />
              <a href="#" className="label-text-alt link link-hover mt-3">
                  Forget password?{" "}
                  <Link onClick={handleResetPass} className="text-blue-600">
                    Reset
                  </Link>
              </a>

              <p
                  className="absolute top-12 right-3"
                  onClick={() => setShow(!show)}
                >
                  <small>
                    {show ? (
                      <span>
                        <FaEyeSlash className="text-2xl" />
                      </span>
                    ) : (
                      <span>
                        <FaEye className="text-2xl" />
                      </span>
                    )}
                  </small>
                </p>
              </div>

              <p className="text-red-700">{error}</p>
              <p className="text-green-600">{success}</p>
              <div>
                <a href="#" className="label-text-alt link link-hover">
                  New to my shop? Please{" "}
                  <Link className="text-blue-600" to="/signUp">
                    Register
                  </Link>
                </a>
              </div>
              <div className="form-control mt-6">
                <button className="d-btn">Login</button>
              </div>
              <div>
                <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10">
                  OR
                </p>

                <div className="mb-3">
                  <img
                    onClick={handleGoogleLogin}
                    className=" social-button cursor-pointer"
                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    onClick={handleGithubLogin}
                    className=" social-button cursor-pointer"
                    src="https://i.ibb.co/g9f4P0S/github-btn.png"
                    alt=""
                  />
                  <ToastContainer></ToastContainer>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
