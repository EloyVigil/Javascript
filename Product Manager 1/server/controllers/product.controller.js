const { Product } = require('../models/product.models')

module.exports.index = (request, response) => {
    response.json({
        message: "The World Is Yours!"
    });
}

    module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}


