/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-400  w-full pt-4 pb-4">
      <div className="text-black font-semibold font-serif text-xl hover:text-white text-center ">
        About Chef Recipe Hunter!
      </div>
      <nav className="flex lg:flex-row flex-col justify-center items-center">
        <a href="/" className="text-black hover:text-white px-3 py-2">
          Home
        </a>
        <a href="/blogs" className="text-black hover:text-white px-3 py-2">
          Blogs
        </a>
        <a href="/about" className="text-black hover:text-white px-3 py-2">
          About Us
        </a>
        <a href="/login" className="text-black hover:text-white px-3 py-2">
          Login
        </a>
        <a
          href="/register"
          className="text-black hover:text-white px-3 py-2"
        >
          Register
        </a>
      </nav>
      <div>
        <p className="text-center font-semibold text-black hover:text-white ">
          Contact with me by using
        </p>
        <div className="flex justify-center items-center mt-4">
          <a href="#" className=" mr-4">
            <FaFacebook className="text-black hover:text-orange-800 " />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter className="text-black hover:text-orange-800 " />
          </a>
          <a href="#" className="mr-4">
            <FaInstagram className="text-black hover:text-orange-800 " />
          </a>
        </div>
      </div>
      <div className="text-black text-center text-xs mt-4">
        © 2023 Chef Recipe Hunter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
