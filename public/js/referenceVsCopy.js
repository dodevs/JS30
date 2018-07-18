// start with strings, numbers and booleans
//Numbers
//let age = 200;
//let age2 = age;
//console.log(age, age2);
//age = 100;
//console.log(age, age2);
//Numbers

//Strings
//let name = "Julio";
//let name2 = name;
//console.log(name, name2);
//name = "Junior";
//console.log(name, name2);
//Strings

//Booleans
//let bool = true;
//let bool2 = bool;
//console.log(bool, bool2);
//bool = false;
//console.log(bool, bool2);
//Boolean
//Numeros, Strings e Booleans são passados como cópia, ocupando um novo endereço de memoria;

// ------- 

// Let's say we have an array
//const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
//let team = players;
//console.log(players, team);
//team[3] = "Lux";
// Ao alterar o array `team` é alterado também o array players, pois `team` faz referencia ao mesmo

//Alternativa
//let team = [...players]; //ES6
//let team = [].concat(players); //Concatenando
//let team = players.slice(); //Pegando uma cópia
//let team = Array.from(players) //Cria uma nova instancia do array passado

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
//const captain = person;
//captain.number = 99;

// how do we take a copy instead?
// Inicia um objeto vazio, objeto a ser copiado, modificações
const cap2 = Object.assign({}, person, { number: 99, age: 12});

// We will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. 
//lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}
console.clear();
console.log(wes);

//Aqui há um problema com o nível de profundidade, é copiado apenas o 
//primeiro nível, o segundo ainda é mantido como referencia
const dev = Object.assign({}, wes);

//Solução pobre, sem desempenho, transforma o objeto em string e em objeto novamente;
const dev2 = JSON.parse(JSON.stringify(wes));