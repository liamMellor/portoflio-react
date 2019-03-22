import React, { Component } from "react";
import styles from "../scss/about.scss";

import Cv from './Cv';

class About extends Component {

    render() {
        return (
            <div className="About border-light animation fadeDown">
                <div className="About__description">
                    Heya, thanks for visiting! My name's Liam and I live in Brooklyn, New York.
                    I am a versed and thoughtful engineer who loves building useful and intuitive web experiences.
                    Right now, I'm building products and tools for video creators at <a href="https://vimeo.com" target="_blank" style={{ 'textDecoration': 'underline' }}>Vimeo</a>.
                    <br></br>
                    <br></br>
                    I have a strong interest in UX which you'll find reflected in my work and processes.
                    <span> </span><a className="About__email" href="mailto:liam.r.mellor@gmail.com?Subject=Hello">Touch Base!</a>
                </div>
                <Cv />
            </div>
        );
    }

}

export default About;
