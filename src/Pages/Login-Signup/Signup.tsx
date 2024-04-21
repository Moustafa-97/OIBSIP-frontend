import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false);
  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    image: "",
    email: "",
    password: "",
    confirmPassword: "",
    theme: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserSignUp((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  console.log(userSignUp);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = userSignUp;
    if (firstName && lastName && email && password && confirmPassword) {
      if (userSignUp.password === userSignUp.confirmPassword) {
        axios
          .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/signup`, {
            newUser: userSignUp,
          })
          .then((res) => {
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((err) => console.log(err));
      } else {
        alert("password do not match");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-auto h-[500px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-center m-auto gap-2">
            <label htmlFor="firstName">First name</label>
            <input
              className=" outline-2 border border-slate-300 outline-slate-300"
              id="firstName"
              type="firstname"
              name="firstName"
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              className=" outline-2 border border-slate-300 outline-slate-300"
              id="lastName"
              type="lastName"
              name="lastName"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              className=" outline-2 border border-slate-300 outline-slate-300"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <div className="flex justify-center items-center bg-white m-auto gap-4 outline-2 border border-slate-300 outline-slate-300">
              <input
                className="w-40 focus:outline-none"
                id="password"
                type={showP ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <div
                className="mr-1 cursor-pointer"
                onClick={() => setShowP(!showP)}
              >
                {showP ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="flex justify-center items-center bg-white m-auto gap-4 outline-2 border border-slate-300 outline-slate-300">
              <input
                className="w-40 focus:outline-none"
                id="confirmPassword"
                type={showCP ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
              />
              <div
                className="mr-1 cursor-pointer"
                onClick={() => setShowCP(!showCP)}
              >
                {showCP ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <button className="bg-[#AD343E] hover:bg-[#9a5359] w-full shadow-lg rounded-lg px-3 py-2">
              Singup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
