const BASE_URL = "data/data.json";

export const getData = async () => {
    try{

        //L'API Fetch (recuperer en anglais) fournit une interfase Javascript pour acceder et manipuler des donnees
        //fetch() ici envoi une requete a partir d'une URL dans le fichier data.json afin de recuperer son contenu.
        //L'operateur await permet d'attendre le resomution d'une promesse. Il ne peut etre utilise qu'au sein d'une fonction asynchrone
        // Si la requete est bien effectue et bien termine, le status est a 200
        const response = await fetch(BASE_URL);
        // console.log(responce);
        // console.log(responce.json());
        return response.json();
    } catch (error){
        return new Error("Quelque chose ne va pas.")
    }
}

export const getPeintres  = async () => {
    const data = await getData();
    return data;
}

export const getTableauxByPeintre = async () => {
    // console.log('getTableauxByPeintre');
    //permet de recuperer dans l'url les parametres de recherche lorcsque l'on clique sur un lien d'un peintre (ex: ,peintre=Picasso)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let peintre = urlParams.get("peintre");
    const datas = await getData();

    // console.log(peintre);
    // console.log(datas);
    let data;

    if(!peintre){
        // console.log(datas);
        // console.log(object.keys(datas)[0]);
        // console.log('pas de params dans url');
        
        //Object.keys (datas) : permet de recuperer tout les indices de l'objet datas (['Picasso','Van Gogh']...)
        const index = Object.keys(datas)[0]; // recupere le premier indice de l'objet datas
        data = datas[index];
        // peintre = Caillebotte
        peintre = index;
    }

    for (const key in datas) {
        if(key === peintre){
            console.log('key : ' + key);
            console.log('peintre : ' + peintre);
            // data = datas[Van gogh]
            data = datas[key];
        }
    }

    // switch(peintre){
    //     case 'Picasso':
    //         data = datas.Picasso;
    //         break;
    //      case 'Caillebotte':
    //         data = datas.Caillebotte;
    //         break;
    //     case 'Vermeer':
    //         data = datas.Vermeer;
    //         break;
    //      case 'Kandinsky':
    //         data = datas.Kandinsky;
    //         break;
    //     case 'Monet':
    //         data = datas.Monet;
    //         break;
    //     case 'Van Gogh':
    //         data = datas.Van_Gogh;
    //         break;
    //     default:
    //         data = datas.Picasso
    // }

    // console.log(data)
   
    //Оператор ?? в JavaScript называется оператором нулевого слияния (nullish coalescing operator). Он используется для задания значения по умолчанию в случае, если левый операнд является null или undefined.
    return {
        name: peintre,
        data: data.tableaux
    }
}