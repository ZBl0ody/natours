import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwordConfirm: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { name, email, password, passwordConfirm } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    axios
      .post("http://localhost:3000/api/v1/users/signup", formData)
      .then(function (response) {
        setMsg("signup Successful!");
        navigate("/login");
        console.log(response);
      })
      .catch(function (err) {
        setMsg("signup failed!");
        console.log(err);
      });
  };

  return (
    <section className=" bg-white shadow-lg p-16 w-[550px] mx-auto my-20 text-secolor rounded-lg ">
      <div className="">
        <h2 className="textgradient font-semibold  text-3xl mb-9">
          CREATE YOUR ACCOUNT!
        </h2>

        <form className=" " onSubmit={onSubmit}>
          <div className="flex flex-col mb-9">
            <label className="font-semibold" htmlFor="name">
              Your name
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-orange-700 outline-0 transition-all duration-75"
              id="name"
              type="name"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col mb-9">
            <label className="font-semibold" htmlFor="email">
              Email address
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-orange-700 outline-0 transition-all duration-75"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className=" flex flex-col mb-9">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-orange-700 outline-0 transition-all duration-75"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={onChange}
              minLength="8"
            />
          </div>

          <div className=" flex flex-col mb-9">
            <label className="font-semibold" htmlFor="passwordConfirm">
              Confirm password
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-orange-700 outline-0 transition-all duration-75"
              id="passwordConfirm"
              type="Password"
              name="passwordConfirm"
              placeholder="••••••••"
              required
              value={passwordConfirm}
              onChange={onChange}
              minLength="8"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="border text-xl text-white gradient rounded-full px-7 py-2"
              type="submit"
            >
              SIGN UP
            </button>
            <h3
              className={
                msg == "signup Successful!" ? "text-maincolor" : "text-red-600"
              }
            >
              {msg}
            </h3>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
