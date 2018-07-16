const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id:2039842 },
    { text: 'Ramen is my fav food ever', id: 123523},
    { text: 'Nice Nice Nice!', id: 542328}
];

// Some and Every checks
//Array.prototype.some() // is at last one person 19 or older?
const some19orOlder = people.some(people => (
    (new Date().getFullYear() - people.year) >= 19
));
console.log(some19orOlder);

//Array.prototype.every() // is everyone 19 or older?
const every19orOlder = people.every(people => {
    return (new Date().getFullYear() - people.year) >= 19
});
console.log(every19orOlder);

//Array.prototype.find()
// Find é como o filter, mas retorna apenas a primeira ocorrencia do que vc esta procurando
// Find the comment with the ID of 823423
const commentID = comments.find(comment => (comment.id === 823423));
console.log(commentID);

//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with ID of 823423
const commentIndex = comments.findIndex(comment => (comment.id === 823423 ));
// comments.splice(commentIndex,1); - deleta

// slice - retorna a fatia do array
const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex+1)
]