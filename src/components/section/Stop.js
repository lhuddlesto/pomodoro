import React from "react"

function Stop(props) {
    return (
        <div class="button stop" id="stop" onClick={props.stopClick}>
            <p>Stop</p>
        </div>
    )
}

export default Stop;