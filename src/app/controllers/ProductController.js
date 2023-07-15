const Product = require('../models/product')

class ProductControllor {
    async getAllProduct(req, res) {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.json(error);
            return; // Dừng thực thi tiếp theo
        }
    }
}

module.exports = new ProductControllor 