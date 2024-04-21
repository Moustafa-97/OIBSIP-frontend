import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageToPage64 } from "../../../../Assign/imagetopage64";
import axios from "axios";
import { userData } from "../../../../Redux/reduxTools/HandleUserLogin";
const userPic = require("./img/user.png");

export default function ProfileSection() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: object | any) => state.Login?.user);
  const userState = loggedUser?.state;
  const userDetails = loggedUser?.user;

  const [edit, setEdit] = useState(false);

  //

  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });
  // handle input change
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setNewData((pre: any) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleInputImage = async (
    e: HTMLImageElement | HTMLInputElement | FormData | any
  ) => {
    const image = await imageToPage64(e.target.files[0]);
    setNewData((pre) => {
      return {
        ...pre,
        image: image,
      };
    });
  };
  const handleRemoveImage = async (
    e: HTMLImageElement | HTMLInputElement | FormData | any
  ) => {
    // const image = await imageToPage64(e.target.files[0]);
    setNewData((pre) => {
      return {
        ...pre,
        image: "",
      };
    });
  };

  const handleSub = async (e: any) => {
    e.preventDefault();
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_DOMAIN}/${userDetails.account}/profile`,
        {
          data: newData,
        }
      )
      .then((res) => {
        dispatch(userData(res.data));
      })
      .then(() => setEdit(!edit));
  };

  //

  return (
    <>
      {userState ? (
        edit ? (
          <form
            className="flex justify-center items-start flex-col"
            onSubmit={handleSub}
          >
            <label
              htmlFor="image"
              className="w-32 h-32 rounded-full object-cover self-center mb-12"
            >
              <div className="w-32 h-32 rounded-full object-cover self-center cursor-pointer">
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleInputImage}
                />
                <img
                  src={
                    userDetails?.image === ""
                      ? newData.image === ""
                        ? userPic
                        : newData.image !== ""
                        ? newData.image
                        : userPic
                      : userDetails?.image !== ""
                      ? newData.image !== ""
                        ? newData.image
                        : userPic
                      : userDetails?.image !== ""
                  }
                  alt="user profile"
                  className="w-full h-full rounded-full"
                />
              </div>
            </label>
            <p
              className=" mt-6 bg-red-900 text-white cursor-pointer m-auto border border-solid px-3 py-2 border-black rounded-md "
              onClick={(e) => {
                handleRemoveImage(e);
              }}
            >
              Remove
            </p>

            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="text-2xl font-bold mt-5"
              placeholder={`${userDetails?.firstName}`}
              onChange={handleInput}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="text-2xl font-bold mt-5"
              placeholder={`${userDetails?.lastName}`}
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-2xl font-bold mt-5"
              placeholder={`${userDetails?.email}`}
              onChange={handleInput}
            />
            <button
              onClick={() => setEdit(!edit)}
              // to={`/profile/edit/${userDetails?._id}`}
              className="text-blue-500 mt-4 self-center"
            >
              Cancel Profile
            </button>
            <button className="text-blue-500 mt-4 self-center">Edit</button>
          </form>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <img
              src={userDetails?.image === "" ? userPic : userDetails?.image}
              alt="user profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="text-2xl font-bold mt-5">
              {userDetails?.firstName} {userDetails?.lastName}
            </h3>
            <p className="text-lg mt-2">{userDetails?.email}</p>
            <button
              onClick={() => setEdit(!edit)}
              // to={`/profile/edit/${userDetails?._id}`}
              className="text-blue-500 mt-4"
            >
              Edit Profile
            </button>
          </div>
        )
      ) : null}
    </>
  );
}
