import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../../Form/Form";
import Illustration from "../../Illustration/Illustration";
import TextInput from "../../TextInput/TextInput";
import { IoMdPerson } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdLockClock } from "react-icons/md";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="mt-40">
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`signUp`}>
          <TextInput
            type="text"
            placeholder="Enter Name"
            icon={<IoMdPerson />}
          />
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
          <TextInput
            type="password"
            placeholder="confirm password"
            icon={<MdLockClock />}
          />
          <Checkbox text="I agree to the Terms &amp; conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
