//Selectors
const secondPointer = document.querySelector(".second");
const minutePointer = document.querySelector(".minute");
const hourPointer = document.querySelector(".hour");
const datePointer = document.querySelector(".date");
transform = getTransform();

//Functions
setInterval(()=> {
    const nowTime = new Date();
    console.log(nowTime);
    const second = nowTime.getSeconds() * 6;
    const minute = nowTime.getMinutes() * 6 + (second / 60);
    const hour = ((nowTime.getHours() % 12) / 12) * 360 + (minute / 12);
    datePointer.innerHTML = nowTime.getDate();
    hourPointer.style[transform] = `rotate(${hour}deg)`;
    minutePointer.style[transform] = `rotate(${minute}deg)`;
    secondPointer.style[transform] = `rotate(${second}deg)`;
},1000);
function getTransform() {
    const style = document.createElement("div").style;
    let transform;
    let vendor;
    if(undefined !== style[vendor = 'transform']){
        transform = vendor;
    }
    return transform;
}
    

