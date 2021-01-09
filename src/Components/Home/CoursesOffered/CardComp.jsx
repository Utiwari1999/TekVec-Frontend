import { Card } from '@material-ui/core';
import React from 'react';

const CardComp = (props) => {
  return (
    <>
        <div className="card">
          <div className="card-body">
            <h2>{props.title}</h2>
            <div className='overall_hr'>
                <span className='seperator coding_hr'><hr /></span>
                <span className='seperator circle_hr'><hr /></span>
            </div>
          </div>
          <img className='card_image' src={props.img} />
        </div>
    </>
  );
}

export default CardComp;