import React, { Component } from "react";
import styles from "../scss/about.scss";

import Cv from './Cv';

class About extends Component {

    render() {
        return (
            <div className="About border-light animation fadeDown">
                <div className="About__description">
                    Heya, thanks for visiting! My name's Liam and I live in Brooklyn, New York.
                    I am a versed and thoughtful engineer who loves building useful and intuitive experiences.
                    Right now, I am building products for live streaming at <a href="https://vimeo.com/features/livestreaming" target="_blank" style={{ 'textDecoration': 'underline' }}>Vimeo</a>.
                    <br></br>
                    <br></br>
                    I like talking product and have a strong interest in UX and you'll find that reflected in my work and processes.
                    <br></br>
                    <a className="About__email" href="mailto:liam.r.mellor@gmail.com?Subject=Hello">Get in touch with me!</a>
                </div>
                <Cv />
            </div>
        );
    }

}

export default About;
