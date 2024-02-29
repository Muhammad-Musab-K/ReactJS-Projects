import React from 'react'

function Box({ text, icon, bg, color, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`w-80 h-56 rounded-lg shadow p-6 flex flex-col justify-center items-center  ${color} ${bg} hover:bg-opacity-50`}>
            <img className='w-32 h-32' src={icon} alt="" />
            <h1 className='text-xl'>{text}</h1>

        </div>
    )
}

export default Box
