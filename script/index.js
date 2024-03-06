// get the button element
const button = document.getElementById('rulesButton');
// get the image element
const image = document.getElementById('imageToShow');

//event listener

button.addEventListener('click', function() {
    if (image.style.display === 'none') {
        image.src = '../image/rules-image.png';
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
})