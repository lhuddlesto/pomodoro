var moment = require('moment');
moment().format();

const currentTime = moment().valueOf()
const workTime = 60000
const timeDone = currentTime + workTime
const diffTime = timeDone - currentTime
duration = moment.duration(workTime, 'milliseconds')
const interval = 1000

if (diffTime >= 0) {
    const timeLimit = setInterval(function(){
        if (duration == 0) {
            clearInterval(timeLimit)
        }
        duration = moment.duration(duration.asSeconds() - 1, 'seconds')
        let minutes = duration.minutes()
        if (duration.hours() == 1) {
            minutes = minutes + 60
        }
        console.log(minutes + 'm:' + duration.seconds() + 's')

    }, interval)

    interval
}