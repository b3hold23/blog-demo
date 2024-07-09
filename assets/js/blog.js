const blogContainer = document.getElementById('blogContainer');

let blogPosts = [];
const apiEndpoint = './api/blogPosts.json';

async function getBlogPosts() {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to get blog posts`);
        }
        const data = await response.json();
        blogPosts = data;
        displayBlogPosts(blogPosts);
    } catch (error) {
        console.log(error);
    }
}

function displayBlogPosts(blogPosts) {
    blogContainer.innerHTML = '';

    blogPosts.forEach((blogPost) => {
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');
        blogPostElement.innerHTML = `
            <h2>${blogPost.title}</h2>
            <blockquote>${blogPost.content}</blockquote>
            <p>Posted by: ${blogPost.username}</p>
        `;
        blogContainer.appendChild(blogPostElement);
    });

    if (blogPosts.length === 0) {
        displayNoPostsMessage();
    }
}

function displayNoPostsMessage() {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No posts found.';
    blogContainer.appendChild(messageElement);
}

getBlogPosts();
