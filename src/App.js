import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Card from './Card';
import Button from './Button';
import { Projects } from './Projects';
import melody from './assets/melody.jpg';
import rentie from './assets/rentie.jpg';
import profile from './assets/profile.jpg';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <div className="App">
        <div id="hero" className="jumbotron">
          <Fade right>
          <div className="container">
            <h1 className="hero-title load-hidden">
              Hi, i'm <span className="text-color-main">Kyle</span>.
              <br />
              The Developer you <span className="text-color-main">need</span>.
            </h1>
            <a href='#about'><Button>Discover More</Button></a>
          </div>
          </Fade>
        </div>
        <section id='about' className='tc'>
          <div className='about-padding'>
            <Fade left>
            <h1 className='tc white ma0'>About Me</h1>
            <div className='about-me'>
              <img src={profile} alt="Profile" />
              <p className='white'>jjrebjjcmwcejw  nre nrbnbn ewn nr r r  rbrbrbvv r vrbr  ver ve  ve r  vr  r r r e er  v  e r er r  re vr wv v  vd  dv </p>
            </div>
            </Fade>
          </div>
        </section>
        <section className='tc pa3' id='cards-div'>
          <Fade bottom>
            <Card name={Projects[0].name} description={Projects[0].description} image={melody} />
          </Fade>
          <Fade bottom>
            <Card name={Projects[1].name} description={Projects[1].description} image={rentie} />
          </Fade>
        </section>
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
