const inputContainer = document.getElementById("input-container");
const inputForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");

const today = new Date().toISOString().split("T")[0];

// set date
dateEl.setAttribute("min", today);
