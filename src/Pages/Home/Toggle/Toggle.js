import React, { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'


const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };

  return (
    <div className='text-3xl font-semibold'>
      {  isOn ?
      <button
      // className={isOn ? "on" : "onnn"}
      onClick={handleClick}
    >
        <div className=' flex '><BsToggleOn className='mt-1 mr-4'/> Job Seeker</div>
    </button>
    :
    <button onClick={handleClick}>
      <div className=' flex '><BsToggleOff className='mt-1 mr-4'></BsToggleOff> Job Poster</div>
      </button>}
    </div>
  );
};

export default Toggle;