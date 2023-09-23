"use client"

import { useState } from 'react';

const ServerBubble = ({ }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='w-full flex items-center justify-center'>
            {isHovered &&
                <div className='w-1 h-4 rounded-r-full bg-white absolute left-0 transition-all ease-in-out duration-800'>
                </div>}
            <div className="w-12 h-12 rounded-[25px] bg-gray-2 mb-2 transition-all ease-in-out duration-200 
         hover:rounded-[14px] cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
        </div >
    )
}

export default ServerBubble;