// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


const cardPages = {
    "The Sun": "the_sun.html",
    "The Star": "the_star.html",
    "The Spider": "the_spider.html",
    "The Phoenix": "the_phoenix.html",
    "The End": "the_end.html",
    "The Goddess": "the_goddess.html",
    "The Moon": "the_moon.html",
    "The Horror": "the_horror.html",
    "The Guardian": "the_guardian.html",
    "The Facade": "the_facade.html",
    "Benevolence": "benevolence.html",
    "Anathema": "anathema.html",
    "The Tempest": "the_tempest.html",
    "The Priest": "the_priest.html",
    "The Lovers": "the_lovers.html",
    "The Emperor": "the_emperor.html",
    "Mayura": "mayura.html",
    "The Curse": "the_curse.html",
    "The Architect": "the_architect.html",
    "Oneiros": "oneiros.html",
    "Error" : "unknown.html",
    "Melancholia": "melancholia.html",
    "La Llorona": "la_llorona.html",
    "Khronos": "khronos.html",
    "Eos": "eos.html",
    "Arachne": "arachne.html"
};

document.querySelectorAll('.image-container').forEach((container) => {
    const img = container.querySelector('img');
    const altText = img.alt; // Use the 'alt' attribute to identify the card

    container.addEventListener('mousedown', (event) => {
        const pageUrl = cardPages[altText]; // Get the URL based on the card name

        if (pageUrl) {
            if (event.button === 0) {
                // Left click
                window.location.href = pageUrl;
            } else if (event.button === 1) {
                // Middle click
                window.open(pageUrl, '_blank'); // Open in a new tab
            }
        } else {
            console.error(`No page mapped for: ${altText}`);
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-gallery img');

    // Preload all images so they are ready for hover interaction
    images.forEach(image => {
        const img = new Image();
        img.src = image.src; // Preload image
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-gallery img');

    images.forEach(image => {
        image.onload = () => {
            image.classList.add('loaded');  // Add 'loaded' class to trigger fade-in
        };

        // If the image is already cached, trigger the onload event
        if (image.complete) {
            image.onload();
        }
    });
});


// Select the Reveal All button
const revealAllButton = document.getElementById('reveal-all');

// Add event listener for button click
revealAllButton.addEventListener('click', function () {
    // Select all image-container elements
    const cards = document.querySelectorAll('.image-gallery .image-container');

    // Check if any card is currently revealed
    const isRevealed = [...cards].some(card => card.classList.contains('revealed'));

    if (isRevealed) {
        // If already revealed, bring back the covers
        cards.forEach(card => card.classList.remove('revealed'));
        revealAllButton.textContent = 'Reveal'; // Update button text
    } else {
        // If not revealed, reveal all cards
        cards.forEach(card => card.classList.add('revealed'));
        revealAllButton.textContent = 'Conceal'; // Update button text
    }
});