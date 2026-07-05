const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
{
    productName: String,

    forecastDays: Number,

    prediction: Array,

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Prediction", predictionSchema);