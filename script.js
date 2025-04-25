const controlBtn = document.getElementById('controlBtn');
const timerDisplay = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result');

let startTime;
let timer;
let isRunning = false;

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    timerDisplay.textContent = elapsedTime.toFixed(5);
}

function toggleGame() {
    if (!isRunning) {
        // 게임 시작
        isRunning = true;
        startTime = Date.now();
        timer = setInterval(updateTimer, 10);
        controlBtn.textContent = '멈춤';
        resultDisplay.textContent = '';
    } else {
        // 게임 멈춤
        clearInterval(timer);
        isRunning = false;
        
        const endTime = (Date.now() - startTime) / 1000;
        const difference = Math.abs(7 - endTime);
        
        if (difference < 0.00001) {
            resultDisplay.textContent = '축하합니다! 🎉';
        } else {
            resultDisplay.textContent = '다시 도전!';
        }
        
        controlBtn.textContent = '시작';
    }
}

controlBtn.addEventListener('click', toggleGame); 