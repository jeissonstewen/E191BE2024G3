const mongoose = require('mongoose');
let conectionDb = "mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E191?retryWrites=true&w=majority&appName=UTS"
mongoose.connect(conectionDb)
    .then(() => console.log("conectado a mongo"))
    .catch(error => console.log(error))

module.exports = mongoose