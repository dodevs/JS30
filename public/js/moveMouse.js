const hero = document.querySelector(".hero");
const text = hero.querySelector("h1"); //Faz a query no elemento ja retirado
const walk = 20; //100px

function shadowMove(e){
    // Atribuiçao via desestruturação
    // width = hero.offsetWidth | height = hero.offsetHeight
    const { offsetWidth: width, offsetHeight: height} = hero;
    // A mesma forma de atribuição da de cima
    let { offsetX: x, offsetY: y } = e;
    //this = div e e.target = h11
    //this é o elemento alvo do listener
    //e.target pode ser seu elemento filho
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //Math.round retorna a parte inteira do valor passado
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 10px rgba(250, 76, 236, 1),
        ${xWalk * -1}px ${yWalk}px 10px rgba(99.6%, 100%, 0%, 1),
        ${yWalk}px ${xWalk * -1}px 10px rgba(3.6%, 100%, 0%, 1),
        ${yWalk * -1}px ${xWalk}px 10px rgba(0%, 81.7%, 100%, 1)`;
}

hero.addEventListener('mousemove', shadowMove);