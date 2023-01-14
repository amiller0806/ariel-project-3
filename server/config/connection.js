const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/deploy-skincare",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,

    }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
    });



module.exports = mongoose.connection;
