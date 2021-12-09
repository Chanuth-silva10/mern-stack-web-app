const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db"); // calling db.js
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users/", require("./routes/usersRoute"));
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
