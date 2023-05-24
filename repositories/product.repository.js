import Product from '../models/product.model.js'
const getProduct = async (params) => {
    try {
        return await Product.findOne({
            $or: [
                { partNo: params.keyword },
                { name: params.keyword }
            ]
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        });
    }
}

const getProductType = async (params) => {
    try {
        let query = {}
        if (params.type !== "all") {
            query = { type: params.type }
        }
        const response = await Product.find(query);
        return response
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        });
    }
}

export default { getProduct, getProductType }