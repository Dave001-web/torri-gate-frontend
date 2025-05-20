import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full max-w-[505px] h-[457px] ">
        <Link to="/register">
          <button className="flex items-center gap-1.5 mt-4">
            <FaArrowLeft /> Back
          </button>
        </Link>

        <h1 className="text-[30px] font-bold  mt-10">Forgot your password?</h1>
        <p className="text-[#666] text-[16px]  font-normal">
          We will send instructions to your email to reset your password.
        </p>

        <form className="mt-6">
          <label htmlFor="Email"></label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input w-full"
          />
          <button
            type="submit"
            className="btn w-full font-semibold mt-4 bg-black text-white"
          >
            Continue
          </button>
        </form>
        <p className="text-[#666] text-[16px] font-normal mt-15 flex items-center justify-center">
          Remember you Password? <span className="text-black font-bold"> Sign in</span>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;