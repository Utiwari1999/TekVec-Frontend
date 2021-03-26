import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import styled, { keyframes } from "styled-components";
import './Header.css';


const Header = ({sticky}) => {

  return (
    <>
    {/* <div className={`sticky-top ${sticky ? 'sticky one-edge-shadow' : null}`}> */}
    <div className='sticky-top sticky-inner container-fluid nav-bg'>
        <div className={sticky ? 'one-edge-shadow navbar-sticky row' : 'row'}>
            <div className='col-12 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <HashLink className="navbar-brand" to="#"><span className='main_heading1'>Tek</span><span className='main_heading'>Vec</span></HashLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li style={{borderBottom: '#F6AE2D solid 5px', paddingBottom: '5px'}}  className="nav-item">
                <HashLink activeClassName='menu_active' className="nav-link active" aria-current="page" smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })} to="/#homepage">Home</HashLink>
                </li>
                <li className="nav-item">
                <HashLink exact activeClassName='menu_active' className="nav-link" smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })} to="/#howitworks">How It Works</HashLink>
                </li>
                <li className="nav-item">
                <HashLink activeClassName='menu_active' className="nav-link" smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })} to="/#coursesoffered">Courses Offered</HashLink>
                </li>
                <li className="nav-item">
                <HashLink activeClassName='menu_active' className="nav-link" smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })} to="/#ourplans">Our Plans</HashLink>
                </li>
                <li className="nav-item">
                <HashLink activeClassName='menu_active' className="nav-link" smooth to="about">About Us</HashLink>
                </li>
                <div className='login_btn1'>
                <div style={{margin: '12px 12px', color: 'white'}} className='mt-3'>
                    <HashLink smooth to='' className='btn-get-started1 login_btn'> <span id='login_btn'>login</span> </HashLink>
                </div>
                </div>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        </div>
    </div>
    {/* </div> */}
    </>
  );
}

export default Header;

