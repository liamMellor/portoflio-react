import React, { Component } from "react";
import styles from "../scss/jumbo.scss";

class Jumbo extends Component {

    render() {

        return (
            <div className="Jumbo">
                <div className="Jumbo__line animation fadeLeft">Frontend</div>
                <div className="Jumbo__line animation fadeRight">Developer</div>
            </div>
        );
    }

}

export default Jumbo;
