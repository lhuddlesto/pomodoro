import React from "react";
import Start from "./Start";

function Work(props) {
    return (
        <div className="work-column">
          <div className="time-settings work">
            <p className="time-settings__title" id="session-label">Work</p>
            <i className="decrement work fas fa-minus-circle" id="session-decrement" onClick={props.decrement}></i>
            <p className="time__value" id="session-length">{props.workTime}</p>
            <i className="increment work fas fa-plus-circle" id="session-increment" onClick={props.increment}></i>
          </div>
          <Start passToWork={props.start}/>
        </div>
    )
}

export default Work;