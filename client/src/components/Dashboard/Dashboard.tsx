import React, { useState } from "react";
import Profile  from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Explore from "../Explore/Explore";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("Profile");

  return (
    <>
    <Navbar setSelectedComponent={setSelectedComponent} />
    <div className="h-screen">
    {selectedComponent === "Profile" && <Profile />}
    {selectedComponent === "Explore" && <Explore />}
    {selectedComponent === "Contact Form" && <ContactForm />}
    {/* Add other conditionally rendered components here */}
    </div>
    <Footer/>
    <Modal />
    </>
  );
}

export default Dashboard;
