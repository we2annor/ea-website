const express = require("express");
const comppression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log(`Request endpoint : ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const api = require("./routes/routes");

app.use("/api/v1/", api);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("*", (req, res) => {
  res.status(200).json({ msg: "Catch All" });
});
app.use(comppression());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
