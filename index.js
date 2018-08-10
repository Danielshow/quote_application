const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongojs = require('mongojs');
const db = mongojs('customerapp', ['users']) //name od collection and database

const app = express();

//View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//Body Parser middleware Documentation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Set Static Path to inpute our jquery, css, html pages
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  render("I am in")
})

app.listen(3000, () => {
  console.log('Server started on Port 3000...');
})
