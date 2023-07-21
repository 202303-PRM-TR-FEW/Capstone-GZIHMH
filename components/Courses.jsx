"use client";
import React, { useState } from "react";
import Image from "next/image";
import db from "../utils/db";
import SavedCourseReview from "./SavedCourseReview";
import { useSelector } from "react-redux";

function SavedCourses() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  const cartItems = useSelector((state) => state.allCourses) || [];

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : "";
  };

  return (
    <div className="flex ">
      <div className="w-1/2 mt-20 text-black">
        <h1>Saved Courses</h1>
        {cartItems.map(
          (
            course,
            index // Updated mapping function with 'index'
          ) => (
            <div
              className="flex flex-row items-center flex-1 m-2 bg-white border opacity-100 rounded-2xl justify-evenly aspect-w-1 aspect-h-1 w-576 h-70 hover:bg-blue-200 bg-opacity-30 rounded-5 hover:border-blue-500"
              key={course.id}
            >
              <div className="flex flex-row justify-between aspect-w-1 aspect-h-1">
                <Image
                  src={course.image}
                  width={200}
                  height={180}
                  alt={course.title}
                  className="object-cover image"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCourseClick(index)}
                />
              </div>
              <div>
                <h2>{course.title}</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="self-start w-6 h-6 m-2 fill-current text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </span>
                <p className="mb-3 tutor_name">
                  {getPersonName(course.user_id)}
                </p>
                <button className="w-12 h-6 mt-4 text-sm font-semibold text-white bg-primary rounded-2xl">
                  BUY
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <div>
        {selectedCourseIndex !== null && (
          <SavedCourseReview newCourse={cartItems[selectedCourseIndex]} />
        )}
      </div>
    </div>
  );
}

export default SavedCourses;
