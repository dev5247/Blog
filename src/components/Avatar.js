
import React from 'react'
const Avatar = ({ source }) => {
    return (
        <div className='w-14 h-14 m-2 rounded-full bg-sky-500 overflow-hidden'>
            <img src={source} alt='Support Avatar'/>
        </div>
    )
}
export default Avatar