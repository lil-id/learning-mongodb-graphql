const productModels = require('../models/products');

module.exports = {
    Query: {
        getAllProducts: async () => await productModels.find({})
    },

    Mutation: {
        createProduct: async (_, args) => {
            const product = new productModels(args);
            await product.save();
            return product;
        },
        updateProduct: async (_, args) => {
            return await productModels.findByIdAndUpdate(args._id, args, {new: true});
        },
        deleteProduct: async (_, args) => {
            const deletedProduct = await productModels.findByIdAndDelete(args._id);
            return !!deletedProduct;
        }
    }
};