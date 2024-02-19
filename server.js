const express = require('express');

const app = express();
const path  = require('path');

const studentDb = require('./data/student-db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.redirect('/students');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/students', function(req, res){
    const students = studentDb.getAll();
    res.render('students/index', { students }); 
});

app.listen(3000, function() {
    console.log('3000!');
});