let express = require('express');
let router = express.Router();


//GET localhost:3000/buzzwords
router.get('/buzzwords', (req, res) => {
  res.send('buzzwords json object')
});

//GET localhost:3000/buzzwords/1
router.get('/:id', (req,res) => {
  res.send('each little buzz word object on bug json object')
});

//POST localhost:3000/buzzwords
router.post('/buzzwords', (req,res) => {
  res.send('creating a dude')
});

//PUT localhost:3000/buzzwords/1
router.put('/:id', (req, res) => {
  res.send('updated a dude');
});

module.exports = router;