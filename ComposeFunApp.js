// Our goal will be to break the application logic up into smaller parts, functions. Each function will be focused on a single task, and we will compose them into larger functions that we can use to create the clock.

const oneSec = () => 1000,
    getCurrentTime = () => new Date(),
    clear = () => console.clear(),
    log = message => console.log(message);

// Next we will need some functions for transforming data. These three functions will be used to mutate the Date object into an object that can be used for our clock:

const serializeClock = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const analogHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
})


// These three functions are used to transform data without changing the original. They treat their arguments as immutable objects.

// Now display , format and prepend Clock

const displayClock = target => time => target(time);
const formatTime = format => time => format.replace('hh', time.hours).replace('mm', time.minutes).replace('ss', time.seconds).replace('tt', time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
})

// Now that we have all of the functions required to build a ticking clock, we will need to compose them.

// 
const compose = (...func) => (arg) => func.reduce((composed, f) => f(composed), arg)
// 
const convertToAnalogTime = clockTime => compose(appendAMPM, analogHours)(clockTime)

const doubleDigit = analogTime => compose(
    prependZero('hours'),
    prependZero('minutes'),
    prependZero('seconds'),
)(analogTime)

const startTicking = () => setInterval(compose(clear,
    getCurrentTime,
    serializeClock,
    convertToAnalogTime,
    doubleDigit,
    formatTime('hh:mm:ss tt'),
    displayClock(log),
), oneSec());


startTicking()

// This is declarative version of the clock.