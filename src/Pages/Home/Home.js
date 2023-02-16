import React from 'react';
import FresherJobs from './FresherJobs/FresherJobs';
import Toggle from './Toggle/Toggle';

const Home = () => {
  return (
    <div>
       <Toggle></Toggle>
       <FresherJobs></FresherJobs>
    </div>
  );
};

export default Home;