import React from 'react';
import Nav from './components/Nav';
import Section1 from './components/section1'
import Projects from './components/projects'
import Section2 from './components/section2';
import Section3 from './components/section3';
import { projects } from './arrays/nav'


function App() {
  const setProgress = (data) =><Projects 
  key = {data.id}
  bg = {data.bgColor}
  state = {data.state}
  head3 = {data.head3}
  complete = {data.complete} />
  return (
    <div className="App">
      <Nav />
      <hr />
      <Section1 />
      <div className="container pdg z-2">
      {projects.map(setProgress)}
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
