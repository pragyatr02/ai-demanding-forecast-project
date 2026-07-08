const runPrediction = require("../services/predictionService");

exports.predictDemand = async (req, res) => {
    try {
        const result = await runPrediction();

        res.json({
            success: true,
            forecast: result
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};