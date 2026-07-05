const mongoose = require("mongoose");
require("dotenv").config();

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Connected to MongoDB");
    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit();
});