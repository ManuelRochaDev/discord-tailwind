"use client"

import Image from 'next/image';
import Icon from "./Icon";
import { useState } from 'react';

const DirectMessages = ({ }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='w-full flex items-center justify-center'>
            {isHovered &&
                <div className='w-1 h-4 rounded-r-full bg-white absolute left-0 transition-all ease-in duration-800'>
                </div>}
            <div className="w-12 h-12 rounded-[25px] bg-gray-3 mb-2 transition-all ease-in-out duration-200 
            hover:bg-blue hover:rounded-[14px] cursor-pointer flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {isHovered && <Icon color="white"></Icon>}
                {!isHovered && <Icon color="#A5AAB1"></Icon>}
            </div>
        </div>
    )
}

export default DirectMessages;