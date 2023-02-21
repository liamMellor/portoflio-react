import React, { Component } from "react";
import "../scss/info.scss";

class Info extends Component {

    render() {

        return (
            <div className="Info animation fadeRight">
                <div className="Info__line border-light">
                    <div className="Info__line__name animation fadeRight">
                    <a
                        className="Info__line__name__link"
                        href="https://www.linkedin.com/in/liam-mellor-8737328b"
                    >
                        {'> '}LIAM MELLOR
                    </a>
                    </div>
                </div>
                <div className="Info__line border-light">
                    <div className="Info__line__name animation fadeRight">
                        <a
                            className="Info__line__name__link"
                            href="LiamMellorResume.pdf"
                        >
                            {'> '}Resume
                        </a>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default Info;
