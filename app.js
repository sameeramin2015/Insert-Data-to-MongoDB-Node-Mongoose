const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
// creating new schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// creating new model

const Fruit = mongoose.model("Fruit", fruitSchema);
 // creating objects

 const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "tasty fruit"
 });

 fruit.save();