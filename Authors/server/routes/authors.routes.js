const AuthorController = require('../controllers/authors.controller');

module.exports = function(app) {

    app.get('/authors', AuthorController.getAllAuthors);
    app.get('/author/:_id' , AuthorController.getAuthorById);
    app.post('/author/create', AuthorController.createAuthor);
    app.put('/author/edit/:_id', AuthorController.updateAuthor);
    app.delete('/delete/author/:_id', AuthorController.deleteAuthor);
}