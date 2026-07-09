const express = require("express");
const router = express.Router();

const {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} = require("../controllers/categoryController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Category
router.post("/", authMiddleware, createCategory);

// Get All Categories
router.get("/", getCategories);

// Update Category
router.put("/:id", authMiddleware, updateCategory);

// Delete Category
router.delete("/:id", authMiddleware, deleteCategory);

module.exports = router;