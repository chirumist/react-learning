import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export const NavbarComponent = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(AuthContext);
  return (
    <div className="flex flex-rows gap-4 items-center">
      <Link to="/" className="text-green-500 hover:text-green-800">
        Home
      </Link>
      <Link to="about" className="text-green-500 hover:text-green-800">
        About
      </Link>
      <Link to="contact" className="text-green-500 hover:text-green-800">
        Contact
      </Link>
      <Link to="faq" className="text-green-500 hover:text-green-800">
        FAQ
      </Link>
      <a href="#" className="text-green-500 hover:text-green-800">
        Hep
      </a>
      {!isAuthenticated ? (
        <>
          <Link
            to="login"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 ease-in-out shadow hover:shadow-lg focus:shadow-none"
          >
            Login
          </Link>
          <button
            type="button"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 ease-in-out shadow hover:shadow-lg focus:shadow-none"
          >
            Register
          </button>
        </>
      ) : (
        <>
          <a
            href="#"
            className="flex gap-2 text-orange-600 hover:text-orange-700 px-2 rounded-full"
          >
            {user.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
          <button
            type="button"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 ease-in-out shadow hover:shadow-lg focus:shadow-none"
            onClick={() => {
              setIsAuthenticated(false);
              setUser(null);
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
