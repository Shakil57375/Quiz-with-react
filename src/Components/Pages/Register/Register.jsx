import  { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

const Register = () => {
  const {
    registerUser,
    goggleRegister,
    updateUserData,
    logOut,
  } = useContext(AuthContext);
  // console.log(githubSignUp);
  // console.log(registerUser);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Please add more then 6 character");
      return;
    }
    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User successfully registered");
          form.reset();
          // updateUserData(result.user, name)
          updateData(result.user, name, photo);
          logOut()
            .then(() => {
              // console.log(result);
            })
            .catch((error) => {
              console.log(error.message);
            });
          navigate('/login');
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
    const updateData = (user, name, photo) => {
      updateUserData(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("updated");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };
  const handleGoogleLogin = () => {
    goggleRegister()
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
 
  return (
    <div>
      <div className="hero min-h-screen lg:mt-24 mt-[4.2rem] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold">Register</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[450px] sm:w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <p className="text-red-700">{error}</p>
              <p className="text-green-600">{success}</p>
              <div>
                <a href="#" className="label-text-alt link link-hover">
                  Already have an account? Please{" "}
                  <Link className="text-blue-600" to="/login">
                    Login
                  </Link>
                </a>
              </div>
              <div className="form-control mt-6">
                <button className="d-btn">Register</button>
              </div>

              <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10">
                OR
              </p>

              <div className="">
                <img
                  onClick={handleGoogleLogin}
                  className=" social-button cursor-pointer"
                  src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
