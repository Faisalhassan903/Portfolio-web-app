// Home.js or Home.jsx
import Project1 from '../assets/Project1.jpg';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <h1>Hello!</h1>
      <p className="introduction">
        I am an experienced <span className="highlight">Web Developer and Data Analyst</span> based in London. I’m available for freelance work and projects. I specialise in web development, data analysis, graphic design, art direction, and multimedia production.
      </p>
      <a href="#contact" className="contact-link">More info and contact here</a>
      <p className="cta">Say hello!</p>
      <div className="separator"></div> {/* Separation Line */}
      <div className="gallery">
        {/* Placeholder images - replace with your project images */}
        <img
                    src={Project1}
                    alt="Project1"
                  
                  />
                    <img
                    src={Project1}
                    alt="Project1"
                  
                  />
                    <img
                    src={Project1}
                    alt="Project1"
                  
                  />
       <img
                    src={Project1}
                    alt="Project1"
                  
                  />
       <img
                    src={Project1}
                    alt="Project1"
                  
                  />
             <img
                    src={Project1}
                    alt="Project1"
                  
                  />
      
      
        
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Home;
