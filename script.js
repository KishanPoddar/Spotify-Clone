console.log("Welcome to spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/humShyamBihariKeCheleHai.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "1st Song",
    fileName: "songs/humShyamBihariKeCheleHai.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "2nd Song",
    fileName: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "3rd Song",
    fileName: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "4th Song",
    fileName: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "5th Song",
    fileName: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "6th Song",
    fileName: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "7th Song",
    fileName: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "8th Song",
    fileName: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "9th Song",
    fileName: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "10th Song",
    fileName: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    gif.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
  );
  
  document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
  
  document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <=0) {
      songIndex = 9;
    } else {
      songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
  