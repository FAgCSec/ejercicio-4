# Galería de Imágenes

Este proyecto consiste en una simple galería de imágenes implementada en HTML, CSS y JavaScript. Permite al usuario ver una imagen principal y seleccionar entre diferentes miniaturas para cambiar la imagen principal.

## Contenido del Proyecto

El proyecto consta de tres archivos principales:

1. `index.html`: Contiene la estructura HTML de la galería de imágenes.
2. `styles.css`: Define los estilos CSS para la galería y sus elementos.
3. `script.js`: Contiene el código JavaScript que maneja la funcionalidad de la galería.

## Detalles del Código

### Archivo `index.html`

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
            <!-- Se pueden agregar más imágenes aquí -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Archivo `styles.css`

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

### Archivo `script.js`

```javascript
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
```

## Iniciando el Proyecto

1. Clona o descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Verás la galería de imágenes, donde puedes hacer clic en las miniaturas para cambiar la imagen principal.

## Potencial de Utilidad

Este proyecto puede ser útil para aquellos que necesiten implementar una galería de imágenes básica en sus sitios web. Proporciona una estructura simple y fácil de entender que puede ser personalizada y ampliada según las necesidades específicas del proyecto.
