import { DropdownButton } from '@/utils/icons';
import React, { useState } from 'react';

const CourseOverview = ({ lessons }) => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (sectionKey) => {
    if (openSections.includes(sectionKey)) {
      setOpenSections(openSections.filter(section => section !== sectionKey));
    } else {
      setOpenSections([...openSections, sectionKey]);
    }
  };

  // Group lessons by section number
  const groupedSections = lessons.reduce((acc, lesson) => {
    const sectionKey = `${lesson.linkSectionNumber}`;
    if (!acc[sectionKey]) {
      acc[sectionKey] = [];
    }
    acc[sectionKey].push(lesson);
    return acc;
  }, {});

  return (
    <div className='flex flex-col w-full m-2 bg-white rounded-2xl shadow-lg p-4'>
      {Object.keys(groupedSections).map(sectionKey => {
        const sectionName = groupedSections[sectionKey][0].linkSectionName || 'Lessons';
        const sortedLessons = groupedSections[sectionKey].sort((a, b) => a.linkSubsectionNumber - b.linkSubsectionNumber);
        return (
          <div key={sectionKey} className=" mt-4 pt-4 flex flex-col w-full m-2 bg-white rounded-2xl shadow-lg p-4">
            <button
              className="flex w-full items-center text-md font-semibold text-blue-600 cursor-pointer"
              onClick={() => toggleSection(sectionKey)}
            >
              <span className='flex flex-start '>{sectionName}</span>
              <span className="ml-auto">
                <DropdownButton isDropdownOpen={openSections.includes(sectionKey)} />
              </span>
            </button>
            {openSections.includes(sectionKey) && (
              <div className="pl-4 mt-2">
                {sortedLessons.map(subLesson => (
                  <div key={subLesson.id} className="py-2">
                    <a
                      href={subLesson.link}
                      className="text-md text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      {subLesson.linkTitle}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseOverview;
