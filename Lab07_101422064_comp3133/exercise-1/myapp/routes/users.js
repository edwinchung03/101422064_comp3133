var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(`First name: ${req.body.firstName}`)
  console.log(`Last name: ${req.body.lastName}`)
  res.send(`Post received!`);
})

router.use(bodyParser.urlencoded({extended: true}))

module.exports = router;
