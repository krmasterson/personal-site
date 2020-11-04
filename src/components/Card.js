import React from 'react';
import '../style/Card.css';
import Tilt from 'react-tilt'
import Button from './Button';


const Card = ({ name, description, image}) => {
  return (
    <div id='cards'>
    <Tilt className="Tilt" options={{ max : 10 }} style={{ height: 100, width: 100 }} >
    <div className="Tilt-inner">
      <img className='col-lg-8 col-sm-12'alt='project' src={image} />
    </div>
    </Tilt>
      <div className='br3 pa3 bw2 col-lg-4 col-sm-12' id='text'>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button>View Live</Button>
    </div>
    </div>
  );
}

export default Card;
