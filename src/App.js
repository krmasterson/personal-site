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
        <div id='about' className='tc'>
          <Fade left>
          <h1 className='tc white ma0'>About Me</h1>
          <div className='about-me'>
            <img src={profile} alt="Profile" />
            <div id='about-me-text'>
              <p>After working in construction for over 5 years I decided a career change was necessary. With some past coding experience I chose to dive in feet first and attending a coding bootcamp. After countless hours of research I applied to; and was accepted into, Le Wagon's Full Stack Web Development Course, Course Report's highest rated coding bootcamp. </p>
              <p>I am now looking for a position which will allow me to continue learning and hone my skills as a developer. I am interested in freelance, contract, and full time opportunities.</p>
              <Button>Resume</Button>
            </div>
          </div>
          </Fade>
        </div>
        <section id='cards-div'>
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
          <Fade bottom>
            <div id='card1'>
              <Card name={Projects[0].name} description={Projects[0].description} image={melody} />
            </div>
          </Fade>
          <Fade bottom>
            <div id='card2'>
              <Card id='card2' name={Projects[1].name} description={Projects[1].description} image={rentie} />
            </div>
          </Fade>
        </section>
        <br />
        <section id='contact'>
        <Fade left>
        <div id='contact-inner'>
          <h1>Contact</h1>
          <p id='contact-me'>If you have a vision in mind that you would like to turn into a reality or an employment opportunity please click the button below to get in touch with me.</p>
          <a href='mailto:kylemasterson25@gmail.com' id='contact-btn'><Button>Contact Me</Button></a>
        </div>
        </Fade>
        </section>
      <Footer></Footer>
      <script src="tilt.jquery.js"></script>
    </div>

  );
}

export default App;
