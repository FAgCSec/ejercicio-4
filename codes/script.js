// Obtenemos referencias a elementos HTML relevantes
var mainImage = document.getElementById('mainImage');
var thumbnails = document.querySelectorAll('.thumbnail');

// Función para cambiar la imagen principal al hacer clic en una miniatura
function changeMainImage(event) {
    mainImage.src = clickedImageSrc;
}var clickedImageSrc = event.target.src;
    

// Agregamos el evento de clic a cada miniatura
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', changeMainImage);
});
