import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className=" flex justify-between items-center text-secolor text-sm  p-9 ">
      <div className="">
        <img src="./logo-green.png" alt="Natour logo" className="w-48" />
      </div>
      <div className=" text-end">
        <ul className="flex gap-5">
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Download apps</Link>
          </li>
          <li>
            <Link to="/">Become a guide</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <p className="py-2">© 2023 by Z_Bl0ody.</p>
      </div>
    </footer>
  );
};

export default footer;
