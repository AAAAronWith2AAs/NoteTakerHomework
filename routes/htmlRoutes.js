const { Router } = require("express");
const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname__, "../public/notes.html")); //localhost:3000/notes extension
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname__, "../public/index.html")); //localhost:3000 extension
});

module.exports = router;
