import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Card from './Card';
import Button from './Button';
import { Projects } from './Projects';
import melody from './assets/melody.jpg';
import rentie from './assets/rentie.jpg';
import profile from './assets/profile.jpg';


function App() {
  return (
    <div className="App">
        <div id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi, i'm <span className="text-color-main">Kyle</span>.
          <br />
          The Developer you <span className="text-color-main">need</span>.
        </h1>
        <p className="hero-cta load-hidden">
        <a href='#about'><Button>Discover More</Button></a>
        </p>
      </div>
    </div>
        <div id='about' className='tc'>
          <h1 className='tc white ma0'>About Me</h1>
          <div className='about-me'>
            <img src={profile} alt="Profile" />
            <p>jjrebjjcmwcejw  nre nrbnbn ewn nr r r  rbrbrbvv r vrbr  ver ve  ve r  vr  r r r e er  v  e r er r  re vr wv v  vd  dv </p>
          </div>
        </div>
          <div className='tc pa3' id='cards-div'>
            <Card name={Projects[0].name} description={Projects[0].description} image={melody} />
            <Card name={Projects[1].name} description={Projects[1].description} image={rentie} />
          </div>
          <Particles
            params={{
              particles: {
                number: {
                  value: 400,
                density: {
                  enable: true,
                  value_area: 900,
                }
              },
              color: {
                value: '#61dafb',
              },
              line_linked: {
            color: '#61dafb',
            opacity: 1
          }
            },
            z_index: -10,
          }}
          />
    </div>
  );
}

export default App;
