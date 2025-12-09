// === Library Player ===

// Player elements
const audio = document.getElementById("player");
const songImg = document.querySelector(".music-info img");
const songName = document.querySelector(".music-info .songname");

const prevBtn = document.querySelector(".music-controls button:nth-child(1)");
const playBtn = document.querySelector(".music-controls button:nth-child(2) img");
const nextBtn = document.querySelector(".music-controls button:nth-child(3)");

const muteBtn = document.querySelector(".mute-btn img");
const volumeSlider = document.querySelector(".volume-control input");
const progressBar = document.querySelector(".progress-bar");

let isPlaying = false;
let isMuted = false;

// === Select all songs in the library ===
const songs = document.querySelectorAll(".song-row");
let currentIndex = -1;

// Play selected song
function playSong(index) {
  const item = songs[index];
  const title = item.querySelector(".song-title").textContent;

  currentIndex = index;
  songs.forEach((s) => {
    s.style.background = "";
    const t = s.querySelector(".song-title");
    if (t) t.style.color = "";
    const others = s.querySelectorAll(".song-artist, .song-views");
    others.forEach((sp) => (sp.style.color = ""));
  });

  // Apply style
  item.style.background = "rgba(66, 38, 68, 0.25)";
  const currTitle = item.querySelector(".song-title");
  if (currTitle) currTitle.style.color = "#FF6FB3";
  const currOthers = item.querySelectorAll(".song-artist, .song-views");
  currOthers.forEach((sp) => (sp.style.color = "#7c1443ff"));

  // Update audio source
  audio.src = `../../../../../songs/LibraryPage/songs/allsongs/${title}.mp3`;
  audio.play();
  isPlaying = true;
  playBtn.src = "../../../../../images/Pause.png";
  songImg.src = item.querySelector("img").src;
  songName.textContent = title;
}

// Toggle play/pause
function togglePlay() {
  if (currentIndex === -1) return;

  if (isPlaying) {
    audio.pause();
    playBtn.src = "../../../../../images/Play.png";
  } else {
    audio.play();
    playBtn.src = "../../../../../images/Pause.png";
  }
  isPlaying = !isPlaying;
}

document
  .querySelector(".music-controls button:nth-child(2)")
  .addEventListener("click", togglePlay);

// click on songs
songs.forEach((item, i) => {
  item.addEventListener("click", () => {
    playSong(i);
  });
});

// Next Song
nextBtn.addEventListener("click", () => {
  if (currentIndex === -1) return;

  currentIndex++;
  if (currentIndex >= songs.length) currentIndex = 0;

  playSong(currentIndex);
});

// Previous Song
prevBtn.addEventListener("click", () => {
  if (currentIndex === -1) return;

  currentIndex--;
  if (currentIndex < 0) currentIndex = songs.length - 1;

  playSong(currentIndex);
});

// Auto play next
audio.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex >= songs.length) currentIndex = 0;

  playSong(currentIndex);
});

// Volume slider
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});

// Mute toggle
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;

  muteBtn.src = isMuted ? "../../../../../images/Mute.png" : "../../../../../images/Speaker.png";
});

// Progress bar update
audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek in song
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Select the "Play All" button
const playAllBtn = document.querySelector(".playall-btn");

// When clicked, play the first song
playAllBtn.addEventListener("click", () => {
  if (songs.length > 0) {
    playSong(0);
  }
});
