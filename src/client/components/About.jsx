import React, { Component } from "react";
import "../scss/about.scss";

class About extends Component {

    render() {
        return (
            <div className="About border-light border-light-bottom animation fadeRight">
                <div className="About__description">
                    I'm a software engineer and proud mentor whose been building web apps and online products since 2015.
                    <br></br>
                    <br></br>
                    I love being the glue between engineering, design, product and data and I have a demonstrated track record driving metrics and organizing teams (especially Growth teams).
                    <br></br> 
                    <a
                        className="About__email"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:liam.r.mellor@gmail.com?subject=Never gonna give you up!&body=Never gonna let you down!"
                    >
                        Get in touch!
                    </a>
                </div>
            </div>
        );
    }

}

export default About;
