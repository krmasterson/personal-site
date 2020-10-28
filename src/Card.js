import React from 'react';
import './Card.css';


const Card = ({ name, description, image}) => {
  return (
    <div className='tc w-40 grow br3 pa3 bw2 shadow-5' id='cards'>
      <img alt='project' src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
