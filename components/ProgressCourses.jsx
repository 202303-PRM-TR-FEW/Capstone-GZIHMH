import React from "react";

const ProgressCourses = ({ info, showVideos, revealVideos, findVideo }) => {
  return (
    <div>
      {info.map((course) => (
        <div key={course.courseId}>
          <h2>{course.linkTitle}</h2>
          <p>{`video${course.SubsectionNumber}`}</p>
          <button onClick={revealVideos}>show up</button>
          {showVideos && (
            <div>
              <ol onClick={() => findVideo(course.courseId)}>
                {course.linkTitle}
              </ol>

              <p>{course.duration}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressCourses;
