function debounce(fn, milissegundos) {
    let timer = 0; //nenhum timeout definido
    return () => {
        clearTimeout(timer); //Elimina o timout antigo
        timer = setTimeout(fn, milissegundos); //Cria um novo timeout
    }
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(){
    sliderImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageButton = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
    })
};

window.addEventListener('scroll', debounce(checkSlide,20));