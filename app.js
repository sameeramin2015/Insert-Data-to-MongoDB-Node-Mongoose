const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/stockDB");

// create new schema
const stockSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// create new model
const Items = mongoose.model("Items", stockSchema);

// create new object

const items = new Items ({
    name: "laptop",
    rating: 9,
    review: "high speed laptop"
});

items.save();
