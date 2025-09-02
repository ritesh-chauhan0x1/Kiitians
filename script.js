// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle animation effect to the message box
    const messageBox = document.querySelector('.message-box');
    setTimeout(() => {
        messageBox.style.transform = 'scale(1.02)';
        setTimeout(() => {
            messageBox.style.transform = 'scale(1)';
        }, 200);
    }, 1000);

    // Instagram link handling
    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.setAttribute('href', 'https://instagram.com/riteshchauhan_15');
        
        // Add click tracking if needed
        instagramLink.addEventListener('click', (e) => {
            console.log('Instagram link clicked');
            // You could add analytics tracking code here if needed
        });
    }
    
    // GitHub link handling
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.setAttribute('href', 'https://github.com/ritesh-chauhan0x1');
        
        // Add click tracking if needed
        githubLink.addEventListener('click', (e) => {
            console.log('GitHub link clicked');
            // You could add analytics tracking code here if needed
        });
    }

    // Add a typing effect to the upcoming message
    const upcomingText = document.querySelector('.upcoming p');
    const text = upcomingText.textContent;
    upcomingText.textContent = '';
    
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            upcomingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start the typing effect after a delay
    setTimeout(typeWriter, 1500);
});
