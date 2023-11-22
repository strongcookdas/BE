const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", false);
    }
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("DB CONNECTION SUCCESS")
        }).catch((err) => {
        console.log("DB CONNECT FAIL");
    })
}

module.exports = connect;