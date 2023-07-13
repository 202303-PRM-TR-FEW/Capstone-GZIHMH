import React from "react";
import InfoBar from "@/components/InfoBar";
import FinishedCourses from "@/components/FinishedCourses";
import Achievements from "@/components/Achievements";
import FreindsSuggestion from "@/components/FreindsSuggestion";

const ProfilePage = () => {
  // Example usage
  const coursesCount = 3; // Update the number of finished courses
  const followersCount = 2;
  const followingCount = 32;

  return (
    <div>
      <FreindsSuggestion />

      <InfoBar
        courses={coursesCount}
        followers={followersCount}
        following={followingCount}
      />
      <FinishedCourses />
      <Achievements />
     
    </div>
  );
};

export default ProfilePage;
