import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heart from "react-animated-heart";
import Spinner from "../Spinner/Spinner";

import { setLooks } from "../../redux/slices/looks";
import { getLooks, addLike } from "../../api/apiService";

import { User, Look } from "../../types/User";

function Explore() {
  const dispatch = useDispatch();
  const looks = useSelector((state: User) => state.looks);
  const [loading, setLoading] = useState(false);
  const [likedLookId, setLikedLookId] = useState<string | null>(null);

  useEffect(() => {
    const fetchLooks = async () => {
      setLoading(true);
      const { looks } = await getLooks();
      dispatch(setLooks(looks));
      setLoading(false);
    };
    fetchLooks();
  }, [dispatch]);

  const handleLike = async (id: string) => {
    setLikedLookId(id);
    await addLike(id);
    const { looks: updatedLooks } = await getLooks();
    dispatch(setLooks(updatedLooks));
    setLikedLookId(null);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        looks &&
        looks.map((look: Look) => (
          <div
            className="flex p-5 flex-col items-center justify-center"
            key={look._id}
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <figure>
                  <div className="relative">
                    <img src={look.imageUrl} alt="user content" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 hover:scale-110">
                      <Heart
                        isClick={likedLookId === look._id}
                        onClick={() => handleLike(look._id)}
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                <div className="badge">
                      {look.likes} 🤍
                    </div>
                  <h2 className="card-title">
                    {look.description}
                  </h2>
                  <p>
                    {look.tags}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Explore;
