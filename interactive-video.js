const video = document.getElementById("myVideo");

// Function to play a specific clip based on user choice
function playClip(clip) {
    if (clip === 'clip1') {
        video.src = '1.mp4'; // Change source to clip 1
    } else if (clip === 'clip2') {
        video.src = '2.mp4'; // Change source to clip 2
    }
    video.play();
}