const weddingDate = new Date('2024-02-17T00:00:00');

function updateCountdown() {
  const now = new Date();
  const timeDiff = weddingDate - now;

  if (timeDiff <= 0) {
    // Wedding date has passed
    document.getElementById('countdown').innerHTML = "<p>countdown to our wedding</p>";
  } else {
    // Calculate remaining time
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display countdown
    document.getElementById('countdown').innerHTML = `<p>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</p>`;
    document.getElementById('days').innerText += days;
    document.getElementById('hours').innerText += hours;
    document.getElementById('minutes').innerText += minutes;
    document.getElementById('seconds').innerText += seconds;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();