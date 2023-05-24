import productRepository from '../repositories/product.repository.js'

const getProduct = async (params) => {
    try {
        const product = await productRepository.getProduct(params)
        if (product) {
            return {
                status: 1,
                data: product
            }
        }
        else {
            return {
                status: 0,
                data: 'Product not found'
            }
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        });
    }

}

const getProductType = async (params) => {
    try {
        const type = await productRepository.getProductType(params)
        if (type.length) {
            return {
                status: 1,
                data: type
            }
        }
        else {
            return {
                status: 0,
                data: 'Product not found'
            }
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        });
    }
}

    export default { getProduct , getProductType }