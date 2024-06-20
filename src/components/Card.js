import React from 'react';
import '../style/Card.css';
import Tilt from 'react-parallax-tilt';
import { isSafari } from 'react-device-detect';

const Card = ({ name, description, image, login, link }) => {
  if (isSafari) {
    return (
      <div id="cards">
        <div id="card-inner">
          <h3>{name}</h3>
          <div className="Tilt">
            <div className="Tilt-inner">
              <img loading="lazy" className="col-lg-8 col-sm-12" alt="project" src={image} />
            </div>
          </div>
          <div className="br3 bw2 col-lg-4 col-sm-12" id="text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="cards">
        <div id="card-inner">
          <h3>{name}</h3>
          <Tilt
            className="Tilt"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div className="Tilt-inner">
              <img loading="lazy" className="col-lg-8 col-sm-12" alt="project" src={image} />
            </div>
          </Tilt>
          <div className="br3 pa3 bw2 col-lg-4 col-sm-12" id="text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
