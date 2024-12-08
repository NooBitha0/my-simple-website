//SLIDE SHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
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