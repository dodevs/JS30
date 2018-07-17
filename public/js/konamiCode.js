// ↑ ↑ ↓ ↓ ← → ← → B A

const codeSeq = "38384040373937396665";
const codeSeqLen = codeSeq.length;
let playerCodeSeq = [];
//let timeOut = 0;

const personagem = {
    name: 'Mario',
    vida: 1
}
//new Date().getTime() - timeOut <= 2000 && 
//map, reduce, filter, find, some, every
function comboDetector(ev){
    playerCodeSeq.push(ev.keyCode);
    playerCodeSeq.splice(-codeSeqLen - 1, playerCodeSeq.length - codeSeqLen);
    if(playerCodeSeq.join('').includes(codeSeq)){
        vidaInfinita();
    }
}

function vidaInfinita(){
    /*personagem.vida++;
    return vidaInfinita();*/
    console.log("Vida Infinita!!");
}

window.addEventListener('keydown', comboDetector);