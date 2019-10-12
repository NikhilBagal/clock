window.onload = init;
function init() {
    tick();
}
function tick() {
  //  let element = document.querySelector('#hour');
    let d = new Date();
   // element.innerHTML = d.getHours()
    let hour = document.querySelector('#hour');
    hour.innerHTML = d.getHours()-12;
    let minute = document.querySelector('#minute');
    minute.innerHTML = d.getMinutes();
    let second = document.querySelector('#second');
    second.innerHTML = d.getSeconds();
}
setInterval(tick,1000);