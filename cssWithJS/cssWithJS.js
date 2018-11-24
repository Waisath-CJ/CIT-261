// File: cssWithJS.js

function moonset() {
    var moon = document.getElementById("moon");
    var sky = document.getElementById("container");
    var position = 5;
    var id = setInterval(frameSet, 10);
    sky.style.transition = "opacity 3s linear 0s";
    sky.style.opacity = 0;
    
    function frameSet() {
        if (position == 400) {
        clearInterval(id);
        moon.style.transition = "borderRadius 0s opacity 0s linear 0s";
        moon.style.borderRadius = 0;
        moon.style.opacity = 0;
        } else {
        position++; 
        moon.style.top = position + 'px';
        }
    }
}

function moonrise() {
    var moon = document.getElementById("moon");
    var sky = document.getElementById("container");
    var position = 300;
    var id = setInterval(frameRise, 10);    
    sky.style.transition = "opacity 4s linear 0s";
    sky.style.opacity = 1;
    
    function frameRise() {
        if (position == 5) {
        clearInterval(id);
        } else {
        position--; 
        moon.style.top = position + 'px';
        moon.style.borderRadius = "50px";
        moon.style.transition = "opacity 0s linear 0s";
        moon.style.opacity = 1;
        }
    }
}