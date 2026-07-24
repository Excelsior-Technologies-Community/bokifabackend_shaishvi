const mongoose = require("mongoose");
const router = require("express").Router();
const {
    getAllOrders, getOrderById, placeOrder, updateOrderStatus, deleteOrder } = require("../controllers/orderController");

router.get("/", getAllOrders);
router.post("/", placeOrder);
router.get("/:id", getOrderById);
router.patch("/:id", updateOrderStatus);
router.delete("/:id", deleteOrder);
module.exports = router;