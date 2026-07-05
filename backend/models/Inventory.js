const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
{
    productName: {
        type: String,
        required: true
    },

    category: {
        type: String
    },

    stock: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    supplier: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Inventory", inventorySchema);