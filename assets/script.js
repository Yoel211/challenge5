// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#time-display');
var saveButtonEl = $('#save-btn');
var storageInput = document.querySelector('.storage');
var text = document.querySelector('.text');
var storedInput = localStorage.getItem('textinput')
var currentHour = dayjs().hour();

// Saving to local storage
var saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.text)
}

if (storageInput) {
    text.text = storedInput
}

// Adding eventListener for storageInput

storageInput.addEventListener('input', letter => {
    text.text = letter.target.value
});

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


// (---------------------------------------------)

// set a for loop to chang colors each hour.


for (let index = 9; index < 18 ; index++) {
    const hour = $('#hour-' + index)

    if ( index < currentHour) {
        hour.addClass('past')
    }
    if ( index == currentHour) {
        hour.addClass('present') 
    }
    if (index > currentHour) {
        hour.addClass('future')
    }
    
}

  displayTime();
  setInterval(displayTime, 1000);
  saveButtonEl.on('click', saveToLocalStorage)
  dayjs().hour(12);
