const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Book = require("../models/bookModel");
const Category = require("../models/categoryModel");
const { model } = require("mongoose");

router.get("/dashboard", async (req, res) => {
    try {
        const users = await User.countDocuments();
        const books = await Book.countDocuments();
        const categories = await Category.countDocuments();
        res.status(200).json({ users, books, categories });
    } catch (error) {
        res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
    }
});
module.exports = router;