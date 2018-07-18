const hero = document.querySelector(".hero");
const text = hero.querySelector("h1"); //Faz a query no elemento ja retirado
const walk = 100; //100px

function shadowMove(e){
    // Atribuiçao via desestruturação
    const { offsetWidth: width, offsetHeigth: height} = hero;
    let { offsetX: x, offsetY: y } = e;
    //this = div e e.target = h1
    //this é o elemento alvo do listener
    //e.target pode ser seu elemento filho
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadowMove);