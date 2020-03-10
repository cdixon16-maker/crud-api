const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    Title: {type: String, required: true},
    Author: {type: String, required: true}
})

module.exports = mongoose.model(`Books`, booksSchema, "Books");