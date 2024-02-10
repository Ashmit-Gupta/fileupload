document.addEventListener('DOMContentLoaded', function() {
    let home = document.querySelector('#home');
    let h11 = document.querySelector('.h12');

    if (home) {
        home.addEventListener('click', () => {
            window.location.href = 'index2.html';
        });
    }

    if (h11) {
        h11.addEventListener('click', () => {
            window.location.href = 'index.html';
            console.log("hello");
        });
    }

});

function startCountdown(countdownDuration, endTime, timerClass) {
    // If endTime is null or undefined, set a new end time
    if (!endTime) {
        // Check if end time is stored in localStorage
        let storedEndTime = localStorage.getItem(`${timerClass}-endTime`);
        if (storedEndTime) {
            endTime = parseInt(storedEndTime);
        } else {
            endTime = new Date().getTime() + countdownDuration; // Current time + countdown duration
            localStorage.setItem(`${timerClass}-endTime`, endTime); // Store the end time in localStorage
        }
    }

    // Update the countdown every second
    let timerInterval = setInterval(function() {
        // Get the current time
        let currentTime = new Date().getTime();

        // Calculate the time remaining
        let timeRemaining = endTime - currentTime;

        // Check if the countdown has ended
        if (timeRemaining <= 0) {
            // Clear the interval and display a message when the countdown ends
            clearInterval(timerInterval);
            document.querySelector(timerClass).innerText = "Countdown ended!";
            localStorage.removeItem(`${timerClass}-endTime`); // Remove the end time from localStorage
            return; // Exit the function to stop further execution
        }

        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown timer in the specified format
        document.querySelector(timerClass).innerText = `${days} days : ${hours} hr : ${minutes} min : ${seconds} s`;
    }, 1000); // Update every second
}

// Start or continue the countdown for each card when the page loads
window.onload = function() {
    startCountdown(60 * 24 * 60 * 60 * 1000, null, ".timer");
    startCountdown(20 * 24 * 60 * 60 * 1000, null, ".timer2"); // Start a countdown of 20 days for card 2
    startCountdown(10 * 24 * 60 * 60 * 1000, null, ".timer3"); // Start a countdown of 10 days for card 3
};
document.addEventListener('DOMContentLoaded', function() {
    // Add your DOMContentLoaded event listeners here, if any
});

// Function to move to the next slide automatically
function nextSlide() {
    counter++;
    if (counter > slidesContainer.children.length - 4) {
        counter = 0;
    }
    updateSlidePosition();
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const slidesContainer = document.querySelector('.slides');

// Set the initial position to show 4 images
let counter = 0;
const slideWidth = document.querySelector('.slide').clientWidth;

// Calculate the width of all slides combined
const totalSlidesWidth = slideWidth * slidesContainer.children.length;
// Set the width of the slides container to accommodate all slides
slidesContainer.style.width = `${totalSlidesWidth}px`;

// Update slide position function
function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    counter++;
    if (counter > slidesContainer.children.length - 4) {
        counter = 0;
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slidesContainer.children.length - 4;
    }
    updateSlidePosition();
});
