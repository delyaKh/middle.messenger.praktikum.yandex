const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("images"));

app.get("/static", (req, res) => {
  res.render("static");
});

app.get("/dynamic", (req, res) => {
  imageList = [];
  imageList.push({ src: "avatar.png", name: "avatar" });
  res.render("dynamic", { imageList: imageList });
});

app.listen(PORT, function () {
  console.log(`Server http://localhost:${PORT}`);
});
