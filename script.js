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
    
    // Make sure all feature items are immediately visible
    const featureItems = document.querySelectorAll('.upcoming-features li');
    if (featureItems.length > 0) {
        featureItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        });
    }
});
