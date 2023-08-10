import setSavedCourse from '@/app/pages/api/setSavedCourse'
import { SaveButtonIcon } from '@/utils/icons'
import React, { use, useState } from 'react'
const SaveButton = ({user,courseId}) => {

    const [color, setColor] = useState("")
    const handleSave = async () => {
        const res = await setSavedCourse(user,courseId)
        setColor(res)
    }
  return (
      <div onClick={handleSave}>
        <p className="absolute right-2 top-3 bg-white rounded-xl p-2 bg-cursor-pointer opacity-50 group">
              <SaveButtonIcon color = {color} />
        </p>
      </div>
  )
}

export default SaveButton