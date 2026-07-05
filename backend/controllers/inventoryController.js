const Inventory = require("../models/Inventory");

// Add Product
exports.addProduct = async (req, res) => {
    try {
        const product = await Inventory.create(req.body);

        res.status(201).json({
            success: true,
            product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Inventory.find();

        res.json({
            success: true,
            products
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update Product
exports.updateProduct = async (req, res) => {
    try {

        const product = await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {

        await Inventory.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Product Deleted"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};