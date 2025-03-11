require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./server/routes/AuthRoute");

const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const { OrdersModel } = require('./models/OrdersModel');

const { MONGO_URL, PORT } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public")); // Serve static files like images

// MongoDB Connection
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/", authRoute);
app.get("/", (req, res) => {
    res.send("Welcome to the Stock Trading API!");
});

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();
        res.send("Order saved successfully!");
    } catch (error) {
        res.status(500).send("Error saving order");
    }
});
