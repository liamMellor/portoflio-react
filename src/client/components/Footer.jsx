import React, { Component } from "react";
import styles from "../scss/footer.scss";

class Footer extends Component {

    render() {

        return (
            <footer className="Footer about-page animation fadeDown">
                <div className="Footer__left">
                    <a className="Footer__item" target="_blank" href="https://github.com/liamMellor">GitHub</a>
                    <a className="Footer__item" target="_blank" href="https://www.linkedin.com/in/liam-mellor-8737328b">LinkedIn</a>
                    <a className="Footer__item" target="_blank" href="https://twitter.com/liam_mode">Twitter</a>
                </div>
                <div className="Footer__right">
                    <div className="Footer__item">© 2016 </div>
                    <div className="Footer__item">Liam Mellor</div>
                </div>
            </footer>
        );
    }

}

export default Footer;
