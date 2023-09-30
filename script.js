const apiUrl = 'http://goodfoodmood0.wordpress.com/wp-json/wp/v2/posts';
console.log('JavaScript code is running.');

fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
        const postList = document.getElementById('post-list');

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


    
const recipeSearchInput = document.getElementById('recipeSearch');
const recipeSections = document.querySelectorAll('.post');


recipeSearchInput.addEventListener('input', () => {
  const searchTerm = recipeSearchInput.value.toLowerCase();

  
  recipeSections.forEach(section => {
    const recipeTitle = section.querySelector('h2').textContent.toLowerCase();
    if (recipeTitle.includes(searchTerm)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});



