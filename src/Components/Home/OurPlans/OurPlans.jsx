import React from 'react';
import './OurPlans.css';
import FreePlan from '../OurPlans/FreePlan';
import PremiumPlan from '../OurPlans/PremiumPlan';

const OurPlans = () => {
    return(
        <>
        <div id='ourplans'>
        <div className='plans'>
            <h2 className='our_plans'>
                <span>Our Plans</span>
                <hr />
            </h2>

            <div className='cards_plan'>
                <FreePlan />
                <PremiumPlan />
            </div>

        </div>
        </div>
        </>
    );

}

export default OurPlans;