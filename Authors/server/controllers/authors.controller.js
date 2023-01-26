const { Author } = require('../models/authors.model');

module.exports = {

    createAuthor: (request, response) => {
        const {fullName} = request.body;
        Author.create({
            fullName
        })
        .then(author => response.json(author))
        .catch(err => response.status(500).json(err));
    },

    getAllAuthors: (request, response) => {
        Author.find({})
            .then(author => response.json(author))
            .catch(err => response.json({message: "this is not working", error: err}))
    },

    getAuthorById: (request, response) => {
        Author.findById({ _id: request.params._id })
            .then(author => response.json(author))
            .catch(err => response.json(err))
    },

    updateAuthor: (request, response) => {
        Author.findByIdAndUpdate({ _id: request.params._id }, request.body, { new: true, runValidators: true })
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(err => response.status(500).json(err))
    },

    deleteAuthor: (request, response) => {
        Author.findByIdAndDelete({ _id: request.params._id })
            .then(deletedAuthor => response.json(deletedAuthor))
            .catch(err => response.json(err))
    }

}