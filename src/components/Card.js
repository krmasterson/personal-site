import React from 'react';
import '../style/Card.css';


const Card = ({ name, description, image}) => {
  return (
    <div id='cards'>
    <img alt='project' src={image} />
      <div className='tc w-40 br3 pa3 bw2 shadow-5' id='text'>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    </div>
  );
}

export default Card;
