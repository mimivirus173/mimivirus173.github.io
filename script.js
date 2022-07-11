function playMusic(){
    var music = new Audio('media/vineboom.mp3');
    music.play();
}

function speedTethys(){
    var image = document.getElementById('Tethys');
    
    if (image.src.match("media/Tethys.gif")) {
        image.src = "media/FastTethys.gif"
        document.getElementById('tethysButton').innerHTML = "Slow down"
    } else {
        image.src = "media/Tethys.gif"
        document.getElementById('tethysButton').innerHTML = "Speed up"
    }
};