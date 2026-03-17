let timeElements = document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer span');
let totalSeconds = 0;
timeElements.forEach(el => {
    let timeText = el.innerText.trim();
    if(timeText) {
        let parts = timeText.split(':').reverse();
        let seconds = parseInt(parts[0]) || 0;
        let minutes = parseInt(parts[1]) || 0;
        let hours = parseInt(parts[2]) || 0;
        totalSeconds += seconds + (minutes * 60) + (hours * 3600);
    }
});
let h = Math.floor(totalSeconds / 3600);
let m = Math.floor((totalSeconds % 3600) / 60);
let s = totalSeconds % 60;
console.log(`%cTotal Watch Time: ${h} hours, ${m} minutes, ${s} seconds`, 'font-size: 20px; color: #00ff00;');
