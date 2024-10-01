document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    
    // Add event listeners for troubleshooting
    video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
    });
    
    video.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
    });
    
    // Slow down the video playback
    video.playbackRate = 0.5;
    
    // Video crossfade logic
    video.addEventListener('ended', () => {
        video.classList.add('fade-out');
        setTimeout(() => {
            video.currentTime = 0;
            video.classList.remove('fade-out');
            video.play();
        }, 2000);
    });
});