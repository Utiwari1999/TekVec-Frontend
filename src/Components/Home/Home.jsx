import React from 'react';
import Header from '../Header/Header';
import Cover from './Cover/Cover';
import HowItWorks from './HowItWorks/HowItWorks';
import { NavLink } from 'react-router-dom';
import useSticky from './useSticky.js';
import './Home.css';

const Home = () => {
  const { isSticky, element } = useSticky()
  return (
    <>
        <Header sticky={isSticky} />
        <Cover />
        <HowItWorks />
    </>
  );
}

export default Home;