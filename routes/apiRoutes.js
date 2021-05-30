const router = require("express").Router();
const db = require("../db/db");
const { get } = require("./htmlRoutes");

router.get("/notes", (req, res) => {
  db.getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  db.addNotes(req.body)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
