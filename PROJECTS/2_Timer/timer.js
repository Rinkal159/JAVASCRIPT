let time = Number(prompt("Time in Seconds : ").trim());
let ct = time;
let isPaused = true;

let count = document.querySelector(".count-inner")
count.classList.add("new")

const reset = document.querySelector(".reset")
const pause = document.querySelector(".pause")



let timer;
function setTimeOut() {

    clearInterval(timer)
    count.classList.remove("time-up");
    count.innerText = ct;

    timer = setInterval(() => {

        count.innerText = ct;

        if (ct == 0) {
            clearInterval(timer)
            count.innerText = "Times up!!"
            count.classList.add("time-up")
        }

        ct--;

    }, 1000);

}


setTimeOut()

pause.addEventListener("click", () => {
    if (isPaused && ct>0) {
        setTimeOut();
        pause.innerText= "Pause"    
    } else {
        clearInterval(timer);
        pause.innerText= "Play"    

    }
    isPaused = !isPaused;

})

reset.addEventListener("click", () => {
    clearInterval(timer);
    time = Number(prompt("Your next time in seconds : ").trim());
    ct = time;
    setTimeOut()

})



