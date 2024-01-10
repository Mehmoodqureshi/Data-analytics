// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <div>
      <HeroSection />
      </div>
      <div className="text-center my-8 mx-auto max-w-4xl">
        <p className="text-2xl">
          "Our unique combination of cutting-edge technology, industry<br/> expertise & personalized service sets us apart & allows us to<br/> deliver customized solutions that drive real business results for <br/> our clients".
        </p>
      </div>
      <div style={{ borderTop: '4px solid #718096' }} className="my-8 w-full"></div>
      <div>
        <Services />
      </div>
    </div>
  );
}

export default App;
