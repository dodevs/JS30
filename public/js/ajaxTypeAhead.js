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

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function addToSuggestion(searchResult){
    let citstLi = document.createElement('li');
    citstLi.textContent = searchResult.city;
    suggestions.appendChild(citstLi);
}

searchInput.addEventListener('input', function(ev){
    let serachText = ev.target.value;
    if(serachText.length > 0){
        suggestions.innerHTML = '';
        let results = findMatches(serachText, cities);
        results.forEach( result => {
            addToSuggestion(result);
        });
    }else{
        suggestions.innerHTML = '';
    }
})