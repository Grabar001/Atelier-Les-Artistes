import { getPeintres, getTableauxByPeintre } from "../utils/Api.js";
import { Header, activeNavLink } from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Footer } from "../components/Footer.js";
import { openLightbox } from "../utils/Lightbox.js";

const displayData = (datas, dataTableauxByPeintre) => {
    const body = document.querySelector('body');

    // Добавляем основную структуру страницы
    body.innerHTML = `
        <div class="container">
            ${Header(datas)}
            ${Main(dataTableauxByPeintre)}
            ${Footer()}
        </div>
    `;

    // Активируем навигацию
    activeNavLink();

    // Инициализируем Lightbox после загрузки страницы
    initializeLightbox();
};

// Инициализация Lightbox с обработчиками событий
const initializeLightbox = () => {
    const openLightboxInstance = openLightbox();

    // Сохраняем ссылки на все изображения галереи
    const images = Array.from(document.querySelectorAll('.peinture__picture')).map(img => img.src);

    if (images.length === 0) {
        console.error("No images found in the gallery.");
        return;
    }

    // Добавляем обработчики кликов на изображения
    document.querySelectorAll('.peinture__picture').forEach((image) => {
        image.addEventListener('click', () => {
            openLightboxInstance(image.src, images); // Открываем Lightbox с текущим изображением и списком
        });
    });
};

// Асинхронная загрузка данных и отображение страницы
(async () => {
    try {
        const dataTableauxByPeintre = await getTableauxByPeintre();
        const datas = await getPeintres();

        // Отображаем данные на странице
        displayData(datas, dataTableauxByPeintre);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();