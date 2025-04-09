// JavaScript to capture click events and page views
const bangalore = document.getElementById('bangalore');
const photoDiv = document.getElementById('photo-div');

bangalore.addEventListener('click', () => {
    if (photoDiv.style.display === 'none') {
        photoDiv.style.display = 'block';
    } else {
        photoDiv.style.display = 'none';
    }
});
// Function to log events
function logEvent(eventType, eventObject) {
    const timestamp = new Date().toISOString();
    console.log(`Timestamp: ${timestamp}, Type: ${eventType}, Event Object: ${eventObject}`);
}

// Capture click events
document.addEventListener('click', function(event) {
    const eventObject = event.target.tagName.toLowerCase();
    logEvent('click', eventObject);
});

// Capture page views (on load)
window.addEventListener('load', function() {
    logEvent('view', 'page');
});
