export const openLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox__content">
            <button id="lightbox__prev" class="lightbox__nav lightbox__prev">&lt;</button>
            <img id="lightbox__image" src="" alt="" class="lightbox__image">
            <button id="lightbox__next" class="lightbox__nav lightbox__next">&gt;</button>
            <button id="lightbox__close" class="lightbox__close">X</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const closeButton = document.getElementById('lightbox__close');
    const prevButton = document.getElementById('lightbox__prev');
    const nextButton = document.getElementById('lightbox__next');
    const lightboxImage = document.getElementById('lightbox__image');

    let images = []; // Массив всех изображений
    let currentIndex = 0; // Индекс текущего изображения

  
     // Открыть Lightbox
     const openLightbox = (imageSrc, imageList) => {
        images = imageList; // Сохраняем список всех изображений
        currentIndex = images.indexOf(imageSrc); // Находим индекс текущего изображения
        if (currentIndex === -1) currentIndex = 0; // Если изображения нет в списке
        lightboxImage.src = imageSrc; // Устанавливаем текущее изображение
        lightbox.classList.add('open'); // Показываем Lightbox
    };

    // Показать предыдущее изображение
    prevButton.addEventListener('click', () => {
        if (images.length > 0) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex];
        }
        console.log(prevButton);
    });

    // Показать следующее изображение
    nextButton.addEventListener('click', () => {
        if (images.length > 0) {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex];
        }
    });

   

      // Закрыть Lightbox
      closeButton.addEventListener('click', () => {
        lightbox.classList.remove('open');
    });

    return openLightbox;
};