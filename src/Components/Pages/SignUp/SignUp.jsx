import Checkbox from "../../Checkbox/Checkbox";
import Form from "../../Form/Form";
import Illustration from "../../Illustration/Illustration";
import TextInput from "../../TextInput/TextInput";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`signUp`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; conditions" />
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
