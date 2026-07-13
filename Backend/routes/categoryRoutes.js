const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} = require("../controllers/categoryController");



// Create Category
router.post("/", authMiddleware, adminMiddleware, createCategory);

// Get All Categories
router.get("/", getCategories);

// Update Category
router.put("/:id", authMiddleware, adminMiddleware, updateCategory);

// Delete Category
router.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);

module.exports = router;