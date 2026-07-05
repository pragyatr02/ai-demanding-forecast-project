const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require("../controllers/inventoryController");

router.post("/", auth, addProduct);

router.get("/", auth, getProducts);

router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);

module.exports = router;