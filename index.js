const automateToggle = document.querySelector(".checkbox-automate");
const automateContainer = document.querySelector(".switch-container-automate");
const hideToggle = document.querySelector(".checkbox-hide");
const inputValue = document.querySelector(".number");
const inputBlock = document.querySelector(".value-container");
const progressContainer = document.querySelector(".progress-container");
const progressCircle = document.querySelector(".progress-circle");
const progressText = document.querySelector(".progress-text");

// Отображение показателей на круге
function updateProgress(value) {
    const progress = (value / 100) * 360;
    progressCircle.style.setProperty("--progress", `${progress}deg`);
}

inputValue.addEventListener("input", (e) => {
    let value = e.target.value.trim(); 
    if (!value) {
        value = 0; // Если поле пустое,  значение = 0
    } else {
        value = Math.max(0, Math.min(100, parseInt(value)));
        if (isNaN(value)) {
            value = 0; // Если значение NaN, оно 0
        }
    }

    inputValue.value = value; 
    updateProgress(value); 
});



//действия скрытия и отображения круга и 2 полей
hideToggle.addEventListener("click", (e) => {
    progressContainer.classList.toggle("hidden");
    inputBlock.classList.toggle("hidden");
    automateContainer.classList.toggle("hidden");
    progressText.classList.toggle("hidden");
});


// блок анимации

let automateInterval = null;
let progressValue = 0; 

// Обработчик 
automateToggle.addEventListener("change", () => {
    if (automateToggle.checked) {
        startAnimation();
    } else {
        stopAnimation();
    }
});

// Запуск анимации
function startAnimation() {
    stopAnimation();

    automateInterval = setInterval(() => {
        progressValue += 5; // 5 градусов прогресса за шаг
        if (progressValue >= 360) {
            progressValue = 0; 
        }
        progressCircle.style.setProperty("--progress", `${progressValue}deg`); 
    }, 30); // Интервал 30 мс
}

// Прерывание анимации
function stopAnimation() {
    clearInterval(automateInterval); 
    progressValue = 0; 
    progressCircle.style.setProperty("--progress", "0deg"); 
}