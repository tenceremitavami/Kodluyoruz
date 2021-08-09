getName();
function getName() {
    var person = prompt("Adınız Nedir?", "");
    document.getElementById("myName").innerText = person;
}
function showTime() {
    var date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var miliseconds = date.getMilliseconds();
    var day = date.getDay();
    console.log(day);
    switch (day) {
        case 1:
            day="Pazartesi";
            break;
        case 2:
            day="Salı";
            break;
        case 3:
            day="Çarşamba";
            break;
        case 4:
            day="Perşembe";
            break;
        case 5:
            day="Cuma";
            break;
        case 6:
            day="Cumartesi";
            break;
        case 7:
            day="Pazar";
            break;
        default:
        // code block
    }
    var time = hour + ":" + minutes + ":" + seconds + " " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    setTimeout(showTime,1000) 
}
showTime();