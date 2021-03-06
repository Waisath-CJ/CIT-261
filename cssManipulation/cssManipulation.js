// File: cssManipulation.js
function changeFontColor() {
    var colorValue = document.getElementById("fontColor").value;
    document.getElementById("text").style.color = colorValue;
}

function changeFontSize() {
	var fontSize = document.getElementById("fontSize").value;
	document.getElementById("text").style.fontSize = fontSize + 'px';
}

function changePictureWidth() {
    var picWidth = document.getElementById("picWidth").value;
    document.getElementById("myPic").style.width = picWidth + '%'; 
}

function adjustPercentage(percentage) {
    document.getElementById("picSliderOutput").innerHTML = percentage + '%';
}

function adjustPixels(pixels) {
    document.getElementById("textSliderOutput").innerHTML = pixels + ' px';
}

function changeButtons() {
    var x = document.getElementsByClassName("myButtons");
    for (var i = 0; i < x.length; i++) {
      x[i].style.borderRadius = "7%";
      x[i].style.background = "black";
      x[i].style.color = "white";  
    }
}

function clearItems() {
    window.localStorage.clear();
    location.reload();
}