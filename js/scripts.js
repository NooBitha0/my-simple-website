let slideIndex = 1;
let slideInterval; // Variable for auto-scrolling interval

// Initialize slideshow
showSlides(slideIndex);
startAutoScroll();

// Change slide based on button click
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoScroll(); // Reset interval on manual interaction
}

// Change slide based on dot click (if dots are added)
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoScroll(); // Reset interval on manual interaction
}

// Main function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Handle index overflow and underflow
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Start automatic scrolling
function startAutoScroll() {
    slideInterval = setInterval(() => {
        plusSlides(1); // Go to the next slide
    }, 3000); // 3-second interval
}

// Stop and restart automatic scrolling on interaction
function resetAutoScroll() {
    clearInterval(slideInterval); // Stop auto-scrolling
    startAutoScroll(); // Restart auto-scrolling
}



// Function to show only the selected section
function showOnly(sectionId) {
  // Hide all sections
  document.querySelectorAll('#main-content, .dynamic-section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the targeted section
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = 'block';
  }
}

// Event Listeners for Learn More buttons
document.querySelector('.btech').addEventListener('click', (e) => {
  e.preventDefault();
  showOnly('btech-projects'); // Show B.Tech Projects section
});

document.querySelector('.mtech').addEventListener('click', (e) => {
  e.preventDefault();
  showOnly('mtech-projects'); // Show M.Tech Projects section
});

// Event Listeners for Header/Footer Links
document.querySelectorAll('nav a, footer a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    showOnly('main-content'); // Return to the main content
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});


// Btech projects
document.querySelector('.btech-cse-project').addEventListener('click', (e) => {
  e.preventDefault();
  showOnly('cse-projects'); // Show only cse Projects section for both btech and mtech
});

// Mtech projects selected
document.querySelector('.mtech-cse-project').addEventListener('click', (e) => {
  e.preventDefault();
  showOnly('cse-projects'); // Show only cse Projects section for both btech and mtech
});

document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(link.href, '_blank');
  });
});