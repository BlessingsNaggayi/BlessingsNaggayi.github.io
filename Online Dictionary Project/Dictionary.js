const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const word = require("./word");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  word.getMeaning(req, res);
});

app.listen(port, () => console.log(`Server is running on : ${port}`));
