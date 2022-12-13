var express = require('express');
var router = express.Router();
const semaine=['Dimanche', 'Lundi', 'Mardi','Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
var j=new Date().getDay();
var date=semaine[j];
var h=new Date().getHours()
var min= new Date().getMinutes();
var sec= new Date().getSeconds();

router.get('*', function(req, res, next) {
   if (j<=5 && j>=1 && h>=9 && h<=17){
    next()
   }
  else{
    res.render('ferme', {date:date, heure:h, min:min }); 
  }
 
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});
router.get('/contacts', function(req, res, next) {
  res.render('contacts');
});
module.exports = router;
