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

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.top-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current section in view
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
