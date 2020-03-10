const mongoose = require(`mongoose`);
require("dotenv").config("");
const Books = require('../models/books')
mongoose.connect(process.env.ATLAS_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(console.log('Connected Successfully'))
.catch(err => {console.log(err)})

const getAllBooks = (req, res) => {
    Books.find({}, (err,book) => {
        if(err){
            res.status(500).json(err)
        }
        res.status(200).json(book)
    })

}
const getBook = (req, res) => {
   Books.findById(req.params.id, (err, book) => {
    if(err) {
        res.status(500).json(err)
    }
    res.status(200).json(book)

   })
}
const addBook = (req, res) => {
    const book = new Books({
        Title: req.body.Title,
        Author: req.body.Author
    });
    book.save().then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    }); 
}

    
const deleteBook = (req, res) => {
        Books.findByIdAndDelete(req.params.id, (err, book) => {
         if(err) {
             res.status(500).json(err)
         }
         res.status(200).json(book)
     
        });
}
const updateBook = (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
}


 module.exports={getAllBooks, getBook, addBook, deleteBook, updateBook};