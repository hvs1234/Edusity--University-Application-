const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = await new User(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.newpassword) {
    let user = await User.findOne(req.body).select([
      "-newpassword",
      "-confirmpassword",
    ]);
    if (user) {
      res.send(user);
    } else {
      res.send({result:"No user found"});
    }
  } else {
    res.send(JSON.stringify("No user found"));
  }
});

app.listen(4500);
