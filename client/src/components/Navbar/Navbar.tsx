import React, { useState } from "react";
import { ReactComponent as AddBtn } from "../../assets/add_box.svg"
import { logout } from "../../apiService";
interface NavbarProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<string>>;
}

function Navbar(props: NavbarProps) {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleComponentChange = (componentName: string) => {
    setActiveTab(componentName);
    props.setSelectedComponent(componentName);
  };

  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => handleComponentChange("Profile")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Profile' ? 'tab-active' : ''}`}>Profile</li>
            <li onClick={() => handleComponentChange("Explore")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Explore' ? 'tab-active' : ''}`}>Explore</li>
            <li onClick={() => handleComponentChange("Contact Form")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Contact' ? 'tab-active' : ''}`}>Contact</li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl">STYLE/ME</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li onClick={() => handleComponentChange("Profile")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Profile' ? 'tab-active' : ''}`}>Profile</li>
          <li onClick={() => handleComponentChange("Explore")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Explore' ? 'tab-active' : ''}`}>Explore</li>
          <li onClick={() => handleComponentChange("Contact Form")} className={`font-bold	 tab tab-lg tab-bordered ${activeTab === 'Contact' ? 'tab-active' : ''}`}>Contact</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={() => logout()} className="btn btn-ghost normal-case mr-5">Logout</button>
      </div>
    </div>
  )
}

export default Navbar;
