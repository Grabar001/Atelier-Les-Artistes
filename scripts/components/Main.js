
export const Main = (datas) => {
    const datasTableauxByPeintre = datas;
    // console.log(datasTableauxByPeintre);

    const displayGalery = () => {

        //rendu : <div class="block__animation"></div>
        //Cette element html contient l'ensemblee de la galerie (h2, toute la galerie)
        const blockAnimation = document.createElement('div');
        blockAnimation.classList.add('block__animation');

        //on genere le titre <h2> de la galerie(ex : Galerie Monet)
        const peintureTitle = document.createElement('h2');
        peintureTitle.classList.add('peinture__title');
        peintureTitle.innerHTML = `Galerie ${datasTableauxByPeintre.name}`;

        //on injecte comme enfant le titre <h2> au blockAnimation global
        blockAnimation.appendChild(peintureTitle);

        //on geneere une div contenant toute les cards de la galerie
        const peintureContent = document.createElement('div');
        peintureContent.classList.add('peinture__content');

        //on boucle les tableaux recuperer dans le fichier data.json et on genere une card <figure> par tour de boucle, la boucle tourne autant de fois qu'il y'a de tableauxx pour le peintre
        datasTableauxByPeintre.data.forEach(tableau => {

            //creation de la balise <figure>
            const card = document.createElement('figure');
            card.classList.add('card');

             //creation de la balise <img>
            const picture = document.createElement('img');
            picture.classList.add('peinture__picture');

            //on definit l'atrribut alt de l' <img> avec le nom du peintre et le nom de l'image
            picture.setAttribute('alt', `${datasTableauxByPeintre.name} : ${tableau}`);
            //on definit la source de l'image assets/images/monet/images.png
            picture.src = `assets/images/${datasTableauxByPeintre.name}/${tableau}`;

            //creation de la balise <figuretion> pour la legend de l'image
            const legend = document.createElement('figcaption');
            legend.classList.add('card__legend');

            //split() : fonction qui permet de separer les elements d'un chaine de caractere via un separateur (ici le '.') et  place chaque element separes dans un tableau Array
            const textLegend = tableau.split('.')[0].replace(/[_-]/g, " ")
            legend.innerText = textLegend;


            //on affecte come enfant a chaque card l'image et la legende
            card.appendChild(picture);
            card.appendChild(legend);

            //on affecte comme enfant l'ensemble des cards au block peintureContent
            peintureContent.appendChild(card);
        });


        //on affecte l'ensemble des elements HTML generes (h2, cards ...) au block global blockAnimation
        blockAnimation.appendChild(peintureContent);
        blockAnimation.classList.add('animationBounce');


        //outerHTML permet de convertir l'objet HTML element blockAnimation en html
        return blockAnimation.outerHTML;
    }
    

    
    return `
    <main class="main">
            <section class="main__presentation">
                <img src="assets/banner/img_baniere.png" alt="peinture banniere" class="banner">
                <div class="presentation__content">
                    <h2 class="presentation__title">Ce que nous faisons</h2>
                    <p class="presentation__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum mollitia repellat natus commodi non cum iusto eligendi aliquam eos, maxime exercitationem dolore labore possimus ab ratione, saepe veritatis deserunt sint porro provident. Reprehenderit non facere ducimus dolores ab similique odit, facilis quae natus nihil, at eius explicabo dicta molestiae maxime.</p>
                </div>
            </section>
            <section class="galery">
                <aside class="galery__nav">
                    <ul class="galery__nav__list">
                        <li class="galery__nav__item">
                            <a href="" class="galery__nav__link">Nos production</a>
                        </li>
                        <li class="galery__nav__item">
                            <a href="" class="galery__nav__link">Qui sommes nous</a>
                        </li>
                        <li class="galery__nav__item">
                            <a href="" class="galery__nav__link">Notre philosiphie</a>
                        </li>
                        <li class="galery__nav__item">
                            <a href="" class="galery__nav__link">Nous contacter</a>
                        </li>
                    </ul>
                </aside>
                <section class="peinture"> 
                ${displayGalery()}   
                </section>
            </section>
        </main>
    `;

    
}