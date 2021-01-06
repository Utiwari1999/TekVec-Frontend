import React from 'react';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import './Home.css';
import cover from '../Images/MainPageIllustration.svg';

const Home = () => {
  return (
    <>
        <Header />
        <section id='header' className='d-flex align-items-center'>
          <div className='container-fluid nav-bg'>
              <div className='row'>
                  <div className='col-12 mx-auto'>
                    <div className='row'>
                      <div className='col-md-6 order-1 order-lg-1 header-img d-flex justify-content-center flex-column'>
                          <img src={cover} className="img-fluid animated" alt='main cover image' />
                      </div>
                      
                      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column'>
                          <h1>
                          Are your students meritorious, but are lagging behind in technology?
                          </h1>
                          <h2 className='my-3'>
                            Your Solution is just one click away.
                          </h2>
                          <div className='mt-3'>
                              <NavLink to='' className='btn-get-started'> Request a callback </NavLink>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>
  );
}

export default Home;