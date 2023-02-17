import React from 'react';

const ExJobCard = ({jobInfo}) => {
  const {position_name, job_location, company_name} = jobInfo

  return (
    <div>
       <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> {position_name}</h2>
    <p> Job location: {job_location}</p>
    <p> Company Name: {company_name}</p>
    <div className='flex justify-between mt-4 '>
      <button className='btn btn-accent text-white'>Apply</button>
      <button className='btn-style  text-black'>See All Jobs</button>
    </div>
  
  </div>
</div>
    </div>
  );
};

export default ExJobCard;