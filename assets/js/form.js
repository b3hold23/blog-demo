// TODO: Create a variable that selects the form element
const blogForm = document.querySelector('#blogForm');

blogForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  console.log(`username: ${username}, title: ${title}, content: ${content}`);

  if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
    alert('Please complete the form');
    return;
  } 
  saveFromData(username, title, content);
  redirectPage(redirectURL);
});

function saveFromData(username, title, content) {
  const formData = {
    username: username,
    title: title,
    content: content
  };  
  
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('formData', formDataJSON);
}


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
let redirectURL = './blog.html';

function redirectPage(url) {
  location.assign(url);
}