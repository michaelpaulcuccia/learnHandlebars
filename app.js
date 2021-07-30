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
    res.render('home', { title: 'Home'});
});

app.get('/about', function (req, res) {
    res.render('about', { 
        title: 'About', 
        name: 'Michael-Paul Cuccia',
        boolVal: true,
        otherBoolVal: false,
        arr: [
            'react', 
            'next',
            'gatsby',
            'handlebars',
            'javascript'
        ],
        data: {
            machine: 'MacBook',
            size: 13,
            doYouLike: true
        },
        list: [
            {items: ['cat', 'hat', 'bat']},
            {items: ['car', 'bar', 'far']}
        ]
    });
});

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`App listening on Port: ${PORT}`);
});