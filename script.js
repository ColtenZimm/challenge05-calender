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

const currentDayHeading = document.getElementById('current-day');
const timeBlocksContainer = document.getElementById('time-blocks-container');
const businessHoursStart = 9; // 9am
const businessHoursEnd = 17; // 5pm

function displayCurrentDay() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDay = now.toLocaleDateString('en-US', options);
  currentDayHeading.textContent = currentDay;
}

function createHourBlock(hour) {
  const hourBlock = document.createElement('div');
  hourBlock.classList.add('hour-block');
  hourBlock.textContent = `${hour}:00`;
  return hourBlock;
}

function displayTimeBlocks() {
  for (let hour = businessHoursStart; hour <= businessHoursEnd; hour++) {
    const hourBlock = createHourBlock(hour);
    timeBlocksContainer.appendChild(hourBlock);
  }
}

displayCurrentDay();
displayTimeBlocks();

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    // Add more time blocks if user has scrolled down
    for (let hour = businessHoursEnd + 1; hour <= businessHoursEnd + 3; hour++) {
      const hourBlock = createHourBlock(hour);
      timeBlocksContainer.appendChild(hourBlock);
    }
  }
});



const currentDayHeading = document.getElementById('current-day');
const timeBlocksContainer = document.getElementById('time-blocks-container');
const businessHoursStart = 9; // 9am
const businessHoursEnd = 17; // 5pm

function displayCurrentDay() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDay = now.toLocaleDateString('en-US', options);
  currentDayHeading.textContent = currentDay;
  }

function createHourBlock(hour) {
  const hourBlock = document.createElement('div');
  hourBlock.classList.add('hour-block');
  hourBlock.textContent = `${hour}:00`;

  const eventInput = document.createElement('input');
  eventInput.type = 'text';
  eventInput.classList.add('event-input');

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.classList.add('save-button');
  saveButton.addEventListener('click', function() {
    const eventText = eventInput.value;
    localStorage.setItem(`event-${hour}`, eventText);
  });

  const savedEventText = localStorage.getItem(`event-${hour}`);
  if (savedEventText) {
    eventInput.value = savedEventText;
  }

  hourBlock.appendChild(eventInput);
  hourBlock.appendChild(saveButton);

  return hourBlock;
}

function displayTimeBlocks() {
  for (let hour = businessHoursStart; hour <= businessHoursEnd; hour++) {
    const hourBlock = createHourBlock(hour);
    timeBlocksContainer.appendChild(hourBlock);
  }
}

displayCurrentDay();
displayTimeBlocks();

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    // Add more time blocks if user has scrolled down
    for (let hour = businessHoursEnd + 1; hour <= businessHoursEnd + 3; hour++) {
      const hourBlock = createHourBlock(hour);
      timeBlocksContainer.appendChild(hourBlock);
    }
  }
});
