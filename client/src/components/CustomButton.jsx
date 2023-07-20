import React from 'react'

const CustomButton = ({title, type, customStyles, handleClick}) => {
  return (
    <button 
      className="px-5 py-3 w-[130px] text-white bg-[#ff4d5a] rounded-3xl text-lg tracking-wide font-bold hover:transition-all hover:bg-white hover:text-[#ff4d5a]"
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton