import React from 'react';
import howitworkspicture from '../CoverPhoto/HowItWorks.svg';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <>
        <div id='howitworks'>
            <h2 className='how_it_works'>
                <span>How It Works</span>
                <hr />
            </h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{
                width: '70%', 
                marginTop: '20px', 
                marginBottom: '100px', 
                textAlign: 'center',
                marginLeft: '0px' 
                }} src={howitworkspicture} className="img-fluid animated" alt='how it works image' />
            </div>
        </div>
        </>
    );
}

export default HowItWorks;