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
  res.send(req.body.params);
  console.log({'buzzwords' : buzzArr })

});

//POST localhost:3000/buzzwords
router.post('/:id', (req,res) => {

     console.log(buzzArr.length);

    if(req.body.buzzWord === req.params.id) {
      //return false if buzzword obj already exists
      return res.send({ 'success' : false});
    }else{
      //create new buzzWord Object
      req.body.buzzword = req.params.id + "";
      req.body.points = 0;
      req.body.heard = false;

      buzzArr.push(req.body);

      return res.json(req.body);
      console.log({ 'success' : true });

    }

});

//PUT localhost:3000/buzzwords/1
router.put('/:id', (req, res) => {

  let obj = buzzArr[buzzArr.length - 1];
  obj.heard = true;

  res.json(buzzArr);
});


router.delete('/:id', (req,res) => {
  //delete specific buzz word
});

router.post('/reset', (req, res) => {
  //resets
});

module.exports = router;