import React from "react";
import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const navBar = () => {
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    navigate("/");
  };
  return (
    <header className="bg-dark flex justify-between items-center px-9 h-20 text-white text-lg font-extralight">
      <Link to="/">ALL TOURS</Link>
      <Link to="/">
        <img src="./logo.png" alt="logo" className=" w-20" />
      </Link>
      {!isAuthenticated() ? (
        <nav className="gap-5 flex items-center">
          <Link to="/login" className="">
            login
          </Link>
          <Link
            to="/signup"
            className="border border-white rounded-full px-5 py-2"
          >
            signup
          </Link>
        </nav>
      ) : (
        <div className="flex items-center gap-5">
          <button onClick={logout}>Sign Out</button>
          <Link to="/profile" className="flex items-center gap-2  ">
            <img
              src="https://i.pravatar.cc/300"
              alt="avatar"
              className="w-10 rounded-full"
            />
            <h1 className="capitalize">{auth().name}</h1>
          </Link>

          {auth().role == "admin" && (
            <Link to="/DashBoard" className="flex items-center gap-2  ">
              Dashboard
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default navBar;
