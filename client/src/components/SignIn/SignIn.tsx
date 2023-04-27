import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { signIn } from "../../apiService";
import { login } from "../../redux/slices/auth";
import { setUser } from "../../redux/slices/user";

import Alert from "../Alert/Alert";

function SignIn() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [failed, setFailed] = useState(false);

  
  const onSubmit = async (data: any) => {
    const response = await signIn(data);
    console.log(response, 'response');
    if (response) {
      dispatch(setUser(response));
      dispatch(login({ userId: response._id }));
      localStorage.setItem("authentificated", 'true');
      localStorage.setItem("userId", response._id);
      reset();
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
      }, 3000);
    }
  };
    
  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-full bg-white">
        {failed && <Alert type="warning" message="Invalid email or password" />}
  <div className="bg-sign-in bg-center bg-no-repeat bg-cover flex-grow h-screen p-20">
  <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-20">
            STYLE/ME
          </h1>
  </div>
  <div className="max-w-2xl bg-white w-full h-screen flex items-center justify-center">
    <form className="w-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
        Sign In
      </h1>
        <input
          {...register("email", { required: true })}
          className="input input-lg input-bordered bg-white p-4 w-full max-w-lg text-lg mb-4"
          id="email"
          type="email"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          {...register("password", { required: true })}
          className="input  input-lg input-bordered bg-white p-4 w-full max-w-lg text-lg mb-6"
          id="password"
          type="password"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      <button type="submit" className="btn btn-wide bg-black text-white justify-center items-center">
              Submit
            </button>
    </form>
  </div>
</div>

  );
}

export default SignIn;