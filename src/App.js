import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Button from './components/Button';
import { Projects } from './Projects';
import melody from './assets/melody.jpg';
import rentie from './assets/rentie.jpg';
import profile from './assets/profile.jpg';
import Fade from 'react-reveal/Fade';
import Footer from './components/Footer';



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
            <Card name={Projects[0].name} description={Projects[0].description} />
          </Fade>
          <Fade bottom>
            <Card name={Projects[1].name} description={Projects[1].description} image={rentie} />
          </Fade>
        </section>
        <section>
        <Fade left>
          Contact Me
        </Fade>
        </section>
      <Footer></Footer>
    </div>

  );
}

export default App;
