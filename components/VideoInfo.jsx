import React from "react";

const VideoInfo = () => {
  const [lessons, setLessons] = useState();

  const findVideo = (id) => {
    const video = coursesdb.initialLessons.map(
      (course) => course.courseId === id
    );

    setLessons(video);
  };

  return (
    <div>
      {lessons.map((lesson) => (
        <iframe src={lesson.link} title={lesson.Title} allowFullScreen />
      ))}
    </div>
  );
};

export default VideoInfo;
