const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/:page', function(request, response){
    response.sendFile(__dirname + `/views/${request.params.page}.html`);
});

app.listen(3000,function(){
    console.log("Servidor de pé!");
});