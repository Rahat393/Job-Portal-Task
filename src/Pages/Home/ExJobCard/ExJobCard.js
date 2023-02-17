import React from 'react';
import { BsArrowRight  } from 'react-icons/bs';

const ExJobCard = ({jobInfo}) => {
  const {position_name, job_location, company_name} = jobInfo

  return (
    <div  >
       <div className="card w-96 bg-base-100 shadow-2xl  border-orange-600 ">
  <div className="card-body ">
    <h2 className="card-title"> {position_name}</h2>
    <p> Job location: {job_location}</p>
    <p> Company Name: {company_name}</p>
    <div className='flex justify-between mt-4 '>
      <button className='btn bg-[#f36f21] hover:bg-[#f36e21c7] text-white'>Apply</button>
      <button className='btn-style flex  text-black'>See All Jobs <BsArrowRight className='mt-1 ml-2'/> </button>
    </div>
  
  </div>
</div>
    </div>
  );
};

export default ExJobCard;