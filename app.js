const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')

const app = express();

app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout')
    //otherwise will default to a 'layouts' folder
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`App listening on Port: ${PORT}`);
});