import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { TbFidgetSpinner, TbPasswordUser } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import Button from "../../Button/Button";
import TextInput from "../../TextInput/TextInput";
import Checkbox from "../../Checkbox/Checkbox";

const Register = () => {
  const {
    loader,
    setLoader,
    registerUser,
    goggleRegister,
    updateUserData,
    logOut,
  } = useContext(AuthContext);
  // console.log(githubSignUp);
  // console.log(registerUser);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }
    console.log(username, email, photo, password, confirmPassword, agree);
    // Password validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    // Additional password validation criteria (customize as needed)
    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password should contain at least one lowercase letter");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password should contain at least one uppercase letter");
      return;
    }

    if (!/(?=.*\d)/.test(password)) {
      setError("Password should contain at least one digit");
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError(
        "Password should contain at least one special character (!@#$%^&*)"
      );
      return;
    }

    if (/(\w)\1{2,}/.test(password)) {
      setError("Password should not contain repeated characters (e.g., aaa)");
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
          navigate("/login");
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
          setLoader(false);
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoader(false);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-6 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold">Register</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[450px] sm:w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <TextInput
                type="text"
                placeholder="Enter name"
                icon={<FaPerson className="text-3xl" />}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={"textInput"}
              />

              <TextInput
                type="email"
                placeholder="Enter email"
                icon={<MdEmail className="text-3xl" />}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={"textInput"}
              />

              <TextInput
                type="text"
                placeholder="Photo url"
                icon={<MdInsertPhoto className="text-3xl" />}
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className={"textInput"}
              />

              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                icon={<TbPasswordUser className="text-3xl" />}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={"textInput"}
              />

              <div className="flex gap-2 items-center mt-2">
                <Checkbox
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className={"mt-1"}
                />
                <personalbar>show password</personalbar>
              </div>

              <TextInput
                type="password"
                placeholder="Confirm Password"
                icon={<GiConfirmed className="text-3xl" />}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={"textInput"}
              />

              <div className="flex gap-2 items-center mt-2">
                <Checkbox
                  required
                  value={agree}
                  className={"mt-1"}
                  onChange={(e) => setAgree(e.target.value)}
                />
                <p>I agree to the Terms &amp; Conditions</p>
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
                <Button>
                  {loader ? (
                    <TbFidgetSpinner
                      className="m-auto animate-spin"
                      size={24}
                    ></TbFidgetSpinner>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>

              <div className="divider">OR</div>

              <div
                onClick={handleGoogleLogin}
                className="flex  justify-center  border p-4 rounded-3xl border-black cursor-pointer"
              >
                <div className="flex justify-center items-center gap-5">
                  <img
                    src="https://i.ibb.co/xg9fXJx/google-image.png"
                    className="w-8 h-8"
                  />
                  <p className="text-2xl font-bold">Continue with google</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
