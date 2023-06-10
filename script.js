const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");

const today = new Date().toISOString().split("T")[0];

let title = "";
let date = "";

// set date
dateEl.setAttribute("min", today);

function updateCountdown(e) {
  e.preventDefault();
  title = e.srcElement[0].value;
  date = e.srcElement[1].value;
  console.log(title, date);
}

// get countdown title and date
countdownForm.addEventListener("submit", updateCountdown);
