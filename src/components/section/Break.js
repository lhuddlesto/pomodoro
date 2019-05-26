import React from "react";
import Stop from "./Stop"

function Break(props) {
    return (
    <div class="break-column">
    <Stop stopClick={props.stop}/>
    <div class="time-settings break">
      <p class="time-settings__title" id="break-label">Break</p>
      <span class="description-collapse">
        <i class="decrement break fas fa-minus-circle" id="break-decrement" onClick={props.decrement}></i>
        <p class="time__value break" id="break-length">{props.breakTime}</p>
        <i class="increment break fas fa-plus-circle" id="break-increment" onClick={props.increment}></i>
      </span>
</div>
    </div>
    )
}

export default Break;