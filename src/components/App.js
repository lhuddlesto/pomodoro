import React, { Component } from "react";
import "../styles/sass/main.scss";
import Title from "./section/Title";
import Timer from "./section/Timer";
import Work from "./section/Work";
import Break from "./section/Break";
import Reset from "./section/Reset";
import handleReset from "./functional/handleReset";

class App extends Component {
        
        state = {
            workTime: 25,
            breakTime: 5,
            currentTime: `25:00`,
            timerOn: true
        }

    handleReset = () => {
        return this.setState({workTime: 25, breakTime: 5, currentTime: "25:00"})
    } 
    
    handleIncrement = (e) => {
        const sessionRegex = /(^session)/g;
        const breakRegex = /(break$)/g;

        if (this.state.timerOn) {
            if (e.target.id.match(sessionRegex)) {
                return this.setState({workTime: this.state.workTime + 1})
            } else if (e.target.id.match(breakRegex)) {
                this.setState({workTime: this.state.breakTime++})
            }
        } else {
            return 
        }
    }

    handleDecrement = (e) => {
        console.log(this.state.workTime - 1)
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
                    <Work workTime={this.state.workTime} increment={this.handleIncrement}/>
                    <Break breakTime={this.state.breakTime} />
                </section>
                <section class="reset-button">
                    <Reset reset={this.handleReset}/>
                </section>
            </div>
        );
    }
}

export default App;