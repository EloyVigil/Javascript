const Joke = require('../models/jokes.models');

module.exports = {

    getAll(req, res) {
        console.log("Getting all jokes")
        Joke.find()
            .then(joke => { res.json(joke) })
            .catch(err => { res.json(err) })
    },

    getOne(req, res) {
        console.log("Getting 1 joke")
        Joke.findOne()
            .then(joke => { res.json(joke) })
            .catch(err => { res.json({ message: 'Something went wrong with getOne', error: err }) })
    },

    getOneById(req, res) {
        console.log("Getting 1 joke")
        Joke.findById( {_id: req.params._id} )
            .then(joke => { res.json({joke:joke}) })
            .catch(err => { res.json({ message: 'Something went wrong with getOneById', error: err }) })
    },

    createJoke(req, res) {
        console.log("Created new joke")
        Joke.create(req.body)
            .then(joke => { res.json({joke}) })
            .catch(err => { res.json({ message: 'Something went wrong with createJoke', error: err }) })
    },

    update(req, res) {
        console.log("Updated the joke")
        Joke.findByIdAndUpdate({ _id: req.params._id }, req.body,
            { new: true, runValidators: true })
            .then(joke => { res.json({joke: joke}) })
            .catch(err => { res.json({ message: 'Something went wrong with update', error: err }) }) 
    },

    delete(req, res) {
        console.log("Deleted that darn joke")
        Joke.findByIdAndDelete({ _id: req.params._id })
            .then(joke => { res.json({joke: joke}) })
            .catch(err => { res.json({ message: 'Something went wrong with delete', error: err }) })
    }

}