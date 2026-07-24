const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        books: [
            {
                book: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Book",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                }
            }
        ],
        totalAmount: {
            type: Number,
            required: true
         
        },
        status: {
            type: String,
            enum: ["pending", "completed", "cancelled", "confirmed", "Shipped", "Delivered",],
            default: "pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);