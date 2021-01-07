  
const express = require('express');
const nunjucks = require('nunjucks');


const todo = require('./routes/todo');

const app = express();
const port = 3000;



nunjucks.configure('template', {
    autoescape: true,
    express: app
});


app.use('/uploads', express.static('uploads'));


app.get('/',function(req,res){
    res.render('index.html');
});

// Routing
app.use('/todo', todo);
 

app.listen( port, () => {
    console.log('Express listening on port', port);
});