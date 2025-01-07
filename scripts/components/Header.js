export const Header = (datas) => {
    let navLink = "";
    for (let key in datas) {
        key = key.replace(/_/g, ' ');
        navLink += `
        <li class="nav__item">
                <a href="?peintre=${key}" class="nav__link" data-peintre="${key}">${key}</a>
            </li>
        `;
    }

    // Добавляем обработчик бургер-меню через JavaScript
    setTimeout(() => {
        const burgerIcon = document.querySelector('.icone__burger');
        const nav = document.querySelector('.nav');

        burgerIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Выделяем активную ссылку
        activeNavLink();
    }, 0);

    return `
        <header class="header">
            <div class="header__logo">
                <a href="index.html" class="header__link__logo">
                    <img src="assets/logos/logo-art-peinture.png" alt="" class="logo">
                </a>
                <h1 class="header__title">Les Artistes Peintres</h1>
            </div>
            <i class="fa-solid fa-bars icone__burger"></i>
            <nav class="nav">
                <ul class="nav__list">
                    ${navLink}
                </ul>
            </nav>
        </header>
    `;
};

export const activeNavLink = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('peintre');
    // console.log(window.location)
    // console.log(queryString)
    // console.log(param)

    let selector = '[data-peintre= "' + param + '"]';

    //on entre dans la condition que le cas ou l'indice ?peintre n'est pas definit , cest a dire premier chargement de la page on selectionne le premier lien de la nav
    if(!param) selector = '.nav__link'

    const activeLink = document.querySelector('[data-peintre="' + param + '"]');
    activeLink.classList.add('activeLink');
    // console.log(activeLink);
}