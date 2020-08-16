import React, { Component } from "react";
import styles from "../scss/about.scss";

import Cv from './Cv';

class About extends Component {

    render() {
        return (
            <div className="About border-light animation fadeDown">
                <div className="About__description">
                    Heya, thanks for visiting - My name's Liam and I live in Brooklyn, New York!
                    <br></br>
                    <br></br>
                    I'm a Frontend and Growth focused engineer. I love working with A/B experiments,
                    growth hacks, and user data! Right now, I'm helping <em>grow</em> the business at
                    <span> </span><a href="https://teachable.com" target="_blank" style={{ 'textDecoration': 'underline' }}>Teachable.com</a>
                    <br></br>
                    <br></br>
                    If you love the frontend web and growth like I do ... <a className="About__email" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">hit me up!</a>
                </div>
                <Cv />
            </div>
        );
    }

}

export default About;
