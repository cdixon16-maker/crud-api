var express = require('express');
var router = express.Router();
const DAL = require('../Controller/dataaccesslayer')
/* GET home page. */
router.get('/books', function(req, res) {
  DAL.getAllBooks(req, res);
});

router.get('/:id', function(req, res) {
  DAL.getBook(req, res);
});
router.post('/add', function(req, res) {
  DAL.addBook(req, res);
});
router.delete('/delete/:id', function(req, res) {
  DAL.deleteBook(req, res);
});
router.put('/update/:id', function(req, res) {
  DAL.updateBook(req, res);
});


module.exports = router;
