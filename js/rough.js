
/*
// Dynamic Content Loading

//btech page
document.querySelector('.service-card .btech').addEventListener('click', async (e) => {
  e.preventDefault();

  const response = await fetch('btech-projects.html');
  const content = await response.text();

  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = content;

  // Smooth scroll to the new section
  document.getElementById('btech-projects').scrollIntoView({
    behavior: 'smooth'
  });
});

//mtech page
document.querySelector('.service-card .mtech').addEventListener('click', async (e) => {
  e.preventDefault();

  const response = await fetch('mtech-projects.html');
  const content = await response.text();

  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = content;

  // Smooth scroll to the new section
  document.getElementById('btech-projects').scrollIntoView({
    behavior: 'smooth'
  });
});
*/