const toggleButton = document.querySelector('.toggle-button');

let redirectURL = '';

const redirectPage = () => {
  redirectURL = url;
  location.assign(url);
};

const toggleTheme = () => {
  let theme, moonColor;

  if (mode === 'light') {
    theme = '☀️';
    moonColor = '#ffb100';
  } else {
    theme = '🌒';
    moonColor = '#8570a5';
  }

  toggleButton.textContent = theme;

  document.body.classlist = mode;

  document.documentElement.style.setProperty('--moon-color', moonColor);
};

const toggleMode = () => {
  const mode = themeMode();

  let newMode;
  if (mode === 'light') {
    newMode = 'dark';
  } else {
    newMode = 'light';
  }

  applyMode(newMode);

  saveMode(newMode);
};

const getMode = () => {
  const mode = localStorage.getItem('mode') || 'dark';

  return mode;
};

const saveTheme = (mode) => {
  localStorage.setItem('mode', mode);
};

const storeLocalStorage = (data) {
  const allBlogs = readLocalStorage();

  allBlogs.push(data);

  const stringData = JSON.stringify(allBlogs);

  localStorage.setItem('blogs', stringData);
};

applyMode(getMode());

toggleButton.addEventListener('click', toggleMode);
