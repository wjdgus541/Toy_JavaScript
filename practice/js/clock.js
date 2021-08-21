const clock = document.querySelector("#clock");

function setTimeout() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = hours>12? `0${hours-12}:${minutes}:${seconds} pm`:`${hours}:${minutes}:${seconds} am`
}

setTimeout();
setInterval(setTimeout, 1000);

