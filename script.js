document.addEventListener('DOMContentLoaded', () => {
  // Toggle Recipe Details
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
      card.addEventListener('click', () => {
          card.classList.toggle('expanded');
      });
  });

  // Update Recipe of the Day
  const recipes = ['Kebabs', 'Chicken Tikka', 'Chicken Biryani'];
  const recipeOfTheDay = recipes[Math.floor(Math.random() * recipes.length)];
  document.getElementById('recipe-of-the-day').textContent = recipeOfTheDay;
});
