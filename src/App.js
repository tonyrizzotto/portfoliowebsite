import React from 'react';
import Hero from './custom/Hero/Hero';
// import Button from './custom/Button/Button';
import HeroContent from './components/HeroContent';
const App = () => {
  return (
    <div>
      <Hero imageSrc={process.env.PUBLIC_URL + 'images/bluedesk.jpg'}>
        <div>
          <HeroContent />
          {/* <Button text="Get In Touch" styles="primary has-padding" /> */}
        </div>
      </Hero>
    </div>
  );
};

export default App;
