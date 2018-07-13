const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const myHeaders = new Headers();
myHeaders.append("Content-Type","text/plain");

 //Retorna uma promisse
fetch(endpoint, {
    method: 'get',
    headers: myHeaders
})
.then(blob => blob.json())
.then(data => cities.push(...data)) //Spread operator, passas os itens do array como parametro

function findMatches(search, cities){
    return cities.filter(place => {
        const regex = new RegExp(search, "gi"); //`gi` são as flags utilizadas
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map( place => {
        return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    });
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);