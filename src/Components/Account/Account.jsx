import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div>
      <Link to={"/signUp"} className="flex items-center gap-1">
        <IoMdLogIn className="text-4xl font-bold" />
        <p className="text-lg">SignUp</p>
      </Link>
    </div>
  );
};

export default Account;
