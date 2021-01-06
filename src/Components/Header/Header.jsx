import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Home = () => {
  return (
    <>
    <div className='container-fluid nav-bg'>
        <div className='row'>
            <div className='col-12 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="#"><span className='main_heading1'>Tek</span><span className='main_heading'>Vek</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li style={{borderBottom: '#F6AE2D solid 4px', paddingBottom: '5px'}}  className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/howitworks">How It Works</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/courses">Courses Offered</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="plans">Our Plans</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="about">About Us</NavLink>
                </li>
                <div className='login_btn1'>
                <div style={{margin: '12px 12px', color: 'white'}} className='mt-3'>
                    <NavLink to='' className='btn-get-started1 login_btn'> <span id='login_btn'>login</span> </NavLink>
                </div>
                </div>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        </div>
    </div>
    </>
  );
}

export default Home;