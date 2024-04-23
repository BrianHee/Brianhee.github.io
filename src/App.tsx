import React from 'react';
import About from './sections/About';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Stack from './sections/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
