// CHANGE TYPE PASSWORD //

document.addEventListener('DOMContentLoaded', () => {
    const togglePasswords = document.querySelectorAll('.password-toggle');

    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input[type="password"], input[type="text"]');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            this.classList.toggle('ri-eye-off-line');
            this.classList.toggle('ri-eye-line');
        });
    });
});

