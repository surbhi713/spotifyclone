console.log("welcome to spotify")

// Initializing variables 
let songIndex = 0 ;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName('songItems'))
let mastSongNames = document.getElementById('masterSongName');


// database/api

let songs = [
    {songName:"Deewana leke aya", filePath:"songs/1.mp3", coverPath:"covers/3.jpg"},
    {songName:"Hassiyan Khedian", filePath:"songs/H2.mp3", coverPath:"covers/5.jpg"},
    {songName:"Jattan Da Putt Mada Ho Gya", filePath:"songs/3.mp3", coverPath:"covers/1.jpg"},
    {songName:"Jordan", filePath:"songs/4.mp3", coverPath:"covers/2.jpg"},
    {songName:"piya tu ab toh", filePath:"songs/5.mp3", coverPath:"covers/4.jpg"},
    {songName:"Malaiyaan", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"No Makeup", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Oh Kyu Ni Jaan Ske", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
]

// audioElement.play()

// iterartor for cover 
songItems.forEach((element,i)=>{
        element.getElementsByTagName('img')[0].src = songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})

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

// update seekbar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value = progress;
})

myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100
})                 // quite confusing but the formulas says percentage*duration/100



// remove pause and add play when another songs is clicked

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src= `songs/${songIndex+1}.mp3`;
        mastSongNames.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

