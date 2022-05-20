import React from 'react';
import About from './sections/About';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Stack from './sections/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Stack />
      <Projects />
    </div>
  );
}

export default App;
