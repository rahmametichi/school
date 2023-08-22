const express = require("express");
const path = require("path");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
require("dotenv").config();

var allRoutes = require("./routes/routes.js");
// // Routing is Here
app.use("/", allRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use("/", express.static("client/build"));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//     });
// }

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;

app.get("/", function (req, res) {
  res.send("This is from Back-end");
});

app.listen(port, () => {
  console.log(`APP listening at ${port}`);
});

// Connecting to DB

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Successfully connected to Database");
  }
);
