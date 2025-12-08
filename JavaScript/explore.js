//==Scroll Control==
function scrollSongs(direction, row) {
  //Row1
  const container1 = document.getElementById("row1scroll");
  const scrollAmount1 = 1508;
  console.log(row)
  if (direction === "left" && row === 1){
    container1.scrollLeft -= scrollAmount1;
  } else if (direction != "left" && row === 1) {
    container1.scrollLeft += scrollAmount1;
  } 

  //Row2
  const container2 = document.getElementById("row2scroll");
  const scrollAmount2 = 1405;

  if (direction === "left" && row === 2) {
    container2.scrollLeft -= scrollAmount2;
  } else if (direction != "left" && row === 2) {
    container2.scrollLeft += scrollAmount2;
  } 

  //Row3
  const container3 = document.getElementById("row3scroll");
  const scrollAmount3 = 1508;
  console.log(row)
  if (direction === "left" && row === 3){
    container3.scrollLeft -= scrollAmount3;
  } else if (direction != "left" && row === 3) {
    container3.scrollLeft += scrollAmount3;
  } 

  //Row4
  const container4 = document.getElementById("row4scroll");
  const scrollAmount4 = 1405;

  if (direction === "left" && row === 4) {
    container4.scrollLeft -= scrollAmount4;
  } else if (direction != "left" && row === 4) {
    container4.scrollLeft += scrollAmount4;
  } 

  //Row5
  const container5 = document.getElementById("row5scroll");
  const scrollAmount5 = 1405;

  if (direction === "left" && row === 5) {
    container5.scrollLeft -= scrollAmount5;
  } else if (direction != "left" && row === 5) {
    container5.scrollLeft += scrollAmount5;
  } 
}

//===Player Manager===
const audio = document.getElementById("player");
const songImg = document.querySelector(".music-info img");
const songName = document.querySelector(".music-info .songname");
const playBtn = document.querySelector(".music-controls button:nth-child(2) img");
const prevBtn = document.querySelector(".music-controls button:nth-child(1)");
const nextBtn = document.querySelector(".music-controls button:nth-child(3)");
const muteBtn = document.querySelector(".volume-control button img");
const volumeSlider = document.querySelector(".volume-control input");
const progressBar = document.querySelector(".progress-bar");

let isPlaying = false;
let isMuted = false;
let currentSong = document.querySelector(".song-item");

// Play a song
function playSong(item) {
  const title = item.querySelector(".song-title").textContent;
  if (currentSong) {
    currentSong.style.background = "";
    const oldTitle = currentSong.querySelector(".song-title");
    if (oldTitle) oldTitle.style.color = "";
  }
  item.style.background = "rgba(66, 38, 68, 0.25)";
  const titleSpan = item.querySelector(".song-title");
  if (titleSpan) titleSpan.style.color = "#FF6FB3";

  audio.src = `songs/ExplorePage/${title}.mp3`;
  audio.play();
  isPlaying = true;
  playBtn.src = "images/Pause.png";
  songImg.src = item.querySelector("img").src;
  songName.textContent = title;
  
  currentSong = item;
}

// Toggle play/pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.src = "images/Play.png";
  } else {
    audio.play();
    playBtn.src = "images/Pause.png";
  }
  isPlaying = !isPlaying;
}
document.querySelector(".music-controls button:nth-child(2)").addEventListener("click", togglePlay);

// Click on song to play
document.querySelectorAll(".song-item").forEach((item) => {
  item.addEventListener("click", () => {
    playSong(item);
  });
});

// Next song in “document order”
nextBtn.addEventListener("click", () => {
  let next = currentSong.nextElementSibling;
  if (!next) {
    let nextCol = currentSong.parentElement.nextElementSibling;
    if (nextCol) next = nextCol.querySelector(".song-item");
  }
  if (!next) {
    next = document.querySelector(".scrollContainer .song-item");
  }
  playSong(next);
});

// Previous song in “document order”
prevBtn.addEventListener("click", () => {
  let prev = currentSong.previousElementSibling;
  if (!prev) {
    let prevCol = currentSong.parentElement.previousElementSibling;
    if (prevCol) {
      const items = prevCol.querySelectorAll(".song-item");
      prev = items[items.length - 1];
    }
  }
  if (!prev) {
    const columns = document.querySelectorAll(".scrollContainer .songColumn");
    const lastColumn = columns[columns.length - 1];
    const items = lastColumn.querySelectorAll(".song-item");
    prev = items[items.length - 1];
  }
  playSong(prev);
});

// Autoplay next in same order
audio.addEventListener("ended", () => {
  let next = currentSong.nextElementSibling;
  if (!next) {
    let nextCol = currentSong.parentElement.nextElementSibling;
    if (nextCol) next = nextCol.querySelector(".song-item");
  }
  if (!next) next = document.querySelector(".scrollContainer .song-item");
  playSong(next);
});

// Volume control
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});

// Mute/unmute
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteBtn.src = isMuted ? "images/Mute.png" : "images/Speaker.png";
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek in song
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});