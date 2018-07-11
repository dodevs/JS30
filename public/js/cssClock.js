const palito_segundo = document.querySelector(".palito-segundo");
const palito_minuto = document.querySelector(".palito-minuto");
const palito_hora = document.querySelector(".palito-hora");

function starTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    let h_degrees = ((h/12) * 360 ) + ((m/60) * 30) + 90;
    let m_degrees = ((m/60) * 360 ) + ((s/60) * 6) + 90;
    let s_degrees = ((s/60) * 360) + 90;

    palito_hora.style.transform = `rotate(${h_degrees}deg)`;
    palito_minuto.style.transform = `rotate(${m_degrees}deg)`;
    palito_segundo.style.transform = `rotate(${s_degrees}deg)`;
}
function mexerPalito(){
    setInterval(this.starTime, 1000);
}

mexerPalito();