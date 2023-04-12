/** Display of date and time */

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();


  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]} 
  ${date.getDate()} 
  ${MONTHS[date.getMonth()]} 
  ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


function infoBtn() {
  document.getElementById("infoDrop").classList.toggle("infoDrop_show");
}

function educationBtn() {
  document.getElementById("educationDrop").classList.toggle("educationDrop_show")
}

function workBtn() {
  document.getElementById("workDrop").classList.toggle("workDrop_show")
}

function skillsBtn() {
  document.getElementById("skillsDrop").classList.toggle("skillsDrop_show")
  document.getElementById("skillsDrop").classList.toggle("flex-right")
}

function characterBtn() {
  document.getElementById("characterDrop").classList.toggle("characterDrop_show")
}

