function debounce(fn, milissegundos) {
    let timer = 0; //nenhum timeout definido
    return () => {
        clearTimeout(timer); //Elimina o timout antigo
        timer = setTimeout(fn, milissegundos); //Cria um novo timeout
    }
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(){
    sliderImages.forEach(sliderImage => {
        //Metade do caminho através da imagem
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        //Distancia do topo da imagem em relação a tela
        const imageBotton = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNotScrolledPast = window.scrollY < imageBotton;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }
    })
};

window.addEventListener('scroll', debounce(checkSlide,20));