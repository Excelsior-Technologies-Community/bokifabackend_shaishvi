const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
              "http://localhost:5175",
        ],
        credentials: true,
    })
);
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const bookRoutes = require("./routes/bookRoute");
const orderRoutes = require("./routes/orderRoute");

app.use("/api", require("./routes/dashboardRoute"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
    res.send("hello this is shaishvi !");
})


module.exports = app;