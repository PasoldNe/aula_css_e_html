function toggleMode() {
    const htmlElement = document.documentElement;

htmlElement.classList.toggle('light');

const img = document.querySelector('.profile-image img');
if (htmlElement.classList.contains('light')) {
    img.setAttribute('src', './assets/profile-light.png');
} else {
    img.setAttribute('src', './assets/profile-dark.png');
}
}
