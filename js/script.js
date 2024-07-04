const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sek = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

// new Date()  Komputerdagi vaqtni olib beradi
// getHours() - soatni olib beradi
// getMinutes() - minutni olib beradi
// getSeconds() - secundni olib beradi
function clock() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    sek.style.transform = "rotate(" + seconds * 6 + "deg)"
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    setTimeout(() => { clock() }, 1000);

    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minNum.innerHTML = minutes < 10 ? '0' + minutes : minutes
}
clock()

const tabsItem = document.querySelectorAll(".tabsItem"),
  tabsContentItem = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < tabsContentItem.length; j++) {
      tabsItem[j].classList.remove("active");
      tabsContentItem[j].classList.remove("active");
    }
    tabsItem[i].classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
}

const btn = document.querySelector(".stopwatch__btn"),
  btnH = document.querySelector('.stopwatch__hours'),
  btnM = document.querySelector('.stopwatch__minutes'),
  btnS = document.querySelector('.stopwatch__seconds'),
  tabSpan = document.querySelector('.tabsLink__span');

let stopwatchInterval;
let stopwatchRunning = false;

btn.addEventListener('click', () => {
  const currentText = btn.innerHTML.trim().toUpperCase();

  if (currentText === "START") {
    btn.innerHTML = "STOP";
    stopwatchRunning = true;
    startStopwatch();
    tabSpan.classList.add("active")
  } else if (currentText === "STOP") {
    btn.innerHTML = "CLEAR";
    stopwatchRunning = false;
    tabSpan.classList.add("active_clear")
    clearInterval(stopwatchInterval);
  } else if (currentText === "CLEAR") {
    btn.innerHTML = "START";
    btnH.innerHTML = "0";
    btnM.innerHTML = "0";
    btnS.innerHTML = "0";
    tabSpan.classList.remove("active_clear")
    tabSpan.classList.remove("active")
  }
});

function startStopwatch() {
    let hours = 0,
      minutes = 0,
      seconds = 0;
  
    stopwatchInterval = setInterval(() => {
      if (stopwatchRunning) {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        btnS.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        btnM.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        btnH.innerHTML = hours < 10 ? "0" + hours : hours;
      }
    }, 1000);
  }

// for (let i = 0; i < tabsItem.length; i++) {
//     tabsItem[i].addEventListener('click', (e) => {
//         e.preventDefault()
//         for (let j = 0; j < tabsItem.length; j++) {
//             tabsContentItem[j].classList.remove('active')
//             tabsItem[j].classList.remove('active')
//         }
//         tabsContentItem[i].classList.add('active')
//         tabsItem[i].classList.add('active')
//     })
// }