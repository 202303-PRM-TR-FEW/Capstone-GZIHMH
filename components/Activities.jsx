import React from "react";
import Image from "next/image";
import profilePic from "@/public/assets/images/profilePic5.jpeg";
import "@/styles/globals.css";

const Activities = () => {
  return (
    <div className="activity-cards ">
      <div className="activites-heading">
        <h1>My Activities</h1>
      </div>
      <div>
        <div>
          <h2>Monday</h2>
        </div>
        <div className="activity-card">
          <Image src={profilePic} alt="profilePic" width="50" height="8" />
          <div className="titles">
            <h2 className="p-color">Becoming a Photographer</h2>
            <p className="p-color"> clara Manning</p>
          </div>
        </div>
        <div className="recent-card">
          <div className="timing">
            <p className="p-color"> 10 DAYS AGO</p>
          </div>
          <div className="activity-card">
            <Image src={profilePic} alt="profilePic" width="50" height="8" />
            <div className="titles">
              <h2>Becoming a Photographer</h2>
              <p className="p-color"> clara Manning</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <h2>VIEW ALL ACTIVITIES</h2>
        </div>
      </div>
    </div>
  );
};

export default Activities;
