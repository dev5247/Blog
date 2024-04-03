
import React from 'react'
const Picture = ({ source }) => {
    return (
        <div className='m-4 px-14 rounded-2'>
            <img width={600} src={source} alt="" />
        </div>
    )
}
export default Picture