import React, { Component } from "react";
import styles from "../scss/header.scss";

class Header extends Component {

    render() {

        return (
            <header className="Header">
                <div className="Header__name animation fadeDown">LIAM MELLOR</div>
                <ul className="Header__nav">
                    <li className="Header__nav__item animation fadeDown">
                        <a href="LiamMellorResume.pdf">Resume</a>
                    </li>
                </ul>
            </header>
        );
    }

}

export default Header;
