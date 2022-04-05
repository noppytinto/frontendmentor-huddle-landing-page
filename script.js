
const registerButton = document.querySelector('.main__btn-register');
const socialLinks = document.querySelectorAll('.main__share-link');

registerButton.addEventListener('click', (ev) => {
    console.log('register button clicked');
})

socialLinks.forEach(link => {
    link.addEventListener('click', ev => {
        ev.preventDefault();
    });
});