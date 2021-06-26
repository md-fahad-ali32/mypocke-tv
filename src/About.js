import React from 'react';
import './About.css';
const mystyle = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  maxWidth: '300px',
  margin: 'auto',
  textAlign: 'center',
  fontFamily: 'arial',
};
function About() {
  return (
    <div>
    <br/><br/>
    <div style={mystyle} className="card">
     
      <h1>Fahad Ali</h1>
      <p className="title">Founder of MyPocketTv</p>
      <p>Hello, I am a web developer..</p>
      <div style={{margin:'24px 0'}}>
        <a className="a" className="fa fa-instagram" href="https://www.instagram.com/mdalifahad/"></a>  
        <a className="a" className="fa fa-linkedin" href="https://www.linkedin.com/in/fahad-ali-111034164"></a>  
        <a className="a" className="fa fa-facebook" href="https://m.facebook.com/i.me.fahad.ali"></a> 
  </div>
  <a href="mailto:fahad288ali@gmail.com"><p><button className="button">Contact</button></p></a>

     
    </div>
    </div>
    );
}
export default About;