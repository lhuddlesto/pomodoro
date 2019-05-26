import React, { Component } from "react";
import "../styles/sass/main.scss";
import Title from "./section/Title";
import Timer from "./section/Timer";
import Work from "./section/Work";
import Break from "./section/Break";
import Reset from "./section/Reset";

var moment = require('moment');
moment().format();

class App extends Component {
        
        state = {
            workTime: 25,
            breakTime: 5,
            timerOn: false,
            reset: false
        }

    handleReset = () => {
        return this.setState({workTime: 25, breakTime: 5, currentTime: "25:00"})
    }

    plusMinus = (e, value) => {
        const sessionRegex = /(^session)/g;
        const breakRegex = /(^break)/g;

        if (!this.state.timerOn) {
            if (e.target.id.match(sessionRegex)) {
                value == "plus" ? this.setState({workTime: this.state.workTime + 5}) : this.setState({workTime: this.state.workTime - 5})
            } else if (e.target.id.match(breakRegex)) {
                return value == "plus" ? this.setState({breakTime: this.state.breakTime + 1}) : this.setState({breakTime: this.state.breakTime - 1})
            }
        } else {
            return 
        }
    }  
    
    handleIncrement = (e) => {
        const sessionRegex = /(^session)/g;
        const breakRegex = /(^break)/g;

        if (this.state.workTime >= 90 && e.target.id.match(sessionRegex))  {
            return
        }
        if (!this.state.timerOn) {
            this.plusMinus(e, "plus")

        } else {
            return 
        }
    }

    handleDecrement = (e) => {
        const sessionRegex = /(^session)/g;
        const breakRegex = /(^break)/g;
        console.log('')

        if (!this.state.timerOn) {

            if (this.state.breakTime == 5 && e.target.id.match(breakRegex)) {
                return
            }

            if (this.state.workTime == 0 || this.state.breakTime == 5)  {

                if (this.state.workTime > 0 && this.state.breakTime == 5) {
                    return this.plusMinus(e, "minus")
                } else {
                    return
                }
            }
            return this.plusMinus(e, "minus")
        } else {
            return
        }
        

    }

    handleStart = (e) => {
        this.setState({timerOn: true})
    }


    render() {
        return (
            <div className="container">
                <section className="title">
                    <Title />
                </section>
                <section className="timer">
                    <Timer workTime={this.state.workTime} time={this.state.currentTime} timerStatus={this.state.timerOn}/>  
                </section>
                <section className="settings">
                    <Work start={this.handleStart} workTime={this.state.workTime} increment={this.handleIncrement} decrement={this.handleDecrement} 
                    countdown={this.handleCountdown}/>
                    <Break breakTime={this.state.breakTime} increment={this.handleIncrement} decrement={this.handleDecrement}
                    stop={this.handleStop}/>
                </section>
                <section className="reset-button">
                    <Reset reset={this.handleReset}/>
                </section>
            </div>
        );
    }
}

export default App;