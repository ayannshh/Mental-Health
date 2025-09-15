document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    const DURATION = 400;

    function switchForms(hideForm, showForm) {
        hideForm.classList.add('fade-out');
        
        setTimeout(() => {
            hideForm.classList.add('hidden');
            hideForm.classList.remove('fade-out');

            showForm.classList.remove('hidden');
        }, DURATION);
    }

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForms(loginForm, signupForm);
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForms(signupForm, loginForm);
    });
});