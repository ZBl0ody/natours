import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

const LogIn = () => {
  const signIn = useSignIn();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/users/login", formData)
      .then(function (response) {
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: response.data.data.user,
        });
        console.log(response);
        setMsg("login Successful! " + response.data.data.user.name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(function (err) {
        setMsg("login failed!");
        console.log(err);
      });
  };

  return (
    <section className="bg-white shadow-lg p-16 w-[550px] mx-auto my-20 text-secolor rounded-lg">
      <div className="">
        <h2 className="textgradient font-semibold text-3xl mb-9">
          Log into your account
        </h2>
        <form className="" onSubmit={onSubmit}>
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

          <div className="flex flex-col mb-9">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-orange-700 outline-0 transition-all duration-75"
              id="password"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="border text-xl text-white gradient rounded-full px-7 py-2"
              type="submit"
            >
              Login
            </button>
            <h3
              className={
                msg.includes("login Successful!")
                  ? "text-maincolor"
                  : "text-red-600"
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

export default LogIn;
