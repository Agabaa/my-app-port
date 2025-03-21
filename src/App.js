//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import agaba from "./assets/agaba.jpeg";
import ResultsComponent from "./app/resultsComponent.js";
import GeneralComponents from "./app/generalComponents.js";

function App() {
  const [darkmode, setDarkmode] = useState(false); 
  
  const darkmodeFunc = ()=>{
    setDarkmode(!darkmode);
    if(darkmode){
      document.body.style.background='rgb(55, 54, 54)';
      document.body.style.color='rgb(223, 218, 218)';
    }else{
      document.body.style.background='white';
      document.body.style.color='black';
    }
  }


  return (
    <>
      <button id="dark_mode" className="floating" onClick={darkmodeFunc}>Dark mode</button>
      <button id="light_mode" className="floating" onClick={darkmodeFunc}>Light mode</button>

      <GeneralComponents paragraph="I am a passionate and curious individual with a love for technology. I thrive on learning new things and collaborating with others to create impactful solutions. When I'm not coding, I enjoy swimming and interacting with friends. I’m excited to connect, grow, and contribute meaningfully to the world around me." title="Itungo Agaba"/>


      <Portfolio />
      <About />
      <YoutubeVideo />

      <ResultsComponent />
      <Links />
      
      <ContactComponent />
    </>
  );
}


function ContactComponent(){
  return(
    <>
    <div className="container">
          <h3>Contact Me ☎️</h3>
          <p>
            Send Email: <a href="mailto:itungoagaba@gmail.com">Agaba Itungo</a>
            <br />
            Call me 📞: <a href="tel:+256-775-511-961">+256-775-511-961</a>
            <br />
            Follow me on X :{" "}
            <a href="https://x.com/AgabaMugisha1">ITUNGO</a>
          </p>
        </div>
    </>

  )
} 
function YoutubeVideo(){
  return(
    <>
    <br />
      <div className="container">
        <h3>Youtube video of my hobby</h3>
        <br />
        <video width="400" controls>
          <source src="5 Beginner Swim Tips!.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </>
  );
}
function About(){
  return(
    <>
    <h2>Itungo Agaba</h2>
        <br />
        <p>
          I am a passionate and curious individual with a love for technology. I
          thrive on learning new things and collaborating with others to create
          impactful solutions. When I'm not coding, I enjoy swimming and
          interacting with friends. I’m excited to connect, grow, and contribute
          meaningfully to the world around me.
        </p>
        <br />

        <ul>
          <li>Itungo Agaba</li>
          <li>M23B23/018</li>
          <li>B20715</li>
          <li>
            Bachelors of Science in Computer Science, Second year 2nd semester
          </li>
          <li>Swimming and Coding</li>
        </ul>

    </>
  );
}
function Portfolio(){
  return(
    <>
    <div className="container">
        <h2>Portfolio</h2>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Profile picture</h2>
          <br />
          <img
            src={agaba}
            alt="Loading"
            width="140px"
            height="140px"
          />
        </div>

        

        
      </div>
    
    </>
  );
}
function Links(){
  return(
    <>
    <div className="container">
        <div>
          <p>
            Link to my favorite Website :{" "}
            <a href="https://www.google.com">Google</a>
            <br />
            Link to department Website:{" "}
            <a href="https://cse.ucu.ac.ug/">Department of Computing</a>
          </p>
        </div>
      
        
      </div>
    
    </>
  );
}



export default App;
