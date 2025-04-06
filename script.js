console.log("welcome to spotify")

// Initializing variables 
let songIndex = 0 ;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif")



// database/api

// let songs = [
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:" let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
// ]

// audioElement.play()

// Handle play/pause and click

// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused|| audioElement.currentTime<=0){
//         audioElement.play();
//     }
// })


masterPlay.addEventListener("click",()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// myprogressbar.addEventListener('timeupdate',()=>{
//     console.log("time")
// })