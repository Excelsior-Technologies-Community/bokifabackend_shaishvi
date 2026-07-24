const Order = require("../models/orderModel");

// Get all orders

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("books.book");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user").populate("books.book");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// place order
const placeOrder = async (req, res) => {
    try {
        const { user, books, totalAmount } = req.body;

        const order = await Order.create({
            user,
            books,
            totalAmount,
        });

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
// update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// delete order
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllOrders,
    getOrderById,
    placeOrder,
    updateOrderStatus,
    deleteOrder,
};
