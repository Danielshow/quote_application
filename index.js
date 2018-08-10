const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongojs = require('mongojs');
const db = mongojs('todoDatabase', ['users']) //name od collection and database
const ObjectId = mongojs.ObjectId;

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

app.get('/', (req, res) => {
  db.users.find((err, docs) => {
    res.render("index", {
      makersname: "DanielShow",
      user: docs
    })
  })
})

app.post('/', (req, res) => {
  let newUser = {
    name: req.body.name,
    quote: req.body.textarea
  }
  db.users.insert(newUser, (err, docs) => {
    if (err) {
      console.log("Error")
    }
    res.redirect('/')
  });
})

// app.delete('/users/delete/:id', (req, res)=>{
//   db.users.remove({_id: ObjectId(req.params.id)}, (err, result)=>{
//     if (err){
//       console.log(err)
//     }
//     res.redirect('/')
//   })
// })



app.listen(3000, () => {
  console.log('Server started on Port 3000...');
})
