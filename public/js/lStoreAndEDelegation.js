const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const handlers = {
  startListeners: () => {
    addItems.addEventListener('submit', addItem);
    itemsList.addEventListener('change', toggleDone);
  },
  startFunctions: () => {
    populateLis(itemsList, items);
  }
};

function addItem(ev){
  ev.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, /* shorthand property name. Equivale a text: text */
    done: false
  };

  items.push(item);
  populateLis(itemsList, items);
  storeItems(items);
  /* this é o form */
  this.reset(); /* reset() restaura os valores padroes do formulário */
}

/* plates é a lista de items e tem uma array vazio com valor padrão */
/* platesList é o elemento HTML onde será populado */
function populateLis(platesList, plates = []){
  platesList.innerHTML = plates.map( (plate, i) => {
    /* Retorna um string unica com todos os `li` gerados */
    return `
      <li>
        <input type="checkbox" id="item${i}" data-index=${i} ${plate.done ? 'checked': ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(ev){
  //if (!ev.target.matches('input')) return;
  const item = ev.target;
  items[item.dataset.index].done = item.checked;
  storeItems(items);
}

function storeItems(items){
  const stringifiedItems = JSON.stringify(items);
  localStorage.setItem('items', stringifiedItems);
}

handlers.startListeners();
handlers.startFunctions();