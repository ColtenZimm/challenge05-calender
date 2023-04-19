// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
const calendar = document.getElementById('calendar');
const eventForm = document.getElementById('event-form');

let events = JSON.parse(localStorage.getItem('events')) || {};

function displayMonth() {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  const heading = document.createElement('h2');
  heading.textContent = `${month} ${year}`;
  calendar.appendChild(heading);
}

function generateDates() {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.unshift('');
  }
  while (dates.length % 7 !== 0) {
    dates.push('');
  }
  const table = document.createElement('table');
  const daysOfWeek = ['Sun']
};

