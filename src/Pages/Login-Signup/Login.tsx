/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../Redux/reduxTools/HandleUserLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showP, setShowP] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [userLogin, setUserLogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const userState = useSelector((state: object | any) => state.Login.user);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    const { email, password } = userLogin;
    e.preventDefault();
    if (email && password) {
      !isUser
        ? axios
            .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/login`, {
              currentUser: userLogin,
            })
            .then((res: any) => {
              dispatch(userData(res.data));
            })
            .catch((err) => console.log(err))
        : axios
            .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/login`, {
              currentAdmin: userLogin,
            })
            .then((res: any) => {
              dispatch(userData(res.data));
            })
            .catch((err) => console.log(err));
    } else {
      console.log("else");
    }
  };
  useEffect(() => {
    if (userState.state) {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    }
  }, [userState]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-auto h-[500px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-center m-auto gap-2">
            <label htmlFor="email">Email</label>
            <input
              className=" outline-2 border border-slate-300 outline-slate-300"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={userLogin.email}
            />
            <label htmlFor="password">Password</label>

            <div className="flex justify-center items-center bg-white m-auto gap-4 outline-2 border border-slate-300 outline-slate-300">
              <div>
                <input
                  className="w-40 focus:outline-none "
                  id="password"
                  type={showP ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div
                className="mr-1 cursor-pointer"
                onClick={() => setShowP(!showP)}
              >
                {showP ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={(e: any) => setIsUser(e.target.checked)}
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                Admin
              </label>
            </div>
            <button className="bg-[#AD343E] hover:bg-[#9a5359] w-full shadow-lg rounded-lg px-3 py-2">
              Singin
            </button>
          </div>
        </form>
        <p className="mt-10 text-xs">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className=" text-sm cursor-pointer text-[#AD343E]"
          >
            Signup
          </span>
        </p>
      </div>
    </>
  );
}
