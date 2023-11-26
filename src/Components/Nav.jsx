import Account from "./Account";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 right-0 left-0 border border-b-black px-10 py-6">
      <Link to={"/"}>
        <img
          src="https://i.ibb.co/qdLgPnX/code-logo.png"
          className="w-24 h-20"
          alt=""
        />
      </Link>
      <Account />
    </div>
  );
};

export default Nav;
