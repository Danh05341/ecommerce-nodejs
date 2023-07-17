const Product = require('../app/models/product');

class productService {

    async getAllProduct({ skip, limit }) {
            // Truy vấn lấy sản phẩm theo phân trang
            const products = await Product.findAll({
                where: {
                    offset: skip,
                    limit: limit,
                }
                
              });
            if(!product) throw new Error('error')
            return products
    }

    async insertProduct({name, description, price, sale_price, image_url, quantity, status}){
        const newProduct = await Product.create({name, description, price, sale_price, image_url, quantity, status})
        if(!newProduct) throw new Error("Insert product failed")
        return newProduct
    }
}
module.exports = new productService