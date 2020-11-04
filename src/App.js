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
          <div className="content">
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
            <Fade left>
            <h1 className='tc white ma0'>About Me</h1>
            <div className='about-me'>
              <img src={profile} alt="Profile" />
              <p className='white'>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Laboriosam aperiam sit quasi sunt, magni facere unde, nam aliquam placeat tempore repudiandae voluptatem earum, maiores adipisci harum non, dignissimos ab qui.</p>
            </div>
            </Fade>
        </section>
        <section className='pa3' id='cards-div'>
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
          <Fade bottom>
            <Card name={Projects[0].name} description={Projects[0].description} image={melody} />
          </Fade>
          <Fade bottom>
            <Card name={Projects[1].name} description={Projects[1].description} image={rentie} />
          </Fade>
        </section>
        <section id='contact'>
        <Fade left>
          <h1>Contact</h1>
          <p id='contact-me'>If you have a vision in mind that you would like to turn into a reality or an employment opportunity please click the button below to get in touch with me.</p>
          <a href='mailto:kylemasterson25@gmail.com' id='contact-btn'><Button>Contact Me</Button></a>
        </Fade>
        </section>
      <Footer></Footer>
      <script src="tilt.jquery.js"></script>
    </div>

  );
}

export default App;
