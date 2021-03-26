import { Card } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';

const FreePlan = () => {
  return (
    <>
        <div className="card_plan">
          <div className="card-body-plan">
            <h2>Free Trial</h2>
          </div>
            <h5>
                Maximum number of students limited to 50
            </h5>
            <h5>
                Access to only Beginner level courses
            </h5>
            <h5>
                Available only for 30 days
            </h5>

            <div id='free_btn'>
                <NavLink to='' className='btn-get-started-plan'> Get started </NavLink>
            </div>
        </div>
    </>
  );
}

export default FreePlan;