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

//about section
// Accordion Functionality
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle "active" class on clicked button
    button.classList.toggle("active");

    // Get the associated content panel
    const content = button.nextElementSibling;

    // Toggle the max-height of the content panel
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand
    }
  });
});


// Enquiry form
const form = document.getElementById("enquiryForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    formError.style.display = "none";

    const requiredFields = ["name", "phone", "email"];
    let isValid = true;

    requiredFields.forEach(id => {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
            isValid = false;
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    } else {
        formError.style.display = "block";
    }
});

// enquiry projects selected
document.querySelector('.contact-button').addEventListener('click', (e) => {
  e.preventDefault();
  showOnly('enquire-projects'); // Show only cse Projects section for both btech and mtech
});