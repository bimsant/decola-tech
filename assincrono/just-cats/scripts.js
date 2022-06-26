const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL); 
        const json = await data.json();

        return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat'); 
    catImg.src = await getCats(); //Chama a função getCats para mudar a imagem.
};

CAT_BTN.addEventListener('click', loadImg); //Quando o botão é clicado, carrega a função loadImg e o gato muda.

 loadImg(); //Quando abrir a página já começa carregando uma imagem.