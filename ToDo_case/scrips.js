const pomodoroTimer = document.querySelector("#pomodoro-timer");
const starButton = document.querySelector("#pomodoro-start");
const pauseButton = document.querySelector("#pomodoro-pause");
const stopButton = document.querySelector("#pomodoro-stop");

//start
starButton.addEventListener('click', () => {
    toggleClock();
})

//pause
pauseButton.addEventListener('click', () => {
    toggleClock();
})

//stop
stopButton.addEventListener('click', () => {
    toggleClock(true);
})

let isClockRunning = false;

// in seconds = 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// in seconds = 5 mins;
let breakSessionDuration = 300;

const toggleClock = function(reset) {
    if (reset) {
        // STOP THE TIMER
    } else {
        if (isClockRunning === true) {
            // PAUSE THE TIMER
            isClockRunning = false;
        } else {
            // START THE TIMER
            isClockRunning = true;
        }
    }
}

clearInterval(clockTimer);
clockTimer = setInterval(() => {
    currentTimeLeftInSession--;    
    displayCurrentTimeLeftInSession();
}, 1000);
const displayCurrentTimeLeftInSession = function()   {
    const secondsLeft = currentTimeLeftInSession;
     let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }
    if (hours > 0) result += `${hours}:`
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    pomodoroTimer.innerText = result.toString();
    console.log(result.toString());
}