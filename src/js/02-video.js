import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const SAVED_TIME_STAMP = 'videoplayer-current-time';

const iframeOnPage = document.querySelector('iframe');
const videoPlayer = new Player(iframeOnPage);

//змінна яка бере в себе часову мітку з локального сховища (через функцію яка повертає цю мітку)
const lastCurrentTime = getTimeStampFromLocalStorage();

// встановлюємо відео плеєру місце отаньої зупинки
videoPlayer.setCurrentTime(lastCurrentTime);

// відстежування події timeupdate та виклик функції отримання часової мітки, кожної секунди
videoPlayer.on('timeupdate', throttle(getCurrentTimeStamp, 1000));

// функція отримує часову мітку від відео плеєра та викликає функію запису в локальне сховище
function getCurrentTimeStamp() {
    videoPlayer.getCurrentTime().then(function (seconds) {
        putTimeStampToLocalStorage(seconds);
    })
}

// функція заносить часову мітку в локальне сховище з ключем videoplayer-current-time
function putTimeStampToLocalStorage(currentTime) {
    localStorage.setItem(SAVED_TIME_STAMP, currentTime);
}

// функція отримує останню часову мітку з локального сховища
function getTimeStampFromLocalStorage() {
    const savedTimeStamp = localStorage.getItem(SAVED_TIME_STAMP);

    if (savedTimeStamp) {
        return savedTimeStamp;
    } else {
        return 0;
    }
}