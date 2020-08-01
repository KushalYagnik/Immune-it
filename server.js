const express = require('express');
require('dotenv-safe').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pirRouter = require("./routers/immurecords");
const recordRouter = require("./routers/record");
const userRouter = require("./routers/user")
const PORT = process.env.PORT || 8080;
const secret = process.env.JWT_KEY || "123abcxyasdfjlksflkasfiadsfj"
//deployment import
const path = require("path")
////
require('./db/db')

app.use(cors());
app.use(bodyParser.json());
app.use(recordRouter);
app.use(userRouter);
app.use(pirRouter);

//deployment middleware
app.use(express.static(path.join(__dirname, "client", "build")))
/////

app.route('/').get(function(req, res) {
    res.json({});
});

//deployment route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
///

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});