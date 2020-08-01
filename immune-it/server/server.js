const express = require('express');
require('dotenv-safe').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pirRouter = require("./routers/immurecords");
const recordRouter = require("./routers/record");
const userRouter = require("./routers/user")
const PORT = process.env.PORT || 8080;
require('./db/db')

app.use(cors());
app.use(bodyParser.json());
app.use(recordRouter);
app.use(userRouter);
app.use(pirRouter);

app.route('/').get(function(req, res) {
    res.json({});
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});