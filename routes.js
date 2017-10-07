let express = require('express');
let router = express.Router();

let buzzArr = []

//this contains everything in the /buzzword route

//returns buzzWord JSon big Object at /buzzwords uri
router.get('/', (req, res) => {
  res.json({'buzzwords' : buzzArr });
})

//GET localhost:3000/buzzwords/1
router.get('/:id', (req,res) => {
  res.send(req.params.id);
  console.log('send json object for id')

});

//POST localhost:3000/buzzwords
router.post('/:id', (req,res) => {


  // for(var i = 0; i< buzzArr.length; i++) {
  //   console.log(buzzArr.length);

    if(req.body.buzzWord === req.params.id) {
      //return false if buzzword obj already exists
      res.send({ 'success' : false});
      console.log('BuzzWord already created! Try Again.');
    }else{
      //create new buzzWord Object

      req.body.buzzword = req.params.id + "";
      req.body.points = 0;
      req.body.heard = false;

      buzzArr.push(req.body);

      res.send({ 'success' : true });
      console.log(req.body);

      res.end('new buzzWord obj created and added to array')


    //}
  }
});

//PUT localhost:3000/buzzwords/1
router.put('/:id', (req, res) => {

  console.log(req.body);

  res.send({ 'success' : true, newScore : 0});
});


router.delete((req,res) => {
  res.send('deleted!')
  });

module.exports = router;