var bgIncrement = 0;

function changeBackground() {
    var backgroundsImages = ["url('./img/1.png')", "url('./img/2.jpg')", "url('./img/3.jpg')", "url('./img/4.jpg')", "url('./img/5.jpeg')"]

    document.getElementById('body').style.backgroundImage = backgroundsImages[bgIncrement++];
}

function displayTime() {
    var date = new Date()
    var time = date.toLocaleTimeString()
    
    setTimeout(displayTime, 1)
    
    document.getElementById("time").innerHTML = time;
}
displayTime()
