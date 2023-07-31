const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        requried: true,
    },
    price: {
        type: Number,
        requried: true,
    },
    description: {
        type: String,
        requried: true,
    },
    imageUrl: {
        type: String,
        requried: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);
