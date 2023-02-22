import React, { Component } from "react";
import "../scss/jumbo.scss";

class Jumbo extends Component {

    render() {

        return (
            <div className="Jumbo">
                <div className="Jumbo__line animation fadeRight">Software /</div>
                <div className="Jumbo__line animation fadeRight">Product /</div>
                <div className="Jumbo__line animation fadeRight">Growth /</div>
                <br></br>
                <div className="Jumbo__line animation fadeLeft">
                    <span className="cursor animation fadeLeft">{'> '}</span>Engineer
                </div>
            </div>
        );
    }

}

export default Jumbo;
