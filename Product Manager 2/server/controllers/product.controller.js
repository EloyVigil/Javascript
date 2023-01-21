const { Product } = require('../models/product.models')

module.exports = {

    index: (request, response) => {
        response.json({
            message: "The World Is Yours!"
        });
    },

    createProduct: (request, response) => {
        const { title, price, description } = request.body;
        Product.create({
            title,
            price,
            description
        })
            .then(product => response.json(product))
            .catch(err => response.json(err));
    },

    getAllProducts: (request, response) => {
        Product.find({})
            .then(product => response.json(product))
            .catch(err => response.json(err))
    },

    getProductById: (request, response) => {
        Product.findOne({ _id: request.params._id })
            .then(product => response.json(product))
            .catch(err => response.json(err))
    }

}


