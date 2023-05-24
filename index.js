import dotenv from "dotenv";
import express from "express";
import  Mongoose  from "mongoose";
import bodyParser from "body-parser"
import routes from "./routes/product.routes.js"
dotenv.config();

const DB = Mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true}).
then(() => {
    console.log("Database is connected");
    }).catch(err =>  console.error('could not connect to mongo DB', err) );

const app = express();
const Host = process.env.HOST;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
routes(app);
app.get("/", (req, res)=>{
    console.log("Server is running");
    res.send("Server is running");
});

app.listen(Host || 3000, ()=>{
    console.log(`app is running on port ${Host}`);
});