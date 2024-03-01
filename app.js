const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user.js");
const path = require("path");

main()
.then(() => {
    console.log("Connection Established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/authentication');
}

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));


//registration
app.get("/registration", (req, res) => {
    res.render("registration.ejs")
})

app.post("/login", (req, res) => {
    let {name, Email, password} = req.body;
    let newUser = {name, Email, password};
    let final = User(newUser);
    if(!req.body){
        res.redirect("/login");
    } else{
        res.redirect("/login")
    }
    final.save()
        .then(() => {
            console.log("data was inserted");
        })
        .catch(err => {
            console.log(err);
        })


})

app.get("/login", (req, res) => {
    res.render("login.ejs")
})

app.post("/Home", async (req, res) => {
    let {name, password} = req.body;
    let availe = await User.find({name: name, password: password});
    if (!availe.length){
        res.redirect("/registration")
    } else {
        res.redirect("/")
    }
})



app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.listen(8080, () => {
    console.log("server listing on port no 8080");
});