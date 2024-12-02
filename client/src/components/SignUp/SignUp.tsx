import React from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { signUp } from "../../api/apiService";
import { User } from "../../types/User";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    await signUp(data);
    reset();
  };


  return (
    <div className="bg-sign-up bg-no-repeat bg-cover bg-center flex flex-col md:flex-row items-center h-screen min-h-screen w-full bg-white ">
      {/* Left Section */}
      <div className="text-center md:text-left flex-grow p-6 md:p-20">
        <div className="m-4 md:m-12">
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-10">
            STYLE/ME
          </h1>
          <p className="text-lg md:text-2xl text-white font-bold mb-4">
            Say goodbye to fashion ruts and hello to endless inspiration at
            your fingertips.
          </p>
          <p className="text-sm md:text-lg text-white font-bold">
            {`Whether you're looking for a fresh look for work, a night out with your friends, or a special occasion, our app has got you covered. Join now and start exploring the world of fashion like never before!`}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-4xl bg-white w-full h-full p-6 md:p-12 flex items-center justify-center">
        {isSubmitSuccessful ? (
          <SuccessMessage
            message="Congratulations! Your account has been successfully created!"
            buttonText="Sign In"
            buttonLink="/signin"
          />
        ) : (
          <form
            className="w-full max-w-lg bg-white p-4 md:p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
              Create an Account
            </h1>

            {/* First Name */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                {...register("firstName", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                {...register("lastName", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <input
                {...register("dateOfBirth", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="dateOfBirth"
                type="date"
                placeholder="MM/DD/YYYY"
              />
              {errors.dateOfBirth && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                {...register("gender", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="gender"
              >
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="Non-binary/non-conforming">
                  Non-binary/non-conforming
                </option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col mb-6">
              <label className="text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="input input-sm bg-white input-bordered w-full text-black"
                id="password"
                type="password"
                placeholder="********"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-wide bg-black text-white">
              Submit
            </button>

            <div className="mt-6 text-center">
              Already Have An Account?{" "}
              <Link to="/signin" className="ml-3 text-red-700">
                Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
