const express = require("express");
const app = express();

const books = ['book1', 'book2', 'book3']

app.get('/books', (req, res)=>{
    res.send(books)
})

app.listen(4000, ()=>console.log('Serving is Working'))