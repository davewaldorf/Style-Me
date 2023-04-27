import React, { useEffect, useState } from "react";
import { setLooks } from "../../redux/slices/looks";
import { useSelector, useDispatch } from "react-redux";
import { getLooks, addLike } from "../../apiService";
import {useForm} from "react-hook-form";


function Explore() {
  const looks = useSelector((state: any) => state.user.looks);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const liked = watch("isLiked");
  

  useEffect(() => {
    const fetchLooks = async () => {
      const looks = await getLooks();
      console.log(looks);
      dispatch(setLooks(looks));
    };
    fetchLooks();
  }, [dispatch]);

  const handleLike = async (id: string) => {
    console.log(id);
    const updatedLook = await addLike(id);
    console.log(updatedLook);
  };

  if (liked) {
    handleLike(liked[0]);
   }

  return (
    <>
      {looks.map((look: any) => (
        <div className="flex p-20 flex-col items-center justify-center h-full">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <figure>
                <img src={look.imageUrl} alt="Shoes"
                />
                  <label className="swap swap-flip text-9xl absolute m-4 cursor-pointer opacity-0 hover:opacity-100">
                    <input type="checkbox" 
                    {...register("isLiked")}
                    defaultChecked={look.isLiked}
                    value={look._id}
                    />
                    <div className="swap-off">💔</div>
                    <div className="swap-on">❤️‍🔥</div>
                  </label>
              </figure>
              <div className="card-actions flex justify-end">
                <svg onClick={(e) => handleLike(look._id)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-110 h-7 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <h1 className="font-bold text-lg">{look.likes}</h1>
              </div>
              <h2 className="card-title">Shoes!</h2>
              <p>{look.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Explore;