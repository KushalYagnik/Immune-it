const express = require('express');
const mongoose = require('mongoose')

require('dotenv-safe').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pirRouter = require("./routers/immurecords");
const recordRouter = require("./routers/record");
const userRouter = require("./routers/user");
const { Mongoose } = require('mongoose');
const PORT = process.env.PORT || 8080;

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://testUser1:testUser1@myfirstmongocluster.jnsl9.mongodb.net/testdb1?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true
// })

app.use(cors());
app.use(bodyParser.json());
app.use(recordRouter);
app.use(userRouter);
app.use(pirRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build/'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.route('/').get(function(req, res) {
    res.json({});
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});