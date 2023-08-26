require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const add = require("./routes/adduser")
const bodyParser = require('body-parser')
// database connection
connection();

// middlewares
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/add",add)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
