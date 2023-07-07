'use client'

import React from 'react'
import { useState } from 'react';

const CheckElement = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = (id) => {
        setIsChecked(!isChecked)
    };
    return (


        <label htmlFor={props.id} className="mr-6 flex items-center cursor-pointer">
            <div className="w-6 h-6 inline-block border-2 border-gray-300  rounded-lg bg-transparent">
                {isChecked && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="#212121" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>}
            </div>

            <input
                id={props.id}
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className="text-gray-800 mx-2">{props.name}</span>
        </label>


    )
}

export default CheckElement
