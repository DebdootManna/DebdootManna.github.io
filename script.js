document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    
    // Slow down the video playback
    video.playbackRate = 0.5;
    
    // Video crossfade logic
    video.addEventListener('ended', () => {
        video.classList.add('fade-out');
        setTimeout(() => {
            video.currentTime = 0;
            video.classList.remove('fade-out');
            video.play();
        }, 2000); // 2 seconds crossfade
    });
});