import React from "react"

function Timer(props) {
        return (
            <div class="timer__container">
                <p class="timer__display" id="time-left">{props.time}</p>
            </div>
        )
}

export default Timer