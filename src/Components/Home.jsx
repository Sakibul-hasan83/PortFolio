import React from 'react';
import Banner from './Banner';
import SpacialSkill from './SpacialSkill';
import { Outlet } from 'react-router-dom';
import Services from './Services';
import CompleteProject from './CompleteProject';




const Home = () => {
  return (
    <>
    <Banner></Banner>
     <Outlet></Outlet>
     <Services></Services>
    <SpacialSkill></SpacialSkill>

    <CompleteProject></CompleteProject>
  </>

  

  );
}

export default Home;
