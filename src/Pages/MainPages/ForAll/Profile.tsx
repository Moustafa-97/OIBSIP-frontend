import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSection from "../components/Profile/ProfileSection";

export default function Profile() {
  const loggedUser = useSelector((state: object | any) => state.Login?.user);
  const userState = loggedUser?.state;
  const userDetails = loggedUser?.user;
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div>
          <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
            <h2 className=" font-[playfair] text-[100px] leading-[96px]">
              Profile
            </h2>
            {userState ? null : (
              <Link to={"/login"}>
                <p className=" leading-7 text-[18px]">
                  We catched you 😂.
                  <span className=" leading-7 text-[14px]">Click to login</span>
                </p>
              </Link>
            )}
          </header>
          <ProfileSection />
        </div>
      </div>
    </>
  );
}
