const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://admin:abc1234@cluster1.xcrkx.mongodb.net/?retryWrites=true&w=majority")


//API routes
app.get('/movies', function(req, res) {
    re.send("express is here")
})


app.listen(port, function() {
    console.log("express is running");
}) 