// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark');
    saveModeToLocalStorage(isDarkMode);
  }

  function saveModeToLocalStorage(isDarkMode) {
    localStorage.setItem('isDarkMode', isDarkMode);
  }

  function applyModeToLocalStorage() {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  document.addEventListener(`DOMContentLoaded`, function(){
    applyModeToLocalStorage();
  });

// TODO: Create functions to read and write from local storage
