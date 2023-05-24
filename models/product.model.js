import  Mongoose  from "mongoose"
const ProductSchema = Mongoose.Schema({
    partNo: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true}
})

const Product = Mongoose.model("products", ProductSchema);
//users in 9th line is table name
export default Product;