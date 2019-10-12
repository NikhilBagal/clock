window.onload = init;
function init() {
    tick();
}
function tick() {
    let selection = document.querySelectorAll("input");
    let element;
    let d = new Date();
    //2018, 11, 24, 0, 33, 30, 0;
    let hour = document.querySelector('#hour');
    let minute = document.querySelector('#minute');
    let second = document.querySelector('#second');
    for(var i=0;i<selection.length;i++){
        if(selection[i].checked){
            element = selection[i].value;
        }
    }
    if(element === "12Hr"){
        if(d.getHours()>12){
        hour.innerHTML = d.getHours()-12;
        }
        else if(d.getHours()==0){
        hour.innerHTML = d.getHours()+12;
        }
        else {
        hour.innerHTML = d.getHours();
        }
        minute.innerHTML = d.getMinutes();
        second.innerHTML = d.getSeconds();
    }else if(element === "24Hr"){
        hour.innerHTML = d.getHours();
        minute.innerHTML = d.getMinutes();
        second.innerHTML = d.getSeconds();
    }  
}
setInterval(tick,1000);