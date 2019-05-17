import React from "react";
import Start from "./Start";

function Work(props) {
    return (
        <div class="work-column">
          <div class="time-settings work">
            <p class="time-settings__title" id="session-label">Work</p>
            <i class="decrement work fas fa-minus-circle" id="session-decrement" onClick={props.decrement}></i>
            <p class="time__value">{props.workTime}</p>
            <i class="increment work fas fa-plus-circle" id="session-increment" onClick={props.increment}></i>
          </div>
          <Start passToWork={props.countdown}/>
        </div>
    )
}

export default Work;