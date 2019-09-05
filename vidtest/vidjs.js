var vid = document.getElementById("vid");
var seek = document.getElementById("range");
var debug = document.getElementById("debug");
var vol = document.getElementById("vol");
function storecurrenttime(){

    window.localStorage["curtime"] = vid.currentTime;

}

function setcurrenttime(){
    let newTime = 0;
    newTime = seek.value/ 100;
    newTime = newTime * vid.duration;
    vid.currentTime = newTime;
    vid.play()
}


function playorpause(){
    if (vid.paused){
        vid.play()
    }
    else{
        vid.pause()
    }
}

function updateslider(){
    seek.value = vid.currentTime / vid.duration * 100
}

function setvolume(){
    vid.volume = vol.value/100;
}

function updatepromise(){
    updateslider().then(setcurrenttime())
if( !vid.buffered){
  debug.innerHTML = "LOADING";
}
}


setInterval(updatepromise, 500);
vol.value = vid.volume * 100;

