import React from "react";
import Start from "./Start";

function Work(props) {
    return (
        <div class="work-column">
          <div class="time-settings work">
            <p class="time-settings__title" id="session-label">Work</p>
            <i class="decrement work fas fa-minus-circle" id="session-decrement"></i>
            <p class="time__value">{props.workTime}</p>
            <i class="increment work fas fa-plus-circle" id="session-increment"></i>
          </div>
          <Start />
        </div>
    )
}

export default Work;