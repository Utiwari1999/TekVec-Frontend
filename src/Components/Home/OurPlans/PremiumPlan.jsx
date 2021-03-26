import { Card } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';

const PremiumPlan = () => {
  return (
    <>
        <div className="card_plan">
          <div className="card-body-plan">
            <h2>Premium</h2>
          </div>
            <h5>
                Number of students as per the requirement
            </h5>
            <div class='premium_input'>
            <input class="" type="text" value='No. of students' />
            </div>
            <h5 style={{color:'#33658A', fontWeight:'700', fontSize:'1.3em'}}>
                Monthly&nbsp;&nbsp;&nbsp; Qualterly&nbsp;&nbsp;&nbsp; Yearly
            </h5>
            <h5>
            &nbsp;&nbsp;1000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3000
            </h5>

            <div id='premium_btn'>
                <NavLink to='' className='btn-get-started-plan'> Book Now </NavLink>
            </div>
        </div>
    </>
  );
}

export default PremiumPlan;