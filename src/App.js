import './App.scss';
import React, { Component } from 'react';
import Home from './componant/Home/home';
import Feature from './componant/Feature/feature';
import WhyUs from './componant/WhyUs/whyus';
import Menu from './componant/Menu/menu';
import Specials from './componant/Specials/specials';
import Events from './componant/Events/events';
import Reservetion from './componant/Reservetion/Reservetion';
import Testimonal from './componant/Testimonal/Testimonal';
import Gallary from './componant/Gallary/Gallary';
import Cheff from './componant/Cheff/Cheff';
import Contact from './componant/Contact/contact';
import Footer from './componant/Footer/footer';


class App extends Component {

  render() {
    return (
      <div className="App" >

        <Home />
        <Feature />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Reservetion />
        <Testimonal />
        <Gallary />
        <Cheff />
        <Contact />
        <Footer />
        


      </div>
    );
  }
}

export default App;

