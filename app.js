let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended :true}));


let buzzwords = require('./routes');
app.use('/buzzwords', buzzwords);

app.listen(PORT, (err) => {
  console.log('Server running on port: ' + PORT);
});

//Each time the player scores a new word the total increases by the point value.


