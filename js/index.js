function displayTime() {
    var date = new Date()
    var time = date.toLocaleTimeString()
    
    setTimeout(displayTime, 1)
    
    document.getElementById("time").innerHTML = time;
}
