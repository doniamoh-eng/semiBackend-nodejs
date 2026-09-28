const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://doniamoh203:donia2003@cluster0.slpnp.mongodb.net/",
).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
})