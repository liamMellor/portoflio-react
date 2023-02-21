import React, { Component } from "react";
import "../scss/app.scss";
import "../scss/animation.scss";

import Info from './Info';
import Jumbo from './Jumbo';
import About from './About';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <div id="App">
        <Jumbo />
        <Info />
        <About />
        <Footer />
      </div>
    );
  }

}

export default App;
