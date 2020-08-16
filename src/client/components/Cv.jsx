import React, { Component } from "react";
import styles from "../scss/cv.scss";

class Cv extends Component {

    render() {

        return (
            <div className="Cv">
                <div className="Cv__experience">
                    <div className="Cv__experience__title">Experience</div>
                    <div className="Cv__experience__text">
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="https://www.teachable.com/" target="_blank">Teachable</a></div>
                            <div className="Cv__experience__2 light">Front-End Growth Engineer</div>
                            <div className="Cv__experience__3 light">September 2019 - Present</div>
                        </div>
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="https://www.vimeo.com/" target="_blank">Vimeo</a></div>
                            <div className="Cv__experience__2 light">Front-End Engineer</div>
                            <div className="Cv__experience__3 light">July 2017 - September 2019</div>
                        </div>
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="https://www.delivery.com/" target="_blank">Delivery.com</a></div>
                            <div className="Cv__experience__2 light">Front-End Engineer</div>
                            <div className="Cv__experience__3 light">June 2015 - July 2017</div>
                        </div>
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="https://www.delivery.com/" target="_blank">Delivery.com</a></div>
                            <div className="Cv__experience__2 light">Front-End Intern</div>
                            <div className="Cv__experience__3 light">March 2015 - June 2015</div>
                        </div>
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="https://zolabooks.com/" target="_blank">Zola Books</a></div>
                            <div className="Cv__experience__2 light">Front-End Intern</div>
                            <div className="Cv__experience__3 light">May 2014 - March 2015</div>
                        </div>
                        <div className="Cv__experience__item">
                            <div className="Cv__experience__1"><a href="http://wnyu.org/" target="_blank">WNYU 89.1 FM</a></div>
                            <div className="Cv__experience__2 light">Engineering Director</div>
                            <div className="Cv__experience__3 light">September 2013 - June 2015</div>
                        </div>
                    </div>
                </div>
                <div className="Cv__education">
                    <div className="Cv__education__title">Education</div>
                    <div className="Cv__education__text">
                        <div className="Cv__education__item">
                            <div className="Cv__education__1">New York University</div>
                            <div className="Cv__education__2 light">
                                Degree in <a href="http://steinhardt.nyu.edu/music/technology" className="Cv__link light" target="_blank">Music Technology</a>.
                                Minor in <a href="https://www.cs.nyu.edu/home/index.html" className="Cv__link light" target="_blank">Computer Science</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Cv__personal">
                    <div className="Cv__personal__title">Personal</div>
                    <div className="Cv__personal__text">
                        <div className="Cv__personal__item">
                            <div className="Cv__personal__2 light">
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

export default Cv;
