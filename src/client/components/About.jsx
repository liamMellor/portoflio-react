import React, { Component } from "react";
import styles from "../scss/about.scss";

class About extends Component {

    render() {
        return (
            <div className="About animation fadeDown">
                <div className="About__description">
                    Heya, thanks for visiting! My name's Liam and I live in Brooklyn, New York.
                    I am a versed and thoughtful engineer who loves building useful and intuitive experiences.
                    Right now, I am building products for live streaming at
                    <a href="https://www.vimeo.com/" target="_blank" style={{ 'textDecoration': 'underline' }}>Vimeo</a>.
                    <br></br>
                    <br></br>
                    I like talking product and have a strong interest in UX and you'll find that reflected in my work and processes.
                    <br></br>
                    <a className="About__email" href="mailto:liam.r.mellor@gmail.com?Subject=Hello">Get in touch with me!</a>
                </div>
            
                <div className="About__experience">
                    <div className="About__experience__title">Experience</div>
                    <div className="About__experience__text">
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="https://www.vimeo.com/" target="_blank">Vimeo</a></div>
                            <div className="About__experience__2">Front-End Engineer</div>
                            <div className="About__experience__3">October 2017 - Present</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="https://www.livestream.com/" target="_blank">Livestream</a></div>
                            <div className="About__experience__2">Front-End Engineer</div>
                            <div className="About__experience__3">July 2017 - October 2017</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="https://www.delivery.com/" target="_blank">Delivery.com</a></div>
                            <div className="About__experience__2">Front-End Engineer</div>
                            <div className="About__experience__3">June 2015 - July 2017</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="https://www.delivery.com/" target="_blank">Delivery.com</a></div>
                            <div className="About__experience__2">Front-End Intern</div>
                            <div className="About__experience__3">March 2015 - June 2015</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="https://zolabooks.com/" target="_blank">Zola Books</a></div>
                            <div className="About__experience__2">Front-End Intern</div>
                            <div className="About__experience__3">May 2014 - March 2015</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="http://wnyu.org/" target="_blank">WNYU 89.1 FM</a></div>
                            <div className="About__experience__2">Engineering Director</div>
                            <div className="About__experience__3">September 2013 - June 2015</div>
                        </div>
                        <div className="About__experience__item">
                            <div className="About__experience__1"><a href="http://steinhardt.nyu.edu/" target="_blank">New York University, Steinhardt</a></div>
                            <div className="About__experience__2">Studio Technician</div>
                            <div className="About__experience__3">December 2012 - December 2014</div>
                        </div>
                    </div>
                </div>
                <div className="About__education">
                    <div className="About__education__title">Education</div>
                    <div className="About__education__text">
                        <div className="About__education__item">
                            <div className="About__education__1">New York University</div>
                            <div className="About__education__2">
                                Degree in <a href="http://steinhardt.nyu.edu/music/technology" className="About__link" target="_blank">Music Technology</a>.
                                Minor in <a href="https://www.cs.nyu.edu/home/index.html" className="About__link" target="_blank">Computer Science</a>
                            </div>
                            <div className="About__education__3">September 2011 - May 2015</div>
                        </div>
                    </div>
                </div>
                <div className="About__personal">
                    <div className="About__personal__title">Personal</div>
                    <div className="About__personal__text">
                        <div className="About__personal__item">
                            <div className="About__personal__2">
                                I am an avid music-listener, concert-goer, and musician.
                                I have dual citizenship in the US and Great Britain.
                                I love Indian food, radio, pickup soccer, skiing, and keeping fit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;
