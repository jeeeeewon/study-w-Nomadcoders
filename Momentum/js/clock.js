const clock = document.querySelector('#clock');


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');;
    const seconds = String(date.getSeconds()).padStart(2, '0');;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//새로고침되자마자 실행되도록 즉시 함수실행해주고 interval해줌
setInterval(getClock, 1000);
