const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getBooksByCategory,
} = require("../controllers/bookController");



const router = express.Router();

// Create Book
router.post("/", authMiddleware, adminMiddleware, upload.single("image"), createBook);

// Get All Books
router.get("/", getAllBooks);

router.get("/category/:categoryId", getBooksByCategory);

// Get Single Book
router.get("/:id", getBookById);

// Update Book
router.put("/:id", authMiddleware, adminMiddleware,upload.single("image"), updateBook);

// Delete Book
router.delete("/:id", authMiddleware,adminMiddleware, deleteBook);



module.exports = router;