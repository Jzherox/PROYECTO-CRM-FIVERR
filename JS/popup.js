document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var loginPopup = document.getElementById('loginPopup');
    var closeBtn = document.querySelector('.close');
    var regBtn = document.querySelector('.register');

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    regBtn.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
});
