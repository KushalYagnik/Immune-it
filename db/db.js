const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true
// })

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://testUser1:testUser1@myfirstmongocluster.jnsl9.mongodb.net/testdb1?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
