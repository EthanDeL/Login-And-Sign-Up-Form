document.addEventListener('DOMContentLoaded', function() {
    const showLoginLink = document.getElementById('showLoginLink');
    const showSignUpLink = document.getElementById('showSignUpLink');
    const loginSection = document.getElementById('loginSection');
    const signUpSection = document.getElementById('signUpSection');

    function switchSections(hideSection, showSection) {
        hideSection.classList.add('hidden');
        showSection.classList.remove('hidden');
        showSection.classList.add('fade-in');
        // Remove the fade-in class after animation ends
        showSection.addEventListener('animationend', function() {
            showSection.classList.remove('fade-in');
        }, { once: true });
    }

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        switchSections(signUpSection, loginSection);
    });

    showSignUpLink.addEventListener('click', function(event) {
        event.preventDefault();
        switchSections(loginSection, signUpSection);
    });
});
