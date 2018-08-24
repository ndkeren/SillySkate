var express = require('express');
var router  = express.Router();

var debt = require('./debt');

router.get('/', function (req, res) { 
  // TODO:: Move to TPL
  res.send('Usage :: <br> GET /add?from=NAME_FROM&to=NAME_TO&amount=XXX <br> GET /read?name=NAME <br> GET /settle');
})

router.get('/add', function (req, res) {
	
  if(!req.query.from || !req.query.to || !req.query.amount) {
	  res.json({ success: false, err: 'Missing parameters check :: from,to,amount' });
	  return;
  }
	
  if(debt.add(req.query.from, req.query.to, req.query.amount)) {
	res.json({ success: true, op: 'add', from: req.query.from, to: req.query.to, amount: req.query.amount });
  } else {
	res.json({ success: false, err: 'Unspecified error..' });
  }	  
	
  res.send();
  
});

router.get('/read', function (req, res) {
  res.json(debt.read(req.query.name));
});

router.get('/settle', function (req, res) {
  res.send(debt.settle());
});

module.exports = router;