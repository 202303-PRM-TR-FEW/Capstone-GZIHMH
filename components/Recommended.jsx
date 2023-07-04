import React from 'react'
import Image from 'next/image'
const Recommended = ({ thumbnail, courseName, tutorName }) => {
    return (
        <div className="course_card mx-1">
            <Image
                src={thumbnail}
                alt="thumbnail image"
                width={180}
                height={180}
                className='thumbnail'
            />

            <div className="course_details">
                <h2 className="course_name">{courseName}</h2>
                <p className="tutor_name"> {tutorName}</p>
            </div>
        </div>
    )
}

export default Recommended