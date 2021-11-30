var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");



var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));



var user_base_schema = new mongoose.Schema({
	name: String,
	email: String,
	phoneNumber: String,
});

var user_base = mongoose.model("user_bases", user_base_schema);

mongoose.connect(
	"mongodb+srv://medbox:Asdfgh123@cluster0.bfr3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ dbName: "MedBox" },
	function (err, res) {
		if (err) {
			console.log("mongo DB server not connected");
			console.log(err);
		} else {
			console.log("CONNECTED TO DB");
		}
	}
);





app.get("/", function (req, res) {
    res.render("index-leadgen-1.ejs");
});

app.get("/thankyou", function (req,res) {
    res.render("thankyoupage.ejs");
})

app.post("/form/user", function (req, res) {
    console.log(req.body);
    var nameSend = req.body.cs2Name;
    var emailSend = req.body.cs2Email;
    var phoneNumberSend = req.body.cs2PhoneNum;
    user_base.create({ name : nameSend, email: emailSend, phoneNumber: phoneNumberSend})
    .then((data)=>{
        res.send("success");
    }).catch((err)=>{
        res.send("Error Occurred. Please Try Again.")
    })
});





app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});
