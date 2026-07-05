const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
{
    productName: String,

    date: Date,

    quantity: Number,

    revenue: Number
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Sales", salesSchema);