// TODO: Create a variable that selects the main element
let blogPosts = [];
const apiEndpoint = './api/blog.json';

async function getBlogPosts() {
try {
    
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch blog posts`);
    }
    const data = await response.json();
    blogPosts = data;
    displayBlogPosts(blogPosts);
} catch (error) {
    console.error ('fetchihng blog posts:', error);
}
}


function displayBlogPosts(blogPosts) {
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = '';

    posts.forEach((post) => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blogPost';
        blogPost.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>${post.author}</p>
        `;
        blogContainer.appendChild(blogPost);
    });
}
// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
