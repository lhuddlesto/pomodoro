import React, { Component } from "react";

var moment = require('moment');
moment().format();

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    }
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer = () => {
    const currentTime = moment().valueOf()
    let workTime = this.props.workTime * 60000
    const timeDone = currentTime + workTime
    const diffTime = timeDone - currentTime
    let duration = moment.duration(workTime, 'milliseconds')
    const interval = 1000
    let newTime;

        const workTimeLimit = setInterval(() => {
            if (duration <= 0) {
                return clearInterval(workTimeLimit)
            }
            duration = moment.duration(duration.asSeconds() - 1, 'seconds')
            let minutes = duration.minutes()
            let seconds = duration.seconds()
            if (duration.hours() == 1) {
                minutes = minutes + 60
            }
            if (String(duration.seconds()).length == 1) {
              seconds = "0" + seconds
            }
            console.log(minutes + ':' + seconds)
            newTime = minutes + ":" + seconds
            return this.setState({time: newTime})
    }, interval)
  }

  componentDidUpdate() {
    if (this.props.timerStatus) {
      this.startTimer()
    }
  }

    render() {
    if (!this.props.timerStatus) {
      return (
        <div class="timer__container">
        <p class="timer__display" id="time-left">{this.props.workTime + ":00"}</p>
        </div>
      )
    }
    
    return (
        <div class="timer__container">
            <p className="timer__display" id="time-left" >{this.state.time}</p>
        </div>      
      )
    }

  }

  export default Timer
