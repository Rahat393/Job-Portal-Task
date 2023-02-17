import React from 'react';
import img1 from '../../../assets/brainstation.png'
import img2 from '../../../assets/datasoft2.png'
import img3 from '../../../assets/newscred.png'
import img4 from '../../../assets/accenture-logo.jpg'
import img5 from '../../../assets/oracle2.png'
import img6 from '../../../assets/sap.jpg'

const TopItCompany = () => {
  return (
    <div>
      <h2 className='text-3xl font-semibold mt-7 '>Top 3 IT Companies In Bangladesh</h2>
      <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         <img className='h-32 w-48' src={img1} alt="" />
         <img className='h-48 w-80' src={img2} alt="" />
         <img className='h-32 w-60' src={img3} alt="" />
      </div>
      <h2 className='text-3xl font-semibold mt-7 '>Top 3 International IT Companies  </h2>
      <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
         <img className='h-32 w-48' src={img4} alt="" />
         <img className='h-32 w-48' src={img5} alt="" />
         <img className='h-32 w-60' src={img6} alt="" />
      </div>
    </div>
  );
};

export default TopItCompany;