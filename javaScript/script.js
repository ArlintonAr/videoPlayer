console.log("Hola");
const video=document.querySelector("#video");
const play=document.querySelector('#play');
const pause=document.querySelector("#pause");
const backward=document.querySelector("#backward");
const forward=document.querySelector("#forward")

play.addEventListener('click',handlePlay)
function handlePlay(){
    video.play();
    play.hidden =true
    pause.hidden=false;

}

pause.addEventListener('click',handlePause)
function handlePause(){
    video.pause();
    pause.hidden=true
    play.hidden=false
}
backward.addEventListener('click',handlebackward );
function handlebackward(){
    video.currentTime=video.currentTime-10;
    console.log("atras 10 segundos",video.currentTime);
}

forward.addEventListener('click', handleforward);
function handleforward(){
    video.currentTime= video.currentTime +10;
    console.log("adelante 10 segundos",video.currentTime);
}
const progress=document.querySelector('#progress');
video.addEventListener("loadedmetadata",handleLoaded)
video.addEventListener("timeupdate",handleTimeupdate)

function handleLoaded(){
   progress.max=video.duration
    console.log("mi video ha cargado",video.duration);
}
function handleTimeupdate(){
 progress.value= video.currentTime   
 console.log("correcto",video.currentTime);   
}

progress.addEventListener('input',handleInput);
function handleInput (){
    video.currentTime=progress.value
    console.log(progress.value);
}
