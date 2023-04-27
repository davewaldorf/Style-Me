import React from 'react';
import { useEffect, useState } from 'react';
import { getProfile, getLikes } from '../../apiService';
import { setUser } from '../../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import Collection from '../Collection/Collection';

import { ReactComponent as AddBtn } from "../../assets/add_box.svg"

function Profile() {
  const { firstName, lastName, profileImg, country, looks, wardrobe } = useSelector((state: any) => state.user) || {};
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('collection');
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('userId') || ''; // provide default value if null
      if (user) {
        const response = await getProfile(user);
        dispatch(setUser(response.user));
        const likes = await getLikes();
        setLikes(likes);
      }
    };
    fetchData();
  }, []);


  if (!firstName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12">
        <div className="mt-8 flex items-center justify-center">
          <div className="stats items-center stats-vertical lg:stats-horizontal bg-secondary-100 glass">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={profileImg} alt="profile" />
                  </div>
                </div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-value">{firstName} {lastName}</div>
              <div className="stat-title">{country}</div>
              <div className="stat-desc">Human</div>
            </div>

            <div className="stat">
              <div className="stat-title">Favorites</div>
              <div className="stat-value">31</div>
            </div>

            <div className="stat">
              <div className="stat-title">Likes</div>
              <div className="stat-value">{likes}</div>
              <div className="stat-desc"></div>
            </div>

          </div>
        </div>
        <div className="tabs flex items-center justify-center mt-10">
          <a onClick={() => setActiveTab('collection')} className={`font-bold tab tab-lg tab-bordered ${activeTab === 'collection' ? 'tab-active' : ''}`}>Collection</a>
          <a onClick={() => setActiveTab('looks')} className={`font-bold tab tab-lg tab-bordered ${activeTab === 'looks' ? 'tab-active' : ''}`}>Looks</a>
        </div>
        <label htmlFor="my-modal-4" className="flex items-left justify-end btn-link cursor-pointer mr-10 hover:scale-120"><AddBtn className="h-8 w-8"/></label>
        {activeTab === 'collection' && <Collection collection={wardrobe} />}
        {activeTab === 'looks' && <Collection collection={looks} />}
      </div>
    </div>
  );
};

export default Profile;
