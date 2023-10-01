

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://goodfoodmood0.wordpress.com/wp-json/wp/v2/pages';

    // Function to create page links
    function createPageLinks(pages) {
        const menuDropdown = document.getElementById('menu-dropdown');

        if (pages.length === 0) {
            menuDropdown.innerHTML = '<option value="">No pages found</option>';
        } else {
            menuDropdown.innerHTML = '<option value="">Select a page</option>';
            pages.forEach(page => {
                const option = document.createElement('option');
                option.value = page.link;
                option.textContent = page.title.rendered;
                menuDropdown.appendChild(option);
            });
        }
    }

    // Fetch pages from the WordPress API and populate the dropdown menu
    fetch(apiUrl)
        .then(response => response.json())
        .then(pages => {
            createPageLinks(pages);
        })
        .catch(error => {
            console.error('Error fetching pages:', error);
        });

    // Handle dropdown menu change
    menuDropdown.addEventListener('change', (event) => {
        const selectedPageUrl = event.target.value;

        if (selectedPageUrl) {
            // If a page is selected, navigate to the URL
            window.location.href = selectedPageUrl;
        }
    });
});

