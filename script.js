document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.getElementById('profile-links')
    
    buttonNames = ['GitHub', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Instagram']
    
      for (let i = 0; i < buttonNames.length; i++) {
        const button = document.createElement('button')
        button.textContent = buttonNames[i]
        button.classList.add('button-link')
        profileLinks.appendChild(button)
      }
    
});
    