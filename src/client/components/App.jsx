import React, { Component } from "react";
import styles from "../scss/app.scss";
import animation from "../scss/animation.scss";

import Header from './Header';
import Jumbo from './Jumbo';
import About from './About';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <div id="App">
        <Header></Header>
        <Jumbo></Jumbo>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
