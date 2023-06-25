import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import SuccessMessage from '../SuccessMessage/SuccessMessage';
import { signUp } from '../../api/apiService';

function SignUpPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data: any) => {
    await signUp(data);
    reset(); 
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-full bg-white">
      <div  className="bg-sign-up bg-no-repeat bg-cover bg-center text-center md:text-left flex-grow h-screen p-20">
        <div className="m-12 p-10">
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-20">
            STYLE/ME
          </h1>
          <p className="text-4xl md:text-4xl text-white font-light">
            Say goodbye to fashion ruts and hello to endless inspiration at your
            fingertips.
          </p>
          <br></br>
          <p className="text-4xl md:text-4xl text-white font-light mt-4">
            {`Whether you're looking for a fresh look for work, a night out with your`}
            {`friends, or a special occasion, our app has got you covered. Join`}
            {`now and start exploring the world of fashion like never before!`}
          </p>
        </div>
      </div>
      <div className="max-w-xl bg-white w-full h-screen flex items-center justify-center">
        {isSubmitSuccessful ? (
          <SuccessMessage
            message="Congratulations! Your account has been successfully created!"
            buttonText="Sign In"
            buttonLink="/signin"
          />
        ) : (  
          <form className="max-w-xl m-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Create an Account
            </h1>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="firstName">First Name</label>
              <input {...register("firstName", { required: true })} className="input input-sm	bg-white input-bordered w-full max-w-xs text-black" id="firstName" type="text" placeholder="First Name" />
              {errors.firstName && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input {...register("lastName", { required: true })} className="input input-sm bg-white input-bordered w-full max-w-xs text-black" id="lastName" type="text" placeholder="Last Name" />
              {errors.lastName && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">Date of Birth</label>
              <input {...register("dateOfBirth", { required: true })} className="bg-white input input-bordered input-sm	p-2 w-full max-w-xs text-black" id="dateOfBirth" type="date" placeholder="MM/DD/YYYY" />
              {errors.dateOfBirth && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="gender">Gender</label>
              <select {...register("gender", { required: true })} className="input input-bordered input-sm	bg-white p-2 w-full max-w-xs text-black" id="gender">
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="country">Country</label>
              <select {...register("country", { required: true })} className="input input-bordered input-sm	bg-white p-2 w-full max-w-xs text-black" id="country">
                <option value="">--Select--</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>
                <option value="india">India</option>
                <option value="france">France</option>
              </select>
              {errors.country && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input {...register("email", { required: true })} className="input input-bordered input-sm	bg-white p-2 w-full max-w-xs text-black" id="email" type="email" placeholder="johndoe@example.com" />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
              <input {...register("password", { required: true })} className="input input-bordered input-sm	bg-white p-2 w-full max-w-xs text-black" id="password" type="password" placeholder="********" />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <button type="submit" className="btn btn-wide bg-black text-white">
              Submit
            </button>
            <div className="bottom-12">Already Have An Account?
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
