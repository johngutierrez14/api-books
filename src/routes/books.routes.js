const express = require('express');
const routes = express.Router();
const booksControllers = require('../controllers/books.controllers')


routes.get('/', booksControllers.getBooks);
routes.get('/:id', booksControllers.getBook);
routes.post('/', booksControllers.createBook);
routes.delete('/:id', booksControllers.deleteBook);
routes.put('/:id', booksControllers.updateBook);

module.exports = routes;