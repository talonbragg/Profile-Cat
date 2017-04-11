var model = require(model/model.js);
var express = require("express");
var app = express();
// Static Files
app.use(express.static('assets'));

//Main Index file
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  model.mainObjSchema => (mainProfileObj);
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1", (req, res) => {
  console.log("=============== Profile Cat Initiated ===============");
});
