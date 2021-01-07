  
const express = require('express');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

// app.get('/', (req,res) => {
//     res.send('express start');
// });


// Routing
app.use('/admin', admin);
 


app.get('/',function(req,res){
      res.render('index.html');
 });


app.listen( port, () => {
    console.log('Express listening on port', port);
});