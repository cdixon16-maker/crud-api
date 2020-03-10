var express = require('express');
var router = express.Router();
const DAL = require('../Controller/dataaccesslayer')
/* GET home page. */
router.get('/books', function(req, res) {
  DAL.getAllBooks(req, res);
});

router.get('/book/:id', function(req, res) {
  DAL.getBook(req, res);
});
router.post('/book', function(req, res) {
  DAL.addBook(req, res);
});
router.delete('/book/:id', function(req, res) {
  DAL.deleteBook(req, res);
});
router.put('/book/:id', function(req, res) {
  DAL.updateBook(req, res);
});


module.exports = router;
