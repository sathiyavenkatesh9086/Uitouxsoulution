import productService from '../services/product.service.js'
const getProduct = async (req, res) => {
    try {
        const params = req.params
        const response = await productService.getProduct(params)
        return res.status(200).send(response);
    } catch (err) {
       return res.status(400).send({
            success: false,
            message: "Failed to retrieve product info",
            error: err.message
        });
    }
}

const getProductType = async (req, res) => {
    try {
        const params = req.params
        const response = await productService.getProductType(params)
        return res.status(200).send(response);
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: "Failed to retrieve product info",
            error: err.message
        });
    }
}

export default {getProduct,getProductType} 