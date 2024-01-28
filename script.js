document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.recipe-links a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior
          fetchRecipeContent(this.getAttribute('href')); // Fetch and display content
      });
  });
});

function fetchRecipeContent(href) {
  fetch(href)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
      })
      .then(html => {
          document.getElementById('recipe-content').innerHTML = html;
      })
      .catch(error => {
          console.error('Error fetching recipe:', error);
          document.getElementById('recipe-content').innerHTML = `<p>Error loading recipe.</p>`;
      });
}

