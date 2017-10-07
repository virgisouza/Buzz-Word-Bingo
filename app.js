let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/buzzwords', (req,res) => {
  res.send({'buzzwords' : []})
});

app.listen(PORT, (err) => {
  console.log('Server running on port: ' + PORT);
});



//Buzz word obj
// {
//   buzzWord: String,
//   points: Number
//   heard: false
// }