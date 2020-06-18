function changeBackground() {
    var backgroundsImages = ["./img/1.png", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg",]

    document.getElementById('body').style.background = "url('./img/1.png')";
}
changeBackground()

function displayTime() {
    var date = new Date()
    var time = date.toLocaleTimeString()
    
    setTimeout(displayTime, 1)
    
    document.getElementById("time").innerHTML = time;
}
displayTime()
