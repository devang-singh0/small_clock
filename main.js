//js programme for time only
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let time = document.querySelectorAll('#clock #ttime span');
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let newday = document.querySelectorAll('#clock #date span')[0];
setInterval(() => {
    let samay = new Date();
    let hr = samay.getHours();
    let min = samay.getMinutes();
    let sec = samay.getSeconds();
    let new_date;
    if (samay.getDate() < 10) {
        new_date = '0' + samay.getDate();
    } else {
        new_date = samay.getDate();
    }
    newday.innerHTML = ` ${weekday[samay.getDay()]}, ${month[samay.getMonth()]} ${new_date}, ${samay.getFullYear()}`
    if (hr < 10) {
        time[0].innerHTML = '0' + hr
    } else if (hr > 21) {
        time[0].innerHTML = hr - 12;
        time[5].innerHTML = 'pm';
    } else if (hr > 12) {
        time[0].innerHTML = '0' + (hr - 12);
        time[5].innerHTML = 'pm';
    }
    else {
        time[0].innerHTML = hr;
    }
    if (min < 10) {
        time[2].innerHTML = '0' + min;
    } else {
        time[2].innerHTML = min;
    }
    if (sec < 10) {
        time[4].innerHTML = '0' + sec;
    } else {
        time[4].innerHTML = sec;
    }
}, 1000)
// JS STOPWATCH HERE
let spn = document.querySelectorAll('#stopwatch .box span');
let btn = document.querySelectorAll("#stopwatch .box button");
let timer = false;
let sec = 00;
let msec = 00;
let hr = 00;
let min = 00;
function start() {
    if (!timer) {
        watch();
        timer = true;
    }
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    sec = 00;
    msec = 00;
    min = 00;
    spn[0].innerHTML = '00';
    spn[2].innerHTML = '00';
    spn[4].innerHTML = '00';
    spn[6].innerHTML = '00';
}
let watch = () => {
    setTimeout(() => {
        if (timer) {
            watch();
            msec = msec + 1;
            if (msec > 99) {
                sec = sec + 1;
                msec = 0;
            }
            if (sec > 59) {
                sec = 0;
                min = min + 1;
            }
            if (min > 59) {
                min = 0;
                hr = hr + 1;
            }
            if (msec < 10) {
                spn[6].innerHTML = '0' + msec;
            } else {
                spn[6].innerHTML = msec;
            }
            if (sec < 10) {
                spn[4].innerHTML = '0' + sec;
            } else {
                spn[4].innerHTML = sec;
            }
            if (min < 10) {
                spn[2].innerHTML = '0' + min;
            } else {
                spn[2].innerHTML = min;
            }
            if (hr < 10) {
                spn[0].innerHTML = '0' + hr;
            } else {
                spn[0].innerHTML = hr;
            }
        }
    }, 10)
};

// js interst
