const apiUrl = 'http://localhost/wordpress/wp-json/wp/v2/posts';

fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
        const postList = document.getElementById('post-list');

        // Loop through each post and create an HTML element for it
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title.rendered}</h2>
                <p>${post.content.rendered}</p>
            `;
            postList.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });