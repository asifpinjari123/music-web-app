const audioPlayer = document.getElementById("audio-player");
const playlist = document.getElementById("playlist");

const songs = [
    { name: "Song 1", src: "song1.mp3" },
    { name: "Song 2", src: "song2.mp3" },
    { name: "Song 3", src: "song3.mp3" },
    // Add more songs here
];

songs.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.addEventListener("click", () => playSong(song));
    playlist.appendChild(li);
});

function playSong(song) {
    audioPlayer.src = song.src;
    audioPlayer.play();
}

audioPlayer.addEventListener("ended", () => {
    // Automatically play the next song when the current song ends (optional)
    const nextSong = playlist.querySelector(`li:nth-child(${Array.from(playlist.children).indexOf(document.querySelector("li.active")) + 2})`);
    if (nextSong) {
        nextSong.click();
    }
});
