// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Instagram link handling - just set the href attribute
    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.setAttribute('href', 'https://instagram.com/riteshchauhan_15');
    }
    
    // GitHub link handling - just set the href attribute
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.setAttribute('href', 'https://github.com/ritesh-chauhan0x1');
    }
    
    // Make sure all feature items are immediately visible but the dropdown is closed
    const featureItems = document.querySelectorAll('.upcoming-features li');
    if (featureItems.length > 0) {
        featureItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        });
    }
    
    // Dropdown functionality
    const dropdownButton = document.getElementById('updates-dropdown');
    const dropdownContent = document.getElementById('dropdown-content');
    
    if (dropdownButton && dropdownContent) {
        // Set up click handler for the dropdown button
        dropdownButton.addEventListener('click', () => {
            // Toggle the dropdown content visibility
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
                dropdownButton.classList.remove('active');
            } else {
                dropdownContent.style.display = 'block';
                dropdownButton.classList.add('active');
            }
        });
        
        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.dropdown-button') && 
                !event.target.matches('.dropdown-button *') && 
                dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
                dropdownButton.classList.remove('active');
            }
        });
    }
});
