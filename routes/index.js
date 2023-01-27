const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressBooks' });
  //Ver carpeta express curso para importar json
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add' });
});

module.exports = router;
