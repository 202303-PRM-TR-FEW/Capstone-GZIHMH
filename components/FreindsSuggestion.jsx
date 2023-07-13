import React from "react";
import Image from "next/image";
import profilePic5 from "@/public/assets/images/profilePic5.jpeg";
import "@/styles/globals.css";

const FreindsSuggestion = () => {
  return (
    <div>
      <div className="heading">
        <h1>Freind Suggestion</h1>
      </div>
      <div className="suggestion">
        <div>
          <div className="space">
            <div className="profile-intro">
              <Image
                src={profilePic5}
                alt="profilepic"
                width={75}
                height={10}
              />
              <div className="pro-name">
                <p className="profile-name">Laura evans</p>
              </div>
            </div>
            <div className="icon">
              <div className="add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </div>
          </div>
          <br />
          <div className="text">
            <p>view all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreindsSuggestion;
