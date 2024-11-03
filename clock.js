const clock=document.getElementById("clock");

function getClock(){
    const hours=String(new Date().getHours()).padStart(2,"0");
    const minutes=String(new Date().getMinutes()).padStart(2,"0");
    const seconds=String(new Date().getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);
//setTimeout()