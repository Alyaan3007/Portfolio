document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typingText = document.querySelector('.typing-text');
const words = ["Web Developer", "Web Designer", "Front-End Developer" , "Back-End Developer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
    if (wordIndex >= words.length) {
        wordIndex = 0;  // Loop back to first word after the last word
    }

    currentWord = words[wordIndex];

    if (isDeleting) {
        // Remove one character at a time
        typingText.innerHTML = currentWord.slice(0, letterIndex);
        letterIndex--;

        // If word is deleted completely, move to the next word
        if (letterIndex < 0) {
            isDeleting = false;
            wordIndex++;
            setTimeout(typeEffect, 500);  // Add delay before typing new word
            return;
        }
    } else {
        // Type one character at a time
        typingText.innerHTML = currentWord.slice(0, letterIndex + 1);
        letterIndex++;

        // If the word is fully typed out, wait and start deleting
        if (letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);  // Wait before deleting
            return;
        }
    }

    // Speed of typing and deleting
    const speed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, speed);
}

// Start the typing effect when the page loads
window.onload = function () {
    typeEffect();
};
