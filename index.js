const mongoose = require("mongoose");
const express = require("express");
const port = process.env.PORT || 3010;
const Routerapp = require("./src/Router/router-redux");
const router = require("./src/Router/router-redux");
const config = require("./src/config/mongodbconnect");
const app = express();

mongoose
  .connect(config.Mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    "Connection is Successful";
  })
  .catch((err) => {
    "Unsuccessful Connection";
  });

app.use(express.json());
app.use("/reduxapi", Routerapp);

app.listen(port, () => {
  console.log(`Server will start at ${port}`);
});
module.exports = router;
