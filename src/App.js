import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Button from './components/Button';
import { Projects } from './Projects';
import melody from './assets/melody.jpeg';
import rentie from './assets/rentie.jpeg';
import profile from './assets/profile.jpeg';
import { Fade } from 'react-awesome-reveal';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <div id="main" className="jumbotron">
          <Fade right>
          <div className="content">
            <div>
              <h1 className="main-title load-hidden">
                Hi, I'm <span className="text-color-main">Kyle</span>
              </h1>
            </div>
            <div id='second-line'>
              <h2>
                I'm a <span className="text-color-main">Designer</span> / <span className="text-color-main">Front-end Developer</span> from the NYC area.
              </h2>
            </div>
            <a href='#about'>
              <Button>Discover More</Button>
            </a>
          </div>
          </Fade>
        </div>
        <div id='about' className='tc'>
          <Fade left>
          <h3 className='tc white ma0'>About Me</h3>
          <div className='about-me'>
            <img loading="lazy"  src={profile} alt="Profile" />
            <div id='about-me-text'>
              <p>After working in construction for over 5 years I decided a career change was necessary. With some past coding experience I chose to dive in head first and attend a coding bootcamp. After countless hours of research I applied and was accepted into Le Wagon's Full Stack Web Development Course; Course Report's highest rated coding bootcamp. </p>
              <p>I am now looking for a position which will allow me to continue learning and hone my skills as a developer. I am interested in freelance, contract, and full time opportunities.</p>
            </div>
          </div>
          </Fade>
        </div>
        <section id='cards-div'>
          <Fade bottom>
            <h3>Projects</h3>
          </Fade>
          <Fade bottom>
            <div id='card1'>
              <Card name={Projects[0].name} description={Projects[0].description} image={melody} link={Projects[0].link} login={Projects[0].login}/>
            </div>
          </Fade>
          <Fade bottom>
            <div id='card2'>
              <Card id='card2' name={Projects[1].name} description={Projects[1].description} image={rentie} link={Projects[1].link} login={Projects[1].login}/>
            </div>
          </Fade>
        </section>
        <Fade left>
            <h3 id='contact-title'>Contact</h3>
          </Fade>
          <section id='contact'>
        <Fade left>
        <div id='contact-inner'>
          <div id='contact-content'>
            <div id='contact-me'>
              <p>If you have a personal vision in mind that you would like to turn into a reality or an employment opportunity, please fill out the form below to get in touch with me.</p>

            </div>
            <Contact></Contact>
          </div>
        </div>
        </Fade>
        </section>
      <Footer></Footer>
      <script src="tilt.jquery.js"></script>
    </div>

  );
}

export default App;
