const clockEl = document.getElementById('clock');

const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const amSpan = document.getElementById('am-span');
    const pmSpan = document.getElementById('pm-span');

    if (hours > 12) {
        hours -= 12;
        pmSpan.style.display = 'flex';
    } else {
        amSpan.style.display = 'flex';
    }

    const hTime = hours.toString().padStart(2, '0');
    const mTime = minutes.toString().padStart(2, '0');
    const sTime = seconds.toString().padStart(2, '0');

    const hElement = document.getElementById('hours');
    const mElement = document.getElementById('minutes');
    const sElement = document.getElementById('seconds');

    hElement.textContent = hTime;
    mElement.textContent = mTime;
    sElement.textContent = sTime;
}

updateTime();
setInterval(updateTime, 1000);
