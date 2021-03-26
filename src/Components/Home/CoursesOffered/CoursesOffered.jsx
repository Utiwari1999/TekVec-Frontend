import React from 'react';
import './CoursesOffered.css';
import CardComp from './CardComp';
import CodingImage from '../CoverPhoto/CodingImage.svg';
import WebDevImage from '../CoverPhoto/WebDevImage1.svg';
import AppDevImage from '../CoverPhoto/AppDevImage.svg';
import IotImage from '../CoverPhoto/IotImage.svg';

const CoursesOffered = () => {
    return (
        <>
        <div id='coursesoffered'>
        <div className='courses'>
            <h2 className='courses_offered'>
                <span>Courses Offered</span>
                <hr />
            </h2>
            <div className='cards'>
                <CardComp
                img={CodingImage}
                title='Coding' />
                <div className="webdev">
                    <CardComp
                    img={WebDevImage}
                    title='Web Development' />
                </div>
            </div>


            <div className='cards1'>
                <div className="appdev">
                    <CardComp
                    img={AppDevImage}
                    title='App Development' />
                </div>
                <div className="iotdev">
                    <CardComp
                    img={IotImage}
                    title='IOT & Robotics' />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default CoursesOffered;