const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db"); // calling db.js

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
