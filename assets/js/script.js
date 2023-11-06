
// Loads the header 
function loadHeader() {
    const headerContainer = document.getElementById('nav');
    fetch('assets/layout/header.html')
      .then(response => response.text())
      .then(data => {
        headerContainer.innerHTML = data;
      });
  }
  
  // Loads the footer
  function loadFooter() {
    const footerContainer = document.getElementById('copyright');
    fetch('assets/layout/footer.html')
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      });
  }
  
  // When page loads:
  document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer
    loadHeader();
    loadFooter();
  
  });

  
  