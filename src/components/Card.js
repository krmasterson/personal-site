import React from 'react';
import '../style/Card.css';
import Tilt from 'react-tilt'
import Button from './Button';


const Card = ({ name, description, image, login, link}) => {
  return (
    <div id='cards'>
      <div id='card-inner'>
        <Tilt className="Tilt" options={{ max : 10 }} >
        <div className="Tilt-inner">
          <img className='col-lg-8 col-sm-12'alt='project' src={image} />
        </div>
        </Tilt>
          <div className='br3 pa3 bw2 col-lg-4 col-sm-12' id='text'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{login}</p>
            <a href={link}><Button>View Live</Button></a>
          </div>
      </div>
    </div>
  );
}

export default Card;
