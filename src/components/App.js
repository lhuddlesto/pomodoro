import React, { Component } from "react";
import "../styles/sass/main.scss";
import Title from "./section/Title";
import Timer from "./section/Timer";
import Work from "./section/Work";
import Break from "./section/Break";
import Reset from "./section/Reset";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: "00:00",
            workTime: 25,
            breakTime: 5
        }
    } 
    render() {
        return (
            <div class="container">
                <section class="title">
                    <Title />
                </section>
                <section class="timer">
                    <Timer time={this.state.currentTime}/>  
                </section>
                <section class="settings">
                    <Work workTime={this.state.workTime}/>
                    <Break breakTime={this.state.breakTime} />
                </section>
                <section class="reset-button">
                    <Reset />
                </section>
            </div>
        );
    }
}

export default App;