var express = require('express');
var router = express.Router();
const semaine=['Dimanche', 'Lundi', 'Mardi','Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
var j=new Date().getDay();
var date=semaine[j];
var h=new Date().getHours();
var hstring=h.toString();
var min= new Date().getMinutes();
var minstring=min.toString();
var minstring1="0"+minstring;
var sec= new Date().getSeconds();
var totalsec=(h*60*60)+(min*60)+sec;

router.get('*', function(req, res, next) {
   if (j<=5 && j>=1 && totalsec>=(9*60*60) && totalsec<=(17*60*60)){
    next()
   }
  else if (min<10){
    res.render('ferme', {date:date, heure:hstring, min:minstring1 }); 
  }
  else {
    res.render('ferme', {date:date, heure:hstring, min:minstring }); 
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
