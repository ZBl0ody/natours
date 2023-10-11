import React, { useState } from "react";
import { PiBagDuotone } from "react-icons/pi";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

import {
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineCreditCard,
} from "react-icons/ai";

const Profile = () => {
  const auth = useAuthUser();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [formPass, setFormPass] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { email, name } = formData;
  const { currentPassword, newPassword, confirmPassword } = formPass;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onChangePass = (event) => {
    setFormPass({ ...formPass, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .patch("http://localhost:3000/api/v1/users/updateMyPassword", formPass)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const onSubmitPass = (event) => {
    event.preventDefault();
    axios
      .patch("http://localhost:3000/api/v1/users/updateMyPassword", formPass)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const DeleteMe = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/api/v1/users/deleteMe`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" min-h-[700px] my-16 grid grid-flow-col grid-cols-4  gap-0  rounded">
      <div className=" gradient text-white rounded  font-light ">
        <div className="  flex flex-col items-start  my-8 gap-2  ">
          <button className="uppercase p-3 pl-9 hover:border-l-[4px] transition-all duration-200 border-white flex gap-2 items-center">
            <span className="text-2xl">
              <AiOutlineSetting />
            </span>
            setteings
          </button>
          <button className="uppercase p-3 pl-9 hover:border-l-[4px] transition-all duration-200 border-white flex gap-2 items-center">
            <span className="text-2xl">
              <PiBagDuotone />
            </span>
            my bookings
          </button>
          <button className="uppercase p-3 pl-9 hover:border-l-[4px] transition-all duration-200 border-white flex gap-2 items-center">
            <span className="text-2xl">
              <AiOutlineStar />
            </span>
            my reviews
          </button>
          <button className="uppercase p-3 pl-9 hover:border-l-[4px] transition-all duration-200 border-white flex gap-2 items-center">
            <span className="text-2xl">
              <AiOutlineCreditCard />
            </span>
            billing
          </button>
        </div>
      </div>

      <div className="col-span-3 bg-white text-secolor ">
        <div className="m-20  ">
          <h1 className="textgradient text-2xl font-medium my-8">
            YOUR ACCOUNT SETTINGS
          </h1>
          <form className="" onSubmit={onSubmit}>
            <div className="flex flex-col mb-9">
              <label className="font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
                id="name"
                type="name"
                placeholder={auth().name}
                required
                minLength="8"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="flex flex-col mb-9">
              <label className="font-semibold" htmlFor="email">
                Email address
              </label>
              <input
                className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
                id="email"
                type="email"
                placeholder={auth().email}
                required
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="avatar"
                  className="w-20 rounded-full"
                />
                <button
                  type="button"
                  className="text-maincolor border-b border-maincolor hover:bg-maincolor hover:text-white p-1 "
                >
                  Choose new photo
                </button>
              </div>
              <button
                className="border text-xl text-white gradient rounded-full px-7 py-2 uppercase"
                type="submit"
              >
                save settings
              </button>
            </div>
          </form>
          <hr className="my-16" />
          <form className="" onSubmit={onSubmitPass}>
            <div className="flex flex-col mb-9">
              <label className="font-semibold" htmlFor="currentPassword">
                Current password
              </label>
              <input
                className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
                id="currentPassword"
                type=" password"
                placeholder="••••••••"
                required
                minLength="8"
                name="currentPassword"
                value={currentPassword}
                onChange={onChangePass}
              />
            </div>

            <div className="flex flex-col mb-9">
              <label className="font-semibold" htmlFor="newPassword">
                New password
              </label>
              <input
                className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
                id="newPassword"
                type=" password"
                placeholder="••••••••"
                required
                name="newPassword"
                value={newPassword}
                onChange={onChangePass}
              />
            </div>

            <div className="flex flex-col mb-9">
              <label className="font-semibold" htmlFor="confirmPassword">
                Confirm password
              </label>
              <input
                className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
                id="confirmPassword"
                type=" password"
                placeholder="••••••••"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChangePass}
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                className="border text-xl text-white gradient rounded-full px-7 py-2 uppercase "
                type="submit"
              >
                save password
              </button>
            </div>
          </form>
          <div className="flex items-center justify-end mt-10 ">
            <button
              className="border text-xl text-white bg-red-600 rounded-full px-7 py-2 uppercase  "
              type="button"
              onClick={DeleteMe}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
