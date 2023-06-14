const clock = document.createElement('h2');
const main = document.querySelector('.main');
main.append(clock);
function makeTime(){
    const date = new Date();
    const showDate = date.toLocaleTimeString();
    clock.textContent = showDate;
};

let myClock = setInterval(makeTime, 1000);
let checkStop = false;

main.addEventListener('click', function(e){
    if(e.target.textContent === 'Start' && checkStop) {
        myClock = setInterval(makeTime, 1000);
        checkStop = false;
    } else if(e.target.textContent === 'Stop'){
        clearInterval(myClock);
        checkStop = true;
    } 
});