import React from 'react';
import './CoursesOffered.css';
import CardComp from './CardComp';
import CodingImage from '../CoverPhoto/CodingImage.svg';
import WebDevImage from '../CoverPhoto/WebDevImage1.svg';

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
        </div>
        </div>
        </>
    );
}

export default CoursesOffered;