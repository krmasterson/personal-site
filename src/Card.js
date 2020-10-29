import React from 'react';
import './Card.css';
import Tilt from 'react-tilt';


const Card = ({ name, description, image}) => {
  return (
    <div className='tc w-40 grow br3 pa3 bw2 shadow-5' id='cards'>
      <Tilt className="Tilt" options={{ max : 15 }} >
        <div className="Tilt-inner">
          <img alt='project' src={image} />
        </div>
      </Tilt>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
