const jokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', jokesController.getAll);
    app.get('/api/jokes/random', jokesController.getOne);
    app.get('/api/jokes/:_id', jokesController.getOneById);
    app.post('/api/jokes/new', jokesController.createJoke);
    app.put('/api/jokes/update/:_id', jokesController.update);
    app.delete('/api/delete/:_id', jokesController.delete);
}