## Galería de Imágenes

Este es un simple proyecto de galería de imágenes que muestra una imagen principal y miniaturas debajo de ella para cambiar la imagen principal al hacer clic en las miniaturas correspondientes.

### Cómo funciona

1. **HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Imágenes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery">
        <img id="mainImage" src="img/img1.jpg" alt="Main Image">
        <div class="thumbnails">
            <img class="thumbnail" src="img/img1.jpg" alt="Thumbnail 1">
            <img class="thumbnail" src="img/img2.jpg" alt="Thumbnail 2">
            <img class="thumbnail" src="img/img3.jpg" alt="Thumbnail 3">
            <!-- Agrega más imágenes si lo deseas -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
- Este es el código HTML que define la estructura de la galería de imágenes.
- La imagen principal se muestra con la etiqueta `<img>` con el id `mainImage`.
- Las miniaturas se muestran dentro del `<div>` con la clase `thumbnails`, cada una como una etiqueta `<img>` con la clase `thumbnail`.
- Se hace referencia a un archivo CSS (`styles.css`) para los estilos y a un archivo JavaScript (`script.js`) para la funcionalidad.

2. **CSS (`styles.css`):**
```css
.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.thumbnails {
    margin-top: 10px;
}

.thumbnail {
    width: 100px;
    height: 100px;
    margin-right: 5px;
    cursor: pointer;
}

#mainImage {
    margin-top: 20px;
    max-width: 400px; /* Ajusta el tamaño máximo según sea necesario */
    height: auto;
}
```
- Este archivo CSS proporciona estilos básicos para la galería de imágenes.
- Define la disposición de la galería y el tamaño de las miniaturas y la imagen principal.

3. **JavaScript (`script.js`):**
```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos referencias a elementos HTML relevantes
    var mainImage = document.getElementById('mainImage');
    var thumbnails = document.querySelectorAll('.thumbnail');

    // Función para cambiar la imagen principal al hacer clic en una miniatura
    function changeMainImage(event) {
        var clickedImageSrc = event.target.src;
        mainImage.src = clickedImageSrc;
    }

    // Agregamos el evento de clic a cada miniatura
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', changeMainImage);
    });
});
```
- Este archivo JavaScript maneja la lógica de la galería de imágenes.
- Espera a que el DOM esté completamente cargado antes de ejecutar el código.
- Obtiene referencias a la imagen principal y todas las miniaturas.
- Define una función `changeMainImage(event)` que cambia la imagen principal cuando se hace clic en una miniatura.
- Agrega un evento de clic a cada miniatura para llamar a la función `changeMainImage` cuando se hace clic en ellas.

### Cómo iniciar el proyecto

1. Descarga los archivos HTML, CSS y JavaScript.
2. Coloca las imágenes que desees mostrar en la carpeta `img`.
3. Abre el archivo HTML (`index.html`) en un navegador web.

### Cómo puede ayudar este código a otros

Este código puede ser útil para cualquier persona que necesite implementar una galería de imágenes simple en su sitio web. Proporciona una base sólida para construir una galería más compleja, y al estar bien comentado y estructurado, es fácil de entender y personalizar para adaptarse a diferentes necesidades.
