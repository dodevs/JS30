const triggers = document.querySelectorAll('a');
const triggersParent = document.querySelector('.triggersParent');

const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightlink(){
    /* getBoundingClientRect() retorna o tamanho do elemento e sua posição relativa ao viewport */
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    /* translate(x, y) reposiciona o elemento nas nas novas direções */
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

/* Improve performance */
triggersParent.addEventListener('mousemove', (e) => {
    if(e.target.tagName === "A"){
        highlightlink.call(e.target);
    }
});