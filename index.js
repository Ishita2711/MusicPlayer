const img = document.querySelector('img')
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const music = document.querySelector("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [
    {
        name: "Closer",
        title: "Closer",
        artist: "The Chainsmoker",
    },
    {
        name: "Different world",
        title: "Different world",
        artist: "Alan Walker",
    },
    {
        name: "Rang sharbto ka",
        title: "Rang sharbto ka",
        artist: "Atif Aslam & Chinmayi",
    },
    {
        name: "Saiyaara",
        title: "Saiyaara",
        artist: "Mohit Chauhan & Tarannum Malik",
    },
];

let isPlaying = false;
// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.style.display = "none";
    pause.style.display = "inline";
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.style.display = "inline";
    pause.style.display = "none";
    img.classList.remove("anime");
};
play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

pause.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

// changing music 
const loadSong = (songs) => {
    artist.innerText = songs.artist;
    title.innerText = songs.title;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "img/" + songs.name + ".jpg";
};
songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    if (isPlaying) {
        music.play();
    }
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    if (isPlaying) {
        music.play();
    }
};
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);