const mongoose = require('mongoose')

const MONGODB_URL= process.env.DB_URL

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connected!')).catch(err => {
<<<<<<< HEAD
    console.log("DB Connection Error: "+ err);
=======
    console.log("DB Connection Error: ");
>>>>>>> 1da0335d95d1aed4c2dbe357f07ad42219f463e8
    });



// mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true,  useNewUrlParser: true })