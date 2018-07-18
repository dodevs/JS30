const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
let aulas = [];

const directoryPath = path.join(__dirname,'/views');
fs.readdir(directoryPath, function(err, files){
    if (err){
        return console.log('Unalble to scan direcoty: '+err);
    }
    files.forEach((file) => {
        if(file.includes('.html')) aulas.push(file.slice(0, file.indexOf('.html')));
    })
})

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('/:page', function(request, response){
    response.sendFile(__dirname + `/views/${request.params.page}.html`);
});
app.get('/', function(request, response){
    response.render('index', { aulas: aulas});
    
})

app.listen(3000,function(){
    console.log("Servidor de pé!");
});