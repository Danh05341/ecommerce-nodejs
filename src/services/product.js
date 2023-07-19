const Product = require('../app/models/product');

class productService {

    async getAllProduct({ skip, limit }) {
        // Truy vấn lấy sản phẩm theo phân trang
        try {
            const products = await Product.findAll({
                offset: skip,
                limit: limit
            });
            const totalProduct = await Product.count()
            const totalPage = Math.ceil(totalProduct / limit)
            return {
                products,
                totalPage
            }
        } catch (error) {
            throw error
        }
    }

    async getProductById(id) {
        try {
            const product = await Product.findByPk(id)
            if (!product) {
                const error = new Error('Product does not exist');
                error.statusCode = 404
                throw error
            }
            return product
        } catch (error) {
            throw error
        }
    }


    async insertProduct({ name, description, price, sale_price, image_url, quantity, status }) {
        try {
            const newProduct = await Product.create({ name, description, price, sale_price, image_url, quantity,status })
            if (!newProduct) {
                const error = new Error("Insert product failed")
                error.statusCode = 400
               throw error
            }
            return newProduct
        } catch (error) {
            throw error
        }
    }

    async updateProduct(id, updatedData) {
        try {
            const product = await Product.findByPk(id)
            if(!product) {
                const error = new Error('Product does not exist')
                error.statusCode = 404
                throw error
            }
            await product.update(updatedData)
            return product
        } catch (error) {
            throw error
        }
    }
    
    async deleteProduct(id) {
        try {
            const product = await Product.findByPk(id)
            if(!product) {
                const error = new Error('Product does not exist')
                error.statusCode = 404
                throw error
            }
            await product.destroy()
            return product
        } catch (error) {
            throw error
        }
    }
    
}
module.exports = new productService