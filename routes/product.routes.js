import userController from "../controller/product.controller.js";

export default function userRoutes(app){
app.get("/product/:keyword", userController.getProduct);
app.get("/product/list/:type", userController.getProductType);
}