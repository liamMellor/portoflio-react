import React, { Component, Fragment } from "react";
import "../scss/app.scss";
import "../scss/animation.scss";

import Info from './Info';
import Jumbo from './Jumbo';
import About from './About';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <Fragment>
        <Info />
        <div id="App">
          <Jumbo />
          <About />
          <Footer />
        </div>
      </Fragment>
    );
  }

}

export default App;
