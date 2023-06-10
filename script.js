const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");

const countdownContainer = document.getElementById("countdown");
const countdownTitle = document.getElementById("countdown-title");
const timeElements = document.querySelectorAll("span");

const countdownBtn = document.getElementById("countdown-button");

const today = new Date().toISOString().split("T")[0];

let title = "";
let date = "";
let countdownTime = Date;
let countdownActive;

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = hour * 24;

function updateDOM() {
  if (date === "") {
    alert("Please enter a date");
    return;
  }
  countdownActive = setInterval(() => {
    countdownTitle.textContent = `Countdown for ${title}`;
    const now = new Date().getTime();
    const distance = countdownTime - now;
    // calculate days,hours,minutes and seconds
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    timeElements[0].textContent = days;
    timeElements[1].textContent = hours;
    timeElements[2].textContent = minutes;
    timeElements[3].textContent = seconds;

    // hide countdown form
    inputContainer.hidden = true;
    // show countdown
    countdownContainer.hidden = false;
  }, second);
}

// set date
dateEl.setAttribute("min", today);

function updateCountdown(e) {
  e.preventDefault();
  title = e.srcElement[0].value;
  date = e.srcElement[1].value;
  countdownTime = new Date(date).getTime();
  updateDOM();
}

function resetCountdown() {
  // clear interval
  clearInterval(countdownActive);
  // hide countdown display
  countdownContainer.hidden = true;
  // show countdown form
  inputContainer.hidden = false;

  // clear title and date
  title = "";
  date = "";
}

// get countdown title and date
countdownForm.addEventListener("submit", updateCountdown);
// reset countdown
countdownBtn.addEventListener("click", resetCountdown);
