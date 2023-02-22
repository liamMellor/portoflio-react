import React, { Component } from "react";

import "../scss/info.scss";

class Info extends Component {

    render() {

        return (
            <div className="Info animation fadeRight">
                <div className="Info__resume">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="LiamMellorResume.pdf"
                    >
                        <img src="../../../newspaper-yellow.png" />
                    </a>
                </div>
            </div>
        );
    }

}

export default Info;
