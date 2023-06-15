const startStopBtn=document.querySelector("#startstopBtn")
const resetBtn=document.querySelector("#resetBtn")

let timerInterval=null
let timerStatus="stopped"

let seconds=0
let minutes=0
let hours=0

let leadingSeconds=0
let leadingMinutes=0
let leadingHours=0

function stopwatch(){
    seconds++

    if (seconds/60===1){
        seconds=0
        minutes++
    

        if(minutes/60===1){
            minutes=0
            hours++
        }
    }
    if (seconds<10){
        leadingSeconds="0"+seconds.toString()
    }else{
        leadingSeconds=seconds
    }

    if (minutes<10){
        leadingMinutes="0"+minutes.toString()
    }else{
        leadingMinutes=minutes
    }

    if (hours<10){
        leadingHours="0"+hours.toString()
    }else{
        leadingHours=hours
    }

    let timer=document.getElementById("timer")
    let displayTimer=timer.innerText=leadingHours+":"+leadingMinutes+":"+leadingSeconds
    return displayTimer
}

startStopBtn.addEventListener("click",function(){
    if (timerStatus==="stopped"){
        console.log("stopped")
        timerInterval=window.setInterval(stopwatch, 1000)
        document.getElementById("startstopBtn").innerHTML= '<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus="started"
    }else{
        console.log("started")
        window.clearInterval(timerInterval);
        document.getElementById("startstopBtn").innerHTML= '<i class="fa-solid fa-play" id="play"></i>'
        timerStatus="stopped"
    }
})
resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds=0
    minutes=0
    hours=0

    document.getElementById("timer").innerText="00:00:00"
})