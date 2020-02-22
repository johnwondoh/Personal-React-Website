import React from 'react';
import logo from './logo.svg';
// import './App.css';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Awards from './Components/Awards/Awards'
import Experience from './Components/Experience/Experience'
import Welcome from './Components/Welcome/Welcome'
function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Skills />
      <Education />
      <Awards />
      <Experience />
      <ul>
        <li>check best file order</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
