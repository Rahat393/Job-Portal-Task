import React from 'react';
import ExperiencedJobs from './ExperiencedJobs/ExperiencedJobs';
import FresherJobs from './FresherJobs/FresherJobs';
import Toggle from './Toggle/Toggle';

const Home = () => {
  return (
    <div>
       <Toggle></Toggle>
       <FresherJobs></FresherJobs>
       <ExperiencedJobs></ExperiencedJobs>
    </div>
  );
};

export default Home;