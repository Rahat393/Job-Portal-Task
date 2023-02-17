import React from 'react';
import ExperiencedJobs from './ExperiencedJobs/ExperiencedJobs';
import FresherJobs from './FresherJobs/FresherJobs';
import Toggle from './Toggle/Toggle';
import TopItCompany from './TopItCompany/TopItCompany';

const Home = () => {
  return (
    <div>
       <Toggle></Toggle>
       <FresherJobs></FresherJobs>
       <ExperiencedJobs></ExperiencedJobs>
       <TopItCompany></TopItCompany>
    </div>
  );
};

export default Home;