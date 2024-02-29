import React from 'react'

function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className=' m-2 pl-10 pr-10 p-2 rounded-lg  bg-blue-600 text-white hover:bg-opacity-50 active:scale-75'>{text}</button>
    )
}

export default
    Button