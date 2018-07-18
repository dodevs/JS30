const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //COntexto de renderização e suas funções
canvas.width = window.innerWidth; //Largura da area de desenho
canvas.heigth = window.innerHeight; //Altura da area de desenho
ctx.strokeStyle = '#BADA55'; //Cor do contorno
ctx.lineJoin = 'round'; //Para arredondar as 'ligações'
ctx.lineCap = 'round'; //Para arredondar as pontas
//ctx.globalCompositeOperation = 'lighter'; - efeito lixo

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; //Saturação
let direction = true;
let lineWidth = 1;

function draw(ev){
    if(!isDrawing) return;
    //console.log(ev);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath(); //Para poder iniciar o caminho
    ctx.moveTo(lastX, lastY); //Move para a ultima posicao do mouse
    ctx.lineTo(ev.offsetX, ev.offsetY); //Desenha linha até determinada posição
    ctx.stroke(); //Contorna o caminho que foi desenhado
    [lastX, lastY] = [ev.offsetX, ev.offsetY]; //Atribuição multipla
    hue <= 360? hue+=2: hue = 0; //Incrementa a variável

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (ev) => {
    isDrawing = true;
    [lastX, lastY] = [ev.offsetX, ev.offsetY];
}); //Se a tecla está pressionada
canvas.addEventListener('mouseup', () => isDrawing = false); //Se a tecla não está mais sendo pressionada
canvas.addEventListener('mouseout', () => isDrawing = false); //Se o ponteiro saiu da area