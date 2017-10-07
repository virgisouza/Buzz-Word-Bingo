let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended :true}));


app.get('/buzzwords', (req,res) => {
  res.send({'buzzwords' : []})
});

app.post('/buzzword', (req,res) => {
  res.send({ 'success' : true });

  let buzzword = req.body.buzzword,
      points = req.body.points
});

app.put('/buzzword', (req, res) => {
  res.send({ 'success' : true, newScore : Number});

  // let buzzword = req.body.buzzword,
  //     heard = boolean

});

// var b = bodyParser.urlencoded();
// console.log(b);

let buzzwords = require('./routes');
app.use('/buzzwords', buzzwords);

app.listen(PORT, (err) => {
  console.log('Server running on port: ' + PORT);
});



//Buzz word obj
// {
//   buzzWord: String,
//   points: Number
//   heard: false
// }