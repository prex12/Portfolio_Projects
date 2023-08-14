import React from 'react';
import Nav from './components/Nav';
import Section1 from './components/section1'
import Projects from './components/projects'


function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <Section1 />
      <div className="container">
        <Projects />
      </div>
    </div>
  );
}

export default App;
