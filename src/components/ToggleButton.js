import React from 'react';
const ToggleButton = (props) => {
    return (
        <>
            <div className="relative flex w-fit p-1 flex-col justify-center items-center overflow-hidden bg-white has-[.processing]:cursor-wait">
                <label onClick={() => props.onClick()} className="inputToggle group relative block w-10 h-6 cursor-pointer transform translate-x-0 translate-y-0 translate-z-0 [&.processing]:opacity-75 [&.processing]:pointer-events-none">
                    <input type="checkbox" name="inputName" id="inputName" className="peer hidden" />
                    <span className="relative top-0.5 left-0.5 w-10 h-5 block bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-colors duration-200"></span>
                    <span className="absolute top-0 left-0 peer-checked:translate-x-5 flex justify-center items-center w-6 h-6 bg-white rounded-full shadow-[0_1px_5px_#d1d5db] 
                    transition-all duration-200 before:absolute before:w-2.5 before:h-2.5 before:bg-gray-300 before:rounded-full before:transition-all before:duration-200
                     after:absolute after:w-1.5 after:h-1.5 after:bg-white after:rounded-full after:transition-all after:duration-200 group-[:not(.processing)]:peer-checked:before:w-0.5 
                     peer-checked:before:h-2.5 peer-checked:before:bg-blue-600 group-[:not(.processing)]:peer-checked:after:hidden group-[.processing]:!translate-x-2.5 
                     group-[.processing]:before:!border-4 group-[.processing]:before:border-gray-300 group-[.processing]:before:border-t-blue-600 group-[.processing]:before:animate-spin">
                    </span>
                </label>
            </div>
        </>
    )
}
export default ToggleButton