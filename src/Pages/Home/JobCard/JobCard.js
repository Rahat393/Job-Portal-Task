import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './JobCard.css'

const JobCard = ({jobInfo}) => {
  const {position_name, job_location, company_name} = jobInfo
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('login')
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl border-style">
  <div className="card-body">
    <h2 className="card-title"> {position_name}</h2>
    <p> Job location: {job_location}</p>
    <p> Company Name: {company_name}</p>
    <div className='flex justify-between mt-4 '>
      <button onClick={handleClick} className='btn bg-[#f36f21] hover:bg-[#f36e21c7] text-white'>Apply</button>
      <button className='btn-style  text-black flex'>See All Jobs <BsArrowRight className='mt-1 ml-2'/></button>
    </div>
  
  </div>
</div>
    </div>
  );
};

export default JobCard;