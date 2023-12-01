/* eslint-disable react/no-unescaped-entities */
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import Button from "../Button/Button";
import Illustration from "../Illustration/Illustration";
import TextInput from "../TextInput/TextInput";
import "./Login.css";
const Login = () => {
  return (
    <div className="mt-40">
      <h1 className="text-2xl font-bold">Login an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`login flex flex-col gap-3`}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon={<MdAlternateEmail />}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon={<FaLock />}
          />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            <span>{"Don't have an account"}</span>{" "}
            <Link className="text-blue-600 underline" to={"/signUp"}>
              Sign Up
            </Link>{" "}
            instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
