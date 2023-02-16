import React from 'react';
import JobCard from '../JobCard/JobCard';

const FresherJobs = () => {
  const jobsInfo = [
    {
      id: 1,
      position_name : 'Junior React Developer',
      job_location: 'Dhaka',
      company_name: 'TigerIT Bangladesh LTD'
    },
    {
      id: 2,
      position_name : 'Junior MERN Stack Developer',
      job_location: 'Chittagong',
      company_name: 'TigerIT Bangladesh LTD'
    },
    {
      id: 3,
      position_name : 'Junior React Developer',
      job_location: 'Dhaka',
      company_name: 'Datasoft Systems BD ltd'
    },
    {
      id: 4,
      position_name : 'Junior JavaScript Developer',
      job_location: 'Chittagong',
      company_name: 'Newscred'
    },
    {
      id: 5,
      position_name : 'Junior React Developer',
      job_location: 'Dhaka',
      company_name: 'Southtech Group'
    },
    {
      id: 6,
      position_name : 'Junior React Developer',
      job_location: 'Dhaka',
      company_name: 'Brain Station 23 Limited'
    },
  ]
  return (
    <div className='my-7'>
      <h2 className='text-3xl font-semibold'>Jobs For Freshers</h2>
      <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          jobsInfo.map(jobInfo => <JobCard
          key={jobInfo.id}
          jobInfo={jobInfo}
          ></JobCard>)
        }
      </div>
    </div>
  );
};

export default FresherJobs;