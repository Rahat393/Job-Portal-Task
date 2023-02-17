import React, { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import '../Navbar/Navbar.css'

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };

  return (
    <div className='text-3xl font-semibold text-center mt-6'>
      {  isOn ?
      <button
       
      onClick={handleClick}
    >
        <div className=' flex '><BsToggleOn className='mt-1 mr-4 title-style'/> Job <span className='title-style ml-2'>Seeker</span></div>
    </button>
    :
    <button onClick={handleClick}>
      <div className=' flex '><BsToggleOff className='mt-1 mr-4 title-style'></BsToggleOff> Job <span className='title-style ml-2'>Poster</span></div>
      </button>}
    </div>
  );
};

export default Toggle;