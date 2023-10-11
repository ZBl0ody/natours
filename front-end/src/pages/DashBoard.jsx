import React, { useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const [userId, setUserId] = useState("");

  const onChangeDeleteUser = (event) => {
    setUserId(event.target.value);
  };

  const onDeleteUser = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/api/v1/users/${userId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className=" bg-white text-secolor p-5 my-10    ">
      <div className="">
        <h1 className="textgradient text-2xl font-medium my-8">Dashboard </h1>

        <form className="" onSubmit={onDeleteUser}>
          <div className="flex flex-col mb-9">
            <label className="font-semibold" htmlFor="DeleteUser">
              Delete User
            </label>
            <input
              className="bg-backcolor py-3 px-4 rounded-lg focus:border-b-[2px] border-green-600 outline-0 transition-all duration-75"
              id="DeleteUser"
              type="string"
              placeholder="ID"
              required
              name="DeleteUser"
              value={userId}
              onChange={onChangeDeleteUser}
            />
          </div>
          <button
            className="border text-xl text-white gradient rounded-full px-7 py-2 uppercase"
            type="submit"
          >
            Delete User
          </button>
        </form>
      </div>
    </section>
  );
};

export default DashBoard;
