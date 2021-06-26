import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Main from './Main';
import Play from './Play';
import About from './About';
import './App.css';
import logo from './logo.svg';

caches.keys().then((names) => { 

      names.forEach((name) => { 

        caches.delete(name); 
        console.log('cleaned')
      }); 

    }); 


export default function BasicExample() {
  return (
    <Router>
      <div className="bg-white">
<nav className="navbar navbar-expand-md bg-dark navbar-dark ">
  
  <img src={logo} alt="virus" className="img-thumbnail" width="32px" height="32px"></img>
  <a href="/" className="navbar-brand"> &nbsp;&nbsp;&nbsp;&nbsp; MyPocketTv</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
 </nav>

        <hr />

        <Switch>
          <Route exact strict path="/">
            <Home />
          </Route>
          <Route exact strict path="/about">
            <About />
          </Route>
          <Route exact strict path="/channel/:title" component={Play}/>
        <Route exact path="*" status={404} component={NotFound}/>

        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Channels</h1>
      
      <Main/>
    </div>
  );
}

function NotFound(){
  return(
    <div>
    <h1>Not Found</h1>
    </div>
    )
}

