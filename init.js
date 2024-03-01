const mongoose = require("mongoose");
const User = require("./models/user.js");

main()
.then(() => {
    console.log("Connection Established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/authentication');
}

const allUser = ([
    {
        name: "chirag",
        Email: "chirag@gmail.com",
        password: "chirag@123"
    },
    {
        name: "kirit",
        Email: "kirit@gmail.com",
        password: "kirit@123"
    },
    {
        name: "om",
        Email: "om@gmail.com",
        password: "om@123"
    },
    {
        name: "zeel",
        Email: "zeel@gmail.com",
        password: "zeek@123"
    }
]);

User.insertMany(allUser);

