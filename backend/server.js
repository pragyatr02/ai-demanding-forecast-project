const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const connectDB = require("./config/db");

dotenv.config();

(async () => {
    await connectDB();
})();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/predict", predictionRoutes);
app.use("/api/upload", uploadRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);

app.get("/", (req, res) => {
    res.send("AI Demand Forecast Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});