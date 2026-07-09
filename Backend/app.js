const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.get("/", (req, res) => {
    res.send("hello this is shaishvi !");
})

module.exports = app;